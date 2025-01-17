/*
 * Copyright 2018 Uber Technologies, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @module geojson2h3
 */

const FEATURE = 'Feature';
const FEATURE_COLLECTION = 'FeatureCollection';
const POLYGON = 'Polygon';
const MULTI_POLYGON = 'MultiPolygon';

// ----------------------------------------------------------------------------
// Private utilities

/**
 * Utility for efficient flattening of arrays. This mutates input,
 * flattening into the first array in the list.
 * @private
 * @param {String[][]} arrays Arrays to flatten
 * @return {String} Single array with all values from all input arrays
 */
function flatten(arrays) {
    let out = null;
    for (let i = 0; i < arrays.length; i++) {
        if (out !== null) {
            for (let j = 0; j < arrays[i].length; j++) {
                out.push(arrays[i][j]);
            }
        } else {
            out = arrays[i];
        }
    }
    return out;
}

/**
 * Convert a GeoJSON feature collection to a set of hexagons. Only hexagons whose centers
 * fall within the features will be included.
 * @private
 * @param  {Object} feature     GeoJSON FeatureCollection
 * @param  {Number} resolution  Resolution of hexagons, between 0 and 15
 * @return {String[]}           H3 indexes
 */
function featureCollectionToH3Set(featureCollection, resolution) {
    const { features } = featureCollection;
    if (!features) {
        throw new Error('No features found');
    }
    return flatten(features.map(feature => featureToH3Set(feature, resolution)));
}

// ----------------------------------------------------------------------------
// Public API functions

/**
 * Convert a GeoJSON feature to a set of hexagons. Only hexagons whose centers
 * fall within the feature will be included. Note that conversion from GeoJSON
 * is lossy; the resulting hexagon set only approximately describes the original
 * shape, at a level of precision determined by the hexagon resolution.
 * @static
 * @param  {Object} feature     Input GeoJSON: type must be either `Feature` or
 *                              `FeatureCollection`, and geometry type must be
 *                              either `Polygon` or `MultiPolygon`
 * @param  {Number} resolution  Resolution of hexagons, between 0 and 15
 * @return {String[]}           H3 indexes
 */
function featureToH3Set(feature, resolution) {
    const { type, geometry } = feature;
    const geometryType = geometry && geometry.type;

    if (type === FEATURE_COLLECTION) {
        return featureCollectionToH3Set(feature, resolution);
    }

    if (type !== FEATURE) {
        throw new Error(`Unhandled type: ${type}`);
    }
    if (geometryType !== POLYGON && geometryType !== MULTI_POLYGON) {
        throw new Error(`Unhandled geometry type: ${geometryType}`);
    }

    // Normalize to MultiPolygon
    const polygons = geometryType === POLYGON ? [geometry.coordinates] : geometry.coordinates;

    // Polyfill each polygon and flatten the results
    return flatten(polygons.map(polygon => h3.polyfill(polygon, resolution, true)));
}

/**
 * Convert a single H3 hexagon to a `Polygon` feature
 * @static
 * @param  {String} hexAddress   Hexagon address
 * @param  {Object} [properties] Optional feature properties
 * @return {Feature}             GeoJSON Feature object
 */
function h3ToFeature(hexAddress, properties = {}) {
    // Wrap in an array for a single-loop polygon
    const coordinates = [h3.h3ToGeoBoundary(hexAddress, true)];
    return {
        type: FEATURE,
        id: hexAddress,
        properties,
        geometry: {
            type: POLYGON,
            coordinates
        }
    };
}

/**
 * Convert a set of hexagons to a GeoJSON `Feature` with the set outline(s). The
 * feature's geometry type will be either `Polygon` or `MultiPolygon` depending on
 * the number of outlines required for the set.
 *
 * ![h3SetToFeature](./doc-files/h3SetToFeature.png)
 * @static
 * @param  {String[]} hexagons   Hexagon addresses
 * @param  {Object} [properties] Optional feature properties
 * @return {Feature}             GeoJSON Feature object
 */
function h3SetToFeature(hexagons, properties = {}) {
    const polygons = h3.h3SetToMultiPolygon(hexagons, true);
    // See if we can unwrap to a simple Polygon.
    const isMultiPolygon = polygons.length > 1;
    const type = isMultiPolygon ? MULTI_POLYGON : POLYGON;
    // MultiPolygon, single polygon, or empty array for an empty hex set
    const coordinates = isMultiPolygon ? polygons : polygons[0] || [];
    return {
        type: FEATURE,
        properties,
        geometry: {
            type,
            coordinates
        }
    };
}

/**
 * Convert a set of hexagons to a GeoJSON `MultiPolygon` feature with the
 * outlines of each individual hexagon.
 *
 * ![h3SetToMultiPolygonFeature](./doc-files/h3SetToFeatureCollection.png)
 * @static
 * @param  {String[]} hexagons   Hexagon addresses
 * @param  {Object} [properties] Optional feature properties
 * @return {Feature}             GeoJSON Feature object
 */
function h3SetToMultiPolygonFeature(hexagons, properties = {}) {
    const coordinates = hexagons.map(hexAddress =>
        // Wrap in an array for a single-loop polygon
        [h3.h3ToGeoBoundary(hexAddress, { geoJson: true })]
    );
    return {
        type: FEATURE,
        properties,
        geometry: {
            type: MULTI_POLYGON,
            coordinates
        }
    };
}

/**
 * Convert a set of hexagons to a GeoJSON `FeatureCollection` with each hexagon
 * in a separate `Polygon` feature with optional properties.
 *
 * ![h3SetToFeatureCollection](./doc-files/h3SetToFeatureCollection.png)
 * @static
 * @param  {String[]} hexagons  Hexagon addresses
 * @param  {Function} [getProperties] Optional function returning properties
 *                                    for a hexagon: f(hexAddress) => Object
 * @return {FeatureCollection}        GeoJSON FeatureCollection object
 */
function h3SetToFeatureCollection(hexagons, getProperties) {
    const features = [];
    for (let i = 0; i < hexagons.length; i++) {
        const hexAddress = hexagons[i];
        const properties = getProperties ? getProperties(hexAddress) : {};
        features.push(h3ToFeature(hexAddress, properties));
    }
    return {
        type: FEATURE_COLLECTION,
        features
    };
}