parcelRequire = function(e, r, t, n) { var i, o = "function" == typeof parcelRequire && parcelRequire,
        u = "function" == typeof require && require;

    function f(t, n) { if (!r[t]) { if (!e[t]) { var i = "function" == typeof parcelRequire && parcelRequire; if (!n && i) return i(t, !0); if (o) return o(t, !0); if (u && "string" == typeof t) return u(t); var c = new Error("Cannot find module '" + t + "'"); throw c.code = "MODULE_NOT_FOUND", c } p.resolve = function(r) { return e[t][1][r] || r }, p.cache = {}; var l = r[t] = new f.Module(t);
            e[t][0].call(l.exports, p, l, l.exports, this) } return r[t].exports;

        function p(e) { return f(p.resolve(e)) } } f.isParcelRequire = !0, f.Module = function(e) { this.id = e, this.bundle = f, this.exports = {} }, f.modules = e, f.cache = r, f.parent = o, f.register = function(r, t) { e[r] = [function(e, r) { r.exports = t }, {}] }; for (var c = 0; c < t.length; c++) try { f(t[c]) } catch (e) { i || (i = e) }
    if (t.length) { var l = f(t[t.length - 1]); "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function() { return l }) : n && (this[n] = l) } if (parcelRequire = f, i) throw i; return f }({
    "eMRn": [function(require, module, exports) {
        "use strict";

        function r(r, e) { if (!(r instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function e(r, e) { for (var t = 0; t < e.length; t++) { var a = e[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(r, a.key, a) } }

        function t(r, t, a) { return t && e(r.prototype, t), a && e(r, a), r } Object.defineProperty(exports, "__esModule", { value: !0 }), exports.MapMatrix = void 0;
        var a = function() {
            function e() { r(this, e), this.array = new Float32Array(16) } return t(e, [{ key: "setSize", value: function(r, e, t) { return this.array.set([2 / r, 0, 0, 0, 0, -2 / e, 0, 0, 0, 0, 0, 0, -1, 1, 0, 1]), this } }, { key: "translateMatrix", value: function(r, e) { var t = this.array; return t[12] += t[0] * r + t[4] * e, t[13] += t[1] * r + t[5] * e, t[14] += t[2] * r + t[6] * e, t[15] += t[3] * r + t[7] * e, this } }, { key: "scaleMatrix", value: function(r) { var e = this.array; return e[0] *= r, e[1] *= r, e[2] *= r, e[3] *= r, e[4] *= r, e[5] *= r, e[6] *= r, e[7] *= r, this } }]), e }();
        exports.MapMatrix = a;
    }, {}],
    "f3z0": [function(require, module, exports) {
        var define;
        var global = arguments[3];
        var t, i = arguments[3];
        ! function(i, e) { "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof t && t.amd ? t(["exports"], e) : e(i.L = {}) }(this, function(t) { "use strict";

            function i(t) { var i, e, n, o; for (e = 1, n = arguments.length; e < n; e++)
                    for (i in o = arguments[e]) t[i] = o[i]; return t } var e = Object.create || function() {
                function t() {} return function(i) { return t.prototype = i, new t } }();

            function n(t, i) { var e = Array.prototype.slice; if (t.bind) return t.bind.apply(t, e.call(arguments, 1)); var n = e.call(arguments, 2); return function() { return t.apply(i, n.length ? n.concat(e.call(arguments)) : arguments) } } var o = 0;

            function s(t) { return t._leaflet_id = t._leaflet_id || ++o, t._leaflet_id }

            function r(t, i, e) { var n, o, s, r; return r = function() { n = !1, o && (s.apply(e, o), o = !1) }, s = function() { n ? o = arguments : (t.apply(e, arguments), setTimeout(r, i), n = !0) } }

            function a(t, i, e) { var n = i[1],
                    o = i[0],
                    s = n - o; return t === n && e ? t : ((t - o) % s + s) % s + o }

            function h() { return !1 }

            function u(t, i) { var e = Math.pow(10, void 0 === i ? 6 : i); return Math.round(t * e) / e }

            function l(t) { return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "") }

            function c(t) { return l(t).split(/\s+/) }

            function _(t, i) { for (var n in Object.prototype.hasOwnProperty.call(t, "options") || (t.options = t.options ? e(t.options) : {}), i) t.options[n] = i[n]; return t.options }

            function d(t, i, e) { var n = []; for (var o in t) n.push(encodeURIComponent(e ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o])); return (i && -1 !== i.indexOf("?") ? "&" : "?") + n.join("&") } var p = /\{ *([\w_-]+) *\}/g;

            function m(t, i) { return t.replace(p, function(t, e) { var n = i[e]; if (void 0 === n) throw new Error("No value provided for variable " + t); return "function" == typeof n && (n = n(i)), n }) } var f = Array.isArray || function(t) { return "[object Array]" === Object.prototype.toString.call(t) };

            function g(t, i) { for (var e = 0; e < t.length; e++)
                    if (t[e] === i) return e; return -1 } var v = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

            function y(t) { return window["webkit" + t] || window["moz" + t] || window["ms" + t] } var x = 0;

            function w(t) { var i = +new Date,
                    e = Math.max(0, 16 - (i - x)); return x = i + e, window.setTimeout(t, e) } var P = window.requestAnimationFrame || y("RequestAnimationFrame") || w,
                b = window.cancelAnimationFrame || y("CancelAnimationFrame") || y("CancelRequestAnimationFrame") || function(t) { window.clearTimeout(t) };

            function T(t, i, e) { if (!e || P !== w) return P.call(window, n(t, i));
                t.call(i) }

            function M(t) { t && b.call(window, t) } var z = { extend: i, create: e, bind: n, lastId: o, stamp: s, throttle: r, wrapNum: a, falseFn: h, formatNum: u, trim: l, splitWords: c, setOptions: _, getParamString: d, template: m, isArray: f, indexOf: g, emptyImageUrl: v, requestFn: P, cancelFn: b, requestAnimFrame: T, cancelAnimFrame: M };

            function C() {} C.extend = function(t) { var n = function() { this.initialize && this.initialize.apply(this, arguments), this.callInitHooks() },
                    o = n.__super__ = this.prototype,
                    s = e(o); for (var r in s.constructor = n, n.prototype = s, this) Object.prototype.hasOwnProperty.call(this, r) && "prototype" !== r && "__super__" !== r && (n[r] = this[r]); return t.statics && (i(n, t.statics), delete t.statics), t.includes && (! function(t) { if ("undefined" == typeof L || !L || !L.Mixin) return;
                    t = f(t) ? t : [t]; for (var i = 0; i < t.length; i++) t[i] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", (new Error).stack) }(t.includes), i.apply(null, [s].concat(t.includes)), delete t.includes), s.options && (t.options = i(e(s.options), t.options)), i(s, t), s._initHooks = [], s.callInitHooks = function() { if (!this._initHooksCalled) { o.callInitHooks && o.callInitHooks.call(this), this._initHooksCalled = !0; for (var t = 0, i = s._initHooks.length; t < i; t++) s._initHooks[t].call(this) } }, n }, C.include = function(t) { return i(this.prototype, t), this }, C.mergeOptions = function(t) { return i(this.prototype.options, t), this }, C.addInitHook = function(t) { var i = Array.prototype.slice.call(arguments, 1),
                    e = "function" == typeof t ? t : function() { this[t].apply(this, i) }; return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(e), this }; var S = { on: function(t, i, e) { if ("object" == typeof t)
                        for (var n in t) this._on(n, t[n], i);
                    else
                        for (var o = 0, s = (t = c(t)).length; o < s; o++) this._on(t[o], i, e); return this }, off: function(t, i, e) { if (t)
                        if ("object" == typeof t)
                            for (var n in t) this._off(n, t[n], i);
                        else
                            for (var o = 0, s = (t = c(t)).length; o < s; o++) this._off(t[o], i, e);
                    else delete this._events; return this }, _on: function(t, i, e) { this._events = this._events || {}; var n = this._events[t];
                    n || (n = [], this._events[t] = n), e === this && (e = void 0); for (var o = { fn: i, ctx: e }, s = n, r = 0, a = s.length; r < a; r++)
                        if (s[r].fn === i && s[r].ctx === e) return;
                    s.push(o) }, _off: function(t, i, e) { var n, o, s; if (this._events && (n = this._events[t]))
                        if (i) { if (e === this && (e = void 0), n)
                                for (o = 0, s = n.length; o < s; o++) { var r = n[o]; if (r.ctx === e && r.fn === i) return r.fn = h, this._firingCount && (this._events[t] = n = n.slice()), void n.splice(o, 1) } } else { for (o = 0, s = n.length; o < s; o++) n[o].fn = h;
                            delete this._events[t] } }, fire: function(t, e, n) { if (!this.listens(t, n)) return this; var o = i({}, e, { type: t, target: this, sourceTarget: e && e.sourceTarget || this }); if (this._events) { var s = this._events[t]; if (s) { this._firingCount = this._firingCount + 1 || 1; for (var r = 0, a = s.length; r < a; r++) { var h = s[r];
                                h.fn.call(h.ctx || this, o) } this._firingCount-- } } return n && this._propagateEvent(o), this }, listens: function(t, i) { var e = this._events && this._events[t]; if (e && e.length) return !0; if (i)
                        for (var n in this._eventParents)
                            if (this._eventParents[n].listens(t, i)) return !0; return !1 }, once: function(t, i, e) { if ("object" == typeof t) { for (var o in t) this.once(o, t[o], i); return this } var s = n(function() { this.off(t, i, e).off(t, s, e) }, this); return this.on(t, i, e).on(t, s, e) }, addEventParent: function(t) { return this._eventParents = this._eventParents || {}, this._eventParents[s(t)] = t, this }, removeEventParent: function(t) { return this._eventParents && delete this._eventParents[s(t)], this }, _propagateEvent: function(t) { for (var e in this._eventParents) this._eventParents[e].fire(t.type, i({ layer: t.target, propagatedFrom: t.target }, t), !0) } };
            S.addEventListener = S.on, S.removeEventListener = S.clearAllEventListeners = S.off, S.addOneTimeEventListener = S.once, S.fireEvent = S.fire, S.hasEventListeners = S.listens; var Z = C.extend(S);

            function E(t, i, e) { this.x = e ? Math.round(t) : t, this.y = e ? Math.round(i) : i } var k = Math.trunc || function(t) { return t > 0 ? Math.floor(t) : Math.ceil(t) };

            function B(t, i, e) { return t instanceof E ? t : f(t) ? new E(t[0], t[1]) : null == t ? t : "object" == typeof t && "x" in t && "y" in t ? new E(t.x, t.y) : new E(t, i, e) }

            function A(t, i) { if (t)
                    for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++) this.extend(e[n]) }

            function I(t, i) { return !t || t instanceof A ? t : new A(t, i) }

            function O(t, i) { if (t)
                    for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++) this.extend(e[n]) }

            function R(t, i) { return t instanceof O ? t : new O(t, i) }

            function N(t, i, e) { if (isNaN(t) || isNaN(i)) throw new Error("Invalid LatLng object: (" + t + ", " + i + ")");
                this.lat = +t, this.lng = +i, void 0 !== e && (this.alt = +e) }

            function D(t, i, e) { return t instanceof N ? t : f(t) && "object" != typeof t[0] ? 3 === t.length ? new N(t[0], t[1], t[2]) : 2 === t.length ? new N(t[0], t[1]) : null : null == t ? t : "object" == typeof t && "lat" in t ? new N(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : void 0 === i ? null : new N(t, i, e) } E.prototype = { clone: function() { return new E(this.x, this.y) }, add: function(t) { return this.clone()._add(B(t)) }, _add: function(t) { return this.x += t.x, this.y += t.y, this }, subtract: function(t) { return this.clone()._subtract(B(t)) }, _subtract: function(t) { return this.x -= t.x, this.y -= t.y, this }, divideBy: function(t) { return this.clone()._divideBy(t) }, _divideBy: function(t) { return this.x /= t, this.y /= t, this }, multiplyBy: function(t) { return this.clone()._multiplyBy(t) }, _multiplyBy: function(t) { return this.x *= t, this.y *= t, this }, scaleBy: function(t) { return new E(this.x * t.x, this.y * t.y) }, unscaleBy: function(t) { return new E(this.x / t.x, this.y / t.y) }, round: function() { return this.clone()._round() }, _round: function() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this }, floor: function() { return this.clone()._floor() }, _floor: function() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this }, ceil: function() { return this.clone()._ceil() }, _ceil: function() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this }, trunc: function() { return this.clone()._trunc() }, _trunc: function() { return this.x = k(this.x), this.y = k(this.y), this }, distanceTo: function(t) { var i = (t = B(t)).x - this.x,
                        e = t.y - this.y; return Math.sqrt(i * i + e * e) }, equals: function(t) { return (t = B(t)).x === this.x && t.y === this.y }, contains: function(t) { return t = B(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y) }, toString: function() { return "Point(" + u(this.x) + ", " + u(this.y) + ")" } }, A.prototype = { extend: function(t) { return t = B(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this }, getCenter: function(t) { return new E((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t) }, getBottomLeft: function() { return new E(this.min.x, this.max.y) }, getTopRight: function() { return new E(this.max.x, this.min.y) }, getTopLeft: function() { return this.min }, getBottomRight: function() { return this.max }, getSize: function() { return this.max.subtract(this.min) }, contains: function(t) { var i, e; return (t = "number" == typeof t[0] || t instanceof E ? B(t) : I(t)) instanceof A ? (i = t.min, e = t.max) : i = e = t, i.x >= this.min.x && e.x <= this.max.x && i.y >= this.min.y && e.y <= this.max.y }, intersects: function(t) { t = I(t); var i = this.min,
                        e = this.max,
                        n = t.min,
                        o = t.max,
                        s = o.x >= i.x && n.x <= e.x,
                        r = o.y >= i.y && n.y <= e.y; return s && r }, overlaps: function(t) { t = I(t); var i = this.min,
                        e = this.max,
                        n = t.min,
                        o = t.max,
                        s = o.x > i.x && n.x < e.x,
                        r = o.y > i.y && n.y < e.y; return s && r }, isValid: function() { return !(!this.min || !this.max) } }, O.prototype = { extend: function(t) { var i, e, n = this._southWest,
                        o = this._northEast; if (t instanceof N) i = t, e = t;
                    else { if (!(t instanceof O)) return t ? this.extend(D(t) || R(t)) : this; if (i = t._southWest, e = t._northEast, !i || !e) return this } return n || o ? (n.lat = Math.min(i.lat, n.lat), n.lng = Math.min(i.lng, n.lng), o.lat = Math.max(e.lat, o.lat), o.lng = Math.max(e.lng, o.lng)) : (this._southWest = new N(i.lat, i.lng), this._northEast = new N(e.lat, e.lng)), this }, pad: function(t) { var i = this._southWest,
                        e = this._northEast,
                        n = Math.abs(i.lat - e.lat) * t,
                        o = Math.abs(i.lng - e.lng) * t; return new O(new N(i.lat - n, i.lng - o), new N(e.lat + n, e.lng + o)) }, getCenter: function() { return new N((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2) }, getSouthWest: function() { return this._southWest }, getNorthEast: function() { return this._northEast }, getNorthWest: function() { return new N(this.getNorth(), this.getWest()) }, getSouthEast: function() { return new N(this.getSouth(), this.getEast()) }, getWest: function() { return this._southWest.lng }, getSouth: function() { return this._southWest.lat }, getEast: function() { return this._northEast.lng }, getNorth: function() { return this._northEast.lat }, contains: function(t) { t = "number" == typeof t[0] || t instanceof N || "lat" in t ? D(t) : R(t); var i, e, n = this._southWest,
                        o = this._northEast; return t instanceof O ? (i = t.getSouthWest(), e = t.getNorthEast()) : i = e = t, i.lat >= n.lat && e.lat <= o.lat && i.lng >= n.lng && e.lng <= o.lng }, intersects: function(t) { t = R(t); var i = this._southWest,
                        e = this._northEast,
                        n = t.getSouthWest(),
                        o = t.getNorthEast(),
                        s = o.lat >= i.lat && n.lat <= e.lat,
                        r = o.lng >= i.lng && n.lng <= e.lng; return s && r }, overlaps: function(t) { t = R(t); var i = this._southWest,
                        e = this._northEast,
                        n = t.getSouthWest(),
                        o = t.getNorthEast(),
                        s = o.lat > i.lat && n.lat < e.lat,
                        r = o.lng > i.lng && n.lng < e.lng; return s && r }, toBBoxString: function() { return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",") }, equals: function(t, i) { return !!t && (t = R(t), this._southWest.equals(t.getSouthWest(), i) && this._northEast.equals(t.getNorthEast(), i)) }, isValid: function() { return !(!this._southWest || !this._northEast) } }, N.prototype = { equals: function(t, i) { return !!t && (t = D(t), Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === i ? 1e-9 : i)) }, toString: function(t) { return "LatLng(" + u(this.lat, t) + ", " + u(this.lng, t) + ")" }, distanceTo: function(t) { return H.distance(this, D(t)) }, wrap: function() { return H.wrapLatLng(this) }, toBounds: function(t) { var i = 180 * t / 40075017,
                        e = i / Math.cos(Math.PI / 180 * this.lat); return R([this.lat - i, this.lng - e], [this.lat + i, this.lng + e]) }, clone: function() { return new N(this.lat, this.lng, this.alt) } }; var j, W = { latLngToPoint: function(t, i) { var e = this.projection.project(t),
                            n = this.scale(i); return this.transformation._transform(e, n) }, pointToLatLng: function(t, i) { var e = this.scale(i),
                            n = this.transformation.untransform(t, e); return this.projection.unproject(n) }, project: function(t) { return this.projection.project(t) }, unproject: function(t) { return this.projection.unproject(t) }, scale: function(t) { return 256 * Math.pow(2, t) }, zoom: function(t) { return Math.log(t / 256) / Math.LN2 }, getProjectedBounds: function(t) { if (this.infinite) return null; var i = this.projection.bounds,
                            e = this.scale(t); return new A(this.transformation.transform(i.min, e), this.transformation.transform(i.max, e)) }, infinite: !1, wrapLatLng: function(t) { var i = this.wrapLng ? a(t.lng, this.wrapLng, !0) : t.lng; return new N(this.wrapLat ? a(t.lat, this.wrapLat, !0) : t.lat, i, t.alt) }, wrapLatLngBounds: function(t) { var i = t.getCenter(),
                            e = this.wrapLatLng(i),
                            n = i.lat - e.lat,
                            o = i.lng - e.lng; if (0 === n && 0 === o) return t; var s = t.getSouthWest(),
                            r = t.getNorthEast(); return new O(new N(s.lat - n, s.lng - o), new N(r.lat - n, r.lng - o)) } },
                H = i({}, W, { wrapLng: [-180, 180], R: 6371e3, distance: function(t, i) { var e = Math.PI / 180,
                            n = t.lat * e,
                            o = i.lat * e,
                            s = Math.sin((i.lat - t.lat) * e / 2),
                            r = Math.sin((i.lng - t.lng) * e / 2),
                            a = s * s + Math.cos(n) * Math.cos(o) * r * r,
                            h = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); return this.R * h } }),
                F = { R: 6378137, MAX_LATITUDE: 85.0511287798, project: function(t) { var i = Math.PI / 180,
                            e = this.MAX_LATITUDE,
                            n = Math.max(Math.min(e, t.lat), -e),
                            o = Math.sin(n * i); return new E(this.R * t.lng * i, this.R * Math.log((1 + o) / (1 - o)) / 2) }, unproject: function(t) { var i = 180 / Math.PI; return new N((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * i, t.x * i / this.R) }, bounds: (j = 6378137 * Math.PI, new A([-j, -j], [j, j])) };

            function U(t, i, e, n) { if (f(t)) return this._a = t[0], this._b = t[1], this._c = t[2], void(this._d = t[3]);
                this._a = t, this._b = i, this._c = e, this._d = n }

            function V(t, i, e, n) { return new U(t, i, e, n) } U.prototype = { transform: function(t, i) { return this._transform(t.clone(), i) }, _transform: function(t, i) { return i = i || 1, t.x = i * (this._a * t.x + this._b), t.y = i * (this._c * t.y + this._d), t }, untransform: function(t, i) { return i = i || 1, new E((t.x / i - this._b) / this._a, (t.y / i - this._d) / this._c) } }; var q = i({}, H, { code: "EPSG:3857", projection: F, transformation: function() { var t = .5 / (Math.PI * F.R); return V(t, .5, -t, .5) }() }),
                G = i({}, q, { code: "EPSG:900913" });

            function K(t) { return document.createElementNS("http://www.w3.org/2000/svg", t) }

            function Y(t, i) { var e, n, o, s, r, a, h = ""; for (e = 0, o = t.length; e < o; e++) { for (n = 0, s = (r = t[e]).length; n < s; n++) h += (n ? "L" : "M") + (a = r[n]).x + " " + a.y;
                    h += i ? zt ? "z" : "x" : "" } return h || "M0 0" } var X = document.documentElement.style,
                J = "ActiveXObject" in window,
                $ = J && !document.addEventListener,
                Q = "msLaunchUri" in navigator && !("documentMode" in document),
                tt = St("webkit"),
                it = St("android"),
                et = St("android 2") || St("android 3"),
                nt = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
                ot = it && St("Google") && nt < 537 && !("AudioNode" in window),
                st = !!window.opera,
                rt = !Q && St("chrome"),
                at = St("gecko") && !tt && !st && !J,
                ht = !rt && St("safari"),
                ut = St("phantom"),
                lt = "OTransition" in X,
                ct = 0 === navigator.platform.indexOf("Win"),
                _t = J && "transition" in X,
                dt = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix && !et,
                pt = "MozPerspective" in X,
                mt = !window.L_DISABLE_3D && (_t || dt || pt) && !lt && !ut,
                ft = "undefined" != typeof orientation || St("mobile"),
                gt = ft && tt,
                vt = ft && dt,
                yt = !window.PointerEvent && window.MSPointerEvent,
                xt = !(!window.PointerEvent && !yt),
                wt = !window.L_NO_TOUCH && (xt || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
                Pt = ft && st,
                Lt = ft && at,
                bt = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
                Tt = function() { var t = !1; try { var i = Object.defineProperty({}, "passive", { get: function() { t = !0 } });
                        window.addEventListener("testPassiveEventSupport", h, i), window.removeEventListener("testPassiveEventSupport", h, i) } catch (e) {} return t }(),
                Mt = !!document.createElement("canvas").getContext,
                zt = !(!document.createElementNS || !K("svg").createSVGRect),
                Ct = !zt && function() { try { var t = document.createElement("div");
                        t.innerHTML = '<v:shape adj="1"/>'; var i = t.firstChild; return i.style.behavior = "url(#default#VML)", i && "object" == typeof i.adj } catch (e) { return !1 } }();

            function St(t) { return navigator.userAgent.toLowerCase().indexOf(t) >= 0 } var Zt = { ie: J, ielt9: $, edge: Q, webkit: tt, android: it, android23: et, androidStock: ot, opera: st, chrome: rt, gecko: at, safari: ht, phantom: ut, opera12: lt, win: ct, ie3d: _t, webkit3d: dt, gecko3d: pt, any3d: mt, mobile: ft, mobileWebkit: gt, mobileWebkit3d: vt, msPointer: yt, pointer: xt, touch: wt, mobileOpera: Pt, mobileGecko: Lt, retina: bt, passiveEvents: Tt, canvas: Mt, svg: zt, vml: Ct },
                Et = yt ? "MSPointerDown" : "pointerdown",
                kt = yt ? "MSPointerMove" : "pointermove",
                Bt = yt ? "MSPointerUp" : "pointerup",
                At = yt ? "MSPointerCancel" : "pointercancel",
                It = {},
                Ot = !1;

            function Rt(t, i, e, o) { return "touchstart" === i ? function(t, i, e) { var o = n(function(t) { t.MSPOINTER_TYPE_TOUCH && t.pointerType === t.MSPOINTER_TYPE_TOUCH && Ai(t), Wt(t, i) });
                    t["_leaflet_touchstart" + e] = o, t.addEventListener(Et, o, !1), Ot || (document.addEventListener(Et, Nt, !0), document.addEventListener(kt, Dt, !0), document.addEventListener(Bt, jt, !0), document.addEventListener(At, jt, !0), Ot = !0) }(t, e, o) : "touchmove" === i ? function(t, i, e) { var n = function(t) { t.pointerType === (t.MSPOINTER_TYPE_MOUSE || "mouse") && 0 === t.buttons || Wt(t, i) };
                    t["_leaflet_touchmove" + e] = n, t.addEventListener(kt, n, !1) }(t, e, o) : "touchend" === i && function(t, i, e) { var n = function(t) { Wt(t, i) };
                    t["_leaflet_touchend" + e] = n, t.addEventListener(Bt, n, !1), t.addEventListener(At, n, !1) }(t, e, o), this }

            function Nt(t) { It[t.pointerId] = t }

            function Dt(t) { It[t.pointerId] && (It[t.pointerId] = t) }

            function jt(t) { delete It[t.pointerId] }

            function Wt(t, i) { for (var e in t.touches = [], It) t.touches.push(It[e]);
                t.changedTouches = [t], i(t) } var Ht = yt ? "MSPointerDown" : xt ? "pointerdown" : "touchstart",
                Ft = yt ? "MSPointerUp" : xt ? "pointerup" : "touchend",
                Ut = "_leaflet_"; var Vt, qt, Gt, Kt, Yt, Xt = _i(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]),
                Jt = _i(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
                $t = "webkitTransition" === Jt || "OTransition" === Jt ? Jt + "End" : "transitionend";

            function Qt(t) { return "string" == typeof t ? document.getElementById(t) : t }

            function ti(t, i) { var e = t.style[i] || t.currentStyle && t.currentStyle[i]; if ((!e || "auto" === e) && document.defaultView) { var n = document.defaultView.getComputedStyle(t, null);
                    e = n ? n[i] : null } return "auto" === e ? null : e }

            function ii(t, i, e) { var n = document.createElement(t); return n.className = i || "", e && e.appendChild(n), n }

            function ei(t) { var i = t.parentNode;
                i && i.removeChild(t) }

            function ni(t) { for (; t.firstChild;) t.removeChild(t.firstChild) }

            function oi(t) { var i = t.parentNode;
                i && i.lastChild !== t && i.appendChild(t) }

            function si(t) { var i = t.parentNode;
                i && i.firstChild !== t && i.insertBefore(t, i.firstChild) }

            function ri(t, i) { if (void 0 !== t.classList) return t.classList.contains(i); var e = li(t); return e.length > 0 && new RegExp("(^|\\s)" + i + "(\\s|$)").test(e) }

            function ai(t, i) { if (void 0 !== t.classList)
                    for (var e = c(i), n = 0, o = e.length; n < o; n++) t.classList.add(e[n]);
                else if (!ri(t, i)) { var s = li(t);
                    ui(t, (s ? s + " " : "") + i) } }

            function hi(t, i) { void 0 !== t.classList ? t.classList.remove(i) : ui(t, l((" " + li(t) + " ").replace(" " + i + " ", " "))) }

            function ui(t, i) { void 0 === t.className.baseVal ? t.className = i : t.className.baseVal = i }

            function li(t) { return t.correspondingElement && (t = t.correspondingElement), void 0 === t.className.baseVal ? t.className : t.className.baseVal }

            function ci(t, i) { "opacity" in t.style ? t.style.opacity = i : "filter" in t.style && function(t, i) { var e = !1,
                        n = "DXImageTransform.Microsoft.Alpha"; try { e = t.filters.item(n) } catch (o) { if (1 === i) return } i = Math.round(100 * i), e ? (e.Enabled = 100 !== i, e.Opacity = i) : t.style.filter += " progid:" + n + "(opacity=" + i + ")" }(t, i) }

            function _i(t) { for (var i = document.documentElement.style, e = 0; e < t.length; e++)
                    if (t[e] in i) return t[e]; return !1 }

            function di(t, i, e) { var n = i || new E(0, 0);
                t.style[Xt] = (_t ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (e ? " scale(" + e + ")" : "") }

            function pi(t, i) { t._leaflet_pos = i, mt ? di(t, i) : (t.style.left = i.x + "px", t.style.top = i.y + "px") }

            function mi(t) { return t._leaflet_pos || new E(0, 0) } if ("onselectstart" in document) Vt = function() { bi(window, "selectstart", Ai) }, qt = function() { Mi(window, "selectstart", Ai) };
            else { var fi = _i(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
                Vt = function() { if (fi) { var t = document.documentElement.style;
                        Gt = t[fi], t[fi] = "none" } }, qt = function() { fi && (document.documentElement.style[fi] = Gt, Gt = void 0) } }

            function gi() { bi(window, "dragstart", Ai) }

            function vi() { Mi(window, "dragstart", Ai) }

            function yi(t) { for (; - 1 === t.tabIndex;) t = t.parentNode;
                t.style && (xi(), Kt = t, Yt = t.style.outline, t.style.outline = "none", bi(window, "keydown", xi)) }

            function xi() { Kt && (Kt.style.outline = Yt, Kt = void 0, Yt = void 0, Mi(window, "keydown", xi)) }

            function wi(t) { do { t = t.parentNode } while (!(t.offsetWidth && t.offsetHeight || t === document.body)); return t }

            function Pi(t) { var i = t.getBoundingClientRect(); return { x: i.width / t.offsetWidth || 1, y: i.height / t.offsetHeight || 1, boundingClientRect: i } } var Li = { TRANSFORM: Xt, TRANSITION: Jt, TRANSITION_END: $t, get: Qt, getStyle: ti, create: ii, remove: ei, empty: ni, toFront: oi, toBack: si, hasClass: ri, addClass: ai, removeClass: hi, setClass: ui, getClass: li, setOpacity: ci, testProp: _i, setTransform: di, setPosition: pi, getPosition: mi, disableTextSelection: Vt, enableTextSelection: qt, disableImageDrag: gi, enableImageDrag: vi, preventOutline: yi, restoreOutline: xi, getSizedParentNode: wi, getScale: Pi };

            function bi(t, i, e, n) { if ("object" == typeof i)
                    for (var o in i) Si(t, o, i[o], e);
                else
                    for (var s = 0, r = (i = c(i)).length; s < r; s++) Si(t, i[s], e, n); return this } var Ti = "_leaflet_events";

            function Mi(t, i, e, n) { if ("object" == typeof i)
                    for (var o in i) Zi(t, o, i[o], e);
                else if (i)
                    for (var s = 0, r = (i = c(i)).length; s < r; s++) Zi(t, i[s], e, n);
                else { for (var a in t[Ti]) Zi(t, a, t[Ti][a]);
                    delete t[Ti] } return this }

            function zi() { if (xt) return !(Q || ht) } var Ci = { mouseenter: "mouseover", mouseleave: "mouseout", wheel: !("onwheel" in window) && "mousewheel" };

            function Si(t, i, e, n) { var o = i + s(e) + (n ? "_" + s(n) : ""); if (t[Ti] && t[Ti][o]) return this; var r = function(i) { return e.call(n || t, i || window.event) },
                    a = r;
                xt && 0 === i.indexOf("touch") ? Rt(t, i, r, o) : wt && "dblclick" === i && !zi() ? function(t, i, e) { var n, o, s = !1,
                        r = 250;

                    function a(t) { if (xt) { if (!t.isPrimary) return; if ("mouse" === t.pointerType) return } else if (t.touches.length > 1) return; var i = Date.now(),
                            e = i - (n || i);
                        o = t.touches ? t.touches[0] : t, s = e > 0 && e <= r, n = i }

                    function h(t) { if (s && !o.cancelBubble) { if (xt) { if ("mouse" === t.pointerType) return; var e, r, a = {}; for (r in o) e = o[r], a[r] = e && e.bind ? e.bind(o) : e;
                                o = a } o.type = "dblclick", o.button = 0, i(o), n = null } } t[Ut + Ht + e] = a, t[Ut + Ft + e] = h, t[Ut + "dblclick" + e] = i, t.addEventListener(Ht, a, !!Tt && { passive: !1 }), t.addEventListener(Ft, h, !!Tt && { passive: !1 }), t.addEventListener("dblclick", i, !1) }(t, r, o) : "addEventListener" in t ? "touchstart" === i || "touchmove" === i || "wheel" === i || "mousewheel" === i ? t.addEventListener(Ci[i] || i, r, !!Tt && { passive: !1 }) : "mouseenter" === i || "mouseleave" === i ? (r = function(i) { i = i || window.event, Hi(t, i) && a(i) }, t.addEventListener(Ci[i], r, !1)) : t.addEventListener(i, a, !1) : "attachEvent" in t && t.attachEvent("on" + i, r), t[Ti] = t[Ti] || {}, t[Ti][o] = r }

            function Zi(t, i, e, n) { var o = i + s(e) + (n ? "_" + s(n) : ""),
                    r = t[Ti] && t[Ti][o]; if (!r) return this;
                xt && 0 === i.indexOf("touch") ? function(t, i, e) { var n = t["_leaflet_" + i + e]; "touchstart" === i ? t.removeEventListener(Et, n, !1) : "touchmove" === i ? t.removeEventListener(kt, n, !1) : "touchend" === i && (t.removeEventListener(Bt, n, !1), t.removeEventListener(At, n, !1)) }(t, i, o) : wt && "dblclick" === i && !zi() ? function(t, i) { var e = t[Ut + Ht + i],
                        n = t[Ut + Ft + i],
                        o = t[Ut + "dblclick" + i];
                    t.removeEventListener(Ht, e, !!Tt && { passive: !1 }), t.removeEventListener(Ft, n, !!Tt && { passive: !1 }), t.removeEventListener("dblclick", o, !1) }(t, o) : "removeEventListener" in t ? t.removeEventListener(Ci[i] || i, r, !1) : "detachEvent" in t && t.detachEvent("on" + i, r), t[Ti][o] = null }

            function Ei(t) { return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, Wi(t), this }

            function ki(t) { return Si(t, "wheel", Ei), this }

            function Bi(t) { return bi(t, "mousedown touchstart dblclick", Ei), Si(t, "click", ji), this }

            function Ai(t) { return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this }

            function Ii(t) { return Ai(t), Ei(t), this }

            function Oi(t, i) { if (!i) return new E(t.clientX, t.clientY); var e = Pi(i),
                    n = e.boundingClientRect; return new E((t.clientX - n.left) / e.x - i.clientLeft, (t.clientY - n.top) / e.y - i.clientTop) } var Ri = ct && rt ? 2 * window.devicePixelRatio : at ? window.devicePixelRatio : 1;

            function Ni(t) { return Q ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / Ri : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0 } var Di = {};

            function ji(t) { Di[t.type] = !0 }

            function Wi(t) { var i = Di[t.type]; return Di[t.type] = !1, i }

            function Hi(t, i) { var e = i.relatedTarget; if (!e) return !0; try { for (; e && e !== t;) e = e.parentNode } catch (n) { return !1 } return e !== t } var Fi = { on: bi, off: Mi, stopPropagation: Ei, disableScrollPropagation: ki, disableClickPropagation: Bi, preventDefault: Ai, stop: Ii, getMousePosition: Oi, getWheelDelta: Ni, fakeStop: ji, skipped: Wi, isExternalTarget: Hi, addListener: bi, removeListener: Mi },
                Ui = Z.extend({ run: function(t, i, e, n) { this.stop(), this._el = t, this._inProgress = !0, this._duration = e || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = mi(t), this._offset = i.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate() }, stop: function() { this._inProgress && (this._step(!0), this._complete()) }, _animate: function() { this._animId = T(this._animate, this), this._step() }, _step: function(t) { var i = +new Date - this._startTime,
                            e = 1e3 * this._duration;
                        i < e ? this._runFrame(this._easeOut(i / e), t) : (this._runFrame(1), this._complete()) }, _runFrame: function(t, i) { var e = this._startPos.add(this._offset.multiplyBy(t));
                        i && e._round(), pi(this._el, e), this.fire("step") }, _complete: function() { M(this._animId), this._inProgress = !1, this.fire("end") }, _easeOut: function(t) { return 1 - Math.pow(1 - t, this._easeOutPower) } }),
                Vi = Z.extend({ options: { crs: q, center: void 0, zoom: void 0, minZoom: void 0, maxZoom: void 0, layers: [], maxBounds: void 0, renderer: void 0, zoomAnimation: !0, zoomAnimationThreshold: 4, fadeAnimation: !0, markerZoomAnimation: !0, transform3DLimit: 8388608, zoomSnap: 1, zoomDelta: 1, trackResize: !0 }, initialize: function(t, i) { i = _(this, i), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(t), this._initLayout(), this._onResize = n(this._onResize, this), this._initEvents(), i.maxBounds && this.setMaxBounds(i.maxBounds), void 0 !== i.zoom && (this._zoom = this._limitZoom(i.zoom)), i.center && void 0 !== i.zoom && this.setView(D(i.center), i.zoom, { reset: !0 }), this.callInitHooks(), this._zoomAnimated = Jt && mt && !Pt && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), bi(this._proxy, $t, this._catchTransitionEnd, this)), this._addLayers(this.options.layers) }, setView: function(t, e, n) { if ((e = void 0 === e ? this._zoom : this._limitZoom(e), t = this._limitCenter(D(t), e, this.options.maxBounds), n = n || {}, this._stop(), this._loaded && !n.reset && !0 !== n) && (void 0 !== n.animate && (n.zoom = i({ animate: n.animate }, n.zoom), n.pan = i({ animate: n.animate, duration: n.duration }, n.pan)), this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, n.zoom) : this._tryAnimatedPan(t, n.pan))) return clearTimeout(this._sizeTimer), this; return this._resetView(t, e), this }, setZoom: function(t, i) { return this._loaded ? this.setView(this.getCenter(), t, { zoom: i }) : (this._zoom = t, this) }, zoomIn: function(t, i) { return t = t || (mt ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, i) }, zoomOut: function(t, i) { return t = t || (mt ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, i) }, setZoomAround: function(t, i, e) { var n = this.getZoomScale(i),
                            o = this.getSize().divideBy(2),
                            s = (t instanceof E ? t : this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / n),
                            r = this.containerPointToLatLng(o.add(s)); return this.setView(r, i, { zoom: e }) }, _getBoundsCenterZoom: function(t, i) { i = i || {}, t = t.getBounds ? t.getBounds() : R(t); var e = B(i.paddingTopLeft || i.padding || [0, 0]),
                            n = B(i.paddingBottomRight || i.padding || [0, 0]),
                            o = this.getBoundsZoom(t, !1, e.add(n)); if ((o = "number" == typeof i.maxZoom ? Math.min(i.maxZoom, o) : o) === 1 / 0) return { center: t.getCenter(), zoom: o }; var s = n.subtract(e).divideBy(2),
                            r = this.project(t.getSouthWest(), o),
                            a = this.project(t.getNorthEast(), o); return { center: this.unproject(r.add(a).divideBy(2).add(s), o), zoom: o } }, fitBounds: function(t, i) { if (!(t = R(t)).isValid()) throw new Error("Bounds are not valid."); var e = this._getBoundsCenterZoom(t, i); return this.setView(e.center, e.zoom, i) }, fitWorld: function(t) { return this.fitBounds([
                            [-90, -180],
                            [90, 180]
                        ], t) }, panTo: function(t, i) { return this.setView(t, this._zoom, { pan: i }) }, panBy: function(t, i) { if (i = i || {}, !(t = B(t).round()).x && !t.y) return this.fire("moveend"); if (!0 !== i.animate && !this.getSize().contains(t)) return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this; if (this._panAnim || (this._panAnim = new Ui, this._panAnim.on({ step: this._onPanTransitionStep, end: this._onPanTransitionEnd }, this)), i.noMoveStart || this.fire("movestart"), !1 !== i.animate) { ai(this._mapPane, "leaflet-pan-anim"); var e = this._getMapPanePos().subtract(t).round();
                            this._panAnim.run(this._mapPane, e, i.duration || .25, i.easeLinearity) } else this._rawPanBy(t), this.fire("move").fire("moveend"); return this }, flyTo: function(t, i, e) { if (!1 === (e = e || {}).animate || !mt) return this.setView(t, i, e);
                        this._stop(); var n = this.project(this.getCenter()),
                            o = this.project(t),
                            s = this.getSize(),
                            r = this._zoom;
                        t = D(t), i = void 0 === i ? r : i; var a = Math.max(s.x, s.y),
                            h = a * this.getZoomScale(r, i),
                            u = o.distanceTo(n) || 1,
                            l = 1.42,
                            c = l * l;

                        function _(t) { var i = (h * h - a * a + (t ? -1 : 1) * c * c * u * u) / (2 * (t ? h : a) * c * u),
                                e = Math.sqrt(i * i + 1) - i; return e < 1e-9 ? -18 : Math.log(e) }

                        function d(t) { return (Math.exp(t) - Math.exp(-t)) / 2 }

                        function p(t) { return (Math.exp(t) + Math.exp(-t)) / 2 } var m = _(0);

                        function f(t) { return a * (p(m) * (d(i = m + l * t) / p(i)) - d(m)) / c; var i } var g = Date.now(),
                            v = (_(1) - m) / l,
                            y = e.duration ? 1e3 * e.duration : 1e3 * v * .8; return this._moveStart(!0, e.noMoveStart),
                            function e() { var s = (Date.now() - g) / y,
                                    h = function(t) { return 1 - Math.pow(1 - t, 1.5) }(s) * v;
                                s <= 1 ? (this._flyToFrame = T(e, this), this._move(this.unproject(n.add(o.subtract(n).multiplyBy(f(h) / u)), r), this.getScaleZoom(a / function(t) { return a * (p(m) / p(m + l * t)) }(h), r), { flyTo: !0 })) : this._move(t, i)._moveEnd(!0) }.call(this), this }, flyToBounds: function(t, i) { var e = this._getBoundsCenterZoom(t, i); return this.flyTo(e.center, e.zoom, i) }, setMaxBounds: function(t) { return (t = R(t)).isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this.off("moveend", this._panInsideMaxBounds)) }, setMinZoom: function(t) { var i = this.options.minZoom; return this.options.minZoom = t, this._loaded && i !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this }, setMaxZoom: function(t) { var i = this.options.maxZoom; return this.options.maxZoom = t, this._loaded && i !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this }, panInsideBounds: function(t, i) { this._enforcingBounds = !0; var e = this.getCenter(),
                            n = this._limitCenter(e, this._zoom, R(t)); return e.equals(n) || this.panTo(n, i), this._enforcingBounds = !1, this }, panInside: function(t, i) { var e = B((i = i || {}).paddingTopLeft || i.padding || [0, 0]),
                            n = B(i.paddingBottomRight || i.padding || [0, 0]),
                            o = this.getCenter(),
                            s = this.project(o),
                            r = this.project(t),
                            a = this.getPixelBounds(),
                            h = a.getSize().divideBy(2),
                            u = I([a.min.add(e), a.max.subtract(n)]); if (!u.contains(r)) { this._enforcingBounds = !0; var l = s.subtract(r),
                                c = B(r.x + l.x, r.y + l.y);
                            (r.x < u.min.x || r.x > u.max.x) && (c.x = s.x - l.x, l.x > 0 ? c.x += h.x - e.x : c.x -= h.x - n.x), (r.y < u.min.y || r.y > u.max.y) && (c.y = s.y - l.y, l.y > 0 ? c.y += h.y - e.y : c.y -= h.y - n.y), this.panTo(this.unproject(c), i), this._enforcingBounds = !1 } return this }, invalidateSize: function(t) { if (!this._loaded) return this;
                        t = i({ animate: !1, pan: !0 }, !0 === t ? { animate: !0 } : t); var e = this.getSize();
                        this._sizeChanged = !0, this._lastCenter = null; var o = this.getSize(),
                            s = e.divideBy(2).round(),
                            r = o.divideBy(2).round(),
                            a = s.subtract(r); return a.x || a.y ? (t.animate && t.pan ? this.panBy(a) : (t.pan && this._rawPanBy(a), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(n(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", { oldSize: e, newSize: o })) : this }, stop: function() { return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop() }, locate: function(t) { if (t = this._locateOptions = i({ timeout: 1e4, watch: !1 }, t), !("geolocation" in navigator)) return this._handleGeolocationError({ code: 0, message: "Geolocation not supported." }), this; var e = n(this._handleGeolocationResponse, this),
                            o = n(this._handleGeolocationError, this); return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, o, t) : navigator.geolocation.getCurrentPosition(e, o, t), this }, stopLocate: function() { return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this }, _handleGeolocationError: function(t) { var i = t.code,
                            e = t.message || (1 === i ? "permission denied" : 2 === i ? "position unavailable" : "timeout");
                        this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", { code: i, message: "Geolocation error: " + e + "." }) }, _handleGeolocationResponse: function(t) { var i = new N(t.coords.latitude, t.coords.longitude),
                            e = i.toBounds(2 * t.coords.accuracy),
                            n = this._locateOptions; if (n.setView) { var o = this.getBoundsZoom(e);
                            this.setView(i, n.maxZoom ? Math.min(o, n.maxZoom) : o) } var s = { latlng: i, bounds: e, timestamp: t.timestamp }; for (var r in t.coords) "number" == typeof t.coords[r] && (s[r] = t.coords[r]);
                        this.fire("locationfound", s) }, addHandler: function(t, i) { if (!i) return this; var e = this[t] = new i(this); return this._handlers.push(e), this.options[t] && e.enable(), this }, remove: function() { if (this._initEvents(!0), this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance"); try { delete this._container._leaflet_id, delete this._containerId } catch (i) { this._container._leaflet_id = void 0, this._containerId = void 0 } var t; for (t in void 0 !== this._locationWatchId && this.stopLocate(), this._stop(), ei(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (M(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload"), this._layers) this._layers[t].remove(); for (t in this._panes) ei(this._panes[t]); return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this }, createPane: function(t, i) { var e = ii("div", "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), i || this._mapPane); return t && (this._panes[t] = e), e }, getCenter: function() { return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint()) }, getZoom: function() { return this._zoom }, getBounds: function() { var t = this.getPixelBounds(); return new O(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight())) }, getMinZoom: function() { return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom }, getMaxZoom: function() { return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom }, getBoundsZoom: function(t, i, e) { t = R(t), e = B(e || [0, 0]); var n = this.getZoom() || 0,
                            o = this.getMinZoom(),
                            s = this.getMaxZoom(),
                            r = t.getNorthWest(),
                            a = t.getSouthEast(),
                            h = this.getSize().subtract(e),
                            u = I(this.project(a, n), this.project(r, n)).getSize(),
                            l = mt ? this.options.zoomSnap : 1,
                            c = h.x / u.x,
                            _ = h.y / u.y,
                            d = i ? Math.max(c, _) : Math.min(c, _); return n = this.getScaleZoom(d, n), l && (n = Math.round(n / (l / 100)) * (l / 100), n = i ? Math.ceil(n / l) * l : Math.floor(n / l) * l), Math.max(o, Math.min(s, n)) }, getSize: function() { return this._size && !this._sizeChanged || (this._size = new E(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = !1), this._size.clone() }, getPixelBounds: function(t, i) { var e = this._getTopLeftPoint(t, i); return new A(e, e.add(this.getSize())) }, getPixelOrigin: function() { return this._checkIfLoaded(), this._pixelOrigin }, getPixelWorldBounds: function(t) { return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t) }, getPane: function(t) { return "string" == typeof t ? this._panes[t] : t }, getPanes: function() { return this._panes }, getContainer: function() { return this._container }, getZoomScale: function(t, i) { var e = this.options.crs; return i = void 0 === i ? this._zoom : i, e.scale(t) / e.scale(i) }, getScaleZoom: function(t, i) { var e = this.options.crs;
                        i = void 0 === i ? this._zoom : i; var n = e.zoom(t * e.scale(i)); return isNaN(n) ? 1 / 0 : n }, project: function(t, i) { return i = void 0 === i ? this._zoom : i, this.options.crs.latLngToPoint(D(t), i) }, unproject: function(t, i) { return i = void 0 === i ? this._zoom : i, this.options.crs.pointToLatLng(B(t), i) }, layerPointToLatLng: function(t) { var i = B(t).add(this.getPixelOrigin()); return this.unproject(i) }, latLngToLayerPoint: function(t) { return this.project(D(t))._round()._subtract(this.getPixelOrigin()) }, wrapLatLng: function(t) { return this.options.crs.wrapLatLng(D(t)) }, wrapLatLngBounds: function(t) { return this.options.crs.wrapLatLngBounds(R(t)) }, distance: function(t, i) { return this.options.crs.distance(D(t), D(i)) }, containerPointToLayerPoint: function(t) { return B(t).subtract(this._getMapPanePos()) }, layerPointToContainerPoint: function(t) { return B(t).add(this._getMapPanePos()) }, containerPointToLatLng: function(t) { var i = this.containerPointToLayerPoint(B(t)); return this.layerPointToLatLng(i) }, latLngToContainerPoint: function(t) { return this.layerPointToContainerPoint(this.latLngToLayerPoint(D(t))) }, mouseEventToContainerPoint: function(t) { return Oi(t, this._container) }, mouseEventToLayerPoint: function(t) { return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t)) }, mouseEventToLatLng: function(t) { return this.layerPointToLatLng(this.mouseEventToLayerPoint(t)) }, _initContainer: function(t) { var i = this._container = Qt(t); if (!i) throw new Error("Map container not found."); if (i._leaflet_id) throw new Error("Map container is already initialized.");
                        bi(i, "scroll", this._onScroll, this), this._containerId = s(i) }, _initLayout: function() { var t = this._container;
                        this._fadeAnimated = this.options.fadeAnimation && mt, ai(t, "leaflet-container" + (wt ? " leaflet-touch" : "") + (bt ? " leaflet-retina" : "") + ($ ? " leaflet-oldie" : "") + (ht ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : "")); var i = ti(t, "position"); "absolute" !== i && "relative" !== i && "fixed" !== i && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos() }, _initPanes: function() { var t = this._panes = {};
                        this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), pi(this._mapPane, new E(0, 0)), this.createPane("tilePane"), this.createPane("shadowPane"), this.createPane("overlayPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (ai(t.markerPane, "leaflet-zoom-hide"), ai(t.shadowPane, "leaflet-zoom-hide")) }, _resetView: function(t, i) { pi(this._mapPane, new E(0, 0)); var e = !this._loaded;
                        this._loaded = !0, i = this._limitZoom(i), this.fire("viewprereset"); var n = this._zoom !== i;
                        this._moveStart(n, !1)._move(t, i)._moveEnd(n), this.fire("viewreset"), e && this.fire("load") }, _moveStart: function(t, i) { return t && this.fire("zoomstart"), i || this.fire("movestart"), this }, _move: function(t, i, e) { void 0 === i && (i = this._zoom); var n = this._zoom !== i; return this._zoom = i, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), (n || e && e.pinch) && this.fire("zoom", e), this.fire("move", e) }, _moveEnd: function(t) { return t && this.fire("zoomend"), this.fire("moveend") }, _stop: function() { return M(this._flyToFrame), this._panAnim && this._panAnim.stop(), this }, _rawPanBy: function(t) { pi(this._mapPane, this._getMapPanePos().subtract(t)) }, _getZoomSpan: function() { return this.getMaxZoom() - this.getMinZoom() }, _panInsideMaxBounds: function() { this._enforcingBounds || this.panInsideBounds(this.options.maxBounds) }, _checkIfLoaded: function() { if (!this._loaded) throw new Error("Set map center and zoom first.") }, _initEvents: function(t) { this._targets = {}, this._targets[s(this._container)] = this; var i = t ? Mi : bi;
                        i(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && i(window, "resize", this._onResize, this), mt && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd) }, _onResize: function() { M(this._resizeRequest), this._resizeRequest = T(function() { this.invalidateSize({ debounceMoveend: !0 }) }, this) }, _onScroll: function() { this._container.scrollTop = 0, this._container.scrollLeft = 0 }, _onMoveEnd: function() { var t = this._getMapPanePos();
                        Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom()) }, _findEventTargets: function(t, i) { for (var e, n = [], o = "mouseout" === i || "mouseover" === i, r = t.target || t.srcElement, a = !1; r;) { if ((e = this._targets[s(r)]) && ("click" === i || "preclick" === i) && !t._simulated && this._draggableMoved(e)) { a = !0; break } if (e && e.listens(i, !0)) { if (o && !Hi(r, t)) break; if (n.push(e), o) break } if (r === this._container) break;
                            r = r.parentNode } return n.length || a || o || !Hi(r, t) || (n = [this]), n }, _handleDOMEvent: function(t) { if (this._loaded && !Wi(t)) { var i = t.type; "mousedown" !== i && "keypress" !== i && "keyup" !== i && "keydown" !== i || yi(t.target || t.srcElement), this._fireDOMEvent(t, i) } }, _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"], _fireDOMEvent: function(t, e, n) { if ("click" === t.type) { var o = i({}, t);
                            o.type = "preclick", this._fireDOMEvent(o, o.type, n) } if (!t._stopped && (n = (n || []).concat(this._findEventTargets(t, e))).length) { var s = n[0]; "contextmenu" === e && s.listens(e, !0) && Ai(t); var r = { originalEvent: t }; if ("keypress" !== t.type && "keydown" !== t.type && "keyup" !== t.type) { var a = s.getLatLng && (!s._radius || s._radius <= 10);
                                r.containerPoint = a ? this.latLngToContainerPoint(s.getLatLng()) : this.mouseEventToContainerPoint(t), r.layerPoint = this.containerPointToLayerPoint(r.containerPoint), r.latlng = a ? s.getLatLng() : this.layerPointToLatLng(r.layerPoint) } for (var h = 0; h < n.length; h++)
                                if (n[h].fire(e, r, !0), r.originalEvent._stopped || !1 === n[h].options.bubblingMouseEvents && -1 !== g(this._mouseEvents, e)) return } }, _draggableMoved: function(t) { return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved() }, _clearHandlers: function() { for (var t = 0, i = this._handlers.length; t < i; t++) this._handlers[t].disable() }, whenReady: function(t, i) { return this._loaded ? t.call(i || this, { target: this }) : this.on("load", t, i), this }, _getMapPanePos: function() { return mi(this._mapPane) || new E(0, 0) }, _moved: function() { var t = this._getMapPanePos(); return t && !t.equals([0, 0]) }, _getTopLeftPoint: function(t, i) { return (t && void 0 !== i ? this._getNewPixelOrigin(t, i) : this.getPixelOrigin()).subtract(this._getMapPanePos()) }, _getNewPixelOrigin: function(t, i) { var e = this.getSize()._divideBy(2); return this.project(t, i)._subtract(e)._add(this._getMapPanePos())._round() }, _latLngToNewLayerPoint: function(t, i, e) { var n = this._getNewPixelOrigin(e, i); return this.project(t, i)._subtract(n) }, _latLngBoundsToNewLayerBounds: function(t, i, e) { var n = this._getNewPixelOrigin(e, i); return I([this.project(t.getSouthWest(), i)._subtract(n), this.project(t.getNorthWest(), i)._subtract(n), this.project(t.getSouthEast(), i)._subtract(n), this.project(t.getNorthEast(), i)._subtract(n)]) }, _getCenterLayerPoint: function() { return this.containerPointToLayerPoint(this.getSize()._divideBy(2)) }, _getCenterOffset: function(t) { return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint()) }, _limitCenter: function(t, i, e) { if (!e) return t; var n = this.project(t, i),
                            o = this.getSize().divideBy(2),
                            s = new A(n.subtract(o), n.add(o)),
                            r = this._getBoundsOffset(s, e, i); return r.round().equals([0, 0]) ? t : this.unproject(n.add(r), i) }, _limitOffset: function(t, i) { if (!i) return t; var e = this.getPixelBounds(),
                            n = new A(e.min.add(t), e.max.add(t)); return t.add(this._getBoundsOffset(n, i)) }, _getBoundsOffset: function(t, i, e) { var n = I(this.project(i.getNorthEast(), e), this.project(i.getSouthWest(), e)),
                            o = n.min.subtract(t.min),
                            s = n.max.subtract(t.max); return new E(this._rebound(o.x, -s.x), this._rebound(o.y, -s.y)) }, _rebound: function(t, i) { return t + i > 0 ? Math.round(t - i) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(i)) }, _limitZoom: function(t) { var i = this.getMinZoom(),
                            e = this.getMaxZoom(),
                            n = mt ? this.options.zoomSnap : 1; return n && (t = Math.round(t / n) * n), Math.max(i, Math.min(e, t)) }, _onPanTransitionStep: function() { this.fire("move") }, _onPanTransitionEnd: function() { hi(this._mapPane, "leaflet-pan-anim"), this.fire("moveend") }, _tryAnimatedPan: function(t, i) { var e = this._getCenterOffset(t)._trunc(); return !(!0 !== (i && i.animate) && !this.getSize().contains(e)) && (this.panBy(e, i), !0) }, _createAnimProxy: function() { var t = this._proxy = ii("div", "leaflet-proxy leaflet-zoom-animated");
                        this._panes.mapPane.appendChild(t), this.on("zoomanim", function(t) { var i = Xt,
                                e = this._proxy.style[i];
                            di(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)), e === this._proxy.style[i] && this._animatingZoom && this._onZoomTransitionEnd() }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this) }, _destroyAnimProxy: function() { ei(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy }, _animMoveEnd: function() { var t = this.getCenter(),
                            i = this.getZoom();
                        di(this._proxy, this.project(t, i), this.getZoomScale(i, 1)) }, _catchTransitionEnd: function(t) { this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd() }, _nothingToAnimate: function() { return !this._container.getElementsByClassName("leaflet-zoom-animated").length }, _tryAnimatedZoom: function(t, i, e) { if (this._animatingZoom) return !0; if (e = e || {}, !this._zoomAnimated || !1 === e.animate || this._nothingToAnimate() || Math.abs(i - this._zoom) > this.options.zoomAnimationThreshold) return !1; var n = this.getZoomScale(i),
                            o = this._getCenterOffset(t)._divideBy(1 - 1 / n); return !(!0 !== e.animate && !this.getSize().contains(o)) && (T(function() { this._moveStart(!0, !1)._animateZoom(t, i, !0) }, this), !0) }, _animateZoom: function(t, i, e, o) { this._mapPane && (e && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = i, ai(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", { center: t, zoom: i, noUpdate: o }), setTimeout(n(this._onZoomTransitionEnd, this), 250)) }, _onZoomTransitionEnd: function() { this._animatingZoom && (this._mapPane && hi(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom), T(function() { this._moveEnd(!0) }, this)) } }); var qi = C.extend({ options: { position: "topright" }, initialize: function(t) { _(this, t) }, getPosition: function() { return this.options.position }, setPosition: function(t) { var i = this._map; return i && i.removeControl(this), this.options.position = t, i && i.addControl(this), this }, getContainer: function() { return this._container }, addTo: function(t) { this.remove(), this._map = t; var i = this._container = this.onAdd(t),
                            e = this.getPosition(),
                            n = t._controlCorners[e]; return ai(i, "leaflet-control"), -1 !== e.indexOf("bottom") ? n.insertBefore(i, n.firstChild) : n.appendChild(i), this._map.on("unload", this.remove, this), this }, remove: function() { return this._map ? (ei(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this }, _refocusOnMap: function(t) { this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus() } }),
                Gi = function(t) { return new qi(t) };
            Vi.include({ addControl: function(t) { return t.addTo(this), this }, removeControl: function(t) { return t.remove(), this }, _initControlPos: function() { var t = this._controlCorners = {},
                        i = "leaflet-",
                        e = this._controlContainer = ii("div", i + "control-container", this._container);

                    function n(n, o) { var s = i + n + " " + i + o;
                        t[n + o] = ii("div", s, e) } n("top", "left"), n("top", "right"), n("bottom", "left"), n("bottom", "right") }, _clearControlPos: function() { for (var t in this._controlCorners) ei(this._controlCorners[t]);
                    ei(this._controlContainer), delete this._controlCorners, delete this._controlContainer } }); var Ki = qi.extend({ options: { collapsed: !0, position: "topright", autoZIndex: !0, hideSingleBase: !1, sortLayers: !1, sortFunction: function(t, i, e, n) { return e < n ? -1 : n < e ? 1 : 0 } }, initialize: function(t, i, e) { for (var n in _(this, e), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, t) this._addLayer(t[n], n); for (n in i) this._addLayer(i[n], n, !0) }, onAdd: function(t) { this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this); for (var i = 0; i < this._layers.length; i++) this._layers[i].layer.on("add remove", this._onLayerChange, this); return this._container }, addTo: function(t) { return qi.prototype.addTo.call(this, t), this._expandIfNotCollapsed() }, onRemove: function() { this._map.off("zoomend", this._checkDisabledLayers, this); for (var t = 0; t < this._layers.length; t++) this._layers[t].layer.off("add remove", this._onLayerChange, this) }, addBaseLayer: function(t, i) { return this._addLayer(t, i), this._map ? this._update() : this }, addOverlay: function(t, i) { return this._addLayer(t, i, !0), this._map ? this._update() : this }, removeLayer: function(t) { t.off("add remove", this._onLayerChange, this); var i = this._getLayer(s(t)); return i && this._layers.splice(this._layers.indexOf(i), 1), this._map ? this._update() : this }, expand: function() { ai(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null; var t = this._map.getSize().y - (this._container.offsetTop + 50); return t < this._section.clientHeight ? (ai(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t + "px") : hi(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this }, collapse: function() { return hi(this._container, "leaflet-control-layers-expanded"), this }, _initLayout: function() { var t = "leaflet-control-layers",
                            i = this._container = ii("div", t),
                            e = this.options.collapsed;
                        i.setAttribute("aria-haspopup", !0), Bi(i), ki(i); var n = this._section = ii("section", t + "-list");
                        e && (this._map.on("click", this.collapse, this), it || bi(i, { mouseenter: this.expand, mouseleave: this.collapse }, this)); var o = this._layersLink = ii("a", t + "-toggle", i);
                        o.href = "#", o.title = "Layers", wt ? (bi(o, "click", Ii), bi(o, "click", this.expand, this)) : bi(o, "focus", this.expand, this), e || this.expand(), this._baseLayersList = ii("div", t + "-base", n), this._separator = ii("div", t + "-separator", n), this._overlaysList = ii("div", t + "-overlays", n), i.appendChild(n) }, _getLayer: function(t) { for (var i = 0; i < this._layers.length; i++)
                            if (this._layers[i] && s(this._layers[i].layer) === t) return this._layers[i] }, _addLayer: function(t, i, e) { this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({ layer: t, name: i, overlay: e }), this.options.sortLayers && this._layers.sort(n(function(t, i) { return this.options.sortFunction(t.layer, i.layer, t.name, i.name) }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed() }, _update: function() { if (!this._container) return this;
                        ni(this._baseLayersList), ni(this._overlaysList), this._layerControlInputs = []; var t, i, e, n, o = 0; for (e = 0; e < this._layers.length; e++) n = this._layers[e], this._addItem(n), i = i || n.overlay, t = t || !n.overlay, o += n.overlay ? 0 : 1; return this.options.hideSingleBase && (t = t && o > 1, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = i && t ? "" : "none", this }, _onLayerChange: function(t) { this._handlingClick || this._update(); var i = this._getLayer(s(t.target)),
                            e = i.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;
                        e && this._map.fire(e, i) }, _createRadioElement: function(t, i) { var e = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (i ? ' checked="checked"' : "") + "/>",
                            n = document.createElement("div"); return n.innerHTML = e, n.firstChild }, _addItem: function(t) { var i, e = document.createElement("label"),
                            n = this._map.hasLayer(t.layer);
                        t.overlay ? ((i = document.createElement("input")).type = "checkbox", i.className = "leaflet-control-layers-selector", i.defaultChecked = n) : i = this._createRadioElement("leaflet-base-layers_" + s(this), n), this._layerControlInputs.push(i), i.layerId = s(t.layer), bi(i, "click", this._onInputClick, this); var o = document.createElement("span");
                        o.innerHTML = " " + t.name; var r = document.createElement("div"); return e.appendChild(r), r.appendChild(i), r.appendChild(o), (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(e), this._checkDisabledLayers(), e }, _onInputClick: function() { var t, i, e = this._layerControlInputs,
                            n = [],
                            o = [];
                        this._handlingClick = !0; for (var s = e.length - 1; s >= 0; s--) t = e[s], i = this._getLayer(t.layerId).layer, t.checked ? n.push(i) : t.checked || o.push(i); for (s = 0; s < o.length; s++) this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]); for (s = 0; s < n.length; s++) this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
                        this._handlingClick = !1, this._refocusOnMap() }, _checkDisabledLayers: function() { for (var t, i, e = this._layerControlInputs, n = this._map.getZoom(), o = e.length - 1; o >= 0; o--) t = e[o], i = this._getLayer(t.layerId).layer, t.disabled = void 0 !== i.options.minZoom && n < i.options.minZoom || void 0 !== i.options.maxZoom && n > i.options.maxZoom }, _expandIfNotCollapsed: function() { return this._map && !this.options.collapsed && this.expand(), this }, _expand: function() { return this.expand() }, _collapse: function() { return this.collapse() } }),
                Yi = qi.extend({ options: { position: "topleft", zoomInText: "+", zoomInTitle: "Zoom in", zoomOutText: "&#x2212;", zoomOutTitle: "Zoom out" }, onAdd: function(t) { var i = "leaflet-control-zoom",
                            e = ii("div", i + " leaflet-bar"),
                            n = this.options; return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, i + "-in", e, this._zoomIn), this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, i + "-out", e, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), e }, onRemove: function(t) { t.off("zoomend zoomlevelschange", this._updateDisabled, this) }, disable: function() { return this._disabled = !0, this._updateDisabled(), this }, enable: function() { return this._disabled = !1, this._updateDisabled(), this }, _zoomIn: function(t) {!this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1)) }, _zoomOut: function(t) {!this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1)) }, _createButton: function(t, i, e, n, o) { var s = ii("a", e, n); return s.innerHTML = t, s.href = "#", s.title = i, s.setAttribute("role", "button"), s.setAttribute("aria-label", i), Bi(s), bi(s, "click", Ii), bi(s, "click", o, this), bi(s, "click", this._refocusOnMap, this), s }, _updateDisabled: function() { var t = this._map,
                            i = "leaflet-disabled";
                        hi(this._zoomInButton, i), hi(this._zoomOutButton, i), (this._disabled || t._zoom === t.getMinZoom()) && ai(this._zoomOutButton, i), (this._disabled || t._zoom === t.getMaxZoom()) && ai(this._zoomInButton, i) } });
            Vi.mergeOptions({ zoomControl: !0 }), Vi.addInitHook(function() { this.options.zoomControl && (this.zoomControl = new Yi, this.addControl(this.zoomControl)) }); var Xi = qi.extend({ options: { position: "bottomleft", maxWidth: 100, metric: !0, imperial: !0 }, onAdd: function(t) { var i = ii("div", "leaflet-control-scale"),
                            e = this.options; return this._addScales(e, "leaflet-control-scale-line", i), t.on(e.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i }, onRemove: function(t) { t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this) }, _addScales: function(t, i, e) { t.metric && (this._mScale = ii("div", i, e)), t.imperial && (this._iScale = ii("div", i, e)) }, _update: function() { var t = this._map,
                            i = t.getSize().y / 2,
                            e = t.distance(t.containerPointToLatLng([0, i]), t.containerPointToLatLng([this.options.maxWidth, i]));
                        this._updateScales(e) }, _updateScales: function(t) { this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t) }, _updateMetric: function(t) { var i = this._getRoundNum(t),
                            e = i < 1e3 ? i + " m" : i / 1e3 + " km";
                        this._updateScale(this._mScale, e, i / t) }, _updateImperial: function(t) { var i, e, n, o = 3.2808399 * t;
                        o > 5280 ? (i = o / 5280, e = this._getRoundNum(i), this._updateScale(this._iScale, e + " mi", e / i)) : (n = this._getRoundNum(o), this._updateScale(this._iScale, n + " ft", n / o)) }, _updateScale: function(t, i, e) { t.style.width = Math.round(this.options.maxWidth * e) + "px", t.innerHTML = i }, _getRoundNum: function(t) { var i = Math.pow(10, (Math.floor(t) + "").length - 1),
                            e = t / i; return i * (e = e >= 10 ? 10 : e >= 5 ? 5 : e >= 3 ? 3 : e >= 2 ? 2 : 1) } }),
                Ji = qi.extend({ options: { position: "bottomright", prefix: '<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>' }, initialize: function(t) { _(this, t), this._attributions = {} }, onAdd: function(t) { for (var i in t.attributionControl = this, this._container = ii("div", "leaflet-control-attribution"), Bi(this._container), t._layers) t._layers[i].getAttribution && this.addAttribution(t._layers[i].getAttribution()); return this._update(), this._container }, setPrefix: function(t) { return this.options.prefix = t, this._update(), this }, addAttribution: function(t) { return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : this }, removeAttribution: function(t) { return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this }, _update: function() { if (this._map) { var t = []; for (var i in this._attributions) this._attributions[i] && t.push(i); var e = [];
                            this.options.prefix && e.push(this.options.prefix), t.length && e.push(t.join(", ")), this._container.innerHTML = e.join(" | ") } } });
            Vi.mergeOptions({ attributionControl: !0 }), Vi.addInitHook(function() { this.options.attributionControl && (new Ji).addTo(this) });
            qi.Layers = Ki, qi.Zoom = Yi, qi.Scale = Xi, qi.Attribution = Ji, Gi.layers = function(t, i, e) { return new Ki(t, i, e) }, Gi.zoom = function(t) { return new Yi(t) }, Gi.scale = function(t) { return new Xi(t) }, Gi.attribution = function(t) { return new Ji(t) }; var $i = C.extend({ initialize: function(t) { this._map = t }, enable: function() { return this._enabled ? this : (this._enabled = !0, this.addHooks(), this) }, disable: function() { return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this }, enabled: function() { return !!this._enabled } });
            $i.addTo = function(t, i) { return t.addHandler(i, this), this }; var Qi, te = { Events: S },
                ie = wt ? "touchstart mousedown" : "mousedown",
                ee = { mousedown: "mouseup", touchstart: "touchend", pointerdown: "touchend", MSPointerDown: "touchend" },
                ne = { mousedown: "mousemove", touchstart: "touchmove", pointerdown: "touchmove", MSPointerDown: "touchmove" },
                oe = Z.extend({ options: { clickTolerance: 3 }, initialize: function(t, i, e, n) { _(this, n), this._element = t, this._dragStartTarget = i || t, this._preventOutline = e }, enable: function() { this._enabled || (bi(this._dragStartTarget, ie, this._onDown, this), this._enabled = !0) }, disable: function() { this._enabled && (oe._dragging === this && this.finishDrag(), Mi(this._dragStartTarget, ie, this._onDown, this), this._enabled = !1, this._moved = !1) }, _onDown: function(t) { if (!t._simulated && this._enabled && (this._moved = !1, !ri(this._element, "leaflet-zoom-anim") && !(oe._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || (oe._dragging = this, this._preventOutline && yi(this._element), gi(), Vt(), this._moving)))) { this.fire("down"); var i = t.touches ? t.touches[0] : t,
                                e = wi(this._element);
                            this._startPoint = new E(i.clientX, i.clientY), this._parentScale = Pi(e), bi(document, ne[t.type], this._onMove, this), bi(document, ee[t.type], this._onUp, this) } }, _onMove: function(t) { if (!t._simulated && this._enabled)
                            if (t.touches && t.touches.length > 1) this._moved = !0;
                            else { var i = t.touches && 1 === t.touches.length ? t.touches[0] : t,
                                    e = new E(i.clientX, i.clientY)._subtract(this._startPoint);
                                (e.x || e.y) && (Math.abs(e.x) + Math.abs(e.y) < this.options.clickTolerance || (e.x /= this._parentScale.x, e.y /= this._parentScale.y, Ai(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = mi(this._element).subtract(e), ai(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), ai(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(e), this._moving = !0, M(this._animRequest), this._lastEvent = t, this._animRequest = T(this._updatePosition, this, !0))) } }, _updatePosition: function() { var t = { originalEvent: this._lastEvent };
                        this.fire("predrag", t), pi(this._element, this._newPos), this.fire("drag", t) }, _onUp: function(t) {!t._simulated && this._enabled && this.finishDrag() }, finishDrag: function() { for (var t in hi(document.body, "leaflet-dragging"), this._lastTarget && (hi(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), ne) Mi(document, ne[t], this._onMove, this), Mi(document, ee[t], this._onUp, this);
                        vi(), qt(), this._moved && this._moving && (M(this._animRequest), this.fire("dragend", { distance: this._newPos.distanceTo(this._startPos) })), this._moving = !1, oe._dragging = !1 } });

            function se(t, i) { if (!i || !t.length) return t.slice(); var e = i * i; return t = function(t, i) { var e = t.length,
                        n = new(typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(e);
                    n[0] = n[e - 1] = 1,
                        function t(i, e, n, o, s) { var r, a, h, u = 0; for (a = o + 1; a <= s - 1; a++)(h = le(i[a], i[o], i[s], !0)) > u && (r = a, u = h);
                            u > n && (e[r] = 1, t(i, e, n, o, r), t(i, e, n, r, s)) }(t, n, i, 0, e - 1); var o, s = []; for (o = 0; o < e; o++) n[o] && s.push(t[o]); return s }(t = function(t, i) { for (var e = [t[0]], n = 1, o = 0, s = t.length; n < s; n++) r = t[n], a = t[o], h = void 0, u = void 0, h = a.x - r.x, u = a.y - r.y, h * h + u * u > i && (e.push(t[n]), o = n); var r, a, h, u;
                    o < s - 1 && e.push(t[s - 1]); return e }(t, e), e) }

            function re(t, i, e) { return Math.sqrt(le(t, i, e, !0)) }

            function ae(t, i, e, n, o) { var s, r, a, h = n ? Qi : ue(t, e),
                    u = ue(i, e); for (Qi = u;;) { if (!(h | u)) return [t, i]; if (h & u) return !1;
                    a = ue(r = he(t, i, s = h || u, e, o), e), s === h ? (t = r, h = a) : (i = r, u = a) } }

            function he(t, i, e, n, o) { var s, r, a = i.x - t.x,
                    h = i.y - t.y,
                    u = n.min,
                    l = n.max; return 8 & e ? (s = t.x + a * (l.y - t.y) / h, r = l.y) : 4 & e ? (s = t.x + a * (u.y - t.y) / h, r = u.y) : 2 & e ? (s = l.x, r = t.y + h * (l.x - t.x) / a) : 1 & e && (s = u.x, r = t.y + h * (u.x - t.x) / a), new E(s, r, o) }

            function ue(t, i) { var e = 0; return t.x < i.min.x ? e |= 1 : t.x > i.max.x && (e |= 2), t.y < i.min.y ? e |= 4 : t.y > i.max.y && (e |= 8), e }

            function le(t, i, e, n) { var o, s = i.x,
                    r = i.y,
                    a = e.x - s,
                    h = e.y - r,
                    u = a * a + h * h; return u > 0 && ((o = ((t.x - s) * a + (t.y - r) * h) / u) > 1 ? (s = e.x, r = e.y) : o > 0 && (s += a * o, r += h * o)), a = t.x - s, h = t.y - r, n ? a * a + h * h : new E(s, r) }

            function ce(t) { return !f(t[0]) || "object" != typeof t[0][0] && void 0 !== t[0][0] }

            function _e(t) { return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), ce(t) } var de = { simplify: se, pointToSegmentDistance: re, closestPointOnSegment: function(t, i, e) { return le(t, i, e) }, clipSegment: ae, _getEdgeIntersection: he, _getBitCode: ue, _sqClosestPointOnSegment: le, isFlat: ce, _flat: _e };

            function pe(t, i, e) { var n, o, s, r, a, h, u, l, c, _ = [1, 4, 2, 8]; for (o = 0, u = t.length; o < u; o++) t[o]._code = ue(t[o], i); for (r = 0; r < 4; r++) { for (l = _[r], n = [], o = 0, s = (u = t.length) - 1; o < u; s = o++) a = t[o], h = t[s], a._code & l ? h._code & l || ((c = he(h, a, l, i, e))._code = ue(c, i), n.push(c)) : (h._code & l && ((c = he(h, a, l, i, e))._code = ue(c, i), n.push(c)), n.push(a));
                    t = n } return t } var me = { clipPolygon: pe },
                fe = { project: function(t) { return new E(t.lng, t.lat) }, unproject: function(t) { return new N(t.y, t.x) }, bounds: new A([-180, -90], [180, 90]) },
                ge = { R: 6378137, R_MINOR: 6356752.314245179, bounds: new A([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]), project: function(t) { var i = Math.PI / 180,
                            e = this.R,
                            n = t.lat * i,
                            o = this.R_MINOR / e,
                            s = Math.sqrt(1 - o * o),
                            r = s * Math.sin(n),
                            a = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - r) / (1 + r), s / 2); return n = -e * Math.log(Math.max(a, 1e-10)), new E(t.lng * i * e, n) }, unproject: function(t) { for (var i, e = 180 / Math.PI, n = this.R, o = this.R_MINOR / n, s = Math.sqrt(1 - o * o), r = Math.exp(-t.y / n), a = Math.PI / 2 - 2 * Math.atan(r), h = 0, u = .1; h < 15 && Math.abs(u) > 1e-7; h++) i = s * Math.sin(a), i = Math.pow((1 - i) / (1 + i), s / 2), a += u = Math.PI / 2 - 2 * Math.atan(r * i) - a; return new N(a * e, t.x * e / n) } },
                ve = { LonLat: fe, Mercator: ge, SphericalMercator: F },
                ye = i({}, H, { code: "EPSG:3395", projection: ge, transformation: function() { var t = .5 / (Math.PI * ge.R); return V(t, .5, -t, .5) }() }),
                xe = i({}, H, { code: "EPSG:4326", projection: fe, transformation: V(1 / 180, 1, -1 / 180, .5) }),
                we = i({}, W, { projection: fe, transformation: V(1, 0, -1, 0), scale: function(t) { return Math.pow(2, t) }, zoom: function(t) { return Math.log(t) / Math.LN2 }, distance: function(t, i) { var e = i.lng - t.lng,
                            n = i.lat - t.lat; return Math.sqrt(e * e + n * n) }, infinite: !0 });
            W.Earth = H, W.EPSG3395 = ye, W.EPSG3857 = q, W.EPSG900913 = G, W.EPSG4326 = xe, W.Simple = we; var Pe = Z.extend({ options: { pane: "overlayPane", attribution: null, bubblingMouseEvents: !0 }, addTo: function(t) { return t.addLayer(this), this }, remove: function() { return this.removeFrom(this._map || this._mapToAdd) }, removeFrom: function(t) { return t && t.removeLayer(this), this }, getPane: function(t) { return this._map.getPane(t ? this.options[t] || t : this.options.pane) }, addInteractiveTarget: function(t) { return this._map._targets[s(t)] = this, this }, removeInteractiveTarget: function(t) { return delete this._map._targets[s(t)], this }, getAttribution: function() { return this.options.attribution }, _layerAdd: function(t) { var i = t.target; if (i.hasLayer(this)) { if (this._map = i, this._zoomAnimated = i._zoomAnimated, this.getEvents) { var e = this.getEvents();
                            i.on(e, this), this.once("remove", function() { i.off(e, this) }, this) } this.onAdd(i), this.getAttribution && i.attributionControl && i.attributionControl.addAttribution(this.getAttribution()), this.fire("add"), i.fire("layeradd", { layer: this }) } } });
            Vi.include({ addLayer: function(t) { if (!t._layerAdd) throw new Error("The provided object is not a Layer."); var i = s(t); return this._layers[i] ? this : (this._layers[i] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t), this) }, removeLayer: function(t) { var i = s(t); return this._layers[i] ? (this._loaded && t.onRemove(this), t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()), delete this._layers[i], this._loaded && (this.fire("layerremove", { layer: t }), t.fire("remove")), t._map = t._mapToAdd = null, this) : this }, hasLayer: function(t) { return !!t && s(t) in this._layers }, eachLayer: function(t, i) { for (var e in this._layers) t.call(i, this._layers[e]); return this }, _addLayers: function(t) { for (var i = 0, e = (t = t ? f(t) ? t : [t] : []).length; i < e; i++) this.addLayer(t[i]) }, _addZoomLimit: function(t) {!isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[s(t)] = t, this._updateZoomLevels()) }, _removeZoomLimit: function(t) { var i = s(t);
                    this._zoomBoundLayers[i] && (delete this._zoomBoundLayers[i], this._updateZoomLevels()) }, _updateZoomLevels: function() { var t = 1 / 0,
                        i = -1 / 0,
                        e = this._getZoomSpan(); for (var n in this._zoomBoundLayers) { var o = this._zoomBoundLayers[n].options;
                        t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom), i = void 0 === o.maxZoom ? i : Math.max(i, o.maxZoom) } this._layersMaxZoom = i === -1 / 0 ? void 0 : i, this._layersMinZoom = t === 1 / 0 ? void 0 : t, e !== this._getZoomSpan() && this.fire("zoomlevelschange"), void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom) } }); var Le = Pe.extend({ initialize: function(t, i) { var e, n; if (_(this, i), this._layers = {}, t)
                            for (e = 0, n = t.length; e < n; e++) this.addLayer(t[e]) }, addLayer: function(t) { var i = this.getLayerId(t); return this._layers[i] = t, this._map && this._map.addLayer(t), this }, removeLayer: function(t) { var i = t in this._layers ? t : this.getLayerId(t); return this._map && this._layers[i] && this._map.removeLayer(this._layers[i]), delete this._layers[i], this }, hasLayer: function(t) { return !!t && ("number" == typeof t ? t : this.getLayerId(t)) in this._layers }, clearLayers: function() { return this.eachLayer(this.removeLayer, this) }, invoke: function(t) { var i, e, n = Array.prototype.slice.call(arguments, 1); for (i in this._layers)(e = this._layers[i])[t] && e[t].apply(e, n); return this }, onAdd: function(t) { this.eachLayer(t.addLayer, t) }, onRemove: function(t) { this.eachLayer(t.removeLayer, t) }, eachLayer: function(t, i) { for (var e in this._layers) t.call(i, this._layers[e]); return this }, getLayer: function(t) { return this._layers[t] }, getLayers: function() { var t = []; return this.eachLayer(t.push, t), t }, setZIndex: function(t) { return this.invoke("setZIndex", t) }, getLayerId: function(t) { return s(t) } }),
                be = Le.extend({ addLayer: function(t) { return this.hasLayer(t) ? this : (t.addEventParent(this), Le.prototype.addLayer.call(this, t), this.fire("layeradd", { layer: t })) }, removeLayer: function(t) { return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), Le.prototype.removeLayer.call(this, t), this.fire("layerremove", { layer: t })) : this }, setStyle: function(t) { return this.invoke("setStyle", t) }, bringToFront: function() { return this.invoke("bringToFront") }, bringToBack: function() { return this.invoke("bringToBack") }, getBounds: function() { var t = new O; for (var i in this._layers) { var e = this._layers[i];
                            t.extend(e.getBounds ? e.getBounds() : e.getLatLng()) } return t } }),
                Te = C.extend({ options: { popupAnchor: [0, 0], tooltipAnchor: [0, 0] }, initialize: function(t) { _(this, t) }, createIcon: function(t) { return this._createIcon("icon", t) }, createShadow: function(t) { return this._createIcon("shadow", t) }, _createIcon: function(t, i) { var e = this._getIconUrl(t); if (!e) { if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs)."); return null } var n = this._createImg(e, i && "IMG" === i.tagName ? i : null); return this._setIconStyles(n, t), n }, _setIconStyles: function(t, i) { var e = this.options,
                            n = e[i + "Size"]; "number" == typeof n && (n = [n, n]); var o = B(n),
                            s = B("shadow" === i && e.shadowAnchor || e.iconAnchor || o && o.divideBy(2, !0));
                        t.className = "leaflet-marker-" + i + " " + (e.className || ""), s && (t.style.marginLeft = -s.x + "px", t.style.marginTop = -s.y + "px"), o && (t.style.width = o.x + "px", t.style.height = o.y + "px") }, _createImg: function(t, i) { return (i = i || document.createElement("img")).src = t, i }, _getIconUrl: function(t) { return bt && this.options[t + "RetinaUrl"] || this.options[t + "Url"] } }); var Me = Te.extend({ options: { iconUrl: "marker-icon.png", iconRetinaUrl: "marker-icon-2x.png", shadowUrl: "marker-shadow.png", iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], tooltipAnchor: [16, -28], shadowSize: [41, 41] }, _getIconUrl: function(t) { return Me.imagePath || (Me.imagePath = this._detectIconPath()), (this.options.imagePath || Me.imagePath) + Te.prototype._getIconUrl.call(this, t) }, _detectIconPath: function() { var t = ii("div", "leaflet-default-icon-path", document.body),
                            i = ti(t, "background-image") || ti(t, "backgroundImage"); return document.body.removeChild(t), i = null === i || 0 !== i.indexOf("url") ? "" : i.replace(/^url\(["']?/, "").replace(/marker-icon\.png["']?\)$/, "") } }),
                ze = $i.extend({ initialize: function(t) { this._marker = t }, addHooks: function() { var t = this._marker._icon;
                        this._draggable || (this._draggable = new oe(t, t, !0)), this._draggable.on({ dragstart: this._onDragStart, predrag: this._onPreDrag, drag: this._onDrag, dragend: this._onDragEnd }, this).enable(), ai(t, "leaflet-marker-draggable") }, removeHooks: function() { this._draggable.off({ dragstart: this._onDragStart, predrag: this._onPreDrag, drag: this._onDrag, dragend: this._onDragEnd }, this).disable(), this._marker._icon && hi(this._marker._icon, "leaflet-marker-draggable") }, moved: function() { return this._draggable && this._draggable._moved }, _adjustPan: function(t) { var i = this._marker,
                            e = i._map,
                            n = this._marker.options.autoPanSpeed,
                            o = this._marker.options.autoPanPadding,
                            s = mi(i._icon),
                            r = e.getPixelBounds(),
                            a = e.getPixelOrigin(),
                            h = I(r.min._subtract(a).add(o), r.max._subtract(a).subtract(o)); if (!h.contains(s)) { var u = B((Math.max(h.max.x, s.x) - h.max.x) / (r.max.x - h.max.x) - (Math.min(h.min.x, s.x) - h.min.x) / (r.min.x - h.min.x), (Math.max(h.max.y, s.y) - h.max.y) / (r.max.y - h.max.y) - (Math.min(h.min.y, s.y) - h.min.y) / (r.min.y - h.min.y)).multiplyBy(n);
                            e.panBy(u, { animate: !1 }), this._draggable._newPos._add(u), this._draggable._startPos._add(u), pi(i._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = T(this._adjustPan.bind(this, t)) } }, _onDragStart: function() { this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart") }, _onPreDrag: function(t) { this._marker.options.autoPan && (M(this._panRequest), this._panRequest = T(this._adjustPan.bind(this, t))) }, _onDrag: function(t) { var i = this._marker,
                            e = i._shadow,
                            n = mi(i._icon),
                            o = i._map.layerPointToLatLng(n);
                        e && pi(e, n), i._latlng = o, t.latlng = o, t.oldLatLng = this._oldLatLng, i.fire("move", t).fire("drag", t) }, _onDragEnd: function(t) { M(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t) } }),
                Ce = Pe.extend({ options: { icon: new Me, interactive: !0, keyboard: !0, title: "", alt: "", zIndexOffset: 0, opacity: 1, riseOnHover: !1, riseOffset: 250, pane: "markerPane", shadowPane: "shadowPane", bubblingMouseEvents: !1, draggable: !1, autoPan: !1, autoPanPadding: [50, 50], autoPanSpeed: 10 }, initialize: function(t, i) { _(this, i), this._latlng = D(t) }, onAdd: function(t) { this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update() }, onRemove: function(t) { this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow() }, getEvents: function() { return { zoom: this.update, viewreset: this.update } }, getLatLng: function() { return this._latlng }, setLatLng: function(t) { var i = this._latlng; return this._latlng = D(t), this.update(), this.fire("move", { oldLatLng: i, latlng: this._latlng }) }, setZIndexOffset: function(t) { return this.options.zIndexOffset = t, this.update() }, getIcon: function() { return this.options.icon }, setIcon: function(t) { return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this }, getElement: function() { return this._icon }, update: function() { if (this._icon && this._map) { var t = this._map.latLngToLayerPoint(this._latlng).round();
                            this._setPos(t) } return this }, _initIcon: function() { var t = this.options,
                            i = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
                            e = t.icon.createIcon(this._icon),
                            n = !1;
                        e !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (e.title = t.title), "IMG" === e.tagName && (e.alt = t.alt || "")), ai(e, i), t.keyboard && (e.tabIndex = "0"), this._icon = e, t.riseOnHover && this.on({ mouseover: this._bringToFront, mouseout: this._resetZIndex }); var o = t.icon.createShadow(this._shadow),
                            s = !1;
                        o !== this._shadow && (this._removeShadow(), s = !0), o && (ai(o, i), o.alt = ""), this._shadow = o, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), o && s && this.getPane(t.shadowPane).appendChild(this._shadow) }, _removeIcon: function() { this.options.riseOnHover && this.off({ mouseover: this._bringToFront, mouseout: this._resetZIndex }), ei(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null }, _removeShadow: function() { this._shadow && ei(this._shadow), this._shadow = null }, _setPos: function(t) { this._icon && pi(this._icon, t), this._shadow && pi(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex() }, _updateZIndex: function(t) { this._icon && (this._icon.style.zIndex = this._zIndex + t) }, _animateZoom: function(t) { var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
                        this._setPos(i) }, _initInteraction: function() { if (this.options.interactive && (ai(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), ze)) { var t = this.options.draggable;
                            this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new ze(this), t && this.dragging.enable() } }, setOpacity: function(t) { return this.options.opacity = t, this._map && this._updateOpacity(), this }, _updateOpacity: function() { var t = this.options.opacity;
                        this._icon && ci(this._icon, t), this._shadow && ci(this._shadow, t) }, _bringToFront: function() { this._updateZIndex(this.options.riseOffset) }, _resetZIndex: function() { this._updateZIndex(0) }, _getPopupAnchor: function() { return this.options.icon.options.popupAnchor }, _getTooltipAnchor: function() { return this.options.icon.options.tooltipAnchor } }); var Se = Pe.extend({ options: { stroke: !0, color: "#3388ff", weight: 3, opacity: 1, lineCap: "round", lineJoin: "round", dashArray: null, dashOffset: null, fill: !1, fillColor: null, fillOpacity: .2, fillRule: "evenodd", interactive: !0, bubblingMouseEvents: !0 }, beforeAdd: function(t) { this._renderer = t.getRenderer(this) }, onAdd: function() { this._renderer._initPath(this), this._reset(), this._renderer._addPath(this) }, onRemove: function() { this._renderer._removePath(this) }, redraw: function() { return this._map && this._renderer._updatePath(this), this }, setStyle: function(t) { return _(this, t), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t && Object.prototype.hasOwnProperty.call(t, "weight") && this._updateBounds()), this }, bringToFront: function() { return this._renderer && this._renderer._bringToFront(this), this }, bringToBack: function() { return this._renderer && this._renderer._bringToBack(this), this }, getElement: function() { return this._path }, _reset: function() { this._project(), this._update() }, _clickTolerance: function() { return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance } }),
                Ze = Se.extend({ options: { fill: !0, radius: 10 }, initialize: function(t, i) { _(this, i), this._latlng = D(t), this._radius = this.options.radius }, setLatLng: function(t) { var i = this._latlng; return this._latlng = D(t), this.redraw(), this.fire("move", { oldLatLng: i, latlng: this._latlng }) }, getLatLng: function() { return this._latlng }, setRadius: function(t) { return this.options.radius = this._radius = t, this.redraw() }, getRadius: function() { return this._radius }, setStyle: function(t) { var i = t && t.radius || this._radius; return Se.prototype.setStyle.call(this, t), this.setRadius(i), this }, _project: function() { this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds() }, _updateBounds: function() { var t = this._radius,
                            i = this._radiusY || t,
                            e = this._clickTolerance(),
                            n = [t + e, i + e];
                        this._pxBounds = new A(this._point.subtract(n), this._point.add(n)) }, _update: function() { this._map && this._updatePath() }, _updatePath: function() { this._renderer._updateCircle(this) }, _empty: function() { return this._radius && !this._renderer._bounds.intersects(this._pxBounds) }, _containsPoint: function(t) { return t.distanceTo(this._point) <= this._radius + this._clickTolerance() } }); var Ee = Ze.extend({ initialize: function(t, e, n) { if ("number" == typeof e && (e = i({}, n, { radius: e })), _(this, e), this._latlng = D(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
                    this._mRadius = this.options.radius }, setRadius: function(t) { return this._mRadius = t, this.redraw() }, getRadius: function() { return this._mRadius }, getBounds: function() { var t = [this._radius, this._radiusY || this._radius]; return new O(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t))) }, setStyle: Se.prototype.setStyle, _project: function() { var t = this._latlng.lng,
                        i = this._latlng.lat,
                        e = this._map,
                        n = e.options.crs; if (n.distance === H.distance) { var o = Math.PI / 180,
                            s = this._mRadius / H.R / o,
                            r = e.project([i + s, t]),
                            a = e.project([i - s, t]),
                            h = r.add(a).divideBy(2),
                            u = e.unproject(h).lat,
                            l = Math.acos((Math.cos(s * o) - Math.sin(i * o) * Math.sin(u * o)) / (Math.cos(i * o) * Math.cos(u * o))) / o;
                        (isNaN(l) || 0 === l) && (l = s / Math.cos(Math.PI / 180 * i)), this._point = h.subtract(e.getPixelOrigin()), this._radius = isNaN(l) ? 0 : h.x - e.project([u, t - l]).x, this._radiusY = h.y - r.y } else { var c = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
                        this._point = e.latLngToLayerPoint(this._latlng), this._radius = this._point.x - e.latLngToLayerPoint(c).x } this._updateBounds() } }); var ke = Se.extend({ options: { smoothFactor: 1, noClip: !1 }, initialize: function(t, i) { _(this, i), this._setLatLngs(t) }, getLatLngs: function() { return this._latlngs }, setLatLngs: function(t) { return this._setLatLngs(t), this.redraw() }, isEmpty: function() { return !this._latlngs.length }, closestLayerPoint: function(t) { for (var i, e, n = 1 / 0, o = null, s = le, r = 0, a = this._parts.length; r < a; r++)
                        for (var h = this._parts[r], u = 1, l = h.length; u < l; u++) { var c = s(t, i = h[u - 1], e = h[u], !0);
                            c < n && (n = c, o = s(t, i, e)) }
                    return o && (o.distance = Math.sqrt(n)), o }, getCenter: function() { if (!this._map) throw new Error("Must add layer to map before using getCenter()"); var t, i, e, n, o, s, r, a = this._rings[0],
                        h = a.length; if (!h) return null; for (t = 0, i = 0; t < h - 1; t++) i += a[t].distanceTo(a[t + 1]) / 2; if (0 === i) return this._map.layerPointToLatLng(a[0]); for (t = 0, n = 0; t < h - 1; t++)
                        if (o = a[t], s = a[t + 1], (n += e = o.distanceTo(s)) > i) return r = (n - i) / e, this._map.layerPointToLatLng([s.x - r * (s.x - o.x), s.y - r * (s.y - o.y)]) }, getBounds: function() { return this._bounds }, addLatLng: function(t, i) { return i = i || this._defaultShape(), t = D(t), i.push(t), this._bounds.extend(t), this.redraw() }, _setLatLngs: function(t) { this._bounds = new O, this._latlngs = this._convertLatLngs(t) }, _defaultShape: function() { return ce(this._latlngs) ? this._latlngs : this._latlngs[0] }, _convertLatLngs: function(t) { for (var i = [], e = ce(t), n = 0, o = t.length; n < o; n++) e ? (i[n] = D(t[n]), this._bounds.extend(i[n])) : i[n] = this._convertLatLngs(t[n]); return i }, _project: function() { var t = new A;
                    this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t), this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t, this._updateBounds()) }, _updateBounds: function() { var t = this._clickTolerance(),
                        i = new E(t, t);
                    this._pxBounds = new A([this._rawPxBounds.min.subtract(i), this._rawPxBounds.max.add(i)]) }, _projectLatlngs: function(t, i, e) { var n, o, s = t[0] instanceof N,
                        r = t.length; if (s) { for (o = [], n = 0; n < r; n++) o[n] = this._map.latLngToLayerPoint(t[n]), e.extend(o[n]);
                        i.push(o) } else
                        for (n = 0; n < r; n++) this._projectLatlngs(t[n], i, e) }, _clipPoints: function() { var t = this._renderer._bounds; if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t))
                        if (this.options.noClip) this._parts = this._rings;
                        else { var i, e, n, o, s, r, a, h = this._parts; for (i = 0, n = 0, o = this._rings.length; i < o; i++)
                                for (e = 0, s = (a = this._rings[i]).length; e < s - 1; e++)(r = ae(a[e], a[e + 1], t, e, !0)) && (h[n] = h[n] || [], h[n].push(r[0]), r[1] === a[e + 1] && e !== s - 2 || (h[n].push(r[1]), n++)) } }, _simplifyPoints: function() { for (var t = this._parts, i = this.options.smoothFactor, e = 0, n = t.length; e < n; e++) t[e] = se(t[e], i) }, _update: function() { this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath()) }, _updatePath: function() { this._renderer._updatePoly(this) }, _containsPoint: function(t, i) { var e, n, o, s, r, a, h = this._clickTolerance(); if (!this._pxBounds || !this._pxBounds.contains(t)) return !1; for (e = 0, s = this._parts.length; e < s; e++)
                        for (n = 0, o = (r = (a = this._parts[e]).length) - 1; n < r; o = n++)
                            if ((i || 0 !== n) && re(t, a[o], a[n]) <= h) return !0; return !1 } });
            ke._flat = _e; var Be = ke.extend({ options: { fill: !0 }, isEmpty: function() { return !this._latlngs.length || !this._latlngs[0].length }, getCenter: function() { if (!this._map) throw new Error("Must add layer to map before using getCenter()"); var t, i, e, n, o, s, r, a, h, u = this._rings[0],
                        l = u.length; if (!l) return null; for (s = r = a = 0, t = 0, i = l - 1; t < l; i = t++) e = u[t], n = u[i], o = e.y * n.x - n.y * e.x, r += (e.x + n.x) * o, a += (e.y + n.y) * o, s += 3 * o; return h = 0 === s ? u[0] : [r / s, a / s], this._map.layerPointToLatLng(h) }, _convertLatLngs: function(t) { var i = ke.prototype._convertLatLngs.call(this, t),
                        e = i.length; return e >= 2 && i[0] instanceof N && i[0].equals(i[e - 1]) && i.pop(), i }, _setLatLngs: function(t) { ke.prototype._setLatLngs.call(this, t), ce(this._latlngs) && (this._latlngs = [this._latlngs]) }, _defaultShape: function() { return ce(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0] }, _clipPoints: function() { var t = this._renderer._bounds,
                        i = this.options.weight,
                        e = new E(i, i); if (t = new A(t.min.subtract(e), t.max.add(e)), this._parts = [], this._pxBounds && this._pxBounds.intersects(t))
                        if (this.options.noClip) this._parts = this._rings;
                        else
                            for (var n, o = 0, s = this._rings.length; o < s; o++)(n = pe(this._rings[o], t, !0)).length && this._parts.push(n) }, _updatePath: function() { this._renderer._updatePoly(this, !0) }, _containsPoint: function(t) { var i, e, n, o, s, r, a, h, u = !1; if (!this._pxBounds || !this._pxBounds.contains(t)) return !1; for (o = 0, a = this._parts.length; o < a; o++)
                        for (s = 0, r = (h = (i = this._parts[o]).length) - 1; s < h; r = s++) e = i[s], n = i[r], e.y > t.y != n.y > t.y && t.x < (n.x - e.x) * (t.y - e.y) / (n.y - e.y) + e.x && (u = !u); return u || ke.prototype._containsPoint.call(this, t, !0) } }); var Ae = be.extend({ initialize: function(t, i) { _(this, i), this._layers = {}, t && this.addData(t) }, addData: function(t) { var i, e, n, o = f(t) ? t : t.features; if (o) { for (i = 0, e = o.length; i < e; i++)((n = o[i]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n); return this } var s = this.options; if (s.filter && !s.filter(t)) return this; var r = Ie(t, s); return r ? (r.feature = He(t), r.defaultOptions = r.options, this.resetStyle(r), s.onEachFeature && s.onEachFeature(t, r), this.addLayer(r)) : this }, resetStyle: function(t) { return void 0 === t ? this.eachLayer(this.resetStyle, this) : (t.options = i({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this) }, setStyle: function(t) { return this.eachLayer(function(i) { this._setLayerStyle(i, t) }, this) }, _setLayerStyle: function(t, i) { t.setStyle && ("function" == typeof i && (i = i(t.feature)), t.setStyle(i)) } });

            function Ie(t, i) { var e, n, o, s, r = "Feature" === t.type ? t.geometry : t,
                    a = r ? r.coordinates : null,
                    h = [],
                    u = i && i.pointToLayer,
                    l = i && i.coordsToLatLng || Re; if (!a && !r) return null; switch (r.type) {
                    case "Point":
                        return Oe(u, t, e = l(a), i);
                    case "MultiPoint":
                        for (o = 0, s = a.length; o < s; o++) e = l(a[o]), h.push(Oe(u, t, e, i)); return new be(h);
                    case "LineString":
                    case "MultiLineString":
                        return n = Ne(a, "LineString" === r.type ? 0 : 1, l), new ke(n, i);
                    case "Polygon":
                    case "MultiPolygon":
                        return n = Ne(a, "Polygon" === r.type ? 1 : 2, l), new Be(n, i);
                    case "GeometryCollection":
                        for (o = 0, s = r.geometries.length; o < s; o++) { var c = Ie({ geometry: r.geometries[o], type: "Feature", properties: t.properties }, i);
                            c && h.push(c) } return new be(h);
                    default:
                        throw new Error("Invalid GeoJSON object.") } }

            function Oe(t, i, e, n) { return t ? t(i, e) : new Ce(e, n && n.markersInheritOptions && n) }

            function Re(t) { return new N(t[1], t[0], t[2]) }

            function Ne(t, i, e) { for (var n, o = [], s = 0, r = t.length; s < r; s++) n = i ? Ne(t[s], i - 1, e) : (e || Re)(t[s]), o.push(n); return o }

            function De(t, i) { return i = "number" == typeof i ? i : 6, void 0 !== t.alt ? [u(t.lng, i), u(t.lat, i), u(t.alt, i)] : [u(t.lng, i), u(t.lat, i)] }

            function je(t, i, e, n) { for (var o = [], s = 0, r = t.length; s < r; s++) o.push(i ? je(t[s], i - 1, e, n) : De(t[s], n)); return !i && e && o.push(o[0]), o }

            function We(t, e) { return t.feature ? i({}, t.feature, { geometry: e }) : He(e) }

            function He(t) { return "Feature" === t.type || "FeatureCollection" === t.type ? t : { type: "Feature", properties: {}, geometry: t } } var Fe = { toGeoJSON: function(t) { return We(this, { type: "Point", coordinates: De(this.getLatLng(), t) }) } };

            function Ue(t, i) { return new Ae(t, i) } Ce.include(Fe), Ee.include(Fe), Ze.include(Fe), ke.include({ toGeoJSON: function(t) { var i = !ce(this._latlngs); return We(this, { type: (i ? "Multi" : "") + "LineString", coordinates: je(this._latlngs, i ? 1 : 0, !1, t) }) } }), Be.include({ toGeoJSON: function(t) { var i = !ce(this._latlngs),
                        e = i && !ce(this._latlngs[0]),
                        n = je(this._latlngs, e ? 2 : i ? 1 : 0, !0, t); return i || (n = [n]), We(this, { type: (e ? "Multi" : "") + "Polygon", coordinates: n }) } }), Le.include({ toMultiPoint: function(t) { var i = []; return this.eachLayer(function(e) { i.push(e.toGeoJSON(t).geometry.coordinates) }), We(this, { type: "MultiPoint", coordinates: i }) }, toGeoJSON: function(t) { var i = this.feature && this.feature.geometry && this.feature.geometry.type; if ("MultiPoint" === i) return this.toMultiPoint(t); var e = "GeometryCollection" === i,
                        n = []; return this.eachLayer(function(i) { if (i.toGeoJSON) { var o = i.toGeoJSON(t); if (e) n.push(o.geometry);
                            else { var s = He(o); "FeatureCollection" === s.type ? n.push.apply(n, s.features) : n.push(s) } } }), e ? We(this, { geometries: n, type: "GeometryCollection" }) : { type: "FeatureCollection", features: n } } }); var Ve = Ue,
                qe = Pe.extend({ options: { opacity: 1, alt: "", interactive: !1, crossOrigin: !1, errorOverlayUrl: "", zIndex: 1, className: "" }, initialize: function(t, i, e) { this._url = t, this._bounds = R(i), _(this, e) }, onAdd: function() { this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (ai(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset() }, onRemove: function() { ei(this._image), this.options.interactive && this.removeInteractiveTarget(this._image) }, setOpacity: function(t) { return this.options.opacity = t, this._image && this._updateOpacity(), this }, setStyle: function(t) { return t.opacity && this.setOpacity(t.opacity), this }, bringToFront: function() { return this._map && oi(this._image), this }, bringToBack: function() { return this._map && si(this._image), this }, setUrl: function(t) { return this._url = t, this._image && (this._image.src = t), this }, setBounds: function(t) { return this._bounds = R(t), this._map && this._reset(), this }, getEvents: function() { var t = { zoom: this._reset, viewreset: this._reset }; return this._zoomAnimated && (t.zoomanim = this._animateZoom), t }, setZIndex: function(t) { return this.options.zIndex = t, this._updateZIndex(), this }, getBounds: function() { return this._bounds }, getElement: function() { return this._image }, _initImage: function() { var t = "IMG" === this._url.tagName,
                            i = this._image = t ? this._url : ii("img");
                        ai(i, "leaflet-image-layer"), this._zoomAnimated && ai(i, "leaflet-zoom-animated"), this.options.className && ai(i, this.options.className), i.onselectstart = h, i.onmousemove = h, i.onload = n(this.fire, this, "load"), i.onerror = n(this._overlayOnError, this, "error"), (this.options.crossOrigin || "" === this.options.crossOrigin) && (i.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t ? this._url = i.src : (i.src = this._url, i.alt = this.options.alt) }, _animateZoom: function(t) { var i = this._map.getZoomScale(t.zoom),
                            e = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
                        di(this._image, e, i) }, _reset: function() { var t = this._image,
                            i = new A(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
                            e = i.getSize();
                        pi(t, i.min), t.style.width = e.x + "px", t.style.height = e.y + "px" }, _updateOpacity: function() { ci(this._image, this.options.opacity) }, _updateZIndex: function() { this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex) }, _overlayOnError: function() { this.fire("error"); var t = this.options.errorOverlayUrl;
                        t && this._url !== t && (this._url = t, this._image.src = t) } }),
                Ge = qe.extend({ options: { autoplay: !0, loop: !0, keepAspectRatio: !0, muted: !1 }, _initImage: function() { var t = "VIDEO" === this._url.tagName,
                            i = this._image = t ? this._url : ii("video"); if (ai(i, "leaflet-image-layer"), this._zoomAnimated && ai(i, "leaflet-zoom-animated"), this.options.className && ai(i, this.options.className), i.onselectstart = h, i.onmousemove = h, i.onloadeddata = n(this.fire, this, "load"), t) { for (var e = i.getElementsByTagName("source"), o = [], s = 0; s < e.length; s++) o.push(e[s].src);
                            this._url = e.length > 0 ? o : [i.src] } else { f(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(i.style, "objectFit") && (i.style.objectFit = "fill"), i.autoplay = !!this.options.autoplay, i.loop = !!this.options.loop, i.muted = !!this.options.muted; for (var r = 0; r < this._url.length; r++) { var a = ii("source");
                                a.src = this._url[r], i.appendChild(a) } } } }); var Ke = qe.extend({ _initImage: function() { var t = this._image = this._url;
                    ai(t, "leaflet-image-layer"), this._zoomAnimated && ai(t, "leaflet-zoom-animated"), this.options.className && ai(t, this.options.className), t.onselectstart = h, t.onmousemove = h } }); var Ye = Pe.extend({ options: { offset: [0, 7], className: "", pane: "popupPane" }, initialize: function(t, i) { _(this, t), this._source = i }, onAdd: function(t) { this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && ci(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && ci(this._container, 1), this.bringToFront() }, onRemove: function(t) { t._fadeAnimated ? (ci(this._container, 0), this._removeTimeout = setTimeout(n(ei, void 0, this._container), 200)) : ei(this._container) }, getLatLng: function() { return this._latlng }, setLatLng: function(t) { return this._latlng = D(t), this._map && (this._updatePosition(), this._adjustPan()), this }, getContent: function() { return this._content }, setContent: function(t) { return this._content = t, this.update(), this }, getElement: function() { return this._container }, update: function() { this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan()) }, getEvents: function() { var t = { zoom: this._updatePosition, viewreset: this._updatePosition }; return this._zoomAnimated && (t.zoomanim = this._animateZoom), t }, isOpen: function() { return !!this._map && this._map.hasLayer(this) }, bringToFront: function() { return this._map && oi(this._container), this }, bringToBack: function() { return this._map && si(this._container), this }, _prepareOpen: function(t, i, e) { if (i instanceof Pe || (e = i, i = t), i instanceof be)
                            for (var n in t._layers) { i = t._layers[n]; break }
                        if (!e)
                            if (i.getCenter) e = i.getCenter();
                            else { if (!i.getLatLng) throw new Error("Unable to get source layer LatLng.");
                                e = i.getLatLng() } return this._source = i, this.update(), e }, _updateContent: function() { if (this._content) { var t = this._contentNode,
                                i = "function" == typeof this._content ? this._content(this._source || this) : this._content; if ("string" == typeof i) t.innerHTML = i;
                            else { for (; t.hasChildNodes();) t.removeChild(t.firstChild);
                                t.appendChild(i) } this.fire("contentupdate") } }, _updatePosition: function() { if (this._map) { var t = this._map.latLngToLayerPoint(this._latlng),
                                i = B(this.options.offset),
                                e = this._getAnchor();
                            this._zoomAnimated ? pi(this._container, t.add(e)) : i = i.add(t).add(e); var n = this._containerBottom = -i.y,
                                o = this._containerLeft = -Math.round(this._containerWidth / 2) + i.x;
                            this._container.style.bottom = n + "px", this._container.style.left = o + "px" } }, _getAnchor: function() { return [0, 0] } }),
                Xe = Ye.extend({ options: { maxWidth: 300, minWidth: 50, maxHeight: null, autoPan: !0, autoPanPaddingTopLeft: null, autoPanPaddingBottomRight: null, autoPanPadding: [5, 5], keepInView: !1, closeButton: !0, autoClose: !0, closeOnEscapeKey: !0, className: "" }, openOn: function(t) { return t.openPopup(this), this }, onAdd: function(t) { Ye.prototype.onAdd.call(this, t), t.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof Se || this._source.on("preclick", Ei)) }, onRemove: function(t) { Ye.prototype.onRemove.call(this, t), t.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof Se || this._source.off("preclick", Ei)) }, getEvents: function() { var t = Ye.prototype.getEvents.call(this); return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t }, _close: function() { this._map && this._map.closePopup(this) }, _initLayout: function() { var t = "leaflet-popup",
                            i = this._container = ii("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated"),
                            e = this._wrapper = ii("div", t + "-content-wrapper", i); if (this._contentNode = ii("div", t + "-content", e), Bi(i), ki(this._contentNode), bi(i, "contextmenu", Ei), this._tipContainer = ii("div", t + "-tip-container", i), this._tip = ii("div", t + "-tip", this._tipContainer), this.options.closeButton) { var n = this._closeButton = ii("a", t + "-close-button", i);
                            n.href = "#close", n.innerHTML = "&#215;", bi(n, "click", this._onCloseButtonClick, this) } }, _updateLayout: function() { var t = this._contentNode,
                            i = t.style;
                        i.width = "", i.whiteSpace = "nowrap"; var e = t.offsetWidth;
                        e = Math.min(e, this.options.maxWidth), e = Math.max(e, this.options.minWidth), i.width = e + 1 + "px", i.whiteSpace = "", i.height = ""; var n = t.offsetHeight,
                            o = this.options.maxHeight;
                        o && n > o ? (i.height = o + "px", ai(t, "leaflet-popup-scrolled")) : hi(t, "leaflet-popup-scrolled"), this._containerWidth = this._container.offsetWidth }, _animateZoom: function(t) { var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
                            e = this._getAnchor();
                        pi(this._container, i.add(e)) }, _adjustPan: function() { if (this.options.autoPan) { this._map._panAnim && this._map._panAnim.stop(); var t = this._map,
                                i = parseInt(ti(this._container, "marginBottom"), 10) || 0,
                                e = this._container.offsetHeight + i,
                                n = this._containerWidth,
                                o = new E(this._containerLeft, -e - this._containerBottom);
                            o._add(mi(this._container)); var s = t.layerPointToContainerPoint(o),
                                r = B(this.options.autoPanPadding),
                                a = B(this.options.autoPanPaddingTopLeft || r),
                                h = B(this.options.autoPanPaddingBottomRight || r),
                                u = t.getSize(),
                                l = 0,
                                c = 0;
                            s.x + n + h.x > u.x && (l = s.x + n - u.x + h.x), s.x - l - a.x < 0 && (l = s.x - a.x), s.y + e + h.y > u.y && (c = s.y + e - u.y + h.y), s.y - c - a.y < 0 && (c = s.y - a.y), (l || c) && t.fire("autopanstart").panBy([l, c]) } }, _onCloseButtonClick: function(t) { this._close(), Ii(t) }, _getAnchor: function() { return B(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]) } });
            Vi.mergeOptions({ closePopupOnClick: !0 }), Vi.include({ openPopup: function(t, i, e) { return t instanceof Xe || (t = new Xe(e).setContent(t)), i && t.setLatLng(i), this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(), this._popup = t, this.addLayer(t)) }, closePopup: function(t) { return t && t !== this._popup || (t = this._popup, this._popup = null), t && this.removeLayer(t), this } }), Pe.include({ bindPopup: function(t, i) { return t instanceof Xe ? (_(t, i), this._popup = t, t._source = this) : (this._popup && !i || (this._popup = new Xe(i, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on({ click: this._openPopup, keypress: this._onKeyPress, remove: this.closePopup, move: this._movePopup }), this._popupHandlersAdded = !0), this }, unbindPopup: function() { return this._popup && (this.off({ click: this._openPopup, keypress: this._onKeyPress, remove: this.closePopup, move: this._movePopup }), this._popupHandlersAdded = !1, this._popup = null), this }, openPopup: function(t, i) { return this._popup && this._map && (i = this._popup._prepareOpen(this, t, i), this._map.openPopup(this._popup, i)), this }, closePopup: function() { return this._popup && this._popup._close(), this }, togglePopup: function(t) { return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)), this }, isPopupOpen: function() { return !!this._popup && this._popup.isOpen() }, setPopupContent: function(t) { return this._popup && this._popup.setContent(t), this }, getPopup: function() { return this._popup }, _openPopup: function(t) { var i = t.layer || t.target;
                    this._popup && this._map && (Ii(t), i instanceof Se ? this.openPopup(t.layer || t.target, t.latlng) : this._map.hasLayer(this._popup) && this._popup._source === i ? this.closePopup() : this.openPopup(i, t.latlng)) }, _movePopup: function(t) { this._popup.setLatLng(t.latlng) }, _onKeyPress: function(t) { 13 === t.originalEvent.keyCode && this._openPopup(t) } }); var Je = Ye.extend({ options: { pane: "tooltipPane", offset: [0, 0], direction: "auto", permanent: !1, sticky: !1, interactive: !1, opacity: .9 }, onAdd: function(t) { Ye.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", { tooltip: this }), this._source && this._source.fire("tooltipopen", { tooltip: this }, !0) }, onRemove: function(t) { Ye.prototype.onRemove.call(this, t), t.fire("tooltipclose", { tooltip: this }), this._source && this._source.fire("tooltipclose", { tooltip: this }, !0) }, getEvents: function() { var t = Ye.prototype.getEvents.call(this); return wt && !this.options.permanent && (t.preclick = this._close), t }, _close: function() { this._map && this._map.closeTooltip(this) }, _initLayout: function() { var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
                    this._contentNode = this._container = ii("div", t) }, _updateLayout: function() {}, _adjustPan: function() {}, _setPosition: function(t) { var i, e, n = this._map,
                        o = this._container,
                        s = n.latLngToContainerPoint(n.getCenter()),
                        r = n.layerPointToContainerPoint(t),
                        a = this.options.direction,
                        h = o.offsetWidth,
                        u = o.offsetHeight,
                        l = B(this.options.offset),
                        c = this._getAnchor(); "top" === a ? (i = h / 2, e = u) : "bottom" === a ? (i = h / 2, e = 0) : "center" === a ? (i = h / 2, e = u / 2) : "right" === a ? (i = 0, e = u / 2) : "left" === a ? (i = h, e = u / 2) : r.x < s.x ? (a = "right", i = 0, e = u / 2) : (a = "left", i = h + 2 * (l.x + c.x), e = u / 2), t = t.subtract(B(i, e, !0)).add(l).add(c), hi(o, "leaflet-tooltip-right"), hi(o, "leaflet-tooltip-left"), hi(o, "leaflet-tooltip-top"), hi(o, "leaflet-tooltip-bottom"), ai(o, "leaflet-tooltip-" + a), pi(o, t) }, _updatePosition: function() { var t = this._map.latLngToLayerPoint(this._latlng);
                    this._setPosition(t) }, setOpacity: function(t) { this.options.opacity = t, this._container && ci(this._container, t) }, _animateZoom: function(t) { var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
                    this._setPosition(i) }, _getAnchor: function() { return B(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]) } });
            Vi.include({ openTooltip: function(t, i, e) { return t instanceof Je || (t = new Je(e).setContent(t)), i && t.setLatLng(i), this.hasLayer(t) ? this : this.addLayer(t) }, closeTooltip: function(t) { return t && this.removeLayer(t), this } }), Pe.include({ bindTooltip: function(t, i) { return t instanceof Je ? (_(t, i), this._tooltip = t, t._source = this) : (this._tooltip && !i || (this._tooltip = new Je(i, this)), this._tooltip.setContent(t)), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this }, unbindTooltip: function() { return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this }, _initTooltipInteractions: function(t) { if (t || !this._tooltipHandlersAdded) { var i = t ? "off" : "on",
                            e = { remove: this.closeTooltip, move: this._moveTooltip };
                        this._tooltip.options.permanent ? e.add = this._openTooltip : (e.mouseover = this._openTooltip, e.mouseout = this.closeTooltip, this._tooltip.options.sticky && (e.mousemove = this._moveTooltip), wt && (e.click = this._openTooltip)), this[i](e), this._tooltipHandlersAdded = !t } }, openTooltip: function(t, i) { return this._tooltip && this._map && (i = this._tooltip._prepareOpen(this, t, i), this._map.openTooltip(this._tooltip, i), this._tooltip.options.interactive && this._tooltip._container && (ai(this._tooltip._container, "leaflet-clickable"), this.addInteractiveTarget(this._tooltip._container))), this }, closeTooltip: function() { return this._tooltip && (this._tooltip._close(), this._tooltip.options.interactive && this._tooltip._container && (hi(this._tooltip._container, "leaflet-clickable"), this.removeInteractiveTarget(this._tooltip._container))), this }, toggleTooltip: function(t) { return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)), this }, isTooltipOpen: function() { return this._tooltip.isOpen() }, setTooltipContent: function(t) { return this._tooltip && this._tooltip.setContent(t), this }, getTooltip: function() { return this._tooltip }, _openTooltip: function(t) { var i = t.layer || t.target;
                    this._tooltip && this._map && this.openTooltip(i, this._tooltip.options.sticky ? t.latlng : void 0) }, _moveTooltip: function(t) { var i, e, n = t.latlng;
                    this._tooltip.options.sticky && t.originalEvent && (i = this._map.mouseEventToContainerPoint(t.originalEvent), e = this._map.containerPointToLayerPoint(i), n = this._map.layerPointToLatLng(e)), this._tooltip.setLatLng(n) } }); var $e = Te.extend({ options: { iconSize: [12, 12], html: !1, bgPos: null, className: "leaflet-div-icon" }, createIcon: function(t) { var i = t && "DIV" === t.tagName ? t : document.createElement("div"),
                        e = this.options; if (e.html instanceof Element ? (ni(i), i.appendChild(e.html)) : i.innerHTML = !1 !== e.html ? e.html : "", e.bgPos) { var n = B(e.bgPos);
                        i.style.backgroundPosition = -n.x + "px " + -n.y + "px" } return this._setIconStyles(i, "icon"), i }, createShadow: function() { return null } });
            Te.Default = Me; var Qe = Pe.extend({ options: { tileSize: 256, opacity: 1, updateWhenIdle: ft, updateWhenZooming: !0, updateInterval: 200, zIndex: 1, bounds: null, minZoom: 0, maxZoom: void 0, maxNativeZoom: void 0, minNativeZoom: void 0, noWrap: !1, pane: "tilePane", className: "", keepBuffer: 2 }, initialize: function(t) { _(this, t) }, onAdd: function() { this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView(), this._update() }, beforeAdd: function(t) { t._addZoomLimit(this) }, onRemove: function(t) { this._removeAllTiles(), ei(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0 }, bringToFront: function() { return this._map && (oi(this._container), this._setAutoZIndex(Math.max)), this }, bringToBack: function() { return this._map && (si(this._container), this._setAutoZIndex(Math.min)), this }, getContainer: function() { return this._container }, setOpacity: function(t) { return this.options.opacity = t, this._updateOpacity(), this }, setZIndex: function(t) { return this.options.zIndex = t, this._updateZIndex(), this }, isLoading: function() { return this._loading }, redraw: function() { return this._map && (this._removeAllTiles(), this._update()), this }, getEvents: function() { var t = { viewprereset: this._invalidateAll, viewreset: this._resetView, zoom: this._resetView, moveend: this._onMoveEnd }; return this.options.updateWhenIdle || (this._onMove || (this._onMove = r(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t }, createTile: function() { return document.createElement("div") }, getTileSize: function() { var t = this.options.tileSize; return t instanceof E ? t : new E(t, t) }, _updateZIndex: function() { this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex) }, _setAutoZIndex: function(t) { for (var i, e = this.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, s = e.length; o < s; o++) i = e[o].style.zIndex, e[o] !== this._container && i && (n = t(n, +i));
                    isFinite(n) && (this.options.zIndex = n + t(-1, 1), this._updateZIndex()) }, _updateOpacity: function() { if (this._map && !$) { ci(this._container, this.options.opacity); var t = +new Date,
                            i = !1,
                            e = !1; for (var n in this._tiles) { var o = this._tiles[n]; if (o.current && o.loaded) { var s = Math.min(1, (t - o.loaded) / 200);
                                ci(o.el, s), s < 1 ? i = !0 : (o.active ? e = !0 : this._onOpaqueTile(o), o.active = !0) } } e && !this._noPrune && this._pruneTiles(), i && (M(this._fadeFrame), this._fadeFrame = T(this._updateOpacity, this)) } }, _onOpaqueTile: h, _initContainer: function() { this._container || (this._container = ii("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container)) }, _updateLevels: function() { var t = this._tileZoom,
                        i = this.options.maxZoom; if (void 0 !== t) { for (var e in this._levels) e = Number(e), this._levels[e].el.children.length || e === t ? (this._levels[e].el.style.zIndex = i - Math.abs(t - e), this._onUpdateLevel(e)) : (ei(this._levels[e].el), this._removeTilesAtZoom(e), this._onRemoveLevel(e), delete this._levels[e]); var n = this._levels[t],
                            o = this._map; return n || ((n = this._levels[t] = {}).el = ii("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = i, n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, o.getCenter(), o.getZoom()), n.el.offsetWidth, this._onCreateLevel(n)), this._level = n, n } }, _onUpdateLevel: h, _onRemoveLevel: h, _onCreateLevel: h, _pruneTiles: function() { if (this._map) { var t, i, e = this._map.getZoom(); if (e > this.options.maxZoom || e < this.options.minZoom) this._removeAllTiles();
                        else { for (t in this._tiles)(i = this._tiles[t]).retain = i.current; for (t in this._tiles)
                                if ((i = this._tiles[t]).current && !i.active) { var n = i.coords;
                                    this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2) } for (t in this._tiles) this._tiles[t].retain || this._removeTile(t) } } }, _removeTilesAtZoom: function(t) { for (var i in this._tiles) this._tiles[i].coords.z === t && this._removeTile(i) }, _removeAllTiles: function() { for (var t in this._tiles) this._removeTile(t) }, _invalidateAll: function() { for (var t in this._levels) ei(this._levels[t].el), this._onRemoveLevel(Number(t)), delete this._levels[t];
                    this._removeAllTiles(), this._tileZoom = void 0 }, _retainParent: function(t, i, e, n) { var o = Math.floor(t / 2),
                        s = Math.floor(i / 2),
                        r = e - 1,
                        a = new E(+o, +s);
                    a.z = +r; var h = this._tileCoordsToKey(a),
                        u = this._tiles[h]; return u && u.active ? (u.retain = !0, !0) : (u && u.loaded && (u.retain = !0), r > n && this._retainParent(o, s, r, n)) }, _retainChildren: function(t, i, e, n) { for (var o = 2 * t; o < 2 * t + 2; o++)
                        for (var s = 2 * i; s < 2 * i + 2; s++) { var r = new E(o, s);
                            r.z = e + 1; var a = this._tileCoordsToKey(r),
                                h = this._tiles[a];
                            h && h.active ? h.retain = !0 : (h && h.loaded && (h.retain = !0), e + 1 < n && this._retainChildren(o, s, e + 1, n)) } }, _resetView: function(t) { var i = t && (t.pinch || t.flyTo);
                    this._setView(this._map.getCenter(), this._map.getZoom(), i, i) }, _animateZoom: function(t) { this._setView(t.center, t.zoom, !0, t.noUpdate) }, _clampZoom: function(t) { var i = this.options; return void 0 !== i.minNativeZoom && t < i.minNativeZoom ? i.minNativeZoom : void 0 !== i.maxNativeZoom && i.maxNativeZoom < t ? i.maxNativeZoom : t }, _setView: function(t, i, e, n) { var o = Math.round(i);
                    o = void 0 !== this.options.maxZoom && o > this.options.maxZoom || void 0 !== this.options.minZoom && o < this.options.minZoom ? void 0 : this._clampZoom(o); var s = this.options.updateWhenZooming && o !== this._tileZoom;
                    n && !s || (this._tileZoom = o, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), void 0 !== o && this._update(t), e || this._pruneTiles(), this._noPrune = !!e), this._setZoomTransforms(t, i) }, _setZoomTransforms: function(t, i) { for (var e in this._levels) this._setZoomTransform(this._levels[e], t, i) }, _setZoomTransform: function(t, i, e) { var n = this._map.getZoomScale(e, t.zoom),
                        o = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(i, e)).round();
                    mt ? di(t.el, o, n) : pi(t.el, o) }, _resetGrid: function() { var t = this._map,
                        i = t.options.crs,
                        e = this._tileSize = this.getTileSize(),
                        n = this._tileZoom,
                        o = this._map.getPixelWorldBounds(this._tileZoom);
                    o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = i.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, i.wrapLng[0]], n).x / e.x), Math.ceil(t.project([0, i.wrapLng[1]], n).x / e.y)], this._wrapY = i.wrapLat && !this.options.noWrap && [Math.floor(t.project([i.wrapLat[0], 0], n).y / e.x), Math.ceil(t.project([i.wrapLat[1], 0], n).y / e.y)] }, _onMoveEnd: function() { this._map && !this._map._animatingZoom && this._update() }, _getTiledPixelBounds: function(t) { var i = this._map,
                        e = i._animatingZoom ? Math.max(i._animateToZoom, i.getZoom()) : i.getZoom(),
                        n = i.getZoomScale(e, this._tileZoom),
                        o = i.project(t, this._tileZoom).floor(),
                        s = i.getSize().divideBy(2 * n); return new A(o.subtract(s), o.add(s)) }, _update: function(t) { var i = this._map; if (i) { var e = this._clampZoom(i.getZoom()); if (void 0 === t && (t = i.getCenter()), void 0 !== this._tileZoom) { var n = this._getTiledPixelBounds(t),
                                o = this._pxBoundsToTileRange(n),
                                s = o.getCenter(),
                                r = [],
                                a = this.options.keepBuffer,
                                h = new A(o.getBottomLeft().subtract([a, -a]), o.getTopRight().add([a, -a])); if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y))) throw new Error("Attempted to load an infinite number of tiles"); for (var u in this._tiles) { var l = this._tiles[u].coords;
                                l.z === this._tileZoom && h.contains(new E(l.x, l.y)) || (this._tiles[u].current = !1) } if (Math.abs(e - this._tileZoom) > 1) this._setView(t, e);
                            else { for (var c = o.min.y; c <= o.max.y; c++)
                                    for (var _ = o.min.x; _ <= o.max.x; _++) { var d = new E(_, c); if (d.z = this._tileZoom, this._isValidTile(d)) { var p = this._tiles[this._tileCoordsToKey(d)];
                                            p ? p.current = !0 : r.push(d) } }
                                if (r.sort(function(t, i) { return t.distanceTo(s) - i.distanceTo(s) }), 0 !== r.length) { this._loading || (this._loading = !0, this.fire("loading")); var m = document.createDocumentFragment(); for (_ = 0; _ < r.length; _++) this._addTile(r[_], m);
                                    this._level.el.appendChild(m) } } } } }, _isValidTile: function(t) { var i = this._map.options.crs; if (!i.infinite) { var e = this._globalTileRange; if (!i.wrapLng && (t.x < e.min.x || t.x > e.max.x) || !i.wrapLat && (t.y < e.min.y || t.y > e.max.y)) return !1 } if (!this.options.bounds) return !0; var n = this._tileCoordsToBounds(t); return R(this.options.bounds).overlaps(n) }, _keyToBounds: function(t) { return this._tileCoordsToBounds(this._keyToTileCoords(t)) }, _tileCoordsToNwSe: function(t) { var i = this._map,
                        e = this.getTileSize(),
                        n = t.scaleBy(e),
                        o = n.add(e); return [i.unproject(n, t.z), i.unproject(o, t.z)] }, _tileCoordsToBounds: function(t) { var i = this._tileCoordsToNwSe(t),
                        e = new O(i[0], i[1]); return this.options.noWrap || (e = this._map.wrapLatLngBounds(e)), e }, _tileCoordsToKey: function(t) { return t.x + ":" + t.y + ":" + t.z }, _keyToTileCoords: function(t) { var i = t.split(":"),
                        e = new E(+i[0], +i[1]); return e.z = +i[2], e }, _removeTile: function(t) { var i = this._tiles[t];
                    i && (ei(i.el), delete this._tiles[t], this.fire("tileunload", { tile: i.el, coords: this._keyToTileCoords(t) })) }, _initTile: function(t) { ai(t, "leaflet-tile"); var i = this.getTileSize();
                    t.style.width = i.x + "px", t.style.height = i.y + "px", t.onselectstart = h, t.onmousemove = h, $ && this.options.opacity < 1 && ci(t, this.options.opacity), it && !et && (t.style.WebkitBackfaceVisibility = "hidden") }, _addTile: function(t, i) { var e = this._getTilePos(t),
                        o = this._tileCoordsToKey(t),
                        s = this.createTile(this._wrapCoords(t), n(this._tileReady, this, t));
                    this._initTile(s), this.createTile.length < 2 && T(n(this._tileReady, this, t, null, s)), pi(s, e), this._tiles[o] = { el: s, coords: t, current: !0 }, i.appendChild(s), this.fire("tileloadstart", { tile: s, coords: t }) }, _tileReady: function(t, i, e) { i && this.fire("tileerror", { error: i, tile: e, coords: t }); var o = this._tileCoordsToKey(t);
                    (e = this._tiles[o]) && (e.loaded = +new Date, this._map._fadeAnimated ? (ci(e.el, 0), M(this._fadeFrame), this._fadeFrame = T(this._updateOpacity, this)) : (e.active = !0, this._pruneTiles()), i || (ai(e.el, "leaflet-tile-loaded"), this.fire("tileload", { tile: e.el, coords: t })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), $ || !this._map._fadeAnimated ? T(this._pruneTiles, this) : setTimeout(n(this._pruneTiles, this), 250))) }, _getTilePos: function(t) { return t.scaleBy(this.getTileSize()).subtract(this._level.origin) }, _wrapCoords: function(t) { var i = new E(this._wrapX ? a(t.x, this._wrapX) : t.x, this._wrapY ? a(t.y, this._wrapY) : t.y); return i.z = t.z, i }, _pxBoundsToTileRange: function(t) { var i = this.getTileSize(); return new A(t.min.unscaleBy(i).floor(), t.max.unscaleBy(i).ceil().subtract([1, 1])) }, _noTilesToLoad: function() { for (var t in this._tiles)
                        if (!this._tiles[t].loaded) return !1; return !0 } }); var tn = Qe.extend({ options: { minZoom: 0, maxZoom: 18, subdomains: "abc", errorTileUrl: "", zoomOffset: 0, tms: !1, zoomReverse: !1, detectRetina: !1, crossOrigin: !1 }, initialize: function(t, i) { this._url = t, (i = _(this, i)).detectRetina && bt && i.maxZoom > 0 && (i.tileSize = Math.floor(i.tileSize / 2), i.zoomReverse ? (i.zoomOffset--, i.minZoom++) : (i.zoomOffset++, i.maxZoom--), i.minZoom = Math.max(0, i.minZoom)), "string" == typeof i.subdomains && (i.subdomains = i.subdomains.split("")), it || this.on("tileunload", this._onTileRemove) }, setUrl: function(t, i) { return this._url === t && void 0 === i && (i = !0), this._url = t, i || this.redraw(), this }, createTile: function(t, i) { var e = document.createElement("img"); return bi(e, "load", n(this._tileOnLoad, this, i, e)), bi(e, "error", n(this._tileOnError, this, i, e)), (this.options.crossOrigin || "" === this.options.crossOrigin) && (e.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), e.alt = "", e.setAttribute("role", "presentation"), e.src = this.getTileUrl(t), e }, getTileUrl: function(t) { var e = { r: bt ? "@2x" : "", s: this._getSubdomain(t), x: t.x, y: t.y, z: this._getZoomForUrl() }; if (this._map && !this._map.options.crs.infinite) { var n = this._globalTileRange.max.y - t.y;
                        this.options.tms && (e.y = n), e["-y"] = n } return m(this._url, i(e, this.options)) }, _tileOnLoad: function(t, i) { $ ? setTimeout(n(t, this, null, i), 0) : t(null, i) }, _tileOnError: function(t, i, e) { var n = this.options.errorTileUrl;
                    n && i.getAttribute("src") !== n && (i.src = n), t(e, i) }, _onTileRemove: function(t) { t.tile.onload = null }, _getZoomForUrl: function() { var t = this._tileZoom,
                        i = this.options.maxZoom; return this.options.zoomReverse && (t = i - t), t + this.options.zoomOffset }, _getSubdomain: function(t) { var i = Math.abs(t.x + t.y) % this.options.subdomains.length; return this.options.subdomains[i] }, _abortLoading: function() { var t, i; for (t in this._tiles) this._tiles[t].coords.z !== this._tileZoom && ((i = this._tiles[t].el).onload = h, i.onerror = h, i.complete || (i.src = v, ei(i), delete this._tiles[t])) }, _removeTile: function(t) { var i = this._tiles[t]; if (i) return ot || i.el.setAttribute("src", v), Qe.prototype._removeTile.call(this, t) }, _tileReady: function(t, i, e) { if (this._map && (!e || e.getAttribute("src") !== v)) return Qe.prototype._tileReady.call(this, t, i, e) } });

            function en(t, i) { return new tn(t, i) } var nn = tn.extend({ defaultWmsParams: { service: "WMS", request: "GetMap", layers: "", styles: "", format: "image/jpeg", transparent: !1, version: "1.1.1" }, options: { crs: null, uppercase: !1 }, initialize: function(t, e) { this._url = t; var n = i({}, this.defaultWmsParams); for (var o in e) o in this.options || (n[o] = e[o]); var s = (e = _(this, e)).detectRetina && bt ? 2 : 1,
                        r = this.getTileSize();
                    n.width = r.x * s, n.height = r.y * s, this.wmsParams = n }, onAdd: function(t) { this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version); var i = this._wmsVersion >= 1.3 ? "crs" : "srs";
                    this.wmsParams[i] = this._crs.code, tn.prototype.onAdd.call(this, t) }, getTileUrl: function(t) { var i = this._tileCoordsToNwSe(t),
                        e = this._crs,
                        n = I(e.project(i[0]), e.project(i[1])),
                        o = n.min,
                        s = n.max,
                        r = (this._wmsVersion >= 1.3 && this._crs === xe ? [o.y, o.x, s.y, s.x] : [o.x, o.y, s.x, s.y]).join(","),
                        a = tn.prototype.getTileUrl.call(this, t); return a + d(this.wmsParams, a, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + r }, setParams: function(t, e) { return i(this.wmsParams, t), e || this.redraw(), this } });
            tn.WMS = nn, en.wms = function(t, i) { return new nn(t, i) }; var on = Pe.extend({ options: { padding: .1, tolerance: 0 }, initialize: function(t) { _(this, t), s(this), this._layers = this._layers || {} }, onAdd: function() { this._container || (this._initContainer(), this._zoomAnimated && ai(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this) }, onRemove: function() { this.off("update", this._updatePaths, this), this._destroyContainer() }, getEvents: function() { var t = { viewreset: this._reset, zoom: this._onZoom, moveend: this._update, zoomend: this._onZoomEnd }; return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t }, _onAnimZoom: function(t) { this._updateTransform(t.center, t.zoom) }, _onZoom: function() { this._updateTransform(this._map.getCenter(), this._map.getZoom()) }, _updateTransform: function(t, i) { var e = this._map.getZoomScale(i, this._zoom),
                            n = mi(this._container),
                            o = this._map.getSize().multiplyBy(.5 + this.options.padding),
                            s = this._map.project(this._center, i),
                            r = this._map.project(t, i).subtract(s),
                            a = o.multiplyBy(-e).add(n).add(o).subtract(r);
                        mt ? di(this._container, a, e) : pi(this._container, a) }, _reset: function() { for (var t in this._update(), this._updateTransform(this._center, this._zoom), this._layers) this._layers[t]._reset() }, _onZoomEnd: function() { for (var t in this._layers) this._layers[t]._project() }, _updatePaths: function() { for (var t in this._layers) this._layers[t]._update() }, _update: function() { var t = this.options.padding,
                            i = this._map.getSize(),
                            e = this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();
                        this._bounds = new A(e, e.add(i.multiplyBy(1 + 2 * t)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom() } }),
                sn = on.extend({ getEvents: function() { var t = on.prototype.getEvents.call(this); return t.viewprereset = this._onViewPreReset, t }, _onViewPreReset: function() { this._postponeUpdatePaths = !0 }, onAdd: function() { on.prototype.onAdd.call(this), this._draw() }, _initContainer: function() { var t = this._container = document.createElement("canvas");
                        bi(t, "mousemove", this._onMouseMove, this), bi(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), bi(t, "mouseout", this._handleMouseOut, this), this._ctx = t.getContext("2d") }, _destroyContainer: function() { M(this._redrawRequest), delete this._ctx, ei(this._container), Mi(this._container), delete this._container }, _updatePaths: function() { if (!this._postponeUpdatePaths) { for (var t in this._redrawBounds = null, this._layers) this._layers[t]._update();
                            this._redraw() } }, _update: function() { if (!this._map._animatingZoom || !this._bounds) { on.prototype._update.call(this); var t = this._bounds,
                                i = this._container,
                                e = t.getSize(),
                                n = bt ? 2 : 1;
                            pi(i, t.min), i.width = n * e.x, i.height = n * e.y, i.style.width = e.x + "px", i.style.height = e.y + "px", bt && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update") } }, _reset: function() { on.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths()) }, _initPath: function(t) { this._updateDashArray(t), this._layers[s(t)] = t; var i = t._order = { layer: t, prev: this._drawLast, next: null };
                        this._drawLast && (this._drawLast.next = i), this._drawLast = i, this._drawFirst = this._drawFirst || this._drawLast }, _addPath: function(t) { this._requestRedraw(t) }, _removePath: function(t) { var i = t._order,
                            e = i.next,
                            n = i.prev;
                        e ? e.prev = n : this._drawLast = n, n ? n.next = e : this._drawFirst = e, delete t._order, delete this._layers[s(t)], this._requestRedraw(t) }, _updatePath: function(t) { this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t) }, _updateStyle: function(t) { this._updateDashArray(t), this._requestRedraw(t) }, _updateDashArray: function(t) { if ("string" == typeof t.options.dashArray) { var i, e, n = t.options.dashArray.split(/[, ]+/),
                                o = []; for (e = 0; e < n.length; e++) { if (i = Number(n[e]), isNaN(i)) return;
                                o.push(i) } t.options._dashArray = o } else t.options._dashArray = t.options.dashArray }, _requestRedraw: function(t) { this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || T(this._redraw, this)) }, _extendRedrawBounds: function(t) { if (t._pxBounds) { var i = (t.options.weight || 0) + 1;
                            this._redrawBounds = this._redrawBounds || new A, this._redrawBounds.extend(t._pxBounds.min.subtract([i, i])), this._redrawBounds.extend(t._pxBounds.max.add([i, i])) } }, _redraw: function() { this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null }, _clear: function() { var t = this._redrawBounds; if (t) { var i = t.getSize();
                            this._ctx.clearRect(t.min.x, t.min.y, i.x, i.y) } else this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore() }, _draw: function() { var t, i = this._redrawBounds; if (this._ctx.save(), i) { var e = i.getSize();
                            this._ctx.beginPath(), this._ctx.rect(i.min.x, i.min.y, e.x, e.y), this._ctx.clip() } this._drawing = !0; for (var n = this._drawFirst; n; n = n.next) t = n.layer, (!i || t._pxBounds && t._pxBounds.intersects(i)) && t._updatePath();
                        this._drawing = !1, this._ctx.restore() }, _updatePoly: function(t, i) { if (this._drawing) { var e, n, o, s, r = t._parts,
                                a = r.length,
                                h = this._ctx; if (a) { for (h.beginPath(), e = 0; e < a; e++) { for (n = 0, o = r[e].length; n < o; n++) s = r[e][n], h[n ? "lineTo" : "moveTo"](s.x, s.y);
                                    i && h.closePath() } this._fillStroke(h, t) } } }, _updateCircle: function(t) { if (this._drawing && !t._empty()) { var i = t._point,
                                e = this._ctx,
                                n = Math.max(Math.round(t._radius), 1),
                                o = (Math.max(Math.round(t._radiusY), 1) || n) / n;
                            1 !== o && (e.save(), e.scale(1, o)), e.beginPath(), e.arc(i.x, i.y / o, n, 0, 2 * Math.PI, !1), 1 !== o && e.restore(), this._fillStroke(e, t) } }, _fillStroke: function(t, i) { var e = i.options;
                        e.fill && (t.globalAlpha = e.fillOpacity, t.fillStyle = e.fillColor || e.color, t.fill(e.fillRule || "evenodd")), e.stroke && 0 !== e.weight && (t.setLineDash && t.setLineDash(i.options && i.options._dashArray || []), t.globalAlpha = e.opacity, t.lineWidth = e.weight, t.strokeStyle = e.color, t.lineCap = e.lineCap, t.lineJoin = e.lineJoin, t.stroke()) }, _onClick: function(t) { for (var i, e, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next)(i = o.layer).options.interactive && i._containsPoint(n) && ("click" !== t.type && "preclick" === t.type || !this._map._draggableMoved(i)) && (e = i);
                        e && (ji(t), this._fireEvent([e], t)) }, _onMouseMove: function(t) { if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) { var i = this._map.mouseEventToLayerPoint(t);
                            this._handleMouseHover(t, i) } }, _handleMouseOut: function(t) { var i = this._hoveredLayer;
                        i && (hi(this._container, "leaflet-interactive"), this._fireEvent([i], t, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1) }, _handleMouseHover: function(t, i) { if (!this._mouseHoverThrottled) { for (var e, o, s = this._drawFirst; s; s = s.next)(e = s.layer).options.interactive && e._containsPoint(i) && (o = e);
                            o !== this._hoveredLayer && (this._handleMouseOut(t), o && (ai(this._container, "leaflet-interactive"), this._fireEvent([o], t, "mouseover"), this._hoveredLayer = o)), this._hoveredLayer && this._fireEvent([this._hoveredLayer], t), this._mouseHoverThrottled = !0, setTimeout(n(function() { this._mouseHoverThrottled = !1 }, this), 32) } }, _fireEvent: function(t, i, e) { this._map._fireDOMEvent(i, e || i.type, t) }, _bringToFront: function(t) { var i = t._order; if (i) { var e = i.next,
                                n = i.prev;
                            e && (e.prev = n, n ? n.next = e : e && (this._drawFirst = e), i.prev = this._drawLast, this._drawLast.next = i, i.next = null, this._drawLast = i, this._requestRedraw(t)) } }, _bringToBack: function(t) { var i = t._order; if (i) { var e = i.next,
                                n = i.prev;
                            n && (n.next = e, e ? e.prev = n : n && (this._drawLast = n), i.prev = null, i.next = this._drawFirst, this._drawFirst.prev = i, this._drawFirst = i, this._requestRedraw(t)) } } });

            function rn(t) { return Mt ? new sn(t) : null } var an = function() { try { return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
                            function(t) { return document.createElement("<lvml:" + t + ' class="lvml">') } } catch (t) { return function(t) { return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">') } } }(),
                hn = { _initContainer: function() { this._container = ii("div", "leaflet-vml-container") }, _update: function() { this._map._animatingZoom || (on.prototype._update.call(this), this.fire("update")) }, _initPath: function(t) { var i = t._container = an("shape");
                        ai(i, "leaflet-vml-shape " + (this.options.className || "")), i.coordsize = "1 1", t._path = an("path"), i.appendChild(t._path), this._updateStyle(t), this._layers[s(t)] = t }, _addPath: function(t) { var i = t._container;
                        this._container.appendChild(i), t.options.interactive && t.addInteractiveTarget(i) }, _removePath: function(t) { var i = t._container;
                        ei(i), t.removeInteractiveTarget(i), delete this._layers[s(t)] }, _updateStyle: function(t) { var i = t._stroke,
                            e = t._fill,
                            n = t.options,
                            o = t._container;
                        o.stroked = !!n.stroke, o.filled = !!n.fill, n.stroke ? (i || (i = t._stroke = an("stroke")), o.appendChild(i), i.weight = n.weight + "px", i.color = n.color, i.opacity = n.opacity, n.dashArray ? i.dashStyle = f(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : i.dashStyle = "", i.endcap = n.lineCap.replace("butt", "flat"), i.joinstyle = n.lineJoin) : i && (o.removeChild(i), t._stroke = null), n.fill ? (e || (e = t._fill = an("fill")), o.appendChild(e), e.color = n.fillColor || n.color, e.opacity = n.fillOpacity) : e && (o.removeChild(e), t._fill = null) }, _updateCircle: function(t) { var i = t._point.round(),
                            e = Math.round(t._radius),
                            n = Math.round(t._radiusY || e);
                        this._setPath(t, t._empty() ? "M0 0" : "AL " + i.x + "," + i.y + " " + e + "," + n + " 0,23592600") }, _setPath: function(t, i) { t._path.v = i }, _bringToFront: function(t) { oi(t._container) }, _bringToBack: function(t) { si(t._container) } },
                un = Ct ? an : K,
                ln = on.extend({ getEvents: function() { var t = on.prototype.getEvents.call(this); return t.zoomstart = this._onZoomStart, t }, _initContainer: function() { this._container = un("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = un("g"), this._container.appendChild(this._rootGroup) }, _destroyContainer: function() { ei(this._container), Mi(this._container), delete this._container, delete this._rootGroup, delete this._svgSize }, _onZoomStart: function() { this._update() }, _update: function() { if (!this._map._animatingZoom || !this._bounds) { on.prototype._update.call(this); var t = this._bounds,
                                i = t.getSize(),
                                e = this._container;
                            this._svgSize && this._svgSize.equals(i) || (this._svgSize = i, e.setAttribute("width", i.x), e.setAttribute("height", i.y)), pi(e, t.min), e.setAttribute("viewBox", [t.min.x, t.min.y, i.x, i.y].join(" ")), this.fire("update") } }, _initPath: function(t) { var i = t._path = un("path");
                        t.options.className && ai(i, t.options.className), t.options.interactive && ai(i, "leaflet-interactive"), this._updateStyle(t), this._layers[s(t)] = t }, _addPath: function(t) { this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path) }, _removePath: function(t) { ei(t._path), t.removeInteractiveTarget(t._path), delete this._layers[s(t)] }, _updatePath: function(t) { t._project(), t._update() }, _updateStyle: function(t) { var i = t._path,
                            e = t.options;
                        i && (e.stroke ? (i.setAttribute("stroke", e.color), i.setAttribute("stroke-opacity", e.opacity), i.setAttribute("stroke-width", e.weight), i.setAttribute("stroke-linecap", e.lineCap), i.setAttribute("stroke-linejoin", e.lineJoin), e.dashArray ? i.setAttribute("stroke-dasharray", e.dashArray) : i.removeAttribute("stroke-dasharray"), e.dashOffset ? i.setAttribute("stroke-dashoffset", e.dashOffset) : i.removeAttribute("stroke-dashoffset")) : i.setAttribute("stroke", "none"), e.fill ? (i.setAttribute("fill", e.fillColor || e.color), i.setAttribute("fill-opacity", e.fillOpacity), i.setAttribute("fill-rule", e.fillRule || "evenodd")) : i.setAttribute("fill", "none")) }, _updatePoly: function(t, i) { this._setPath(t, Y(t._parts, i)) }, _updateCircle: function(t) { var i = t._point,
                            e = Math.max(Math.round(t._radius), 1),
                            n = "a" + e + "," + (Math.max(Math.round(t._radiusY), 1) || e) + " 0 1,0 ",
                            o = t._empty() ? "M0 0" : "M" + (i.x - e) + "," + i.y + n + 2 * e + ",0 " + n + 2 * -e + ",0 ";
                        this._setPath(t, o) }, _setPath: function(t, i) { t._path.setAttribute("d", i) }, _bringToFront: function(t) { oi(t._path) }, _bringToBack: function(t) { si(t._path) } });

            function cn(t) { return zt || Ct ? new ln(t) : null } Ct && ln.include(hn), Vi.include({ getRenderer: function(t) { var i = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer; return i || (i = this._renderer = this._createRenderer()), this.hasLayer(i) || this.addLayer(i), i }, _getPaneRenderer: function(t) { if ("overlayPane" === t || void 0 === t) return !1; var i = this._paneRenderers[t]; return void 0 === i && (i = this._createRenderer({ pane: t }), this._paneRenderers[t] = i), i }, _createRenderer: function(t) { return this.options.preferCanvas && rn(t) || cn(t) } }); var _n = Be.extend({ initialize: function(t, i) { Be.prototype.initialize.call(this, this._boundsToLatLngs(t), i) }, setBounds: function(t) { return this.setLatLngs(this._boundsToLatLngs(t)) }, _boundsToLatLngs: function(t) { return [(t = R(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()] } });
            ln.create = un, ln.pointsToPath = Y, Ae.geometryToLayer = Ie, Ae.coordsToLatLng = Re, Ae.coordsToLatLngs = Ne, Ae.latLngToCoords = De, Ae.latLngsToCoords = je, Ae.getFeature = We, Ae.asFeature = He, Vi.mergeOptions({ boxZoom: !0 }); var dn = $i.extend({ initialize: function(t) { this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this) }, addHooks: function() { bi(this._container, "mousedown", this._onMouseDown, this) }, removeHooks: function() { Mi(this._container, "mousedown", this._onMouseDown, this) }, moved: function() { return this._moved }, _destroy: function() { ei(this._pane), delete this._pane }, _resetState: function() { this._resetStateTimeout = 0, this._moved = !1 }, _clearDeferredResetState: function() { 0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0) }, _onMouseDown: function(t) { if (!t.shiftKey || 1 !== t.which && 1 !== t.button) return !1;
                    this._clearDeferredResetState(), this._resetState(), Vt(), gi(), this._startPoint = this._map.mouseEventToContainerPoint(t), bi(document, { contextmenu: Ii, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown }, this) }, _onMouseMove: function(t) { this._moved || (this._moved = !0, this._box = ii("div", "leaflet-zoom-box", this._container), ai(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t); var i = new A(this._point, this._startPoint),
                        e = i.getSize();
                    pi(this._box, i.min), this._box.style.width = e.x + "px", this._box.style.height = e.y + "px" }, _finish: function() { this._moved && (ei(this._box), hi(this._container, "leaflet-crosshair")), qt(), vi(), Mi(document, { contextmenu: Ii, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown }, this) }, _onMouseUp: function(t) { if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) { this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(n(this._resetState, this), 0); var i = new O(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
                        this._map.fitBounds(i).fire("boxzoomend", { boxZoomBounds: i }) } }, _onKeyDown: function(t) { 27 === t.keyCode && this._finish() } });
            Vi.addInitHook("addHandler", "boxZoom", dn), Vi.mergeOptions({ doubleClickZoom: !0 }); var pn = $i.extend({ addHooks: function() { this._map.on("dblclick", this._onDoubleClick, this) }, removeHooks: function() { this._map.off("dblclick", this._onDoubleClick, this) }, _onDoubleClick: function(t) { var i = this._map,
                        e = i.getZoom(),
                        n = i.options.zoomDelta,
                        o = t.originalEvent.shiftKey ? e - n : e + n; "center" === i.options.doubleClickZoom ? i.setZoom(o) : i.setZoomAround(t.containerPoint, o) } });
            Vi.addInitHook("addHandler", "doubleClickZoom", pn), Vi.mergeOptions({ dragging: !0, inertia: !et, inertiaDeceleration: 3400, inertiaMaxSpeed: 1 / 0, easeLinearity: .2, worldCopyJump: !1, maxBoundsViscosity: 0 }); var mn = $i.extend({ addHooks: function() { if (!this._draggable) { var t = this._map;
                        this._draggable = new oe(t._mapPane, t._container), this._draggable.on({ dragstart: this._onDragStart, drag: this._onDrag, dragend: this._onDragEnd }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this)) } ai(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [] }, removeHooks: function() { hi(this._map._container, "leaflet-grab"), hi(this._map._container, "leaflet-touch-drag"), this._draggable.disable() }, moved: function() { return this._draggable && this._draggable._moved }, moving: function() { return this._draggable && this._draggable._moving }, _onDragStart: function() { var t = this._map; if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) { var i = R(this._map.options.maxBounds);
                        this._offsetLimit = I(this._map.latLngToContainerPoint(i.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(i.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity)) } else this._offsetLimit = null;
                    t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = []) }, _onDrag: function(t) { if (this._map.options.inertia) { var i = this._lastTime = +new Date,
                            e = this._lastPos = this._draggable._absPos || this._draggable._newPos;
                        this._positions.push(e), this._times.push(i), this._prunePositions(i) } this._map.fire("move", t).fire("drag", t) }, _prunePositions: function(t) { for (; this._positions.length > 1 && t - this._times[0] > 50;) this._positions.shift(), this._times.shift() }, _onZoomEnd: function() { var t = this._map.getSize().divideBy(2),
                        i = this._map.latLngToLayerPoint([0, 0]);
                    this._initialWorldOffset = i.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x }, _viscousLimit: function(t, i) { return t - (t - i) * this._viscosity }, _onPreDragLimit: function() { if (this._viscosity && this._offsetLimit) { var t = this._draggable._newPos.subtract(this._draggable._startPos),
                            i = this._offsetLimit;
                        t.x < i.min.x && (t.x = this._viscousLimit(t.x, i.min.x)), t.y < i.min.y && (t.y = this._viscousLimit(t.y, i.min.y)), t.x > i.max.x && (t.x = this._viscousLimit(t.x, i.max.x)), t.y > i.max.y && (t.y = this._viscousLimit(t.y, i.max.y)), this._draggable._newPos = this._draggable._startPos.add(t) } }, _onPreDragWrap: function() { var t = this._worldWidth,
                        i = Math.round(t / 2),
                        e = this._initialWorldOffset,
                        n = this._draggable._newPos.x,
                        o = (n - i + e) % t + i - e,
                        s = (n + i + e) % t - i - e,
                        r = Math.abs(o + e) < Math.abs(s + e) ? o : s;
                    this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = r }, _onDragEnd: function(t) { var i = this._map,
                        e = i.options,
                        n = !e.inertia || this._times.length < 2; if (i.fire("dragend", t), n) i.fire("moveend");
                    else { this._prunePositions(+new Date); var o = this._lastPos.subtract(this._positions[0]),
                            s = (this._lastTime - this._times[0]) / 1e3,
                            r = e.easeLinearity,
                            a = o.multiplyBy(r / s),
                            h = a.distanceTo([0, 0]),
                            u = Math.min(e.inertiaMaxSpeed, h),
                            l = a.multiplyBy(u / h),
                            c = u / (e.inertiaDeceleration * r),
                            _ = l.multiplyBy(-c / 2).round();
                        _.x || _.y ? (_ = i._limitOffset(_, i.options.maxBounds), T(function() { i.panBy(_, { duration: c, easeLinearity: r, noMoveStart: !0, animate: !0 }) })) : i.fire("moveend") } } });
            Vi.addInitHook("addHandler", "dragging", mn), Vi.mergeOptions({ keyboard: !0, keyboardPanDelta: 80 }); var fn = $i.extend({ keyCodes: { left: [37], right: [39], down: [40], up: [38], zoomIn: [187, 107, 61, 171], zoomOut: [189, 109, 54, 173] }, initialize: function(t) { this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta) }, addHooks: function() { var t = this._map._container;
                    t.tabIndex <= 0 && (t.tabIndex = "0"), bi(t, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this), this._map.on({ focus: this._addHooks, blur: this._removeHooks }, this) }, removeHooks: function() { this._removeHooks(), Mi(this._map._container, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this), this._map.off({ focus: this._addHooks, blur: this._removeHooks }, this) }, _onMouseDown: function() { if (!this._focused) { var t = document.body,
                            i = document.documentElement,
                            e = t.scrollTop || i.scrollTop,
                            n = t.scrollLeft || i.scrollLeft;
                        this._map._container.focus(), window.scrollTo(n, e) } }, _onFocus: function() { this._focused = !0, this._map.fire("focus") }, _onBlur: function() { this._focused = !1, this._map.fire("blur") }, _setPanDelta: function(t) { var i, e, n = this._panKeys = {},
                        o = this.keyCodes; for (i = 0, e = o.left.length; i < e; i++) n[o.left[i]] = [-1 * t, 0]; for (i = 0, e = o.right.length; i < e; i++) n[o.right[i]] = [t, 0]; for (i = 0, e = o.down.length; i < e; i++) n[o.down[i]] = [0, t]; for (i = 0, e = o.up.length; i < e; i++) n[o.up[i]] = [0, -1 * t] }, _setZoomDelta: function(t) { var i, e, n = this._zoomKeys = {},
                        o = this.keyCodes; for (i = 0, e = o.zoomIn.length; i < e; i++) n[o.zoomIn[i]] = t; for (i = 0, e = o.zoomOut.length; i < e; i++) n[o.zoomOut[i]] = -t }, _addHooks: function() { bi(document, "keydown", this._onKeyDown, this) }, _removeHooks: function() { Mi(document, "keydown", this._onKeyDown, this) }, _onKeyDown: function(t) { if (!(t.altKey || t.ctrlKey || t.metaKey)) { var i, e = t.keyCode,
                            n = this._map; if (e in this._panKeys) n._panAnim && n._panAnim._inProgress || (i = this._panKeys[e], t.shiftKey && (i = B(i).multiplyBy(3)), n.panBy(i), n.options.maxBounds && n.panInsideBounds(n.options.maxBounds));
                        else if (e in this._zoomKeys) n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);
                        else { if (27 !== e || !n._popup || !n._popup.options.closeOnEscapeKey) return;
                            n.closePopup() } Ii(t) } } });
            Vi.addInitHook("addHandler", "keyboard", fn), Vi.mergeOptions({ scrollWheelZoom: !0, wheelDebounceTime: 40, wheelPxPerZoomLevel: 60 }); var gn = $i.extend({ addHooks: function() { bi(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0 }, removeHooks: function() { Mi(this._map._container, "wheel", this._onWheelScroll, this) }, _onWheelScroll: function(t) { var i = Ni(t),
                        e = this._map.options.wheelDebounceTime;
                    this._delta += i, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date); var o = Math.max(e - (+new Date - this._startTime), 0);
                    clearTimeout(this._timer), this._timer = setTimeout(n(this._performZoom, this), o), Ii(t) }, _performZoom: function() { var t = this._map,
                        i = t.getZoom(),
                        e = this._map.options.zoomSnap || 0;
                    t._stop(); var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
                        o = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2,
                        s = e ? Math.ceil(o / e) * e : o,
                        r = t._limitZoom(i + (this._delta > 0 ? s : -s)) - i;
                    this._delta = 0, this._startTime = null, r && ("center" === t.options.scrollWheelZoom ? t.setZoom(i + r) : t.setZoomAround(this._lastMousePos, i + r)) } });
            Vi.addInitHook("addHandler", "scrollWheelZoom", gn), Vi.mergeOptions({ tap: !0, tapTolerance: 15 }); var vn = $i.extend({ addHooks: function() { bi(this._map._container, "touchstart", this._onDown, this) }, removeHooks: function() { Mi(this._map._container, "touchstart", this._onDown, this) }, _onDown: function(t) { if (t.touches) { if (Ai(t), this._fireClick = !0, t.touches.length > 1) return this._fireClick = !1, void clearTimeout(this._holdTimeout); var i = t.touches[0],
                            e = i.target;
                        this._startPos = this._newPos = new E(i.clientX, i.clientY), e.tagName && "a" === e.tagName.toLowerCase() && ai(e, "leaflet-active"), this._holdTimeout = setTimeout(n(function() { this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", i)) }, this), 1e3), this._simulateEvent("mousedown", i), bi(document, { touchmove: this._onMove, touchend: this._onUp }, this) } }, _onUp: function(t) { if (clearTimeout(this._holdTimeout), Mi(document, { touchmove: this._onMove, touchend: this._onUp }, this), this._fireClick && t && t.changedTouches) { var i = t.changedTouches[0],
                            e = i.target;
                        e && e.tagName && "a" === e.tagName.toLowerCase() && hi(e, "leaflet-active"), this._simulateEvent("mouseup", i), this._isTapValid() && this._simulateEvent("click", i) } }, _isTapValid: function() { return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance }, _onMove: function(t) { var i = t.touches[0];
                    this._newPos = new E(i.clientX, i.clientY), this._simulateEvent("mousemove", i) }, _simulateEvent: function(t, i) { var e = document.createEvent("MouseEvents");
                    e._simulated = !0, i.target._simulatedClick = !0, e.initMouseEvent(t, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), i.target.dispatchEvent(e) } });!wt || xt && !ht || Vi.addInitHook("addHandler", "tap", vn), Vi.mergeOptions({ touchZoom: wt && !et, bounceAtZoomLimits: !0 }); var yn = $i.extend({ addHooks: function() { ai(this._map._container, "leaflet-touch-zoom"), bi(this._map._container, "touchstart", this._onTouchStart, this) }, removeHooks: function() { hi(this._map._container, "leaflet-touch-zoom"), Mi(this._map._container, "touchstart", this._onTouchStart, this) }, _onTouchStart: function(t) { var i = this._map; if (t.touches && 2 === t.touches.length && !i._animatingZoom && !this._zooming) { var e = i.mouseEventToContainerPoint(t.touches[0]),
                            n = i.mouseEventToContainerPoint(t.touches[1]);
                        this._centerPoint = i.getSize()._divideBy(2), this._startLatLng = i.containerPointToLatLng(this._centerPoint), "center" !== i.options.touchZoom && (this._pinchStartLatLng = i.containerPointToLatLng(e.add(n)._divideBy(2))), this._startDist = e.distanceTo(n), this._startZoom = i.getZoom(), this._moved = !1, this._zooming = !0, i._stop(), bi(document, "touchmove", this._onTouchMove, this), bi(document, "touchend", this._onTouchEnd, this), Ai(t) } }, _onTouchMove: function(t) { if (t.touches && 2 === t.touches.length && this._zooming) { var i = this._map,
                            e = i.mouseEventToContainerPoint(t.touches[0]),
                            o = i.mouseEventToContainerPoint(t.touches[1]),
                            s = e.distanceTo(o) / this._startDist; if (this._zoom = i.getScaleZoom(s, this._startZoom), !i.options.bounceAtZoomLimits && (this._zoom < i.getMinZoom() && s < 1 || this._zoom > i.getMaxZoom() && s > 1) && (this._zoom = i._limitZoom(this._zoom)), "center" === i.options.touchZoom) { if (this._center = this._startLatLng, 1 === s) return } else { var r = e._add(o)._divideBy(2)._subtract(this._centerPoint); if (1 === s && 0 === r.x && 0 === r.y) return;
                            this._center = i.unproject(i.project(this._pinchStartLatLng, this._zoom).subtract(r), this._zoom) } this._moved || (i._moveStart(!0, !1), this._moved = !0), M(this._animRequest); var a = n(i._move, i, this._center, this._zoom, { pinch: !0, round: !1 });
                        this._animRequest = T(a, this, !0), Ai(t) } }, _onTouchEnd: function() { this._moved && this._zooming ? (this._zooming = !1, M(this._animRequest), Mi(document, "touchmove", this._onTouchMove, this), Mi(document, "touchend", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1 } });
            Vi.addInitHook("addHandler", "touchZoom", yn), Vi.BoxZoom = dn, Vi.DoubleClickZoom = pn, Vi.Drag = mn, Vi.Keyboard = fn, Vi.ScrollWheelZoom = gn, Vi.Tap = vn, Vi.TouchZoom = yn, t.version = "1.7.1", t.Control = qi, t.control = Gi, t.Browser = Zt, t.Evented = Z, t.Mixin = te, t.Util = z, t.Class = C, t.Handler = $i, t.extend = i, t.bind = n, t.stamp = s, t.setOptions = _, t.DomEvent = Fi, t.DomUtil = Li, t.PosAnimation = Ui, t.Draggable = oe, t.LineUtil = de, t.PolyUtil = me, t.Point = E, t.point = B, t.Bounds = A, t.bounds = I, t.Transformation = U, t.transformation = V, t.Projection = ve, t.LatLng = N, t.latLng = D, t.LatLngBounds = O, t.latLngBounds = R, t.CRS = W, t.GeoJSON = Ae, t.geoJSON = Ue, t.geoJson = Ve, t.Layer = Pe, t.LayerGroup = Le, t.layerGroup = function(t, i) { return new Le(t, i) }, t.FeatureGroup = be, t.featureGroup = function(t, i) { return new be(t, i) }, t.ImageOverlay = qe, t.imageOverlay = function(t, i, e) { return new qe(t, i, e) }, t.VideoOverlay = Ge, t.videoOverlay = function(t, i, e) { return new Ge(t, i, e) }, t.SVGOverlay = Ke, t.svgOverlay = function(t, i, e) { return new Ke(t, i, e) }, t.DivOverlay = Ye, t.Popup = Xe, t.popup = function(t, i) { return new Xe(t, i) }, t.Tooltip = Je, t.tooltip = function(t, i) { return new Je(t, i) }, t.Icon = Te, t.icon = function(t) { return new Te(t) }, t.DivIcon = $e, t.divIcon = function(t) { return new $e(t) }, t.Marker = Ce, t.marker = function(t, i) { return new Ce(t, i) }, t.TileLayer = tn, t.tileLayer = en, t.GridLayer = Qe, t.gridLayer = function(t) { return new Qe(t) }, t.SVG = ln, t.svg = cn, t.Renderer = on, t.Canvas = sn, t.canvas = rn, t.Path = Se, t.CircleMarker = Ze, t.circleMarker = function(t, i) { return new Ze(t, i) }, t.Circle = Ee, t.circle = function(t, i, e) { return new Ee(t, i, e) }, t.Polyline = ke, t.polyline = function(t, i) { return new ke(t, i) }, t.Polygon = Be, t.polygon = function(t, i) { return new Be(t, i) }, t.Rectangle = _n, t.rectangle = function(t, i) { return new _n(t, i) }, t.Map = Vi, t.map = function(t, i) { return new Vi(t, i) }; var xn = window.L;
            t.noConflict = function() { return window.L = xn, this }, window.L = t });
    }, {}],
    "OTlA": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }), exports.CanvasOverlay = void 0;
        var t = require("leaflet");

        function e(t) { return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

        function n(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function o(t, e) { for (var n = 0; n < e.length; n++) { var o = e[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o) } }

        function r(t, e, n) { return e && o(t.prototype, e), n && o(t, n), t }

        function a(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && i(t, e) }

        function i(t, e) { return (i = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t })(t, e) }

        function s(t) { return function() { var e, n = h(t); if (l()) { var o = h(this).constructor;
                    e = Reflect.construct(n, arguments, o) } else e = n.apply(this, arguments); return u(this, e) } }

        function u(t, n) { return !n || "object" !== e(n) && "function" != typeof n ? c(t) : n }

        function c(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }

        function l() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0 } catch (t) { return !1 } }

        function h(t) { return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) }
        var f = function(e) { a(i, t.Layer); var o = s(i);

            function i(t, e) { var r; return n(this, i), (r = o.call(this))._userDrawFunc = t, r._frame = null, r._redrawCallbacks = [], r._pane = e, r } return r(i, [{ key: "drawing", value: function(t) { return this._userDrawFunc = t, this } }, { key: "params", value: function(e) { return t.Util.setOptions(this, e), this } }, { key: "redraw", value: function(e) { return "function" == typeof e && this._redrawCallbacks.push(e), null === this._frame && (this._frame = t.Util.requestAnimFrame(this._redraw, this)), this } }, { key: "onAdd", value: function(e) { this._map = e, this.canvas = this.canvas || document.createElement("canvas"); var n = e.getSize(),
                        o = e.options.zoomAnimation && t.Browser.any3d; return this.canvas.width = n.x, this.canvas.height = n.y, this.canvas.className = "leaflet-zoom-" + (o ? "animated" : "hide"), e._panes[this._pane].appendChild(this.canvas), e.on("moveend", this._reset, this), e.on("resize", this._resize, this), o && e.on("zoomanim", t.Layer ? this._animateZoom : this._animateZoomNoLayer, this), this._reset(), this } }, { key: "onRemove", value: function(e) { return e.getPanes()[this._pane].removeChild(this.canvas), e.off("moveend", this._reset, this), e.off("resize", this._resize, this), e.options.zoomAnimation && t.Browser.any3d && e.off("zoomanim", t.Layer ? this._animateZoom : this._animateZoomNoLayer, this), this } }, { key: "addTo", value: function(t) { return t.addLayer(this), this } }, { key: "_resize", value: function(t) { this.canvas.width = t.newSize.x, this.canvas.height = t.newSize.y } }, { key: "_reset", value: function() { var e = this._map.containerPointToLayerPoint([0, 0]);
                    t.DomUtil.setPosition(this.canvas, e), this._redraw() } }, { key: "_redraw", value: function() { var e = this._map,
                        n = this.canvas,
                        o = e.getSize(),
                        r = e.getBounds(),
                        a = 180 * o.x / (20037508.34 * (r.getEast() - r.getWest())),
                        i = e.getZoom(),
                        s = new t.LatLng(r.getNorth(), r.getWest()),
                        u = this._unclampedProject(s, 0); for (this._userDrawFunc && this._userDrawFunc({ bounds: r, canvas: n, offset: u, scale: Math.pow(2, i), size: o, zoomScale: a, zoom: i }); this._redrawCallbacks.length > 0;) this._redrawCallbacks.shift()(this);
                    this._frame = null } }, { key: "_animateZoom", value: function(e) { var n = this._map,
                        o = n.getZoomScale(e.zoom, n.getZoom()),
                        r = this._unclampedLatLngBoundsToNewLayerBounds(n.getBounds(), e.zoom, e.center).min;
                    t.DomUtil.setTransform(this.canvas, r, o) } }, { key: "_animateZoomNoLayer", value: function(e) { var n = this._map,
                        o = n.getZoomScale(e.zoom, n.getZoom()),
                        r = n._getCenterOffset(e.center)._multiplyBy(-o).subtract(n._getMapPanePos());
                    t.DomUtil.setTransform(this.canvas, r, o) } }, { key: "_unclampedProject", value: function(e, n) { var o = this._map.options.crs,
                        r = o.projection.R,
                        a = Math.PI / 180,
                        i = e.lat,
                        s = Math.sin(i * a),
                        u = new t.Point(r * e.lng * a, r * Math.log((1 + s) / (1 - s)) / 2),
                        c = o.scale(n); return o.transformation._transform(u, c) } }, { key: "_unclampedLatLngBoundsToNewLayerBounds", value: function(e, n, o) { var r = this._map._getNewPixelOrigin(o, n); return new t.Bounds([this._unclampedProject(e.getSouthWest(), n).subtract(r), this._unclampedProject(e.getNorthWest(), n).subtract(r), this._unclampedProject(e.getSouthEast(), n).subtract(r), this._unclampedProject(e.getNorthEast(), n).subtract(r)]) } }]), i }();
        exports.CanvasOverlay = f;
    }, { "leaflet": "f3z0" }],
    "pR9a": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }), exports.Base = void 0;
        var e = require("./map-matrix"),
            t = require("./canvas-overlay");

        function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function a(e, t) { for (var r = 0; r < t.length; r++) { var a = t[r];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a) } }

        function i(e, t, r) { return t && a(e.prototype, t), r && a(e, r), e }
        var s = function() {
            function a(i) { var s = this;
                r(this, a), this.buffers = {}, this.attributeLocations = {}, this.uniformLocations = {}, i.pane || (i.pane = "overlayPane"), this.mapMatrix = new e.MapMatrix, this.active = !0, this.vertexShader = null, this.fragmentShader = null, this.program = null, this.matrix = null, this.vertices = null, this.vertexLines = null; var n = Boolean(i.preserveDrawingBuffer),
                    o = this.layer = new t.CanvasOverlay(function(e) { return s.drawOnCanvas(e) }, i.pane).addTo(i.map),
                    h = this.canvas = o.canvas;
                h.width = h.clientWidth, h.height = h.clientHeight, h.style.position = "absolute", i.className && (h.className += " " + i.className), this.gl = h.getContext("webgl2", { preserveDrawingBuffer: n }) || h.getContext("webgl", { preserveDrawingBuffer: n }) || h.getContext("experimental-webgl", { preserveDrawingBuffer: n }) } return i(a, [{ key: "attachShaderVariables", value: function(e) { if (0 === this.getShaderVariableCount()) return this; var t = this.gl,
                        r = this.settings.shaderVariables,
                        a = 0; for (var i in r)
                        if (r.hasOwnProperty(i)) { var s = r[i],
                                n = this.getAttributeLocation(i); if (n < 0) throw new Error("shader variable " + i + " not found");
                            t.vertexAttribPointer(n, s.size, t[s.type], !!s.normalize, this.bytes * e, a * e), a += s.size, t.enableVertexAttribArray(n) } return this } }, { key: "getShaderVariableCount", value: function() { return Object.keys(this.settings.shaderVariables).length } }, { key: "setData", value: function(e) { return this.settings.data = e, this } }, { key: "setup", value: function() { var e = this.settings; return e.click && e.setupClick(e.map), e.hover && e.setupHover(e.map, e.hoverWait), this.setupVertexShader().setupFragmentShader().setupProgram() } }, { key: "setupVertexShader", value: function() { var e = this.gl,
                        t = this.settings,
                        r = "function" == typeof t.vertexShaderSource ? t.vertexShaderSource() : t.vertexShaderSource,
                        a = e.createShader(e.VERTEX_SHADER); return e.shaderSource(a, r), e.compileShader(a), this.vertexShader = a, this } }, { key: "setupFragmentShader", value: function() { var e = this.gl,
                        t = this.settings,
                        r = "function" == typeof t.fragmentShaderSource ? t.fragmentShaderSource() : t.fragmentShaderSource,
                        a = e.createShader(e.FRAGMENT_SHADER); return e.shaderSource(a, r), e.compileShader(a), this.fragmentShader = a, this } }, { key: "setupProgram", value: function() { var e = this.gl,
                        t = e.createProgram(); return e.attachShader(t, this.vertexShader), e.attachShader(t, this.fragmentShader), e.linkProgram(t), e.useProgram(t), e.blendFunc(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA), e.enable(e.BLEND), this.program = t, this } }, { key: "addTo", value: function(e) { return this.layer.addTo(e || this.settings.map), this.active = !0, this.render() } }, { key: "remove", value: function(e) { if (void 0 === e) this.settings.map.removeLayer(this.layer), this.active = !1;
                    else { var t = this.settings.data.features || this.settings.data; "number" == typeof(e = e instanceof Array ? e : [e]) && (e = [e]), e.sort().reverse(), e.forEach(function(e) { t.splice(e, 1) }), this.render() } return this } }, { key: "update", value: function(e, t) { return (this.settings.data.features || this.settings.data)[t] = e, this.render(), this } }, { key: "getBuffer", value: function(e) { return this.buffers[e] || (this.buffers[e] = this.gl.createBuffer()), this.buffers[e] } }, { key: "getAttributeLocation", value: function(e) { return void 0 !== this.attributeLocations[e] ? this.attributeLocations[e] : this.attributeLocations[e] = this.gl.getAttribLocation(this.program, e) } }, { key: "getUniformLocation", value: function(e) { return void 0 !== this.uniformLocations[e] ? this.uniformLocations[e] : this.uniformLocations[e] = this.gl.getUniformLocation(this.program, e) } }]), a }();
        exports.Base = s;
    }, { "./map-matrix": "eMRn", "./canvas-overlay": "OTlA" }],
    "lpyx": [function(require, module, exports) {
        "use strict";

        function r(r, e) { if (!(r instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function e(r, e) { for (var n = 0; n < e.length; n++) { var t = e[n];
                t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(r, t.key, t) } }

        function n(r, n, t) { return n && e(r.prototype, n), t && e(r, t), r } Object.defineProperty(exports, "__esModule", { value: !0 }), exports.Color = void 0;
        var t = { r: 0, g: 1, b: 0, a: 1 },
            a = { r: 1, g: 0, b: 0, a: 1 },
            o = { r: 0, g: 0, b: 1, a: 1 },
            u = { r: 0, g: 1, b: 1, a: 1 },
            l = { r: 1, g: 1, b: 0, a: 1 },
            c = { r: 1, g: 1, b: 1, a: 1 },
            s = { r: 0, g: 0, b: 0, a: 1 },
            i = { r: .5, g: .5, b: .5, a: 1 },
            b = function() {
                function e() { r(this, e) } return n(e, null, [{ key: "fromHex", value: function(r) { return r.length < 6 ? null : ("#" === (r = r.toLowerCase())[0] && (r = r.substring(1, r.length)), { r: parseInt(r[0] + r[1], 16) / 255, g: parseInt(r[2] + r[3], 16) / 255, b: parseInt(r[4] + r[5], 16) / 255, a: 1 }) } }, { key: "random", value: function() { return { r: Math.random(), g: Math.random(), b: Math.random(), a: Math.random() } } }, { key: "pallet", value: function() { switch (Math.round(4 * Math.random())) {
                            case 0:
                                return t;
                            case 1:
                                return a;
                            case 2:
                                return o;
                            case 3:
                                return u;
                            case 4:
                                return l } } }, { key: "grey", get: function() { return i } }]), e }();
        exports.Color = b;
    }, {}],
    "GtdH": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }), exports.LineFeatureVertices = void 0;
        var e = require("leaflet");

        function t(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function r(e, t) { for (var r = 0; r < t.length; r++) { var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n) } }

        function n(e, t, n) { return t && r(e.prototype, t), n && r(e, n), e }
        var i = function() {
            function r(e) { t(this, r), this.settings = e, this.vertexCount = 0, this.array = [], this.length = 0 } return n(r, [{ key: "fillFromCoordinates", value: function(t) { for (var r = this.settings, n = r.color, i = r.opacity, a = r.project, o = r.latitudeKey, s = r.longitudeKey, u = 0; u < t.length; u++)
                        if (Array.isArray(t[u][0])) this.fillFromCoordinates(t[u]);
                        else { var l = a(new e.LatLng(t[u][o], t[u][s]), 0);
                            this.push(l.x, l.y, n.r, n.g, n.b, n.a || i), 0 !== u && u !== t.length - 1 && (this.vertexCount += 1), this.vertexCount += 1 } } }, { key: "push", value: function() { var e;
                    (e = this.array).push.apply(e, arguments), this.length = this.array.length } }]), r }();
        exports.LineFeatureVertices = i;
    }, { "leaflet": "f3z0" }],
    "UnXq": [function(require, module, exports) {
        "use strict";

        function t(t, n) { var o = {}; for (var e in n) n.hasOwnProperty(e) && (o[e] = t.hasOwnProperty(e) ? t[e] : n[e]); return o }

        function n(t, n) { var o = Math.PI / 180,
                e = 4 * Math.PI,
                r = Math.sin(t * o); return { x: (n + 180) / 360 * 256, y: 256 * (.5 - Math.log((1 + r) / (1 - r)) / e) } }

        function o(t, n, o) { return (t.x - n.x) * (t.x - n.x) + (t.y - n.y) * (t.y - n.y) <= o * o }

        function e(t, n, o, e, r, a) { var i, u, s = r - o,
                l = a - e,
                p = s * s + l * l,
                c = -1;
            0 !== p && (c = ((t - o) * s + (n - e) * l) / p), c < 0 ? (i = o, u = e) : c > 1 ? (i = r, u = a) : (i = o + c * s, u = e + c * l); var x = t - i,
                h = n - u; return Math.sqrt(x * x + h * h) }

        function r(t, n) { return Math.sqrt(t * t + n * n) }

        function a(t, n, o) { var e = o.latLngToLayerPoint(t),
                a = o.latLngToLayerPoint(n); return r(e.x - a.x, e.y - a.y) }

        function i(t) { var n = document.createElement("div"),
                o = n.style,
                e = t.x,
                r = t.y;
            o.left = e + "px", o.top = r + "px", o.width = "10px", o.height = "10px", o.position = "absolute", o.backgroundColor = "#" + (16777215 * Math.random() << 0).toString(16), document.body.appendChild(n) }

        function u(t, n, o) { var e; return function() { var r = this,
                    a = arguments,
                    i = o && !e;
                clearTimeout(e), e = setTimeout(function() { e = null, o || t.apply(r, a) }, n), i && t.apply(r, a) } }

        function s(t, n) { return n._northEast.lat > t.lat && t.lat > n._southWest.lat && n._northEast.lng > t.lng && t.lng > n._southWest.lng } Object.defineProperty(exports, "__esModule", { value: !0 }), exports.defaults = t, exports.latLonToPixel = n, exports.pointInCircle = o, exports.pDistance = e, exports.vectorDistance = r, exports.locationDistance = a, exports.debugPoint = i, exports.debounce = u, exports.inBounds = s;
    }, {}],
    "ogHp": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }), exports.Lines = void 0;
        var t = require("./base"),
            e = require("./color"),
            r = require("leaflet"),
            i = require("./line-feature-vertices"),
            n = require("./utils");

        function o(t) { return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

        function a(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function s(t, e) { for (var r = 0; r < e.length; r++) { var i = e[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i) } }

        function c(t, e, r) { return e && s(t.prototype, e), r && s(t, r), t }

        function l(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && u(t, e) }

        function u(t, e) { return (u = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t })(t, e) }

        function f(t) { return function() { var e, r = v(t); if (p()) { var i = v(this).constructor;
                    e = Reflect.construct(r, arguments, i) } else e = r.apply(this, arguments); return h(this, e) } }

        function h(t, e) { return !e || "object" !== o(e) && "function" != typeof e ? y(t) : e }

        function y(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }

        function p() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0 } catch (t) { return !1 } }

        function v(t) { return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) }
        var g = { map: null, data: [], longitudeKey: null, latitudeKey: null, setupClick: null, setupHover: null, vertexShaderSource: null, fragmentShaderSource: null, click: null, hover: null, color: e.Color.random, className: "", opacity: .5, weight: 2, sensitivity: .1, sensitivityHover: .03, shaderVariables: { color: { type: "FLOAT", start: 2, size: 4 } } },
            d = function(e) { l(s, t.Base); var o = f(s);

                function s(t) { var e; if (a(this, s), (e = o.call(this, t)).bytes = 6, s.instances.push(y(e)), e.settings = Object.assign(Object.assign({}, s.defaults), t), !t.data) throw new Error('no "data" array setting defined'); if (!t.map) throw new Error('no leaflet "map" object setting defined'); return e.active = !0, e.allVertices = [], e.setup().render(), e } return c(s, [{ key: "render", value: function() { this.resetVertices(); var t = this.canvas,
                            e = this.gl,
                            r = this.layer,
                            i = this.vertices,
                            n = this.settings,
                            o = this.mapMatrix,
                            a = this.getBuffer("vertex"),
                            s = this.getAttributeLocation("vertex"),
                            c = this.getUniformLocation("opacity");
                        e.uniform1f(c, n.opacity), e.bindBuffer(e.ARRAY_BUFFER, a); for (var l = i.length, u = [], f = 0; f < l; f++)
                            for (var h = i[f].array, y = h.length / this.bytes, p = 0; p < y; p++) { var v = p * this.bytes;
                                0 !== p && p !== y - 1 && u.push(h[v], h[v + 1], h[v + 2], h[v + 3], h[v + 4], h[v + 5]), u.push(h[v], h[v + 1], h[v + 2], h[v + 3], h[v + 4], h[v + 5]) } this.allVertices = u; var g = new Float32Array(u); return l = g.BYTES_PER_ELEMENT, e.bufferData(e.ARRAY_BUFFER, g, e.STATIC_DRAW), e.vertexAttribPointer(s, 2, e.FLOAT, !1, l * this.bytes, 0), e.enableVertexAttribArray(s), this.matrix = this.getUniformLocation("matrix"), this.aPointSize = this.getAttributeLocation("pointSize"), o.setSize(t.width, t.height), e.viewport(0, 0, t.width, t.height), e.uniformMatrix4fv(this.matrix, !1, o.array), this.attachShaderVariables(l), r.redraw(), this } }, { key: "resetVertices", value: function() { this.allVertices = [], this.vertices = []; var t, e, r, n = this.vertices,
                            o = this.settings,
                            a = o.data.features,
                            s = o.map,
                            c = o.latitudeKey,
                            l = o.longitudeKey,
                            u = a.length,
                            f = o.color,
                            h = o.opacity,
                            y = 0; if (!f) throw new Error("color is not properly defined"); for ("function" == typeof f && (e = f); y < u; y++) { t = a[y], r = e ? e(y, t) : f; var p = new i.LineFeatureVertices({ project: s.project.bind(s), latitudeKey: c, longitudeKey: l, color: r, opacity: h });
                            p.fillFromCoordinates(t.geometry.coordinates), n.push(p) } return this } }, { key: "drawOnCanvas", value: function(t) { if (!this.gl) return this; var e = this.gl,
                            r = this.settings,
                            i = this.canvas,
                            n = this.mapMatrix,
                            o = this.matrix,
                            a = this.allVertices,
                            s = this.vertices,
                            c = r.weight,
                            l = t.scale,
                            u = t.offset,
                            f = t.zoom,
                            h = Math.max(f - 4, 4); if (e.clear(e.COLOR_BUFFER_BIT), e.viewport(0, 0, i.width, i.height), e.viewport(0, 0, i.width, i.height), e.vertexAttrib1f(this.aPointSize, h), n.setSize(i.width, i.height).scaleMatrix(l), f > 18) n.translateMatrix(-u.x, -u.y), e.uniformMatrix4fv(o, !1, n.array), e.drawArrays(e.LINES, 0, a.length / this.bytes);
                        else if ("number" == typeof c)
                            for (var y = -c; y < c; y += .5)
                                for (var p = -c; p < c; p += .5) n.translateMatrix(-u.x + p / l, -u.y + y / l), e.uniformMatrix4fv(o, !1, n.array), e.drawArrays(e.LINES, 0, a.length / this.bytes);
                        else if ("function" == typeof c)
                            for (var v = 0, g = r.data.features, d = 0; d < s.length; d++) { for (var m = s[d].vertexCount, b = c(d, g[d]), w = -b; w < b; w += .5)
                                    for (var x = -b; x < b; x += .5) n.translateMatrix(-u.x + x / l, -u.y + w / l), e.uniformMatrix4fv(this.matrix, !1, n.array), e.drawArrays(e.LINES, v, m);
                                v += m }
                        return this } }], [{ key: "tryClick", value: function(t, e) { var r, i, o = !1,
                            a = null;
                        s.instances.forEach(function(s) { i = s.settings, r = i.sensitivity, s.active && i.map === e && i.click && i.data.features.map(function(e) { for (var i = 1; i < e.geometry.coordinates.length; i++) { var c = (0, n.pDistance)(t.latlng.lng, t.latlng.lat, e.geometry.coordinates[i - 1][0], e.geometry.coordinates[i - 1][1], e.geometry.coordinates[i][0], e.geometry.coordinates[i][1]);
                                    c < r && (r = c, o = e, a = s) } }) }), a && a.settings.click(t, o) } }, { key: "tryHover", value: function(t, e) { var i, o, a = !1,
                            c = null;
                        s.instances.forEach(function(s) { if (i = s.settings, o = i.sensitivityHover, s.active && i.map === e && i.hover) { var l = (0, r.geoJSON)(i.data.features).getBounds();
                                (0, n.inBounds)(t.latlng, l) && i.data.features.map(function(e) { for (var r = 1; r < e.geometry.coordinates.length; r++) { var i = (0, n.pDistance)(t.latlng.lng, t.latlng.lat, e.geometry.coordinates[r - 1][0], e.geometry.coordinates[r - 1][1], e.geometry.coordinates[r][0], e.geometry.coordinates[r][1]);
                                        i < o && (o = i, a = e, c = s) } }) } }), c && c.settings.hover(t, a) } }]), s }();
        exports.Lines = d, d.defaults = g, d.instances = [];
    }, { "./base": "pR9a", "./color": "lpyx", "leaflet": "f3z0", "./line-feature-vertices": "GtdH", "./utils": "UnXq" }],
    "IieH": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }), exports.Points = void 0;
        var t = require("./base"),
            e = require("./color"),
            r = require("leaflet"),
            n = require("./utils");

        function o(t) { return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

        function i(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function a(t, e) { for (var r = 0; r < e.length; r++) { var n = e[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } }

        function s(t, e, r) { return e && a(t.prototype, e), r && a(t, r), t }

        function l(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && u(t, e) }

        function u(t, e) { return (u = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t })(t, e) }

        function c(t) { return function() { var e, r = y(t); if (p()) { var n = y(this).constructor;
                    e = Reflect.construct(r, arguments, n) } else e = r.apply(this, arguments); return f(this, e) } }

        function f(t, e) { return !e || "object" !== o(e) && "function" != typeof e ? h(t) : e }

        function h(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }

        function p() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0 } catch (t) { return !1 } }

        function y(t) { return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) }
        var g = { map: null, data: [], longitudeKey: null, latitudeKey: null, setupClick: null, setupHover: null, vertexShaderSource: null, fragmentShaderSource: null, eachVertex: null, click: null, hover: null, color: e.Color.random, opacity: .8, size: null, className: "", sensitivity: 2, sensitivityHover: .03, shaderVariables: { vertex: { type: "FLOAT", start: 0, size: 2 }, color: { type: "FLOAT", start: 2, size: 4 }, pointSize: { type: "FLOAT", start: 6, size: 1 } } },
            d = function(e) { l(a, t.Base); var o = c(a);

                function a(t) { var e; if (i(this, a), (e = o.call(this, t)).bytes = 7, a.instances.push(h(e)), e.settings = Object.assign(Object.assign({}, a.defaults), t), !t.data) throw new Error('no "data" array setting defined'); if (!t.map) throw new Error('no leaflet "map" object setting defined');
                    e.active = !0; var n = e.settings.data; if (Array.isArray(n)) e.dataFormat = "Array";
                    else { if ("FeatureCollection" !== n.type) throw new Error("unhandled data type. Supported types are Array and GeoJson.FeatureCollection");
                        e.dataFormat = "GeoJson.FeatureCollection" } return e.settings.map.options.crs.projection.project !== r.Projection.SphericalMercator.project && console.warn("layer designed for SphericalMercator, alternate detected"), e.setup().render(), e } return s(a, [{ key: "render", value: function() { this.resetVertices(); var t = this.gl,
                            e = this.canvas,
                            r = this.layer,
                            n = this.vertices,
                            o = this.mapMatrix,
                            i = this.matrix = this.getUniformLocation("matrix"),
                            a = this.getBuffer("vertices"),
                            s = this.typedVertices = new Float32Array(n),
                            l = s.BYTES_PER_ELEMENT; return o.setSize(e.width, e.height), t.viewport(0, 0, e.width, e.height), t.uniformMatrix4fv(i, !1, o.array), t.bindBuffer(t.ARRAY_BUFFER, a), t.bufferData(t.ARRAY_BUFFER, s, t.STATIC_DRAW), this.attachShaderVariables(l), r.redraw(), this } }, { key: "getPointLookup", value: function(t) { return this.latLngLookup[t] || (this.latLngLookup[t] = []) } }, { key: "addLookup", value: function(t) { return this.getPointLookup(t.key).push(t), this.allLatLngLookup.push(t), this } }, { key: "resetVertices", value: function() { this.latLngLookup = {}, this.allLatLngLookup = [], this.vertices = []; var t, e, n, o, i, a, s, l = this.vertices,
                            u = this.settings,
                            c = u.latitudeKey,
                            f = u.longitudeKey,
                            h = u.data,
                            p = u.map,
                            y = u.eachVertex,
                            g = u.color,
                            d = u.size,
                            v = u.opacity; if (!g) throw new Error("color is not properly defined"); if ("function" == typeof g && (t = g), !d) throw new Error("size is not properly defined"); if ("function" == typeof d && (o = d), "Array" === this.dataFormat)
                            for (var L = h.length, m = 0; m < L; m++) s = (i = h[m])[c].toFixed(2) + "x" + i[f].toFixed(2), a = p.project(new r.LatLng(i[c], i[f]), 0), e = t ? t(m, i) : g, e = Object.assign(Object.assign({}, e), { a: e.a || v }), n = o ? o(m, i) : d, l.push(a.x, a.y, e.r, e.g, e.b, e.a, n), this.addLookup({ latLng: i, key: s, pixel: a, chosenColor: e, chosenSize: n }), y && y.call(this, i, a, n);
                        else if ("GeoJson.FeatureCollection" === this.dataFormat)
                            for (var b = h.features.length, k = 0; k < b; k++) { var w = h.features[k];
                                s = (i = w.geometry.coordinates)[c].toFixed(2) + "x" + i[f].toFixed(2), a = p.project(new r.LatLng(i[c], i[f]), 0), e = t ? t(k, w) : g, e = Object.assign(Object.assign({}, e), { a: e.a || v }), n = o ? o(k, i) : d, l.push(a.x, a.y, e.r, e.g, e.b, e.a, n), this.addLookup({ latLng: i, key: s, pixel: a, chosenColor: e, chosenSize: n, feature: w }), y && y.call(this, i, a, n) }
                        return this } }, { key: "pointSize", value: function(t) { var e = this.settings,
                            r = e.map,
                            n = e.size,
                            o = "function" == typeof n ? n(t, null) : n,
                            i = r.getZoom(); return null === o ? Math.max(i - 4, 1) : o } }, { key: "drawOnCanvas", value: function(t) { if (!this.gl) return this; var e = this.gl,
                            r = this.canvas,
                            n = this.settings,
                            o = this.mapMatrix,
                            i = this.matrix,
                            a = n.map,
                            s = t.offset,
                            l = a.getZoom(),
                            u = Math.pow(2, l); return o.setSize(r.width, r.height).scaleMatrix(u).translateMatrix(-s.x, -s.y), e.clear(e.COLOR_BUFFER_BIT), e.viewport(0, 0, r.width, r.height), e.uniformMatrix4fv(i, !1, o.array), e.drawArrays(e.POINTS, 0, this.allLatLngLookup.length), this } }, { key: "lookup", value: function(t) { for (var e, r, n, o, i, s = t.lat + .03, l = t.lng + .03, u = [], c = t.lat - .03; c <= s; c += .01)
                            for (e = t.lng - .03; e <= l; e += .01)
                                if (i = c.toFixed(2) + "x" + e.toFixed(2), o = this.latLngLookup[i])
                                    for (r = 0, n = o.length; r < n; r++) u.push(o[r]); var f = this.settings.map; return a.closest(t, u.length > 0 ? u : this.allLatLngLookup, f) } }], [{ key: "closest", value: function(t, e, r) { return e.length < 1 ? null : e.reduce(function(e, o) { return (0, n.locationDistance)(t, e.latLng, r) < (0, n.locationDistance)(t, o.latLng, r) ? e : o }) } }, { key: "tryClick", value: function(t, e) { var o, i, s, l, u, c, f, h = [],
                            p = {}; if (a.instances.forEach(function(r) { i = r.settings, r.active && i.map === e && i.click && (l = r.lookup(t.latlng), p[l.key] = r, h.push(l)) }), !(h.length < 1) && i && null !== (c = this.closest(t.latlng, h, e)) && (s = p[c.key])) { var y = s.settings,
                                g = y.latitudeKey,
                                d = y.longitudeKey,
                                v = y.sensitivity,
                                L = y.click; return f = new r.LatLng(c.latLng[g], c.latLng[d]), u = e.latLngToLayerPoint(f), (0, n.pointInCircle)(u, t.layerPoint, c.chosenSize * v) ? void 0 === (o = L(t, c.feature || c.latLng, u)) || o : void 0 } } }, { key: "tryHover", value: function(t, e) { var o, i, s, l, u, c, f, h = [],
                            p = {}; if (a.instances.forEach(function(r) { i = r.settings, r.active && i.map === e && i.hover && (l = r.lookup(t.latlng), p[l.key] = r, h.push(l)) }), !(h.length < 1) && i && null !== (c = this.closest(t.latlng, h, e)) && (s = p[c.key])) { var y = s.settings,
                                g = y.latitudeKey,
                                d = y.longitudeKey,
                                v = y.sensitivityHover,
                                L = y.hover; return f = new r.LatLng(c.latLng[g], c.latLng[d]), u = e.latLngToLayerPoint(f), (0, n.pointInCircle)(u, t.layerPoint, c.chosenSize * v) ? void 0 === (o = L(t, c.feature || c.latLng, u)) || o : void 0 } } }]), a }();
        exports.Points = d, d.instances = [], d.defaults = g, d.maps = [];
    }, { "./base": "pR9a", "./color": "lpyx", "leaflet": "f3z0", "./utils": "UnXq" }],
    "vwhv": [function(require, module, exports) {
        "use strict";

        function e(e, t, x) { x = x || 2; var i, u, v, y, o, p, l, a = t && t.length,
                h = a ? t[0] * x : e.length,
                s = n(e, 0, h, x, !0),
                c = []; if (!s || s.next === s.prev) return c; if (a && (s = f(e, t, s, x)), e.length > 80 * x) { i = v = e[0], u = y = e[1]; for (var Z = x; Z < h; Z += x)(o = e[Z]) < i && (i = o), (p = e[Z + 1]) < u && (u = p), o > v && (v = o), p > y && (y = p);
                l = 0 !== (l = Math.max(v - i, y - u)) ? 1 / l : 0 } return r(s, c, x, i, u, l), c }

        function n(e, n, t, r, x) { var i, u; if (x === A(e, n, t, r) > 0)
                for (i = n; i < t; i += r) u = k(i, e[i], e[i + 1], u);
            else
                for (i = t - r; i >= n; i -= r) u = k(i, e[i], e[i + 1], u); return u && g(u, u.next) && (j(u), u = u.next), u }

        function t(e, n) { if (!e) return e;
            n || (n = e); var t, r = e;
            do { if (t = !1, r.steiner || !g(r, r.next) && 0 !== d(r.prev, r, r.next)) r = r.next;
                else { if (j(r), (r = n = r.prev) === r.next) break;
                    t = !0 } } while (t || r !== n); return n }

        function r(e, n, f, y, o, p, a) { if (e) {!a && p && l(e, y, o, p); for (var h, s, c = e; e.prev !== e.next;)
                    if (h = e.prev, s = e.next, p ? i(e, y, o, p) : x(e)) n.push(h.i / f), n.push(e.i / f), n.push(s.i / f), j(e), e = s.next, c = s.next;
                    else if ((e = s) === c) { a ? 1 === a ? r(e = u(e, n, f), n, f, y, o, p, 2) : 2 === a && v(e, n, f, y, o, p) : r(t(e), n, f, y, o, p, 1); break } } }

        function x(e) { var n = e.prev,
                t = e,
                r = e.next; if (d(n, t, r) >= 0) return !1; for (var x = e.next.next; x !== e.prev;) { if (c(n.x, n.y, t.x, t.y, r.x, r.y, x.x, x.y) && d(x.prev, x, x.next) >= 0) return !1;
                x = x.next } return !0 }

        function i(e, n, t, r) { var x = e.prev,
                i = e,
                u = e.next; if (d(x, i, u) >= 0) return !1; for (var v = x.x < i.x ? x.x < u.x ? x.x : u.x : i.x < u.x ? i.x : u.x, f = x.y < i.y ? x.y < u.y ? x.y : u.y : i.y < u.y ? i.y : u.y, y = x.x > i.x ? x.x > u.x ? x.x : u.x : i.x > u.x ? i.x : u.x, o = x.y > i.y ? x.y > u.y ? x.y : u.y : i.y > u.y ? i.y : u.y, p = h(v, f, n, t, r), l = h(y, o, n, t, r), a = e.prevZ, s = e.nextZ; a && a.z >= p && s && s.z <= l;) { if (a !== e.prev && a !== e.next && c(x.x, x.y, i.x, i.y, u.x, u.y, a.x, a.y) && d(a.prev, a, a.next) >= 0) return !1; if (a = a.prevZ, s !== e.prev && s !== e.next && c(x.x, x.y, i.x, i.y, u.x, u.y, s.x, s.y) && d(s.prev, s, s.next) >= 0) return !1;
                s = s.nextZ } for (; a && a.z >= p;) { if (a !== e.prev && a !== e.next && c(x.x, x.y, i.x, i.y, u.x, u.y, a.x, a.y) && d(a.prev, a, a.next) >= 0) return !1;
                a = a.prevZ } for (; s && s.z <= l;) { if (s !== e.prev && s !== e.next && c(x.x, x.y, i.x, i.y, u.x, u.y, s.x, s.y) && d(s.prev, s, s.next) >= 0) return !1;
                s = s.nextZ } return !0 }

        function u(e, n, t) { var r = e;
            do { var x = r.prev,
                    i = r.next.next;!g(x, i) && w(x, r, r.next, i) && b(x, i) && b(i, x) && (n.push(x.i / t), n.push(r.i / t), n.push(i.i / t), j(r), j(r.next), r = e = i), r = r.next } while (r !== e); return r }

        function v(e, n, x, i, u, v) { var f = e;
            do { for (var y = f.next.next; y !== f.prev;) { if (f.i !== y.i && Z(f, y)) { var o = m(f, y); return f = t(f, f.next), o = t(o, o.next), r(f, n, x, i, u, v), void r(o, n, x, i, u, v) } y = y.next } f = f.next } while (f !== e) }

        function f(e, r, x, i) { var u, v, f, p = []; for (u = 0, v = r.length; u < v; u++)(f = n(e, r[u] * i, u < v - 1 ? r[u + 1] * i : e.length, i, !1)) === f.next && (f.steiner = !0), p.push(s(f)); for (p.sort(y), u = 0; u < p.length; u++) o(p[u], x), x = t(x, x.next); return x }

        function y(e, n) { return e.x - n.x }

        function o(e, n) { if (n = p(e, n)) { var r = m(n, e);
                t(r, r.next) } }

        function p(e, n) { var t, r = n,
                x = e.x,
                i = e.y,
                u = -1 / 0;
            do { if (i <= r.y && i >= r.next.y && r.next.y !== r.y) { var v = r.x + (i - r.y) * (r.next.x - r.x) / (r.next.y - r.y); if (v <= x && v > u) { if (u = v, v === x) { if (i === r.y) return r; if (i === r.next.y) return r.next } t = r.x < r.next.x ? r : r.next } } r = r.next } while (r !== n); if (!t) return null; if (x === u) return t.prev; var f, y = t,
                o = t.x,
                p = t.y,
                l = 1 / 0; for (r = t.next; r !== y;) x >= r.x && r.x >= o && x !== r.x && c(i < p ? x : u, i, o, p, i < p ? u : x, i, r.x, r.y) && ((f = Math.abs(i - r.y) / (x - r.x)) < l || f === l && r.x > t.x) && b(r, e) && (t = r, l = f), r = r.next; return t }

        function l(e, n, t, r) { var x = e;
            do { null === x.z && (x.z = h(x.x, x.y, n, t, r)), x.prevZ = x.prev, x.nextZ = x.next, x = x.next } while (x !== e);
            x.prevZ.nextZ = null, x.prevZ = null, a(x) }

        function a(e) { var n, t, r, x, i, u, v, f, y = 1;
            do { for (t = e, e = null, i = null, u = 0; t;) { for (u++, r = t, v = 0, n = 0; n < y && (v++, r = r.nextZ); n++); for (f = y; v > 0 || f > 0 && r;) 0 !== v && (0 === f || !r || t.z <= r.z) ? (x = t, t = t.nextZ, v--) : (x = r, r = r.nextZ, f--), i ? i.nextZ = x : e = x, x.prevZ = i, i = x;
                    t = r } i.nextZ = null, y *= 2 } while (u > 1); return e }

        function h(e, n, t, r, x) { return (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - t) * x) | e << 8)) | e << 4)) | e << 2)) | e << 1)) | (n = 1431655765 & ((n = 858993459 & ((n = 252645135 & ((n = 16711935 & ((n = 32767 * (n - r) * x) | n << 8)) | n << 4)) | n << 2)) | n << 1)) << 1 }

        function s(e) { var n = e,
                t = e;
            do {
                (n.x < t.x || n.x === t.x && n.y < t.y) && (t = n), n = n.next } while (n !== e); return t }

        function c(e, n, t, r, x, i, u, v) { return (x - u) * (n - v) - (e - u) * (i - v) >= 0 && (e - u) * (r - v) - (t - u) * (n - v) >= 0 && (t - u) * (i - v) - (x - u) * (r - v) >= 0 }

        function Z(e, n) { return e.next.i !== n.i && e.prev.i !== n.i && !z(e, n) && b(e, n) && b(n, e) && M(e, n) }

        function d(e, n, t) { return (n.y - e.y) * (t.x - n.x) - (n.x - e.x) * (t.y - n.y) }

        function g(e, n) { return e.x === n.x && e.y === n.y }

        function w(e, n, t, r) { return !!(g(e, n) && g(t, r) || g(e, r) && g(t, n)) || d(e, n, t) > 0 != d(e, n, r) > 0 && d(t, r, e) > 0 != d(t, r, n) > 0 }

        function z(e, n) { var t = e;
            do { if (t.i !== e.i && t.next.i !== e.i && t.i !== n.i && t.next.i !== n.i && w(t, t.next, e, n)) return !0;
                t = t.next } while (t !== e); return !1 }

        function b(e, n) { return d(e.prev, e, e.next) < 0 ? d(e, n, e.next) >= 0 && d(e, e.prev, n) >= 0 : d(e, n, e.prev) < 0 || d(e, e.next, n) < 0 }

        function M(e, n) { var t = e,
                r = !1,
                x = (e.x + n.x) / 2,
                i = (e.y + n.y) / 2;
            do { t.y > i != t.next.y > i && t.next.y !== t.y && x < (t.next.x - t.x) * (i - t.y) / (t.next.y - t.y) + t.x && (r = !r), t = t.next } while (t !== e); return r }

        function m(e, n) { var t = new q(e.i, e.x, e.y),
                r = new q(n.i, n.x, n.y),
                x = e.next,
                i = n.prev; return e.next = n, n.prev = e, t.next = x, x.prev = t, r.next = t, t.prev = r, i.next = r, r.prev = i, r }

        function k(e, n, t, r) { var x = new q(e, n, t); return r ? (x.next = r.next, x.prev = r, r.next.prev = x, r.next = x) : (x.prev = x, x.next = x), x }

        function j(e) { e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ) }

        function q(e, n, t) { this.i = e, this.x = n, this.y = t, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1 }

        function A(e, n, t, r) { for (var x = 0, i = n, u = t - r; i < t; i += r) x += (e[u] - e[i]) * (e[i + 1] + e[u + 1]), u = i; return x } module.exports = e, module.exports.default = e, e.deviation = function(e, n, t, r) { var x = n && n.length,
                i = x ? n[0] * t : e.length,
                u = Math.abs(A(e, 0, i, t)); if (x)
                for (var v = 0, f = n.length; v < f; v++) { var y = n[v] * t,
                        o = v < f - 1 ? n[v + 1] * t : e.length;
                    u -= Math.abs(A(e, y, o, t)) }
            var p = 0; for (v = 0; v < r.length; v += 3) { var l = r[v] * t,
                    a = r[v + 1] * t,
                    h = r[v + 2] * t;
                p += Math.abs((e[l] - e[h]) * (e[a + 1] - e[l + 1]) - (e[l] - e[a]) * (e[h + 1] - e[l + 1])) } return 0 === u && 0 === p ? 0 : Math.abs((p - u) / u) }, e.flatten = function(e) { for (var n = e[0][0].length, t = { vertices: [], holes: [], dimensions: n }, r = 0, x = 0; x < e.length; x++) { for (var i = 0; i < e[x].length; i++)
                    for (var u = 0; u < n; u++) t.vertices.push(e[x][i][u]);
                x > 0 && (r += e[x - 1].length, t.holes.push(r)) } return t };
    }, {}],
    "nhDx": [function(require, module, exports) {
        "use strict";

        function e(t) { switch (t && t.type || null) {
                case "FeatureCollection":
                    return t.features = t.features.reduce(function(t, r) { return t.concat(e(r)) }, []), t;
                case "Feature":
                    return t.geometry ? e(t.geometry).map(function(e) { var r = { type: "Feature", properties: JSON.parse(JSON.stringify(t.properties)), geometry: e }; return void 0 !== t.id && (r.id = t.id), r }) : [t];
                case "MultiPoint":
                    return t.coordinates.map(function(e) { return { type: "Point", coordinates: e } });
                case "MultiPolygon":
                    return t.coordinates.map(function(e) { return { type: "Polygon", coordinates: e } });
                case "MultiLineString":
                    return t.coordinates.map(function(e) { return { type: "LineString", coordinates: e } });
                case "GeometryCollection":
                    return t.geometries.map(e).reduce(function(e, t) { return e.concat(t) }, []);
                case "Point":
                case "Polygon":
                case "LineString":
                    return [t] } } Object.defineProperty(exports, "__esModule", { value: !0 }), exports.default = e;
    }, {}],
    "AuwV": [function(require, module, exports) {
        var define;
        var global = arguments[3];
        var t, o = arguments[3];
        ! function(o, n) { "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof t && t.amd ? t(n) : o.quickselect = n() }(this, function() { "use strict";

            function t(t, o, n) { var r = t[o];
                t[o] = t[n], t[n] = r }

            function o(t, o) { return t < o ? -1 : t > o ? 1 : 0 } return function(n, r, e, f, u) {! function o(n, r, e, f, u) { for (; f > e;) { if (f - e > 600) { var a = f - e + 1,
                                i = r - e + 1,
                                c = Math.log(a),
                                h = .5 * Math.exp(2 * c / 3),
                                s = .5 * Math.sqrt(c * h * (a - h) / a) * (i - a / 2 < 0 ? -1 : 1),
                                l = Math.max(e, Math.floor(r - i * h / a + s)),
                                M = Math.min(f, Math.floor(r + (a - i) * h / a + s));
                            o(n, r, l, M, u) } var m = n[r],
                            p = e,
                            d = f; for (t(n, e, r), u(n[f], m) > 0 && t(n, e, f); p < d;) { for (t(n, p, d), p++, d--; u(n[p], m) < 0;) p++; for (; u(n[d], m) > 0;) d-- } 0 === u(n[e], m) ? t(n, e, d) : t(n, ++d, f), d <= r && (e = d + 1), r <= d && (f = d - 1) } }(n, r, e || 0, f || n.length - 1, u || o) } });
    }, {}],
    "O1rd": [function(require, module, exports) {
        "use strict";
        module.exports = i, module.exports.default = i;
        var t = require("quickselect");

        function i(t, n) { if (!(this instanceof i)) return new i(t, n);
            this._maxEntries = Math.max(4, t || 9), this._minEntries = Math.max(2, Math.ceil(.4 * this._maxEntries)), n && this._initFormat(n), this.clear() }

        function n(t, i, n) { if (!n) return i.indexOf(t); for (var a = 0; a < i.length; a++)
                if (n(t, i[a])) return a; return -1 }

        function a(t, i) { h(t, 0, t.children.length, i, t) }

        function h(t, i, n, a, h) { h || (h = x(null)), h.minX = 1 / 0, h.minY = 1 / 0, h.maxX = -1 / 0, h.maxY = -1 / 0; for (var r, o = i; o < n; o++) r = t.children[o], e(h, t.leaf ? a(r) : r); return h }

        function e(t, i) { return t.minX = Math.min(t.minX, i.minX), t.minY = Math.min(t.minY, i.minY), t.maxX = Math.max(t.maxX, i.maxX), t.maxY = Math.max(t.maxY, i.maxY), t }

        function r(t, i) { return t.minX - i.minX }

        function o(t, i) { return t.minY - i.minY }

        function s(t) { return (t.maxX - t.minX) * (t.maxY - t.minY) }

        function l(t) { return t.maxX - t.minX + (t.maxY - t.minY) }

        function u(t, i) { return (Math.max(i.maxX, t.maxX) - Math.min(i.minX, t.minX)) * (Math.max(i.maxY, t.maxY) - Math.min(i.minY, t.minY)) }

        function m(t, i) { var n = Math.max(t.minX, i.minX),
                a = Math.max(t.minY, i.minY),
                h = Math.min(t.maxX, i.maxX),
                e = Math.min(t.maxY, i.maxY); return Math.max(0, h - n) * Math.max(0, e - a) }

        function c(t, i) { return t.minX <= i.minX && t.minY <= i.minY && i.maxX <= t.maxX && i.maxY <= t.maxY }

        function f(t, i) { return i.minX <= t.maxX && i.minY <= t.maxY && i.maxX >= t.minX && i.maxY >= t.minY }

        function x(t) { return { children: t, height: 1, leaf: !0, minX: 1 / 0, minY: 1 / 0, maxX: -1 / 0, maxY: -1 / 0 } }

        function d(i, n, a, h, e) { for (var r, o = [n, a]; o.length;)(a = o.pop()) - (n = o.pop()) <= h || (r = n + Math.ceil((a - n) / h / 2) * h, t(i, r, n, a, e), o.push(n, r, r, a)) } i.prototype = { all: function() { return this._all(this.data, []) }, search: function(t) { var i = this.data,
                    n = [],
                    a = this.toBBox; if (!f(t, i)) return n; for (var h, e, r, o, s = []; i;) { for (h = 0, e = i.children.length; h < e; h++) r = i.children[h], f(t, o = i.leaf ? a(r) : r) && (i.leaf ? n.push(r) : c(t, o) ? this._all(r, n) : s.push(r));
                    i = s.pop() } return n }, collides: function(t) { var i = this.data,
                    n = this.toBBox; if (!f(t, i)) return !1; for (var a, h, e, r, o = []; i;) { for (a = 0, h = i.children.length; a < h; a++)
                        if (e = i.children[a], f(t, r = i.leaf ? n(e) : e)) { if (i.leaf || c(t, r)) return !0;
                            o.push(e) } i = o.pop() } return !1 }, load: function(t) { if (!t || !t.length) return this; if (t.length < this._minEntries) { for (var i = 0, n = t.length; i < n; i++) this.insert(t[i]); return this } var a = this._build(t.slice(), 0, t.length - 1, 0); if (this.data.children.length)
                    if (this.data.height === a.height) this._splitRoot(this.data, a);
                    else { if (this.data.height < a.height) { var h = this.data;
                            this.data = a, a = h } this._insert(a, this.data.height - a.height - 1, !0) } else this.data = a; return this }, insert: function(t) { return t && this._insert(t, this.data.height - 1), this }, clear: function() { return this.data = x([]), this }, remove: function(t, i) { if (!t) return this; for (var a, h, e, r, o = this.data, s = this.toBBox(t), l = [], u = []; o || l.length;) { if (o || (o = l.pop(), h = l[l.length - 1], a = u.pop(), r = !0), o.leaf && -1 !== (e = n(t, o.children, i))) return o.children.splice(e, 1), l.push(o), this._condense(l), this;
                    r || o.leaf || !c(o, s) ? h ? (a++, o = h.children[a], r = !1) : o = null : (l.push(o), u.push(a), a = 0, h = o, o = o.children[0]) } return this }, toBBox: function(t) { return t }, compareMinX: r, compareMinY: o, toJSON: function() { return this.data }, fromJSON: function(t) { return this.data = t, this }, _all: function(t, i) { for (var n = []; t;) t.leaf ? i.push.apply(i, t.children) : n.push.apply(n, t.children), t = n.pop(); return i }, _build: function(t, i, n, h) { var e, r = n - i + 1,
                    o = this._maxEntries; if (r <= o) return a(e = x(t.slice(i, n + 1)), this.toBBox), e;
                h || (h = Math.ceil(Math.log(r) / Math.log(o)), o = Math.ceil(r / Math.pow(o, h - 1))), (e = x([])).leaf = !1, e.height = h; var s, l, u, m, c = Math.ceil(r / o),
                    f = c * Math.ceil(Math.sqrt(o)); for (d(t, i, n, f, this.compareMinX), s = i; s <= n; s += f)
                    for (d(t, s, u = Math.min(s + f - 1, n), c, this.compareMinY), l = s; l <= u; l += c) m = Math.min(l + c - 1, u), e.children.push(this._build(t, l, m, h - 1)); return a(e, this.toBBox), e }, _chooseSubtree: function(t, i, n, a) { for (var h, e, r, o, l, m, c, f; a.push(i), !i.leaf && a.length - 1 !== n;) { for (c = f = 1 / 0, h = 0, e = i.children.length; h < e; h++) l = s(r = i.children[h]), (m = u(t, r) - l) < f ? (f = m, c = l < c ? l : c, o = r) : m === f && l < c && (c = l, o = r);
                    i = o || i.children[0] } return i }, _insert: function(t, i, n) { var a = this.toBBox,
                    h = n ? t : a(t),
                    r = [],
                    o = this._chooseSubtree(h, this.data, i, r); for (o.children.push(t), e(o, h); i >= 0 && r[i].children.length > this._maxEntries;) this._split(r, i), i--;
                this._adjustParentBBoxes(h, r, i) }, _split: function(t, i) { var n = t[i],
                    h = n.children.length,
                    e = this._minEntries;
                this._chooseSplitAxis(n, e, h); var r = this._chooseSplitIndex(n, e, h),
                    o = x(n.children.splice(r, n.children.length - r));
                o.height = n.height, o.leaf = n.leaf, a(n, this.toBBox), a(o, this.toBBox), i ? t[i - 1].children.push(o) : this._splitRoot(n, o) }, _splitRoot: function(t, i) { this.data = x([t, i]), this.data.height = t.height + 1, this.data.leaf = !1, a(this.data, this.toBBox) }, _chooseSplitIndex: function(t, i, n) { var a, e, r, o, l, u, c, f; for (u = c = 1 / 0, a = i; a <= n - i; a++) o = m(e = h(t, 0, a, this.toBBox), r = h(t, a, n, this.toBBox)), l = s(e) + s(r), o < u ? (u = o, f = a, c = l < c ? l : c) : o === u && l < c && (c = l, f = a); return f }, _chooseSplitAxis: function(t, i, n) { var a = t.leaf ? this.compareMinX : r,
                    h = t.leaf ? this.compareMinY : o;
                this._allDistMargin(t, i, n, a) < this._allDistMargin(t, i, n, h) && t.children.sort(a) }, _allDistMargin: function(t, i, n, a) { t.children.sort(a); var r, o, s = this.toBBox,
                    u = h(t, 0, i, s),
                    m = h(t, n - i, n, s),
                    c = l(u) + l(m); for (r = i; r < n - i; r++) o = t.children[r], e(u, t.leaf ? s(o) : o), c += l(u); for (r = n - i - 1; r >= i; r--) o = t.children[r], e(m, t.leaf ? s(o) : o), c += l(m); return c }, _adjustParentBBoxes: function(t, i, n) { for (var a = n; a >= 0; a--) e(i[a], t) }, _condense: function(t) { for (var i, n = t.length - 1; n >= 0; n--) 0 === t[n].children.length ? n > 0 ? (i = t[n - 1].children).splice(i.indexOf(t[n]), 1) : this.clear() : a(t[n], this.toBBox) }, _initFormat: function(t) { var i = ["return a", " - b", ";"];
                this.compareMinX = new Function("a", "b", i.join(t[0])), this.compareMinY = new Function("a", "b", i.join(t[1])), this.toBBox = new Function("a", "return {minX: a" + t[0] + ", minY: a" + t[1] + ", maxX: a" + t[2] + ", maxY: a" + t[3] + "};") } };
    }, { "quickselect": "AuwV" }],
    "UTeA": [function(require, module, exports) {
        module.exports = function(r, e) { for (var n = r[0], t = r[1], o = !1, l = 0, u = e.length - 1; l < e.length; u = l++) { var a = e[l][0],
                    f = e[l][1],
                    g = e[u][0],
                    h = e[u][1];
                f > t != h > t && n < (g - a) * (t - f) / (h - f) + a && (o = !o) } return o };
    }, {}],
    "cxFR": [function(require, module, exports) {
        "use strict";

        function m(m) { for (var n = m[0], a = { minX: n[0], minY: n[1], maxX: n[0], maxY: n[1] }, i = 1; i < m.length; i++) { var r = m[i],
                    x = r[0];
                x < a.minX ? a.minX = x : x > a.maxX && (a.maxX = x); var t = r[1];
                t < a.minY ? a.minY = t : t > a.maxY && (a.maxY = t) } return a } module.exports = { getBoundingBox: m };
    }, {}],
    "yh9p": [function(require, module, exports) {
        "use strict";
        exports.byteLength = u, exports.toByteArray = i, exports.fromByteArray = d;
        for (var r = [], t = [], e = "undefined" != typeof Uint8Array ? Uint8Array : Array, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, a = n.length; o < a; ++o) r[o] = n[o], t[n.charCodeAt(o)] = o;

        function h(r) { var t = r.length; if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4"); var e = r.indexOf("="); return -1 === e && (e = t), [e, e === t ? 0 : 4 - e % 4] }

        function u(r) { var t = h(r),
                e = t[0],
                n = t[1]; return 3 * (e + n) / 4 - n }

        function c(r, t, e) { return 3 * (t + e) / 4 - e }

        function i(r) { for (var n, o = h(r), a = o[0], u = o[1], i = new e(c(r, a, u)), f = 0, A = u > 0 ? a - 4 : a, d = 0; d < A; d += 4) n = t[r.charCodeAt(d)] << 18 | t[r.charCodeAt(d + 1)] << 12 | t[r.charCodeAt(d + 2)] << 6 | t[r.charCodeAt(d + 3)], i[f++] = n >> 16 & 255, i[f++] = n >> 8 & 255, i[f++] = 255 & n; return 2 === u && (n = t[r.charCodeAt(d)] << 2 | t[r.charCodeAt(d + 1)] >> 4, i[f++] = 255 & n), 1 === u && (n = t[r.charCodeAt(d)] << 10 | t[r.charCodeAt(d + 1)] << 4 | t[r.charCodeAt(d + 2)] >> 2, i[f++] = n >> 8 & 255, i[f++] = 255 & n), i }

        function f(t) { return r[t >> 18 & 63] + r[t >> 12 & 63] + r[t >> 6 & 63] + r[63 & t] }

        function A(r, t, e) { for (var n, o = [], a = t; a < e; a += 3) n = (r[a] << 16 & 16711680) + (r[a + 1] << 8 & 65280) + (255 & r[a + 2]), o.push(f(n)); return o.join("") }

        function d(t) { for (var e, n = t.length, o = n % 3, a = [], h = 0, u = n - o; h < u; h += 16383) a.push(A(t, h, h + 16383 > u ? u : h + 16383)); return 1 === o ? (e = t[n - 1], a.push(r[e >> 2] + r[e << 4 & 63] + "==")) : 2 === o && (e = (t[n - 2] << 8) + t[n - 1], a.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "=")), a.join("") } t["-".charCodeAt(0)] = 62, t["_".charCodeAt(0)] = 63;
    }, {}],
    "JgNJ": [function(require, module, exports) {
        exports.read = function(a, o, t, r, h) { var M, p, w = 8 * h - r - 1,
                f = (1 << w) - 1,
                e = f >> 1,
                i = -7,
                N = t ? h - 1 : 0,
                n = t ? -1 : 1,
                s = a[o + N]; for (N += n, M = s & (1 << -i) - 1, s >>= -i, i += w; i > 0; M = 256 * M + a[o + N], N += n, i -= 8); for (p = M & (1 << -i) - 1, M >>= -i, i += r; i > 0; p = 256 * p + a[o + N], N += n, i -= 8); if (0 === M) M = 1 - e;
            else { if (M === f) return p ? NaN : 1 / 0 * (s ? -1 : 1);
                p += Math.pow(2, r), M -= e } return (s ? -1 : 1) * p * Math.pow(2, M - r) }, exports.write = function(a, o, t, r, h, M) { var p, w, f, e = 8 * M - h - 1,
                i = (1 << e) - 1,
                N = i >> 1,
                n = 23 === h ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                s = r ? 0 : M - 1,
                u = r ? 1 : -1,
                l = o < 0 || 0 === o && 1 / o < 0 ? 1 : 0; for (o = Math.abs(o), isNaN(o) || o === 1 / 0 ? (w = isNaN(o) ? 1 : 0, p = i) : (p = Math.floor(Math.log(o) / Math.LN2), o * (f = Math.pow(2, -p)) < 1 && (p--, f *= 2), (o += p + N >= 1 ? n / f : n * Math.pow(2, 1 - N)) * f >= 2 && (p++, f /= 2), p + N >= i ? (w = 0, p = i) : p + N >= 1 ? (w = (o * f - 1) * Math.pow(2, h), p += N) : (w = o * Math.pow(2, N - 1) * Math.pow(2, h), p = 0)); h >= 8; a[t + s] = 255 & w, s += u, w /= 256, h -= 8); for (p = p << h | w, e += h; e > 0; a[t + s] = 255 & p, s += u, p /= 256, e -= 8);
            a[t + s - u] |= 128 * l };
    }, {}],
    "REa7": [function(require, module, exports) {
        var r = {}.toString;
        module.exports = Array.isArray || function(t) { return "[object Array]" == r.call(t) };
    }, {}],
    "peL6": [function(require, module, exports) {

        var global = arguments[3];
        var t = arguments[3],
            r = require("base64-js"),
            e = require("ieee754"),
            n = require("isarray");

        function i() { try { var t = new Uint8Array(1); return t.__proto__ = { __proto__: Uint8Array.prototype, foo: function() { return 42 } }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength } catch (r) { return !1 } }

        function o() { return f.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823 }

        function u(t, r) { if (o() < r) throw new RangeError("Invalid typed array length"); return f.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(r)).__proto__ = f.prototype : (null === t && (t = new f(r)), t.length = r), t }

        function f(t, r, e) { if (!(f.TYPED_ARRAY_SUPPORT || this instanceof f)) return new f(t, r, e); if ("number" == typeof t) { if ("string" == typeof r) throw new Error("If encoding is specified then the first argument must be a string"); return c(this, t) } return s(this, t, r, e) }

        function s(t, r, e, n) { if ("number" == typeof r) throw new TypeError('"value" argument must not be a number'); return "undefined" != typeof ArrayBuffer && r instanceof ArrayBuffer ? g(t, r, e, n) : "string" == typeof r ? l(t, r, e) : y(t, r) }

        function h(t) { if ("number" != typeof t) throw new TypeError('"size" argument must be a number'); if (t < 0) throw new RangeError('"size" argument must not be negative') }

        function a(t, r, e, n) { return h(r), r <= 0 ? u(t, r) : void 0 !== e ? "string" == typeof n ? u(t, r).fill(e, n) : u(t, r).fill(e) : u(t, r) }

        function c(t, r) { if (h(r), t = u(t, r < 0 ? 0 : 0 | w(r)), !f.TYPED_ARRAY_SUPPORT)
                for (var e = 0; e < r; ++e) t[e] = 0; return t }

        function l(t, r, e) { if ("string" == typeof e && "" !== e || (e = "utf8"), !f.isEncoding(e)) throw new TypeError('"encoding" must be a valid string encoding'); var n = 0 | v(r, e),
                i = (t = u(t, n)).write(r, e); return i !== n && (t = t.slice(0, i)), t }

        function p(t, r) { var e = r.length < 0 ? 0 : 0 | w(r.length);
            t = u(t, e); for (var n = 0; n < e; n += 1) t[n] = 255 & r[n]; return t }

        function g(t, r, e, n) { if (r.byteLength, e < 0 || r.byteLength < e) throw new RangeError("'offset' is out of bounds"); if (r.byteLength < e + (n || 0)) throw new RangeError("'length' is out of bounds"); return r = void 0 === e && void 0 === n ? new Uint8Array(r) : void 0 === n ? new Uint8Array(r, e) : new Uint8Array(r, e, n), f.TYPED_ARRAY_SUPPORT ? (t = r).__proto__ = f.prototype : t = p(t, r), t }

        function y(t, r) { if (f.isBuffer(r)) { var e = 0 | w(r.length); return 0 === (t = u(t, e)).length ? t : (r.copy(t, 0, 0, e), t) } if (r) { if ("undefined" != typeof ArrayBuffer && r.buffer instanceof ArrayBuffer || "length" in r) return "number" != typeof r.length || W(r.length) ? u(t, 0) : p(t, r); if ("Buffer" === r.type && n(r.data)) return p(t, r.data) } throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.") }

        function w(t) { if (t >= o()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o().toString(16) + " bytes"); return 0 | t }

        function d(t) { return +t != t && (t = 0), f.alloc(+t) }

        function v(t, r) { if (f.isBuffer(t)) return t.length; if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength; "string" != typeof t && (t = "" + t); var e = t.length; if (0 === e) return 0; for (var n = !1;;) switch (r) {
                case "ascii":
                case "latin1":
                case "binary":
                    return e;
                case "utf8":
                case "utf-8":
                case void 0:
                    return $(t).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * e;
                case "hex":
                    return e >>> 1;
                case "base64":
                    return K(t).length;
                default:
                    if (n) return $(t).length;
                    r = ("" + r).toLowerCase(), n = !0 } }

        function E(t, r, e) { var n = !1; if ((void 0 === r || r < 0) && (r = 0), r > this.length) return ""; if ((void 0 === e || e > this.length) && (e = this.length), e <= 0) return ""; if ((e >>>= 0) <= (r >>>= 0)) return ""; for (t || (t = "utf8");;) switch (t) {
                case "hex":
                    return x(this, r, e);
                case "utf8":
                case "utf-8":
                    return Y(this, r, e);
                case "ascii":
                    return L(this, r, e);
                case "latin1":
                case "binary":
                    return D(this, r, e);
                case "base64":
                    return S(this, r, e);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return C(this, r, e);
                default:
                    if (n) throw new TypeError("Unknown encoding: " + t);
                    t = (t + "").toLowerCase(), n = !0 } }

        function b(t, r, e) { var n = t[r];
            t[r] = t[e], t[e] = n }

        function R(t, r, e, n, i) { if (0 === t.length) return -1; if ("string" == typeof e ? (n = e, e = 0) : e > 2147483647 ? e = 2147483647 : e < -2147483648 && (e = -2147483648), e = +e, isNaN(e) && (e = i ? 0 : t.length - 1), e < 0 && (e = t.length + e), e >= t.length) { if (i) return -1;
                e = t.length - 1 } else if (e < 0) { if (!i) return -1;
                e = 0 } if ("string" == typeof r && (r = f.from(r, n)), f.isBuffer(r)) return 0 === r.length ? -1 : _(t, r, e, n, i); if ("number" == typeof r) return r &= 255, f.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, r, e) : Uint8Array.prototype.lastIndexOf.call(t, r, e) : _(t, [r], e, n, i); throw new TypeError("val must be string, number or Buffer") }

        function _(t, r, e, n, i) { var o, u = 1,
                f = t.length,
                s = r.length; if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) { if (t.length < 2 || r.length < 2) return -1;
                u = 2, f /= 2, s /= 2, e /= 2 }

            function h(t, r) { return 1 === u ? t[r] : t.readUInt16BE(r * u) } if (i) { var a = -1; for (o = e; o < f; o++)
                    if (h(t, o) === h(r, -1 === a ? 0 : o - a)) { if (-1 === a && (a = o), o - a + 1 === s) return a * u } else -1 !== a && (o -= o - a), a = -1 } else
                for (e + s > f && (e = f - s), o = e; o >= 0; o--) { for (var c = !0, l = 0; l < s; l++)
                        if (h(t, o + l) !== h(r, l)) { c = !1; break } if (c) return o }
            return -1 }

        function A(t, r, e, n) { e = Number(e) || 0; var i = t.length - e;
            n ? (n = Number(n)) > i && (n = i) : n = i; var o = r.length; if (o % 2 != 0) throw new TypeError("Invalid hex string");
            n > o / 2 && (n = o / 2); for (var u = 0; u < n; ++u) { var f = parseInt(r.substr(2 * u, 2), 16); if (isNaN(f)) return u;
                t[e + u] = f } return u }

        function m(t, r, e, n) { return Q($(r, t.length - e), t, e, n) }

        function P(t, r, e, n) { return Q(G(r), t, e, n) }

        function T(t, r, e, n) { return P(t, r, e, n) }

        function B(t, r, e, n) { return Q(K(r), t, e, n) }

        function U(t, r, e, n) { return Q(H(r, t.length - e), t, e, n) }

        function S(t, e, n) { return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n)) }

        function Y(t, r, e) { e = Math.min(t.length, e); for (var n = [], i = r; i < e;) { var o, u, f, s, h = t[i],
                    a = null,
                    c = h > 239 ? 4 : h > 223 ? 3 : h > 191 ? 2 : 1; if (i + c <= e) switch (c) {
                    case 1:
                        h < 128 && (a = h); break;
                    case 2:
                        128 == (192 & (o = t[i + 1])) && (s = (31 & h) << 6 | 63 & o) > 127 && (a = s); break;
                    case 3:
                        o = t[i + 1], u = t[i + 2], 128 == (192 & o) && 128 == (192 & u) && (s = (15 & h) << 12 | (63 & o) << 6 | 63 & u) > 2047 && (s < 55296 || s > 57343) && (a = s); break;
                    case 4:
                        o = t[i + 1], u = t[i + 2], f = t[i + 3], 128 == (192 & o) && 128 == (192 & u) && 128 == (192 & f) && (s = (15 & h) << 18 | (63 & o) << 12 | (63 & u) << 6 | 63 & f) > 65535 && s < 1114112 && (a = s) } null === a ? (a = 65533, c = 1) : a > 65535 && (a -= 65536, n.push(a >>> 10 & 1023 | 55296), a = 56320 | 1023 & a), n.push(a), i += c } return O(n) } exports.Buffer = f, exports.SlowBuffer = d, exports.INSPECT_MAX_BYTES = 50, f.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : i(), exports.kMaxLength = o(), f.poolSize = 8192, f._augment = function(t) { return t.__proto__ = f.prototype, t }, f.from = function(t, r, e) { return s(null, t, r, e) }, f.TYPED_ARRAY_SUPPORT && (f.prototype.__proto__ = Uint8Array.prototype, f.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && f[Symbol.species] === f && Object.defineProperty(f, Symbol.species, { value: null, configurable: !0 })), f.alloc = function(t, r, e) { return a(null, t, r, e) }, f.allocUnsafe = function(t) { return c(null, t) }, f.allocUnsafeSlow = function(t) { return c(null, t) }, f.isBuffer = function(t) { return !(null == t || !t._isBuffer) }, f.compare = function(t, r) { if (!f.isBuffer(t) || !f.isBuffer(r)) throw new TypeError("Arguments must be Buffers"); if (t === r) return 0; for (var e = t.length, n = r.length, i = 0, o = Math.min(e, n); i < o; ++i)
                if (t[i] !== r[i]) { e = t[i], n = r[i]; break } return e < n ? -1 : n < e ? 1 : 0 }, f.isEncoding = function(t) { switch (String(t).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1 } }, f.concat = function(t, r) { if (!n(t)) throw new TypeError('"list" argument must be an Array of Buffers'); if (0 === t.length) return f.alloc(0); var e; if (void 0 === r)
                for (r = 0, e = 0; e < t.length; ++e) r += t[e].length; var i = f.allocUnsafe(r),
                o = 0; for (e = 0; e < t.length; ++e) { var u = t[e]; if (!f.isBuffer(u)) throw new TypeError('"list" argument must be an Array of Buffers');
                u.copy(i, o), o += u.length } return i }, f.byteLength = v, f.prototype._isBuffer = !0, f.prototype.swap16 = function() { var t = this.length; if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits"); for (var r = 0; r < t; r += 2) b(this, r, r + 1); return this }, f.prototype.swap32 = function() { var t = this.length; if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits"); for (var r = 0; r < t; r += 4) b(this, r, r + 3), b(this, r + 1, r + 2); return this }, f.prototype.swap64 = function() { var t = this.length; if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits"); for (var r = 0; r < t; r += 8) b(this, r, r + 7), b(this, r + 1, r + 6), b(this, r + 2, r + 5), b(this, r + 3, r + 4); return this }, f.prototype.toString = function() { var t = 0 | this.length; return 0 === t ? "" : 0 === arguments.length ? Y(this, 0, t) : E.apply(this, arguments) }, f.prototype.equals = function(t) { if (!f.isBuffer(t)) throw new TypeError("Argument must be a Buffer"); return this === t || 0 === f.compare(this, t) }, f.prototype.inspect = function() { var t = "",
                r = exports.INSPECT_MAX_BYTES; return this.length > 0 && (t = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (t += " ... ")), "<Buffer " + t + ">" }, f.prototype.compare = function(t, r, e, n, i) { if (!f.isBuffer(t)) throw new TypeError("Argument must be a Buffer"); if (void 0 === r && (r = 0), void 0 === e && (e = t ? t.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), r < 0 || e > t.length || n < 0 || i > this.length) throw new RangeError("out of range index"); if (n >= i && r >= e) return 0; if (n >= i) return -1; if (r >= e) return 1; if (this === t) return 0; for (var o = (i >>>= 0) - (n >>>= 0), u = (e >>>= 0) - (r >>>= 0), s = Math.min(o, u), h = this.slice(n, i), a = t.slice(r, e), c = 0; c < s; ++c)
                if (h[c] !== a[c]) { o = h[c], u = a[c]; break } return o < u ? -1 : u < o ? 1 : 0 }, f.prototype.includes = function(t, r, e) { return -1 !== this.indexOf(t, r, e) }, f.prototype.indexOf = function(t, r, e) { return R(this, t, r, e, !0) }, f.prototype.lastIndexOf = function(t, r, e) { return R(this, t, r, e, !1) }, f.prototype.write = function(t, r, e, n) { if (void 0 === r) n = "utf8", e = this.length, r = 0;
            else if (void 0 === e && "string" == typeof r) n = r, e = this.length, r = 0;
            else { if (!isFinite(r)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                r |= 0, isFinite(e) ? (e |= 0, void 0 === n && (n = "utf8")) : (n = e, e = void 0) } var i = this.length - r; if ((void 0 === e || e > i) && (e = i), t.length > 0 && (e < 0 || r < 0) || r > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            n || (n = "utf8"); for (var o = !1;;) switch (n) {
                case "hex":
                    return A(this, t, r, e);
                case "utf8":
                case "utf-8":
                    return m(this, t, r, e);
                case "ascii":
                    return P(this, t, r, e);
                case "latin1":
                case "binary":
                    return T(this, t, r, e);
                case "base64":
                    return B(this, t, r, e);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return U(this, t, r, e);
                default:
                    if (o) throw new TypeError("Unknown encoding: " + n);
                    n = ("" + n).toLowerCase(), o = !0 } }, f.prototype.toJSON = function() { return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) } };
        var I = 4096;

        function O(t) { var r = t.length; if (r <= I) return String.fromCharCode.apply(String, t); for (var e = "", n = 0; n < r;) e += String.fromCharCode.apply(String, t.slice(n, n += I)); return e }

        function L(t, r, e) { var n = "";
            e = Math.min(t.length, e); for (var i = r; i < e; ++i) n += String.fromCharCode(127 & t[i]); return n }

        function D(t, r, e) { var n = "";
            e = Math.min(t.length, e); for (var i = r; i < e; ++i) n += String.fromCharCode(t[i]); return n }

        function x(t, r, e) { var n = t.length;
            (!r || r < 0) && (r = 0), (!e || e < 0 || e > n) && (e = n); for (var i = "", o = r; o < e; ++o) i += Z(t[o]); return i }

        function C(t, r, e) { for (var n = t.slice(r, e), i = "", o = 0; o < n.length; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]); return i }

        function M(t, r, e) { if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint"); if (t + r > e) throw new RangeError("Trying to access beyond buffer length") }

        function k(t, r, e, n, i, o) { if (!f.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance'); if (r > i || r < o) throw new RangeError('"value" argument is out of bounds'); if (e + n > t.length) throw new RangeError("Index out of range") }

        function N(t, r, e, n) { r < 0 && (r = 65535 + r + 1); for (var i = 0, o = Math.min(t.length - e, 2); i < o; ++i) t[e + i] = (r & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i) }

        function z(t, r, e, n) { r < 0 && (r = 4294967295 + r + 1); for (var i = 0, o = Math.min(t.length - e, 4); i < o; ++i) t[e + i] = r >>> 8 * (n ? i : 3 - i) & 255 }

        function F(t, r, e, n, i, o) { if (e + n > t.length) throw new RangeError("Index out of range"); if (e < 0) throw new RangeError("Index out of range") }

        function j(t, r, n, i, o) { return o || F(t, r, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), e.write(t, r, n, i, 23, 4), n + 4 }

        function q(t, r, n, i, o) { return o || F(t, r, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), e.write(t, r, n, i, 52, 8), n + 8 } f.prototype.slice = function(t, r) { var e, n = this.length; if ((t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), (r = void 0 === r ? n : ~~r) < 0 ? (r += n) < 0 && (r = 0) : r > n && (r = n), r < t && (r = t), f.TYPED_ARRAY_SUPPORT)(e = this.subarray(t, r)).__proto__ = f.prototype;
            else { var i = r - t;
                e = new f(i, void 0); for (var o = 0; o < i; ++o) e[o] = this[o + t] } return e }, f.prototype.readUIntLE = function(t, r, e) { t |= 0, r |= 0, e || M(t, r, this.length); for (var n = this[t], i = 1, o = 0; ++o < r && (i *= 256);) n += this[t + o] * i; return n }, f.prototype.readUIntBE = function(t, r, e) { t |= 0, r |= 0, e || M(t, r, this.length); for (var n = this[t + --r], i = 1; r > 0 && (i *= 256);) n += this[t + --r] * i; return n }, f.prototype.readUInt8 = function(t, r) { return r || M(t, 1, this.length), this[t] }, f.prototype.readUInt16LE = function(t, r) { return r || M(t, 2, this.length), this[t] | this[t + 1] << 8 }, f.prototype.readUInt16BE = function(t, r) { return r || M(t, 2, this.length), this[t] << 8 | this[t + 1] }, f.prototype.readUInt32LE = function(t, r) { return r || M(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3] }, f.prototype.readUInt32BE = function(t, r) { return r || M(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]) }, f.prototype.readIntLE = function(t, r, e) { t |= 0, r |= 0, e || M(t, r, this.length); for (var n = this[t], i = 1, o = 0; ++o < r && (i *= 256);) n += this[t + o] * i; return n >= (i *= 128) && (n -= Math.pow(2, 8 * r)), n }, f.prototype.readIntBE = function(t, r, e) { t |= 0, r |= 0, e || M(t, r, this.length); for (var n = r, i = 1, o = this[t + --n]; n > 0 && (i *= 256);) o += this[t + --n] * i; return o >= (i *= 128) && (o -= Math.pow(2, 8 * r)), o }, f.prototype.readInt8 = function(t, r) { return r || M(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t] }, f.prototype.readInt16LE = function(t, r) { r || M(t, 2, this.length); var e = this[t] | this[t + 1] << 8; return 32768 & e ? 4294901760 | e : e }, f.prototype.readInt16BE = function(t, r) { r || M(t, 2, this.length); var e = this[t + 1] | this[t] << 8; return 32768 & e ? 4294901760 | e : e }, f.prototype.readInt32LE = function(t, r) { return r || M(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24 }, f.prototype.readInt32BE = function(t, r) { return r || M(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3] }, f.prototype.readFloatLE = function(t, r) { return r || M(t, 4, this.length), e.read(this, t, !0, 23, 4) }, f.prototype.readFloatBE = function(t, r) { return r || M(t, 4, this.length), e.read(this, t, !1, 23, 4) }, f.prototype.readDoubleLE = function(t, r) { return r || M(t, 8, this.length), e.read(this, t, !0, 52, 8) }, f.prototype.readDoubleBE = function(t, r) { return r || M(t, 8, this.length), e.read(this, t, !1, 52, 8) }, f.prototype.writeUIntLE = function(t, r, e, n) {
            (t = +t, r |= 0, e |= 0, n) || k(this, t, r, e, Math.pow(2, 8 * e) - 1, 0); var i = 1,
                o = 0; for (this[r] = 255 & t; ++o < e && (i *= 256);) this[r + o] = t / i & 255; return r + e }, f.prototype.writeUIntBE = function(t, r, e, n) {
            (t = +t, r |= 0, e |= 0, n) || k(this, t, r, e, Math.pow(2, 8 * e) - 1, 0); var i = e - 1,
                o = 1; for (this[r + i] = 255 & t; --i >= 0 && (o *= 256);) this[r + i] = t / o & 255; return r + e }, f.prototype.writeUInt8 = function(t, r, e) { return t = +t, r |= 0, e || k(this, t, r, 1, 255, 0), f.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[r] = 255 & t, r + 1 }, f.prototype.writeUInt16LE = function(t, r, e) { return t = +t, r |= 0, e || k(this, t, r, 2, 65535, 0), f.TYPED_ARRAY_SUPPORT ? (this[r] = 255 & t, this[r + 1] = t >>> 8) : N(this, t, r, !0), r + 2 }, f.prototype.writeUInt16BE = function(t, r, e) { return t = +t, r |= 0, e || k(this, t, r, 2, 65535, 0), f.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 8, this[r + 1] = 255 & t) : N(this, t, r, !1), r + 2 }, f.prototype.writeUInt32LE = function(t, r, e) { return t = +t, r |= 0, e || k(this, t, r, 4, 4294967295, 0), f.TYPED_ARRAY_SUPPORT ? (this[r + 3] = t >>> 24, this[r + 2] = t >>> 16, this[r + 1] = t >>> 8, this[r] = 255 & t) : z(this, t, r, !0), r + 4 }, f.prototype.writeUInt32BE = function(t, r, e) { return t = +t, r |= 0, e || k(this, t, r, 4, 4294967295, 0), f.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = 255 & t) : z(this, t, r, !1), r + 4 }, f.prototype.writeIntLE = function(t, r, e, n) { if (t = +t, r |= 0, !n) { var i = Math.pow(2, 8 * e - 1);
                k(this, t, r, e, i - 1, -i) } var o = 0,
                u = 1,
                f = 0; for (this[r] = 255 & t; ++o < e && (u *= 256);) t < 0 && 0 === f && 0 !== this[r + o - 1] && (f = 1), this[r + o] = (t / u >> 0) - f & 255; return r + e }, f.prototype.writeIntBE = function(t, r, e, n) { if (t = +t, r |= 0, !n) { var i = Math.pow(2, 8 * e - 1);
                k(this, t, r, e, i - 1, -i) } var o = e - 1,
                u = 1,
                f = 0; for (this[r + o] = 255 & t; --o >= 0 && (u *= 256);) t < 0 && 0 === f && 0 !== this[r + o + 1] && (f = 1), this[r + o] = (t / u >> 0) - f & 255; return r + e }, f.prototype.writeInt8 = function(t, r, e) { return t = +t, r |= 0, e || k(this, t, r, 1, 127, -128), f.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[r] = 255 & t, r + 1 }, f.prototype.writeInt16LE = function(t, r, e) { return t = +t, r |= 0, e || k(this, t, r, 2, 32767, -32768), f.TYPED_ARRAY_SUPPORT ? (this[r] = 255 & t, this[r + 1] = t >>> 8) : N(this, t, r, !0), r + 2 }, f.prototype.writeInt16BE = function(t, r, e) { return t = +t, r |= 0, e || k(this, t, r, 2, 32767, -32768), f.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 8, this[r + 1] = 255 & t) : N(this, t, r, !1), r + 2 }, f.prototype.writeInt32LE = function(t, r, e) { return t = +t, r |= 0, e || k(this, t, r, 4, 2147483647, -2147483648), f.TYPED_ARRAY_SUPPORT ? (this[r] = 255 & t, this[r + 1] = t >>> 8, this[r + 2] = t >>> 16, this[r + 3] = t >>> 24) : z(this, t, r, !0), r + 4 }, f.prototype.writeInt32BE = function(t, r, e) { return t = +t, r |= 0, e || k(this, t, r, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), f.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = 255 & t) : z(this, t, r, !1), r + 4 }, f.prototype.writeFloatLE = function(t, r, e) { return j(this, t, r, !0, e) }, f.prototype.writeFloatBE = function(t, r, e) { return j(this, t, r, !1, e) }, f.prototype.writeDoubleLE = function(t, r, e) { return q(this, t, r, !0, e) }, f.prototype.writeDoubleBE = function(t, r, e) { return q(this, t, r, !1, e) }, f.prototype.copy = function(t, r, e, n) { if (e || (e = 0), n || 0 === n || (n = this.length), r >= t.length && (r = t.length), r || (r = 0), n > 0 && n < e && (n = e), n === e) return 0; if (0 === t.length || 0 === this.length) return 0; if (r < 0) throw new RangeError("targetStart out of bounds"); if (e < 0 || e >= this.length) throw new RangeError("sourceStart out of bounds"); if (n < 0) throw new RangeError("sourceEnd out of bounds");
            n > this.length && (n = this.length), t.length - r < n - e && (n = t.length - r + e); var i, o = n - e; if (this === t && e < r && r < n)
                for (i = o - 1; i >= 0; --i) t[i + r] = this[i + e];
            else if (o < 1e3 || !f.TYPED_ARRAY_SUPPORT)
                for (i = 0; i < o; ++i) t[i + r] = this[i + e];
            else Uint8Array.prototype.set.call(t, this.subarray(e, e + o), r); return o }, f.prototype.fill = function(t, r, e, n) { if ("string" == typeof t) { if ("string" == typeof r ? (n = r, r = 0, e = this.length) : "string" == typeof e && (n = e, e = this.length), 1 === t.length) { var i = t.charCodeAt(0);
                    i < 256 && (t = i) } if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string"); if ("string" == typeof n && !f.isEncoding(n)) throw new TypeError("Unknown encoding: " + n) } else "number" == typeof t && (t &= 255); if (r < 0 || this.length < r || this.length < e) throw new RangeError("Out of range index"); if (e <= r) return this; var o; if (r >>>= 0, e = void 0 === e ? this.length : e >>> 0, t || (t = 0), "number" == typeof t)
                for (o = r; o < e; ++o) this[o] = t;
            else { var u = f.isBuffer(t) ? t : $(new f(t, n).toString()),
                    s = u.length; for (o = 0; o < e - r; ++o) this[o + r] = u[o % s] } return this };
        var V = /[^+\/0-9A-Za-z-_]/g;

        function X(t) { if ((t = J(t).replace(V, "")).length < 2) return ""; for (; t.length % 4 != 0;) t += "="; return t }

        function J(t) { return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "") }

        function Z(t) { return t < 16 ? "0" + t.toString(16) : t.toString(16) }

        function $(t, r) { var e;
            r = r || 1 / 0; for (var n = t.length, i = null, o = [], u = 0; u < n; ++u) { if ((e = t.charCodeAt(u)) > 55295 && e < 57344) { if (!i) { if (e > 56319) {
                            (r -= 3) > -1 && o.push(239, 191, 189); continue } if (u + 1 === n) {
                            (r -= 3) > -1 && o.push(239, 191, 189); continue } i = e; continue } if (e < 56320) {
                        (r -= 3) > -1 && o.push(239, 191, 189), i = e; continue } e = 65536 + (i - 55296 << 10 | e - 56320) } else i && (r -= 3) > -1 && o.push(239, 191, 189); if (i = null, e < 128) { if ((r -= 1) < 0) break;
                    o.push(e) } else if (e < 2048) { if ((r -= 2) < 0) break;
                    o.push(e >> 6 | 192, 63 & e | 128) } else if (e < 65536) { if ((r -= 3) < 0) break;
                    o.push(e >> 12 | 224, e >> 6 & 63 | 128, 63 & e | 128) } else { if (!(e < 1114112)) throw new Error("Invalid code point"); if ((r -= 4) < 0) break;
                    o.push(e >> 18 | 240, e >> 12 & 63 | 128, e >> 6 & 63 | 128, 63 & e | 128) } } return o }

        function G(t) { for (var r = [], e = 0; e < t.length; ++e) r.push(255 & t.charCodeAt(e)); return r }

        function H(t, r) { for (var e, n, i, o = [], u = 0; u < t.length && !((r -= 2) < 0); ++u) n = (e = t.charCodeAt(u)) >> 8, i = e % 256, o.push(i), o.push(n); return o }

        function K(t) { return r.toByteArray(X(t)) }

        function Q(t, r, e, n) { for (var i = 0; i < n && !(i + e >= r.length || i >= t.length); ++i) r[i + e] = t[i]; return i }

        function W(t) { return t != t }
    }, { "base64-js": "yh9p", "ieee754": "JgNJ", "isarray": "REa7", "buffer": "peL6" }],
    "B1iE": [function(require, module, exports) {
        var global = arguments[3];
        var Buffer = require("buffer").Buffer;
        var define;
        var n, t = arguments[3],
            r = require("buffer").Buffer;
        (function() { var r, e = 200,
                u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
                i = "Expected a function",
                o = "__lodash_hash_undefined__",
                f = 500,
                a = "__lodash_placeholder__",
                c = 1,
                l = 2,
                s = 4,
                h = 1,
                p = 2,
                v = 1,
                _ = 2,
                g = 4,
                y = 8,
                d = 16,
                b = 32,
                w = 64,
                m = 128,
                x = 256,
                j = 512,
                A = 30,
                k = "...",
                O = 800,
                I = 16,
                R = 1,
                E = 2,
                z = 1 / 0,
                S = 9007199254740991,
                L = 1.7976931348623157e308,
                W = NaN,
                C = 4294967295,
                B = C - 1,
                U = C >>> 1,
                T = [
                    ["ary", m],
                    ["bind", v],
                    ["bindKey", _],
                    ["curry", y],
                    ["curryRight", d],
                    ["flip", j],
                    ["partial", b],
                    ["partialRight", w],
                    ["rearg", x]
                ],
                $ = "[object Arguments]",
                D = "[object Array]",
                M = "[object AsyncFunction]",
                F = "[object Boolean]",
                N = "[object Date]",
                P = "[object DOMException]",
                q = "[object Error]",
                Z = "[object Function]",
                K = "[object GeneratorFunction]",
                V = "[object Map]",
                G = "[object Number]",
                H = "[object Null]",
                J = "[object Object]",
                Y = "[object Proxy]",
                Q = "[object RegExp]",
                X = "[object Set]",
                nn = "[object String]",
                tn = "[object Symbol]",
                rn = "[object Undefined]",
                en = "[object WeakMap]",
                un = "[object WeakSet]",
                on = "[object ArrayBuffer]",
                fn = "[object DataView]",
                an = "[object Float32Array]",
                cn = "[object Float64Array]",
                ln = "[object Int8Array]",
                sn = "[object Int16Array]",
                hn = "[object Int32Array]",
                pn = "[object Uint8Array]",
                vn = "[object Uint8ClampedArray]",
                _n = "[object Uint16Array]",
                gn = "[object Uint32Array]",
                yn = /\b__p \+= '';/g,
                dn = /\b(__p \+=) '' \+/g,
                bn = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                wn = /&(?:amp|lt|gt|quot|#39);/g,
                mn = /[&<>"']/g,
                xn = RegExp(wn.source),
                jn = RegExp(mn.source),
                An = /<%-([\s\S]+?)%>/g,
                kn = /<%([\s\S]+?)%>/g,
                On = /<%=([\s\S]+?)%>/g,
                In = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                Rn = /^\w*$/,
                En = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                zn = /[\\^$.*+?()[\]{}|]/g,
                Sn = RegExp(zn.source),
                Ln = /^\s+|\s+$/g,
                Wn = /^\s+/,
                Cn = /\s+$/,
                Bn = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                Un = /\{\n\/\* \[wrapped with (.+)\] \*/,
                Tn = /,? & /,
                $n = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                Dn = /\\(\\)?/g,
                Mn = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                Fn = /\w*$/,
                Nn = /^[-+]0x[0-9a-f]+$/i,
                Pn = /^0b[01]+$/i,
                qn = /^\[object .+?Constructor\]$/,
                Zn = /^0o[0-7]+$/i,
                Kn = /^(?:0|[1-9]\d*)$/,
                Vn = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                Gn = /($^)/,
                Hn = /['\n\r\u2028\u2029\\]/g,
                Jn = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                Yn = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                Qn = "[\\ud800-\\udfff]",
                Xn = "[" + Yn + "]",
                nt = "[" + Jn + "]",
                tt = "\\d+",
                rt = "[\\u2700-\\u27bf]",
                et = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
                ut = "[^\\ud800-\\udfff" + Yn + tt + "\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
                it = "\\ud83c[\\udffb-\\udfff]",
                ot = "[^\\ud800-\\udfff]",
                ft = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                at = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                ct = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
                lt = "(?:" + et + "|" + ut + ")",
                st = "(?:" + ct + "|" + ut + ")",
                ht = "(?:" + nt + "|" + it + ")" + "?",
                pt = "[\\ufe0e\\ufe0f]?" + ht + ("(?:\\u200d(?:" + [ot, ft, at].join("|") + ")[\\ufe0e\\ufe0f]?" + ht + ")*"),
                vt = "(?:" + [rt, ft, at].join("|") + ")" + pt,
                _t = "(?:" + [ot + nt + "?", nt, ft, at, Qn].join("|") + ")",
                gt = RegExp("['’]", "g"),
                yt = RegExp(nt, "g"),
                dt = RegExp(it + "(?=" + it + ")|" + _t + pt, "g"),
                bt = RegExp([ct + "?" + et + "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" + [Xn, ct, "$"].join("|") + ")", st + "+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" + [Xn, ct + lt, "$"].join("|") + ")", ct + "?" + lt + "+(?:['’](?:d|ll|m|re|s|t|ve))?", ct + "+(?:['’](?:D|LL|M|RE|S|T|VE))?", "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", tt, vt].join("|"), "g"),
                wt = RegExp("[\\u200d\\ud800-\\udfff" + Jn + "\\ufe0e\\ufe0f]"),
                mt = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                xt = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                jt = -1,
                At = {};
            At[an] = At[cn] = At[ln] = At[sn] = At[hn] = At[pn] = At[vn] = At[_n] = At[gn] = !0, At[$] = At[D] = At[on] = At[F] = At[fn] = At[N] = At[q] = At[Z] = At[V] = At[G] = At[J] = At[Q] = At[X] = At[nn] = At[en] = !1; var kt = {};
            kt[$] = kt[D] = kt[on] = kt[fn] = kt[F] = kt[N] = kt[an] = kt[cn] = kt[ln] = kt[sn] = kt[hn] = kt[V] = kt[G] = kt[J] = kt[Q] = kt[X] = kt[nn] = kt[tn] = kt[pn] = kt[vn] = kt[_n] = kt[gn] = !0, kt[q] = kt[Z] = kt[en] = !1; var Ot = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" },
                It = parseFloat,
                Rt = parseInt,
                Et = "object" == typeof t && t && t.Object === Object && t,
                zt = "object" == typeof self && self && self.Object === Object && self,
                St = Et || zt || Function("return this")(),
                Lt = "object" == typeof exports && exports && !exports.nodeType && exports,
                Wt = Lt && "object" == typeof module && module && !module.nodeType && module,
                Ct = Wt && Wt.exports === Lt,
                Bt = Ct && Et.process,
                Ut = function() { try { var n = Wt && Wt.require && Wt.require("util").types; return n || Bt && Bt.binding && Bt.binding("util") } catch (t) {} }(),
                Tt = Ut && Ut.isArrayBuffer,
                $t = Ut && Ut.isDate,
                Dt = Ut && Ut.isMap,
                Mt = Ut && Ut.isRegExp,
                Ft = Ut && Ut.isSet,
                Nt = Ut && Ut.isTypedArray;

            function Pt(n, t, r) { switch (r.length) {
                    case 0:
                        return n.call(t);
                    case 1:
                        return n.call(t, r[0]);
                    case 2:
                        return n.call(t, r[0], r[1]);
                    case 3:
                        return n.call(t, r[0], r[1], r[2]) } return n.apply(t, r) }

            function qt(n, t, r, e) { for (var u = -1, i = null == n ? 0 : n.length; ++u < i;) { var o = n[u];
                    t(e, o, r(o), n) } return e }

            function Zt(n, t) { for (var r = -1, e = null == n ? 0 : n.length; ++r < e && !1 !== t(n[r], r, n);); return n }

            function Kt(n, t) { for (var r = null == n ? 0 : n.length; r-- && !1 !== t(n[r], r, n);); return n }

            function Vt(n, t) { for (var r = -1, e = null == n ? 0 : n.length; ++r < e;)
                    if (!t(n[r], r, n)) return !1; return !0 }

            function Gt(n, t) { for (var r = -1, e = null == n ? 0 : n.length, u = 0, i = []; ++r < e;) { var o = n[r];
                    t(o, r, n) && (i[u++] = o) } return i }

            function Ht(n, t) { return !!(null == n ? 0 : n.length) && ir(n, t, 0) > -1 }

            function Jt(n, t, r) { for (var e = -1, u = null == n ? 0 : n.length; ++e < u;)
                    if (r(t, n[e])) return !0; return !1 }

            function Yt(n, t) { for (var r = -1, e = null == n ? 0 : n.length, u = Array(e); ++r < e;) u[r] = t(n[r], r, n); return u }

            function Qt(n, t) { for (var r = -1, e = t.length, u = n.length; ++r < e;) n[u + r] = t[r]; return n }

            function Xt(n, t, r, e) { var u = -1,
                    i = null == n ? 0 : n.length; for (e && i && (r = n[++u]); ++u < i;) r = t(r, n[u], u, n); return r }

            function nr(n, t, r, e) { var u = null == n ? 0 : n.length; for (e && u && (r = n[--u]); u--;) r = t(r, n[u], u, n); return r }

            function tr(n, t) { for (var r = -1, e = null == n ? 0 : n.length; ++r < e;)
                    if (t(n[r], r, n)) return !0; return !1 } var rr = cr("length");

            function er(n, t, r) { var e; return r(n, function(n, r, u) { if (t(n, r, u)) return e = r, !1 }), e }

            function ur(n, t, r, e) { for (var u = n.length, i = r + (e ? 1 : -1); e ? i-- : ++i < u;)
                    if (t(n[i], i, n)) return i; return -1 }

            function ir(n, t, r) { return t == t ? function(n, t, r) { var e = r - 1,
                        u = n.length; for (; ++e < u;)
                        if (n[e] === t) return e; return -1 }(n, t, r) : ur(n, fr, r) }

            function or(n, t, r, e) { for (var u = r - 1, i = n.length; ++u < i;)
                    if (e(n[u], t)) return u; return -1 }

            function fr(n) { return n != n }

            function ar(n, t) { var r = null == n ? 0 : n.length; return r ? hr(n, t) / r : W }

            function cr(n) { return function(t) { return null == t ? r : t[n] } }

            function lr(n) { return function(t) { return null == n ? r : n[t] } }

            function sr(n, t, r, e, u) { return u(n, function(n, u, i) { r = e ? (e = !1, n) : t(r, n, u, i) }), r }

            function hr(n, t) { for (var e, u = -1, i = n.length; ++u < i;) { var o = t(n[u]);
                    o !== r && (e = e === r ? o : e + o) } return e }

            function pr(n, t) { for (var r = -1, e = Array(n); ++r < n;) e[r] = t(r); return e }

            function vr(n) { return function(t) { return n(t) } }

            function _r(n, t) { return Yt(t, function(t) { return n[t] }) }

            function gr(n, t) { return n.has(t) }

            function yr(n, t) { for (var r = -1, e = n.length; ++r < e && ir(t, n[r], 0) > -1;); return r }

            function dr(n, t) { for (var r = n.length; r-- && ir(t, n[r], 0) > -1;); return r } var br = lr({ "À": "A", "Á": "A", "Â": "A", "Ã": "A", "Ä": "A", "Å": "A", "à": "a", "á": "a", "â": "a", "ã": "a", "ä": "a", "å": "a", "Ç": "C", "ç": "c", "Ð": "D", "ð": "d", "È": "E", "É": "E", "Ê": "E", "Ë": "E", "è": "e", "é": "e", "ê": "e", "ë": "e", "Ì": "I", "Í": "I", "Î": "I", "Ï": "I", "ì": "i", "í": "i", "î": "i", "ï": "i", "Ñ": "N", "ñ": "n", "Ò": "O", "Ó": "O", "Ô": "O", "Õ": "O", "Ö": "O", "Ø": "O", "ò": "o", "ó": "o", "ô": "o", "õ": "o", "ö": "o", "ø": "o", "Ù": "U", "Ú": "U", "Û": "U", "Ü": "U", "ù": "u", "ú": "u", "û": "u", "ü": "u", "Ý": "Y", "ý": "y", "ÿ": "y", "Æ": "Ae", "æ": "ae", "Þ": "Th", "þ": "th", "ß": "ss", "Ā": "A", "Ă": "A", "Ą": "A", "ā": "a", "ă": "a", "ą": "a", "Ć": "C", "Ĉ": "C", "Ċ": "C", "Č": "C", "ć": "c", "ĉ": "c", "ċ": "c", "č": "c", "Ď": "D", "Đ": "D", "ď": "d", "đ": "d", "Ē": "E", "Ĕ": "E", "Ė": "E", "Ę": "E", "Ě": "E", "ē": "e", "ĕ": "e", "ė": "e", "ę": "e", "ě": "e", "Ĝ": "G", "Ğ": "G", "Ġ": "G", "Ģ": "G", "ĝ": "g", "ğ": "g", "ġ": "g", "ģ": "g", "Ĥ": "H", "Ħ": "H", "ĥ": "h", "ħ": "h", "Ĩ": "I", "Ī": "I", "Ĭ": "I", "Į": "I", "İ": "I", "ĩ": "i", "ī": "i", "ĭ": "i", "į": "i", "ı": "i", "Ĵ": "J", "ĵ": "j", "Ķ": "K", "ķ": "k", "ĸ": "k", "Ĺ": "L", "Ļ": "L", "Ľ": "L", "Ŀ": "L", "Ł": "L", "ĺ": "l", "ļ": "l", "ľ": "l", "ŀ": "l", "ł": "l", "Ń": "N", "Ņ": "N", "Ň": "N", "Ŋ": "N", "ń": "n", "ņ": "n", "ň": "n", "ŋ": "n", "Ō": "O", "Ŏ": "O", "Ő": "O", "ō": "o", "ŏ": "o", "ő": "o", "Ŕ": "R", "Ŗ": "R", "Ř": "R", "ŕ": "r", "ŗ": "r", "ř": "r", "Ś": "S", "Ŝ": "S", "Ş": "S", "Š": "S", "ś": "s", "ŝ": "s", "ş": "s", "š": "s", "Ţ": "T", "Ť": "T", "Ŧ": "T", "ţ": "t", "ť": "t", "ŧ": "t", "Ũ": "U", "Ū": "U", "Ŭ": "U", "Ů": "U", "Ű": "U", "Ų": "U", "ũ": "u", "ū": "u", "ŭ": "u", "ů": "u", "ű": "u", "ų": "u", "Ŵ": "W", "ŵ": "w", "Ŷ": "Y", "ŷ": "y", "Ÿ": "Y", "Ź": "Z", "Ż": "Z", "Ž": "Z", "ź": "z", "ż": "z", "ž": "z", "Ĳ": "IJ", "ĳ": "ij", "Œ": "Oe", "œ": "oe", "ŉ": "'n", "ſ": "s" }),
                wr = lr({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" });

            function mr(n) { return "\\" + Ot[n] }

            function xr(n) { return wt.test(n) }

            function jr(n) { var t = -1,
                    r = Array(n.size); return n.forEach(function(n, e) { r[++t] = [e, n] }), r }

            function Ar(n, t) { return function(r) { return n(t(r)) } }

            function kr(n, t) { for (var r = -1, e = n.length, u = 0, i = []; ++r < e;) { var o = n[r];
                    o !== t && o !== a || (n[r] = a, i[u++] = r) } return i }

            function Or(n) { var t = -1,
                    r = Array(n.size); return n.forEach(function(n) { r[++t] = n }), r }

            function Ir(n) { var t = -1,
                    r = Array(n.size); return n.forEach(function(n) { r[++t] = [n, n] }), r }

            function Rr(n) { return xr(n) ? function(n) { var t = dt.lastIndex = 0; for (; dt.test(n);) ++t; return t }(n) : rr(n) }

            function Er(n) { return xr(n) ? function(n) { return n.match(dt) || [] }(n) : function(n) { return n.split("") }(n) } var zr = lr({ "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" }); var Sr = function n(t) { var Jn, Yn = (t = null == t ? St : Sr.defaults(St.Object(), t, Sr.pick(St, xt))).Array,
                    Qn = t.Date,
                    Xn = t.Error,
                    nt = t.Function,
                    tt = t.Math,
                    rt = t.Object,
                    et = t.RegExp,
                    ut = t.String,
                    it = t.TypeError,
                    ot = Yn.prototype,
                    ft = nt.prototype,
                    at = rt.prototype,
                    ct = t["__core-js_shared__"],
                    lt = ft.toString,
                    st = at.hasOwnProperty,
                    ht = 0,
                    pt = (Jn = /[^.]+$/.exec(ct && ct.keys && ct.keys.IE_PROTO || "")) ? "Symbol(src)_1." + Jn : "",
                    vt = at.toString,
                    _t = lt.call(rt),
                    dt = St._,
                    wt = et("^" + lt.call(st).replace(zn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                    Ot = Ct ? t.Buffer : r,
                    Et = t.Symbol,
                    zt = t.Uint8Array,
                    Lt = Ot ? Ot.allocUnsafe : r,
                    Wt = Ar(rt.getPrototypeOf, rt),
                    Bt = rt.create,
                    Ut = at.propertyIsEnumerable,
                    rr = ot.splice,
                    lr = Et ? Et.isConcatSpreadable : r,
                    Lr = Et ? Et.iterator : r,
                    Wr = Et ? Et.toStringTag : r,
                    Cr = function() { try { var n = $i(rt, "defineProperty"); return n({}, "", {}), n } catch (t) {} }(),
                    Br = t.clearTimeout !== St.clearTimeout && t.clearTimeout,
                    Ur = Qn && Qn.now !== St.Date.now && Qn.now,
                    Tr = t.setTimeout !== St.setTimeout && t.setTimeout,
                    $r = tt.ceil,
                    Dr = tt.floor,
                    Mr = rt.getOwnPropertySymbols,
                    Fr = Ot ? Ot.isBuffer : r,
                    Nr = t.isFinite,
                    Pr = ot.join,
                    qr = Ar(rt.keys, rt),
                    Zr = tt.max,
                    Kr = tt.min,
                    Vr = Qn.now,
                    Gr = t.parseInt,
                    Hr = tt.random,
                    Jr = ot.reverse,
                    Yr = $i(t, "DataView"),
                    Qr = $i(t, "Map"),
                    Xr = $i(t, "Promise"),
                    ne = $i(t, "Set"),
                    te = $i(t, "WeakMap"),
                    re = $i(rt, "create"),
                    ee = te && new te,
                    ue = {},
                    ie = lo(Yr),
                    oe = lo(Qr),
                    fe = lo(Xr),
                    ae = lo(ne),
                    ce = lo(te),
                    le = Et ? Et.prototype : r,
                    se = le ? le.valueOf : r,
                    he = le ? le.toString : r;

                function pe(n) { if (Ef(n) && !df(n) && !(n instanceof ye)) { if (n instanceof ge) return n; if (st.call(n, "__wrapped__")) return so(n) } return new ge(n) } var ve = function() {
                    function n() {} return function(t) { if (!Rf(t)) return {}; if (Bt) return Bt(t);
                        n.prototype = t; var e = new n; return n.prototype = r, e } }();

                function _e() {}

                function ge(n, t) { this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = r }

                function ye(n) { this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = C, this.__views__ = [] }

                function de(n) { var t = -1,
                        r = null == n ? 0 : n.length; for (this.clear(); ++t < r;) { var e = n[t];
                        this.set(e[0], e[1]) } }

                function be(n) { var t = -1,
                        r = null == n ? 0 : n.length; for (this.clear(); ++t < r;) { var e = n[t];
                        this.set(e[0], e[1]) } }

                function we(n) { var t = -1,
                        r = null == n ? 0 : n.length; for (this.clear(); ++t < r;) { var e = n[t];
                        this.set(e[0], e[1]) } }

                function me(n) { var t = -1,
                        r = null == n ? 0 : n.length; for (this.__data__ = new we; ++t < r;) this.add(n[t]) }

                function xe(n) { var t = this.__data__ = new be(n);
                    this.size = t.size }

                function je(n, t) { var r = df(n),
                        e = !r && yf(n),
                        u = !r && !e && xf(n),
                        i = !r && !e && !u && Tf(n),
                        o = r || e || u || i,
                        f = o ? pr(n.length, ut) : [],
                        a = f.length; for (var c in n) !t && !st.call(n, c) || o && ("length" == c || u && ("offset" == c || "parent" == c) || i && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || Zi(c, a)) || f.push(c); return f }

                function Ae(n) { var t = n.length; return t ? n[mu(0, t - 1)] : r }

                function ke(n, t) { return fo(ri(n), Ce(t, 0, n.length)) }

                function Oe(n) { return fo(ri(n)) }

                function Ie(n, t, e) {
                    (e === r || vf(n[t], e)) && (e !== r || t in n) || Le(n, t, e) }

                function Re(n, t, e) { var u = n[t];
                    st.call(n, t) && vf(u, e) && (e !== r || t in n) || Le(n, t, e) }

                function Ee(n, t) { for (var r = n.length; r--;)
                        if (vf(n[r][0], t)) return r; return -1 }

                function ze(n, t, r, e) { return De(n, function(n, u, i) { t(e, n, r(n), i) }), e }

                function Se(n, t) { return n && ei(t, ia(t), n) }

                function Le(n, t, r) { "__proto__" == t && Cr ? Cr(n, t, { configurable: !0, enumerable: !0, value: r, writable: !0 }) : n[t] = r }

                function We(n, t) { for (var e = -1, u = t.length, i = Yn(u), o = null == n; ++e < u;) i[e] = o ? r : na(n, t[e]); return i }

                function Ce(n, t, e) { return n == n && (e !== r && (n = n <= e ? n : e), t !== r && (n = n >= t ? n : t)), n }

                function Be(n, t, e, u, i, o) { var f, a = t & c,
                        h = t & l,
                        p = t & s; if (e && (f = i ? e(n, u, i, o) : e(n)), f !== r) return f; if (!Rf(n)) return n; var v = df(n); if (v) { if (f = function(n) { var t = n.length,
                                    r = new n.constructor(t); return t && "string" == typeof n[0] && st.call(n, "index") && (r.index = n.index, r.input = n.input), r }(n), !a) return ri(n, f) } else { var _ = Fi(n),
                            g = _ == Z || _ == K; if (xf(n)) return Ju(n, a); if (_ == J || _ == $ || g && !i) { if (f = h || g ? {} : Pi(n), !a) return h ? function(n, t) { return ei(n, Mi(n), t) }(n, function(n, t) { return n && ei(t, oa(t), n) }(f, n)) : function(n, t) { return ei(n, Di(n), t) }(n, Se(f, n)) } else { if (!kt[_]) return i ? n : {};
                            f = function(n, t, r) { var e, u, i, o = n.constructor; switch (t) {
                                    case on:
                                        return Yu(n);
                                    case F:
                                    case N:
                                        return new o(+n);
                                    case fn:
                                        return function(n, t) { var r = t ? Yu(n.buffer) : n.buffer; return new n.constructor(r, n.byteOffset, n.byteLength) }(n, r);
                                    case an:
                                    case cn:
                                    case ln:
                                    case sn:
                                    case hn:
                                    case pn:
                                    case vn:
                                    case _n:
                                    case gn:
                                        return Qu(n, r);
                                    case V:
                                        return new o;
                                    case G:
                                    case nn:
                                        return new o(n);
                                    case Q:
                                        return (i = new(u = n).constructor(u.source, Fn.exec(u))).lastIndex = u.lastIndex, i;
                                    case X:
                                        return new o;
                                    case tn:
                                        return e = n, se ? rt(se.call(e)) : {} } }(n, _, a) } } o || (o = new xe); var y = o.get(n); if (y) return y;
                    o.set(n, f), Cf(n) ? n.forEach(function(r) { f.add(Be(r, t, e, r, n, o)) }) : zf(n) && n.forEach(function(r, u) { f.set(u, Be(r, t, e, u, n, o)) }); var d = v ? r : (p ? h ? Si : zi : h ? oa : ia)(n); return Zt(d || n, function(r, u) { d && (r = n[u = r]), Re(f, u, Be(r, t, e, u, n, o)) }), f }

                function Ue(n, t, e) { var u = e.length; if (null == n) return !u; for (n = rt(n); u--;) { var i = e[u],
                            o = t[i],
                            f = n[i]; if (f === r && !(i in n) || !o(f)) return !1 } return !0 }

                function Te(n, t, e) { if ("function" != typeof n) throw new it(i); return eo(function() { n.apply(r, e) }, t) }

                function $e(n, t, r, u) { var i = -1,
                        o = Ht,
                        f = !0,
                        a = n.length,
                        c = [],
                        l = t.length; if (!a) return c;
                    r && (t = Yt(t, vr(r))), u ? (o = Jt, f = !1) : t.length >= e && (o = gr, f = !1, t = new me(t));
                    n: for (; ++i < a;) { var s = n[i],
                            h = null == r ? s : r(s); if (s = u || 0 !== s ? s : 0, f && h == h) { for (var p = l; p--;)
                                if (t[p] === h) continue n;
                            c.push(s) } else o(t, h, u) || c.push(s) }
                    return c } pe.templateSettings = { escape: An, evaluate: kn, interpolate: On, variable: "", imports: { _: pe } }, pe.prototype = _e.prototype, pe.prototype.constructor = pe, ge.prototype = ve(_e.prototype), ge.prototype.constructor = ge, ye.prototype = ve(_e.prototype), ye.prototype.constructor = ye, de.prototype.clear = function() { this.__data__ = re ? re(null) : {}, this.size = 0 }, de.prototype.delete = function(n) { var t = this.has(n) && delete this.__data__[n]; return this.size -= t ? 1 : 0, t }, de.prototype.get = function(n) { var t = this.__data__; if (re) { var e = t[n]; return e === o ? r : e } return st.call(t, n) ? t[n] : r }, de.prototype.has = function(n) { var t = this.__data__; return re ? t[n] !== r : st.call(t, n) }, de.prototype.set = function(n, t) { var e = this.__data__; return this.size += this.has(n) ? 0 : 1, e[n] = re && t === r ? o : t, this }, be.prototype.clear = function() { this.__data__ = [], this.size = 0 }, be.prototype.delete = function(n) { var t = this.__data__,
                        r = Ee(t, n); return !(r < 0 || (r == t.length - 1 ? t.pop() : rr.call(t, r, 1), --this.size, 0)) }, be.prototype.get = function(n) { var t = this.__data__,
                        e = Ee(t, n); return e < 0 ? r : t[e][1] }, be.prototype.has = function(n) { return Ee(this.__data__, n) > -1 }, be.prototype.set = function(n, t) { var r = this.__data__,
                        e = Ee(r, n); return e < 0 ? (++this.size, r.push([n, t])) : r[e][1] = t, this }, we.prototype.clear = function() { this.size = 0, this.__data__ = { hash: new de, map: new(Qr || be), string: new de } }, we.prototype.delete = function(n) { var t = Ui(this, n).delete(n); return this.size -= t ? 1 : 0, t }, we.prototype.get = function(n) { return Ui(this, n).get(n) }, we.prototype.has = function(n) { return Ui(this, n).has(n) }, we.prototype.set = function(n, t) { var r = Ui(this, n),
                        e = r.size; return r.set(n, t), this.size += r.size == e ? 0 : 1, this }, me.prototype.add = me.prototype.push = function(n) { return this.__data__.set(n, o), this }, me.prototype.has = function(n) { return this.__data__.has(n) }, xe.prototype.clear = function() { this.__data__ = new be, this.size = 0 }, xe.prototype.delete = function(n) { var t = this.__data__,
                        r = t.delete(n); return this.size = t.size, r }, xe.prototype.get = function(n) { return this.__data__.get(n) }, xe.prototype.has = function(n) { return this.__data__.has(n) }, xe.prototype.set = function(n, t) { var r = this.__data__; if (r instanceof be) { var u = r.__data__; if (!Qr || u.length < e - 1) return u.push([n, t]), this.size = ++r.size, this;
                        r = this.__data__ = new we(u) } return r.set(n, t), this.size = r.size, this }; var De = oi(Ve),
                    Me = oi(Ge, !0);

                function Fe(n, t) { var r = !0; return De(n, function(n, e, u) { return r = !!t(n, e, u) }), r }

                function Ne(n, t, e) { for (var u = -1, i = n.length; ++u < i;) { var o = n[u],
                            f = t(o); if (null != f && (a === r ? f == f && !Uf(f) : e(f, a))) var a = f,
                            c = o } return c }

                function Pe(n, t) { var r = []; return De(n, function(n, e, u) { t(n, e, u) && r.push(n) }), r }

                function qe(n, t, r, e, u) { var i = -1,
                        o = n.length; for (r || (r = qi), u || (u = []); ++i < o;) { var f = n[i];
                        t > 0 && r(f) ? t > 1 ? qe(f, t - 1, r, e, u) : Qt(u, f) : e || (u[u.length] = f) } return u } var Ze = fi(),
                    Ke = fi(!0);

                function Ve(n, t) { return n && Ze(n, t, ia) }

                function Ge(n, t) { return n && Ke(n, t, ia) }

                function He(n, t) { return Gt(t, function(t) { return kf(n[t]) }) }

                function Je(n, t) { for (var e = 0, u = (t = Ku(t, n)).length; null != n && e < u;) n = n[co(t[e++])]; return e && e == u ? n : r }

                function Ye(n, t, r) { var e = t(n); return df(n) ? e : Qt(e, r(n)) }

                function Qe(n) { return null == n ? n === r ? rn : H : Wr && Wr in rt(n) ? function(n) { var t = st.call(n, Wr),
                            e = n[Wr]; try { n[Wr] = r; var u = !0 } catch (o) {} var i = vt.call(n); return u && (t ? n[Wr] = e : delete n[Wr]), i }(n) : function(n) { return vt.call(n) }(n) }

                function Xe(n, t) { return n > t }

                function nu(n, t) { return null != n && st.call(n, t) }

                function tu(n, t) { return null != n && t in rt(n) }

                function ru(n, t, e) { for (var u = e ? Jt : Ht, i = n[0].length, o = n.length, f = o, a = Yn(o), c = 1 / 0, l = []; f--;) { var s = n[f];
                        f && t && (s = Yt(s, vr(t))), c = Kr(s.length, c), a[f] = !e && (t || i >= 120 && s.length >= 120) ? new me(f && s) : r } s = n[0]; var h = -1,
                        p = a[0];
                    n: for (; ++h < i && l.length < c;) { var v = s[h],
                            _ = t ? t(v) : v; if (v = e || 0 !== v ? v : 0, !(p ? gr(p, _) : u(l, _, e))) { for (f = o; --f;) { var g = a[f]; if (!(g ? gr(g, _) : u(n[f], _, e))) continue n } p && p.push(_), l.push(v) } }
                    return l }

                function eu(n, t, e) { var u = null == (n = no(n, t = Ku(t, n))) ? n : n[co(jo(t))]; return null == u ? r : Pt(u, n, e) }

                function uu(n) { return Ef(n) && Qe(n) == $ }

                function iu(n, t, e, u, i) { return n === t || (null == n || null == t || !Ef(n) && !Ef(t) ? n != n && t != t : function(n, t, e, u, i, o) { var f = df(n),
                            a = df(t),
                            c = f ? D : Fi(n),
                            l = a ? D : Fi(t),
                            s = (c = c == $ ? J : c) == J,
                            v = (l = l == $ ? J : l) == J,
                            _ = c == l; if (_ && xf(n)) { if (!xf(t)) return !1;
                            f = !0, s = !1 } if (_ && !s) return o || (o = new xe), f || Tf(n) ? Ri(n, t, e, u, i, o) : function(n, t, r, e, u, i, o) { switch (r) {
                                case fn:
                                    if (n.byteLength != t.byteLength || n.byteOffset != t.byteOffset) return !1;
                                    n = n.buffer, t = t.buffer;
                                case on:
                                    return !(n.byteLength != t.byteLength || !i(new zt(n), new zt(t)));
                                case F:
                                case N:
                                case G:
                                    return vf(+n, +t);
                                case q:
                                    return n.name == t.name && n.message == t.message;
                                case Q:
                                case nn:
                                    return n == t + "";
                                case V:
                                    var f = jr;
                                case X:
                                    var a = e & h; if (f || (f = Or), n.size != t.size && !a) return !1; var c = o.get(n); if (c) return c == t;
                                    e |= p, o.set(n, t); var l = Ri(f(n), f(t), e, u, i, o); return o.delete(n), l;
                                case tn:
                                    if (se) return se.call(n) == se.call(t) } return !1 }(n, t, c, e, u, i, o); if (!(e & h)) { var g = s && st.call(n, "__wrapped__"),
                                y = v && st.call(t, "__wrapped__"); if (g || y) { var d = g ? n.value() : n,
                                    b = y ? t.value() : t; return o || (o = new xe), i(d, b, e, u, o) } } return !!_ && (o || (o = new xe), function(n, t, e, u, i, o) { var f = e & h,
                                a = zi(n),
                                c = a.length,
                                l = zi(t).length; if (c != l && !f) return !1; for (var s = c; s--;) { var p = a[s]; if (!(f ? p in t : st.call(t, p))) return !1 } var v = o.get(n),
                                _ = o.get(t); if (v && _) return v == t && _ == n; var g = !0;
                            o.set(n, t), o.set(t, n); for (var y = f; ++s < c;) { p = a[s]; var d = n[p],
                                    b = t[p]; if (u) var w = f ? u(b, d, p, t, n, o) : u(d, b, p, n, t, o); if (!(w === r ? d === b || i(d, b, e, u, o) : w)) { g = !1; break } y || (y = "constructor" == p) } if (g && !y) { var m = n.constructor,
                                    x = t.constructor;
                                m != x && "constructor" in n && "constructor" in t && !("function" == typeof m && m instanceof m && "function" == typeof x && x instanceof x) && (g = !1) } return o.delete(n), o.delete(t), g }(n, t, e, u, i, o)) }(n, t, e, u, iu, i)) }

                function ou(n, t, e, u) { var i = e.length,
                        o = i,
                        f = !u; if (null == n) return !o; for (n = rt(n); i--;) { var a = e[i]; if (f && a[2] ? a[1] !== n[a[0]] : !(a[0] in n)) return !1 } for (; ++i < o;) { var c = (a = e[i])[0],
                            l = n[c],
                            s = a[1]; if (f && a[2]) { if (l === r && !(c in n)) return !1 } else { var v = new xe; if (u) var _ = u(l, s, c, n, t, v); if (!(_ === r ? iu(s, l, h | p, u, v) : _)) return !1 } } return !0 }

                function fu(n) { return !(!Rf(n) || (t = n, pt && pt in t)) && (kf(n) ? wt : qn).test(lo(n)); var t }

                function au(n) { return "function" == typeof n ? n : null == n ? Sa : "object" == typeof n ? df(n) ? vu(n[0], n[1]) : pu(n) : Ma(n) }

                function cu(n) { if (!Ji(n)) return qr(n); var t = []; for (var r in rt(n)) st.call(n, r) && "constructor" != r && t.push(r); return t }

                function lu(n) { if (!Rf(n)) return function(n) { var t = []; if (null != n)
                            for (var r in rt(n)) t.push(r); return t }(n); var t = Ji(n),
                        r = []; for (var e in n)("constructor" != e || !t && st.call(n, e)) && r.push(e); return r }

                function su(n, t) { return n < t }

                function hu(n, t) { var r = -1,
                        e = wf(n) ? Yn(n.length) : []; return De(n, function(n, u, i) { e[++r] = t(n, u, i) }), e }

                function pu(n) { var t = Ti(n); return 1 == t.length && t[0][2] ? Qi(t[0][0], t[0][1]) : function(r) { return r === n || ou(r, n, t) } }

                function vu(n, t) { return Vi(n) && Yi(t) ? Qi(co(n), t) : function(e) { var u = na(e, n); return u === r && u === t ? ta(e, n) : iu(t, u, h | p) } }

                function _u(n, t, e, u, i) { n !== t && Ze(t, function(o, f) { if (i || (i = new xe), Rf(o)) ! function(n, t, e, u, i, o, f) { var a = to(n, e),
                                c = to(t, e),
                                l = f.get(c); if (l) Ie(n, e, l);
                            else { var s = o ? o(a, c, e + "", n, t, f) : r,
                                    h = s === r; if (h) { var p = df(c),
                                        v = !p && xf(c),
                                        _ = !p && !v && Tf(c);
                                    s = c, p || v || _ ? df(a) ? s = a : mf(a) ? s = ri(a) : v ? (h = !1, s = Ju(c, !0)) : _ ? (h = !1, s = Qu(c, !0)) : s = [] : Lf(c) || yf(c) ? (s = a, yf(a) ? s = Zf(a) : Rf(a) && !kf(a) || (s = Pi(c))) : h = !1 } h && (f.set(c, s), i(s, c, u, o, f), f.delete(c)), Ie(n, e, s) } }(n, t, f, e, _u, u, i);
                        else { var a = u ? u(to(n, f), o, f + "", n, t, i) : r;
                            a === r && (a = o), Ie(n, f, a) } }, oa) }

                function gu(n, t) { var e = n.length; if (e) return Zi(t += t < 0 ? e : 0, e) ? n[t] : r }

                function yu(n, t, r) { t = t.length ? Yt(t, function(n) { return df(n) ? function(t) { return Je(t, 1 === n.length ? n[0] : n) } : n }) : [Sa]; var e = -1; return t = Yt(t, vr(Bi())),
                        function(n, t) { var r = n.length; for (n.sort(t); r--;) n[r] = n[r].value; return n }(hu(n, function(n, r, u) { return { criteria: Yt(t, function(t) { return t(n) }), index: ++e, value: n } }), function(n, t) { return function(n, t, r) { for (var e = -1, u = n.criteria, i = t.criteria, o = u.length, f = r.length; ++e < o;) { var a = Xu(u[e], i[e]); if (a) { if (e >= f) return a; var c = r[e]; return a * ("desc" == c ? -1 : 1) } } return n.index - t.index }(n, t, r) }) }

                function du(n, t, r) { for (var e = -1, u = t.length, i = {}; ++e < u;) { var o = t[e],
                            f = Je(n, o);
                        r(f, o) && Ou(i, Ku(o, n), f) } return i }

                function bu(n, t, r, e) { var u = e ? or : ir,
                        i = -1,
                        o = t.length,
                        f = n; for (n === t && (t = ri(t)), r && (f = Yt(n, vr(r))); ++i < o;)
                        for (var a = 0, c = t[i], l = r ? r(c) : c;
                            (a = u(f, l, a, e)) > -1;) f !== n && rr.call(f, a, 1), rr.call(n, a, 1); return n }

                function wu(n, t) { for (var r = n ? t.length : 0, e = r - 1; r--;) { var u = t[r]; if (r == e || u !== i) { var i = u;
                            Zi(u) ? rr.call(n, u, 1) : $u(n, u) } } return n }

                function mu(n, t) { return n + Dr(Hr() * (t - n + 1)) }

                function xu(n, t) { var r = ""; if (!n || t < 1 || t > S) return r;
                    do { t % 2 && (r += n), (t = Dr(t / 2)) && (n += n) } while (t); return r }

                function ju(n, t) { return uo(Xi(n, t, Sa), n + "") }

                function Au(n) { return Ae(va(n)) }

                function ku(n, t) { var r = va(n); return fo(r, Ce(t, 0, r.length)) }

                function Ou(n, t, e, u) { if (!Rf(n)) return n; for (var i = -1, o = (t = Ku(t, n)).length, f = o - 1, a = n; null != a && ++i < o;) { var c = co(t[i]),
                            l = e; if ("__proto__" === c || "constructor" === c || "prototype" === c) return n; if (i != f) { var s = a[c];
                            (l = u ? u(s, c, a) : r) === r && (l = Rf(s) ? s : Zi(t[i + 1]) ? [] : {}) } Re(a, c, l), a = a[c] } return n } var Iu = ee ? function(n, t) { return ee.set(n, t), n } : Sa,
                    Ru = Cr ? function(n, t) { return Cr(n, "toString", { configurable: !0, enumerable: !1, value: Ra(t), writable: !0 }) } : Sa;

                function Eu(n) { return fo(va(n)) }

                function zu(n, t, r) { var e = -1,
                        u = n.length;
                    t < 0 && (t = -t > u ? 0 : u + t), (r = r > u ? u : r) < 0 && (r += u), u = t > r ? 0 : r - t >>> 0, t >>>= 0; for (var i = Yn(u); ++e < u;) i[e] = n[e + t]; return i }

                function Su(n, t) { var r; return De(n, function(n, e, u) { return !(r = t(n, e, u)) }), !!r }

                function Lu(n, t, r) { var e = 0,
                        u = null == n ? e : n.length; if ("number" == typeof t && t == t && u <= U) { for (; e < u;) { var i = e + u >>> 1,
                                o = n[i];
                            null !== o && !Uf(o) && (r ? o <= t : o < t) ? e = i + 1 : u = i } return u } return Wu(n, t, Sa, r) }

                function Wu(n, t, e, u) { var i = 0,
                        o = null == n ? 0 : n.length; if (0 === o) return 0; for (var f = (t = e(t)) != t, a = null === t, c = Uf(t), l = t === r; i < o;) { var s = Dr((i + o) / 2),
                            h = e(n[s]),
                            p = h !== r,
                            v = null === h,
                            _ = h == h,
                            g = Uf(h); if (f) var y = u || _;
                        else y = l ? _ && (u || p) : a ? _ && p && (u || !v) : c ? _ && p && !v && (u || !g) : !v && !g && (u ? h <= t : h < t);
                        y ? i = s + 1 : o = s } return Kr(o, B) }

                function Cu(n, t) { for (var r = -1, e = n.length, u = 0, i = []; ++r < e;) { var o = n[r],
                            f = t ? t(o) : o; if (!r || !vf(f, a)) { var a = f;
                            i[u++] = 0 === o ? 0 : o } } return i }

                function Bu(n) { return "number" == typeof n ? n : Uf(n) ? W : +n }

                function Uu(n) { if ("string" == typeof n) return n; if (df(n)) return Yt(n, Uu) + ""; if (Uf(n)) return he ? he.call(n) : ""; var t = n + ""; return "0" == t && 1 / n == -z ? "-0" : t }

                function Tu(n, t, r) { var u = -1,
                        i = Ht,
                        o = n.length,
                        f = !0,
                        a = [],
                        c = a; if (r) f = !1, i = Jt;
                    else if (o >= e) { var l = t ? null : xi(n); if (l) return Or(l);
                        f = !1, i = gr, c = new me } else c = t ? [] : a;
                    n: for (; ++u < o;) { var s = n[u],
                            h = t ? t(s) : s; if (s = r || 0 !== s ? s : 0, f && h == h) { for (var p = c.length; p--;)
                                if (c[p] === h) continue n;
                            t && c.push(h), a.push(s) } else i(c, h, r) || (c !== a && c.push(h), a.push(s)) }
                    return a }

                function $u(n, t) { return null == (n = no(n, t = Ku(t, n))) || delete n[co(jo(t))] }

                function Du(n, t, r, e) { return Ou(n, t, r(Je(n, t)), e) }

                function Mu(n, t, r, e) { for (var u = n.length, i = e ? u : -1;
                        (e ? i-- : ++i < u) && t(n[i], i, n);); return r ? zu(n, e ? 0 : i, e ? i + 1 : u) : zu(n, e ? i + 1 : 0, e ? u : i) }

                function Fu(n, t) { var r = n; return r instanceof ye && (r = r.value()), Xt(t, function(n, t) { return t.func.apply(t.thisArg, Qt([n], t.args)) }, r) }

                function Nu(n, t, r) { var e = n.length; if (e < 2) return e ? Tu(n[0]) : []; for (var u = -1, i = Yn(e); ++u < e;)
                        for (var o = n[u], f = -1; ++f < e;) f != u && (i[u] = $e(i[u] || o, n[f], t, r)); return Tu(qe(i, 1), t, r) }

                function Pu(n, t, e) { for (var u = -1, i = n.length, o = t.length, f = {}; ++u < i;) { var a = u < o ? t[u] : r;
                        e(f, n[u], a) } return f }

                function qu(n) { return mf(n) ? n : [] }

                function Zu(n) { return "function" == typeof n ? n : Sa }

                function Ku(n, t) { return df(n) ? n : Vi(n, t) ? [n] : ao(Kf(n)) } var Vu = ju;

                function Gu(n, t, e) { var u = n.length; return e = e === r ? u : e, !t && e >= u ? n : zu(n, t, e) } var Hu = Br || function(n) { return St.clearTimeout(n) };

                function Ju(n, t) { if (t) return n.slice(); var r = n.length,
                        e = Lt ? Lt(r) : new n.constructor(r); return n.copy(e), e }

                function Yu(n) { var t = new n.constructor(n.byteLength); return new zt(t).set(new zt(n)), t }

                function Qu(n, t) { var r = t ? Yu(n.buffer) : n.buffer; return new n.constructor(r, n.byteOffset, n.length) }

                function Xu(n, t) { if (n !== t) { var e = n !== r,
                            u = null === n,
                            i = n == n,
                            o = Uf(n),
                            f = t !== r,
                            a = null === t,
                            c = t == t,
                            l = Uf(t); if (!a && !l && !o && n > t || o && f && c && !a && !l || u && f && c || !e && c || !i) return 1; if (!u && !o && !l && n < t || l && e && i && !u && !o || a && e && i || !f && i || !c) return -1 } return 0 }

                function ni(n, t, r, e) { for (var u = -1, i = n.length, o = r.length, f = -1, a = t.length, c = Zr(i - o, 0), l = Yn(a + c), s = !e; ++f < a;) l[f] = t[f]; for (; ++u < o;)(s || u < i) && (l[r[u]] = n[u]); for (; c--;) l[f++] = n[u++]; return l }

                function ti(n, t, r, e) { for (var u = -1, i = n.length, o = -1, f = r.length, a = -1, c = t.length, l = Zr(i - f, 0), s = Yn(l + c), h = !e; ++u < l;) s[u] = n[u]; for (var p = u; ++a < c;) s[p + a] = t[a]; for (; ++o < f;)(h || u < i) && (s[p + r[o]] = n[u++]); return s }

                function ri(n, t) { var r = -1,
                        e = n.length; for (t || (t = Yn(e)); ++r < e;) t[r] = n[r]; return t }

                function ei(n, t, e, u) { var i = !e;
                    e || (e = {}); for (var o = -1, f = t.length; ++o < f;) { var a = t[o],
                            c = u ? u(e[a], n[a], a, e, n) : r;
                        c === r && (c = n[a]), i ? Le(e, a, c) : Re(e, a, c) } return e }

                function ui(n, t) { return function(r, e) { var u = df(r) ? qt : ze,
                            i = t ? t() : {}; return u(r, n, Bi(e, 2), i) } }

                function ii(n) { return ju(function(t, e) { var u = -1,
                            i = e.length,
                            o = i > 1 ? e[i - 1] : r,
                            f = i > 2 ? e[2] : r; for (o = n.length > 3 && "function" == typeof o ? (i--, o) : r, f && Ki(e[0], e[1], f) && (o = i < 3 ? r : o, i = 1), t = rt(t); ++u < i;) { var a = e[u];
                            a && n(t, a, u, o) } return t }) }

                function oi(n, t) { return function(r, e) { if (null == r) return r; if (!wf(r)) return n(r, e); for (var u = r.length, i = t ? u : -1, o = rt(r);
                            (t ? i-- : ++i < u) && !1 !== e(o[i], i, o);); return r } }

                function fi(n) { return function(t, r, e) { for (var u = -1, i = rt(t), o = e(t), f = o.length; f--;) { var a = o[n ? f : ++u]; if (!1 === r(i[a], a, i)) break } return t } }

                function ai(n) { return function(t) { var e = xr(t = Kf(t)) ? Er(t) : r,
                            u = e ? e[0] : t.charAt(0),
                            i = e ? Gu(e, 1).join("") : t.slice(1); return u[n]() + i } }

                function ci(n) { return function(t) { return Xt(ka(ya(t).replace(gt, "")), n, "") } }

                function li(n) { return function() { var t = arguments; switch (t.length) {
                            case 0:
                                return new n;
                            case 1:
                                return new n(t[0]);
                            case 2:
                                return new n(t[0], t[1]);
                            case 3:
                                return new n(t[0], t[1], t[2]);
                            case 4:
                                return new n(t[0], t[1], t[2], t[3]);
                            case 5:
                                return new n(t[0], t[1], t[2], t[3], t[4]);
                            case 6:
                                return new n(t[0], t[1], t[2], t[3], t[4], t[5]);
                            case 7:
                                return new n(t[0], t[1], t[2], t[3], t[4], t[5], t[6]) } var r = ve(n.prototype),
                            e = n.apply(r, t); return Rf(e) ? e : r } }

                function si(n) { return function(t, e, u) { var i = rt(t); if (!wf(t)) { var o = Bi(e, 3);
                            t = ia(t), e = function(n) { return o(i[n], n, i) } } var f = n(t, e, u); return f > -1 ? i[o ? t[f] : f] : r } }

                function hi(n) { return Ei(function(t) { var e = t.length,
                            u = e,
                            o = ge.prototype.thru; for (n && t.reverse(); u--;) { var f = t[u]; if ("function" != typeof f) throw new it(i); if (o && !a && "wrapper" == Wi(f)) var a = new ge([], !0) } for (u = a ? u : e; ++u < e;) { var c = Wi(f = t[u]),
                                l = "wrapper" == c ? Li(f) : r;
                            a = l && Gi(l[0]) && l[1] == (m | y | b | x) && !l[4].length && 1 == l[9] ? a[Wi(l[0])].apply(a, l[3]) : 1 == f.length && Gi(f) ? a[c]() : a.thru(f) } return function() { var n = arguments,
                                r = n[0]; if (a && 1 == n.length && df(r)) return a.plant(r).value(); for (var u = 0, i = e ? t[u].apply(this, n) : r; ++u < e;) i = t[u].call(this, i); return i } }) }

                function pi(n, t, e, u, i, o, f, a, c, l) { var s = t & m,
                        h = t & v,
                        p = t & _,
                        g = t & (y | d),
                        b = t & j,
                        w = p ? r : li(n); return function v() { for (var _ = arguments.length, y = Yn(_), d = _; d--;) y[d] = arguments[d]; if (g) var m = Ci(v),
                            x = function(n, t) { for (var r = n.length, e = 0; r--;) n[r] === t && ++e; return e }(y, m); if (u && (y = ni(y, u, i, g)), o && (y = ti(y, o, f, g)), _ -= x, g && _ < l) { var j = kr(y, m); return wi(n, t, pi, v.placeholder, e, y, j, a, c, l - _) } var A = h ? e : this,
                            k = p ? A[n] : n; return _ = y.length, a ? y = function(n, t) { for (var e = n.length, u = Kr(t.length, e), i = ri(n); u--;) { var o = t[u];
                                n[u] = Zi(o, e) ? i[o] : r } return n }(y, a) : b && _ > 1 && y.reverse(), s && c < _ && (y.length = c), this && this !== St && this instanceof v && (k = w || li(k)), k.apply(A, y) } }

                function vi(n, t) { return function(r, e) { return function(n, t, r, e) { return Ve(n, function(n, u, i) { t(e, r(n), u, i) }), e }(r, n, t(e), {}) } }

                function _i(n, t) { return function(e, u) { var i; if (e === r && u === r) return t; if (e !== r && (i = e), u !== r) { if (i === r) return u; "string" == typeof e || "string" == typeof u ? (e = Uu(e), u = Uu(u)) : (e = Bu(e), u = Bu(u)), i = n(e, u) } return i } }

                function gi(n) { return Ei(function(t) { return t = Yt(t, vr(Bi())), ju(function(r) { var e = this; return n(t, function(n) { return Pt(n, e, r) }) }) }) }

                function yi(n, t) { var e = (t = t === r ? " " : Uu(t)).length; if (e < 2) return e ? xu(t, n) : t; var u = xu(t, $r(n / Rr(t))); return xr(t) ? Gu(Er(u), 0, n).join("") : u.slice(0, n) }

                function di(n) { return function(t, e, u) { return u && "number" != typeof u && Ki(t, e, u) && (e = u = r), t = Ff(t), e === r ? (e = t, t = 0) : e = Ff(e),
                            function(n, t, r, e) { for (var u = -1, i = Zr($r((t - n) / (r || 1)), 0), o = Yn(i); i--;) o[e ? i : ++u] = n, n += r; return o }(t, e, u = u === r ? t < e ? 1 : -1 : Ff(u), n) } }

                function bi(n) { return function(t, r) { return "string" == typeof t && "string" == typeof r || (t = qf(t), r = qf(r)), n(t, r) } }

                function wi(n, t, e, u, i, o, f, a, c, l) { var s = t & y;
                    t |= s ? b : w, (t &= ~(s ? w : b)) & g || (t &= ~(v | _)); var h = [n, t, i, s ? o : r, s ? f : r, s ? r : o, s ? r : f, a, c, l],
                        p = e.apply(r, h); return Gi(n) && ro(p, h), p.placeholder = u, io(p, n, t) }

                function mi(n) { var t = tt[n]; return function(n, r) { if (n = qf(n), (r = null == r ? 0 : Kr(Nf(r), 292)) && Nr(n)) { var e = (Kf(n) + "e").split("e"); return +((e = (Kf(t(e[0] + "e" + (+e[1] + r))) + "e").split("e"))[0] + "e" + (+e[1] - r)) } return t(n) } } var xi = ne && 1 / Or(new ne([, -0]))[1] == z ? function(n) { return new ne(n) } : Ua;

                function ji(n) { return function(t) { var r = Fi(t); return r == V ? jr(t) : r == X ? Ir(t) : function(n, t) { return Yt(t, function(t) { return [t, n[t]] }) }(t, n(t)) } }

                function Ai(n, t, e, u, o, f, c, l) { var s = t & _; if (!s && "function" != typeof n) throw new it(i); var h = u ? u.length : 0; if (h || (t &= ~(b | w), u = o = r), c = c === r ? c : Zr(Nf(c), 0), l = l === r ? l : Nf(l), h -= o ? o.length : 0, t & w) { var p = u,
                            j = o;
                        u = o = r } var A = s ? r : Li(n),
                        k = [n, t, e, u, o, p, j, f, c, l]; if (A && function(n, t) { var r = n[1],
                                e = t[1],
                                u = r | e,
                                i = u < (v | _ | m),
                                o = e == m && r == y || e == m && r == x && n[7].length <= t[8] || e == (m | x) && t[7].length <= t[8] && r == y; if (!i && !o) return n;
                            e & v && (n[2] = t[2], u |= r & v ? 0 : g); var f = t[3]; if (f) { var c = n[3];
                                n[3] = c ? ni(c, f, t[4]) : f, n[4] = c ? kr(n[3], a) : t[4] }(f = t[5]) && (c = n[5], n[5] = c ? ti(c, f, t[6]) : f, n[6] = c ? kr(n[5], a) : t[6]), (f = t[7]) && (n[7] = f), e & m && (n[8] = null == n[8] ? t[8] : Kr(n[8], t[8])), null == n[9] && (n[9] = t[9]), n[0] = t[0], n[1] = u }(k, A), n = k[0], t = k[1], e = k[2], u = k[3], o = k[4], !(l = k[9] = k[9] === r ? s ? 0 : n.length : Zr(k[9] - h, 0)) && t & (y | d) && (t &= ~(y | d)), t && t != v) O = t == y || t == d ? function(n, t, e) { var u = li(n); return function i() { for (var o = arguments.length, f = Yn(o), a = o, c = Ci(i); a--;) f[a] = arguments[a]; var l = o < 3 && f[0] !== c && f[o - 1] !== c ? [] : kr(f, c); return (o -= l.length) < e ? wi(n, t, pi, i.placeholder, r, f, l, r, r, e - o) : Pt(this && this !== St && this instanceof i ? u : n, this, f) } }(n, t, l) : t != b && t != (v | b) || o.length ? pi.apply(r, k) : function(n, t, r, e) { var u = t & v,
                            i = li(n); return function t() { for (var o = -1, f = arguments.length, a = -1, c = e.length, l = Yn(c + f), s = this && this !== St && this instanceof t ? i : n; ++a < c;) l[a] = e[a]; for (; f--;) l[a++] = arguments[++o]; return Pt(s, u ? r : this, l) } }(n, t, e, u);
                    else var O = function(n, t, r) { var e = t & v,
                            u = li(n); return function t() { return (this && this !== St && this instanceof t ? u : n).apply(e ? r : this, arguments) } }(n, t, e); return io((A ? Iu : ro)(O, k), n, t) }

                function ki(n, t, e, u) { return n === r || vf(n, at[e]) && !st.call(u, e) ? t : n }

                function Oi(n, t, e, u, i, o) { return Rf(n) && Rf(t) && (o.set(t, n), _u(n, t, r, Oi, o), o.delete(t)), n }

                function Ii(n) { return Lf(n) ? r : n }

                function Ri(n, t, e, u, i, o) { var f = e & h,
                        a = n.length,
                        c = t.length; if (a != c && !(f && c > a)) return !1; var l = o.get(n),
                        s = o.get(t); if (l && s) return l == t && s == n; var v = -1,
                        _ = !0,
                        g = e & p ? new me : r; for (o.set(n, t), o.set(t, n); ++v < a;) { var y = n[v],
                            d = t[v]; if (u) var b = f ? u(d, y, v, t, n, o) : u(y, d, v, n, t, o); if (b !== r) { if (b) continue;
                            _ = !1; break } if (g) { if (!tr(t, function(n, t) { if (!gr(g, t) && (y === n || i(y, n, e, u, o))) return g.push(t) })) { _ = !1; break } } else if (y !== d && !i(y, d, e, u, o)) { _ = !1; break } } return o.delete(n), o.delete(t), _ }

                function Ei(n) { return uo(Xi(n, r, yo), n + "") }

                function zi(n) { return Ye(n, ia, Di) }

                function Si(n) { return Ye(n, oa, Mi) } var Li = ee ? function(n) { return ee.get(n) } : Ua;

                function Wi(n) { for (var t = n.name + "", r = ue[t], e = st.call(ue, t) ? r.length : 0; e--;) { var u = r[e],
                            i = u.func; if (null == i || i == n) return u.name } return t }

                function Ci(n) { return (st.call(pe, "placeholder") ? pe : n).placeholder }

                function Bi() { var n = pe.iteratee || La; return n = n === La ? au : n, arguments.length ? n(arguments[0], arguments[1]) : n }

                function Ui(n, t) { var r, e, u = n.__data__; return ("string" == (e = typeof(r = t)) || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== r : null === r) ? u["string" == typeof t ? "string" : "hash"] : u.map }

                function Ti(n) { for (var t = ia(n), r = t.length; r--;) { var e = t[r],
                            u = n[e];
                        t[r] = [e, u, Yi(u)] } return t }

                function $i(n, t) { var e = function(n, t) { return null == n ? r : n[t] }(n, t); return fu(e) ? e : r } var Di = Mr ? function(n) { return null == n ? [] : (n = rt(n), Gt(Mr(n), function(t) { return Ut.call(n, t) })) } : Pa,
                    Mi = Mr ? function(n) { for (var t = []; n;) Qt(t, Di(n)), n = Wt(n); return t } : Pa,
                    Fi = Qe;

                function Ni(n, t, r) { for (var e = -1, u = (t = Ku(t, n)).length, i = !1; ++e < u;) { var o = co(t[e]); if (!(i = null != n && r(n, o))) break;
                        n = n[o] } return i || ++e != u ? i : !!(u = null == n ? 0 : n.length) && If(u) && Zi(o, u) && (df(n) || yf(n)) }

                function Pi(n) { return "function" != typeof n.constructor || Ji(n) ? {} : ve(Wt(n)) }

                function qi(n) { return df(n) || yf(n) || !!(lr && n && n[lr]) }

                function Zi(n, t) { var r = typeof n; return !!(t = null == t ? S : t) && ("number" == r || "symbol" != r && Kn.test(n)) && n > -1 && n % 1 == 0 && n < t }

                function Ki(n, t, r) { if (!Rf(r)) return !1; var e = typeof t; return !!("number" == e ? wf(r) && Zi(t, r.length) : "string" == e && t in r) && vf(r[t], n) }

                function Vi(n, t) { if (df(n)) return !1; var r = typeof n; return !("number" != r && "symbol" != r && "boolean" != r && null != n && !Uf(n)) || Rn.test(n) || !In.test(n) || null != t && n in rt(t) }

                function Gi(n) { var t = Wi(n),
                        r = pe[t]; if ("function" != typeof r || !(t in ye.prototype)) return !1; if (n === r) return !0; var e = Li(r); return !!e && n === e[0] }(Yr && Fi(new Yr(new ArrayBuffer(1))) != fn || Qr && Fi(new Qr) != V || Xr && "[object Promise]" != Fi(Xr.resolve()) || ne && Fi(new ne) != X || te && Fi(new te) != en) && (Fi = function(n) { var t = Qe(n),
                        e = t == J ? n.constructor : r,
                        u = e ? lo(e) : ""; if (u) switch (u) {
                        case ie:
                            return fn;
                        case oe:
                            return V;
                        case fe:
                            return "[object Promise]";
                        case ae:
                            return X;
                        case ce:
                            return en }
                    return t }); var Hi = ct ? kf : qa;

                function Ji(n) { var t = n && n.constructor; return n === ("function" == typeof t && t.prototype || at) }

                function Yi(n) { return n == n && !Rf(n) }

                function Qi(n, t) { return function(e) { return null != e && e[n] === t && (t !== r || n in rt(e)) } }

                function Xi(n, t, e) { return t = Zr(t === r ? n.length - 1 : t, 0),
                        function() { for (var r = arguments, u = -1, i = Zr(r.length - t, 0), o = Yn(i); ++u < i;) o[u] = r[t + u];
                            u = -1; for (var f = Yn(t + 1); ++u < t;) f[u] = r[u]; return f[t] = e(o), Pt(n, this, f) } }

                function no(n, t) { return t.length < 2 ? n : Je(n, zu(t, 0, -1)) }

                function to(n, t) { if (("constructor" !== t || "function" != typeof n[t]) && "__proto__" != t) return n[t] } var ro = oo(Iu),
                    eo = Tr || function(n, t) { return St.setTimeout(n, t) },
                    uo = oo(Ru);

                function io(n, t, r) { var e = t + ""; return uo(n, function(n, t) { var r = t.length; if (!r) return n; var e = r - 1; return t[e] = (r > 1 ? "& " : "") + t[e], t = t.join(r > 2 ? ", " : " "), n.replace(Bn, "{\n/* [wrapped with " + t + "] */\n") }(e, function(n, t) { return Zt(T, function(r) { var e = "_." + r[0];
                            t & r[1] && !Ht(n, e) && n.push(e) }), n.sort() }(function(n) { var t = n.match(Un); return t ? t[1].split(Tn) : [] }(e), r))) }

                function oo(n) { var t = 0,
                        e = 0; return function() { var u = Vr(),
                            i = I - (u - e); if (e = u, i > 0) { if (++t >= O) return arguments[0] } else t = 0; return n.apply(r, arguments) } }

                function fo(n, t) { var e = -1,
                        u = n.length,
                        i = u - 1; for (t = t === r ? u : t; ++e < t;) { var o = mu(e, i),
                            f = n[o];
                        n[o] = n[e], n[e] = f } return n.length = t, n } var ao = function(n) { var t = af(n, function(n) { return r.size === f && r.clear(), n }),
                        r = t.cache; return t }(function(n) { var t = []; return 46 === n.charCodeAt(0) && t.push(""), n.replace(En, function(n, r, e, u) { t.push(e ? u.replace(Dn, "$1") : r || n) }), t });

                function co(n) { if ("string" == typeof n || Uf(n)) return n; var t = n + ""; return "0" == t && 1 / n == -z ? "-0" : t }

                function lo(n) { if (null != n) { try { return lt.call(n) } catch (t) {} try { return n + "" } catch (t) {} } return "" }

                function so(n) { if (n instanceof ye) return n.clone(); var t = new ge(n.__wrapped__, n.__chain__); return t.__actions__ = ri(n.__actions__), t.__index__ = n.__index__, t.__values__ = n.__values__, t } var ho = ju(function(n, t) { return mf(n) ? $e(n, qe(t, 1, mf, !0)) : [] }),
                    po = ju(function(n, t) { var e = jo(t); return mf(e) && (e = r), mf(n) ? $e(n, qe(t, 1, mf, !0), Bi(e, 2)) : [] }),
                    vo = ju(function(n, t) { var e = jo(t); return mf(e) && (e = r), mf(n) ? $e(n, qe(t, 1, mf, !0), r, e) : [] });

                function _o(n, t, r) { var e = null == n ? 0 : n.length; if (!e) return -1; var u = null == r ? 0 : Nf(r); return u < 0 && (u = Zr(e + u, 0)), ur(n, Bi(t, 3), u) }

                function go(n, t, e) { var u = null == n ? 0 : n.length; if (!u) return -1; var i = u - 1; return e !== r && (i = Nf(e), i = e < 0 ? Zr(u + i, 0) : Kr(i, u - 1)), ur(n, Bi(t, 3), i, !0) }

                function yo(n) { return null != n && n.length ? qe(n, 1) : [] }

                function bo(n) { return n && n.length ? n[0] : r } var wo = ju(function(n) { var t = Yt(n, qu); return t.length && t[0] === n[0] ? ru(t) : [] }),
                    mo = ju(function(n) { var t = jo(n),
                            e = Yt(n, qu); return t === jo(e) ? t = r : e.pop(), e.length && e[0] === n[0] ? ru(e, Bi(t, 2)) : [] }),
                    xo = ju(function(n) { var t = jo(n),
                            e = Yt(n, qu); return (t = "function" == typeof t ? t : r) && e.pop(), e.length && e[0] === n[0] ? ru(e, r, t) : [] });

                function jo(n) { var t = null == n ? 0 : n.length; return t ? n[t - 1] : r } var Ao = ju(ko);

                function ko(n, t) { return n && n.length && t && t.length ? bu(n, t) : n } var Oo = Ei(function(n, t) { var r = null == n ? 0 : n.length,
                        e = We(n, t); return wu(n, Yt(t, function(n) { return Zi(n, r) ? +n : n }).sort(Xu)), e });

                function Io(n) { return null == n ? n : Jr.call(n) } var Ro = ju(function(n) { return Tu(qe(n, 1, mf, !0)) }),
                    Eo = ju(function(n) { var t = jo(n); return mf(t) && (t = r), Tu(qe(n, 1, mf, !0), Bi(t, 2)) }),
                    zo = ju(function(n) { var t = jo(n); return t = "function" == typeof t ? t : r, Tu(qe(n, 1, mf, !0), r, t) });

                function So(n) { if (!n || !n.length) return []; var t = 0; return n = Gt(n, function(n) { if (mf(n)) return t = Zr(n.length, t), !0 }), pr(t, function(t) { return Yt(n, cr(t)) }) }

                function Lo(n, t) { if (!n || !n.length) return []; var e = So(n); return null == t ? e : Yt(e, function(n) { return Pt(t, r, n) }) } var Wo = ju(function(n, t) { return mf(n) ? $e(n, t) : [] }),
                    Co = ju(function(n) { return Nu(Gt(n, mf)) }),
                    Bo = ju(function(n) { var t = jo(n); return mf(t) && (t = r), Nu(Gt(n, mf), Bi(t, 2)) }),
                    Uo = ju(function(n) { var t = jo(n); return t = "function" == typeof t ? t : r, Nu(Gt(n, mf), r, t) }),
                    To = ju(So); var $o = ju(function(n) { var t = n.length,
                        e = t > 1 ? n[t - 1] : r; return e = "function" == typeof e ? (n.pop(), e) : r, Lo(n, e) });

                function Do(n) { var t = pe(n); return t.__chain__ = !0, t }

                function Mo(n, t) { return t(n) } var Fo = Ei(function(n) { var t = n.length,
                        e = t ? n[0] : 0,
                        u = this.__wrapped__,
                        i = function(t) { return We(t, n) }; return !(t > 1 || this.__actions__.length) && u instanceof ye && Zi(e) ? ((u = u.slice(e, +e + (t ? 1 : 0))).__actions__.push({ func: Mo, args: [i], thisArg: r }), new ge(u, this.__chain__).thru(function(n) { return t && !n.length && n.push(r), n })) : this.thru(i) }); var No = ui(function(n, t, r) { st.call(n, r) ? ++n[r] : Le(n, r, 1) }); var Po = si(_o),
                    qo = si(go);

                function Zo(n, t) { return (df(n) ? Zt : De)(n, Bi(t, 3)) }

                function Ko(n, t) { return (df(n) ? Kt : Me)(n, Bi(t, 3)) } var Vo = ui(function(n, t, r) { st.call(n, r) ? n[r].push(t) : Le(n, r, [t]) }); var Go = ju(function(n, t, r) { var e = -1,
                            u = "function" == typeof t,
                            i = wf(n) ? Yn(n.length) : []; return De(n, function(n) { i[++e] = u ? Pt(t, n, r) : eu(n, t, r) }), i }),
                    Ho = ui(function(n, t, r) { Le(n, r, t) });

                function Jo(n, t) { return (df(n) ? Yt : hu)(n, Bi(t, 3)) } var Yo = ui(function(n, t, r) { n[r ? 0 : 1].push(t) }, function() { return [
                        [],
                        []
                    ] }); var Qo = ju(function(n, t) { if (null == n) return []; var r = t.length; return r > 1 && Ki(n, t[0], t[1]) ? t = [] : r > 2 && Ki(t[0], t[1], t[2]) && (t = [t[0]]), yu(n, qe(t, 1), []) }),
                    Xo = Ur || function() { return St.Date.now() };

                function nf(n, t, e) { return t = e ? r : t, t = n && null == t ? n.length : t, Ai(n, m, r, r, r, r, t) }

                function tf(n, t) { var e; if ("function" != typeof t) throw new it(i); return n = Nf(n),
                        function() { return --n > 0 && (e = t.apply(this, arguments)), n <= 1 && (t = r), e } } var rf = ju(function(n, t, r) { var e = v; if (r.length) { var u = kr(r, Ci(rf));
                            e |= b } return Ai(n, e, t, r, u) }),
                    ef = ju(function(n, t, r) { var e = v | _; if (r.length) { var u = kr(r, Ci(ef));
                            e |= b } return Ai(t, e, n, r, u) });

                function uf(n, t, e) { var u, o, f, a, c, l, s = 0,
                        h = !1,
                        p = !1,
                        v = !0; if ("function" != typeof n) throw new it(i);

                    function _(t) { var e = u,
                            i = o; return u = o = r, s = t, a = n.apply(i, e) }

                    function g(n) { var e = n - l; return l === r || e >= t || e < 0 || p && n - s >= f }

                    function y() { var n = Xo(); if (g(n)) return d(n);
                        c = eo(y, function(n) { var r = t - (n - l); return p ? Kr(r, f - (n - s)) : r }(n)) }

                    function d(n) { return c = r, v && u ? _(n) : (u = o = r, a) }

                    function b() { var n = Xo(),
                            e = g(n); if (u = arguments, o = this, l = n, e) { if (c === r) return function(n) { return s = n, c = eo(y, t), h ? _(n) : a }(l); if (p) return Hu(c), c = eo(y, t), _(l) } return c === r && (c = eo(y, t)), a } return t = qf(t) || 0, Rf(e) && (h = !!e.leading, f = (p = "maxWait" in e) ? Zr(qf(e.maxWait) || 0, t) : f, v = "trailing" in e ? !!e.trailing : v), b.cancel = function() { c !== r && Hu(c), s = 0, u = l = o = c = r }, b.flush = function() { return c === r ? a : d(Xo()) }, b } var of = ju(function(n, t) { return Te(n, 1, t) }), ff = ju(function(n, t, r) { return Te(n, qf(t) || 0, r) });

                function af(n, t) { if ("function" != typeof n || null != t && "function" != typeof t) throw new it(i); var r = function() { var e = arguments,
                            u = t ? t.apply(this, e) : e[0],
                            i = r.cache; if (i.has(u)) return i.get(u); var o = n.apply(this, e); return r.cache = i.set(u, o) || i, o }; return r.cache = new(af.Cache || we), r }

                function cf(n) { if ("function" != typeof n) throw new it(i); return function() { var t = arguments; switch (t.length) {
                            case 0:
                                return !n.call(this);
                            case 1:
                                return !n.call(this, t[0]);
                            case 2:
                                return !n.call(this, t[0], t[1]);
                            case 3:
                                return !n.call(this, t[0], t[1], t[2]) } return !n.apply(this, t) } } af.Cache = we; var lf = Vu(function(n, t) { var r = (t = 1 == t.length && df(t[0]) ? Yt(t[0], vr(Bi())) : Yt(qe(t, 1), vr(Bi()))).length; return ju(function(e) { for (var u = -1, i = Kr(e.length, r); ++u < i;) e[u] = t[u].call(this, e[u]); return Pt(n, this, e) }) }),
                    sf = ju(function(n, t) { var e = kr(t, Ci(sf)); return Ai(n, b, r, t, e) }),
                    hf = ju(function(n, t) { var e = kr(t, Ci(hf)); return Ai(n, w, r, t, e) }),
                    pf = Ei(function(n, t) { return Ai(n, x, r, r, r, t) });

                function vf(n, t) { return n === t || n != n && t != t } var _f = bi(Xe),
                    gf = bi(function(n, t) { return n >= t }),
                    yf = uu(function() { return arguments }()) ? uu : function(n) { return Ef(n) && st.call(n, "callee") && !Ut.call(n, "callee") },
                    df = Yn.isArray,
                    bf = Tt ? vr(Tt) : function(n) { return Ef(n) && Qe(n) == on };

                function wf(n) { return null != n && If(n.length) && !kf(n) }

                function mf(n) { return Ef(n) && wf(n) } var xf = Fr || qa,
                    jf = $t ? vr($t) : function(n) { return Ef(n) && Qe(n) == N };

                function Af(n) { if (!Ef(n)) return !1; var t = Qe(n); return t == q || t == P || "string" == typeof n.message && "string" == typeof n.name && !Lf(n) }

                function kf(n) { if (!Rf(n)) return !1; var t = Qe(n); return t == Z || t == K || t == M || t == Y }

                function Of(n) { return "number" == typeof n && n == Nf(n) }

                function If(n) { return "number" == typeof n && n > -1 && n % 1 == 0 && n <= S }

                function Rf(n) { var t = typeof n; return null != n && ("object" == t || "function" == t) }

                function Ef(n) { return null != n && "object" == typeof n } var zf = Dt ? vr(Dt) : function(n) { return Ef(n) && Fi(n) == V };

                function Sf(n) { return "number" == typeof n || Ef(n) && Qe(n) == G }

                function Lf(n) { if (!Ef(n) || Qe(n) != J) return !1; var t = Wt(n); if (null === t) return !0; var r = st.call(t, "constructor") && t.constructor; return "function" == typeof r && r instanceof r && lt.call(r) == _t } var Wf = Mt ? vr(Mt) : function(n) { return Ef(n) && Qe(n) == Q }; var Cf = Ft ? vr(Ft) : function(n) { return Ef(n) && Fi(n) == X };

                function Bf(n) { return "string" == typeof n || !df(n) && Ef(n) && Qe(n) == nn }

                function Uf(n) { return "symbol" == typeof n || Ef(n) && Qe(n) == tn } var Tf = Nt ? vr(Nt) : function(n) { return Ef(n) && If(n.length) && !!At[Qe(n)] }; var $f = bi(su),
                    Df = bi(function(n, t) { return n <= t });

                function Mf(n) { if (!n) return []; if (wf(n)) return Bf(n) ? Er(n) : ri(n); if (Lr && n[Lr]) return function(n) { for (var t, r = []; !(t = n.next()).done;) r.push(t.value); return r }(n[Lr]()); var t = Fi(n); return (t == V ? jr : t == X ? Or : va)(n) }

                function Ff(n) { return n ? (n = qf(n)) === z || n === -z ? (n < 0 ? -1 : 1) * L : n == n ? n : 0 : 0 === n ? n : 0 }

                function Nf(n) { var t = Ff(n),
                        r = t % 1; return t == t ? r ? t - r : t : 0 }

                function Pf(n) { return n ? Ce(Nf(n), 0, C) : 0 }

                function qf(n) { if ("number" == typeof n) return n; if (Uf(n)) return W; if (Rf(n)) { var t = "function" == typeof n.valueOf ? n.valueOf() : n;
                        n = Rf(t) ? t + "" : t } if ("string" != typeof n) return 0 === n ? n : +n;
                    n = n.replace(Ln, ""); var r = Pn.test(n); return r || Zn.test(n) ? Rt(n.slice(2), r ? 2 : 8) : Nn.test(n) ? W : +n }

                function Zf(n) { return ei(n, oa(n)) }

                function Kf(n) { return null == n ? "" : Uu(n) } var Vf = ii(function(n, t) { if (Ji(t) || wf(t)) ei(t, ia(t), n);
                        else
                            for (var r in t) st.call(t, r) && Re(n, r, t[r]) }),
                    Gf = ii(function(n, t) { ei(t, oa(t), n) }),
                    Hf = ii(function(n, t, r, e) { ei(t, oa(t), n, e) }),
                    Jf = ii(function(n, t, r, e) { ei(t, ia(t), n, e) }),
                    Yf = Ei(We); var Qf = ju(function(n, t) { n = rt(n); var e = -1,
                            u = t.length,
                            i = u > 2 ? t[2] : r; for (i && Ki(t[0], t[1], i) && (u = 1); ++e < u;)
                            for (var o = t[e], f = oa(o), a = -1, c = f.length; ++a < c;) { var l = f[a],
                                    s = n[l];
                                (s === r || vf(s, at[l]) && !st.call(n, l)) && (n[l] = o[l]) }
                        return n }),
                    Xf = ju(function(n) { return n.push(r, Oi), Pt(aa, r, n) });

                function na(n, t, e) { var u = null == n ? r : Je(n, t); return u === r ? e : u }

                function ta(n, t) { return null != n && Ni(n, t, tu) } var ra = vi(function(n, t, r) { null != t && "function" != typeof t.toString && (t = vt.call(t)), n[t] = r }, Ra(Sa)),
                    ea = vi(function(n, t, r) { null != t && "function" != typeof t.toString && (t = vt.call(t)), st.call(n, t) ? n[t].push(r) : n[t] = [r] }, Bi),
                    ua = ju(eu);

                function ia(n) { return wf(n) ? je(n) : cu(n) }

                function oa(n) { return wf(n) ? je(n, !0) : lu(n) } var fa = ii(function(n, t, r) { _u(n, t, r) }),
                    aa = ii(function(n, t, r, e) { _u(n, t, r, e) }),
                    ca = Ei(function(n, t) { var r = {}; if (null == n) return r; var e = !1;
                        t = Yt(t, function(t) { return t = Ku(t, n), e || (e = t.length > 1), t }), ei(n, Si(n), r), e && (r = Be(r, c | l | s, Ii)); for (var u = t.length; u--;) $u(r, t[u]); return r }); var la = Ei(function(n, t) { return null == n ? {} : function(n, t) { return du(n, t, function(t, r) { return ta(n, r) }) }(n, t) });

                function sa(n, t) { if (null == n) return {}; var r = Yt(Si(n), function(n) { return [n] }); return t = Bi(t), du(n, r, function(n, r) { return t(n, r[0]) }) } var ha = ji(ia),
                    pa = ji(oa);

                function va(n) { return null == n ? [] : _r(n, ia(n)) } var _a = ci(function(n, t, r) { return t = t.toLowerCase(), n + (r ? ga(t) : t) });

                function ga(n) { return Aa(Kf(n).toLowerCase()) }

                function ya(n) { return (n = Kf(n)) && n.replace(Vn, br).replace(yt, "") } var da = ci(function(n, t, r) { return n + (r ? "-" : "") + t.toLowerCase() }),
                    ba = ci(function(n, t, r) { return n + (r ? " " : "") + t.toLowerCase() }),
                    wa = ai("toLowerCase"); var ma = ci(function(n, t, r) { return n + (r ? "_" : "") + t.toLowerCase() }); var xa = ci(function(n, t, r) { return n + (r ? " " : "") + Aa(t) }); var ja = ci(function(n, t, r) { return n + (r ? " " : "") + t.toUpperCase() }),
                    Aa = ai("toUpperCase");

                function ka(n, t, e) { return n = Kf(n), (t = e ? r : t) === r ? function(n) { return mt.test(n) }(n) ? function(n) { return n.match(bt) || [] }(n) : function(n) { return n.match($n) || [] }(n) : n.match(t) || [] } var Oa = ju(function(n, t) { try { return Pt(n, r, t) } catch (e) { return Af(e) ? e : new Xn(e) } }),
                    Ia = Ei(function(n, t) { return Zt(t, function(t) { t = co(t), Le(n, t, rf(n[t], n)) }), n });

                function Ra(n) { return function() { return n } } var Ea = hi(),
                    za = hi(!0);

                function Sa(n) { return n }

                function La(n) { return au("function" == typeof n ? n : Be(n, c)) } var Wa = ju(function(n, t) { return function(r) { return eu(r, n, t) } }),
                    Ca = ju(function(n, t) { return function(r) { return eu(n, r, t) } });

                function Ba(n, t, r) { var e = ia(t),
                        u = He(t, e);
                    null != r || Rf(t) && (u.length || !e.length) || (r = t, t = n, n = this, u = He(t, ia(t))); var i = !(Rf(r) && "chain" in r && !r.chain),
                        o = kf(n); return Zt(u, function(r) { var e = t[r];
                        n[r] = e, o && (n.prototype[r] = function() { var t = this.__chain__; if (i || t) { var r = n(this.__wrapped__); return (r.__actions__ = ri(this.__actions__)).push({ func: e, args: arguments, thisArg: n }), r.__chain__ = t, r } return e.apply(n, Qt([this.value()], arguments)) }) }), n }

                function Ua() {} var Ta = gi(Yt),
                    $a = gi(Vt),
                    Da = gi(tr);

                function Ma(n) { return Vi(n) ? cr(co(n)) : function(n) { return function(t) { return Je(t, n) } }(n) } var Fa = di(),
                    Na = di(!0);

                function Pa() { return [] }

                function qa() { return !1 } var Za = _i(function(n, t) { return n + t }, 0),
                    Ka = mi("ceil"),
                    Va = _i(function(n, t) { return n / t }, 1),
                    Ga = mi("floor"); var Ha, Ja = _i(function(n, t) { return n * t }, 1),
                    Ya = mi("round"),
                    Qa = _i(function(n, t) { return n - t }, 0); return pe.after = function(n, t) { if ("function" != typeof t) throw new it(i); return n = Nf(n),
                        function() { if (--n < 1) return t.apply(this, arguments) } }, pe.ary = nf, pe.assign = Vf, pe.assignIn = Gf, pe.assignInWith = Hf, pe.assignWith = Jf, pe.at = Yf, pe.before = tf, pe.bind = rf, pe.bindAll = Ia, pe.bindKey = ef, pe.castArray = function() { if (!arguments.length) return []; var n = arguments[0]; return df(n) ? n : [n] }, pe.chain = Do, pe.chunk = function(n, t, e) { t = (e ? Ki(n, t, e) : t === r) ? 1 : Zr(Nf(t), 0); var u = null == n ? 0 : n.length; if (!u || t < 1) return []; for (var i = 0, o = 0, f = Yn($r(u / t)); i < u;) f[o++] = zu(n, i, i += t); return f }, pe.compact = function(n) { for (var t = -1, r = null == n ? 0 : n.length, e = 0, u = []; ++t < r;) { var i = n[t];
                        i && (u[e++] = i) } return u }, pe.concat = function() { var n = arguments.length; if (!n) return []; for (var t = Yn(n - 1), r = arguments[0], e = n; e--;) t[e - 1] = arguments[e]; return Qt(df(r) ? ri(r) : [r], qe(t, 1)) }, pe.cond = function(n) { var t = null == n ? 0 : n.length,
                        r = Bi(); return n = t ? Yt(n, function(n) { if ("function" != typeof n[1]) throw new it(i); return [r(n[0]), n[1]] }) : [], ju(function(r) { for (var e = -1; ++e < t;) { var u = n[e]; if (Pt(u[0], this, r)) return Pt(u[1], this, r) } }) }, pe.conforms = function(n) { return function(n) { var t = ia(n); return function(r) { return Ue(r, n, t) } }(Be(n, c)) }, pe.constant = Ra, pe.countBy = No, pe.create = function(n, t) { var r = ve(n); return null == t ? r : Se(r, t) }, pe.curry = function n(t, e, u) { var i = Ai(t, y, r, r, r, r, r, e = u ? r : e); return i.placeholder = n.placeholder, i }, pe.curryRight = function n(t, e, u) { var i = Ai(t, d, r, r, r, r, r, e = u ? r : e); return i.placeholder = n.placeholder, i }, pe.debounce = uf, pe.defaults = Qf, pe.defaultsDeep = Xf, pe.defer = of , pe.delay = ff, pe.difference = ho, pe.differenceBy = po, pe.differenceWith = vo, pe.drop = function(n, t, e) { var u = null == n ? 0 : n.length; return u ? zu(n, (t = e || t === r ? 1 : Nf(t)) < 0 ? 0 : t, u) : [] }, pe.dropRight = function(n, t, e) { var u = null == n ? 0 : n.length; return u ? zu(n, 0, (t = u - (t = e || t === r ? 1 : Nf(t))) < 0 ? 0 : t) : [] }, pe.dropRightWhile = function(n, t) { return n && n.length ? Mu(n, Bi(t, 3), !0, !0) : [] }, pe.dropWhile = function(n, t) { return n && n.length ? Mu(n, Bi(t, 3), !0) : [] }, pe.fill = function(n, t, e, u) { var i = null == n ? 0 : n.length; return i ? (e && "number" != typeof e && Ki(n, t, e) && (e = 0, u = i), function(n, t, e, u) { var i = n.length; for ((e = Nf(e)) < 0 && (e = -e > i ? 0 : i + e), (u = u === r || u > i ? i : Nf(u)) < 0 && (u += i), u = e > u ? 0 : Pf(u); e < u;) n[e++] = t; return n }(n, t, e, u)) : [] }, pe.filter = function(n, t) { return (df(n) ? Gt : Pe)(n, Bi(t, 3)) }, pe.flatMap = function(n, t) { return qe(Jo(n, t), 1) }, pe.flatMapDeep = function(n, t) { return qe(Jo(n, t), z) }, pe.flatMapDepth = function(n, t, e) { return e = e === r ? 1 : Nf(e), qe(Jo(n, t), e) }, pe.flatten = yo, pe.flattenDeep = function(n) { return null != n && n.length ? qe(n, z) : [] }, pe.flattenDepth = function(n, t) { return null != n && n.length ? qe(n, t = t === r ? 1 : Nf(t)) : [] }, pe.flip = function(n) { return Ai(n, j) }, pe.flow = Ea, pe.flowRight = za, pe.fromPairs = function(n) { for (var t = -1, r = null == n ? 0 : n.length, e = {}; ++t < r;) { var u = n[t];
                        e[u[0]] = u[1] } return e }, pe.functions = function(n) { return null == n ? [] : He(n, ia(n)) }, pe.functionsIn = function(n) { return null == n ? [] : He(n, oa(n)) }, pe.groupBy = Vo, pe.initial = function(n) { return null != n && n.length ? zu(n, 0, -1) : [] }, pe.intersection = wo, pe.intersectionBy = mo, pe.intersectionWith = xo, pe.invert = ra, pe.invertBy = ea, pe.invokeMap = Go, pe.iteratee = La, pe.keyBy = Ho, pe.keys = ia, pe.keysIn = oa, pe.map = Jo, pe.mapKeys = function(n, t) { var r = {}; return t = Bi(t, 3), Ve(n, function(n, e, u) { Le(r, t(n, e, u), n) }), r }, pe.mapValues = function(n, t) { var r = {}; return t = Bi(t, 3), Ve(n, function(n, e, u) { Le(r, e, t(n, e, u)) }), r }, pe.matches = function(n) { return pu(Be(n, c)) }, pe.matchesProperty = function(n, t) { return vu(n, Be(t, c)) }, pe.memoize = af, pe.merge = fa, pe.mergeWith = aa, pe.method = Wa, pe.methodOf = Ca, pe.mixin = Ba, pe.negate = cf, pe.nthArg = function(n) { return n = Nf(n), ju(function(t) { return gu(t, n) }) }, pe.omit = ca, pe.omitBy = function(n, t) { return sa(n, cf(Bi(t))) }, pe.once = function(n) { return tf(2, n) }, pe.orderBy = function(n, t, e, u) { return null == n ? [] : (df(t) || (t = null == t ? [] : [t]), df(e = u ? r : e) || (e = null == e ? [] : [e]), yu(n, t, e)) }, pe.over = Ta, pe.overArgs = lf, pe.overEvery = $a, pe.overSome = Da, pe.partial = sf, pe.partialRight = hf, pe.partition = Yo, pe.pick = la, pe.pickBy = sa, pe.property = Ma, pe.propertyOf = function(n) { return function(t) { return null == n ? r : Je(n, t) } }, pe.pull = Ao, pe.pullAll = ko, pe.pullAllBy = function(n, t, r) { return n && n.length && t && t.length ? bu(n, t, Bi(r, 2)) : n }, pe.pullAllWith = function(n, t, e) { return n && n.length && t && t.length ? bu(n, t, r, e) : n }, pe.pullAt = Oo, pe.range = Fa, pe.rangeRight = Na, pe.rearg = pf, pe.reject = function(n, t) { return (df(n) ? Gt : Pe)(n, cf(Bi(t, 3))) }, pe.remove = function(n, t) { var r = []; if (!n || !n.length) return r; var e = -1,
                        u = [],
                        i = n.length; for (t = Bi(t, 3); ++e < i;) { var o = n[e];
                        t(o, e, n) && (r.push(o), u.push(e)) } return wu(n, u), r }, pe.rest = function(n, t) { if ("function" != typeof n) throw new it(i); return ju(n, t = t === r ? t : Nf(t)) }, pe.reverse = Io, pe.sampleSize = function(n, t, e) { return t = (e ? Ki(n, t, e) : t === r) ? 1 : Nf(t), (df(n) ? ke : ku)(n, t) }, pe.set = function(n, t, r) { return null == n ? n : Ou(n, t, r) }, pe.setWith = function(n, t, e, u) { return u = "function" == typeof u ? u : r, null == n ? n : Ou(n, t, e, u) }, pe.shuffle = function(n) { return (df(n) ? Oe : Eu)(n) }, pe.slice = function(n, t, e) { var u = null == n ? 0 : n.length; return u ? (e && "number" != typeof e && Ki(n, t, e) ? (t = 0, e = u) : (t = null == t ? 0 : Nf(t), e = e === r ? u : Nf(e)), zu(n, t, e)) : [] }, pe.sortBy = Qo, pe.sortedUniq = function(n) { return n && n.length ? Cu(n) : [] }, pe.sortedUniqBy = function(n, t) { return n && n.length ? Cu(n, Bi(t, 2)) : [] }, pe.split = function(n, t, e) { return e && "number" != typeof e && Ki(n, t, e) && (t = e = r), (e = e === r ? C : e >>> 0) ? (n = Kf(n)) && ("string" == typeof t || null != t && !Wf(t)) && !(t = Uu(t)) && xr(n) ? Gu(Er(n), 0, e) : n.split(t, e) : [] }, pe.spread = function(n, t) { if ("function" != typeof n) throw new it(i); return t = null == t ? 0 : Zr(Nf(t), 0), ju(function(r) { var e = r[t],
                            u = Gu(r, 0, t); return e && Qt(u, e), Pt(n, this, u) }) }, pe.tail = function(n) { var t = null == n ? 0 : n.length; return t ? zu(n, 1, t) : [] }, pe.take = function(n, t, e) { return n && n.length ? zu(n, 0, (t = e || t === r ? 1 : Nf(t)) < 0 ? 0 : t) : [] }, pe.takeRight = function(n, t, e) { var u = null == n ? 0 : n.length; return u ? zu(n, (t = u - (t = e || t === r ? 1 : Nf(t))) < 0 ? 0 : t, u) : [] }, pe.takeRightWhile = function(n, t) { return n && n.length ? Mu(n, Bi(t, 3), !1, !0) : [] }, pe.takeWhile = function(n, t) { return n && n.length ? Mu(n, Bi(t, 3)) : [] }, pe.tap = function(n, t) { return t(n), n }, pe.throttle = function(n, t, r) { var e = !0,
                        u = !0; if ("function" != typeof n) throw new it(i); return Rf(r) && (e = "leading" in r ? !!r.leading : e, u = "trailing" in r ? !!r.trailing : u), uf(n, t, { leading: e, maxWait: t, trailing: u }) }, pe.thru = Mo, pe.toArray = Mf, pe.toPairs = ha, pe.toPairsIn = pa, pe.toPath = function(n) { return df(n) ? Yt(n, co) : Uf(n) ? [n] : ri(ao(Kf(n))) }, pe.toPlainObject = Zf, pe.transform = function(n, t, r) { var e = df(n),
                        u = e || xf(n) || Tf(n); if (t = Bi(t, 4), null == r) { var i = n && n.constructor;
                        r = u ? e ? new i : [] : Rf(n) && kf(i) ? ve(Wt(n)) : {} } return (u ? Zt : Ve)(n, function(n, e, u) { return t(r, n, e, u) }), r }, pe.unary = function(n) { return nf(n, 1) }, pe.union = Ro, pe.unionBy = Eo, pe.unionWith = zo, pe.uniq = function(n) { return n && n.length ? Tu(n) : [] }, pe.uniqBy = function(n, t) { return n && n.length ? Tu(n, Bi(t, 2)) : [] }, pe.uniqWith = function(n, t) { return t = "function" == typeof t ? t : r, n && n.length ? Tu(n, r, t) : [] }, pe.unset = function(n, t) { return null == n || $u(n, t) }, pe.unzip = So, pe.unzipWith = Lo, pe.update = function(n, t, r) { return null == n ? n : Du(n, t, Zu(r)) }, pe.updateWith = function(n, t, e, u) { return u = "function" == typeof u ? u : r, null == n ? n : Du(n, t, Zu(e), u) }, pe.values = va, pe.valuesIn = function(n) { return null == n ? [] : _r(n, oa(n)) }, pe.without = Wo, pe.words = ka, pe.wrap = function(n, t) { return sf(Zu(t), n) }, pe.xor = Co, pe.xorBy = Bo, pe.xorWith = Uo, pe.zip = To, pe.zipObject = function(n, t) { return Pu(n || [], t || [], Re) }, pe.zipObjectDeep = function(n, t) { return Pu(n || [], t || [], Ou) }, pe.zipWith = $o, pe.entries = ha, pe.entriesIn = pa, pe.extend = Gf, pe.extendWith = Hf, Ba(pe, pe), pe.add = Za, pe.attempt = Oa, pe.camelCase = _a, pe.capitalize = ga, pe.ceil = Ka, pe.clamp = function(n, t, e) { return e === r && (e = t, t = r), e !== r && (e = (e = qf(e)) == e ? e : 0), t !== r && (t = (t = qf(t)) == t ? t : 0), Ce(qf(n), t, e) }, pe.clone = function(n) { return Be(n, s) }, pe.cloneDeep = function(n) { return Be(n, c | s) }, pe.cloneDeepWith = function(n, t) { return Be(n, c | s, t = "function" == typeof t ? t : r) }, pe.cloneWith = function(n, t) { return Be(n, s, t = "function" == typeof t ? t : r) }, pe.conformsTo = function(n, t) { return null == t || Ue(n, t, ia(t)) }, pe.deburr = ya, pe.defaultTo = function(n, t) { return null == n || n != n ? t : n }, pe.divide = Va, pe.endsWith = function(n, t, e) { n = Kf(n), t = Uu(t); var u = n.length,
                        i = e = e === r ? u : Ce(Nf(e), 0, u); return (e -= t.length) >= 0 && n.slice(e, i) == t }, pe.eq = vf, pe.escape = function(n) { return (n = Kf(n)) && jn.test(n) ? n.replace(mn, wr) : n }, pe.escapeRegExp = function(n) { return (n = Kf(n)) && Sn.test(n) ? n.replace(zn, "\\$&") : n }, pe.every = function(n, t, e) { var u = df(n) ? Vt : Fe; return e && Ki(n, t, e) && (t = r), u(n, Bi(t, 3)) }, pe.find = Po, pe.findIndex = _o, pe.findKey = function(n, t) { return er(n, Bi(t, 3), Ve) }, pe.findLast = qo, pe.findLastIndex = go, pe.findLastKey = function(n, t) { return er(n, Bi(t, 3), Ge) }, pe.floor = Ga, pe.forEach = Zo, pe.forEachRight = Ko, pe.forIn = function(n, t) { return null == n ? n : Ze(n, Bi(t, 3), oa) }, pe.forInRight = function(n, t) { return null == n ? n : Ke(n, Bi(t, 3), oa) }, pe.forOwn = function(n, t) { return n && Ve(n, Bi(t, 3)) }, pe.forOwnRight = function(n, t) { return n && Ge(n, Bi(t, 3)) }, pe.get = na, pe.gt = _f, pe.gte = gf, pe.has = function(n, t) { return null != n && Ni(n, t, nu) }, pe.hasIn = ta, pe.head = bo, pe.identity = Sa, pe.includes = function(n, t, r, e) { n = wf(n) ? n : va(n), r = r && !e ? Nf(r) : 0; var u = n.length; return r < 0 && (r = Zr(u + r, 0)), Bf(n) ? r <= u && n.indexOf(t, r) > -1 : !!u && ir(n, t, r) > -1 }, pe.indexOf = function(n, t, r) { var e = null == n ? 0 : n.length; if (!e) return -1; var u = null == r ? 0 : Nf(r); return u < 0 && (u = Zr(e + u, 0)), ir(n, t, u) }, pe.inRange = function(n, t, e) { return t = Ff(t), e === r ? (e = t, t = 0) : e = Ff(e),
                        function(n, t, r) { return n >= Kr(t, r) && n < Zr(t, r) }(n = qf(n), t, e) }, pe.invoke = ua, pe.isArguments = yf, pe.isArray = df, pe.isArrayBuffer = bf, pe.isArrayLike = wf, pe.isArrayLikeObject = mf, pe.isBoolean = function(n) { return !0 === n || !1 === n || Ef(n) && Qe(n) == F }, pe.isBuffer = xf, pe.isDate = jf, pe.isElement = function(n) { return Ef(n) && 1 === n.nodeType && !Lf(n) }, pe.isEmpty = function(n) { if (null == n) return !0; if (wf(n) && (df(n) || "string" == typeof n || "function" == typeof n.splice || xf(n) || Tf(n) || yf(n))) return !n.length; var t = Fi(n); if (t == V || t == X) return !n.size; if (Ji(n)) return !cu(n).length; for (var r in n)
                        if (st.call(n, r)) return !1; return !0 }, pe.isEqual = function(n, t) { return iu(n, t) }, pe.isEqualWith = function(n, t, e) { var u = (e = "function" == typeof e ? e : r) ? e(n, t) : r; return u === r ? iu(n, t, r, e) : !!u }, pe.isError = Af, pe.isFinite = function(n) { return "number" == typeof n && Nr(n) }, pe.isFunction = kf, pe.isInteger = Of, pe.isLength = If, pe.isMap = zf, pe.isMatch = function(n, t) { return n === t || ou(n, t, Ti(t)) }, pe.isMatchWith = function(n, t, e) { return e = "function" == typeof e ? e : r, ou(n, t, Ti(t), e) }, pe.isNaN = function(n) { return Sf(n) && n != +n }, pe.isNative = function(n) { if (Hi(n)) throw new Xn(u); return fu(n) }, pe.isNil = function(n) { return null == n }, pe.isNull = function(n) { return null === n }, pe.isNumber = Sf, pe.isObject = Rf, pe.isObjectLike = Ef, pe.isPlainObject = Lf, pe.isRegExp = Wf, pe.isSafeInteger = function(n) { return Of(n) && n >= -S && n <= S }, pe.isSet = Cf, pe.isString = Bf, pe.isSymbol = Uf, pe.isTypedArray = Tf, pe.isUndefined = function(n) { return n === r }, pe.isWeakMap = function(n) { return Ef(n) && Fi(n) == en }, pe.isWeakSet = function(n) { return Ef(n) && Qe(n) == un }, pe.join = function(n, t) { return null == n ? "" : Pr.call(n, t) }, pe.kebabCase = da, pe.last = jo, pe.lastIndexOf = function(n, t, e) { var u = null == n ? 0 : n.length; if (!u) return -1; var i = u; return e !== r && (i = (i = Nf(e)) < 0 ? Zr(u + i, 0) : Kr(i, u - 1)), t == t ? function(n, t, r) { for (var e = r + 1; e--;)
                            if (n[e] === t) return e; return e }(n, t, i) : ur(n, fr, i, !0) }, pe.lowerCase = ba, pe.lowerFirst = wa, pe.lt = $f, pe.lte = Df, pe.max = function(n) { return n && n.length ? Ne(n, Sa, Xe) : r }, pe.maxBy = function(n, t) { return n && n.length ? Ne(n, Bi(t, 2), Xe) : r }, pe.mean = function(n) { return ar(n, Sa) }, pe.meanBy = function(n, t) { return ar(n, Bi(t, 2)) }, pe.min = function(n) { return n && n.length ? Ne(n, Sa, su) : r }, pe.minBy = function(n, t) { return n && n.length ? Ne(n, Bi(t, 2), su) : r }, pe.stubArray = Pa, pe.stubFalse = qa, pe.stubObject = function() { return {} }, pe.stubString = function() { return "" }, pe.stubTrue = function() { return !0 }, pe.multiply = Ja, pe.nth = function(n, t) { return n && n.length ? gu(n, Nf(t)) : r }, pe.noConflict = function() { return St._ === this && (St._ = dt), this }, pe.noop = Ua, pe.now = Xo, pe.pad = function(n, t, r) { n = Kf(n); var e = (t = Nf(t)) ? Rr(n) : 0; if (!t || e >= t) return n; var u = (t - e) / 2; return yi(Dr(u), r) + n + yi($r(u), r) }, pe.padEnd = function(n, t, r) { n = Kf(n); var e = (t = Nf(t)) ? Rr(n) : 0; return t && e < t ? n + yi(t - e, r) : n }, pe.padStart = function(n, t, r) { n = Kf(n); var e = (t = Nf(t)) ? Rr(n) : 0; return t && e < t ? yi(t - e, r) + n : n }, pe.parseInt = function(n, t, r) { return r || null == t ? t = 0 : t && (t = +t), Gr(Kf(n).replace(Wn, ""), t || 0) }, pe.random = function(n, t, e) { if (e && "boolean" != typeof e && Ki(n, t, e) && (t = e = r), e === r && ("boolean" == typeof t ? (e = t, t = r) : "boolean" == typeof n && (e = n, n = r)), n === r && t === r ? (n = 0, t = 1) : (n = Ff(n), t === r ? (t = n, n = 0) : t = Ff(t)), n > t) { var u = n;
                        n = t, t = u } if (e || n % 1 || t % 1) { var i = Hr(); return Kr(n + i * (t - n + It("1e-" + ((i + "").length - 1))), t) } return mu(n, t) }, pe.reduce = function(n, t, r) { var e = df(n) ? Xt : sr,
                        u = arguments.length < 3; return e(n, Bi(t, 4), r, u, De) }, pe.reduceRight = function(n, t, r) { var e = df(n) ? nr : sr,
                        u = arguments.length < 3; return e(n, Bi(t, 4), r, u, Me) }, pe.repeat = function(n, t, e) { return t = (e ? Ki(n, t, e) : t === r) ? 1 : Nf(t), xu(Kf(n), t) }, pe.replace = function() { var n = arguments,
                        t = Kf(n[0]); return n.length < 3 ? t : t.replace(n[1], n[2]) }, pe.result = function(n, t, e) { var u = -1,
                        i = (t = Ku(t, n)).length; for (i || (i = 1, n = r); ++u < i;) { var o = null == n ? r : n[co(t[u])];
                        o === r && (u = i, o = e), n = kf(o) ? o.call(n) : o } return n }, pe.round = Ya, pe.runInContext = n, pe.sample = function(n) { return (df(n) ? Ae : Au)(n) }, pe.size = function(n) { if (null == n) return 0; if (wf(n)) return Bf(n) ? Rr(n) : n.length; var t = Fi(n); return t == V || t == X ? n.size : cu(n).length }, pe.snakeCase = ma, pe.some = function(n, t, e) { var u = df(n) ? tr : Su; return e && Ki(n, t, e) && (t = r), u(n, Bi(t, 3)) }, pe.sortedIndex = function(n, t) { return Lu(n, t) }, pe.sortedIndexBy = function(n, t, r) { return Wu(n, t, Bi(r, 2)) }, pe.sortedIndexOf = function(n, t) { var r = null == n ? 0 : n.length; if (r) { var e = Lu(n, t); if (e < r && vf(n[e], t)) return e } return -1 }, pe.sortedLastIndex = function(n, t) { return Lu(n, t, !0) }, pe.sortedLastIndexBy = function(n, t, r) { return Wu(n, t, Bi(r, 2), !0) }, pe.sortedLastIndexOf = function(n, t) { if (null != n && n.length) { var r = Lu(n, t, !0) - 1; if (vf(n[r], t)) return r } return -1 }, pe.startCase = xa, pe.startsWith = function(n, t, r) { return n = Kf(n), r = null == r ? 0 : Ce(Nf(r), 0, n.length), t = Uu(t), n.slice(r, r + t.length) == t }, pe.subtract = Qa, pe.sum = function(n) { return n && n.length ? hr(n, Sa) : 0 }, pe.sumBy = function(n, t) { return n && n.length ? hr(n, Bi(t, 2)) : 0 }, pe.template = function(n, t, e) { var u = pe.templateSettings;
                    e && Ki(n, t, e) && (t = r), n = Kf(n), t = Hf({}, t, u, ki); var i, o, f = Hf({}, t.imports, u.imports, ki),
                        a = ia(f),
                        c = _r(f, a),
                        l = 0,
                        s = t.interpolate || Gn,
                        h = "__p += '",
                        p = et((t.escape || Gn).source + "|" + s.source + "|" + (s === On ? Mn : Gn).source + "|" + (t.evaluate || Gn).source + "|$", "g"),
                        v = "//# sourceURL=" + (st.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++jt + "]") + "\n";
                    n.replace(p, function(t, r, e, u, f, a) { return e || (e = u), h += n.slice(l, a).replace(Hn, mr), r && (i = !0, h += "' +\n__e(" + r + ") +\n'"), f && (o = !0, h += "';\n" + f + ";\n__p += '"), e && (h += "' +\n((__t = (" + e + ")) == null ? '' : __t) +\n'"), l = a + t.length, t }), h += "';\n"; var _ = st.call(t, "variable") && t.variable;
                    _ || (h = "with (obj) {\n" + h + "\n}\n"), h = (o ? h.replace(yn, "") : h).replace(dn, "$1").replace(bn, "$1;"), h = "function(" + (_ || "obj") + ") {\n" + (_ ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (i ? ", __e = _.escape" : "") + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + h + "return __p\n}"; var g = Oa(function() { return nt(a, v + "return " + h).apply(r, c) }); if (g.source = h, Af(g)) throw g; return g }, pe.times = function(n, t) { if ((n = Nf(n)) < 1 || n > S) return []; var r = C,
                        e = Kr(n, C);
                    t = Bi(t), n -= C; for (var u = pr(e, t); ++r < n;) t(r); return u }, pe.toFinite = Ff, pe.toInteger = Nf, pe.toLength = Pf, pe.toLower = function(n) { return Kf(n).toLowerCase() }, pe.toNumber = qf, pe.toSafeInteger = function(n) { return n ? Ce(Nf(n), -S, S) : 0 === n ? n : 0 }, pe.toString = Kf, pe.toUpper = function(n) { return Kf(n).toUpperCase() }, pe.trim = function(n, t, e) { if ((n = Kf(n)) && (e || t === r)) return n.replace(Ln, ""); if (!n || !(t = Uu(t))) return n; var u = Er(n),
                        i = Er(t); return Gu(u, yr(u, i), dr(u, i) + 1).join("") }, pe.trimEnd = function(n, t, e) { if ((n = Kf(n)) && (e || t === r)) return n.replace(Cn, ""); if (!n || !(t = Uu(t))) return n; var u = Er(n); return Gu(u, 0, dr(u, Er(t)) + 1).join("") }, pe.trimStart = function(n, t, e) { if ((n = Kf(n)) && (e || t === r)) return n.replace(Wn, ""); if (!n || !(t = Uu(t))) return n; var u = Er(n); return Gu(u, yr(u, Er(t))).join("") }, pe.truncate = function(n, t) { var e = A,
                        u = k; if (Rf(t)) { var i = "separator" in t ? t.separator : i;
                        e = "length" in t ? Nf(t.length) : e, u = "omission" in t ? Uu(t.omission) : u } var o = (n = Kf(n)).length; if (xr(n)) { var f = Er(n);
                        o = f.length } if (e >= o) return n; var a = e - Rr(u); if (a < 1) return u; var c = f ? Gu(f, 0, a).join("") : n.slice(0, a); if (i === r) return c + u; if (f && (a += c.length - a), Wf(i)) { if (n.slice(a).search(i)) { var l, s = c; for (i.global || (i = et(i.source, Kf(Fn.exec(i)) + "g")), i.lastIndex = 0; l = i.exec(s);) var h = l.index;
                            c = c.slice(0, h === r ? a : h) } } else if (n.indexOf(Uu(i), a) != a) { var p = c.lastIndexOf(i);
                        p > -1 && (c = c.slice(0, p)) } return c + u }, pe.unescape = function(n) { return (n = Kf(n)) && xn.test(n) ? n.replace(wn, zr) : n }, pe.uniqueId = function(n) { var t = ++ht; return Kf(n) + t }, pe.upperCase = ja, pe.upperFirst = Aa, pe.each = Zo, pe.eachRight = Ko, pe.first = bo, Ba(pe, (Ha = {}, Ve(pe, function(n, t) { st.call(pe.prototype, t) || (Ha[t] = n) }), Ha), { chain: !1 }), pe.VERSION = "4.17.19", Zt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n) { pe[n].placeholder = pe }), Zt(["drop", "take"], function(n, t) { ye.prototype[n] = function(e) { e = e === r ? 1 : Zr(Nf(e), 0); var u = this.__filtered__ && !t ? new ye(this) : this.clone(); return u.__filtered__ ? u.__takeCount__ = Kr(e, u.__takeCount__) : u.__views__.push({ size: Kr(e, C), type: n + (u.__dir__ < 0 ? "Right" : "") }), u }, ye.prototype[n + "Right"] = function(t) { return this.reverse()[n](t).reverse() } }), Zt(["filter", "map", "takeWhile"], function(n, t) { var r = t + 1,
                        e = r == R || 3 == r;
                    ye.prototype[n] = function(n) { var t = this.clone(); return t.__iteratees__.push({ iteratee: Bi(n, 3), type: r }), t.__filtered__ = t.__filtered__ || e, t } }), Zt(["head", "last"], function(n, t) { var r = "take" + (t ? "Right" : "");
                    ye.prototype[n] = function() { return this[r](1).value()[0] } }), Zt(["initial", "tail"], function(n, t) { var r = "drop" + (t ? "" : "Right");
                    ye.prototype[n] = function() { return this.__filtered__ ? new ye(this) : this[r](1) } }), ye.prototype.compact = function() { return this.filter(Sa) }, ye.prototype.find = function(n) { return this.filter(n).head() }, ye.prototype.findLast = function(n) { return this.reverse().find(n) }, ye.prototype.invokeMap = ju(function(n, t) { return "function" == typeof n ? new ye(this) : this.map(function(r) { return eu(r, n, t) }) }), ye.prototype.reject = function(n) { return this.filter(cf(Bi(n))) }, ye.prototype.slice = function(n, t) { n = Nf(n); var e = this; return e.__filtered__ && (n > 0 || t < 0) ? new ye(e) : (n < 0 ? e = e.takeRight(-n) : n && (e = e.drop(n)), t !== r && (e = (t = Nf(t)) < 0 ? e.dropRight(-t) : e.take(t - n)), e) }, ye.prototype.takeRightWhile = function(n) { return this.reverse().takeWhile(n).reverse() }, ye.prototype.toArray = function() { return this.take(C) }, Ve(ye.prototype, function(n, t) { var e = /^(?:filter|find|map|reject)|While$/.test(t),
                        u = /^(?:head|last)$/.test(t),
                        i = pe[u ? "take" + ("last" == t ? "Right" : "") : t],
                        o = u || /^find/.test(t);
                    i && (pe.prototype[t] = function() { var t = this.__wrapped__,
                            f = u ? [1] : arguments,
                            a = t instanceof ye,
                            c = f[0],
                            l = a || df(t),
                            s = function(n) { var t = i.apply(pe, Qt([n], f)); return u && h ? t[0] : t };
                        l && e && "function" == typeof c && 1 != c.length && (a = l = !1); var h = this.__chain__,
                            p = !!this.__actions__.length,
                            v = o && !h,
                            _ = a && !p; if (!o && l) { t = _ ? t : new ye(this); var g = n.apply(t, f); return g.__actions__.push({ func: Mo, args: [s], thisArg: r }), new ge(g, h) } return v && _ ? n.apply(this, f) : (g = this.thru(s), v ? u ? g.value()[0] : g.value() : g) }) }), Zt(["pop", "push", "shift", "sort", "splice", "unshift"], function(n) { var t = ot[n],
                        r = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru",
                        e = /^(?:pop|shift)$/.test(n);
                    pe.prototype[n] = function() { var n = arguments; if (e && !this.__chain__) { var u = this.value(); return t.apply(df(u) ? u : [], n) } return this[r](function(r) { return t.apply(df(r) ? r : [], n) }) } }), Ve(ye.prototype, function(n, t) { var r = pe[t]; if (r) { var e = r.name + "";
                        st.call(ue, e) || (ue[e] = []), ue[e].push({ name: t, func: r }) } }), ue[pi(r, _).name] = [{ name: "wrapper", func: r }], ye.prototype.clone = function() { var n = new ye(this.__wrapped__); return n.__actions__ = ri(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = ri(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = ri(this.__views__), n }, ye.prototype.reverse = function() { if (this.__filtered__) { var n = new ye(this);
                        n.__dir__ = -1, n.__filtered__ = !0 } else(n = this.clone()).__dir__ *= -1; return n }, ye.prototype.value = function() { var n = this.__wrapped__.value(),
                        t = this.__dir__,
                        r = df(n),
                        e = t < 0,
                        u = r ? n.length : 0,
                        i = function(n, t, r) { for (var e = -1, u = r.length; ++e < u;) { var i = r[e],
                                    o = i.size; switch (i.type) {
                                    case "drop":
                                        n += o; break;
                                    case "dropRight":
                                        t -= o; break;
                                    case "take":
                                        t = Kr(t, n + o); break;
                                    case "takeRight":
                                        n = Zr(n, t - o) } } return { start: n, end: t } }(0, u, this.__views__),
                        o = i.start,
                        f = i.end,
                        a = f - o,
                        c = e ? f : o - 1,
                        l = this.__iteratees__,
                        s = l.length,
                        h = 0,
                        p = Kr(a, this.__takeCount__); if (!r || !e && u == a && p == a) return Fu(n, this.__actions__); var v = [];
                    n: for (; a-- && h < p;) { for (var _ = -1, g = n[c += t]; ++_ < s;) { var y = l[_],
                                d = y.iteratee,
                                b = y.type,
                                w = d(g); if (b == E) g = w;
                            else if (!w) { if (b == R) continue n; break n } } v[h++] = g }
                    return v }, pe.prototype.at = Fo, pe.prototype.chain = function() { return Do(this) }, pe.prototype.commit = function() { return new ge(this.value(), this.__chain__) }, pe.prototype.next = function() { this.__values__ === r && (this.__values__ = Mf(this.value())); var n = this.__index__ >= this.__values__.length; return { done: n, value: n ? r : this.__values__[this.__index__++] } }, pe.prototype.plant = function(n) { for (var t, e = this; e instanceof _e;) { var u = so(e);
                        u.__index__ = 0, u.__values__ = r, t ? i.__wrapped__ = u : t = u; var i = u;
                        e = e.__wrapped__ } return i.__wrapped__ = n, t }, pe.prototype.reverse = function() { var n = this.__wrapped__; if (n instanceof ye) { var t = n; return this.__actions__.length && (t = new ye(this)), (t = t.reverse()).__actions__.push({ func: Mo, args: [Io], thisArg: r }), new ge(t, this.__chain__) } return this.thru(Io) }, pe.prototype.toJSON = pe.prototype.valueOf = pe.prototype.value = function() { return Fu(this.__wrapped__, this.__actions__) }, pe.prototype.first = pe.prototype.head, Lr && (pe.prototype[Lr] = function() { return this }), pe }(); "function" == typeof n && "object" == typeof n.amd && n.amd ? (St._ = Sr, n(function() { return Sr })) : Wt ? ((Wt.exports = Sr)._ = Sr, Lt._ = Sr) : St._ = Sr }).call(this);
    }, { "buffer": "peL6" }],
    "PG4O": [function(require, module, exports) {
        "use strict";
        var e = require("rbush"),
            o = require("point-in-polygon"),
            r = require("./lib/polygon_utils"),
            t = require("lodash");

        function n(e) { void 0 !== e && this.loadFeatureCollection(e) }

        function i(e, r) { var t = r.geometry.coordinates[0]; if (o(e, t)) { for (var n = 1; n < r.geometry.coordinates.length; n++)
                    if (o(e, r.geometry.coordinates[n])) return !1; return !0 } return !1 } n.prototype.searchForOnePolygon = function(e, o) { var r = this.rtree.search({ minX: e, minY: o, maxX: e, maxY: o }),
                n = [e, o],
                s = r.map(function(e, o) { return this.polygons[r[o].polyId] }, this); return t.find(s, function(e) { return i(n, e) }) }, n.prototype.searchForMultiplePolygons = function(e, o, r) {-1 === r && (r = Number.MAX_SAFE_INTEGER); var t = [e, o],
                n = this.rtree.search({ minX: e, minY: o, maxX: e, maxY: o }),
                s = n.map(function(e, o) { return this.polygons[n[o].polyId] }, this),
                a = 0; return { type: "FeatureCollection", features: s = s.filter(function(e) { return !(a >= r) && (!!i(t, e) && (a++, !0)) }) } }, n.prototype.search = function(e, o, r) { return void 0 === r ? this.searchForOnePolygon(e, o) : this.searchForMultiplePolygons(e, o, r) }, n.prototype.loadFeatureCollection = function(o) { var t = [],
                n = [],
                i = 0;

            function s(e) { n.push(e); var o = r.getBoundingBox(e.geometry.coordinates[0]);
                o.polyId = i++, t.push(o) } o.features.forEach(function(e) { if (e.geometry && void 0 !== e.geometry.coordinates[0] && e.geometry.coordinates[0].length > 0) switch (e.geometry.type) {
                    case "Polygon":
                        s(e); break;
                    case "MultiPolygon":
                        for (var o = e.geometry.coordinates, r = 0; r < o.length; r++) s({ type: "Feature", properties: e.properties, geometry: { type: "Polygon", coordinates: o[r] } }) } }), this.rtree = (new e).load(t), this.polygons = n }, module.exports = n;
    }, { "rbush": "O1rd", "point-in-polygon": "UTeA", "./lib/polygon_utils": "cxFR", "lodash": "B1iE" }],
    "j8I8": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }), exports.Shapes = exports.defaults = void 0;
        var e = s(require("earcut")),
            t = s(require("geojson-flatten")),
            r = s(require("polygon-lookup")),
            n = require("./base"),
            i = require("./color"),
            o = require("leaflet"),
            a = require("./utils");

        function s(e) { return e && e.__esModule ? e : { default: e } }

        function l(e) { return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

        function u(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function c(e, t) { for (var r = 0; r < t.length; r++) { var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n) } }

        function f(e, t, r) { return t && c(e.prototype, t), r && c(e, r), e }

        function h(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && p(e, t) }

        function p(e, t) { return (p = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }

        function y(e) { return function() { var t, r = g(e); if (b()) { var n = g(this).constructor;
                    t = Reflect.construct(r, arguments, n) } else t = r.apply(this, arguments); return d(this, t) } }

        function d(e, t) { return !t || "object" !== l(t) && "function" != typeof t ? v(e) : t }

        function v(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }

        function b() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0 } catch (e) { return !1 } }

        function g(e) { return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }
        var A = { map: null, data: [], longitudeKey: null, latitudeKey: null, setupClick: null, setupHover: null, vertexShaderSource: null, fragmentShaderSource: null, click: null, hover: null, color: i.Color.random, className: "", opacity: .5, shaderVariables: { color: { type: "FLOAT", start: 2, size: 4 } }, border: !1 };
        exports.defaults = A;
        var R = function(i) { h(l, n.Base); var s = y(l);

            function l(e) { var t; if (u(this, l), (t = s.call(this, e)).bytes = 6, l.instances.push(v(t)), t.settings = Object.assign(Object.assign({}, l.defaults), e), !e.data) throw new Error('no "data" array setting defined'); if (!e.map) throw new Error('no leaflet "map" object setting defined'); return t.polygonLookup = null, t.setup().render(), t } return f(l, [{ key: "render", value: function() { this.resetVertices(); var e = this.canvas,
                        t = this.gl,
                        r = this.layer,
                        n = this.vertices,
                        i = this.mapMatrix,
                        o = this.getBuffer("vertex"),
                        a = new Float32Array(n),
                        s = a.BYTES_PER_ELEMENT,
                        l = this.getAttributeLocation("vertex"); return t.bindBuffer(t.ARRAY_BUFFER, o), t.bufferData(t.ARRAY_BUFFER, a, t.STATIC_DRAW), t.vertexAttribPointer(l, 2, t.FLOAT, !1, s * this.bytes, 0), t.enableVertexAttribArray(l), this.matrix = this.getUniformLocation("matrix"), t.viewport(0, 0, e.width, e.height), i.setSize(e.width, e.height), t.uniformMatrix4fv(this.matrix, !1, i.array), this.attachShaderVariables(s), r.redraw(), this } }, { key: "resetVertices", value: function() { this.vertices = [], this.vertexLines = [], this.polygonLookup = new r.default; var n, i, s, l, u, c, f, h, p, y, d, v, b = this.vertices,
                        g = this.vertexLines,
                        A = this.polygonLookup,
                        R = this.settings,
                        w = R.data,
                        x = R.color,
                        E = R.opacity,
                        m = 0; switch (w.type) {
                        case "Feature":
                            A.loadFeatureCollection({ type: "FeatureCollection", features: [w] }), s = (0, t.default)(w); break;
                        case "MultiPolygon":
                            A.loadFeatureCollection({ type: "FeatureCollection", features: [{ type: "Feature", properties: { id: "bar" }, geometry: { coordinates: w.coordinates } }] }), s = (0, t.default)(w); break;
                        default:
                            A.loadFeatureCollection(w), s = w.features } if (h = s.length, !x) throw new Error("color is not properly defined"); for ("function" == typeof x && (u = x); m < h; m++) { l = s[m], p = [], c = u ? u(m, l) : x, f = (l.geometry || l).coordinates, d = e.default.flatten(f), y = (0, e.default)(d.vertices, d.holes, d.dimensions), v = f[0][0].length; for (var F = 0, _ = y.length; F < _; F++) { if (i = y[F], "number" != typeof d.vertices[0]) throw new Error("unhandled polygon");
                            p.push(d.vertices[i * v + R.longitudeKey], d.vertices[i * v + R.latitudeKey]) } for (var S = 0, T = p.length; S < T; S) n = R.map.project(new o.LatLng(p[S++], p[S++]), 0), b.push(n.x, n.y, c.r, c.g, c.b, c.a || E); if (R.border) { for (var L = [], B = 1, O = d.vertices.length; B < O; B += 2) L.push(d.vertices[B], d.vertices[B - 1]), L.push(d.vertices[B + 2], d.vertices[B + 1]); for (var k = 0, P = L.length; k < P; k) n = (0, a.latLonToPixel)(L[k++], L[k++]), g.push(n.x, n.y, c.r, c.g, c.b, c.a || E) } } return this } }, { key: "drawOnCanvas", value: function(e) { if (!this.gl) return this; var t = e.scale,
                        r = e.offset,
                        n = e.canvas,
                        i = this.mapMatrix,
                        o = this.gl,
                        a = this.vertices,
                        s = this.settings,
                        l = this.vertexLines; if (i.setSize(n.width, n.height).scaleMatrix(t).translateMatrix(-r.x, -r.y), o.clear(o.COLOR_BUFFER_BIT), o.viewport(0, 0, n.width, n.height), o.uniformMatrix4fv(this.matrix, !1, i.array), s.border) { var u = this.getBuffer("vertexLines"),
                            c = new Float32Array(l),
                            f = c.BYTES_PER_ELEMENT,
                            h = this.getAttributeLocation("vertex");
                        o.bindBuffer(o.ARRAY_BUFFER, null), o.bindBuffer(o.ARRAY_BUFFER, u), o.bufferData(o.ARRAY_BUFFER, c, o.STATIC_DRAW), null !== this.settings.shaderVariables && this.attachShaderVariables(f), o.vertexAttribPointer(h, 3, o.FLOAT, !1, f * this.bytes, 0), o.enableVertexAttribArray(h), o.enable(o.DEPTH_TEST), o.viewport(0, 0, n.width, n.height), o.drawArrays(o.LINES, 0, l.length / this.bytes); var p = this.getBuffer("vertex"),
                            y = new Float32Array(a);
                        o.bindBuffer(o.ARRAY_BUFFER, null), o.bindBuffer(o.ARRAY_BUFFER, p), o.bufferData(o.ARRAY_BUFFER, y, o.STATIC_DRAW), null !== s.shaderVariables && this.attachShaderVariables(f), o.vertexAttribPointer(h, 2, o.FLOAT, !1, f * this.bytes, 0), o.enableVertexAttribArray(h), o.enable(o.DEPTH_TEST), o.viewport(0, 0, n.width, n.height) } return o.drawArrays(o.TRIANGLES, 0, a.length / this.bytes), this } }], [{ key: "tryClick", value: function(e, t) { var r, n, i; return l.instances.forEach(function(o) { n = o.settings, o.active && n.map === t && n.click && (i = o.polygonLookup.search(e.latlng.lng, e.latlng.lat)) && (r = n.click(e, i)) }), void 0 === r || r } }, { key: "tryHover", value: function(e, t) { var r, n, i; return l.instances.forEach(function(o) { n = o.settings, o.active && n.map === t && n.hover && (i = o.polygonLookup.search(e.latlng.lng, e.latlng.lat)) && (r = n.hover(e, i)) }), void 0 === r || r } }]), l }();
        exports.Shapes = R, R.instances = [], R.defaults = A;
    }, { "earcut": "vwhv", "geojson-flatten": "nhDx", "polygon-lookup": "PG4O", "./base": "pR9a", "./color": "lpyx", "leaflet": "f3z0", "./utils": "UnXq" }],
    "LmkB": [function(require, module, exports) {
        module.exports = `uniform mat4 matrix;
attribute vec4 vertex;
attribute vec4 color;
attribute float pointSize;
varying vec4 _color;

void main() {
  //set the size of the point
  gl_PointSize = pointSize;

  //multiply each vertex by a matrix.
  gl_Position = matrix * vertex;

  //pass the color to the fragment shader
  _color = color;
}
`
    }, {}],
    "hNM2": [function(require, module, exports) {
        module.exports = `precision mediump float;
uniform vec4 color;

void main() {
    float border = 0.05;
    float radius = 0.5;
    vec2 center = vec2(0.5);

    vec4 color0 = vec4(0.0);
    vec4 color1 = vec4(color[0], color[1], color[2], color[3]);

    vec2 m = gl_PointCoord.xy - center;
    float dist = radius - sqrt(m.x * m.x + m.y * m.y);

    float t = 0.0;
    if (dist > border) {
        t = 1.0;
    } else if (dist > 0.0) {
        t = dist / border;
    }

    //works for overlapping circles if blending is enabled
    gl_FragColor = mix(color0, color1, t);
}
`
    }, {}],
    "XGkG": [function(require, module, exports) {
        module.exports = `precision mediump float;
varying vec4 _color;

void main() {
  float border = 0.1;
  float radius = 0.5;
  vec2 center = vec2(0.5, 0.5);

  vec4 pointColor = vec4(
    _color[0],
    _color[1],
    _color[2],
    _color[3]
  );

  vec2 m = gl_PointCoord.xy - center;
  float dist1 = radius - sqrt(m.x * m.x + m.y * m.y);

  float t1 = 0.0;
  if (dist1 > border) {
      t1 = 1.0;
  } else if (dist1 > 0.0) {
      t1 = dist1 / border;
  }

  //works for overlapping circles if blending is enabled
  //gl_FragColor = mix(color0, color1, t);

  //border
  float outerBorder = 0.05;
  float innerBorder = 0.8;
  vec4 borderColor = vec4(0, 0, 0, 0.4);
  vec2 uv = gl_PointCoord.xy;
  vec4 clearColor = vec4(0, 0, 0, 0);

  // Offset uv with the center of the circle.
  uv -= center;

  float dist2 =  sqrt(dot(uv, uv));

  float t2 = 1.0 + smoothstep(radius, radius + outerBorder, dist2)
                - smoothstep(radius - innerBorder, radius, dist2);

  gl_FragColor = mix(mix(borderColor, clearColor, t2), pointColor, t1);
}
`
    }, {}],
    "AY9x": [function(require, module, exports) {
        module.exports = `precision mediump float;
varying vec4 _color;

void main() {
  vec2 center = vec2(0.5);
  vec2 uv = gl_PointCoord.xy - center;
  float smoothing = 0.005;
  vec4 _color1 = vec4(_color[0], _color[1], _color[2], _color[3]);
  float radius1 = 0.3;
  vec4 _color2 = vec4(_color[0], _color[1], _color[2], _color[3]);
  float radius2 = 0.5;
  float dist = length(uv);

  //SMOOTH
  float gamma = 2.2;
  color1.rgb = pow(_color1.rgb, vec3(gamma));
  color2.rgb = pow(_color2.rgb, vec3(gamma));

  vec4 puck = mix(
    mix(
      _color1,
      _color2,
      smoothstep(
        radius1 - smoothing,
        radius1 + smoothing,
        dist
      )
    ),
    vec4(0,0,0,0),
      smoothstep(
        radius2 - smoothing,
        radius2 + smoothing,
        dist
    )
  );

  //Gamma correction (prevents color fringes)
  puck.rgb = pow(puck.rgb, vec3(1.0 / gamma));
  gl_FragColor = puck;
}
`
    }, {}],
    "R6F0": [function(require, module, exports) {
        module.exports = `precision mediump float;
varying vec4 _color;

void main() {
    vec4 color1 = vec4(_color[0], _color[1], _color[2], _color[3]);

    //simple circles
    float d = distance (gl_PointCoord, vec2(0.5, 0.5));
    if (d < 0.5 ){
        gl_FragColor = color1;
    } else {
        discard;
    }
}
`
    }, {}],
    "sqgp": [function(require, module, exports) {
        module.exports = `precision mediump float;
varying vec4 _color;

void main() {
    //squares
    gl_FragColor = vec4(_color[0], _color[1], _color[2], _color[3]);
}
`
    }, {}],
    "JKQp": [function(require, module, exports) {
        module.exports = `precision mediump float;
varying vec4 _color;

void main() {
  gl_FragColor = vec4(
    _color[0],
    _color[1],
    _color[2],
    _color[3]
  );
}
`
    }, {}],
    "QCba": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }), exports.default = exports.glify = void 0;
        var e = require("./lines"),
            t = require("./points"),
            r = require("./shapes"),
            n = require("./utils"),
            i = c(require("./shader/vertex/default.glsl")),
            s = c(require("./shader/fragment/dot.glsl")),
            u = c(require("./shader/fragment/point.glsl")),
            o = c(require("./shader/fragment/puck.glsl")),
            a = c(require("./shader/fragment/simple-circle.glsl")),
            l = c(require("./shader/fragment/square.glsl")),
            d = c(require("./shader/fragment/polygon.glsl"));

        function c(e) { return e && e.__esModule ? e : { default: e } }

        function f(e) { return v(e) || y(e) || p(e) || h() }

        function h() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }

        function p(e, t) { if (e) { if ("string" == typeof e) return g(e, t); var r = Object.prototype.toString.call(e).slice(8, -1); return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? g(e, t) : void 0 } }

        function y(e) { if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e) }

        function v(e) { if (Array.isArray(e)) return g(e) }

        function g(e, t) {
            (null == t || t > e.length) && (t = e.length); for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]; return n }

        function m(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function b(e, t) { for (var r = 0; r < t.length; r++) { var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n) } }

        function S(e, t, r) { return t && b(e.prototype, t), r && b(e, r), e }
        var k = { vertex: i.default, fragment: { dot: s.default, point: u.default, puck: o.default, simpleCircle: a.default, square: l.default, polygon: d.default } },
            w = function() {
                function i() { m(this, i), this.longitudeKey = 1, this.latitudeKey = 0, this.maps = [], this.shader = k, this.Points = t.Points, this.Shapes = r.Shapes, this.Lines = e.Lines } return S(i, [{ key: "longitudeFirst", value: function() { return this.longitudeKey = 0, this.latitudeKey = 1, this } }, { key: "latitudeFirst", value: function() { return this.latitudeKey = 0, this.longitudeKey = 1, this } }, { key: "points", value: function(e) { var t = this; return new this.Points(Object.assign({ setupClick: K.setupClick.bind(this), setupHover: this.setupHover.bind(this), latitudeKey: K.latitudeKey, longitudeKey: K.longitudeKey, vertexShaderSource: function() { return t.shader.vertex }, fragmentShaderSource: function() { return t.shader.fragment.point } }, e)) } }, { key: "shapes", value: function(e) { var t = this; return new this.Shapes(Object.assign({ setupClick: this.setupClick.bind(this), setupHover: this.setupHover.bind(this), latitudeKey: this.latitudeKey, longitudeKey: this.longitudeKey, vertexShaderSource: function() { return t.shader.vertex }, fragmentShaderSource: function() { return t.shader.fragment.polygon } }, e)) } }, { key: "lines", value: function(e) { var t = this; return new this.Lines(Object.assign({ setupClick: this.setupClick.bind(this), setupHover: this.setupHover.bind(this), latitudeKey: this.latitudeKey, longitudeKey: this.longitudeKey, vertexShaderSource: function() { return t.shader.vertex }, fragmentShaderSource: function() { return t.shader.fragment.polygon } }, e)) } }, { key: "setupClick", value: function(n) { this.maps.indexOf(n) < 0 && (this.maps.push(n), n.on("click", function(i) { var s; return void 0 !== (s = t.Points.tryClick(i, n)) ? s : void 0 !== (s = e.Lines.tryClick(i, n)) ? s : void 0 !== (s = r.Shapes.tryClick(i, n)) ? s : void 0 })) } }, { key: "setupHover", value: function(i, s, u) { this.maps.push(i), i.on("mousemove", (0, n.debounce)(function(n) { var s; return void 0 !== (s = t.Points.tryHover(n, i)) ? s : void 0 !== (s = e.Lines.tryHover(n, i)) ? s : void 0 !== (s = r.Shapes.tryHover(n, i)) ? s : void 0 }, s, u)) } }, { key: "instances", get: function() { return [].concat(f(t.Points.instances), f(e.Lines.instances), f(r.Shapes.instances)) } }]), i }(),
            K = new w;
        exports.glify = K;
        var x = K;
        exports.default = x, "undefined" != typeof window && window.L && (window.L.glify = K, window.L.Glify = w);
    }, { "./lines": "ogHp", "./points": "IieH", "./shapes": "j8I8", "./utils": "UnXq", "./shader/vertex/default.glsl": "LmkB", "./shader/fragment/dot.glsl": "hNM2", "./shader/fragment/point.glsl": "XGkG", "./shader/fragment/puck.glsl": "AY9x", "./shader/fragment/simple-circle.glsl": "R6F0", "./shader/fragment/square.glsl": "sqgp", "./shader/fragment/polygon.glsl": "JKQp" }]
}, {}, ["QCba"], null)
//# sourceMappingURL=/glify-browser.js.map