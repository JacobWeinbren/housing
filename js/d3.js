// https://d3js.org v6.2.0 Copyright 2020 Mike Bostock
! function(t, n) { "object" == typeof exports && "undefined" != typeof module ? n(exports) : "function" == typeof define && define.amd ? define(["exports"], n) : n((t = "undefined" != typeof globalThis ? globalThis : t || self).d3 = t.d3 || {}) }(this, (function(t) { "use strict";

    function n(t, n) { return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN }

    function e(t) { let e = t,
            r = t;

        function i(t, n, e, i) { for (null == e && (e = 0), null == i && (i = t.length); e < i;) { const o = e + i >>> 1;
                r(t[o], n) < 0 ? e = o + 1 : i = o } return e } return 1 === t.length && (e = (n, e) => t(n) - e, r = function(t) { return (e, r) => n(t(e), r) }(t)), { left: i, center: function(t, n, r, o) { null == r && (r = 0), null == o && (o = t.length); const a = i(t, n, r, o - 1); return a > r && e(t[a - 1], n) > -e(t[a], n) ? a - 1 : a }, right: function(t, n, e, i) { for (null == e && (e = 0), null == i && (i = t.length); e < i;) { const o = e + i >>> 1;
                    r(t[o], n) > 0 ? i = o : e = o + 1 } return e } } }

    function r(t) { return null === t ? NaN : +t } const i = e(n),
        o = i.right,
        a = i.left,
        u = e(r).center;

    function c(t, n) { let e = 0; if (void 0 === n)
            for (let n of t) null != n && (n = +n) >= n && ++e;
        else { let r = -1; for (let i of t) null != (i = n(i, ++r, t)) && (i = +i) >= i && ++e } return e }

    function f(t) { return 0 | t.length }

    function s(t) { return !(t > 0) }

    function l(t) { return "object" != typeof t || "length" in t ? t : Array.from(t) }

    function h(t, n) { let e, r = 0,
            i = 0,
            o = 0; if (void 0 === n)
            for (let n of t) null != n && (n = +n) >= n && (e = n - i, i += e / ++r, o += e * (n - i));
        else { let a = -1; for (let u of t) null != (u = n(u, ++a, t)) && (u = +u) >= u && (e = u - i, i += e / ++r, o += e * (u - i)) } if (r > 1) return o / (r - 1) }

    function d(t, n) { const e = h(t, n); return e ? Math.sqrt(e) : e }

    function p(t, n) { let e, r; if (void 0 === n)
            for (const n of t) null != n && (void 0 === e ? n >= n && (e = r = n) : (e > n && (e = n), r < n && (r = n)));
        else { let i = -1; for (let o of t) null != (o = n(o, ++i, t)) && (void 0 === e ? o >= o && (e = r = o) : (e > o && (e = o), r < o && (r = o))) } return [e, r] } class g { constructor() { this._partials = new Float64Array(32), this._n = 0 } add(t) { const n = this._partials; let e = 0; for (let r = 0; r < this._n && r < 32; r++) { const i = n[r],
                    o = t + i,
                    a = Math.abs(t) < Math.abs(i) ? t - (o - i) : i - (o - t);
                a && (n[e++] = a), t = o } return n[e] = t, this._n = e + 1, this } valueOf() { const t = this._partials; let n, e, r, i = this._n,
                o = 0; if (i > 0) { for (o = t[--i]; i > 0 && (n = o, e = t[--i], o = n + e, r = e - (o - n), !r););
                i > 0 && (r < 0 && t[i - 1] < 0 || r > 0 && t[i - 1] > 0) && (e = 2 * r, n = o + e, e == n - o && (o = n)) } return o } }

    function y(t) { return t }

    function v(t) { if (1 !== t.length) throw new Error("duplicate key"); return t[0] }

    function _(t, n, e, r) { return function t(i, o) { if (o >= r.length) return e(i); const a = new Map,
                u = r[o++]; let c = -1; for (const t of i) { const n = u(t, ++c, i),
                    e = a.get(n);
                e ? e.push(t) : a.set(n, [t]) } for (const [n, e] of a) a.set(n, t(e, o)); return n(a) }(t, 0) } var b = Array.prototype.slice;

    function m(t) { return function() { return t } } var x = Math.sqrt(50),
        w = Math.sqrt(10),
        M = Math.sqrt(2);

    function A(t, n, e) { var r, i, o, a, u = -1; if (e = +e, (t = +t) === (n = +n) && e > 0) return [t]; if ((r = n < t) && (i = t, t = n, n = i), 0 === (a = T(t, n, e)) || !isFinite(a)) return []; if (a > 0)
            for (t = Math.ceil(t / a), n = Math.floor(n / a), o = new Array(i = Math.ceil(n - t + 1)); ++u < i;) o[u] = (t + u) * a;
        else
            for (a = -a, t = Math.ceil(t * a), n = Math.floor(n * a), o = new Array(i = Math.ceil(n - t + 1)); ++u < i;) o[u] = (t + u) / a; return r && o.reverse(), o }

    function T(t, n, e) { var r = (n - t) / Math.max(0, e),
            i = Math.floor(Math.log(r) / Math.LN10),
            o = r / Math.pow(10, i); return i >= 0 ? (o >= x ? 10 : o >= w ? 5 : o >= M ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (o >= x ? 10 : o >= w ? 5 : o >= M ? 2 : 1) }

    function S(t, n, e) { var r = Math.abs(n - t) / Math.max(0, e),
            i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
            o = r / i; return o >= x ? i *= 10 : o >= w ? i *= 5 : o >= M && (i *= 2), n < t ? -i : i }

    function E(t, n, e) { let r; for (;;) { const i = T(t, n, e); if (i === r || 0 === i || !isFinite(i)) return [t, n];
            i > 0 ? (t = Math.floor(t / i) * i, n = Math.ceil(n / i) * i) : i < 0 && (t = Math.ceil(t * i) / i, n = Math.floor(n * i) / i), r = i } }

    function k(t) { return Math.ceil(Math.log(c(t)) / Math.LN2) + 1 }

    function N() { var t = y,
            n = p,
            e = k;

        function r(r) { Array.isArray(r) || (r = Array.from(r)); var i, a, u = r.length,
                c = new Array(u); for (i = 0; i < u; ++i) c[i] = t(r[i], i, r); var f = n(c),
                s = f[0],
                l = f[1],
                h = e(c, s, l);
            Array.isArray(h) || (h = +h, n === p && ([s, l] = E(s, l, h)), (h = A(s, l, h))[h.length - 1] === l && h.pop()); for (var d = h.length; h[0] <= s;) h.shift(), --d; for (; h[d - 1] > l;) h.pop(), --d; var g, y = new Array(d + 1); for (i = 0; i <= d; ++i)(g = y[i] = []).x0 = i > 0 ? h[i - 1] : s, g.x1 = i < d ? h[i] : l; for (i = 0; i < u; ++i) s <= (a = c[i]) && a <= l && y[o(h, a, 0, d)].push(r[i]); return y } return r.value = function(n) { return arguments.length ? (t = "function" == typeof n ? n : m(n), r) : t }, r.domain = function(t) { return arguments.length ? (n = "function" == typeof t ? t : m([t[0], t[1]]), r) : n }, r.thresholds = function(t) { return arguments.length ? (e = "function" == typeof t ? t : Array.isArray(t) ? m(b.call(t)) : m(t), r) : e }, r }

    function C(t, n) { let e; if (void 0 === n)
            for (const n of t) null != n && (e < n || void 0 === e && n >= n) && (e = n);
        else { let r = -1; for (let i of t) null != (i = n(i, ++r, t)) && (e < i || void 0 === e && i >= i) && (e = i) } return e }

    function P(t, n) { let e; if (void 0 === n)
            for (const n of t) null != n && (e > n || void 0 === e && n >= n) && (e = n);
        else { let r = -1; for (let i of t) null != (i = n(i, ++r, t)) && (e > i || void 0 === e && i >= i) && (e = i) } return e }

    function z(t, e, r = 0, i = t.length - 1, o = n) { for (; i > r;) { if (i - r > 600) { const n = i - r + 1,
                    a = e - r + 1,
                    u = Math.log(n),
                    c = .5 * Math.exp(2 * u / 3),
                    f = .5 * Math.sqrt(u * c * (n - c) / n) * (a - n / 2 < 0 ? -1 : 1);
                z(t, e, Math.max(r, Math.floor(e - a * c / n + f)), Math.min(i, Math.floor(e + (n - a) * c / n + f)), o) } const n = t[e]; let a = r,
                u = i; for (D(t, r, e), o(t[i], n) > 0 && D(t, r, i); a < u;) { for (D(t, a, u), ++a, --u; o(t[a], n) < 0;) ++a; for (; o(t[u], n) > 0;) --u } 0 === o(t[r], n) ? D(t, r, u) : (++u, D(t, u, i)), u <= e && (r = u + 1), e <= u && (i = u - 1) } return t }

    function D(t, n, e) { const r = t[n];
        t[n] = t[e], t[e] = r }

    function q(t, n, e) { if (r = (t = Float64Array.from(function*(t, n) { if (void 0 === n)
                    for (let n of t) null != n && (n = +n) >= n && (yield n);
                else { let e = -1; for (let r of t) null != (r = n(r, ++e, t)) && (r = +r) >= r && (yield r) } }(t, e))).length) { if ((n = +n) <= 0 || r < 2) return P(t); if (n >= 1) return C(t); var r, i = (r - 1) * n,
                o = Math.floor(i),
                a = C(z(t, o).subarray(0, o + 1)); return a + (P(t.subarray(o + 1)) - a) * (i - o) } }

    function R(t, n, e = r) { if (i = t.length) { if ((n = +n) <= 0 || i < 2) return +e(t[0], 0, t); if (n >= 1) return +e(t[i - 1], i - 1, t); var i, o = (i - 1) * n,
                a = Math.floor(o),
                u = +e(t[a], a, t); return u + (+e(t[a + 1], a + 1, t) - u) * (o - a) } }

    function F(t, n) { let e, r = -1,
            i = -1; if (void 0 === n)
            for (const n of t) ++i, null != n && (e < n || void 0 === e && n >= n) && (e = n, r = i);
        else
            for (let o of t) null != (o = n(o, ++i, t)) && (e < o || void 0 === e && o >= o) && (e = o, r = i); return r }

    function O(t) { return Array.from(function*(t) { for (const n of t) yield* n }(t)) }

    function U(t, n) { let e, r = -1,
            i = -1; if (void 0 === n)
            for (const n of t) ++i, null != n && (e > n || void 0 === e && n >= n) && (e = n, r = i);
        else
            for (let o of t) null != (o = n(o, ++i, t)) && (e > o || void 0 === e && o >= o) && (e = o, r = i); return r }

    function I(t, n) { return [t, n] }

    function B(t, n, e) { t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e; for (var r = -1, i = 0 | Math.max(0, Math.ceil((n - t) / e)), o = new Array(i); ++r < i;) o[r] = t + r * e; return o }

    function Y(t, e = n) { if (1 === e.length) return U(t, e); let r, i = -1,
            o = -1; for (const n of t) ++o, (i < 0 ? 0 === e(n, n) : e(n, r) < 0) && (r = n, i = o); return i } var L = j(Math.random);

    function j(t) { return function(n, e = 0, r = n.length) { let i = r - (e = +e); for (; i;) { const r = t() * i-- | 0,
                    o = n[i + e];
                n[i + e] = n[r + e], n[r + e] = o } return n } }

    function H(t) { if (!(i = t.length)) return []; for (var n = -1, e = P(t, X), r = new Array(e); ++n < e;)
            for (var i, o = -1, a = r[n] = new Array(i); ++o < i;) a[o] = t[o][n]; return r }

    function X(t) { return t.length }

    function G(t) { return t instanceof Set ? t : new Set(t) }

    function V(t, n) { const e = t[Symbol.iterator](),
            r = new Set; for (const t of n) { if (r.has(t)) continue; let n, i; for (;
                ({ value: n, done: i } = e.next());) { if (i) return !1; if (r.add(n), Object.is(t, n)) break } } return !0 } var $ = Array.prototype.slice;

    function W(t) { return t } var Z = 1e-6;

    function K(t) { return "translate(" + (t + .5) + ",0)" }

    function Q(t) { return "translate(0," + (t + .5) + ")" }

    function J(t) { return n => +t(n) }

    function tt(t) { var n = Math.max(0, t.bandwidth() - 1) / 2; return t.round() && (n = Math.round(n)),
            function(e) { return +t(e) + n } }

    function nt() { return !this.__axis }

    function et(t, n) { var e = [],
            r = null,
            i = null,
            o = 6,
            a = 6,
            u = 3,
            c = 1 === t || 4 === t ? -1 : 1,
            f = 4 === t || 2 === t ? "x" : "y",
            s = 1 === t || 3 === t ? K : Q;

        function l(l) { var h = null == r ? n.ticks ? n.ticks.apply(n, e) : n.domain() : r,
                d = null == i ? n.tickFormat ? n.tickFormat.apply(n, e) : W : i,
                p = Math.max(o, 0) + u,
                g = n.range(),
                y = +g[0] + .5,
                v = +g[g.length - 1] + .5,
                _ = (n.bandwidth ? tt : J)(n.copy()),
                b = l.selection ? l.selection() : l,
                m = b.selectAll(".domain").data([null]),
                x = b.selectAll(".tick").data(h, n).order(),
                w = x.exit(),
                M = x.enter().append("g").attr("class", "tick"),
                A = x.select("line"),
                T = x.select("text");
            m = m.merge(m.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), x = x.merge(M), A = A.merge(M.append("line").attr("stroke", "currentColor").attr(f + "2", c * o)), T = T.merge(M.append("text").attr("fill", "currentColor").attr(f, c * p).attr("dy", 1 === t ? "0em" : 3 === t ? "0.71em" : "0.32em")), l !== b && (m = m.transition(l), x = x.transition(l), A = A.transition(l), T = T.transition(l), w = w.transition(l).attr("opacity", Z).attr("transform", (function(t) { return isFinite(t = _(t)) ? s(t) : this.getAttribute("transform") })), M.attr("opacity", Z).attr("transform", (function(t) { var n = this.parentNode.__axis; return s(n && isFinite(n = n(t)) ? n : _(t)) }))), w.remove(), m.attr("d", 4 === t || 2 == t ? a ? "M" + c * a + "," + y + "H0.5V" + v + "H" + c * a : "M0.5," + y + "V" + v : a ? "M" + y + "," + c * a + "V0.5H" + v + "V" + c * a : "M" + y + ",0.5H" + v), x.attr("opacity", 1).attr("transform", (function(t) { return s(_(t)) })), A.attr(f + "2", c * o), T.attr(f, c * p).text(d), b.filter(nt).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", 2 === t ? "start" : 4 === t ? "end" : "middle"), b.each((function() { this.__axis = _ })) } return l.scale = function(t) { return arguments.length ? (n = t, l) : n }, l.ticks = function() { return e = $.call(arguments), l }, l.tickArguments = function(t) { return arguments.length ? (e = null == t ? [] : $.call(t), l) : e.slice() }, l.tickValues = function(t) { return arguments.length ? (r = null == t ? null : $.call(t), l) : r && r.slice() }, l.tickFormat = function(t) { return arguments.length ? (i = t, l) : i }, l.tickSize = function(t) { return arguments.length ? (o = a = +t, l) : o }, l.tickSizeInner = function(t) { return arguments.length ? (o = +t, l) : o }, l.tickSizeOuter = function(t) { return arguments.length ? (a = +t, l) : a }, l.tickPadding = function(t) { return arguments.length ? (u = +t, l) : u }, l } var rt = { value: () => {} };

    function it() { for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) { if (!(t = arguments[n] + "") || t in r || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
            r[t] = [] } return new ot(r) }

    function ot(t) { this._ = t }

    function at(t, n) { return t.trim().split(/^|\s+/).map((function(t) { var e = "",
                r = t.indexOf("."); if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t); return { type: t, name: e } })) }

    function ut(t, n) { for (var e, r = 0, i = t.length; r < i; ++r)
            if ((e = t[r]).name === n) return e.value }

    function ct(t, n, e) { for (var r = 0, i = t.length; r < i; ++r)
            if (t[r].name === n) { t[r] = rt, t = t.slice(0, r).concat(t.slice(r + 1)); break } return null != e && t.push({ name: n, value: e }), t } ot.prototype = it.prototype = { constructor: ot, on: function(t, n) { var e, r = this._,
                i = at(t + "", r),
                o = -1,
                a = i.length; if (!(arguments.length < 2)) { if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n); for (; ++o < a;)
                    if (e = (t = i[o]).type) r[e] = ct(r[e], t.name, n);
                    else if (null == n)
                    for (e in r) r[e] = ct(r[e], t.name, null); return this } for (; ++o < a;)
                if ((e = (t = i[o]).type) && (e = ut(r[e], t.name))) return e }, copy: function() { var t = {},
                n = this._; for (var e in n) t[e] = n[e].slice(); return new ot(t) }, call: function(t, n) { if ((e = arguments.length - 2) > 0)
                for (var e, r, i = new Array(e), o = 0; o < e; ++o) i[o] = arguments[o + 2]; if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t); for (o = 0, e = (r = this._[t]).length; o < e; ++o) r[o].value.apply(n, i) }, apply: function(t, n, e) { if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t); for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e) } }; var ft = "http://www.w3.org/1999/xhtml",
        st = { svg: "http://www.w3.org/2000/svg", xhtml: ft, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" };

    function lt(t) { var n = t += "",
            e = n.indexOf(":"); return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), st.hasOwnProperty(n) ? { space: st[n], local: t } : t }

    function ht(t) { return function() { var n = this.ownerDocument,
                e = this.namespaceURI; return e === ft && n.documentElement.namespaceURI === ft ? n.createElement(t) : n.createElementNS(e, t) } }

    function dt(t) { return function() { return this.ownerDocument.createElementNS(t.space, t.local) } }

    function pt(t) { var n = lt(t); return (n.local ? dt : ht)(n) }

    function gt() {}

    function yt(t) { return null == t ? gt : function() { return this.querySelector(t) } }

    function vt(t) { return "object" == typeof t && "length" in t ? t : Array.from(t) }

    function _t() { return [] }

    function bt(t) { return null == t ? _t : function() { return this.querySelectorAll(t) } }

    function mt(t) { return function() { return this.matches(t) } }

    function xt(t) { return function(n) { return n.matches(t) } } var wt = Array.prototype.find;

    function Mt() { return this.firstElementChild } var At = Array.prototype.filter;

    function Tt() { return this.children }

    function St(t) { return new Array(t.length) }

    function Et(t, n) { this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n }

    function kt(t) { return function() { return t } }

    function Nt(t, n, e, r, i, o) { for (var a, u = 0, c = n.length, f = o.length; u < f; ++u)(a = n[u]) ? (a.__data__ = o[u], r[u] = a) : e[u] = new Et(t, o[u]); for (; u < c; ++u)(a = n[u]) && (i[u] = a) }

    function Ct(t, n, e, r, i, o, a) { var u, c, f, s = new Map,
            l = n.length,
            h = o.length,
            d = new Array(l); for (u = 0; u < l; ++u)(c = n[u]) && (d[u] = f = a.call(c, c.__data__, u, n) + "", s.has(f) ? i[u] = c : s.set(f, c)); for (u = 0; u < h; ++u) f = a.call(t, o[u], u, o) + "", (c = s.get(f)) ? (r[u] = c, c.__data__ = o[u], s.delete(f)) : e[u] = new Et(t, o[u]); for (u = 0; u < l; ++u)(c = n[u]) && s.get(d[u]) === c && (i[u] = c) }

    function Pt(t) { return t.__data__ }

    function zt(t, n) { return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN }

    function Dt(t) { return function() { this.removeAttribute(t) } }

    function qt(t) { return function() { this.removeAttributeNS(t.space, t.local) } }

    function Rt(t, n) { return function() { this.setAttribute(t, n) } }

    function Ft(t, n) { return function() { this.setAttributeNS(t.space, t.local, n) } }

    function Ot(t, n) { return function() { var e = n.apply(this, arguments);
            null == e ? this.removeAttribute(t) : this.setAttribute(t, e) } }

    function Ut(t, n) { return function() { var e = n.apply(this, arguments);
            null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e) } }

    function It(t) { return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView }

    function Bt(t) { return function() { this.style.removeProperty(t) } }

    function Yt(t, n, e) { return function() { this.style.setProperty(t, n, e) } }

    function Lt(t, n, e) { return function() { var r = n.apply(this, arguments);
            null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e) } }

    function jt(t, n) { return t.style.getPropertyValue(n) || It(t).getComputedStyle(t, null).getPropertyValue(n) }

    function Ht(t) { return function() { delete this[t] } }

    function Xt(t, n) { return function() { this[t] = n } }

    function Gt(t, n) { return function() { var e = n.apply(this, arguments);
            null == e ? delete this[t] : this[t] = e } }

    function Vt(t) { return t.trim().split(/^|\s+/) }

    function $t(t) { return t.classList || new Wt(t) }

    function Wt(t) { this._node = t, this._names = Vt(t.getAttribute("class") || "") }

    function Zt(t, n) { for (var e = $t(t), r = -1, i = n.length; ++r < i;) e.add(n[r]) }

    function Kt(t, n) { for (var e = $t(t), r = -1, i = n.length; ++r < i;) e.remove(n[r]) }

    function Qt(t) { return function() { Zt(this, t) } }

    function Jt(t) { return function() { Kt(this, t) } }

    function tn(t, n) { return function() {
            (n.apply(this, arguments) ? Zt : Kt)(this, t) } }

    function nn() { this.textContent = "" }

    function en(t) { return function() { this.textContent = t } }

    function rn(t) { return function() { var n = t.apply(this, arguments);
            this.textContent = null == n ? "" : n } }

    function on() { this.innerHTML = "" }

    function an(t) { return function() { this.innerHTML = t } }

    function un(t) { return function() { var n = t.apply(this, arguments);
            this.innerHTML = null == n ? "" : n } }

    function cn() { this.nextSibling && this.parentNode.appendChild(this) }

    function fn() { this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild) }

    function sn() { return null }

    function ln() { var t = this.parentNode;
        t && t.removeChild(this) }

    function hn() { var t = this.cloneNode(!1),
            n = this.parentNode; return n ? n.insertBefore(t, this.nextSibling) : t }

    function dn() { var t = this.cloneNode(!0),
            n = this.parentNode; return n ? n.insertBefore(t, this.nextSibling) : t }

    function pn(t) { return t.trim().split(/^|\s+/).map((function(t) { var n = "",
                e = t.indexOf("."); return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), { type: t, name: n } })) }

    function gn(t) { return function() { var n = this.__on; if (n) { for (var e, r = 0, i = -1, o = n.length; r < o; ++r) e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.options);++i ? n.length = i : delete this.__on } } }

    function yn(t, n, e) { return function() { var r, i = this.__on,
                o = function(t) { return function(n) { t.call(this, n, this.__data__) } }(n); if (i)
                for (var a = 0, u = i.length; a < u; ++a)
                    if ((r = i[a]).type === t.type && r.name === t.name) return this.removeEventListener(r.type, r.listener, r.options), this.addEventListener(r.type, r.listener = o, r.options = e), void(r.value = n);
            this.addEventListener(t.type, o, e), r = { type: t.type, name: t.name, value: n, listener: o, options: e }, i ? i.push(r) : this.__on = [r] } }

    function vn(t, n, e) { var r = It(t),
            i = r.CustomEvent; "function" == typeof i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i) }

    function _n(t, n) { return function() { return vn(this, t, n) } }

    function bn(t, n) { return function() { return vn(this, t, n.apply(this, arguments)) } } Et.prototype = { constructor: Et, appendChild: function(t) { return this._parent.insertBefore(t, this._next) }, insertBefore: function(t, n) { return this._parent.insertBefore(t, n) }, querySelector: function(t) { return this._parent.querySelector(t) }, querySelectorAll: function(t) { return this._parent.querySelectorAll(t) } }, Wt.prototype = { add: function(t) { this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" "))) }, remove: function(t) { var n = this._names.indexOf(t);
            n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" "))) }, contains: function(t) { return this._names.indexOf(t) >= 0 } }; var mn = [null];

    function xn(t, n) { this._groups = t, this._parents = n }

    function wn() { return new xn([
            [document.documentElement]
        ], mn) }

    function Mn(t) { return "string" == typeof t ? new xn([
            [document.querySelector(t)]
        ], [document.documentElement]) : new xn([
            [t]
        ], mn) } xn.prototype = wn.prototype = { constructor: xn, select: function(t) { "function" != typeof t && (t = yt(t)); for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                for (var o, a, u = n[i], c = u.length, f = r[i] = new Array(c), s = 0; s < c; ++s)(o = u[s]) && (a = t.call(o, o.__data__, s, u)) && ("__data__" in o && (a.__data__ = o.__data__), f[s] = a); return new xn(r, this._parents) }, selectAll: function(t) { t = "function" == typeof t ? function(t) { return function() { var n = t.apply(this, arguments); return null == n ? [] : vt(n) } }(t) : bt(t); for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
                for (var a, u = n[o], c = u.length, f = 0; f < c; ++f)(a = u[f]) && (r.push(t.call(a, a.__data__, f, u)), i.push(a)); return new xn(r, i) }, selectChild: function(t) { return this.select(null == t ? Mt : function(t) { return function() { return wt.call(this.children, t) } }("function" == typeof t ? t : xt(t))) }, selectChildren: function(t) { return this.selectAll(null == t ? Tt : function(t) { return function() { return At.call(this.children, t) } }("function" == typeof t ? t : xt(t))) }, filter: function(t) { "function" != typeof t && (t = mt(t)); for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                for (var o, a = n[i], u = a.length, c = r[i] = [], f = 0; f < u; ++f)(o = a[f]) && t.call(o, o.__data__, f, a) && c.push(o); return new xn(r, this._parents) }, data: function(t, n) { if (!arguments.length) return Array.from(this, Pt); var e = n ? Ct : Nt,
                r = this._parents,
                i = this._groups; "function" != typeof t && (t = kt(t)); for (var o = i.length, a = new Array(o), u = new Array(o), c = new Array(o), f = 0; f < o; ++f) { var s = r[f],
                    l = i[f],
                    h = l.length,
                    d = vt(t.call(s, s && s.__data__, f, r)),
                    p = d.length,
                    g = u[f] = new Array(p),
                    y = a[f] = new Array(p),
                    v = c[f] = new Array(h);
                e(s, l, g, y, v, d, n); for (var _, b, m = 0, x = 0; m < p; ++m)
                    if (_ = g[m]) { for (m >= x && (x = m + 1); !(b = y[x]) && ++x < p;);
                        _._next = b || null } } return (a = new xn(a, r))._enter = u, a._exit = c, a }, enter: function() { return new xn(this._enter || this._groups.map(St), this._parents) }, exit: function() { return new xn(this._exit || this._groups.map(St), this._parents) }, join: function(t, n, e) { var r = this.enter(),
                i = this,
                o = this.exit(); return r = "function" == typeof t ? t(r) : r.append(t + ""), null != n && (i = n(i)), null == e ? o.remove() : e(o), r && i ? r.merge(i).order() : i }, merge: function(t) { if (!(t instanceof xn)) throw new Error("invalid merge"); for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), u = 0; u < o; ++u)
                for (var c, f = n[u], s = e[u], l = f.length, h = a[u] = new Array(l), d = 0; d < l; ++d)(c = f[d] || s[d]) && (h[d] = c); for (; u < r; ++u) a[u] = n[u]; return new xn(a, this._parents) }, selection: function() { return this }, order: function() { for (var t = this._groups, n = -1, e = t.length; ++n < e;)
                for (var r, i = t[n], o = i.length - 1, a = i[o]; --o >= 0;)(r = i[o]) && (a && 4 ^ r.compareDocumentPosition(a) && a.parentNode.insertBefore(r, a), a = r); return this }, sort: function(t) {
            function n(n, e) { return n && e ? t(n.__data__, e.__data__) : !n - !e } t || (t = zt); for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) { for (var a, u = e[o], c = u.length, f = i[o] = new Array(c), s = 0; s < c; ++s)(a = u[s]) && (f[s] = a);
                f.sort(n) } return new xn(i, this._parents).order() }, call: function() { var t = arguments[0]; return arguments[0] = this, t.apply(null, arguments), this }, nodes: function() { return Array.from(this) }, node: function() { for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
                for (var r = t[n], i = 0, o = r.length; i < o; ++i) { var a = r[i]; if (a) return a }
            return null }, size: function() { let t = 0; for (const n of this) ++t; return t }, empty: function() { return !this.node() }, each: function(t) { for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
                for (var i, o = n[e], a = 0, u = o.length; a < u; ++a)(i = o[a]) && t.call(i, i.__data__, a, o); return this }, attr: function(t, n) { var e = lt(t); if (arguments.length < 2) { var r = this.node(); return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e) } return this.each((null == n ? e.local ? qt : Dt : "function" == typeof n ? e.local ? Ut : Ot : e.local ? Ft : Rt)(e, n)) }, style: function(t, n, e) { return arguments.length > 1 ? this.each((null == n ? Bt : "function" == typeof n ? Lt : Yt)(t, n, null == e ? "" : e)) : jt(this.node(), t) }, property: function(t, n) { return arguments.length > 1 ? this.each((null == n ? Ht : "function" == typeof n ? Gt : Xt)(t, n)) : this.node()[t] }, classed: function(t, n) { var e = Vt(t + ""); if (arguments.length < 2) { for (var r = $t(this.node()), i = -1, o = e.length; ++i < o;)
                    if (!r.contains(e[i])) return !1; return !0 } return this.each(("function" == typeof n ? tn : n ? Qt : Jt)(e, n)) }, text: function(t) { return arguments.length ? this.each(null == t ? nn : ("function" == typeof t ? rn : en)(t)) : this.node().textContent }, html: function(t) { return arguments.length ? this.each(null == t ? on : ("function" == typeof t ? un : an)(t)) : this.node().innerHTML }, raise: function() { return this.each(cn) }, lower: function() { return this.each(fn) }, append: function(t) { var n = "function" == typeof t ? t : pt(t); return this.select((function() { return this.appendChild(n.apply(this, arguments)) })) }, insert: function(t, n) { var e = "function" == typeof t ? t : pt(t),
                r = null == n ? sn : "function" == typeof n ? n : yt(n); return this.select((function() { return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null) })) }, remove: function() { return this.each(ln) }, clone: function(t) { return this.select(t ? dn : hn) }, datum: function(t) { return arguments.length ? this.property("__data__", t) : this.node().__data__ }, on: function(t, n, e) { var r, i, o = pn(t + ""),
                a = o.length; if (!(arguments.length < 2)) { for (u = n ? yn : gn, r = 0; r < a; ++r) this.each(u(o[r], n, e)); return this } var u = this.node().__on; if (u)
                for (var c, f = 0, s = u.length; f < s; ++f)
                    for (r = 0, c = u[f]; r < a; ++r)
                        if ((i = o[r]).type === c.type && i.name === c.name) return c.value }, dispatch: function(t, n) { return this.each(("function" == typeof n ? bn : _n)(t, n)) }, [Symbol.iterator]: function*() { for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
                for (var r, i = t[n], o = 0, a = i.length; o < a; ++o)(r = i[o]) && (yield r) } }; var An = 0;

    function Tn() { return new Sn }

    function Sn() { this._ = "@" + (++An).toString(36) }

    function En(t) { let n; for (; n = t.sourceEvent;) t = n; return t }

    function kn(t, n) { if (t = En(t), void 0 === n && (n = t.currentTarget), n) { var e = n.ownerSVGElement || n; if (e.createSVGPoint) { var r = e.createSVGPoint(); return r.x = t.clientX, r.y = t.clientY, [(r = r.matrixTransform(n.getScreenCTM().inverse())).x, r.y] } if (n.getBoundingClientRect) { var i = n.getBoundingClientRect(); return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop] } } return [t.pageX, t.pageY] }

    function Nn(t) { t.stopImmediatePropagation() }

    function Cn(t) { t.preventDefault(), t.stopImmediatePropagation() }

    function Pn(t) { var n = t.document.documentElement,
            e = Mn(t).on("dragstart.drag", Cn, !0); "onselectstart" in n ? e.on("selectstart.drag", Cn, !0) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none") }

    function zn(t, n) { var e = t.document.documentElement,
            r = Mn(t).on("dragstart.drag", null);
        n && (r.on("click.drag", Cn, !0), setTimeout((function() { r.on("click.drag", null) }), 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect) } Sn.prototype = Tn.prototype = { constructor: Sn, get: function(t) { for (var n = this._; !(n in t);)
                if (!(t = t.parentNode)) return; return t[n] }, set: function(t, n) { return t[this._] = n }, remove: function(t) { return this._ in t && delete t[this._] }, toString: function() { return this._ } }; var Dn = t => () => t;

    function qn(t, { sourceEvent: n, subject: e, target: r, identifier: i, active: o, x: a, y: u, dx: c, dy: f, dispatch: s }) { Object.defineProperties(this, { type: { value: t, enumerable: !0, configurable: !0 }, sourceEvent: { value: n, enumerable: !0, configurable: !0 }, subject: { value: e, enumerable: !0, configurable: !0 }, target: { value: r, enumerable: !0, configurable: !0 }, identifier: { value: i, enumerable: !0, configurable: !0 }, active: { value: o, enumerable: !0, configurable: !0 }, x: { value: a, enumerable: !0, configurable: !0 }, y: { value: u, enumerable: !0, configurable: !0 }, dx: { value: c, enumerable: !0, configurable: !0 }, dy: { value: f, enumerable: !0, configurable: !0 }, _: { value: s } }) }

    function Rn(t) { return !t.ctrlKey && !t.button }

    function Fn() { return this.parentNode }

    function On(t, n) { return null == n ? { x: t.x, y: t.y } : n }

    function Un() { return navigator.maxTouchPoints || "ontouchstart" in this }

    function In(t, n, e) { t.prototype = n.prototype = e, e.constructor = t }

    function Bn(t, n) { var e = Object.create(t.prototype); for (var r in n) e[r] = n[r]; return e }

    function Yn() {} qn.prototype.on = function() { var t = this._.on.apply(this._, arguments); return t === this._ ? this : t }; var Ln = .7,
        jn = 1 / Ln,
        Hn = "\\s*([+-]?\\d+)\\s*",
        Xn = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        Gn = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        Vn = /^#([0-9a-f]{3,8})$/,
        $n = new RegExp("^rgb\\(" + [Hn, Hn, Hn] + "\\)$"),
        Wn = new RegExp("^rgb\\(" + [Gn, Gn, Gn] + "\\)$"),
        Zn = new RegExp("^rgba\\(" + [Hn, Hn, Hn, Xn] + "\\)$"),
        Kn = new RegExp("^rgba\\(" + [Gn, Gn, Gn, Xn] + "\\)$"),
        Qn = new RegExp("^hsl\\(" + [Xn, Gn, Gn] + "\\)$"),
        Jn = new RegExp("^hsla\\(" + [Xn, Gn, Gn, Xn] + "\\)$"),
        te = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };

    function ne() { return this.rgb().formatHex() }

    function ee() { return this.rgb().formatRgb() }

    function re(t) { var n, e; return t = (t + "").trim().toLowerCase(), (n = Vn.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), 6 === e ? ie(n) : 3 === e ? new ce(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1) : 8 === e ? oe(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (255 & n) / 255) : 4 === e ? oe(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, ((15 & n) << 4 | 15 & n) / 255) : null) : (n = $n.exec(t)) ? new ce(n[1], n[2], n[3], 1) : (n = Wn.exec(t)) ? new ce(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = Zn.exec(t)) ? oe(n[1], n[2], n[3], n[4]) : (n = Kn.exec(t)) ? oe(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = Qn.exec(t)) ? he(n[1], n[2] / 100, n[3] / 100, 1) : (n = Jn.exec(t)) ? he(n[1], n[2] / 100, n[3] / 100, n[4]) : te.hasOwnProperty(t) ? ie(te[t]) : "transparent" === t ? new ce(NaN, NaN, NaN, 0) : null }

    function ie(t) { return new ce(t >> 16 & 255, t >> 8 & 255, 255 & t, 1) }

    function oe(t, n, e, r) { return r <= 0 && (t = n = e = NaN), new ce(t, n, e, r) }

    function ae(t) { return t instanceof Yn || (t = re(t)), t ? new ce((t = t.rgb()).r, t.g, t.b, t.opacity) : new ce }

    function ue(t, n, e, r) { return 1 === arguments.length ? ae(t) : new ce(t, n, e, null == r ? 1 : r) }

    function ce(t, n, e, r) { this.r = +t, this.g = +n, this.b = +e, this.opacity = +r }

    function fe() { return "#" + le(this.r) + le(this.g) + le(this.b) }

    function se() { var t = this.opacity; return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")") }

    function le(t) { return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16) }

    function he(t, n, e, r) { return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new ge(t, n, e, r) }

    function de(t) { if (t instanceof ge) return new ge(t.h, t.s, t.l, t.opacity); if (t instanceof Yn || (t = re(t)), !t) return new ge; if (t instanceof ge) return t; var n = (t = t.rgb()).r / 255,
            e = t.g / 255,
            r = t.b / 255,
            i = Math.min(n, e, r),
            o = Math.max(n, e, r),
            a = NaN,
            u = o - i,
            c = (o + i) / 2; return u ? (a = n === o ? (e - r) / u + 6 * (e < r) : e === o ? (r - n) / u + 2 : (n - e) / u + 4, u /= c < .5 ? o + i : 2 - o - i, a *= 60) : u = c > 0 && c < 1 ? 0 : a, new ge(a, u, c, t.opacity) }

    function pe(t, n, e, r) { return 1 === arguments.length ? de(t) : new ge(t, n, e, null == r ? 1 : r) }

    function ge(t, n, e, r) { this.h = +t, this.s = +n, this.l = +e, this.opacity = +r }

    function ye(t, n, e) { return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) } In(Yn, re, { copy: function(t) { return Object.assign(new this.constructor, this, t) }, displayable: function() { return this.rgb().displayable() }, hex: ne, formatHex: ne, formatHsl: function() { return de(this).formatHsl() }, formatRgb: ee, toString: ee }), In(ce, ue, Bn(Yn, { brighter: function(t) { return t = null == t ? jn : Math.pow(jn, t), new ce(this.r * t, this.g * t, this.b * t, this.opacity) }, darker: function(t) { return t = null == t ? Ln : Math.pow(Ln, t), new ce(this.r * t, this.g * t, this.b * t, this.opacity) }, rgb: function() { return this }, displayable: function() { return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1 }, hex: fe, formatHex: fe, formatRgb: se, toString: se })), In(ge, pe, Bn(Yn, { brighter: function(t) { return t = null == t ? jn : Math.pow(jn, t), new ge(this.h, this.s, this.l * t, this.opacity) }, darker: function(t) { return t = null == t ? Ln : Math.pow(Ln, t), new ge(this.h, this.s, this.l * t, this.opacity) }, rgb: function() { var t = this.h % 360 + 360 * (this.h < 0),
                n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                e = this.l,
                r = e + (e < .5 ? e : 1 - e) * n,
                i = 2 * e - r; return new ce(ye(t >= 240 ? t - 240 : t + 120, i, r), ye(t, i, r), ye(t < 120 ? t + 240 : t - 120, i, r), this.opacity) }, displayable: function() { return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1 }, formatHsl: function() { var t = this.opacity; return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "hsl(" : "hsla(") + (this.h || 0) + ", " + 100 * (this.s || 0) + "%, " + 100 * (this.l || 0) + "%" + (1 === t ? ")" : ", " + t + ")") } })); const ve = Math.PI / 180,
        _e = 180 / Math.PI,
        be = .96422,
        me = .82521,
        xe = 4 / 29,
        we = 6 / 29,
        Me = 3 * we * we;

    function Ae(t) { if (t instanceof Se) return new Se(t.l, t.a, t.b, t.opacity); if (t instanceof De) return qe(t);
        t instanceof ce || (t = ae(t)); var n, e, r = Ce(t.r),
            i = Ce(t.g),
            o = Ce(t.b),
            a = Ee((.2225045 * r + .7168786 * i + .0606169 * o) / 1); return r === i && i === o ? n = e = a : (n = Ee((.4360747 * r + .3850649 * i + .1430804 * o) / be), e = Ee((.0139322 * r + .0971045 * i + .7141733 * o) / me)), new Se(116 * a - 16, 500 * (n - a), 200 * (a - e), t.opacity) }

    function Te(t, n, e, r) { return 1 === arguments.length ? Ae(t) : new Se(t, n, e, null == r ? 1 : r) }

    function Se(t, n, e, r) { this.l = +t, this.a = +n, this.b = +e, this.opacity = +r }

    function Ee(t) { return t > .008856451679035631 ? Math.pow(t, 1 / 3) : t / Me + xe }

    function ke(t) { return t > we ? t * t * t : Me * (t - xe) }

    function Ne(t) { return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055) }

    function Ce(t) { return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4) }

    function Pe(t) { if (t instanceof De) return new De(t.h, t.c, t.l, t.opacity); if (t instanceof Se || (t = Ae(t)), 0 === t.a && 0 === t.b) return new De(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity); var n = Math.atan2(t.b, t.a) * _e; return new De(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity) }

    function ze(t, n, e, r) { return 1 === arguments.length ? Pe(t) : new De(t, n, e, null == r ? 1 : r) }

    function De(t, n, e, r) { this.h = +t, this.c = +n, this.l = +e, this.opacity = +r }

    function qe(t) { if (isNaN(t.h)) return new Se(t.l, 0, 0, t.opacity); var n = t.h * ve; return new Se(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity) } In(Se, Te, Bn(Yn, { brighter: function(t) { return new Se(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity) }, darker: function(t) { return new Se(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity) }, rgb: function() { var t = (this.l + 16) / 116,
                n = isNaN(this.a) ? t : t + this.a / 500,
                e = isNaN(this.b) ? t : t - this.b / 200; return new ce(Ne(3.1338561 * (n = be * ke(n)) - 1.6168667 * (t = 1 * ke(t)) - .4906146 * (e = me * ke(e))), Ne(-.9787684 * n + 1.9161415 * t + .033454 * e), Ne(.0719453 * n - .2289914 * t + 1.4052427 * e), this.opacity) } })), In(De, ze, Bn(Yn, { brighter: function(t) { return new De(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity) }, darker: function(t) { return new De(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity) }, rgb: function() { return qe(this).rgb() } })); var Re = -.14861,
        Fe = 1.78277,
        Oe = -.29227,
        Ue = -.90649,
        Ie = 1.97294,
        Be = Ie * Ue,
        Ye = Ie * Fe,
        Le = Fe * Oe - Ue * Re;

    function je(t) { if (t instanceof Xe) return new Xe(t.h, t.s, t.l, t.opacity);
        t instanceof ce || (t = ae(t)); var n = t.r / 255,
            e = t.g / 255,
            r = t.b / 255,
            i = (Le * r + Be * n - Ye * e) / (Le + Be - Ye),
            o = r - i,
            a = (Ie * (e - i) - Oe * o) / Ue,
            u = Math.sqrt(a * a + o * o) / (Ie * i * (1 - i)),
            c = u ? Math.atan2(a, o) * _e - 120 : NaN; return new Xe(c < 0 ? c + 360 : c, u, i, t.opacity) }

    function He(t, n, e, r) { return 1 === arguments.length ? je(t) : new Xe(t, n, e, null == r ? 1 : r) }

    function Xe(t, n, e, r) { this.h = +t, this.s = +n, this.l = +e, this.opacity = +r }

    function Ge(t, n, e, r, i) { var o = t * t,
            a = o * t; return ((1 - 3 * t + 3 * o - a) * n + (4 - 6 * o + 3 * a) * e + (1 + 3 * t + 3 * o - 3 * a) * r + a * i) / 6 }

    function Ve(t) { var n = t.length - 1; return function(e) { var r = e <= 0 ? e = 0 : e >= 1 ? (e = 1, n - 1) : Math.floor(e * n),
                i = t[r],
                o = t[r + 1],
                a = r > 0 ? t[r - 1] : 2 * i - o,
                u = r < n - 1 ? t[r + 2] : 2 * o - i; return Ge((e - r / n) * n, a, i, o, u) } }

    function $e(t) { var n = t.length; return function(e) { var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
                i = t[(r + n - 1) % n],
                o = t[r % n],
                a = t[(r + 1) % n],
                u = t[(r + 2) % n]; return Ge((e - r / n) * n, i, o, a, u) } } In(Xe, He, Bn(Yn, { brighter: function(t) { return t = null == t ? jn : Math.pow(jn, t), new Xe(this.h, this.s, this.l * t, this.opacity) }, darker: function(t) { return t = null == t ? Ln : Math.pow(Ln, t), new Xe(this.h, this.s, this.l * t, this.opacity) }, rgb: function() { var t = isNaN(this.h) ? 0 : (this.h + 120) * ve,
                n = +this.l,
                e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
                r = Math.cos(t),
                i = Math.sin(t); return new ce(255 * (n + e * (Re * r + Fe * i)), 255 * (n + e * (Oe * r + Ue * i)), 255 * (n + e * (Ie * r)), this.opacity) } })); var We = t => () => t;

    function Ze(t, n) { return function(e) { return t + e * n } }

    function Ke(t, n) { var e = n - t; return e ? Ze(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : We(isNaN(t) ? n : t) }

    function Qe(t) { return 1 == (t = +t) ? Je : function(n, e) { return e - n ? function(t, n, e) { return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e,
                    function(r) { return Math.pow(t + r * n, e) } }(n, e, t) : We(isNaN(n) ? e : n) } }

    function Je(t, n) { var e = n - t; return e ? Ze(t, e) : We(isNaN(t) ? n : t) } var tr = function t(n) { var e = Qe(n);

        function r(t, n) { var r = e((t = ue(t)).r, (n = ue(n)).r),
                i = e(t.g, n.g),
                o = e(t.b, n.b),
                a = Je(t.opacity, n.opacity); return function(n) { return t.r = r(n), t.g = i(n), t.b = o(n), t.opacity = a(n), t + "" } } return r.gamma = t, r }(1);

    function nr(t) { return function(n) { var e, r, i = n.length,
                o = new Array(i),
                a = new Array(i),
                u = new Array(i); for (e = 0; e < i; ++e) r = ue(n[e]), o[e] = r.r || 0, a[e] = r.g || 0, u[e] = r.b || 0; return o = t(o), a = t(a), u = t(u), r.opacity = 1,
                function(t) { return r.r = o(t), r.g = a(t), r.b = u(t), r + "" } } } var er = nr(Ve),
        rr = nr($e);

    function ir(t, n) { n || (n = []); var e, r = t ? Math.min(n.length, t.length) : 0,
            i = n.slice(); return function(o) { for (e = 0; e < r; ++e) i[e] = t[e] * (1 - o) + n[e] * o; return i } }

    function or(t) { return ArrayBuffer.isView(t) && !(t instanceof DataView) }

    function ar(t, n) { var e, r = n ? n.length : 0,
            i = t ? Math.min(r, t.length) : 0,
            o = new Array(i),
            a = new Array(r); for (e = 0; e < i; ++e) o[e] = dr(t[e], n[e]); for (; e < r; ++e) a[e] = n[e]; return function(t) { for (e = 0; e < i; ++e) a[e] = o[e](t); return a } }

    function ur(t, n) { var e = new Date; return t = +t, n = +n,
            function(r) { return e.setTime(t * (1 - r) + n * r), e } }

    function cr(t, n) { return t = +t, n = +n,
            function(e) { return t * (1 - e) + n * e } }

    function fr(t, n) { var e, r = {},
            i = {}; for (e in null !== t && "object" == typeof t || (t = {}), null !== n && "object" == typeof n || (n = {}), n) e in t ? r[e] = dr(t[e], n[e]) : i[e] = n[e]; return function(t) { for (e in r) i[e] = r[e](t); return i } } var sr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        lr = new RegExp(sr.source, "g");

    function hr(t, n) { var e, r, i, o = sr.lastIndex = lr.lastIndex = 0,
            a = -1,
            u = [],
            c = []; for (t += "", n += "";
            (e = sr.exec(t)) && (r = lr.exec(n));)(i = r.index) > o && (i = n.slice(o, i), u[a] ? u[a] += i : u[++a] = i), (e = e[0]) === (r = r[0]) ? u[a] ? u[a] += r : u[++a] = r : (u[++a] = null, c.push({ i: a, x: cr(e, r) })), o = lr.lastIndex; return o < n.length && (i = n.slice(o), u[a] ? u[a] += i : u[++a] = i), u.length < 2 ? c[0] ? function(t) { return function(n) { return t(n) + "" } }(c[0].x) : function(t) { return function() { return t } }(n) : (n = c.length, function(t) { for (var e, r = 0; r < n; ++r) u[(e = c[r]).i] = e.x(t); return u.join("") }) }

    function dr(t, n) { var e, r = typeof n; return null == n || "boolean" === r ? We(n) : ("number" === r ? cr : "string" === r ? (e = re(n)) ? (n = e, tr) : hr : n instanceof re ? tr : n instanceof Date ? ur : or(n) ? ir : Array.isArray(n) ? ar : "function" != typeof n.valueOf && "function" != typeof n.toString || isNaN(n) ? fr : cr)(t, n) }

    function pr(t, n) { return t = +t, n = +n,
            function(e) { return Math.round(t * (1 - e) + n * e) } } var gr, yr = 180 / Math.PI,
        vr = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };

    function _r(t, n, e, r, i, o) { var a, u, c; return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (c = t * e + n * r) && (e -= t * c, r -= n * c), (u = Math.sqrt(e * e + r * r)) && (e /= u, r /= u, c /= u), t * r < n * e && (t = -t, n = -n, c = -c, a = -a), { translateX: i, translateY: o, rotate: Math.atan2(n, t) * yr, skewX: Math.atan(c) * yr, scaleX: a, scaleY: u } }

    function br(t, n, e, r) {
        function i(t) { return t.length ? t.pop() + " " : "" } return function(o, a) { var u = [],
                c = []; return o = t(o), a = t(a),
                function(t, r, i, o, a, u) { if (t !== i || r !== o) { var c = a.push("translate(", null, n, null, e);
                        u.push({ i: c - 4, x: cr(t, i) }, { i: c - 2, x: cr(r, o) }) } else(i || o) && a.push("translate(" + i + n + o + e) }(o.translateX, o.translateY, a.translateX, a.translateY, u, c),
                function(t, n, e, o) { t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), o.push({ i: e.push(i(e) + "rotate(", null, r) - 2, x: cr(t, n) })) : n && e.push(i(e) + "rotate(" + n + r) }(o.rotate, a.rotate, u, c),
                function(t, n, e, o) { t !== n ? o.push({ i: e.push(i(e) + "skewX(", null, r) - 2, x: cr(t, n) }) : n && e.push(i(e) + "skewX(" + n + r) }(o.skewX, a.skewX, u, c),
                function(t, n, e, r, o, a) { if (t !== e || n !== r) { var u = o.push(i(o) + "scale(", null, ",", null, ")");
                        a.push({ i: u - 4, x: cr(t, e) }, { i: u - 2, x: cr(n, r) }) } else 1 === e && 1 === r || o.push(i(o) + "scale(" + e + "," + r + ")") }(o.scaleX, o.scaleY, a.scaleX, a.scaleY, u, c), o = a = null,
                function(t) { for (var n, e = -1, r = c.length; ++e < r;) u[(n = c[e]).i] = n.x(t); return u.join("") } } } var mr = br((function(t) { const n = new("function" == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix)(t + ""); return n.isIdentity ? vr : _r(n.a, n.b, n.c, n.d, n.e, n.f) }), "px, ", "px)", "deg)"),
        xr = br((function(t) { return null == t ? vr : (gr || (gr = document.createElementNS("http://www.w3.org/2000/svg", "g")), gr.setAttribute("transform", t), (t = gr.transform.baseVal.consolidate()) ? _r((t = t.matrix).a, t.b, t.c, t.d, t.e, t.f) : vr) }), ", ", ")", ")");

    function wr(t) { return ((t = Math.exp(t)) + 1 / t) / 2 } var Mr = function t(n, e, r) {
        function i(t, i) { var o, a, u = t[0],
                c = t[1],
                f = t[2],
                s = i[0],
                l = i[1],
                h = i[2],
                d = s - u,
                p = l - c,
                g = d * d + p * p; if (g < 1e-12) a = Math.log(h / f) / n, o = function(t) { return [u + t * d, c + t * p, f * Math.exp(n * t * a)] };
            else { var y = Math.sqrt(g),
                    v = (h * h - f * f + r * g) / (2 * f * e * y),
                    _ = (h * h - f * f - r * g) / (2 * h * e * y),
                    b = Math.log(Math.sqrt(v * v + 1) - v),
                    m = Math.log(Math.sqrt(_ * _ + 1) - _);
                a = (m - b) / n, o = function(t) { var r = t * a,
                        i = wr(b),
                        o = f / (e * y) * (i * function(t) { return ((t = Math.exp(2 * t)) - 1) / (t + 1) }(n * r + b) - function(t) { return ((t = Math.exp(t)) - 1 / t) / 2 }(b)); return [u + o * d, c + o * p, f * i / wr(n * r + b)] } } return o.duration = 1e3 * a * n / Math.SQRT2, o } return i.rho = function(n) { var e = Math.max(.001, +n),
                r = e * e; return t(e, r, r * r) }, i }(Math.SQRT2, 2, 4);

    function Ar(t) { return function(n, e) { var r = t((n = pe(n)).h, (e = pe(e)).h),
                i = Je(n.s, e.s),
                o = Je(n.l, e.l),
                a = Je(n.opacity, e.opacity); return function(t) { return n.h = r(t), n.s = i(t), n.l = o(t), n.opacity = a(t), n + "" } } } var Tr = Ar(Ke),
        Sr = Ar(Je);

    function Er(t) { return function(n, e) { var r = t((n = ze(n)).h, (e = ze(e)).h),
                i = Je(n.c, e.c),
                o = Je(n.l, e.l),
                a = Je(n.opacity, e.opacity); return function(t) { return n.h = r(t), n.c = i(t), n.l = o(t), n.opacity = a(t), n + "" } } } var kr = Er(Ke),
        Nr = Er(Je);

    function Cr(t) { return function n(e) {
            function r(n, r) { var i = t((n = He(n)).h, (r = He(r)).h),
                    o = Je(n.s, r.s),
                    a = Je(n.l, r.l),
                    u = Je(n.opacity, r.opacity); return function(t) { return n.h = i(t), n.s = o(t), n.l = a(Math.pow(t, e)), n.opacity = u(t), n + "" } } return e = +e, r.gamma = n, r }(1) } var Pr = Cr(Ke),
        zr = Cr(Je);

    function Dr(t, n) { void 0 === n && (n = t, t = dr); for (var e = 0, r = n.length - 1, i = n[0], o = new Array(r < 0 ? 0 : r); e < r;) o[e] = t(i, i = n[++e]); return function(t) { var n = Math.max(0, Math.min(r - 1, Math.floor(t *= r))); return o[n](t - n) } } var qr, Rr, Fr = 0,
        Or = 0,
        Ur = 0,
        Ir = 0,
        Br = 0,
        Yr = 0,
        Lr = "object" == typeof performance && performance.now ? performance : Date,
        jr = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) { setTimeout(t, 17) };

    function Hr() { return Br || (jr(Xr), Br = Lr.now() + Yr) }

    function Xr() { Br = 0 }

    function Gr() { this._call = this._time = this._next = null }

    function Vr(t, n, e) { var r = new Gr; return r.restart(t, n, e), r }

    function $r() { Hr(), ++Fr; for (var t, n = qr; n;)(t = Br - n._time) >= 0 && n._call.call(null, t), n = n._next;--Fr }

    function Wr() { Br = (Ir = Lr.now()) + Yr, Fr = Or = 0; try { $r() } finally { Fr = 0,
                function() { var t, n, e = qr,
                        r = 1 / 0; for (; e;) e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : qr = n);
                    Rr = t, Kr(r) }(), Br = 0 } }

    function Zr() { var t = Lr.now(),
            n = t - Ir;
        n > 1e3 && (Yr -= n, Ir = t) }

    function Kr(t) { Fr || (Or && (Or = clearTimeout(Or)), t - Br > 24 ? (t < 1 / 0 && (Or = setTimeout(Wr, t - Lr.now() - Yr)), Ur && (Ur = clearInterval(Ur))) : (Ur || (Ir = Lr.now(), Ur = setInterval(Zr, 1e3)), Fr = 1, jr(Wr))) }

    function Qr(t, n, e) { var r = new Gr; return n = null == n ? 0 : +n, r.restart(e => { r.stop(), t(e + n) }, n, e), r } Gr.prototype = Vr.prototype = { constructor: Gr, restart: function(t, n, e) { if ("function" != typeof t) throw new TypeError("callback is not a function");
            e = (null == e ? Hr() : +e) + (null == n ? 0 : +n), this._next || Rr === this || (Rr ? Rr._next = this : qr = this, Rr = this), this._call = t, this._time = e, Kr() }, stop: function() { this._call && (this._call = null, this._time = 1 / 0, Kr()) } }; var Jr = it("start", "end", "cancel", "interrupt"),
        ti = [];

    function ni(t, n, e, r, i, o) { var a = t.__transition; if (a) { if (e in a) return } else t.__transition = {};! function(t, n, e) { var r, i = t.__transition;

            function o(t) { e.state = 1, e.timer.restart(a, e.delay, e.time), e.delay <= t && a(t - e.delay) }

            function a(o) { var f, s, l, h; if (1 !== e.state) return c(); for (f in i)
                    if ((h = i[f]).name === e.name) { if (3 === h.state) return Qr(a);
                        4 === h.state ? (h.state = 6, h.timer.stop(), h.on.call("interrupt", t, t.__data__, h.index, h.group), delete i[f]) : +f < n && (h.state = 6, h.timer.stop(), h.on.call("cancel", t, t.__data__, h.index, h.group), delete i[f]) } if (Qr((function() { 3 === e.state && (e.state = 4, e.timer.restart(u, e.delay, e.time), u(o)) })), e.state = 2, e.on.call("start", t, t.__data__, e.index, e.group), 2 === e.state) { for (e.state = 3, r = new Array(l = e.tween.length), f = 0, s = -1; f < l; ++f)(h = e.tween[f].value.call(t, t.__data__, e.index, e.group)) && (r[++s] = h);
                    r.length = s + 1 } }

            function u(n) { for (var i = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(c), e.state = 5, 1), o = -1, a = r.length; ++o < a;) r[o].call(t, i);
                5 === e.state && (e.on.call("end", t, t.__data__, e.index, e.group), c()) }

            function c() { for (var r in e.state = 6, e.timer.stop(), delete i[n], i) return;
                delete t.__transition } i[n] = e, e.timer = Vr(o, 0, e.time) }(t, e, { name: n, index: r, group: i, on: Jr, tween: ti, time: o.time, delay: o.delay, duration: o.duration, ease: o.ease, timer: null, state: 0 }) }

    function ei(t, n) { var e = ii(t, n); if (e.state > 0) throw new Error("too late; already scheduled"); return e }

    function ri(t, n) { var e = ii(t, n); if (e.state > 3) throw new Error("too late; already running"); return e }

    function ii(t, n) { var e = t.__transition; if (!e || !(e = e[n])) throw new Error("transition not found"); return e }

    function oi(t, n) { var e, r, i, o = t.__transition,
            a = !0; if (o) { for (i in n = null == n ? null : n + "", o)(e = o[i]).name === n ? (r = e.state > 2 && e.state < 5, e.state = 6, e.timer.stop(), e.on.call(r ? "interrupt" : "cancel", t, t.__data__, e.index, e.group), delete o[i]) : a = !1;
            a && delete t.__transition } }

    function ai(t, n) { var e, r; return function() { var i = ri(this, t),
                o = i.tween; if (o !== e)
                for (var a = 0, u = (r = e = o).length; a < u; ++a)
                    if (r[a].name === n) {
                        (r = r.slice()).splice(a, 1); break } i.tween = r } }

    function ui(t, n, e) { var r, i; if ("function" != typeof e) throw new Error; return function() { var o = ri(this, t),
                a = o.tween; if (a !== r) { i = (r = a).slice(); for (var u = { name: n, value: e }, c = 0, f = i.length; c < f; ++c)
                    if (i[c].name === n) { i[c] = u; break } c === f && i.push(u) } o.tween = i } }

    function ci(t, n, e) { var r = t._id; return t.each((function() { var t = ri(this, r);
                (t.value || (t.value = {}))[n] = e.apply(this, arguments) })),
            function(t) { return ii(t, r).value[n] } }

    function fi(t, n) { var e; return ("number" == typeof n ? cr : n instanceof re ? tr : (e = re(n)) ? (n = e, tr) : hr)(t, n) }

    function si(t) { return function() { this.removeAttribute(t) } }

    function li(t) { return function() { this.removeAttributeNS(t.space, t.local) } }

    function hi(t, n, e) { var r, i, o = e + ""; return function() { var a = this.getAttribute(t); return a === o ? null : a === r ? i : i = n(r = a, e) } }

    function di(t, n, e) { var r, i, o = e + ""; return function() { var a = this.getAttributeNS(t.space, t.local); return a === o ? null : a === r ? i : i = n(r = a, e) } }

    function pi(t, n, e) { var r, i, o; return function() { var a, u, c = e(this); if (null != c) return (a = this.getAttribute(t)) === (u = c + "") ? null : a === r && u === i ? o : (i = u, o = n(r = a, c));
            this.removeAttribute(t) } }

    function gi(t, n, e) { var r, i, o; return function() { var a, u, c = e(this); if (null != c) return (a = this.getAttributeNS(t.space, t.local)) === (u = c + "") ? null : a === r && u === i ? o : (i = u, o = n(r = a, c));
            this.removeAttributeNS(t.space, t.local) } }

    function yi(t, n) { return function(e) { this.setAttribute(t, n.call(this, e)) } }

    function vi(t, n) { return function(e) { this.setAttributeNS(t.space, t.local, n.call(this, e)) } }

    function _i(t, n) { var e, r;

        function i() { var i = n.apply(this, arguments); return i !== r && (e = (r = i) && vi(t, i)), e } return i._value = n, i }

    function bi(t, n) { var e, r;

        function i() { var i = n.apply(this, arguments); return i !== r && (e = (r = i) && yi(t, i)), e } return i._value = n, i }

    function mi(t, n) { return function() { ei(this, t).delay = +n.apply(this, arguments) } }

    function xi(t, n) { return n = +n,
            function() { ei(this, t).delay = n } }

    function wi(t, n) { return function() { ri(this, t).duration = +n.apply(this, arguments) } }

    function Mi(t, n) { return n = +n,
            function() { ri(this, t).duration = n } }

    function Ai(t, n) { if ("function" != typeof n) throw new Error; return function() { ri(this, t).ease = n } }

    function Ti(t, n, e) { var r, i, o = function(t) { return (t + "").trim().split(/^|\s+/).every((function(t) { var n = t.indexOf("."); return n >= 0 && (t = t.slice(0, n)), !t || "start" === t })) }(n) ? ei : ri; return function() { var a = o(this, t),
                u = a.on;
            u !== r && (i = (r = u).copy()).on(n, e), a.on = i } } var Si = wn.prototype.constructor;

    function Ei(t) { return function() { this.style.removeProperty(t) } }

    function ki(t, n, e) { return function(r) { this.style.setProperty(t, n.call(this, r), e) } }

    function Ni(t, n, e) { var r, i;

        function o() { var o = n.apply(this, arguments); return o !== i && (r = (i = o) && ki(t, o, e)), r } return o._value = n, o }

    function Ci(t) { return function(n) { this.textContent = t.call(this, n) } }

    function Pi(t) { var n, e;

        function r() { var r = t.apply(this, arguments); return r !== e && (n = (e = r) && Ci(r)), n } return r._value = t, r } var zi = 0;

    function Di(t, n, e, r) { this._groups = t, this._parents = n, this._name = e, this._id = r }

    function qi(t) { return wn().transition(t) }

    function Ri() { return ++zi } var Fi = wn.prototype;
    Di.prototype = qi.prototype = { constructor: Di, select: function(t) { var n = this._name,
                e = this._id; "function" != typeof t && (t = yt(t)); for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
                for (var u, c, f = r[a], s = f.length, l = o[a] = new Array(s), h = 0; h < s; ++h)(u = f[h]) && (c = t.call(u, u.__data__, h, f)) && ("__data__" in u && (c.__data__ = u.__data__), l[h] = c, ni(l[h], n, e, h, l, ii(u, e))); return new Di(o, this._parents, n, e) }, selectAll: function(t) { var n = this._name,
                e = this._id; "function" != typeof t && (t = bt(t)); for (var r = this._groups, i = r.length, o = [], a = [], u = 0; u < i; ++u)
                for (var c, f = r[u], s = f.length, l = 0; l < s; ++l)
                    if (c = f[l]) { for (var h, d = t.call(c, c.__data__, l, f), p = ii(c, e), g = 0, y = d.length; g < y; ++g)(h = d[g]) && ni(h, n, e, g, d, p);
                        o.push(d), a.push(c) } return new Di(o, a, n, e) }, filter: function(t) { "function" != typeof t && (t = mt(t)); for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                for (var o, a = n[i], u = a.length, c = r[i] = [], f = 0; f < u; ++f)(o = a[f]) && t.call(o, o.__data__, f, a) && c.push(o); return new Di(r, this._parents, this._name, this._id) }, merge: function(t) { if (t._id !== this._id) throw new Error; for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), u = 0; u < o; ++u)
                for (var c, f = n[u], s = e[u], l = f.length, h = a[u] = new Array(l), d = 0; d < l; ++d)(c = f[d] || s[d]) && (h[d] = c); for (; u < r; ++u) a[u] = n[u]; return new Di(a, this._parents, this._name, this._id) }, selection: function() { return new Si(this._groups, this._parents) }, transition: function() { for (var t = this._name, n = this._id, e = Ri(), r = this._groups, i = r.length, o = 0; o < i; ++o)
                for (var a, u = r[o], c = u.length, f = 0; f < c; ++f)
                    if (a = u[f]) { var s = ii(a, n);
                        ni(a, t, e, f, u, { time: s.time + s.delay + s.duration, delay: 0, duration: s.duration, ease: s.ease }) } return new Di(r, this._parents, t, e) }, call: Fi.call, nodes: Fi.nodes, node: Fi.node, size: Fi.size, empty: Fi.empty, each: Fi.each, on: function(t, n) { var e = this._id; return arguments.length < 2 ? ii(this.node(), e).on.on(t) : this.each(Ti(e, t, n)) }, attr: function(t, n) { var e = lt(t),
                r = "transform" === e ? xr : fi; return this.attrTween(t, "function" == typeof n ? (e.local ? gi : pi)(e, r, ci(this, "attr." + t, n)) : null == n ? (e.local ? li : si)(e) : (e.local ? di : hi)(e, r, n)) }, attrTween: function(t, n) { var e = "attr." + t; if (arguments.length < 2) return (e = this.tween(e)) && e._value; if (null == n) return this.tween(e, null); if ("function" != typeof n) throw new Error; var r = lt(t); return this.tween(e, (r.local ? _i : bi)(r, n)) }, style: function(t, n, e) { var r = "transform" == (t += "") ? mr : fi; return null == n ? this.styleTween(t, function(t, n) { var e, r, i; return function() { var o = jt(this, t),
                        a = (this.style.removeProperty(t), jt(this, t)); return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a) } }(t, r)).on("end.style." + t, Ei(t)) : "function" == typeof n ? this.styleTween(t, function(t, n, e) { var r, i, o; return function() { var a = jt(this, t),
                        u = e(this),
                        c = u + ""; return null == u && (this.style.removeProperty(t), c = u = jt(this, t)), a === c ? null : a === r && c === i ? o : (i = c, o = n(r = a, u)) } }(t, r, ci(this, "style." + t, n))).each(function(t, n) { var e, r, i, o, a = "style." + n,
                    u = "end." + a; return function() { var c = ri(this, t),
                        f = c.on,
                        s = null == c.value[a] ? o || (o = Ei(n)) : void 0;
                    f === e && i === s || (r = (e = f).copy()).on(u, i = s), c.on = r } }(this._id, t)) : this.styleTween(t, function(t, n, e) { var r, i, o = e + ""; return function() { var a = jt(this, t); return a === o ? null : a === r ? i : i = n(r = a, e) } }(t, r, n), e).on("end.style." + t, null) }, styleTween: function(t, n, e) { var r = "style." + (t += ""); if (arguments.length < 2) return (r = this.tween(r)) && r._value; if (null == n) return this.tween(r, null); if ("function" != typeof n) throw new Error; return this.tween(r, Ni(t, n, null == e ? "" : e)) }, text: function(t) { return this.tween("text", "function" == typeof t ? function(t) { return function() { var n = t(this);
                    this.textContent = null == n ? "" : n } }(ci(this, "text", t)) : function(t) { return function() { this.textContent = t } }(null == t ? "" : t + "")) }, textTween: function(t) { var n = "text"; if (arguments.length < 1) return (n = this.tween(n)) && n._value; if (null == t) return this.tween(n, null); if ("function" != typeof t) throw new Error; return this.tween(n, Pi(t)) }, remove: function() { return this.on("end.remove", function(t) { return function() { var n = this.parentNode; for (var e in this.__transition)
                        if (+e !== t) return;
                    n && n.removeChild(this) } }(this._id)) }, tween: function(t, n) { var e = this._id; if (t += "", arguments.length < 2) { for (var r, i = ii(this.node(), e).tween, o = 0, a = i.length; o < a; ++o)
                    if ((r = i[o]).name === t) return r.value; return null } return this.each((null == n ? ai : ui)(e, t, n)) }, delay: function(t) { var n = this._id; return arguments.length ? this.each(("function" == typeof t ? mi : xi)(n, t)) : ii(this.node(), n).delay }, duration: function(t) { var n = this._id; return arguments.length ? this.each(("function" == typeof t ? wi : Mi)(n, t)) : ii(this.node(), n).duration }, ease: function(t) { var n = this._id; return arguments.length ? this.each(Ai(n, t)) : ii(this.node(), n).ease }, easeVarying: function(t) { if ("function" != typeof t) throw new Error; return this.each(function(t, n) { return function() { var e = n.apply(this, arguments); if ("function" != typeof e) throw new Error;
                    ri(this, t).ease = e } }(this._id, t)) }, end: function() { var t, n, e = this,
                r = e._id,
                i = e.size(); return new Promise((function(o, a) { var u = { value: a },
                    c = { value: function() { 0 == --i && o() } };
                e.each((function() { var e = ri(this, r),
                        i = e.on;
                    i !== t && ((n = (t = i).copy())._.cancel.push(u), n._.interrupt.push(u), n._.end.push(c)), e.on = n })), 0 === i && o() })) }, [Symbol.iterator]: Fi[Symbol.iterator] };

    function Oi(t) { return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2 }

    function Ui(t) { return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2 } var Ii = function t(n) {
            function e(t) { return Math.pow(t, n) } return n = +n, e.exponent = t, e }(3),
        Bi = function t(n) {
            function e(t) { return 1 - Math.pow(1 - t, n) } return n = +n, e.exponent = t, e }(3),
        Yi = function t(n) {
            function e(t) { return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2 } return n = +n, e.exponent = t, e }(3),
        Li = Math.PI,
        ji = Li / 2;

    function Hi(t) { return (1 - Math.cos(Li * t)) / 2 }

    function Xi(t) { return 1.0009775171065494 * (Math.pow(2, -10 * t) - .0009765625) }

    function Gi(t) { return ((t *= 2) <= 1 ? Xi(1 - t) : 2 - Xi(t - 1)) / 2 }

    function Vi(t) { return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2 } var $i = 4 / 11,
        Wi = 7.5625;

    function Zi(t) { return (t = +t) < $i ? Wi * t * t : t < .7272727272727273 ? Wi * (t -= .5454545454545454) * t + .75 : t < .9090909090909091 ? Wi * (t -= .8181818181818182) * t + .9375 : Wi * (t -= .9545454545454546) * t + .984375 } var Ki = 1.70158,
        Qi = function t(n) {
            function e(t) { return (t = +t) * t * (n * (t - 1) + t) } return n = +n, e.overshoot = t, e }(Ki),
        Ji = function t(n) {
            function e(t) { return --t * t * ((t + 1) * n + t) + 1 } return n = +n, e.overshoot = t, e }(Ki),
        to = function t(n) {
            function e(t) { return ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2 } return n = +n, e.overshoot = t, e }(Ki),
        no = 2 * Math.PI,
        eo = function t(n, e) { var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= no);

            function i(t) { return n * Xi(- --t) * Math.sin((r - t) / e) } return i.amplitude = function(n) { return t(n, e * no) }, i.period = function(e) { return t(n, e) }, i }(1, .3),
        ro = function t(n, e) { var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= no);

            function i(t) { return 1 - n * Xi(t = +t) * Math.sin((t + r) / e) } return i.amplitude = function(n) { return t(n, e * no) }, i.period = function(e) { return t(n, e) }, i }(1, .3),
        io = function t(n, e) { var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= no);

            function i(t) { return ((t = 2 * t - 1) < 0 ? n * Xi(-t) * Math.sin((r - t) / e) : 2 - n * Xi(t) * Math.sin((r + t) / e)) / 2 } return i.amplitude = function(n) { return t(n, e * no) }, i.period = function(e) { return t(n, e) }, i }(1, .3),
        oo = { time: null, delay: 0, duration: 250, ease: Ui };

    function ao(t, n) { for (var e; !(e = t.__transition) || !(e = e[n]);)
            if (!(t = t.parentNode)) throw new Error(`transition ${n} not found`); return e } wn.prototype.interrupt = function(t) { return this.each((function() { oi(this, t) })) }, wn.prototype.transition = function(t) { var n, e;
        t instanceof Di ? (n = t._id, t = t._name) : (n = Ri(), (e = oo).time = Hr(), t = null == t ? null : t + ""); for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
            for (var a, u = r[o], c = u.length, f = 0; f < c; ++f)(a = u[f]) && ni(a, t, n, f, u, e || ao(a, n)); return new Di(r, this._parents, t, n) }; var uo = [null]; var co = t => () => t;

    function fo(t, { sourceEvent: n, target: e, selection: r, mode: i, dispatch: o }) { Object.defineProperties(this, { type: { value: t, enumerable: !0, configurable: !0 }, sourceEvent: { value: n, enumerable: !0, configurable: !0 }, target: { value: e, enumerable: !0, configurable: !0 }, selection: { value: r, enumerable: !0, configurable: !0 }, mode: { value: i, enumerable: !0, configurable: !0 }, _: { value: o } }) }

    function so(t) { t.stopImmediatePropagation() }

    function lo(t) { t.preventDefault(), t.stopImmediatePropagation() } var ho = { name: "drag" },
        po = { name: "space" },
        go = { name: "handle" },
        yo = { name: "center" }; const { abs: vo, max: _o, min: bo } = Math;

    function mo(t) { return [+t[0], +t[1]] }

    function xo(t) { return [mo(t[0]), mo(t[1])] } var wo = { name: "x", handles: ["w", "e"].map(Co), input: function(t, n) { return null == t ? null : [
                    [+t[0], n[0][1]],
                    [+t[1], n[1][1]]
                ] }, output: function(t) { return t && [t[0][0], t[1][0]] } },
        Mo = { name: "y", handles: ["n", "s"].map(Co), input: function(t, n) { return null == t ? null : [
                    [n[0][0], +t[0]],
                    [n[1][0], +t[1]]
                ] }, output: function(t) { return t && [t[0][1], t[1][1]] } },
        Ao = { name: "xy", handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(Co), input: function(t) { return null == t ? null : xo(t) }, output: function(t) { return t } },
        To = { overlay: "crosshair", selection: "move", n: "ns-resize", e: "ew-resize", s: "ns-resize", w: "ew-resize", nw: "nwse-resize", ne: "nesw-resize", se: "nwse-resize", sw: "nesw-resize" },
        So = { e: "w", w: "e", nw: "ne", ne: "nw", se: "sw", sw: "se" },
        Eo = { n: "s", s: "n", nw: "sw", ne: "se", se: "ne", sw: "nw" },
        ko = { overlay: 1, selection: 1, n: null, e: 1, s: null, w: -1, nw: -1, ne: 1, se: 1, sw: -1 },
        No = { overlay: 1, selection: 1, n: -1, e: null, s: 1, w: null, nw: -1, ne: -1, se: 1, sw: 1 };

    function Co(t) { return { type: t } }

    function Po(t) { return !t.ctrlKey && !t.button }

    function zo() { var t = this.ownerSVGElement || this; return t.hasAttribute("viewBox") ? [
            [(t = t.viewBox.baseVal).x, t.y],
            [t.x + t.width, t.y + t.height]
        ] : [
            [0, 0],
            [t.width.baseVal.value, t.height.baseVal.value]
        ] }

    function Do() { return navigator.maxTouchPoints || "ontouchstart" in this }

    function qo(t) { for (; !t.__brush;)
            if (!(t = t.parentNode)) return; return t.__brush }

    function Ro(t) { return t[0][0] === t[1][0] || t[0][1] === t[1][1] }

    function Fo(t) { var n, e = zo,
            r = Po,
            i = Do,
            o = !0,
            a = it("start", "brush", "end"),
            u = 6;

        function c(n) { var e = n.property("__brush", g).selectAll(".overlay").data([Co("overlay")]);
            e.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", To.overlay).merge(e).each((function() { var t = qo(this).extent;
                Mn(this).attr("x", t[0][0]).attr("y", t[0][1]).attr("width", t[1][0] - t[0][0]).attr("height", t[1][1] - t[0][1]) })), n.selectAll(".selection").data([Co("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", To.selection).attr("fill", "#777").attr("fill-opacity", .3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges"); var r = n.selectAll(".handle").data(t.handles, (function(t) { return t.type }));
            r.exit().remove(), r.enter().append("rect").attr("class", (function(t) { return "handle handle--" + t.type })).attr("cursor", (function(t) { return To[t.type] })), n.each(f).attr("fill", "none").attr("pointer-events", "all").on("mousedown.brush", h).filter(i).on("touchstart.brush", h).on("touchmove.brush", d).on("touchend.brush touchcancel.brush", p).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)") }

        function f() { var t = Mn(this),
                n = qo(this).selection;
            n ? (t.selectAll(".selection").style("display", null).attr("x", n[0][0]).attr("y", n[0][1]).attr("width", n[1][0] - n[0][0]).attr("height", n[1][1] - n[0][1]), t.selectAll(".handle").style("display", null).attr("x", (function(t) { return "e" === t.type[t.type.length - 1] ? n[1][0] - u / 2 : n[0][0] - u / 2 })).attr("y", (function(t) { return "s" === t.type[0] ? n[1][1] - u / 2 : n[0][1] - u / 2 })).attr("width", (function(t) { return "n" === t.type || "s" === t.type ? n[1][0] - n[0][0] + u : u })).attr("height", (function(t) { return "e" === t.type || "w" === t.type ? n[1][1] - n[0][1] + u : u }))) : t.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null) }

        function s(t, n, e) { var r = t.__brush.emitter; return !r || e && r.clean ? new l(t, n, e) : r }

        function l(t, n, e) { this.that = t, this.args = n, this.state = t.__brush, this.active = 0, this.clean = e }

        function h(e) { if ((!n || e.touches) && r.apply(this, arguments)) { var i, a, u, c, l, h, d, p, g, y, v, _ = this,
                    b = e.target.__data__.type,
                    m = "selection" === (o && e.metaKey ? b = "overlay" : b) ? ho : o && e.altKey ? yo : go,
                    x = t === Mo ? null : ko[b],
                    w = t === wo ? null : No[b],
                    M = qo(_),
                    A = M.extent,
                    T = M.selection,
                    S = A[0][0],
                    E = A[0][1],
                    k = A[1][0],
                    N = A[1][1],
                    C = 0,
                    P = 0,
                    z = x && w && o && e.shiftKey,
                    D = Array.from(e.touches || [e], t => { const n = t.identifier; return (t = kn(t, _)).point0 = t.slice(), t.identifier = n, t }); if ("overlay" === b) { T && (g = !0); const n = [D[0], D[1] || D[0]];
                    M.selection = T = [
                        [i = t === Mo ? S : bo(n[0][0], n[1][0]), u = t === wo ? E : bo(n[0][1], n[1][1])],
                        [l = t === Mo ? k : _o(n[0][0], n[1][0]), d = t === wo ? N : _o(n[0][1], n[1][1])]
                    ], D.length > 1 && I() } else i = T[0][0], u = T[0][1], l = T[1][0], d = T[1][1];
                a = i, c = u, h = l, p = d; var q = Mn(_).attr("pointer-events", "none"),
                    R = q.selectAll(".overlay").attr("cursor", To[b]);
                oi(_); var F = s(_, arguments, !0).beforestart(); if (e.touches) F.moved = U, F.ended = B;
                else { var O = Mn(e.view).on("mousemove.brush", U, !0).on("mouseup.brush", B, !0);
                    o && O.on("keydown.brush", Y, !0).on("keyup.brush", L, !0), Pn(e.view) } f.call(_), F.start(e, m.name) }

            function U(t) { for (const n of t.changedTouches || [t])
                    for (const t of D) t.identifier === n.identifier && (t.cur = kn(n, _)); if (z && !y && !v && 1 === D.length) { const t = D[0];
                    vo(t.cur[0] - t[0]) > vo(t.cur[1] - t[1]) ? v = !0 : y = !0 } for (const t of D) t.cur && (t[0] = t.cur[0], t[1] = t.cur[1]);
                g = !0, lo(t), I(t) }

            function I(t) { const n = D[0],
                    e = n.point0; var r; switch (C = n[0] - e[0], P = n[1] - e[1], m) {
                    case po:
                    case ho:
                        x && (C = _o(S - i, bo(k - l, C)), a = i + C, h = l + C), w && (P = _o(E - u, bo(N - d, P)), c = u + P, p = d + P); break;
                    case go:
                        D[1] ? (x && (a = _o(S, bo(k, D[0][0])), h = _o(S, bo(k, D[1][0])), x = 1), w && (c = _o(E, bo(N, D[0][1])), p = _o(E, bo(N, D[1][1])), w = 1)) : (x < 0 ? (C = _o(S - i, bo(k - i, C)), a = i + C, h = l) : x > 0 && (C = _o(S - l, bo(k - l, C)), a = i, h = l + C), w < 0 ? (P = _o(E - u, bo(N - u, P)), c = u + P, p = d) : w > 0 && (P = _o(E - d, bo(N - d, P)), c = u, p = d + P)); break;
                    case yo:
                        x && (a = _o(S, bo(k, i - C * x)), h = _o(S, bo(k, l + C * x))), w && (c = _o(E, bo(N, u - P * w)), p = _o(E, bo(N, d + P * w))) } h < a && (x *= -1, r = i, i = l, l = r, r = a, a = h, h = r, b in So && R.attr("cursor", To[b = So[b]])), p < c && (w *= -1, r = u, u = d, d = r, r = c, c = p, p = r, b in Eo && R.attr("cursor", To[b = Eo[b]])), M.selection && (T = M.selection), y && (a = T[0][0], h = T[1][0]), v && (c = T[0][1], p = T[1][1]), T[0][0] === a && T[0][1] === c && T[1][0] === h && T[1][1] === p || (M.selection = [
                    [a, c],
                    [h, p]
                ], f.call(_), F.brush(t, m.name)) }

            function B(t) { if (so(t), t.touches) { if (t.touches.length) return;
                    n && clearTimeout(n), n = setTimeout((function() { n = null }), 500) } else zn(t.view, g), O.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
                q.attr("pointer-events", "all"), R.attr("cursor", To.overlay), M.selection && (T = M.selection), Ro(T) && (M.selection = null, f.call(_)), F.end(t, m.name) }

            function Y(t) { switch (t.keyCode) {
                    case 16:
                        z = x && w; break;
                    case 18:
                        m === go && (x && (l = h - C * x, i = a + C * x), w && (d = p - P * w, u = c + P * w), m = yo, I()); break;
                    case 32:
                        m !== go && m !== yo || (x < 0 ? l = h - C : x > 0 && (i = a - C), w < 0 ? d = p - P : w > 0 && (u = c - P), m = po, R.attr("cursor", To.selection), I()); break;
                    default:
                        return } lo(t) }

            function L(t) { switch (t.keyCode) {
                    case 16:
                        z && (y = v = z = !1, I()); break;
                    case 18:
                        m === yo && (x < 0 ? l = h : x > 0 && (i = a), w < 0 ? d = p : w > 0 && (u = c), m = go, I()); break;
                    case 32:
                        m === po && (t.altKey ? (x && (l = h - C * x, i = a + C * x), w && (d = p - P * w, u = c + P * w), m = yo) : (x < 0 ? l = h : x > 0 && (i = a), w < 0 ? d = p : w > 0 && (u = c), m = go), R.attr("cursor", To[b]), I()); break;
                    default:
                        return } lo(t) } }

        function d(t) { s(this, arguments).moved(t) }

        function p(t) { s(this, arguments).ended(t) }

        function g() { var n = this.__brush || { selection: null }; return n.extent = xo(e.apply(this, arguments)), n.dim = t, n } return c.move = function(n, e) { n.tween ? n.on("start.brush", (function(t) { s(this, arguments).beforestart().start(t) })).on("interrupt.brush end.brush", (function(t) { s(this, arguments).end(t) })).tween("brush", (function() { var n = this,
                    r = n.__brush,
                    i = s(n, arguments),
                    o = r.selection,
                    a = t.input("function" == typeof e ? e.apply(this, arguments) : e, r.extent),
                    u = dr(o, a);

                function c(t) { r.selection = 1 === t && null === a ? null : u(t), f.call(n), i.brush() } return null !== o && null !== a ? c : c(1) })) : n.each((function() { var n = this,
                    r = arguments,
                    i = n.__brush,
                    o = t.input("function" == typeof e ? e.apply(n, r) : e, i.extent),
                    a = s(n, r).beforestart();
                oi(n), i.selection = null === o ? null : o, f.call(n), a.start().brush().end() })) }, c.clear = function(t) { c.move(t, null) }, l.prototype = { beforestart: function() { return 1 == ++this.active && (this.state.emitter = this, this.starting = !0), this }, start: function(t, n) { return this.starting ? (this.starting = !1, this.emit("start", t, n)) : this.emit("brush", t), this }, brush: function(t, n) { return this.emit("brush", t, n), this }, end: function(t, n) { return 0 == --this.active && (delete this.state.emitter, this.emit("end", t, n)), this }, emit: function(n, e, r) { var i = Mn(this.that).datum();
                a.call(n, this.that, new fo(n, { sourceEvent: e, target: c, selection: t.output(this.state.selection), mode: r, dispatch: a }), i) } }, c.extent = function(t) { return arguments.length ? (e = "function" == typeof t ? t : co(xo(t)), c) : e }, c.filter = function(t) { return arguments.length ? (r = "function" == typeof t ? t : co(!!t), c) : r }, c.touchable = function(t) { return arguments.length ? (i = "function" == typeof t ? t : co(!!t), c) : i }, c.handleSize = function(t) { return arguments.length ? (u = +t, c) : u }, c.keyModifiers = function(t) { return arguments.length ? (o = !!t, c) : o }, c.on = function() { var t = a.on.apply(a, arguments); return t === a ? c : t }, c } var Oo = Math.abs,
        Uo = Math.cos,
        Io = Math.sin,
        Bo = Math.PI,
        Yo = Bo / 2,
        Lo = 2 * Bo,
        jo = Math.max,
        Ho = 1e-12;

    function Xo(t, n) { return Array.from({ length: n - t }, (n, e) => t + e) }

    function Go(t) { return function(n, e) { return t(n.source.value + n.target.value, e.source.value + e.target.value) } }

    function Vo(t, n) { var e = 0,
            r = null,
            i = null,
            o = null;

        function a(a) { var u, c = a.length,
                f = new Array(c),
                s = Xo(0, c),
                l = new Array(c * c),
                h = new Array(c),
                d = 0;
            a = Float64Array.from({ length: c * c }, n ? (t, n) => a[n % c][n / c | 0] : (t, n) => a[n / c | 0][n % c]); for (let n = 0; n < c; ++n) { let e = 0; for (let r = 0; r < c; ++r) e += a[n * c + r] + t * a[r * c + n];
                d += f[n] = e } u = (d = jo(0, Lo - e * c) / d) ? e : Lo / c; { let n = 0;
                r && s.sort((t, n) => r(f[t], f[n])); for (const e of s) { const r = n; if (t) { const t = Xo(1 + ~c, c).filter(t => t < 0 ? a[~t * c + e] : a[e * c + t]);
                        i && t.sort((t, n) => i(t < 0 ? -a[~t * c + e] : a[e * c + t], n < 0 ? -a[~n * c + e] : a[e * c + n])); for (const r of t)
                            if (r < 0) {
                                (l[~r * c + e] || (l[~r * c + e] = { source: null, target: null })).target = { index: e, startAngle: n, endAngle: n += a[~r * c + e] * d, value: a[~r * c + e] } } else {
                                (l[e * c + r] || (l[e * c + r] = { source: null, target: null })).source = { index: e, startAngle: n, endAngle: n += a[e * c + r] * d, value: a[e * c + r] } } h[e] = { index: e, startAngle: r, endAngle: n, value: f[e] } } else { const t = Xo(0, c).filter(t => a[e * c + t] || a[t * c + e]);
                        i && t.sort((t, n) => i(a[e * c + t], a[e * c + n])); for (const r of t) { let t; if (e < r ? (t = l[e * c + r] || (l[e * c + r] = { source: null, target: null }), t.source = { index: e, startAngle: n, endAngle: n += a[e * c + r] * d, value: a[e * c + r] }) : (t = l[r * c + e] || (l[r * c + e] = { source: null, target: null }), t.target = { index: e, startAngle: n, endAngle: n += a[e * c + r] * d, value: a[e * c + r] }, e === r && (t.source = t.target)), t.source && t.target && t.source.value < t.target.value) { const n = t.source;
                                t.source = t.target, t.target = n } } h[e] = { index: e, startAngle: r, endAngle: n, value: f[e] } } n += u } } return (l = Object.values(l)).groups = h, o ? l.sort(o) : l } return a.padAngle = function(t) { return arguments.length ? (e = jo(0, t), a) : e }, a.sortGroups = function(t) { return arguments.length ? (r = t, a) : r }, a.sortSubgroups = function(t) { return arguments.length ? (i = t, a) : i }, a.sortChords = function(t) { return arguments.length ? (null == t ? o = null : (o = Go(t))._ = t, a) : o && o._ }, a } const $o = Math.PI,
        Wo = 2 * $o,
        Zo = 1e-6,
        Ko = Wo - Zo;

    function Qo() { this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "" }

    function Jo() { return new Qo } Qo.prototype = Jo.prototype = { constructor: Qo, moveTo: function(t, n) { this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) }, closePath: function() { null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z") }, lineTo: function(t, n) { this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n) }, quadraticCurveTo: function(t, n, e, r) { this._ += "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +r) }, bezierCurveTo: function(t, n, e, r, i, o) { this._ += "C" + +t + "," + +n + "," + +e + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +o) }, arcTo: function(t, n, e, r, i) { t = +t, n = +n, e = +e, r = +r, i = +i; var o = this._x1,
                a = this._y1,
                u = e - t,
                c = r - n,
                f = o - t,
                s = a - n,
                l = f * f + s * s; if (i < 0) throw new Error("negative radius: " + i); if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = n);
            else if (l > Zo)
                if (Math.abs(s * u - c * f) > Zo && i) { var h = e - o,
                        d = r - a,
                        p = u * u + c * c,
                        g = h * h + d * d,
                        y = Math.sqrt(p),
                        v = Math.sqrt(l),
                        _ = i * Math.tan(($o - Math.acos((p + l - g) / (2 * y * v))) / 2),
                        b = _ / v,
                        m = _ / y;
                    Math.abs(b - 1) > Zo && (this._ += "L" + (t + b * f) + "," + (n + b * s)), this._ += "A" + i + "," + i + ",0,0," + +(s * h > f * d) + "," + (this._x1 = t + m * u) + "," + (this._y1 = n + m * c) } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n);
            else; }, arc: function(t, n, e, r, i, o) { t = +t, n = +n, o = !!o; var a = (e = +e) * Math.cos(r),
                u = e * Math.sin(r),
                c = t + a,
                f = n + u,
                s = 1 ^ o,
                l = o ? r - i : i - r; if (e < 0) throw new Error("negative radius: " + e);
            null === this._x1 ? this._ += "M" + c + "," + f : (Math.abs(this._x1 - c) > Zo || Math.abs(this._y1 - f) > Zo) && (this._ += "L" + c + "," + f), e && (l < 0 && (l = l % Wo + Wo), l > Ko ? this._ += "A" + e + "," + e + ",0,1," + s + "," + (t - a) + "," + (n - u) + "A" + e + "," + e + ",0,1," + s + "," + (this._x1 = c) + "," + (this._y1 = f) : l > Zo && (this._ += "A" + e + "," + e + ",0," + +(l >= $o) + "," + s + "," + (this._x1 = t + e * Math.cos(i)) + "," + (this._y1 = n + e * Math.sin(i)))) }, rect: function(t, n, e, r) { this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) + "h" + +e + "v" + +r + "h" + -e + "Z" }, toString: function() { return this._ } }; var ta = Array.prototype.slice;

    function na(t) { return function() { return t } }

    function ea(t) { return t.source }

    function ra(t) { return t.target }

    function ia(t) { return t.radius }

    function oa(t) { return t.startAngle }

    function aa(t) { return t.endAngle }

    function ua() { return 0 }

    function ca() { return 10 }

    function fa(t) { var n = ea,
            e = ra,
            r = ia,
            i = ia,
            o = oa,
            a = aa,
            u = ua,
            c = null;

        function f() { var f, s = n.apply(this, arguments),
                l = e.apply(this, arguments),
                h = u.apply(this, arguments) / 2,
                d = ta.call(arguments),
                p = +r.apply(this, (d[0] = s, d)),
                g = o.apply(this, d) - Yo,
                y = a.apply(this, d) - Yo,
                v = +i.apply(this, (d[0] = l, d)),
                _ = o.apply(this, d) - Yo,
                b = a.apply(this, d) - Yo; if (c || (c = f = Jo()), h > Ho && (Oo(y - g) > 2 * h + Ho ? y > g ? (g += h, y -= h) : (g -= h, y += h) : g = y = (g + y) / 2, Oo(b - _) > 2 * h + Ho ? b > _ ? (_ += h, b -= h) : (_ -= h, b += h) : _ = b = (_ + b) / 2), c.moveTo(p * Uo(g), p * Io(g)), c.arc(0, 0, p, g, y), g !== _ || y !== b)
                if (t) { var m = +t.apply(this, arguments),
                        x = v - m,
                        w = (_ + b) / 2;
                    c.quadraticCurveTo(0, 0, x * Uo(_), x * Io(_)), c.lineTo(v * Uo(w), v * Io(w)), c.lineTo(x * Uo(b), x * Io(b)) } else c.quadraticCurveTo(0, 0, v * Uo(_), v * Io(_)), c.arc(0, 0, v, _, b); if (c.quadraticCurveTo(0, 0, p * Uo(g), p * Io(g)), c.closePath(), f) return c = null, f + "" || null } return t && (f.headRadius = function(n) { return arguments.length ? (t = "function" == typeof n ? n : na(+n), f) : t }), f.radius = function(t) { return arguments.length ? (r = i = "function" == typeof t ? t : na(+t), f) : r }, f.sourceRadius = function(t) { return arguments.length ? (r = "function" == typeof t ? t : na(+t), f) : r }, f.targetRadius = function(t) { return arguments.length ? (i = "function" == typeof t ? t : na(+t), f) : i }, f.startAngle = function(t) { return arguments.length ? (o = "function" == typeof t ? t : na(+t), f) : o }, f.endAngle = function(t) { return arguments.length ? (a = "function" == typeof t ? t : na(+t), f) : a }, f.padAngle = function(t) { return arguments.length ? (u = "function" == typeof t ? t : na(+t), f) : u }, f.source = function(t) { return arguments.length ? (n = t, f) : n }, f.target = function(t) { return arguments.length ? (e = t, f) : e }, f.context = function(t) { return arguments.length ? (c = null == t ? null : t, f) : c }, f } var sa = Array.prototype.slice;

    function la(t, n) { return t - n } var ha = t => () => t;

    function da(t, n) { for (var e, r = -1, i = n.length; ++r < i;)
            if (e = pa(t, n[r])) return e; return 0 }

    function pa(t, n) { for (var e = n[0], r = n[1], i = -1, o = 0, a = t.length, u = a - 1; o < a; u = o++) { var c = t[o],
                f = c[0],
                s = c[1],
                l = t[u],
                h = l[0],
                d = l[1]; if (ga(c, l, n)) return 0;
            s > r != d > r && e < (h - f) * (r - s) / (d - s) + f && (i = -i) } return i }

    function ga(t, n, e) { var r, i, o, a; return function(t, n, e) { return (n[0] - t[0]) * (e[1] - t[1]) == (e[0] - t[0]) * (n[1] - t[1]) }(t, n, e) && (i = t[r = +(t[0] === n[0])], o = e[r], a = n[r], i <= o && o <= a || a <= o && o <= i) }

    function ya() {} var va = [
        [],
        [
            [
                [1, 1.5],
                [.5, 1]
            ]
        ],
        [
            [
                [1.5, 1],
                [1, 1.5]
            ]
        ],
        [
            [
                [1.5, 1],
                [.5, 1]
            ]
        ],
        [
            [
                [1, .5],
                [1.5, 1]
            ]
        ],
        [
            [
                [1, 1.5],
                [.5, 1]
            ],
            [
                [1, .5],
                [1.5, 1]
            ]
        ],
        [
            [
                [1, .5],
                [1, 1.5]
            ]
        ],
        [
            [
                [1, .5],
                [.5, 1]
            ]
        ],
        [
            [
                [.5, 1],
                [1, .5]
            ]
        ],
        [
            [
                [1, 1.5],
                [1, .5]
            ]
        ],
        [
            [
                [.5, 1],
                [1, .5]
            ],
            [
                [1.5, 1],
                [1, 1.5]
            ]
        ],
        [
            [
                [1.5, 1],
                [1, .5]
            ]
        ],
        [
            [
                [.5, 1],
                [1.5, 1]
            ]
        ],
        [
            [
                [1, 1.5],
                [1.5, 1]
            ]
        ],
        [
            [
                [.5, 1],
                [1, 1.5]
            ]
        ],
        []
    ];

    function _a() { var t = 1,
            n = 1,
            e = k,
            r = u;

        function i(t) { var n = e(t); if (Array.isArray(n)) n = n.slice().sort(la);
            else { var r = p(t),
                    i = r[0],
                    a = r[1];
                n = S(i, a, n), n = B(Math.floor(i / n) * n, Math.floor(a / n) * n, n) } return n.map((function(n) { return o(t, n) })) }

        function o(e, i) { var o = [],
                u = []; return function(e, r, i) { var o, u, c, f, s, l, h = new Array,
                    d = new Array;
                o = u = -1, f = e[0] >= r, va[f << 1].forEach(p); for (; ++o < t - 1;) c = f, f = e[o + 1] >= r, va[c | f << 1].forEach(p);
                va[f << 0].forEach(p); for (; ++u < n - 1;) { for (o = -1, f = e[u * t + t] >= r, s = e[u * t] >= r, va[f << 1 | s << 2].forEach(p); ++o < t - 1;) c = f, f = e[u * t + t + o + 1] >= r, l = s, s = e[u * t + o + 1] >= r, va[c | f << 1 | s << 2 | l << 3].forEach(p);
                    va[f | s << 3].forEach(p) } o = -1, s = e[u * t] >= r, va[s << 2].forEach(p); for (; ++o < t - 1;) l = s, s = e[u * t + o + 1] >= r, va[s << 2 | l << 3].forEach(p);

                function p(t) { var n, e, r = [t[0][0] + o, t[0][1] + u],
                        c = [t[1][0] + o, t[1][1] + u],
                        f = a(r),
                        s = a(c);
                    (n = d[f]) ? (e = h[s]) ? (delete d[n.end], delete h[e.start], n === e ? (n.ring.push(c), i(n.ring)) : h[n.start] = d[e.end] = { start: n.start, end: e.end, ring: n.ring.concat(e.ring) }) : (delete d[n.end], n.ring.push(c), d[n.end = s] = n) : (n = h[s]) ? (e = d[f]) ? (delete h[n.start], delete d[e.end], n === e ? (n.ring.push(c), i(n.ring)) : h[e.start] = d[n.end] = { start: e.start, end: n.end, ring: e.ring.concat(n.ring) }) : (delete h[n.start], n.ring.unshift(r), h[n.start = f] = n) : h[f] = d[s] = { start: f, end: s, ring: [r, c] } } va[s << 3].forEach(p) }(e, i, (function(t) { r(t, e, i),
                    function(t) { for (var n = 0, e = t.length, r = t[e - 1][1] * t[0][0] - t[e - 1][0] * t[0][1]; ++n < e;) r += t[n - 1][1] * t[n][0] - t[n - 1][0] * t[n][1]; return r }(t) > 0 ? o.push([t]) : u.push(t) })), u.forEach((function(t) { for (var n, e = 0, r = o.length; e < r; ++e)
                    if (-1 !== da((n = o[e])[0], t)) return void n.push(t) })), { type: "MultiPolygon", value: i, coordinates: o } }

        function a(n) { return 2 * n[0] + n[1] * (t + 1) * 4 }

        function u(e, r, i) { e.forEach((function(e) { var o, a = e[0],
                    u = e[1],
                    c = 0 | a,
                    f = 0 | u,
                    s = r[f * t + c];
                a > 0 && a < t && c === a && (o = r[f * t + c - 1], e[0] = a + (i - o) / (s - o) - .5), u > 0 && u < n && f === u && (o = r[(f - 1) * t + c], e[1] = u + (i - o) / (s - o) - .5) })) } return i.contour = o, i.size = function(e) { if (!arguments.length) return [t, n]; var r = Math.floor(e[0]),
                o = Math.floor(e[1]); if (!(r >= 0 && o >= 0)) throw new Error("invalid size"); return t = r, n = o, i }, i.thresholds = function(t) { return arguments.length ? (e = "function" == typeof t ? t : Array.isArray(t) ? ha(sa.call(t)) : ha(t), i) : e }, i.smooth = function(t) { return arguments.length ? (r = t ? u : ya, i) : r === u }, i }

    function ba(t, n, e) { for (var r = t.width, i = t.height, o = 1 + (e << 1), a = 0; a < i; ++a)
            for (var u = 0, c = 0; u < r + e; ++u) u < r && (c += t.data[u + a * r]), u >= e && (u >= o && (c -= t.data[u - o + a * r]), n.data[u - e + a * r] = c / Math.min(u + 1, r - 1 + o - u, o)) }

    function ma(t, n, e) { for (var r = t.width, i = t.height, o = 1 + (e << 1), a = 0; a < r; ++a)
            for (var u = 0, c = 0; u < i + e; ++u) u < i && (c += t.data[a + u * r]), u >= e && (u >= o && (c -= t.data[a + (u - o) * r]), n.data[a + (u - e) * r] = c / Math.min(u + 1, i - 1 + o - u, o)) }

    function xa(t) { return t[0] }

    function wa(t) { return t[1] }

    function Ma() { return 1 } const Aa = Math.pow(2, -52),
        Ta = new Uint32Array(512);
    class Sa { static from(t, n = qa, e = Ra) { const r = t.length,
                i = new Float64Array(2 * r); for (let o = 0; o < r; o++) { const r = t[o];
                i[2 * o] = n(r), i[2 * o + 1] = e(r) } return new Sa(i) } constructor(t) { const n = t.length >> 1; if (n > 0 && "number" != typeof t[0]) throw new Error("Expected coords to contain numbers.");
            this.coords = t; const e = Math.max(2 * n - 5, 0);
            this._triangles = new Uint32Array(3 * e), this._halfedges = new Int32Array(3 * e), this._hashSize = Math.ceil(Math.sqrt(n)), this._hullPrev = new Uint32Array(n), this._hullNext = new Uint32Array(n), this._hullTri = new Uint32Array(n), this._hullHash = new Int32Array(this._hashSize).fill(-1), this._ids = new Uint32Array(n), this._dists = new Float64Array(n), this.update() } update() { const { coords: t, _hullPrev: n, _hullNext: e, _hullTri: r, _hullHash: i } = this, o = t.length >> 1; let a = 1 / 0,
                u = 1 / 0,
                c = -1 / 0,
                f = -1 / 0; for (let n = 0; n < o; n++) { const e = t[2 * n],
                    r = t[2 * n + 1];
                e < a && (a = e), r < u && (u = r), e > c && (c = e), r > f && (f = r), this._ids[n] = n } const s = (a + c) / 2,
                l = (u + f) / 2; let h, d, p, g = 1 / 0; for (let n = 0; n < o; n++) { const e = Ea(s, l, t[2 * n], t[2 * n + 1]);
                e < g && (h = n, g = e) } const y = t[2 * h],
                v = t[2 * h + 1];
            g = 1 / 0; for (let n = 0; n < o; n++) { if (n === h) continue; const e = Ea(y, v, t[2 * n], t[2 * n + 1]);
                e < g && e > 0 && (d = n, g = e) } let _ = t[2 * d],
                b = t[2 * d + 1],
                m = 1 / 0; for (let n = 0; n < o; n++) { if (n === h || n === d) continue; const e = Pa(y, v, _, b, t[2 * n], t[2 * n + 1]);
                e < m && (p = n, m = e) } let x = t[2 * p],
                w = t[2 * p + 1]; if (m === 1 / 0) { for (let n = 0; n < o; n++) this._dists[n] = t[2 * n] - t[0] || t[2 * n + 1] - t[1];
                za(this._ids, this._dists, 0, o - 1); const n = new Uint32Array(o); let e = 0; for (let t = 0, r = -1 / 0; t < o; t++) { const i = this._ids[t];
                    this._dists[i] > r && (n[e++] = i, r = this._dists[i]) } return this.hull = n.subarray(0, e), this.triangles = new Uint32Array(0), void(this.halfedges = new Uint32Array(0)) } if (Na(y, v, _, b, x, w)) { const t = d,
                    n = _,
                    e = b;
                d = p, _ = x, b = w, p = t, x = n, w = e } const M = function(t, n, e, r, i, o) { const a = e - t,
                    u = r - n,
                    c = i - t,
                    f = o - n,
                    s = a * a + u * u,
                    l = c * c + f * f,
                    h = .5 / (a * f - u * c); return { x: t + (f * s - u * l) * h, y: n + (a * l - c * s) * h } }(y, v, _, b, x, w);
            this._cx = M.x, this._cy = M.y; for (let n = 0; n < o; n++) this._dists[n] = Ea(t[2 * n], t[2 * n + 1], M.x, M.y);
            za(this._ids, this._dists, 0, o - 1), this._hullStart = h; let A = 3;
            e[h] = n[p] = d, e[d] = n[h] = p, e[p] = n[d] = h, r[h] = 0, r[d] = 1, r[p] = 2, i.fill(-1), i[this._hashKey(y, v)] = h, i[this._hashKey(_, b)] = d, i[this._hashKey(x, w)] = p, this.trianglesLen = 0, this._addTriangle(h, d, p, -1, -1, -1); for (let o, a, u = 0; u < this._ids.length; u++) { const c = this._ids[u],
                    f = t[2 * c],
                    s = t[2 * c + 1]; if (u > 0 && Math.abs(f - o) <= Aa && Math.abs(s - a) <= Aa) continue; if (o = f, a = s, c === h || c === d || c === p) continue; let l = 0; for (let t = 0, n = this._hashKey(f, s); t < this._hashSize && (l = i[(n + t) % this._hashSize], -1 === l || l === e[l]); t++);
                l = n[l]; let g, y = l; for (; g = e[y], !Na(f, s, t[2 * y], t[2 * y + 1], t[2 * g], t[2 * g + 1]);)
                    if (y = g, y === l) { y = -1; break } if (-1 === y) continue; let v = this._addTriangle(y, c, e[y], -1, -1, r[y]);
                r[c] = this._legalize(v + 2), r[y] = v, A++; let _ = e[y]; for (; g = e[_], Na(f, s, t[2 * _], t[2 * _ + 1], t[2 * g], t[2 * g + 1]);) v = this._addTriangle(_, c, g, r[c], -1, r[_]), r[c] = this._legalize(v + 2), e[_] = _, A--, _ = g; if (y === l)
                    for (; g = n[y], Na(f, s, t[2 * g], t[2 * g + 1], t[2 * y], t[2 * y + 1]);) v = this._addTriangle(g, c, y, -1, r[y], r[g]), this._legalize(v + 2), r[g] = v, e[y] = y, A--, y = g;
                this._hullStart = n[c] = y, e[y] = n[_] = c, e[c] = _, i[this._hashKey(f, s)] = c, i[this._hashKey(t[2 * y], t[2 * y + 1])] = y } this.hull = new Uint32Array(A); for (let t = 0, n = this._hullStart; t < A; t++) this.hull[t] = n, n = e[n];
            this.triangles = this._triangles.subarray(0, this.trianglesLen), this.halfedges = this._halfedges.subarray(0, this.trianglesLen) } _hashKey(t, n) { return Math.floor(function(t, n) { const e = t / (Math.abs(t) + Math.abs(n)); return (n > 0 ? 3 - e : 1 + e) / 4 }(t - this._cx, n - this._cy) * this._hashSize) % this._hashSize } _legalize(t) { const { _triangles: n, _halfedges: e, coords: r } = this; let i = 0,
                o = 0; for (;;) { const a = e[t],
                    u = t - t % 3; if (o = u + (t + 2) % 3, -1 === a) { if (0 === i) break;
                    t = Ta[--i]; continue } const c = a - a % 3,
                    f = u + (t + 1) % 3,
                    s = c + (a + 2) % 3,
                    l = n[o],
                    h = n[t],
                    d = n[f],
                    p = n[s]; if (Ca(r[2 * l], r[2 * l + 1], r[2 * h], r[2 * h + 1], r[2 * d], r[2 * d + 1], r[2 * p], r[2 * p + 1])) { n[t] = p, n[a] = l; const r = e[s]; if (-1 === r) { let n = this._hullStart;
                        do { if (this._hullTri[n] === s) { this._hullTri[n] = t; break } n = this._hullPrev[n] } while (n !== this._hullStart) } this._link(t, r), this._link(a, e[o]), this._link(o, s); const u = c + (a + 1) % 3;
                    i < Ta.length && (Ta[i++] = u) } else { if (0 === i) break;
                    t = Ta[--i] } } return o } _link(t, n) { this._halfedges[t] = n, -1 !== n && (this._halfedges[n] = t) } _addTriangle(t, n, e, r, i, o) { const a = this.trianglesLen; return this._triangles[a] = t, this._triangles[a + 1] = n, this._triangles[a + 2] = e, this._link(a, r), this._link(a + 1, i), this._link(a + 2, o), this.trianglesLen += 3, a } }

    function Ea(t, n, e, r) { const i = t - e,
            o = n - r; return i * i + o * o }

    function ka(t, n, e, r, i, o) { const a = (r - n) * (i - t),
            u = (e - t) * (o - n); return Math.abs(a - u) >= 33306690738754716e-32 * Math.abs(a + u) ? a - u : 0 }

    function Na(t, n, e, r, i, o) { return (ka(i, o, t, n, e, r) || ka(t, n, e, r, i, o) || ka(e, r, i, o, t, n)) < 0 }

    function Ca(t, n, e, r, i, o, a, u) { const c = t - a,
            f = n - u,
            s = e - a,
            l = r - u,
            h = i - a,
            d = o - u,
            p = s * s + l * l,
            g = h * h + d * d; return c * (l * g - p * d) - f * (s * g - p * h) + (c * c + f * f) * (s * d - l * h) < 0 }

    function Pa(t, n, e, r, i, o) { const a = e - t,
            u = r - n,
            c = i - t,
            f = o - n,
            s = a * a + u * u,
            l = c * c + f * f,
            h = .5 / (a * f - u * c),
            d = (f * s - u * l) * h,
            p = (a * l - c * s) * h; return d * d + p * p }

    function za(t, n, e, r) { if (r - e <= 20)
            for (let i = e + 1; i <= r; i++) { const r = t[i],
                    o = n[r]; let a = i - 1; for (; a >= e && n[t[a]] > o;) t[a + 1] = t[a--];
                t[a + 1] = r } else { let i = e + 1,
                    o = r;
                Da(t, e + r >> 1, i), n[t[e]] > n[t[r]] && Da(t, e, r), n[t[i]] > n[t[r]] && Da(t, i, r), n[t[e]] > n[t[i]] && Da(t, e, i); const a = t[i],
                    u = n[a]; for (;;) { do { i++ } while (n[t[i]] < u);
                    do { o-- } while (n[t[o]] > u); if (o < i) break;
                    Da(t, i, o) } t[e + 1] = t[o], t[o] = a, r - i + 1 >= o - e ? (za(t, n, i, r), za(t, n, e, o - 1)) : (za(t, n, e, o - 1), za(t, n, i, r)) } }

    function Da(t, n, e) { const r = t[n];
        t[n] = t[e], t[e] = r }

    function qa(t) { return t[0] }

    function Ra(t) { return t[1] } const Fa = 1e-6;
    class Oa { constructor() { this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "" } moveTo(t, n) { this._ += `M${this._x0=this._x1=+t},${this._y0=this._y1=+n}` } closePath() { null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z") } lineTo(t, n) { this._ += `L${this._x1=+t},${this._y1=+n}` } arc(t, n, e) { const r = (t = +t) + (e = +e),
                i = n = +n; if (e < 0) throw new Error("negative radius");
            null === this._x1 ? this._ += `M${r},${i}` : (Math.abs(this._x1 - r) > Fa || Math.abs(this._y1 - i) > Fa) && (this._ += "L" + r + "," + i), e && (this._ += `A${e},${e},0,1,1,${t-e},${n}A${e},${e},0,1,1,${this._x1=r},${this._y1=i}`) } rect(t, n, e, r) { this._ += `M${this._x0=this._x1=+t},${this._y0=this._y1=+n}h${+e}v${+r}h${-e}Z` } value() { return this._ || null } } class Ua { constructor() { this._ = [] } moveTo(t, n) { this._.push([t, n]) } closePath() { this._.push(this._[0].slice()) } lineTo(t, n) { this._.push([t, n]) } value() { return this._.length ? this._ : null } } class Ia { constructor(t, [n, e, r, i] = [0, 0, 960, 500]) { if (!((r = +r) >= (n = +n) && (i = +i) >= (e = +e))) throw new Error("invalid bounds");
            this.delaunay = t, this._circumcenters = new Float64Array(2 * t.points.length), this.vectors = new Float64Array(2 * t.points.length), this.xmax = r, this.xmin = n, this.ymax = i, this.ymin = e, this._init() } update() { return this.delaunay.update(), this._init(), this } _init() { const { delaunay: { points: t, hull: n, triangles: e }, vectors: r } = this, i = this.circumcenters = this._circumcenters.subarray(0, e.length / 3 * 2); for (let n, r, o = 0, a = 0, u = e.length; o < u; o += 3, a += 2) { const u = 2 * e[o],
                    c = 2 * e[o + 1],
                    f = 2 * e[o + 2],
                    s = t[u],
                    l = t[u + 1],
                    h = t[c],
                    d = t[c + 1],
                    p = t[f],
                    g = t[f + 1],
                    y = h - s,
                    v = d - l,
                    _ = p - s,
                    b = g - l,
                    m = y * y + v * v,
                    x = _ * _ + b * b,
                    w = 2 * (y * b - v * _); if (w)
                    if (Math.abs(w) < 1e-8) n = (s + p) / 2, r = (l + g) / 2;
                    else { const t = 1 / w;
                        n = s + (b * m - v * x) * t, r = l + (y * x - _ * m) * t } else n = (s + p) / 2 - 1e8 * b, r = (l + g) / 2 + 1e8 * _;
                i[a] = n, i[a + 1] = r } let o, a, u, c = n[n.length - 1],
                f = 4 * c,
                s = t[2 * c],
                l = t[2 * c + 1];
            r.fill(0); for (let e = 0; e < n.length; ++e) c = n[e], o = f, a = s, u = l, f = 4 * c, s = t[2 * c], l = t[2 * c + 1], r[o + 2] = r[f] = u - l, r[o + 3] = r[f + 1] = s - a } render(t) { const n = null == t ? t = new Oa : void 0,
                { delaunay: { halfedges: e, inedges: r, hull: i }, circumcenters: o, vectors: a } = this; if (i.length <= 1) return null; for (let n = 0, r = e.length; n < r; ++n) { const r = e[n]; if (r < n) continue; const i = 2 * Math.floor(n / 3),
                    a = 2 * Math.floor(r / 3),
                    u = o[i],
                    c = o[i + 1],
                    f = o[a],
                    s = o[a + 1];
                this._renderSegment(u, c, f, s, t) } let u, c = i[i.length - 1]; for (let n = 0; n < i.length; ++n) { u = c, c = i[n]; const e = 2 * Math.floor(r[c] / 3),
                    f = o[e],
                    s = o[e + 1],
                    l = 4 * u,
                    h = this._project(f, s, a[l + 2], a[l + 3]);
                h && this._renderSegment(f, s, h[0], h[1], t) } return n && n.value() } renderBounds(t) { const n = null == t ? t = new Oa : void 0; return t.rect(this.xmin, this.ymin, this.xmax - this.xmin, this.ymax - this.ymin), n && n.value() } renderCell(t, n) { const e = null == n ? n = new Oa : void 0,
                r = this._clip(t); if (null === r || !r.length) return;
            n.moveTo(r[0], r[1]); let i = r.length; for (; r[0] === r[i - 2] && r[1] === r[i - 1] && i > 1;) i -= 2; for (let t = 2; t < i; t += 2) r[t] === r[t - 2] && r[t + 1] === r[t - 1] || n.lineTo(r[t], r[t + 1]); return n.closePath(), e && e.value() }* cellPolygons() { const { delaunay: { points: t } } = this; for (let n = 0, e = t.length / 2; n < e; ++n) { const t = this.cellPolygon(n);
                t && (t.index = n, yield t) } } cellPolygon(t) { const n = new Ua; return this.renderCell(t, n), n.value() } _renderSegment(t, n, e, r, i) { let o; const a = this._regioncode(t, n),
                u = this._regioncode(e, r);
            0 === a && 0 === u ? (i.moveTo(t, n), i.lineTo(e, r)) : (o = this._clipSegment(t, n, e, r, a, u)) && (i.moveTo(o[0], o[1]), i.lineTo(o[2], o[3])) } contains(t, n, e) { return (n = +n) == n && (e = +e) == e && this.delaunay._step(t, n, e) === t }* neighbors(t) { const n = this._clip(t); if (n)
                for (const e of this.delaunay.neighbors(t)) { const t = this._clip(e); if (t) t: for (let r = 0, i = n.length; r < i; r += 2)
                        for (let o = 0, a = t.length; o < a; o += 2)
                            if (n[r] == t[o] && n[r + 1] == t[o + 1] && n[(r + 2) % i] == t[(o + a - 2) % a] && n[(r + 3) % i] == t[(o + a - 1) % a]) { yield e; break t } } } _cell(t) { const { circumcenters: n, delaunay: { inedges: e, halfedges: r, triangles: i } } = this, o = e[t]; if (-1 === o) return null; const a = []; let u = o;
            do { const e = Math.floor(u / 3); if (a.push(n[2 * e], n[2 * e + 1]), u = u % 3 == 2 ? u - 2 : u + 1, i[u] !== t) break;
                u = r[u] } while (u !== o && -1 !== u); return a } _clip(t) { if (0 === t && 1 === this.delaunay.hull.length) return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin]; const n = this._cell(t); if (null === n) return null; const { vectors: e } = this, r = 4 * t; return e[r] || e[r + 1] ? this._clipInfinite(t, n, e[r], e[r + 1], e[r + 2], e[r + 3]) : this._clipFinite(t, n) } _clipFinite(t, n) { const e = n.length; let r, i, o, a, u, c = null,
                f = n[e - 2],
                s = n[e - 1],
                l = this._regioncode(f, s); for (let h = 0; h < e; h += 2)
                if (r = f, i = s, f = n[h], s = n[h + 1], o = l, l = this._regioncode(f, s), 0 === o && 0 === l) a = u, u = 0, c ? c.push(f, s) : c = [f, s];
                else { let n, e, h, d, p; if (0 === o) { if (null === (n = this._clipSegment(r, i, f, s, o, l))) continue;
                        [e, h, d, p] = n } else { if (null === (n = this._clipSegment(f, s, r, i, l, o))) continue;
                        [d, p, e, h] = n, a = u, u = this._edgecode(e, h), a && u && this._edge(t, a, u, c, c.length), c ? c.push(e, h) : c = [e, h] } a = u, u = this._edgecode(d, p), a && u && this._edge(t, a, u, c, c.length), c ? c.push(d, p) : c = [d, p] } if (c) a = u, u = this._edgecode(c[0], c[1]), a && u && this._edge(t, a, u, c, c.length);
            else if (this.contains(t, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2)) return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin]; return c } _clipSegment(t, n, e, r, i, o) { for (;;) { if (0 === i && 0 === o) return [t, n, e, r]; if (i & o) return null; let a, u, c = i || o;
                8 & c ? (a = t + (e - t) * (this.ymax - n) / (r - n), u = this.ymax) : 4 & c ? (a = t + (e - t) * (this.ymin - n) / (r - n), u = this.ymin) : 2 & c ? (u = n + (r - n) * (this.xmax - t) / (e - t), a = this.xmax) : (u = n + (r - n) * (this.xmin - t) / (e - t), a = this.xmin), i ? (t = a, n = u, i = this._regioncode(t, n)) : (e = a, r = u, o = this._regioncode(e, r)) } } _clipInfinite(t, n, e, r, i, o) { let a, u = Array.from(n); if ((a = this._project(u[0], u[1], e, r)) && u.unshift(a[0], a[1]), (a = this._project(u[u.length - 2], u[u.length - 1], i, o)) && u.push(a[0], a[1]), u = this._clipFinite(t, u))
                for (let n, e = 0, r = u.length, i = this._edgecode(u[r - 2], u[r - 1]); e < r; e += 2) n = i, i = this._edgecode(u[e], u[e + 1]), n && i && (e = this._edge(t, n, i, u, e), r = u.length);
            else this.contains(t, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2) && (u = [this.xmin, this.ymin, this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax]); return u } _edge(t, n, e, r, i) { for (; n !== e;) { let e, o; switch (n) {
                    case 5:
                        n = 4; continue;
                    case 4:
                        n = 6, e = this.xmax, o = this.ymin; break;
                    case 6:
                        n = 2; continue;
                    case 2:
                        n = 10, e = this.xmax, o = this.ymax; break;
                    case 10:
                        n = 8; continue;
                    case 8:
                        n = 9, e = this.xmin, o = this.ymax; break;
                    case 9:
                        n = 1; continue;
                    case 1:
                        n = 5, e = this.xmin, o = this.ymin } r[i] === e && r[i + 1] === o || !this.contains(t, e, o) || (r.splice(i, 0, e, o), i += 2) } if (r.length > 4)
                for (let t = 0; t < r.length; t += 2) { const n = (t + 2) % r.length,
                        e = (t + 4) % r.length;
                    (r[t] === r[n] && r[n] === r[e] || r[t + 1] === r[n + 1] && r[n + 1] === r[e + 1]) && (r.splice(n, 2), t -= 2) }
            return i } _project(t, n, e, r) { let i, o, a, u = 1 / 0; if (r < 0) { if (n <= this.ymin) return null;
                (i = (this.ymin - n) / r) < u && (a = this.ymin, o = t + (u = i) * e) } else if (r > 0) { if (n >= this.ymax) return null;
                (i = (this.ymax - n) / r) < u && (a = this.ymax, o = t + (u = i) * e) } if (e > 0) { if (t >= this.xmax) return null;
                (i = (this.xmax - t) / e) < u && (o = this.xmax, a = n + (u = i) * r) } else if (e < 0) { if (t <= this.xmin) return null;
                (i = (this.xmin - t) / e) < u && (o = this.xmin, a = n + (u = i) * r) } return [o, a] } _edgecode(t, n) { return (t === this.xmin ? 1 : t === this.xmax ? 2 : 0) | (n === this.ymin ? 4 : n === this.ymax ? 8 : 0) } _regioncode(t, n) { return (t < this.xmin ? 1 : t > this.xmax ? 2 : 0) | (n < this.ymin ? 4 : n > this.ymax ? 8 : 0) } } const Ba = 2 * Math.PI,
        Ya = Math.pow;

    function La(t) { return t[0] }

    function ja(t) { return t[1] }

    function Ha(t, n, e) { return [t + Math.sin(t + n) * e, n + Math.cos(t - n) * e] } class Xa { static from(t, n = La, e = ja, r) { return new Xa("length" in t ? function(t, n, e, r) { const i = t.length,
                    o = new Float64Array(2 * i); for (let a = 0; a < i; ++a) { const i = t[a];
                    o[2 * a] = n.call(r, i, a, t), o[2 * a + 1] = e.call(r, i, a, t) } return o }(t, n, e, r) : Float64Array.from(function*(t, n, e, r) { let i = 0; for (const o of t) yield n.call(r, o, i, t), yield e.call(r, o, i, t), ++i }(t, n, e, r))) } constructor(t) { this._delaunator = new Sa(t), this.inedges = new Int32Array(t.length / 2), this._hullIndex = new Int32Array(t.length / 2), this.points = this._delaunator.coords, this._init() } update() { return this._delaunator.update(), this._init(), this } _init() { const t = this._delaunator,
                n = this.points; if (t.hull && t.hull.length > 2 && function(t) { const { triangles: n, coords: e } = t; for (let t = 0; t < n.length; t += 3) { const r = 2 * n[t],
                            i = 2 * n[t + 1],
                            o = 2 * n[t + 2]; if ((e[o] - e[r]) * (e[i + 1] - e[r + 1]) - (e[i] - e[r]) * (e[o + 1] - e[r + 1]) > 1e-10) return !1 } return !0 }(t)) { this.collinear = Int32Array.from({ length: n.length / 2 }, (t, n) => n).sort((t, e) => n[2 * t] - n[2 * e] || n[2 * t + 1] - n[2 * e + 1]); const t = this.collinear[0],
                    e = this.collinear[this.collinear.length - 1],
                    r = [n[2 * t], n[2 * t + 1], n[2 * e], n[2 * e + 1]],
                    i = 1e-8 * Math.hypot(r[3] - r[1], r[2] - r[0]); for (let t = 0, e = n.length / 2; t < e; ++t) { const e = Ha(n[2 * t], n[2 * t + 1], i);
                    n[2 * t] = e[0], n[2 * t + 1] = e[1] } this._delaunator = new Sa(n) } else delete this.collinear; const e = this.halfedges = this._delaunator.halfedges,
                r = this.hull = this._delaunator.hull,
                i = this.triangles = this._delaunator.triangles,
                o = this.inedges.fill(-1),
                a = this._hullIndex.fill(-1); for (let t = 0, n = e.length; t < n; ++t) { const n = i[t % 3 == 2 ? t - 2 : t + 1]; - 1 !== e[t] && -1 !== o[n] || (o[n] = t) } for (let t = 0, n = r.length; t < n; ++t) a[r[t]] = t;
            r.length <= 2 && r.length > 0 && (this.triangles = new Int32Array(3).fill(-1), this.halfedges = new Int32Array(3).fill(-1), this.triangles[0] = r[0], this.triangles[1] = r[1], this.triangles[2] = r[1], o[r[0]] = 1, 2 === r.length && (o[r[1]] = 0)) } voronoi(t) { return new Ia(this, t) }* neighbors(t) { const { inedges: n, hull: e, _hullIndex: r, halfedges: i, triangles: o, collinear: a } = this; if (a) { const n = a.indexOf(t); return n > 0 && (yield a[n - 1]), void(n < a.length - 1 && (yield a[n + 1])) } const u = n[t]; if (-1 === u) return; let c = u,
                f = -1;
            do { if (yield f = o[c], c = c % 3 == 2 ? c - 2 : c + 1, o[c] !== t) return; if (c = i[c], -1 === c) { const n = e[(r[t] + 1) % e.length]; return void(n !== f && (yield n)) } } while (c !== u) } find(t, n, e = 0) { if ((t = +t) != t || (n = +n) != n) return -1; const r = e; let i; for (;
                (i = this._step(e, t, n)) >= 0 && i !== e && i !== r;) e = i; return i } _step(t, n, e) { const { inedges: r, hull: i, _hullIndex: o, halfedges: a, triangles: u, points: c } = this; if (-1 === r[t] || !c.length) return (t + 1) % (c.length >> 1); let f = t,
                s = Ya(n - c[2 * t], 2) + Ya(e - c[2 * t + 1], 2); const l = r[t]; let h = l;
            do { let r = u[h]; const l = Ya(n - c[2 * r], 2) + Ya(e - c[2 * r + 1], 2); if (l < s && (s = l, f = r), h = h % 3 == 2 ? h - 2 : h + 1, u[h] !== t) break; if (h = a[h], -1 === h) { if (h = i[(o[t] + 1) % i.length], h !== r && Ya(n - c[2 * h], 2) + Ya(e - c[2 * h + 1], 2) < s) return h; break } } while (h !== l); return f } render(t) { const n = null == t ? t = new Oa : void 0,
                { points: e, halfedges: r, triangles: i } = this; for (let n = 0, o = r.length; n < o; ++n) { const o = r[n]; if (o < n) continue; const a = 2 * i[n],
                    u = 2 * i[o];
                t.moveTo(e[a], e[a + 1]), t.lineTo(e[u], e[u + 1]) } return this.renderHull(t), n && n.value() } renderPoints(t, n = 2) { const e = null == t ? t = new Oa : void 0,
                { points: r } = this; for (let e = 0, i = r.length; e < i; e += 2) { const i = r[e],
                    o = r[e + 1];
                t.moveTo(i + n, o), t.arc(i, o, n, 0, Ba) } return e && e.value() } renderHull(t) { const n = null == t ? t = new Oa : void 0,
                { hull: e, points: r } = this,
                i = 2 * e[0],
                o = e.length;
            t.moveTo(r[i], r[i + 1]); for (let n = 1; n < o; ++n) { const i = 2 * e[n];
                t.lineTo(r[i], r[i + 1]) } return t.closePath(), n && n.value() } hullPolygon() { const t = new Ua; return this.renderHull(t), t.value() } renderTriangle(t, n) { const e = null == n ? n = new Oa : void 0,
                { points: r, triangles: i } = this,
                o = 2 * i[t *= 3],
                a = 2 * i[t + 1],
                u = 2 * i[t + 2]; return n.moveTo(r[o], r[o + 1]), n.lineTo(r[a], r[a + 1]), n.lineTo(r[u], r[u + 1]), n.closePath(), e && e.value() }* trianglePolygons() { const { triangles: t } = this; for (let n = 0, e = t.length / 3; n < e; ++n) yield this.trianglePolygon(n) } trianglePolygon(t) { const n = new Ua; return this.renderTriangle(t, n), n.value() } } var Ga = {},
        Va = {};

    function $a(t) { return new Function("d", "return {" + t.map((function(t, n) { return JSON.stringify(t) + ": d[" + n + '] || ""' })).join(",") + "}") }

    function Wa(t) { var n = Object.create(null),
            e = []; return t.forEach((function(t) { for (var r in t) r in n || e.push(n[r] = r) })), e }

    function Za(t, n) { var e = t + "",
            r = e.length; return r < n ? new Array(n - r + 1).join(0) + e : e }

    function Ka(t) { var n = t.getUTCHours(),
            e = t.getUTCMinutes(),
            r = t.getUTCSeconds(),
            i = t.getUTCMilliseconds(); return isNaN(t) ? "Invalid Date" : function(t) { return t < 0 ? "-" + Za(-t, 6) : t > 9999 ? "+" + Za(t, 6) : Za(t, 4) }(t.getUTCFullYear()) + "-" + Za(t.getUTCMonth() + 1, 2) + "-" + Za(t.getUTCDate(), 2) + (i ? "T" + Za(n, 2) + ":" + Za(e, 2) + ":" + Za(r, 2) + "." + Za(i, 3) + "Z" : r ? "T" + Za(n, 2) + ":" + Za(e, 2) + ":" + Za(r, 2) + "Z" : e || n ? "T" + Za(n, 2) + ":" + Za(e, 2) + "Z" : "") }

    function Qa(t) { var n = new RegExp('["' + t + "\n\r]"),
            e = t.charCodeAt(0);

        function r(t, n) { var r, i = [],
                o = t.length,
                a = 0,
                u = 0,
                c = o <= 0,
                f = !1;

            function s() { if (c) return Va; if (f) return f = !1, Ga; var n, r, i = a; if (34 === t.charCodeAt(i)) { for (; a++ < o && 34 !== t.charCodeAt(a) || 34 === t.charCodeAt(++a);); return (n = a) >= o ? c = !0 : 10 === (r = t.charCodeAt(a++)) ? f = !0 : 13 === r && (f = !0, 10 === t.charCodeAt(a) && ++a), t.slice(i + 1, n - 1).replace(/""/g, '"') } for (; a < o;) { if (10 === (r = t.charCodeAt(n = a++))) f = !0;
                    else if (13 === r) f = !0, 10 === t.charCodeAt(a) && ++a;
                    else if (r !== e) continue; return t.slice(i, n) } return c = !0, t.slice(i, o) } for (10 === t.charCodeAt(o - 1) && --o, 13 === t.charCodeAt(o - 1) && --o;
                (r = s()) !== Va;) { for (var l = []; r !== Ga && r !== Va;) l.push(r), r = s();
                n && null == (l = n(l, u++)) || i.push(l) } return i }

        function i(n, e) { return n.map((function(n) { return e.map((function(t) { return a(n[t]) })).join(t) })) }

        function o(n) { return n.map(a).join(t) }

        function a(t) { return null == t ? "" : t instanceof Date ? Ka(t) : n.test(t += "") ? '"' + t.replace(/"/g, '""') + '"' : t } return { parse: function(t, n) { var e, i, o = r(t, (function(t, r) { if (e) return e(t, r - 1);
                    i = t, e = n ? function(t, n) { var e = $a(t); return function(r, i) { return n(e(r), i, t) } }(t, n) : $a(t) })); return o.columns = i || [], o }, parseRows: r, format: function(n, e) { return null == e && (e = Wa(n)), [e.map(a).join(t)].concat(i(n, e)).join("\n") }, formatBody: function(t, n) { return null == n && (n = Wa(t)), i(t, n).join("\n") }, formatRows: function(t) { return t.map(o).join("\n") }, formatRow: o, formatValue: a } } var Ja = Qa(","),
        tu = Ja.parse,
        nu = Ja.parseRows,
        eu = Ja.format,
        ru = Ja.formatBody,
        iu = Ja.formatRows,
        ou = Ja.formatRow,
        au = Ja.formatValue,
        uu = Qa("\t"),
        cu = uu.parse,
        fu = uu.parseRows,
        su = uu.format,
        lu = uu.formatBody,
        hu = uu.formatRows,
        du = uu.formatRow,
        pu = uu.formatValue; const gu = new Date("2019-01-01T00:00").getHours() || new Date("2019-07-01T00:00").getHours();

    function yu(t) { if (!t.ok) throw new Error(t.status + " " + t.statusText); return t.blob() }

    function vu(t) { if (!t.ok) throw new Error(t.status + " " + t.statusText); return t.arrayBuffer() }

    function _u(t) { if (!t.ok) throw new Error(t.status + " " + t.statusText); return t.text() }

    function bu(t, n) { return fetch(t, n).then(_u) }

    function mu(t) { return function(n, e, r) { return 2 === arguments.length && "function" == typeof e && (r = e, e = void 0), bu(n, e).then((function(n) { return t(n, r) })) } } var xu = mu(tu),
        wu = mu(cu);

    function Mu(t) { if (!t.ok) throw new Error(t.status + " " + t.statusText); if (204 !== t.status && 205 !== t.status) return t.json() }

    function Au(t) { return (n, e) => bu(n, e).then(n => (new DOMParser).parseFromString(n, t)) } var Tu = Au("application/xml"),
        Su = Au("text/html"),
        Eu = Au("image/svg+xml");

    function ku(t, n, e, r) { if (isNaN(n) || isNaN(e)) return t; var i, o, a, u, c, f, s, l, h, d = t._root,
            p = { data: r },
            g = t._x0,
            y = t._y0,
            v = t._x1,
            _ = t._y1; if (!d) return t._root = p, t; for (; d.length;)
            if ((f = n >= (o = (g + v) / 2)) ? g = o : v = o, (s = e >= (a = (y + _) / 2)) ? y = a : _ = a, i = d, !(d = d[l = s << 1 | f])) return i[l] = p, t; if (u = +t._x.call(null, d.data), c = +t._y.call(null, d.data), n === u && e === c) return p.next = d, i ? i[l] = p : t._root = p, t;
        do { i = i ? i[l] = new Array(4) : t._root = new Array(4), (f = n >= (o = (g + v) / 2)) ? g = o : v = o, (s = e >= (a = (y + _) / 2)) ? y = a : _ = a } while ((l = s << 1 | f) == (h = (c >= a) << 1 | u >= o)); return i[h] = d, i[l] = p, t }

    function Nu(t, n, e, r, i) { this.node = t, this.x0 = n, this.y0 = e, this.x1 = r, this.y1 = i }

    function Cu(t) { return t[0] }

    function Pu(t) { return t[1] }

    function zu(t, n, e) { var r = new Du(null == n ? Cu : n, null == e ? Pu : e, NaN, NaN, NaN, NaN); return null == t ? r : r.addAll(t) }

    function Du(t, n, e, r, i, o) { this._x = t, this._y = n, this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this._root = void 0 }

    function qu(t) { for (var n = { data: t.data }, e = n; t = t.next;) e = e.next = { data: t.data }; return n } var Ru = zu.prototype = Du.prototype;

    function Fu(t) { return function() { return t } }

    function Ou(t) { return 1e-6 * (t() - .5) }

    function Uu(t) { return t.x + t.vx }

    function Iu(t) { return t.y + t.vy }

    function Bu(t) { return t.index }

    function Yu(t, n) { var e = t.get(n); if (!e) throw new Error("node not found: " + n); return e } Ru.copy = function() { var t, n, e = new Du(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
            r = this._root; if (!r) return e; if (!r.length) return e._root = qu(r), e; for (t = [{ source: r, target: e._root = new Array(4) }]; r = t.pop();)
            for (var i = 0; i < 4; ++i)(n = r.source[i]) && (n.length ? t.push({ source: n, target: r.target[i] = new Array(4) }) : r.target[i] = qu(n)); return e }, Ru.add = function(t) { const n = +this._x.call(null, t),
            e = +this._y.call(null, t); return ku(this.cover(n, e), n, e, t) }, Ru.addAll = function(t) { var n, e, r, i, o = t.length,
            a = new Array(o),
            u = new Array(o),
            c = 1 / 0,
            f = 1 / 0,
            s = -1 / 0,
            l = -1 / 0; for (e = 0; e < o; ++e) isNaN(r = +this._x.call(null, n = t[e])) || isNaN(i = +this._y.call(null, n)) || (a[e] = r, u[e] = i, r < c && (c = r), r > s && (s = r), i < f && (f = i), i > l && (l = i)); if (c > s || f > l) return this; for (this.cover(c, f).cover(s, l), e = 0; e < o; ++e) ku(this, a[e], u[e], t[e]); return this }, Ru.cover = function(t, n) { if (isNaN(t = +t) || isNaN(n = +n)) return this; var e = this._x0,
            r = this._y0,
            i = this._x1,
            o = this._y1; if (isNaN(e)) i = (e = Math.floor(t)) + 1, o = (r = Math.floor(n)) + 1;
        else { for (var a, u, c = i - e || 1, f = this._root; e > t || t >= i || r > n || n >= o;) switch (u = (n < r) << 1 | t < e, (a = new Array(4))[u] = f, f = a, c *= 2, u) {
                case 0:
                    i = e + c, o = r + c; break;
                case 1:
                    e = i - c, o = r + c; break;
                case 2:
                    i = e + c, r = o - c; break;
                case 3:
                    e = i - c, r = o - c } this._root && this._root.length && (this._root = f) } return this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this }, Ru.data = function() { var t = []; return this.visit((function(n) { if (!n.length)
                do { t.push(n.data) } while (n = n.next) })), t }, Ru.extent = function(t) { return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [
            [this._x0, this._y0],
            [this._x1, this._y1]
        ] }, Ru.find = function(t, n, e) { var r, i, o, a, u, c, f, s = this._x0,
            l = this._y0,
            h = this._x1,
            d = this._y1,
            p = [],
            g = this._root; for (g && p.push(new Nu(g, s, l, h, d)), null == e ? e = 1 / 0 : (s = t - e, l = n - e, h = t + e, d = n + e, e *= e); c = p.pop();)
            if (!(!(g = c.node) || (i = c.x0) > h || (o = c.y0) > d || (a = c.x1) < s || (u = c.y1) < l))
                if (g.length) { var y = (i + a) / 2,
                        v = (o + u) / 2;
                    p.push(new Nu(g[3], y, v, a, u), new Nu(g[2], i, v, y, u), new Nu(g[1], y, o, a, v), new Nu(g[0], i, o, y, v)), (f = (n >= v) << 1 | t >= y) && (c = p[p.length - 1], p[p.length - 1] = p[p.length - 1 - f], p[p.length - 1 - f] = c) } else { var _ = t - +this._x.call(null, g.data),
                        b = n - +this._y.call(null, g.data),
                        m = _ * _ + b * b; if (m < e) { var x = Math.sqrt(e = m);
                        s = t - x, l = n - x, h = t + x, d = n + x, r = g.data } } return r }, Ru.remove = function(t) { if (isNaN(o = +this._x.call(null, t)) || isNaN(a = +this._y.call(null, t))) return this; var n, e, r, i, o, a, u, c, f, s, l, h, d = this._root,
            p = this._x0,
            g = this._y0,
            y = this._x1,
            v = this._y1; if (!d) return this; if (d.length)
            for (;;) { if ((f = o >= (u = (p + y) / 2)) ? p = u : y = u, (s = a >= (c = (g + v) / 2)) ? g = c : v = c, n = d, !(d = d[l = s << 1 | f])) return this; if (!d.length) break;
                (n[l + 1 & 3] || n[l + 2 & 3] || n[l + 3 & 3]) && (e = n, h = l) }
        for (; d.data !== t;)
            if (r = d, !(d = d.next)) return this; return (i = d.next) && delete d.next, r ? (i ? r.next = i : delete r.next, this) : n ? (i ? n[l] = i : delete n[l], (d = n[0] || n[1] || n[2] || n[3]) && d === (n[3] || n[2] || n[1] || n[0]) && !d.length && (e ? e[h] = d : this._root = d), this) : (this._root = i, this) }, Ru.removeAll = function(t) { for (var n = 0, e = t.length; n < e; ++n) this.remove(t[n]); return this }, Ru.root = function() { return this._root }, Ru.size = function() { var t = 0; return this.visit((function(n) { if (!n.length)
                do {++t } while (n = n.next) })), t }, Ru.visit = function(t) { var n, e, r, i, o, a, u = [],
            c = this._root; for (c && u.push(new Nu(c, this._x0, this._y0, this._x1, this._y1)); n = u.pop();)
            if (!t(c = n.node, r = n.x0, i = n.y0, o = n.x1, a = n.y1) && c.length) { var f = (r + o) / 2,
                    s = (i + a) / 2;
                (e = c[3]) && u.push(new Nu(e, f, s, o, a)), (e = c[2]) && u.push(new Nu(e, r, s, f, a)), (e = c[1]) && u.push(new Nu(e, f, i, o, s)), (e = c[0]) && u.push(new Nu(e, r, i, f, s)) } return this }, Ru.visitAfter = function(t) { var n, e = [],
            r = []; for (this._root && e.push(new Nu(this._root, this._x0, this._y0, this._x1, this._y1)); n = e.pop();) { var i = n.node; if (i.length) { var o, a = n.x0,
                    u = n.y0,
                    c = n.x1,
                    f = n.y1,
                    s = (a + c) / 2,
                    l = (u + f) / 2;
                (o = i[0]) && e.push(new Nu(o, a, u, s, l)), (o = i[1]) && e.push(new Nu(o, s, u, c, l)), (o = i[2]) && e.push(new Nu(o, a, l, s, f)), (o = i[3]) && e.push(new Nu(o, s, l, c, f)) } r.push(n) } for (; n = r.pop();) t(n.node, n.x0, n.y0, n.x1, n.y1); return this }, Ru.x = function(t) { return arguments.length ? (this._x = t, this) : this._x }, Ru.y = function(t) { return arguments.length ? (this._y = t, this) : this._y }; const Lu = 4294967296;

    function ju(t) { return t.x }

    function Hu(t) { return t.y } var Xu = Math.PI * (3 - Math.sqrt(5));

    function Gu(t, n) { if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null; var e, r = t.slice(0, e); return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)] }

    function Vu(t) { return (t = Gu(Math.abs(t))) ? t[1] : NaN } var $u, Wu = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function Zu(t) { if (!(n = Wu.exec(t))) throw new Error("invalid format: " + t); var n; return new Ku({ fill: n[1], align: n[2], sign: n[3], symbol: n[4], zero: n[5], width: n[6], comma: n[7], precision: n[8] && n[8].slice(1), trim: n[9], type: n[10] }) }

    function Ku(t) { this.fill = void 0 === t.fill ? " " : t.fill + "", this.align = void 0 === t.align ? ">" : t.align + "", this.sign = void 0 === t.sign ? "-" : t.sign + "", this.symbol = void 0 === t.symbol ? "" : t.symbol + "", this.zero = !!t.zero, this.width = void 0 === t.width ? void 0 : +t.width, this.comma = !!t.comma, this.precision = void 0 === t.precision ? void 0 : +t.precision, this.trim = !!t.trim, this.type = void 0 === t.type ? "" : t.type + "" }

    function Qu(t, n) { var e = Gu(t, n); if (!e) return t + ""; var r = e[0],
            i = e[1]; return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0") } Zu.prototype = Ku.prototype, Ku.prototype.toString = function() { return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type }; var Ju = { "%": (t, n) => (100 * t).toFixed(n), b: t => Math.round(t).toString(2), c: t => t + "", d: function(t) { return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10) }, e: (t, n) => t.toExponential(n), f: (t, n) => t.toFixed(n), g: (t, n) => t.toPrecision(n), o: t => Math.round(t).toString(8), p: (t, n) => Qu(100 * t, n), r: Qu, s: function(t, n) { var e = Gu(t, n); if (!e) return t + ""; var r = e[0],
                i = e[1],
                o = i - ($u = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
                a = r.length; return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + Gu(t, Math.max(0, n + o - 1))[0] }, X: t => Math.round(t).toString(16).toUpperCase(), x: t => Math.round(t).toString(16) };

    function tc(t) { return t } var nc, ec = Array.prototype.map,
        rc = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

    function ic(t) { var n, e, r = void 0 === t.grouping || void 0 === t.thousands ? tc : (n = ec.call(t.grouping, Number), e = t.thousands + "", function(t, r) { for (var i = t.length, o = [], a = 0, u = n[0], c = 0; i > 0 && u > 0 && (c + u + 1 > r && (u = Math.max(1, r - c)), o.push(t.substring(i -= u, i + u)), !((c += u + 1) > r));) u = n[a = (a + 1) % n.length]; return o.reverse().join(e) }),
            i = void 0 === t.currency ? "" : t.currency[0] + "",
            o = void 0 === t.currency ? "" : t.currency[1] + "",
            a = void 0 === t.decimal ? "." : t.decimal + "",
            u = void 0 === t.numerals ? tc : function(t) { return function(n) { return n.replace(/[0-9]/g, (function(n) { return t[+n] })) } }(ec.call(t.numerals, String)),
            c = void 0 === t.percent ? "%" : t.percent + "",
            f = void 0 === t.minus ? "−" : t.minus + "",
            s = void 0 === t.nan ? "NaN" : t.nan + "";

        function l(t) { var n = (t = Zu(t)).fill,
                e = t.align,
                l = t.sign,
                h = t.symbol,
                d = t.zero,
                p = t.width,
                g = t.comma,
                y = t.precision,
                v = t.trim,
                _ = t.type; "n" === _ ? (g = !0, _ = "g") : Ju[_] || (void 0 === y && (y = 12), v = !0, _ = "g"), (d || "0" === n && "=" === e) && (d = !0, n = "0", e = "="); var b = "$" === h ? i : "#" === h && /[boxX]/.test(_) ? "0" + _.toLowerCase() : "",
                m = "$" === h ? o : /[%p]/.test(_) ? c : "",
                x = Ju[_],
                w = /[defgprs%]/.test(_);

            function M(t) { var i, o, c, h = b,
                    M = m; if ("c" === _) M = x(t) + M, t = "";
                else { var A = (t = +t) < 0 || 1 / t < 0; if (t = isNaN(t) ? s : x(Math.abs(t), y), v && (t = function(t) { t: for (var n, e = t.length, r = 1, i = -1; r < e; ++r) switch (t[r]) {
                                case ".":
                                    i = n = r; break;
                                case "0":
                                    0 === i && (i = r), n = r; break;
                                default:
                                    if (!+t[r]) break t;
                                    i > 0 && (i = 0) }
                            return i > 0 ? t.slice(0, i) + t.slice(n + 1) : t }(t)), A && 0 == +t && "+" !== l && (A = !1), h = (A ? "(" === l ? l : f : "-" === l || "(" === l ? "" : l) + h, M = ("s" === _ ? rc[8 + $u / 3] : "") + M + (A && "(" === l ? ")" : ""), w)
                        for (i = -1, o = t.length; ++i < o;)
                            if (48 > (c = t.charCodeAt(i)) || c > 57) { M = (46 === c ? a + t.slice(i + 1) : t.slice(i)) + M, t = t.slice(0, i); break } } g && !d && (t = r(t, 1 / 0)); var T = h.length + t.length + M.length,
                    S = T < p ? new Array(p - T + 1).join(n) : ""; switch (g && d && (t = r(S + t, S.length ? p - M.length : 1 / 0), S = ""), e) {
                    case "<":
                        t = h + t + M + S; break;
                    case "=":
                        t = h + S + t + M; break;
                    case "^":
                        t = S.slice(0, T = S.length >> 1) + h + t + M + S.slice(T); break;
                    default:
                        t = S + h + t + M } return u(t) } return y = void 0 === y ? 6 : /[gprs]/.test(_) ? Math.max(1, Math.min(21, y)) : Math.max(0, Math.min(20, y)), M.toString = function() { return t + "" }, M } return { format: l, formatPrefix: function(t, n) { var e = l(((t = Zu(t)).type = "f", t)),
                    r = 3 * Math.max(-8, Math.min(8, Math.floor(Vu(n) / 3))),
                    i = Math.pow(10, -r),
                    o = rc[8 + r / 3]; return function(t) { return e(i * t) + o } } } }

    function oc(n) { return nc = ic(n), t.format = nc.format, t.formatPrefix = nc.formatPrefix, nc }

    function ac(t) { return Math.max(0, -Vu(Math.abs(t))) }

    function uc(t, n) { return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Vu(n) / 3))) - Vu(Math.abs(t))) }

    function cc(t, n) { return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Vu(n) - Vu(t)) + 1 } oc({ thousands: ",", grouping: [3], currency: ["$", ""] }); var fc = 1e-6,
        sc = 1e-12,
        lc = Math.PI,
        hc = lc / 2,
        dc = lc / 4,
        pc = 2 * lc,
        gc = 180 / lc,
        yc = lc / 180,
        vc = Math.abs,
        _c = Math.atan,
        bc = Math.atan2,
        mc = Math.cos,
        xc = Math.ceil,
        wc = Math.exp,
        Mc = Math.hypot,
        Ac = Math.log,
        Tc = Math.pow,
        Sc = Math.sin,
        Ec = Math.sign || function(t) { return t > 0 ? 1 : t < 0 ? -1 : 0 },
        kc = Math.sqrt,
        Nc = Math.tan;

    function Cc(t) { return t > 1 ? 0 : t < -1 ? lc : Math.acos(t) }

    function Pc(t) { return t > 1 ? hc : t < -1 ? -hc : Math.asin(t) }

    function zc(t) { return (t = Sc(t / 2)) * t }

    function Dc() {}

    function qc(t, n) { t && Fc.hasOwnProperty(t.type) && Fc[t.type](t, n) } var Rc = { Feature: function(t, n) { qc(t.geometry, n) }, FeatureCollection: function(t, n) { for (var e = t.features, r = -1, i = e.length; ++r < i;) qc(e[r].geometry, n) } },
        Fc = { Sphere: function(t, n) { n.sphere() }, Point: function(t, n) { t = t.coordinates, n.point(t[0], t[1], t[2]) }, MultiPoint: function(t, n) { for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) t = e[r], n.point(t[0], t[1], t[2]) }, LineString: function(t, n) { Oc(t.coordinates, n, 0) }, MultiLineString: function(t, n) { for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) Oc(e[r], n, 0) }, Polygon: function(t, n) { Uc(t.coordinates, n) }, MultiPolygon: function(t, n) { for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) Uc(e[r], n) }, GeometryCollection: function(t, n) { for (var e = t.geometries, r = -1, i = e.length; ++r < i;) qc(e[r], n) } };

    function Oc(t, n, e) { var r, i = -1,
            o = t.length - e; for (n.lineStart(); ++i < o;) r = t[i], n.point(r[0], r[1], r[2]);
        n.lineEnd() }

    function Uc(t, n) { var e = -1,
            r = t.length; for (n.polygonStart(); ++e < r;) Oc(t[e], n, 1);
        n.polygonEnd() }

    function Ic(t, n) { t && Rc.hasOwnProperty(t.type) ? Rc[t.type](t, n) : qc(t, n) } var Bc, Yc, Lc, jc, Hc, Xc, Gc, Vc, $c, Wc, Zc, Kc, Qc, Jc, tf, nf, ef = new g,
        rf = new g,
        of = { point: Dc, lineStart: Dc, lineEnd: Dc, polygonStart: function() { ef = new g, of .lineStart = af, of .lineEnd = uf }, polygonEnd: function() { var t = +ef;
                rf.add(t < 0 ? pc + t : t), this.lineStart = this.lineEnd = this.point = Dc }, sphere: function() { rf.add(pc) } };

    function af() { of .point = cf }

    function uf() { ff(Bc, Yc) }

    function cf(t, n) { of .point = ff, Bc = t, Yc = n, Lc = t *= yc, jc = mc(n = (n *= yc) / 2 + dc), Hc = Sc(n) }

    function ff(t, n) { var e = (t *= yc) - Lc,
            r = e >= 0 ? 1 : -1,
            i = r * e,
            o = mc(n = (n *= yc) / 2 + dc),
            a = Sc(n),
            u = Hc * a,
            c = jc * o + u * mc(i),
            f = u * r * Sc(i);
        ef.add(bc(f, c)), Lc = t, jc = o, Hc = a }

    function sf(t) { return [bc(t[1], t[0]), Pc(t[2])] }

    function lf(t) { var n = t[0],
            e = t[1],
            r = mc(e); return [r * mc(n), r * Sc(n), Sc(e)] }

    function hf(t, n) { return t[0] * n[0] + t[1] * n[1] + t[2] * n[2] }

    function df(t, n) { return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]] }

    function pf(t, n) { t[0] += n[0], t[1] += n[1], t[2] += n[2] }

    function gf(t, n) { return [t[0] * n, t[1] * n, t[2] * n] }

    function yf(t) { var n = kc(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
        t[0] /= n, t[1] /= n, t[2] /= n } var vf, _f, bf, mf, xf, wf, Mf, Af, Tf, Sf, Ef, kf, Nf, Cf, Pf, zf, Df = { point: qf, lineStart: Ff, lineEnd: Of, polygonStart: function() { Df.point = Uf, Df.lineStart = If, Df.lineEnd = Bf, Jc = new g, of .polygonStart() }, polygonEnd: function() { of .polygonEnd(), Df.point = qf, Df.lineStart = Ff, Df.lineEnd = Of, ef < 0 ? (Xc = -(Vc = 180), Gc = -($c = 90)) : Jc > fc ? $c = 90 : Jc < -1e-6 && (Gc = -90), nf[0] = Xc, nf[1] = Vc }, sphere: function() { Xc = -(Vc = 180), Gc = -($c = 90) } };

    function qf(t, n) { tf.push(nf = [Xc = t, Vc = t]), n < Gc && (Gc = n), n > $c && ($c = n) }

    function Rf(t, n) { var e = lf([t * yc, n * yc]); if (Qc) { var r = df(Qc, e),
                i = df([r[1], -r[0], 0], r);
            yf(i), i = sf(i); var o, a = t - Wc,
                u = a > 0 ? 1 : -1,
                c = i[0] * gc * u,
                f = vc(a) > 180;
            f ^ (u * Wc < c && c < u * t) ? (o = i[1] * gc) > $c && ($c = o) : f ^ (u * Wc < (c = (c + 360) % 360 - 180) && c < u * t) ? (o = -i[1] * gc) < Gc && (Gc = o) : (n < Gc && (Gc = n), n > $c && ($c = n)), f ? t < Wc ? Yf(Xc, t) > Yf(Xc, Vc) && (Vc = t) : Yf(t, Vc) > Yf(Xc, Vc) && (Xc = t) : Vc >= Xc ? (t < Xc && (Xc = t), t > Vc && (Vc = t)) : t > Wc ? Yf(Xc, t) > Yf(Xc, Vc) && (Vc = t) : Yf(t, Vc) > Yf(Xc, Vc) && (Xc = t) } else tf.push(nf = [Xc = t, Vc = t]);
        n < Gc && (Gc = n), n > $c && ($c = n), Qc = e, Wc = t }

    function Ff() { Df.point = Rf }

    function Of() { nf[0] = Xc, nf[1] = Vc, Df.point = qf, Qc = null }

    function Uf(t, n) { if (Qc) { var e = t - Wc;
            Jc.add(vc(e) > 180 ? e + (e > 0 ? 360 : -360) : e) } else Zc = t, Kc = n; of .point(t, n), Rf(t, n) }

    function If() { of .lineStart() }

    function Bf() { Uf(Zc, Kc), of .lineEnd(), vc(Jc) > fc && (Xc = -(Vc = 180)), nf[0] = Xc, nf[1] = Vc, Qc = null }

    function Yf(t, n) { return (n -= t) < 0 ? n + 360 : n }

    function Lf(t, n) { return t[0] - n[0] }

    function jf(t, n) { return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n } var Hf = { sphere: Dc, point: Xf, lineStart: Vf, lineEnd: Zf, polygonStart: function() { Hf.lineStart = Kf, Hf.lineEnd = Qf }, polygonEnd: function() { Hf.lineStart = Vf, Hf.lineEnd = Zf } };

    function Xf(t, n) { t *= yc; var e = mc(n *= yc);
        Gf(e * mc(t), e * Sc(t), Sc(n)) }

    function Gf(t, n, e) {++vf, bf += (t - bf) / vf, mf += (n - mf) / vf, xf += (e - xf) / vf }

    function Vf() { Hf.point = $f }

    function $f(t, n) { t *= yc; var e = mc(n *= yc);
        Cf = e * mc(t), Pf = e * Sc(t), zf = Sc(n), Hf.point = Wf, Gf(Cf, Pf, zf) }

    function Wf(t, n) { t *= yc; var e = mc(n *= yc),
            r = e * mc(t),
            i = e * Sc(t),
            o = Sc(n),
            a = bc(kc((a = Pf * o - zf * i) * a + (a = zf * r - Cf * o) * a + (a = Cf * i - Pf * r) * a), Cf * r + Pf * i + zf * o);
        _f += a, wf += a * (Cf + (Cf = r)), Mf += a * (Pf + (Pf = i)), Af += a * (zf + (zf = o)), Gf(Cf, Pf, zf) }

    function Zf() { Hf.point = Xf }

    function Kf() { Hf.point = Jf }

    function Qf() { ts(kf, Nf), Hf.point = Xf }

    function Jf(t, n) { kf = t, Nf = n, t *= yc, n *= yc, Hf.point = ts; var e = mc(n);
        Cf = e * mc(t), Pf = e * Sc(t), zf = Sc(n), Gf(Cf, Pf, zf) }

    function ts(t, n) { t *= yc; var e = mc(n *= yc),
            r = e * mc(t),
            i = e * Sc(t),
            o = Sc(n),
            a = Pf * o - zf * i,
            u = zf * r - Cf * o,
            c = Cf * i - Pf * r,
            f = Mc(a, u, c),
            s = Pc(f),
            l = f && -s / f;
        Tf.add(l * a), Sf.add(l * u), Ef.add(l * c), _f += s, wf += s * (Cf + (Cf = r)), Mf += s * (Pf + (Pf = i)), Af += s * (zf + (zf = o)), Gf(Cf, Pf, zf) }

    function ns(t) { return function() { return t } }

    function es(t, n) {
        function e(e, r) { return e = t(e, r), n(e[0], e[1]) } return t.invert && n.invert && (e.invert = function(e, r) { return (e = n.invert(e, r)) && t.invert(e[0], e[1]) }), e }

    function rs(t, n) { return [vc(t) > lc ? t + Math.round(-t / pc) * pc : t, n] }

    function is(t, n, e) { return (t %= pc) ? n || e ? es(as(t), us(n, e)) : as(t) : n || e ? us(n, e) : rs }

    function os(t) { return function(n, e) { return [(n += t) > lc ? n - pc : n < -lc ? n + pc : n, e] } }

    function as(t) { var n = os(t); return n.invert = os(-t), n }

    function us(t, n) { var e = mc(t),
            r = Sc(t),
            i = mc(n),
            o = Sc(n);

        function a(t, n) { var a = mc(n),
                u = mc(t) * a,
                c = Sc(t) * a,
                f = Sc(n),
                s = f * e + u * r; return [bc(c * i - s * o, u * e - f * r), Pc(s * i + c * o)] } return a.invert = function(t, n) { var a = mc(n),
                u = mc(t) * a,
                c = Sc(t) * a,
                f = Sc(n),
                s = f * i - c * o; return [bc(c * i + f * o, u * e + s * r), Pc(s * e - u * r)] }, a }

    function cs(t) {
        function n(n) { return (n = t(n[0] * yc, n[1] * yc))[0] *= gc, n[1] *= gc, n } return t = is(t[0] * yc, t[1] * yc, t.length > 2 ? t[2] * yc : 0), n.invert = function(n) { return (n = t.invert(n[0] * yc, n[1] * yc))[0] *= gc, n[1] *= gc, n }, n }

    function fs(t, n, e, r, i, o) { if (e) { var a = mc(n),
                u = Sc(n),
                c = r * e;
            null == i ? (i = n + r * pc, o = n - c / 2) : (i = ss(a, i), o = ss(a, o), (r > 0 ? i < o : i > o) && (i += r * pc)); for (var f, s = i; r > 0 ? s > o : s < o; s -= c) f = sf([a, -u * mc(s), -u * Sc(s)]), t.point(f[0], f[1]) } }

    function ss(t, n) {
        (n = lf(n))[0] -= t, yf(n); var e = Cc(-n[1]); return ((-n[2] < 0 ? -e : e) + pc - fc) % pc }

    function ls() { var t, n = []; return { point: function(n, e, r) { t.push([n, e, r]) }, lineStart: function() { n.push(t = []) }, lineEnd: Dc, rejoin: function() { n.length > 1 && n.push(n.pop().concat(n.shift())) }, result: function() { var e = n; return n = [], t = null, e } } }

    function hs(t, n) { return vc(t[0] - n[0]) < fc && vc(t[1] - n[1]) < fc }

    function ds(t, n, e, r) { this.x = t, this.z = n, this.o = e, this.e = r, this.v = !1, this.n = this.p = null }

    function ps(t, n, e, r, i) { var o, a, u = [],
            c = []; if (t.forEach((function(t) { if (!((n = t.length - 1) <= 0)) { var n, e, r = t[0],
                        a = t[n]; if (hs(r, a)) { if (!r[2] && !a[2]) { for (i.lineStart(), o = 0; o < n; ++o) i.point((r = t[o])[0], r[1]); return void i.lineEnd() } a[0] += 2e-6 } u.push(e = new ds(r, t, null, !0)), c.push(e.o = new ds(r, null, e, !1)), u.push(e = new ds(a, t, null, !1)), c.push(e.o = new ds(a, null, e, !0)) } })), u.length) { for (c.sort(n), gs(u), gs(c), o = 0, a = c.length; o < a; ++o) c[o].e = e = !e; for (var f, s, l = u[0];;) { for (var h = l, d = !0; h.v;)
                    if ((h = h.n) === l) return;
                f = h.z, i.lineStart();
                do { if (h.v = h.o.v = !0, h.e) { if (d)
                            for (o = 0, a = f.length; o < a; ++o) i.point((s = f[o])[0], s[1]);
                        else r(h.x, h.n.x, 1, i);
                        h = h.n } else { if (d)
                            for (f = h.p.z, o = f.length - 1; o >= 0; --o) i.point((s = f[o])[0], s[1]);
                        else r(h.x, h.p.x, -1, i);
                        h = h.p } f = (h = h.o).z, d = !d } while (!h.v);
                i.lineEnd() } } }

    function gs(t) { if (n = t.length) { for (var n, e, r = 0, i = t[0]; ++r < n;) i.n = e = t[r], e.p = i, i = e;
            i.n = e = t[0], e.p = i } }

    function ys(t) { return vc(t[0]) <= lc ? t[0] : Ec(t[0]) * ((vc(t[0]) + lc) % pc - lc) }

    function vs(t, n) { var e = ys(n),
            r = n[1],
            i = Sc(r),
            o = [Sc(e), -mc(e), 0],
            a = 0,
            u = 0,
            c = new g;
        1 === i ? r = hc + fc : -1 === i && (r = -hc - fc); for (var f = 0, s = t.length; f < s; ++f)
            if (h = (l = t[f]).length)
                for (var l, h, d = l[h - 1], p = ys(d), y = d[1] / 2 + dc, v = Sc(y), _ = mc(y), b = 0; b < h; ++b, p = x, v = M, _ = A, d = m) { var m = l[b],
                        x = ys(m),
                        w = m[1] / 2 + dc,
                        M = Sc(w),
                        A = mc(w),
                        T = x - p,
                        S = T >= 0 ? 1 : -1,
                        E = S * T,
                        k = E > lc,
                        N = v * M; if (c.add(bc(N * S * Sc(E), _ * A + N * mc(E))), a += k ? T + S * pc : T, k ^ p >= e ^ x >= e) { var C = df(lf(d), lf(m));
                        yf(C); var P = df(o, C);
                        yf(P); var z = (k ^ T >= 0 ? -1 : 1) * Pc(P[2]);
                        (r > z || r === z && (C[0] || C[1])) && (u += k ^ T >= 0 ? 1 : -1) } }
        return (a < -1e-6 || a < fc && c < -1e-12) ^ 1 & u }

    function _s(t, n, e, r) { return function(i) { var o, a, u, c = n(i),
                f = ls(),
                s = n(f),
                l = !1,
                h = { point: d, lineStart: g, lineEnd: y, polygonStart: function() { h.point = v, h.lineStart = _, h.lineEnd = b, a = [], o = [] }, polygonEnd: function() { h.point = d, h.lineStart = g, h.lineEnd = y, a = O(a); var t = vs(o, r);
                        a.length ? (l || (i.polygonStart(), l = !0), ps(a, ms, t, e, i)) : t && (l || (i.polygonStart(), l = !0), i.lineStart(), e(null, null, 1, i), i.lineEnd()), l && (i.polygonEnd(), l = !1), a = o = null }, sphere: function() { i.polygonStart(), i.lineStart(), e(null, null, 1, i), i.lineEnd(), i.polygonEnd() } };

            function d(n, e) { t(n, e) && i.point(n, e) }

            function p(t, n) { c.point(t, n) }

            function g() { h.point = p, c.lineStart() }

            function y() { h.point = d, c.lineEnd() }

            function v(t, n) { u.push([t, n]), s.point(t, n) }

            function _() { s.lineStart(), u = [] }

            function b() { v(u[0][0], u[0][1]), s.lineEnd(); var t, n, e, r, c = s.clean(),
                    h = f.result(),
                    d = h.length; if (u.pop(), o.push(u), u = null, d)
                    if (1 & c) { if ((n = (e = h[0]).length - 1) > 0) { for (l || (i.polygonStart(), l = !0), i.lineStart(), t = 0; t < n; ++t) i.point((r = e[t])[0], r[1]);
                            i.lineEnd() } } else d > 1 && 2 & c && h.push(h.pop().concat(h.shift())), a.push(h.filter(bs)) } return h } }

    function bs(t) { return t.length > 1 }

    function ms(t, n) { return ((t = t.x)[0] < 0 ? t[1] - hc - fc : hc - t[1]) - ((n = n.x)[0] < 0 ? n[1] - hc - fc : hc - n[1]) } rs.invert = rs; var xs = _s((function() { return !0 }), (function(t) { var n, e = NaN,
            r = NaN,
            i = NaN; return { lineStart: function() { t.lineStart(), n = 1 }, point: function(o, a) { var u = o > 0 ? lc : -lc,
                    c = vc(o - e);
                vc(c - lc) < fc ? (t.point(e, r = (r + a) / 2 > 0 ? hc : -hc), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(u, r), t.point(o, r), n = 0) : i !== u && c >= lc && (vc(e - i) < fc && (e -= i * fc), vc(o - u) < fc && (o -= u * fc), r = function(t, n, e, r) { var i, o, a = Sc(t - e); return vc(a) > fc ? _c((Sc(n) * (o = mc(r)) * Sc(e) - Sc(r) * (i = mc(n)) * Sc(t)) / (i * o * a)) : (n + r) / 2 }(e, r, o, a), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(u, r), n = 0), t.point(e = o, r = a), i = u }, lineEnd: function() { t.lineEnd(), e = r = NaN }, clean: function() { return 2 - n } } }), (function(t, n, e, r) { var i; if (null == t) i = e * hc, r.point(-lc, i), r.point(0, i), r.point(lc, i), r.point(lc, 0), r.point(lc, -i), r.point(0, -i), r.point(-lc, -i), r.point(-lc, 0), r.point(-lc, i);
        else if (vc(t[0] - n[0]) > fc) { var o = t[0] < n[0] ? lc : -lc;
            i = e * o / 2, r.point(-o, i), r.point(0, i), r.point(o, i) } else r.point(n[0], n[1]) }), [-lc, -hc]);

    function ws(t) { var n = mc(t),
            e = 6 * yc,
            r = n > 0,
            i = vc(n) > fc;

        function o(t, e) { return mc(t) * mc(e) > n }

        function a(t, e, r) { var i = [1, 0, 0],
                o = df(lf(t), lf(e)),
                a = hf(o, o),
                u = o[0],
                c = a - u * u; if (!c) return !r && t; var f = n * a / c,
                s = -n * u / c,
                l = df(i, o),
                h = gf(i, f);
            pf(h, gf(o, s)); var d = l,
                p = hf(h, d),
                g = hf(d, d),
                y = p * p - g * (hf(h, h) - 1); if (!(y < 0)) { var v = kc(y),
                    _ = gf(d, (-p - v) / g); if (pf(_, h), _ = sf(_), !r) return _; var b, m = t[0],
                    x = e[0],
                    w = t[1],
                    M = e[1];
                x < m && (b = m, m = x, x = b); var A = x - m,
                    T = vc(A - lc) < fc; if (!T && M < w && (b = w, w = M, M = b), T || A < fc ? T ? w + M > 0 ^ _[1] < (vc(_[0] - m) < fc ? w : M) : w <= _[1] && _[1] <= M : A > lc ^ (m <= _[0] && _[0] <= x)) { var S = gf(d, (-p + v) / g); return pf(S, h), [_, sf(S)] } } }

        function u(n, e) { var i = r ? t : lc - t,
                o = 0; return n < -i ? o |= 1 : n > i && (o |= 2), e < -i ? o |= 4 : e > i && (o |= 8), o } return _s(o, (function(t) { var n, e, c, f, s; return { lineStart: function() { f = c = !1, s = 1 }, point: function(l, h) { var d, p = [l, h],
                        g = o(l, h),
                        y = r ? g ? 0 : u(l, h) : g ? u(l + (l < 0 ? lc : -lc), h) : 0; if (!n && (f = c = g) && t.lineStart(), g !== c && (!(d = a(n, p)) || hs(n, d) || hs(p, d)) && (p[2] = 1), g !== c) s = 0, g ? (t.lineStart(), d = a(p, n), t.point(d[0], d[1])) : (d = a(n, p), t.point(d[0], d[1], 2), t.lineEnd()), n = d;
                    else if (i && n && r ^ g) { var v;
                        y & e || !(v = a(p, n, !0)) || (s = 0, r ? (t.lineStart(), t.point(v[0][0], v[0][1]), t.point(v[1][0], v[1][1]), t.lineEnd()) : (t.point(v[1][0], v[1][1]), t.lineEnd(), t.lineStart(), t.point(v[0][0], v[0][1], 3))) }!g || n && hs(n, p) || t.point(p[0], p[1]), n = p, c = g, e = y }, lineEnd: function() { c && t.lineEnd(), n = null }, clean: function() { return s | (f && c) << 1 } } }), (function(n, r, i, o) { fs(o, t, e, i, n, r) }), r ? [0, -t] : [-lc, t - lc]) } var Ms, As, Ts, Ss, Es = 1e9,
        ks = -Es;

    function Ns(t, n, e, r) {
        function i(i, o) { return t <= i && i <= e && n <= o && o <= r }

        function o(i, o, u, f) { var s = 0,
                l = 0; if (null == i || (s = a(i, u)) !== (l = a(o, u)) || c(i, o) < 0 ^ u > 0)
                do { f.point(0 === s || 3 === s ? t : e, s > 1 ? r : n) } while ((s = (s + u + 4) % 4) !== l);
            else f.point(o[0], o[1]) }

        function a(r, i) { return vc(r[0] - t) < fc ? i > 0 ? 0 : 3 : vc(r[0] - e) < fc ? i > 0 ? 2 : 1 : vc(r[1] - n) < fc ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2 }

        function u(t, n) { return c(t.x, n.x) }

        function c(t, n) { var e = a(t, 1),
                r = a(n, 1); return e !== r ? e - r : 0 === e ? n[1] - t[1] : 1 === e ? t[0] - n[0] : 2 === e ? t[1] - n[1] : n[0] - t[0] } return function(a) { var c, f, s, l, h, d, p, g, y, v, _, b = a,
                m = ls(),
                x = { point: w, lineStart: function() { x.point = M, f && f.push(s = []);
                        v = !0, y = !1, p = g = NaN }, lineEnd: function() { c && (M(l, h), d && y && m.rejoin(), c.push(m.result()));
                        x.point = w, y && b.lineEnd() }, polygonStart: function() { b = m, c = [], f = [], _ = !0 }, polygonEnd: function() { var n = function() { for (var n = 0, e = 0, i = f.length; e < i; ++e)
                                    for (var o, a, u = f[e], c = 1, s = u.length, l = u[0], h = l[0], d = l[1]; c < s; ++c) o = h, a = d, h = (l = u[c])[0], d = l[1], a <= r ? d > r && (h - o) * (r - a) > (d - a) * (t - o) && ++n : d <= r && (h - o) * (r - a) < (d - a) * (t - o) && --n; return n }(),
                            e = _ && n,
                            i = (c = O(c)).length;
                        (e || i) && (a.polygonStart(), e && (a.lineStart(), o(null, null, 1, a), a.lineEnd()), i && ps(c, u, n, o, a), a.polygonEnd());
                        b = a, c = f = s = null } };

            function w(t, n) { i(t, n) && b.point(t, n) }

            function M(o, a) { var u = i(o, a); if (f && s.push([o, a]), v) l = o, h = a, d = u, v = !1, u && (b.lineStart(), b.point(o, a));
                else if (u && y) b.point(o, a);
                else { var c = [p = Math.max(ks, Math.min(Es, p)), g = Math.max(ks, Math.min(Es, g))],
                        m = [o = Math.max(ks, Math.min(Es, o)), a = Math.max(ks, Math.min(Es, a))];! function(t, n, e, r, i, o) { var a, u = t[0],
                            c = t[1],
                            f = 0,
                            s = 1,
                            l = n[0] - u,
                            h = n[1] - c; if (a = e - u, l || !(a > 0)) { if (a /= l, l < 0) { if (a < f) return;
                                a < s && (s = a) } else if (l > 0) { if (a > s) return;
                                a > f && (f = a) } if (a = i - u, l || !(a < 0)) { if (a /= l, l < 0) { if (a > s) return;
                                    a > f && (f = a) } else if (l > 0) { if (a < f) return;
                                    a < s && (s = a) } if (a = r - c, h || !(a > 0)) { if (a /= h, h < 0) { if (a < f) return;
                                        a < s && (s = a) } else if (h > 0) { if (a > s) return;
                                        a > f && (f = a) } if (a = o - c, h || !(a < 0)) { if (a /= h, h < 0) { if (a > s) return;
                                            a > f && (f = a) } else if (h > 0) { if (a < f) return;
                                            a < s && (s = a) } return f > 0 && (t[0] = u + f * l, t[1] = c + f * h), s < 1 && (n[0] = u + s * l, n[1] = c + s * h), !0 } } } } }(c, m, t, n, e, r) ? u && (b.lineStart(), b.point(o, a), _ = !1): (y || (b.lineStart(), b.point(c[0], c[1])), b.point(m[0], m[1]), u || b.lineEnd(), _ = !1) } p = o, g = a, y = u } return x } } var Cs = { sphere: Dc, point: Dc, lineStart: function() { Cs.point = zs, Cs.lineEnd = Ps }, lineEnd: Dc, polygonStart: Dc, polygonEnd: Dc };

    function Ps() { Cs.point = Cs.lineEnd = Dc }

    function zs(t, n) { As = t *= yc, Ts = Sc(n *= yc), Ss = mc(n), Cs.point = Ds }

    function Ds(t, n) { t *= yc; var e = Sc(n *= yc),
            r = mc(n),
            i = vc(t - As),
            o = mc(i),
            a = r * Sc(i),
            u = Ss * e - Ts * r * o,
            c = Ts * e + Ss * r * o;
        Ms.add(bc(kc(a * a + u * u), c)), As = t, Ts = e, Ss = r }

    function qs(t) { return Ms = new g, Ic(t, Cs), +Ms } var Rs = [null, null],
        Fs = { type: "LineString", coordinates: Rs };

    function Os(t, n) { return Rs[0] = t, Rs[1] = n, qs(Fs) } var Us = { Feature: function(t, n) { return Bs(t.geometry, n) }, FeatureCollection: function(t, n) { for (var e = t.features, r = -1, i = e.length; ++r < i;)
                    if (Bs(e[r].geometry, n)) return !0; return !1 } },
        Is = { Sphere: function() { return !0 }, Point: function(t, n) { return Ys(t.coordinates, n) }, MultiPoint: function(t, n) { for (var e = t.coordinates, r = -1, i = e.length; ++r < i;)
                    if (Ys(e[r], n)) return !0; return !1 }, LineString: function(t, n) { return Ls(t.coordinates, n) }, MultiLineString: function(t, n) { for (var e = t.coordinates, r = -1, i = e.length; ++r < i;)
                    if (Ls(e[r], n)) return !0; return !1 }, Polygon: function(t, n) { return js(t.coordinates, n) }, MultiPolygon: function(t, n) { for (var e = t.coordinates, r = -1, i = e.length; ++r < i;)
                    if (js(e[r], n)) return !0; return !1 }, GeometryCollection: function(t, n) { for (var e = t.geometries, r = -1, i = e.length; ++r < i;)
                    if (Bs(e[r], n)) return !0; return !1 } };

    function Bs(t, n) { return !(!t || !Is.hasOwnProperty(t.type)) && Is[t.type](t, n) }

    function Ys(t, n) { return 0 === Os(t, n) }

    function Ls(t, n) { for (var e, r, i, o = 0, a = t.length; o < a; o++) { if (0 === (r = Os(t[o], n))) return !0; if (o > 0 && (i = Os(t[o], t[o - 1])) > 0 && e <= i && r <= i && (e + r - i) * (1 - Math.pow((e - r) / i, 2)) < sc * i) return !0;
            e = r } return !1 }

    function js(t, n) { return !!vs(t.map(Hs), Xs(n)) }

    function Hs(t) { return (t = t.map(Xs)).pop(), t }

    function Xs(t) { return [t[0] * yc, t[1] * yc] }

    function Gs(t, n, e) { var r = B(t, n - fc, e).concat(n); return function(t) { return r.map((function(n) { return [t, n] })) } }

    function Vs(t, n, e) { var r = B(t, n - fc, e).concat(n); return function(t) { return r.map((function(n) { return [n, t] })) } }

    function $s() { var t, n, e, r, i, o, a, u, c, f, s, l, h = 10,
            d = h,
            p = 90,
            g = 360,
            y = 2.5;

        function v() { return { type: "MultiLineString", coordinates: _() } }

        function _() { return B(xc(r / p) * p, e, p).map(s).concat(B(xc(u / g) * g, a, g).map(l)).concat(B(xc(n / h) * h, t, h).filter((function(t) { return vc(t % p) > fc })).map(c)).concat(B(xc(o / d) * d, i, d).filter((function(t) { return vc(t % g) > fc })).map(f)) } return v.lines = function() { return _().map((function(t) { return { type: "LineString", coordinates: t } })) }, v.outline = function() { return { type: "Polygon", coordinates: [s(r).concat(l(a).slice(1), s(e).reverse().slice(1), l(u).reverse().slice(1))] } }, v.extent = function(t) { return arguments.length ? v.extentMajor(t).extentMinor(t) : v.extentMinor() }, v.extentMajor = function(t) { return arguments.length ? (r = +t[0][0], e = +t[1][0], u = +t[0][1], a = +t[1][1], r > e && (t = r, r = e, e = t), u > a && (t = u, u = a, a = t), v.precision(y)) : [
                [r, u],
                [e, a]
            ] }, v.extentMinor = function(e) { return arguments.length ? (n = +e[0][0], t = +e[1][0], o = +e[0][1], i = +e[1][1], n > t && (e = n, n = t, t = e), o > i && (e = o, o = i, i = e), v.precision(y)) : [
                [n, o],
                [t, i]
            ] }, v.step = function(t) { return arguments.length ? v.stepMajor(t).stepMinor(t) : v.stepMinor() }, v.stepMajor = function(t) { return arguments.length ? (p = +t[0], g = +t[1], v) : [p, g] }, v.stepMinor = function(t) { return arguments.length ? (h = +t[0], d = +t[1], v) : [h, d] }, v.precision = function(h) { return arguments.length ? (y = +h, c = Gs(o, i, 90), f = Vs(n, t, y), s = Gs(u, a, 90), l = Vs(r, e, y), v) : y }, v.extentMajor([
            [-180, -89.999999],
            [180, 89.999999]
        ]).extentMinor([
            [-180, -80.000001],
            [180, 80.000001]
        ]) } var Ws, Zs, Ks, Qs, Js = t => t,
        tl = new g,
        nl = new g,
        el = { point: Dc, lineStart: Dc, lineEnd: Dc, polygonStart: function() { el.lineStart = rl, el.lineEnd = al }, polygonEnd: function() { el.lineStart = el.lineEnd = el.point = Dc, tl.add(vc(nl)), nl = new g }, result: function() { var t = tl / 2; return tl = new g, t } };

    function rl() { el.point = il }

    function il(t, n) { el.point = ol, Ws = Ks = t, Zs = Qs = n }

    function ol(t, n) { nl.add(Qs * t - Ks * n), Ks = t, Qs = n }

    function al() { ol(Ws, Zs) } var ul = 1 / 0,
        cl = ul,
        fl = -ul,
        sl = fl,
        ll = { point: function(t, n) { t < ul && (ul = t);
                t > fl && (fl = t);
                n < cl && (cl = n);
                n > sl && (sl = n) }, lineStart: Dc, lineEnd: Dc, polygonStart: Dc, polygonEnd: Dc, result: function() { var t = [
                    [ul, cl],
                    [fl, sl]
                ]; return fl = sl = -(cl = ul = 1 / 0), t } }; var hl, dl, pl, gl, yl = 0,
        vl = 0,
        _l = 0,
        bl = 0,
        ml = 0,
        xl = 0,
        wl = 0,
        Ml = 0,
        Al = 0,
        Tl = { point: Sl, lineStart: El, lineEnd: Cl, polygonStart: function() { Tl.lineStart = Pl, Tl.lineEnd = zl }, polygonEnd: function() { Tl.point = Sl, Tl.lineStart = El, Tl.lineEnd = Cl }, result: function() { var t = Al ? [wl / Al, Ml / Al] : xl ? [bl / xl, ml / xl] : _l ? [yl / _l, vl / _l] : [NaN, NaN]; return yl = vl = _l = bl = ml = xl = wl = Ml = Al = 0, t } };

    function Sl(t, n) { yl += t, vl += n, ++_l }

    function El() { Tl.point = kl }

    function kl(t, n) { Tl.point = Nl, Sl(pl = t, gl = n) }

    function Nl(t, n) { var e = t - pl,
            r = n - gl,
            i = kc(e * e + r * r);
        bl += i * (pl + t) / 2, ml += i * (gl + n) / 2, xl += i, Sl(pl = t, gl = n) }

    function Cl() { Tl.point = Sl }

    function Pl() { Tl.point = Dl }

    function zl() { ql(hl, dl) }

    function Dl(t, n) { Tl.point = ql, Sl(hl = pl = t, dl = gl = n) }

    function ql(t, n) { var e = t - pl,
            r = n - gl,
            i = kc(e * e + r * r);
        bl += i * (pl + t) / 2, ml += i * (gl + n) / 2, xl += i, wl += (i = gl * t - pl * n) * (pl + t), Ml += i * (gl + n), Al += 3 * i, Sl(pl = t, gl = n) }

    function Rl(t) { this._context = t } Rl.prototype = { _radius: 4.5, pointRadius: function(t) { return this._radius = t, this }, polygonStart: function() { this._line = 0 }, polygonEnd: function() { this._line = NaN }, lineStart: function() { this._point = 0 }, lineEnd: function() { 0 === this._line && this._context.closePath(), this._point = NaN }, point: function(t, n) { switch (this._point) {
                case 0:
                    this._context.moveTo(t, n), this._point = 1; break;
                case 1:
                    this._context.lineTo(t, n); break;
                default:
                    this._context.moveTo(t + this._radius, n), this._context.arc(t, n, this._radius, 0, pc) } }, result: Dc }; var Fl, Ol, Ul, Il, Bl, Yl = new g,
        Ll = { point: Dc, lineStart: function() { Ll.point = jl }, lineEnd: function() { Fl && Hl(Ol, Ul), Ll.point = Dc }, polygonStart: function() { Fl = !0 }, polygonEnd: function() { Fl = null }, result: function() { var t = +Yl; return Yl = new g, t } };

    function jl(t, n) { Ll.point = Hl, Ol = Il = t, Ul = Bl = n }

    function Hl(t, n) { Il -= t, Bl -= n, Yl.add(kc(Il * Il + Bl * Bl)), Il = t, Bl = n }

    function Xl() { this._string = [] }

    function Gl(t) { return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z" }

    function Vl(t) { return function(n) { var e = new $l; for (var r in t) e[r] = t[r]; return e.stream = n, e } }

    function $l() {}

    function Wl(t, n, e) { var r = t.clipExtent && t.clipExtent(); return t.scale(150).translate([0, 0]), null != r && t.clipExtent(null), Ic(e, t.stream(ll)), n(ll.result()), null != r && t.clipExtent(r), t }

    function Zl(t, n, e) { return Wl(t, (function(e) { var r = n[1][0] - n[0][0],
                i = n[1][1] - n[0][1],
                o = Math.min(r / (e[1][0] - e[0][0]), i / (e[1][1] - e[0][1])),
                a = +n[0][0] + (r - o * (e[1][0] + e[0][0])) / 2,
                u = +n[0][1] + (i - o * (e[1][1] + e[0][1])) / 2;
            t.scale(150 * o).translate([a, u]) }), e) }

    function Kl(t, n, e) { return Zl(t, [
            [0, 0], n
        ], e) }

    function Ql(t, n, e) { return Wl(t, (function(e) { var r = +n,
                i = r / (e[1][0] - e[0][0]),
                o = (r - i * (e[1][0] + e[0][0])) / 2,
                a = -i * e[0][1];
            t.scale(150 * i).translate([o, a]) }), e) }

    function Jl(t, n, e) { return Wl(t, (function(e) { var r = +n,
                i = r / (e[1][1] - e[0][1]),
                o = -i * e[0][0],
                a = (r - i * (e[1][1] + e[0][1])) / 2;
            t.scale(150 * i).translate([o, a]) }), e) } Xl.prototype = { _radius: 4.5, _circle: Gl(4.5), pointRadius: function(t) { return (t = +t) !== this._radius && (this._radius = t, this._circle = null), this }, polygonStart: function() { this._line = 0 }, polygonEnd: function() { this._line = NaN }, lineStart: function() { this._point = 0 }, lineEnd: function() { 0 === this._line && this._string.push("Z"), this._point = NaN }, point: function(t, n) { switch (this._point) {
                case 0:
                    this._string.push("M", t, ",", n), this._point = 1; break;
                case 1:
                    this._string.push("L", t, ",", n); break;
                default:
                    null == this._circle && (this._circle = Gl(this._radius)), this._string.push("M", t, ",", n, this._circle) } }, result: function() { if (this._string.length) { var t = this._string.join(""); return this._string = [], t } return null } }, $l.prototype = { constructor: $l, point: function(t, n) { this.stream.point(t, n) }, sphere: function() { this.stream.sphere() }, lineStart: function() { this.stream.lineStart() }, lineEnd: function() { this.stream.lineEnd() }, polygonStart: function() { this.stream.polygonStart() }, polygonEnd: function() { this.stream.polygonEnd() } }; var th = mc(30 * yc);

    function nh(t, n) { return +n ? function(t, n) {
            function e(r, i, o, a, u, c, f, s, l, h, d, p, g, y) { var v = f - r,
                    _ = s - i,
                    b = v * v + _ * _; if (b > 4 * n && g--) { var m = a + h,
                        x = u + d,
                        w = c + p,
                        M = kc(m * m + x * x + w * w),
                        A = Pc(w /= M),
                        T = vc(vc(w) - 1) < fc || vc(o - l) < fc ? (o + l) / 2 : bc(x, m),
                        S = t(T, A),
                        E = S[0],
                        k = S[1],
                        N = E - r,
                        C = k - i,
                        P = _ * N - v * C;
                    (P * P / b > n || vc((v * N + _ * C) / b - .5) > .3 || a * h + u * d + c * p < th) && (e(r, i, o, a, u, c, E, k, T, m /= M, x /= M, w, g, y), y.point(E, k), e(E, k, T, m, x, w, f, s, l, h, d, p, g, y)) } } return function(n) { var r, i, o, a, u, c, f, s, l, h, d, p, g = { point: y, lineStart: v, lineEnd: b, polygonStart: function() { n.polygonStart(), g.lineStart = m }, polygonEnd: function() { n.polygonEnd(), g.lineStart = v } };

                function y(e, r) { e = t(e, r), n.point(e[0], e[1]) }

                function v() { s = NaN, g.point = _, n.lineStart() }

                function _(r, i) { var o = lf([r, i]),
                        a = t(r, i);
                    e(s, l, f, h, d, p, s = a[0], l = a[1], f = r, h = o[0], d = o[1], p = o[2], 16, n), n.point(s, l) }

                function b() { g.point = y, n.lineEnd() }

                function m() { v(), g.point = x, g.lineEnd = w }

                function x(t, n) { _(r = t, n), i = s, o = l, a = h, u = d, c = p, g.point = _ }

                function w() { e(s, l, f, h, d, p, i, o, r, a, u, c, 16, n), g.lineEnd = b, b() } return g } }(t, n) : function(t) { return Vl({ point: function(n, e) { n = t(n, e), this.stream.point(n[0], n[1]) } }) }(t) } var eh = Vl({ point: function(t, n) { this.stream.point(t * yc, n * yc) } });

    function rh(t, n, e, r, i, o) { if (!o) return function(t, n, e, r, i) {
            function o(o, a) { return [n + t * (o *= r), e - t * (a *= i)] } return o.invert = function(o, a) { return [(o - n) / t * r, (e - a) / t * i] }, o }(t, n, e, r, i); var a = mc(o),
            u = Sc(o),
            c = a * t,
            f = u * t,
            s = a / t,
            l = u / t,
            h = (u * e - a * n) / t,
            d = (u * n + a * e) / t;

        function p(t, o) { return [c * (t *= r) - f * (o *= i) + n, e - f * t - c * o] } return p.invert = function(t, n) { return [r * (s * t - l * n + h), i * (d - l * t - s * n)] }, p }

    function ih(t) { return oh((function() { return t }))() }

    function oh(t) { var n, e, r, i, o, a, u, c, f, s, l = 150,
            h = 480,
            d = 250,
            p = 0,
            g = 0,
            y = 0,
            v = 0,
            _ = 0,
            b = 0,
            m = 1,
            x = 1,
            w = null,
            M = xs,
            A = null,
            T = Js,
            S = .5;

        function E(t) { return c(t[0] * yc, t[1] * yc) }

        function k(t) { return (t = c.invert(t[0], t[1])) && [t[0] * gc, t[1] * gc] }

        function N() { var t = rh(l, 0, 0, m, x, b).apply(null, n(p, g)),
                r = rh(l, h - t[0], d - t[1], m, x, b); return e = is(y, v, _), u = es(n, r), c = es(e, u), a = nh(u, S), C() }

        function C() { return f = s = null, E } return E.stream = function(t) { return f && s === t ? f : f = eh(function(t) { return Vl({ point: function(n, e) { var r = t(n, e); return this.stream.point(r[0], r[1]) } }) }(e)(M(a(T(s = t))))) }, E.preclip = function(t) { return arguments.length ? (M = t, w = void 0, C()) : M }, E.postclip = function(t) { return arguments.length ? (T = t, A = r = i = o = null, C()) : T }, E.clipAngle = function(t) { return arguments.length ? (M = +t ? ws(w = t * yc) : (w = null, xs), C()) : w * gc }, E.clipExtent = function(t) { return arguments.length ? (T = null == t ? (A = r = i = o = null, Js) : Ns(A = +t[0][0], r = +t[0][1], i = +t[1][0], o = +t[1][1]), C()) : null == A ? null : [
                    [A, r],
                    [i, o]
                ] }, E.scale = function(t) { return arguments.length ? (l = +t, N()) : l }, E.translate = function(t) { return arguments.length ? (h = +t[0], d = +t[1], N()) : [h, d] }, E.center = function(t) { return arguments.length ? (p = t[0] % 360 * yc, g = t[1] % 360 * yc, N()) : [p * gc, g * gc] }, E.rotate = function(t) { return arguments.length ? (y = t[0] % 360 * yc, v = t[1] % 360 * yc, _ = t.length > 2 ? t[2] % 360 * yc : 0, N()) : [y * gc, v * gc, _ * gc] }, E.angle = function(t) { return arguments.length ? (b = t % 360 * yc, N()) : b * gc }, E.reflectX = function(t) { return arguments.length ? (m = t ? -1 : 1, N()) : m < 0 }, E.reflectY = function(t) { return arguments.length ? (x = t ? -1 : 1, N()) : x < 0 }, E.precision = function(t) { return arguments.length ? (a = nh(u, S = t * t), C()) : kc(S) }, E.fitExtent = function(t, n) { return Zl(E, t, n) }, E.fitSize = function(t, n) { return Kl(E, t, n) }, E.fitWidth = function(t, n) { return Ql(E, t, n) }, E.fitHeight = function(t, n) { return Jl(E, t, n) },
            function() { return n = t.apply(this, arguments), E.invert = n.invert && k, N() } }

    function ah(t) { var n = 0,
            e = lc / 3,
            r = oh(t),
            i = r(n, e); return i.parallels = function(t) { return arguments.length ? r(n = t[0] * yc, e = t[1] * yc) : [n * gc, e * gc] }, i }

    function uh(t, n) { var e = Sc(t),
            r = (e + Sc(n)) / 2; if (vc(r) < fc) return function(t) { var n = mc(t);

            function e(t, e) { return [t * n, Sc(e) / n] } return e.invert = function(t, e) { return [t / n, Pc(e * n)] }, e }(t); var i = 1 + e * (2 * r - e),
            o = kc(i) / r;

        function a(t, n) { var e = kc(i - 2 * r * Sc(n)) / r; return [e * Sc(t *= r), o - e * mc(t)] } return a.invert = function(t, n) { var e = o - n,
                a = bc(t, vc(e)) * Ec(e); return e * r < 0 && (a -= lc * Ec(t) * Ec(e)), [a / r, Pc((i - (t * t + e * e) * r * r) / (2 * r))] }, a }

    function ch() { return ah(uh).scale(155.424).center([0, 33.6442]) }

    function fh() { return ch().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-.6, 38.7]) }

    function sh(t) { return function(n, e) { var r = mc(n),
                i = mc(e),
                o = t(r * i); return o === 1 / 0 ? [2, 0] : [o * i * Sc(n), o * Sc(e)] } }

    function lh(t) { return function(n, e) { var r = kc(n * n + e * e),
                i = t(r),
                o = Sc(i),
                a = mc(i); return [bc(n * o, r * a), Pc(r && e * o / r)] } } var hh = sh((function(t) { return kc(2 / (1 + t)) }));
    hh.invert = lh((function(t) { return 2 * Pc(t / 2) })); var dh = sh((function(t) { return (t = Cc(t)) && t / Sc(t) }));

    function ph(t, n) { return [t, Ac(Nc((hc + n) / 2))] }

    function gh(t) { var n, e, r, i = ih(t),
            o = i.center,
            a = i.scale,
            u = i.translate,
            c = i.clipExtent,
            f = null;

        function s() { var o = lc * a(),
                u = i(cs(i.rotate()).invert([0, 0])); return c(null == f ? [
                [u[0] - o, u[1] - o],
                [u[0] + o, u[1] + o]
            ] : t === ph ? [
                [Math.max(u[0] - o, f), n],
                [Math.min(u[0] + o, e), r]
            ] : [
                [f, Math.max(u[1] - o, n)],
                [e, Math.min(u[1] + o, r)]
            ]) } return i.scale = function(t) { return arguments.length ? (a(t), s()) : a() }, i.translate = function(t) { return arguments.length ? (u(t), s()) : u() }, i.center = function(t) { return arguments.length ? (o(t), s()) : o() }, i.clipExtent = function(t) { return arguments.length ? (null == t ? f = n = e = r = null : (f = +t[0][0], n = +t[0][1], e = +t[1][0], r = +t[1][1]), s()) : null == f ? null : [
                [f, n],
                [e, r]
            ] }, s() }

    function yh(t) { return Nc((hc + t) / 2) }

    function vh(t, n) { var e = mc(t),
            r = t === n ? Sc(t) : Ac(e / mc(n)) / Ac(yh(n) / yh(t)),
            i = e * Tc(yh(t), r) / r; if (!r) return ph;

        function o(t, n) { i > 0 ? n < -hc + fc && (n = -hc + fc) : n > hc - fc && (n = hc - fc); var e = i / Tc(yh(n), r); return [e * Sc(r * t), i - e * mc(r * t)] } return o.invert = function(t, n) { var e = i - n,
                o = Ec(r) * kc(t * t + e * e),
                a = bc(t, vc(e)) * Ec(e); return e * r < 0 && (a -= lc * Ec(t) * Ec(e)), [a / r, 2 * _c(Tc(i / o, 1 / r)) - hc] }, o }

    function _h(t, n) { return [t, n] }

    function bh(t, n) { var e = mc(t),
            r = t === n ? Sc(t) : (e - mc(n)) / (n - t),
            i = e / r + t; if (vc(r) < fc) return _h;

        function o(t, n) { var e = i - n,
                o = r * t; return [e * Sc(o), i - e * mc(o)] } return o.invert = function(t, n) { var e = i - n,
                o = bc(t, vc(e)) * Ec(e); return e * r < 0 && (o -= lc * Ec(t) * Ec(e)), [o / r, i - Ec(r) * kc(t * t + e * e)] }, o } dh.invert = lh((function(t) { return t })), ph.invert = function(t, n) { return [t, 2 * _c(wc(n)) - hc] }, _h.invert = _h; var mh = 1.340264,
        xh = -.081106,
        wh = 893e-6,
        Mh = .003796,
        Ah = kc(3) / 2;

    function Th(t, n) { var e = Pc(Ah * Sc(n)),
            r = e * e,
            i = r * r * r; return [t * mc(e) / (Ah * (mh + 3 * xh * r + i * (7 * wh + 9 * Mh * r))), e * (mh + xh * r + i * (wh + Mh * r))] }

    function Sh(t, n) { var e = mc(n),
            r = mc(t) * e; return [e * Sc(t) / r, Sc(n) / r] }

    function Eh(t, n) { var e = n * n,
            r = e * e; return [t * (.8707 - .131979 * e + r * (r * (.003971 * e - .001529 * r) - .013791)), n * (1.007226 + e * (.015085 + r * (.028874 * e - .044475 - .005916 * r)))] }

    function kh(t, n) { return [mc(n) * Sc(t), Sc(n)] }

    function Nh(t, n) { var e = mc(n),
            r = 1 + mc(t) * e; return [e * Sc(t) / r, Sc(n) / r] }

    function Ch(t, n) { return [Ac(Nc((hc + n) / 2)), -t] }

    function Ph(t, n) { return t.parent === n.parent ? 1 : 2 }

    function zh(t, n) { return t + n.x }

    function Dh(t, n) { return Math.max(t, n.y) }

    function qh(t) { var n = 0,
            e = t.children,
            r = e && e.length; if (r)
            for (; --r >= 0;) n += e[r].value;
        else n = 1;
        t.value = n }

    function Rh(t, n) { t instanceof Map ? (t = [void 0, t], void 0 === n && (n = Oh)) : void 0 === n && (n = Fh); for (var e, r, i, o, a, u = new Bh(t), c = [u]; e = c.pop();)
            if ((i = n(e.data)) && (a = (i = Array.from(i)).length))
                for (e.children = i, o = a - 1; o >= 0; --o) c.push(r = i[o] = new Bh(i[o])), r.parent = e, r.depth = e.depth + 1; return u.eachBefore(Ih) }

    function Fh(t) { return t.children }

    function Oh(t) { return Array.isArray(t) ? t[1] : null }

    function Uh(t) { void 0 !== t.data.value && (t.value = t.data.value), t.data = t.data.data }

    function Ih(t) { var n = 0;
        do { t.height = n } while ((t = t.parent) && t.height < ++n) }

    function Bh(t) { this.data = t, this.depth = this.height = 0, this.parent = null }

    function Yh(t) { for (var n, e, r = 0, i = (t = function(t) { for (var n, e, r = t.length; r;) e = Math.random() * r-- | 0, n = t[r], t[r] = t[e], t[e] = n; return t }(Array.from(t))).length, o = []; r < i;) n = t[r], e && Hh(e, n) ? ++r : (e = Gh(o = Lh(o, n)), r = 0); return e }

    function Lh(t, n) { var e, r; if (Xh(n, t)) return [n]; for (e = 0; e < t.length; ++e)
            if (jh(n, t[e]) && Xh(Vh(t[e], n), t)) return [t[e], n]; for (e = 0; e < t.length - 1; ++e)
            for (r = e + 1; r < t.length; ++r)
                if (jh(Vh(t[e], t[r]), n) && jh(Vh(t[e], n), t[r]) && jh(Vh(t[r], n), t[e]) && Xh($h(t[e], t[r], n), t)) return [t[e], t[r], n]; throw new Error }

    function jh(t, n) { var e = t.r - n.r,
            r = n.x - t.x,
            i = n.y - t.y; return e < 0 || e * e < r * r + i * i }

    function Hh(t, n) { var e = t.r - n.r + 1e-9 * Math.max(t.r, n.r, 1),
            r = n.x - t.x,
            i = n.y - t.y; return e > 0 && e * e > r * r + i * i }

    function Xh(t, n) { for (var e = 0; e < n.length; ++e)
            if (!Hh(t, n[e])) return !1; return !0 }

    function Gh(t) { switch (t.length) {
            case 1:
                return function(t) { return { x: t.x, y: t.y, r: t.r } }(t[0]);
            case 2:
                return Vh(t[0], t[1]);
            case 3:
                return $h(t[0], t[1], t[2]) } }

    function Vh(t, n) { var e = t.x,
            r = t.y,
            i = t.r,
            o = n.x,
            a = n.y,
            u = n.r,
            c = o - e,
            f = a - r,
            s = u - i,
            l = Math.sqrt(c * c + f * f); return { x: (e + o + c / l * s) / 2, y: (r + a + f / l * s) / 2, r: (l + i + u) / 2 } }

    function $h(t, n, e) { var r = t.x,
            i = t.y,
            o = t.r,
            a = n.x,
            u = n.y,
            c = n.r,
            f = e.x,
            s = e.y,
            l = e.r,
            h = r - a,
            d = r - f,
            p = i - u,
            g = i - s,
            y = c - o,
            v = l - o,
            _ = r * r + i * i - o * o,
            b = _ - a * a - u * u + c * c,
            m = _ - f * f - s * s + l * l,
            x = d * p - h * g,
            w = (p * m - g * b) / (2 * x) - r,
            M = (g * y - p * v) / x,
            A = (d * b - h * m) / (2 * x) - i,
            T = (h * v - d * y) / x,
            S = M * M + T * T - 1,
            E = 2 * (o + w * M + A * T),
            k = w * w + A * A - o * o,
            N = -(S ? (E + Math.sqrt(E * E - 4 * S * k)) / (2 * S) : k / E); return { x: r + w + M * N, y: i + A + T * N, r: N } }

    function Wh(t, n, e) { var r, i, o, a, u = t.x - n.x,
            c = t.y - n.y,
            f = u * u + c * c;
        f ? (i = n.r + e.r, i *= i, a = t.r + e.r, i > (a *= a) ? (r = (f + a - i) / (2 * f), o = Math.sqrt(Math.max(0, a / f - r * r)), e.x = t.x - r * u - o * c, e.y = t.y - r * c + o * u) : (r = (f + i - a) / (2 * f), o = Math.sqrt(Math.max(0, i / f - r * r)), e.x = n.x + r * u - o * c, e.y = n.y + r * c + o * u)) : (e.x = n.x + e.r, e.y = n.y) }

    function Zh(t, n) { var e = t.r + n.r - 1e-6,
            r = n.x - t.x,
            i = n.y - t.y; return e > 0 && e * e > r * r + i * i }

    function Kh(t) { var n = t._,
            e = t.next._,
            r = n.r + e.r,
            i = (n.x * e.r + e.x * n.r) / r,
            o = (n.y * e.r + e.y * n.r) / r; return i * i + o * o }

    function Qh(t) { this._ = t, this.next = null, this.previous = null }

    function Jh(t) { if (!(i = (t = function(t) { return "object" == typeof t && "length" in t ? t : Array.from(t) }(t)).length)) return 0; var n, e, r, i, o, a, u, c, f, s, l; if ((n = t[0]).x = 0, n.y = 0, !(i > 1)) return n.r; if (e = t[1], n.x = -e.r, e.x = n.r, e.y = 0, !(i > 2)) return n.r + e.r;
        Wh(e, n, r = t[2]), n = new Qh(n), e = new Qh(e), r = new Qh(r), n.next = r.previous = e, e.next = n.previous = r, r.next = e.previous = n;
        t: for (u = 3; u < i; ++u) { Wh(n._, e._, r = t[u]), r = new Qh(r), c = e.next, f = n.previous, s = e._.r, l = n._.r;
            do { if (s <= l) { if (Zh(c._, r._)) { e = c, n.next = e, e.previous = n, --u; continue t } s += c._.r, c = c.next } else { if (Zh(f._, r._)) {
                        (n = f).next = e, e.previous = n, --u; continue t } l += f._.r, f = f.previous } } while (c !== f.next); for (r.previous = n, r.next = e, n.next = e.previous = e = r, o = Kh(n);
                (r = r.next) !== e;)(a = Kh(r)) < o && (n = r, o = a);
            e = n.next }
        for (n = [e._], r = e;
            (r = r.next) !== e;) n.push(r._); for (r = Yh(n), u = 0; u < i; ++u)(n = t[u]).x -= r.x, n.y -= r.y; return r.r }

    function td(t) { return null == t ? null : nd(t) }

    function nd(t) { if ("function" != typeof t) throw new Error; return t }

    function ed() { return 0 }

    function rd(t) { return function() { return t } }

    function id(t) { return Math.sqrt(t.value) }

    function od(t) { return function(n) { n.children || (n.r = Math.max(0, +t(n) || 0)) } }

    function ad(t, n) { return function(e) { if (r = e.children) { var r, i, o, a = r.length,
                    u = t(e) * n || 0; if (u)
                    for (i = 0; i < a; ++i) r[i].r += u; if (o = Jh(r), u)
                    for (i = 0; i < a; ++i) r[i].r -= u;
                e.r = o + u } } }

    function ud(t) { return function(n) { var e = n.parent;
            n.r *= t, e && (n.x = e.x + t * n.x, n.y = e.y + t * n.y) } }

    function cd(t) { t.x0 = Math.round(t.x0), t.y0 = Math.round(t.y0), t.x1 = Math.round(t.x1), t.y1 = Math.round(t.y1) }

    function fd(t, n, e, r, i) { for (var o, a = t.children, u = -1, c = a.length, f = t.value && (r - n) / t.value; ++u < c;)(o = a[u]).y0 = e, o.y1 = i, o.x0 = n, o.x1 = n += o.value * f } Th.invert = function(t, n) { for (var e, r = n, i = r * r, o = i * i * i, a = 0; a < 12 && (o = (i = (r -= e = (r * (mh + xh * i + o * (wh + Mh * i)) - n) / (mh + 3 * xh * i + o * (7 * wh + 9 * Mh * i))) * r) * i * i, !(vc(e) < sc)); ++a); return [Ah * t * (mh + 3 * xh * i + o * (7 * wh + 9 * Mh * i)) / mc(r), Pc(Sc(r) / Ah)] }, Sh.invert = lh(_c), Eh.invert = function(t, n) { var e, r = n,
            i = 25;
        do { var o = r * r,
                a = o * o;
            r -= e = (r * (1.007226 + o * (.015085 + a * (.028874 * o - .044475 - .005916 * a))) - n) / (1.007226 + o * (.045255 + a * (.259866 * o - .311325 - .005916 * 11 * a))) } while (vc(e) > fc && --i > 0); return [t / (.8707 + (o = r * r) * (o * (o * o * o * (.003971 - .001529 * o) - .013791) - .131979)), r] }, kh.invert = lh(Pc), Nh.invert = lh((function(t) { return 2 * _c(t) })), Ch.invert = function(t, n) { return [-n, 2 * _c(wc(t)) - hc] }, Bh.prototype = Rh.prototype = { constructor: Bh, count: function() { return this.eachAfter(qh) }, each: function(t, n) { let e = -1; for (const r of this) t.call(n, r, ++e, this); return this }, eachAfter: function(t, n) { for (var e, r, i, o = this, a = [o], u = [], c = -1; o = a.pop();)
                if (u.push(o), e = o.children)
                    for (r = 0, i = e.length; r < i; ++r) a.push(e[r]); for (; o = u.pop();) t.call(n, o, ++c, this); return this }, eachBefore: function(t, n) { for (var e, r, i = this, o = [i], a = -1; i = o.pop();)
                if (t.call(n, i, ++a, this), e = i.children)
                    for (r = e.length - 1; r >= 0; --r) o.push(e[r]); return this }, find: function(t, n) { let e = -1; for (const r of this)
                if (t.call(n, r, ++e, this)) return r }, sum: function(t) { return this.eachAfter((function(n) { for (var e = +t(n.data) || 0, r = n.children, i = r && r.length; --i >= 0;) e += r[i].value;
                n.value = e })) }, sort: function(t) { return this.eachBefore((function(n) { n.children && n.children.sort(t) })) }, path: function(t) { for (var n = this, e = function(t, n) { if (t === n) return t; var e = t.ancestors(),
                        r = n.ancestors(),
                        i = null;
                    t = e.pop(), n = r.pop(); for (; t === n;) i = t, t = e.pop(), n = r.pop(); return i }(n, t), r = [n]; n !== e;) n = n.parent, r.push(n); for (var i = r.length; t !== e;) r.splice(i, 0, t), t = t.parent; return r }, ancestors: function() { for (var t = this, n = [t]; t = t.parent;) n.push(t); return n }, descendants: function() { return Array.from(this) }, leaves: function() { var t = []; return this.eachBefore((function(n) { n.children || t.push(n) })), t }, links: function() { var t = this,
                n = []; return t.each((function(e) { e !== t && n.push({ source: e.parent, target: e }) })), n }, copy: function() { return Rh(this).eachBefore(Uh) }, [Symbol.iterator]: function*() { var t, n, e, r, i = this,
                o = [i];
            do { for (t = o.reverse(), o = []; i = t.pop();)
                    if (yield i, n = i.children)
                        for (e = 0, r = n.length; e < r; ++e) o.push(n[e]) } while (o.length) } }; var sd = { depth: -1 },
        ld = {};

    function hd(t) { return t.id }

    function dd(t) { return t.parentId }

    function pd(t, n) { return t.parent === n.parent ? 1 : 2 }

    function gd(t) { var n = t.children; return n ? n[0] : t.t }

    function yd(t) { var n = t.children; return n ? n[n.length - 1] : t.t }

    function vd(t, n, e) { var r = e / (n.i - t.i);
        n.c -= r, n.s += e, t.c += r, n.z += e, n.m += e }

    function _d(t, n, e) { return t.a.parent === n.parent ? t.a : e }

    function bd(t, n) { this._ = t, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = n }

    function md(t, n, e, r, i) { for (var o, a = t.children, u = -1, c = a.length, f = t.value && (i - e) / t.value; ++u < c;)(o = a[u]).x0 = n, o.x1 = r, o.y0 = e, o.y1 = e += o.value * f } bd.prototype = Object.create(Bh.prototype); var xd = (1 + Math.sqrt(5)) / 2;

    function wd(t, n, e, r, i, o) { for (var a, u, c, f, s, l, h, d, p, g, y, v = [], _ = n.children, b = 0, m = 0, x = _.length, w = n.value; b < x;) { c = i - e, f = o - r;
            do { s = _[m++].value } while (!s && m < x); for (l = h = s, y = s * s * (g = Math.max(f / c, c / f) / (w * t)), p = Math.max(h / y, y / l); m < x; ++m) { if (s += u = _[m].value, u < l && (l = u), u > h && (h = u), y = s * s * g, (d = Math.max(h / y, y / l)) > p) { s -= u; break } p = d } v.push(a = { value: s, dice: c < f, children: _.slice(b, m) }), a.dice ? fd(a, e, r, i, w ? r += f * s / w : o) : md(a, e, r, w ? e += c * s / w : i, o), w -= s, b = m } return v } var Md = function t(n) {
        function e(t, e, r, i, o) { wd(n, t, e, r, i, o) } return e.ratio = function(n) { return t((n = +n) > 1 ? n : 1) }, e }(xd); var Ad = function t(n) {
        function e(t, e, r, i, o) { if ((a = t._squarify) && a.ratio === n)
                for (var a, u, c, f, s, l = -1, h = a.length, d = t.value; ++l < h;) { for (c = (u = a[l]).children, f = u.value = 0, s = c.length; f < s; ++f) u.value += c[f].value;
                    u.dice ? fd(u, e, r, i, d ? r += (o - r) * u.value / d : o) : md(u, e, r, d ? e += (i - e) * u.value / d : i, o), d -= u.value } else t._squarify = a = wd(n, t, e, r, i, o), a.ratio = n } return e.ratio = function(n) { return t((n = +n) > 1 ? n : 1) }, e }(xd);

    function Td(t, n, e) { return (n[0] - t[0]) * (e[1] - t[1]) - (n[1] - t[1]) * (e[0] - t[0]) }

    function Sd(t, n) { return t[0] - n[0] || t[1] - n[1] }

    function Ed(t) { const n = t.length,
            e = [0, 1]; let r, i = 2; for (r = 2; r < n; ++r) { for (; i > 1 && Td(t[e[i - 2]], t[e[i - 1]], t[r]) <= 0;) --i;
            e[i++] = r } return e.slice(0, i) } var kd = Math.random,
        Nd = function t(n) {
            function e(t, e) { return t = null == t ? 0 : +t, e = null == e ? 1 : +e, 1 === arguments.length ? (e = t, t = 0) : e -= t,
                    function() { return n() * e + t } } return e.source = t, e }(kd),
        Cd = function t(n) {
            function e(t, e) { return arguments.length < 2 && (e = t, t = 0), t = Math.floor(t), e = Math.floor(e) - t,
                    function() { return Math.floor(n() * e + t) } } return e.source = t, e }(kd),
        Pd = function t(n) {
            function e(t, e) { var r, i; return t = null == t ? 0 : +t, e = null == e ? 1 : +e,
                    function() { var o; if (null != r) o = r, r = null;
                        else
                            do { r = 2 * n() - 1, o = 2 * n() - 1, i = r * r + o * o } while (!i || i > 1); return t + e * o * Math.sqrt(-2 * Math.log(i) / i) } } return e.source = t, e }(kd),
        zd = function t(n) { var e = Pd.source(n);

            function r() { var t = e.apply(this, arguments); return function() { return Math.exp(t()) } } return r.source = t, r }(kd),
        Dd = function t(n) {
            function e(t) { return (t = +t) <= 0 ? () => 0 : function() { for (var e = 0, r = t; r > 1; --r) e += n(); return e + r * n() } } return e.source = t, e }(kd),
        qd = function t(n) { var e = Dd.source(n);

            function r(t) { if (0 == (t = +t)) return n; var r = e(t); return function() { return r() / t } } return r.source = t, r }(kd),
        Rd = function t(n) {
            function e(t) { return function() { return -Math.log1p(-n()) / t } } return e.source = t, e }(kd),
        Fd = function t(n) {
            function e(t) { if ((t = +t) < 0) throw new RangeError("invalid alpha"); return t = 1 / -t,
                    function() { return Math.pow(1 - n(), t) } } return e.source = t, e }(kd),
        Od = function t(n) {
            function e(t) { if ((t = +t) < 0 || t > 1) throw new RangeError("invalid p"); return function() { return Math.floor(n() + t) } } return e.source = t, e }(kd),
        Ud = function t(n) {
            function e(t) { if ((t = +t) < 0 || t > 1) throw new RangeError("invalid p"); return 0 === t ? () => 1 / 0 : 1 === t ? () => 1 : (t = Math.log1p(-t), function() { return 1 + Math.floor(Math.log1p(-n()) / t) }) } return e.source = t, e }(kd),
        Id = function t(n) { var e = Pd.source(n)();

            function r(t, r) { if ((t = +t) < 0) throw new RangeError("invalid k"); if (0 === t) return () => 0; if (r = null == r ? 1 : +r, 1 === t) return () => -Math.log1p(-n()) * r; var i = (t < 1 ? t + 1 : t) - 1 / 3,
                    o = 1 / (3 * Math.sqrt(i)),
                    a = t < 1 ? () => Math.pow(n(), 1 / t) : () => 1; return function() { do { do { var t = e(),
                                u = 1 + o * t } while (u <= 0);
                        u *= u * u; var c = 1 - n() } while (c >= 1 - .0331 * t * t * t * t && Math.log(c) >= .5 * t * t + i * (1 - u + Math.log(u))); return i * u * a() * r } } return r.source = t, r }(kd),
        Bd = function t(n) { var e = Id.source(n);

            function r(t, n) { var r = e(t),
                    i = e(n); return function() { var t = r(); return 0 === t ? 0 : t / (t + i()) } } return r.source = t, r }(kd),
        Yd = function t(n) { var e = Ud.source(n),
                r = Bd.source(n);

            function i(t, n) { return t = +t, (n = +n) >= 1 ? () => t : n <= 0 ? () => 0 : function() { for (var i = 0, o = t, a = n; o * a > 16 && o * (1 - a) > 16;) { var u = Math.floor((o + 1) * a),
                            c = r(u, o - u + 1)();
                        c <= a ? (i += u, o -= u, a = (a - c) / (1 - c)) : (o = u - 1, a /= c) } for (var f = a < .5, s = e(f ? a : 1 - a), l = s(), h = 0; l <= o; ++h) l += s(); return i + (f ? h : o - h) } } return i.source = t, i }(kd),
        Ld = function t(n) {
            function e(t, e, r) { var i; return 0 == (t = +t) ? i = t => -Math.log(t) : (t = 1 / t, i = n => Math.pow(n, t)), e = null == e ? 0 : +e, r = null == r ? 1 : +r,
                    function() { return e + r * i(-Math.log1p(-n())) } } return e.source = t, e }(kd),
        jd = function t(n) {
            function e(t, e) { return t = null == t ? 0 : +t, e = null == e ? 1 : +e,
                    function() { return t + e * Math.tan(Math.PI * n()) } } return e.source = t, e }(kd),
        Hd = function t(n) {
            function e(t, e) { return t = null == t ? 0 : +t, e = null == e ? 1 : +e,
                    function() { var r = n(); return t + e * Math.log(r / (1 - r)) } } return e.source = t, e }(kd),
        Xd = function t(n) { var e = Id.source(n),
                r = Yd.source(n);

            function i(t) { return function() { for (var i = 0, o = t; o > 16;) { var a = Math.floor(.875 * o),
                            u = e(a)(); if (u > o) return i + r(a - 1, o / u)();
                        i += a, o -= u } for (var c = -Math.log1p(-n()), f = 0; c <= o; ++f) c -= Math.log1p(-n()); return i + f } } return i.source = t, i }(kd); const Gd = 1 / 4294967296;

    function Vd(t, n) { switch (arguments.length) {
            case 0:
                break;
            case 1:
                this.range(t); break;
            default:
                this.range(n).domain(t) } return this }

    function $d(t, n) { switch (arguments.length) {
            case 0:
                break;
            case 1:
                "function" == typeof t ? this.interpolator(t) : this.range(t); break;
            default:
                this.domain(t), "function" == typeof n ? this.interpolator(n) : this.range(n) } return this } const Wd = Symbol("implicit");

    function Zd() { var t = new Map,
            n = [],
            e = [],
            r = Wd;

        function i(i) { var o = i + "",
                a = t.get(o); if (!a) { if (r !== Wd) return r;
                t.set(o, a = n.push(i)) } return e[(a - 1) % e.length] } return i.domain = function(e) { if (!arguments.length) return n.slice();
            n = [], t = new Map; for (const r of e) { const e = r + "";
                t.has(e) || t.set(e, n.push(r)) } return i }, i.range = function(t) { return arguments.length ? (e = Array.from(t), i) : e.slice() }, i.unknown = function(t) { return arguments.length ? (r = t, i) : r }, i.copy = function() { return Zd(n, e).unknown(r) }, Vd.apply(i, arguments), i }

    function Kd() { var t, n, e = Zd().unknown(void 0),
            r = e.domain,
            i = e.range,
            o = 0,
            a = 1,
            u = !1,
            c = 0,
            f = 0,
            s = .5;

        function l() { var e = r().length,
                l = a < o,
                h = l ? a : o,
                d = l ? o : a;
            t = (d - h) / Math.max(1, e - c + 2 * f), u && (t = Math.floor(t)), h += (d - h - t * (e - c)) * s, n = t * (1 - c), u && (h = Math.round(h), n = Math.round(n)); var p = B(e).map((function(n) { return h + t * n })); return i(l ? p.reverse() : p) } return delete e.unknown, e.domain = function(t) { return arguments.length ? (r(t), l()) : r() }, e.range = function(t) { return arguments.length ? ([o, a] = t, o = +o, a = +a, l()) : [o, a] }, e.rangeRound = function(t) { return [o, a] = t, o = +o, a = +a, u = !0, l() }, e.bandwidth = function() { return n }, e.step = function() { return t }, e.round = function(t) { return arguments.length ? (u = !!t, l()) : u }, e.padding = function(t) { return arguments.length ? (c = Math.min(1, f = +t), l()) : c }, e.paddingInner = function(t) { return arguments.length ? (c = Math.min(1, t), l()) : c }, e.paddingOuter = function(t) { return arguments.length ? (f = +t, l()) : f }, e.align = function(t) { return arguments.length ? (s = Math.max(0, Math.min(1, t)), l()) : s }, e.copy = function() { return Kd(r(), [o, a]).round(u).paddingInner(c).paddingOuter(f).align(s) }, Vd.apply(l(), arguments) }

    function Qd(t) { var n = t.copy; return t.padding = t.paddingOuter, delete t.paddingInner, delete t.paddingOuter, t.copy = function() { return Qd(n()) }, t }

    function Jd(t) { return +t } var tp = [0, 1];

    function np(t) { return t }

    function ep(t, n) { return (n -= t = +t) ? function(e) { return (e - t) / n } : function(t) { return function() { return t } }(isNaN(n) ? NaN : .5) }

    function rp(t, n, e) { var r = t[0],
            i = t[1],
            o = n[0],
            a = n[1]; return i < r ? (r = ep(i, r), o = e(a, o)) : (r = ep(r, i), o = e(o, a)),
            function(t) { return o(r(t)) } }

    function ip(t, n, e) { var r = Math.min(t.length, n.length) - 1,
            i = new Array(r),
            a = new Array(r),
            u = -1; for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++u < r;) i[u] = ep(t[u], t[u + 1]), a[u] = e(n[u], n[u + 1]); return function(n) { var e = o(t, n, 1, r) - 1; return a[e](i[e](n)) } }

    function op(t, n) { return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown()) }

    function ap() { var t, n, e, r, i, o, a = tp,
            u = tp,
            c = dr,
            f = np;

        function s() { var t = Math.min(a.length, u.length); return f !== np && (f = function(t, n) { var e; return t > n && (e = t, t = n, n = e),
                    function(e) { return Math.max(t, Math.min(n, e)) } }(a[0], a[t - 1])), r = t > 2 ? ip : rp, i = o = null, l }

        function l(n) { return isNaN(n = +n) ? e : (i || (i = r(a.map(t), u, c)))(t(f(n))) } return l.invert = function(e) { return f(n((o || (o = r(u, a.map(t), cr)))(e))) }, l.domain = function(t) { return arguments.length ? (a = Array.from(t, Jd), s()) : a.slice() }, l.range = function(t) { return arguments.length ? (u = Array.from(t), s()) : u.slice() }, l.rangeRound = function(t) { return u = Array.from(t), c = pr, s() }, l.clamp = function(t) { return arguments.length ? (f = !!t || np, s()) : f !== np }, l.interpolate = function(t) { return arguments.length ? (c = t, s()) : c }, l.unknown = function(t) { return arguments.length ? (e = t, l) : e },
            function(e, r) { return t = e, n = r, s() } }

    function up() { return ap()(np, np) }

    function cp(n, e, r, i) { var o, a = S(n, e, r); switch ((i = Zu(null == i ? ",f" : i)).type) {
            case "s":
                var u = Math.max(Math.abs(n), Math.abs(e)); return null != i.precision || isNaN(o = uc(a, u)) || (i.precision = o), t.formatPrefix(i, u);
            case "":
            case "e":
            case "g":
            case "p":
            case "r":
                null != i.precision || isNaN(o = cc(a, Math.max(Math.abs(n), Math.abs(e)))) || (i.precision = o - ("e" === i.type)); break;
            case "f":
            case "%":
                null != i.precision || isNaN(o = ac(a)) || (i.precision = o - 2 * ("%" === i.type)) } return t.format(i) }

    function fp(t) { var n = t.domain; return t.ticks = function(t) { var e = n(); return A(e[0], e[e.length - 1], null == t ? 10 : t) }, t.tickFormat = function(t, e) { var r = n(); return cp(r[0], r[r.length - 1], null == t ? 10 : t, e) }, t.nice = function(e) { null == e && (e = 10); var r, i, o = n(),
                a = 0,
                u = o.length - 1,
                c = o[a],
                f = o[u],
                s = 10; for (f < c && (i = c, c = f, f = i, i = a, a = u, u = i); s-- > 0;) { if ((i = T(c, f, e)) === r) return o[a] = c, o[u] = f, n(o); if (i > 0) c = Math.floor(c / i) * i, f = Math.ceil(f / i) * i;
                else { if (!(i < 0)) break;
                    c = Math.ceil(c * i) / i, f = Math.floor(f * i) / i } r = i } return t }, t }

    function sp(t, n) { var e, r = 0,
            i = (t = t.slice()).length - 1,
            o = t[r],
            a = t[i]; return a < o && (e = r, r = i, i = e, e = o, o = a, a = e), t[r] = n.floor(o), t[i] = n.ceil(a), t }

    function lp(t) { return Math.log(t) }

    function hp(t) { return Math.exp(t) }

    function dp(t) { return -Math.log(-t) }

    function pp(t) { return -Math.exp(-t) }

    function gp(t) { return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t }

    function yp(t) { return function(n) { return -t(-n) } }

    function vp(n) { var e, r, i = n(lp, hp),
            o = i.domain,
            a = 10;

        function u() { return e = function(t) { return t === Math.E ? Math.log : 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t), function(n) { return Math.log(n) / t }) }(a), r = function(t) { return 10 === t ? gp : t === Math.E ? Math.exp : function(n) { return Math.pow(t, n) } }(a), o()[0] < 0 ? (e = yp(e), r = yp(r), n(dp, pp)) : n(lp, hp), i } return i.base = function(t) { return arguments.length ? (a = +t, u()) : a }, i.domain = function(t) { return arguments.length ? (o(t), u()) : o() }, i.ticks = function(t) { var n, i = o(),
                u = i[0],
                c = i[i.length - 1];
            (n = c < u) && (h = u, u = c, c = h); var f, s, l, h = e(u),
                d = e(c),
                p = null == t ? 10 : +t,
                g = []; if (!(a % 1) && d - h < p) { if (h = Math.floor(h), d = Math.ceil(d), u > 0) { for (; h <= d; ++h)
                        for (s = 1, f = r(h); s < a; ++s)
                            if (!((l = f * s) < u)) { if (l > c) break;
                                g.push(l) } } else
                    for (; h <= d; ++h)
                        for (s = a - 1, f = r(h); s >= 1; --s)
                            if (!((l = f * s) < u)) { if (l > c) break;
                                g.push(l) } 2 * g.length < p && (g = A(u, c, p)) } else g = A(h, d, Math.min(d - h, p)).map(r); return n ? g.reverse() : g }, i.tickFormat = function(n, o) { if (null == o && (o = 10 === a ? ".0e" : ","), "function" != typeof o && (o = t.format(o)), n === 1 / 0) return o;
            null == n && (n = 10); var u = Math.max(1, a * n / i.ticks().length); return function(t) { var n = t / r(Math.round(e(t))); return n * a < a - .5 && (n *= a), n <= u ? o(t) : "" } }, i.nice = function() { return o(sp(o(), { floor: function(t) { return r(Math.floor(e(t))) }, ceil: function(t) { return r(Math.ceil(e(t))) } })) }, i }

    function _p(t) { return function(n) { return Math.sign(n) * Math.log1p(Math.abs(n / t)) } }

    function bp(t) { return function(n) { return Math.sign(n) * Math.expm1(Math.abs(n)) * t } }

    function mp(t) { var n = 1,
            e = t(_p(n), bp(n)); return e.constant = function(e) { return arguments.length ? t(_p(n = +e), bp(n)) : n }, fp(e) }

    function xp(t) { return function(n) { return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t) } }

    function wp(t) { return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t) }

    function Mp(t) { return t < 0 ? -t * t : t * t }

    function Ap(t) { var n = t(np, np),
            e = 1;

        function r() { return 1 === e ? t(np, np) : .5 === e ? t(wp, Mp) : t(xp(e), xp(1 / e)) } return n.exponent = function(t) { return arguments.length ? (e = +t, r()) : e }, fp(n) }

    function Tp() { var t = Ap(ap()); return t.copy = function() { return op(t, Tp()).exponent(t.exponent()) }, Vd.apply(t, arguments), t }

    function Sp(t) { return Math.sign(t) * t * t }

    function Ep(t) { return Math.sign(t) * Math.sqrt(Math.abs(t)) } var kp = new Date,
        Np = new Date;

    function Cp(t, n, e, r) {
        function i(n) { return t(n = 0 === arguments.length ? new Date : new Date(+n)), n } return i.floor = function(n) { return t(n = new Date(+n)), n }, i.ceil = function(e) { return t(e = new Date(e - 1)), n(e, 1), t(e), e }, i.round = function(t) { var n = i(t),
                e = i.ceil(t); return t - n < e - t ? n : e }, i.offset = function(t, e) { return n(t = new Date(+t), null == e ? 1 : Math.floor(e)), t }, i.range = function(e, r, o) { var a, u = []; if (e = i.ceil(e), o = null == o ? 1 : Math.floor(o), !(e < r && o > 0)) return u;
            do { u.push(a = new Date(+e)), n(e, o), t(e) } while (a < e && e < r); return u }, i.filter = function(e) { return Cp((function(n) { if (n >= n)
                    for (; t(n), !e(n);) n.setTime(n - 1) }), (function(t, r) { if (t >= t)
                    if (r < 0)
                        for (; ++r <= 0;)
                            for (; n(t, -1), !e(t););
                    else
                        for (; --r >= 0;)
                            for (; n(t, 1), !e(t);); })) }, e && (i.count = function(n, r) { return kp.setTime(+n), Np.setTime(+r), t(kp), t(Np), Math.floor(e(kp, Np)) }, i.every = function(t) { return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? i.filter(r ? function(n) { return r(n) % t == 0 } : function(n) { return i.count(0, n) % t == 0 }) : i : null }), i } var Pp = Cp((function() {}), (function(t, n) { t.setTime(+t + n) }), (function(t, n) { return n - t }));
    Pp.every = function(t) { return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? Cp((function(n) { n.setTime(Math.floor(n / t) * t) }), (function(n, e) { n.setTime(+n + e * t) }), (function(n, e) { return (e - n) / t })) : Pp : null }; var zp = Pp.range,
        Dp = 1e3,
        qp = 6e4,
        Rp = 36e5,
        Fp = 864e5,
        Op = 6048e5,
        Up = Cp((function(t) { t.setTime(t - t.getMilliseconds()) }), (function(t, n) { t.setTime(+t + n * Dp) }), (function(t, n) { return (n - t) / Dp }), (function(t) { return t.getUTCSeconds() })),
        Ip = Up.range,
        Bp = Cp((function(t) { t.setTime(t - t.getMilliseconds() - t.getSeconds() * Dp) }), (function(t, n) { t.setTime(+t + n * qp) }), (function(t, n) { return (n - t) / qp }), (function(t) { return t.getMinutes() })),
        Yp = Bp.range,
        Lp = Cp((function(t) { t.setTime(t - t.getMilliseconds() - t.getSeconds() * Dp - t.getMinutes() * qp) }), (function(t, n) { t.setTime(+t + n * Rp) }), (function(t, n) { return (n - t) / Rp }), (function(t) { return t.getHours() })),
        jp = Lp.range,
        Hp = Cp(t => t.setHours(0, 0, 0, 0), (t, n) => t.setDate(t.getDate() + n), (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * qp) / Fp, t => t.getDate() - 1),
        Xp = Hp.range;

    function Gp(t) { return Cp((function(n) { n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0) }), (function(t, n) { t.setDate(t.getDate() + 7 * n) }), (function(t, n) { return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * qp) / Op })) } var Vp = Gp(0),
        $p = Gp(1),
        Wp = Gp(2),
        Zp = Gp(3),
        Kp = Gp(4),
        Qp = Gp(5),
        Jp = Gp(6),
        tg = Vp.range,
        ng = $p.range,
        eg = Wp.range,
        rg = Zp.range,
        ig = Kp.range,
        og = Qp.range,
        ag = Jp.range,
        ug = Cp((function(t) { t.setDate(1), t.setHours(0, 0, 0, 0) }), (function(t, n) { t.setMonth(t.getMonth() + n) }), (function(t, n) { return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear()) }), (function(t) { return t.getMonth() })),
        cg = ug.range,
        fg = Cp((function(t) { t.setMonth(0, 1), t.setHours(0, 0, 0, 0) }), (function(t, n) { t.setFullYear(t.getFullYear() + n) }), (function(t, n) { return n.getFullYear() - t.getFullYear() }), (function(t) { return t.getFullYear() }));
    fg.every = function(t) { return isFinite(t = Math.floor(t)) && t > 0 ? Cp((function(n) { n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0) }), (function(n, e) { n.setFullYear(n.getFullYear() + e * t) })) : null }; var sg = fg.range,
        lg = Cp((function(t) { t.setUTCSeconds(0, 0) }), (function(t, n) { t.setTime(+t + n * qp) }), (function(t, n) { return (n - t) / qp }), (function(t) { return t.getUTCMinutes() })),
        hg = lg.range,
        dg = Cp((function(t) { t.setUTCMinutes(0, 0, 0) }), (function(t, n) { t.setTime(+t + n * Rp) }), (function(t, n) { return (n - t) / Rp }), (function(t) { return t.getUTCHours() })),
        pg = dg.range,
        gg = Cp((function(t) { t.setUTCHours(0, 0, 0, 0) }), (function(t, n) { t.setUTCDate(t.getUTCDate() + n) }), (function(t, n) { return (n - t) / Fp }), (function(t) { return t.getUTCDate() - 1 })),
        yg = gg.range;

    function vg(t) { return Cp((function(n) { n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0) }), (function(t, n) { t.setUTCDate(t.getUTCDate() + 7 * n) }), (function(t, n) { return (n - t) / Op })) } var _g = vg(0),
        bg = vg(1),
        mg = vg(2),
        xg = vg(3),
        wg = vg(4),
        Mg = vg(5),
        Ag = vg(6),
        Tg = _g.range,
        Sg = bg.range,
        Eg = mg.range,
        kg = xg.range,
        Ng = wg.range,
        Cg = Mg.range,
        Pg = Ag.range,
        zg = Cp((function(t) { t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0) }), (function(t, n) { t.setUTCMonth(t.getUTCMonth() + n) }), (function(t, n) { return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear()) }), (function(t) { return t.getUTCMonth() })),
        Dg = zg.range,
        qg = Cp((function(t) { t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0) }), (function(t, n) { t.setUTCFullYear(t.getUTCFullYear() + n) }), (function(t, n) { return n.getUTCFullYear() - t.getUTCFullYear() }), (function(t) { return t.getUTCFullYear() }));
    qg.every = function(t) { return isFinite(t = Math.floor(t)) && t > 0 ? Cp((function(n) { n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0) }), (function(n, e) { n.setUTCFullYear(n.getUTCFullYear() + e * t) })) : null }; var Rg = qg.range;

    function Fg(t) { if (0 <= t.y && t.y < 100) { var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L); return n.setFullYear(t.y), n } return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L) }

    function Og(t) { if (0 <= t.y && t.y < 100) { var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L)); return n.setUTCFullYear(t.y), n } return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L)) }

    function Ug(t, n, e) { return { y: t, m: n, d: e, H: 0, M: 0, S: 0, L: 0 } }

    function Ig(t) { var n = t.dateTime,
            e = t.date,
            r = t.time,
            i = t.periods,
            o = t.days,
            a = t.shortDays,
            u = t.months,
            c = t.shortMonths,
            f = Vg(i),
            s = $g(i),
            l = Vg(o),
            h = $g(o),
            d = Vg(a),
            p = $g(a),
            g = Vg(u),
            y = $g(u),
            v = Vg(c),
            _ = $g(c),
            b = { a: function(t) { return a[t.getDay()] }, A: function(t) { return o[t.getDay()] }, b: function(t) { return c[t.getMonth()] }, B: function(t) { return u[t.getMonth()] }, c: null, d: gy, e: gy, f: my, g: Py, G: Dy, H: yy, I: vy, j: _y, L: by, m: xy, M: wy, p: function(t) { return i[+(t.getHours() >= 12)] }, q: function(t) { return 1 + ~~(t.getMonth() / 3) }, Q: ev, s: rv, S: My, u: Ay, U: Ty, V: Ey, w: ky, W: Ny, x: null, X: null, y: Cy, Y: zy, Z: qy, "%": nv },
            m = { a: function(t) { return a[t.getUTCDay()] }, A: function(t) { return o[t.getUTCDay()] }, b: function(t) { return c[t.getUTCMonth()] }, B: function(t) { return u[t.getUTCMonth()] }, c: null, d: Ry, e: Ry, f: By, g: Ky, G: Jy, H: Fy, I: Oy, j: Uy, L: Iy, m: Yy, M: Ly, p: function(t) { return i[+(t.getUTCHours() >= 12)] }, q: function(t) { return 1 + ~~(t.getUTCMonth() / 3) }, Q: ev, s: rv, S: jy, u: Hy, U: Xy, V: Vy, w: $y, W: Wy, x: null, X: null, y: Zy, Y: Qy, Z: tv, "%": nv },
            x = { a: function(t, n, e) { var r = d.exec(n.slice(e)); return r ? (t.w = p.get(r[0].toLowerCase()), e + r[0].length) : -1 }, A: function(t, n, e) { var r = l.exec(n.slice(e)); return r ? (t.w = h.get(r[0].toLowerCase()), e + r[0].length) : -1 }, b: function(t, n, e) { var r = v.exec(n.slice(e)); return r ? (t.m = _.get(r[0].toLowerCase()), e + r[0].length) : -1 }, B: function(t, n, e) { var r = g.exec(n.slice(e)); return r ? (t.m = y.get(r[0].toLowerCase()), e + r[0].length) : -1 }, c: function(t, e, r) { return A(t, n, e, r) }, d: oy, e: oy, f: ly, g: ny, G: ty, H: uy, I: uy, j: ay, L: sy, m: iy, M: cy, p: function(t, n, e) { var r = f.exec(n.slice(e)); return r ? (t.p = s.get(r[0].toLowerCase()), e + r[0].length) : -1 }, q: ry, Q: dy, s: py, S: fy, u: Zg, U: Kg, V: Qg, w: Wg, W: Jg, x: function(t, n, r) { return A(t, e, n, r) }, X: function(t, n, e) { return A(t, r, n, e) }, y: ny, Y: ty, Z: ey, "%": hy };

        function w(t, n) { return function(e) { var r, i, o, a = [],
                    u = -1,
                    c = 0,
                    f = t.length; for (e instanceof Date || (e = new Date(+e)); ++u < f;) 37 === t.charCodeAt(u) && (a.push(t.slice(c, u)), null != (i = Yg[r = t.charAt(++u)]) ? r = t.charAt(++u) : i = "e" === r ? " " : "0", (o = n[r]) && (r = o(e, i)), a.push(r), c = u + 1); return a.push(t.slice(c, u)), a.join("") } }

        function M(t, n) { return function(e) { var r, i, o = Ug(1900, void 0, 1); if (A(o, t, e += "", 0) != e.length) return null; if ("Q" in o) return new Date(o.Q); if ("s" in o) return new Date(1e3 * o.s + ("L" in o ? o.L : 0)); if (n && !("Z" in o) && (o.Z = 0), "p" in o && (o.H = o.H % 12 + 12 * o.p), void 0 === o.m && (o.m = "q" in o ? o.q : 0), "V" in o) { if (o.V < 1 || o.V > 53) return null; "w" in o || (o.w = 1), "Z" in o ? (i = (r = Og(Ug(o.y, 0, 1))).getUTCDay(), r = i > 4 || 0 === i ? bg.ceil(r) : bg(r), r = gg.offset(r, 7 * (o.V - 1)), o.y = r.getUTCFullYear(), o.m = r.getUTCMonth(), o.d = r.getUTCDate() + (o.w + 6) % 7) : (i = (r = Fg(Ug(o.y, 0, 1))).getDay(), r = i > 4 || 0 === i ? $p.ceil(r) : $p(r), r = Hp.offset(r, 7 * (o.V - 1)), o.y = r.getFullYear(), o.m = r.getMonth(), o.d = r.getDate() + (o.w + 6) % 7) } else("W" in o || "U" in o) && ("w" in o || (o.w = "u" in o ? o.u % 7 : "W" in o ? 1 : 0), i = "Z" in o ? Og(Ug(o.y, 0, 1)).getUTCDay() : Fg(Ug(o.y, 0, 1)).getDay(), o.m = 0, o.d = "W" in o ? (o.w + 6) % 7 + 7 * o.W - (i + 5) % 7 : o.w + 7 * o.U - (i + 6) % 7); return "Z" in o ? (o.H += o.Z / 100 | 0, o.M += o.Z % 100, Og(o)) : Fg(o) } }

        function A(t, n, e, r) { for (var i, o, a = 0, u = n.length, c = e.length; a < u;) { if (r >= c) return -1; if (37 === (i = n.charCodeAt(a++))) { if (i = n.charAt(a++), !(o = x[i in Yg ? n.charAt(a++) : i]) || (r = o(t, e, r)) < 0) return -1 } else if (i != e.charCodeAt(r++)) return -1 } return r } return b.x = w(e, b), b.X = w(r, b), b.c = w(n, b), m.x = w(e, m), m.X = w(r, m), m.c = w(n, m), { format: function(t) { var n = w(t += "", b); return n.toString = function() { return t }, n }, parse: function(t) { var n = M(t += "", !1); return n.toString = function() { return t }, n }, utcFormat: function(t) { var n = w(t += "", m); return n.toString = function() { return t }, n }, utcParse: function(t) { var n = M(t += "", !0); return n.toString = function() { return t }, n } } } var Bg, Yg = { "-": "", _: " ", 0: "0" },
        Lg = /^\s*\d+/,
        jg = /^%/,
        Hg = /[\\^$*+?|[\]().{}]/g;

    function Xg(t, n, e) { var r = t < 0 ? "-" : "",
            i = (r ? -t : t) + "",
            o = i.length; return r + (o < e ? new Array(e - o + 1).join(n) + i : i) }

    function Gg(t) { return t.replace(Hg, "\\$&") }

    function Vg(t) { return new RegExp("^(?:" + t.map(Gg).join("|") + ")", "i") }

    function $g(t) { return new Map(t.map((t, n) => [t.toLowerCase(), n])) }

    function Wg(t, n, e) { var r = Lg.exec(n.slice(e, e + 1)); return r ? (t.w = +r[0], e + r[0].length) : -1 }

    function Zg(t, n, e) { var r = Lg.exec(n.slice(e, e + 1)); return r ? (t.u = +r[0], e + r[0].length) : -1 }

    function Kg(t, n, e) { var r = Lg.exec(n.slice(e, e + 2)); return r ? (t.U = +r[0], e + r[0].length) : -1 }

    function Qg(t, n, e) { var r = Lg.exec(n.slice(e, e + 2)); return r ? (t.V = +r[0], e + r[0].length) : -1 }

    function Jg(t, n, e) { var r = Lg.exec(n.slice(e, e + 2)); return r ? (t.W = +r[0], e + r[0].length) : -1 }

    function ty(t, n, e) { var r = Lg.exec(n.slice(e, e + 4)); return r ? (t.y = +r[0], e + r[0].length) : -1 }

    function ny(t, n, e) { var r = Lg.exec(n.slice(e, e + 2)); return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1 }

    function ey(t, n, e) { var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6)); return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1 }

    function ry(t, n, e) { var r = Lg.exec(n.slice(e, e + 1)); return r ? (t.q = 3 * r[0] - 3, e + r[0].length) : -1 }

    function iy(t, n, e) { var r = Lg.exec(n.slice(e, e + 2)); return r ? (t.m = r[0] - 1, e + r[0].length) : -1 }

    function oy(t, n, e) { var r = Lg.exec(n.slice(e, e + 2)); return r ? (t.d = +r[0], e + r[0].length) : -1 }

    function ay(t, n, e) { var r = Lg.exec(n.slice(e, e + 3)); return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1 }

    function uy(t, n, e) { var r = Lg.exec(n.slice(e, e + 2)); return r ? (t.H = +r[0], e + r[0].length) : -1 }

    function cy(t, n, e) { var r = Lg.exec(n.slice(e, e + 2)); return r ? (t.M = +r[0], e + r[0].length) : -1 }

    function fy(t, n, e) { var r = Lg.exec(n.slice(e, e + 2)); return r ? (t.S = +r[0], e + r[0].length) : -1 }

    function sy(t, n, e) { var r = Lg.exec(n.slice(e, e + 3)); return r ? (t.L = +r[0], e + r[0].length) : -1 }

    function ly(t, n, e) { var r = Lg.exec(n.slice(e, e + 6)); return r ? (t.L = Math.floor(r[0] / 1e3), e + r[0].length) : -1 }

    function hy(t, n, e) { var r = jg.exec(n.slice(e, e + 1)); return r ? e + r[0].length : -1 }

    function dy(t, n, e) { var r = Lg.exec(n.slice(e)); return r ? (t.Q = +r[0], e + r[0].length) : -1 }

    function py(t, n, e) { var r = Lg.exec(n.slice(e)); return r ? (t.s = +r[0], e + r[0].length) : -1 }

    function gy(t, n) { return Xg(t.getDate(), n, 2) }

    function yy(t, n) { return Xg(t.getHours(), n, 2) }

    function vy(t, n) { return Xg(t.getHours() % 12 || 12, n, 2) }

    function _y(t, n) { return Xg(1 + Hp.count(fg(t), t), n, 3) }

    function by(t, n) { return Xg(t.getMilliseconds(), n, 3) }

    function my(t, n) { return by(t, n) + "000" }

    function xy(t, n) { return Xg(t.getMonth() + 1, n, 2) }

    function wy(t, n) { return Xg(t.getMinutes(), n, 2) }

    function My(t, n) { return Xg(t.getSeconds(), n, 2) }

    function Ay(t) { var n = t.getDay(); return 0 === n ? 7 : n }

    function Ty(t, n) { return Xg(Vp.count(fg(t) - 1, t), n, 2) }

    function Sy(t) { var n = t.getDay(); return n >= 4 || 0 === n ? Kp(t) : Kp.ceil(t) }

    function Ey(t, n) { return t = Sy(t), Xg(Kp.count(fg(t), t) + (4 === fg(t).getDay()), n, 2) }

    function ky(t) { return t.getDay() }

    function Ny(t, n) { return Xg($p.count(fg(t) - 1, t), n, 2) }

    function Cy(t, n) { return Xg(t.getFullYear() % 100, n, 2) }

    function Py(t, n) { return Xg((t = Sy(t)).getFullYear() % 100, n, 2) }

    function zy(t, n) { return Xg(t.getFullYear() % 1e4, n, 4) }

    function Dy(t, n) { var e = t.getDay(); return Xg((t = e >= 4 || 0 === e ? Kp(t) : Kp.ceil(t)).getFullYear() % 1e4, n, 4) }

    function qy(t) { var n = t.getTimezoneOffset(); return (n > 0 ? "-" : (n *= -1, "+")) + Xg(n / 60 | 0, "0", 2) + Xg(n % 60, "0", 2) }

    function Ry(t, n) { return Xg(t.getUTCDate(), n, 2) }

    function Fy(t, n) { return Xg(t.getUTCHours(), n, 2) }

    function Oy(t, n) { return Xg(t.getUTCHours() % 12 || 12, n, 2) }

    function Uy(t, n) { return Xg(1 + gg.count(qg(t), t), n, 3) }

    function Iy(t, n) { return Xg(t.getUTCMilliseconds(), n, 3) }

    function By(t, n) { return Iy(t, n) + "000" }

    function Yy(t, n) { return Xg(t.getUTCMonth() + 1, n, 2) }

    function Ly(t, n) { return Xg(t.getUTCMinutes(), n, 2) }

    function jy(t, n) { return Xg(t.getUTCSeconds(), n, 2) }

    function Hy(t) { var n = t.getUTCDay(); return 0 === n ? 7 : n }

    function Xy(t, n) { return Xg(_g.count(qg(t) - 1, t), n, 2) }

    function Gy(t) { var n = t.getUTCDay(); return n >= 4 || 0 === n ? wg(t) : wg.ceil(t) }

    function Vy(t, n) { return t = Gy(t), Xg(wg.count(qg(t), t) + (4 === qg(t).getUTCDay()), n, 2) }

    function $y(t) { return t.getUTCDay() }

    function Wy(t, n) { return Xg(bg.count(qg(t) - 1, t), n, 2) }

    function Zy(t, n) { return Xg(t.getUTCFullYear() % 100, n, 2) }

    function Ky(t, n) { return Xg((t = Gy(t)).getUTCFullYear() % 100, n, 2) }

    function Qy(t, n) { return Xg(t.getUTCFullYear() % 1e4, n, 4) }

    function Jy(t, n) { var e = t.getUTCDay(); return Xg((t = e >= 4 || 0 === e ? wg(t) : wg.ceil(t)).getUTCFullYear() % 1e4, n, 4) }

    function tv() { return "+0000" }

    function nv() { return "%" }

    function ev(t) { return +t }

    function rv(t) { return Math.floor(+t / 1e3) }

    function iv(n) { return Bg = Ig(n), t.timeFormat = Bg.format, t.timeParse = Bg.parse, t.utcFormat = Bg.utcFormat, t.utcParse = Bg.utcParse, Bg } iv({ dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] }); var ov = "%Y-%m-%dT%H:%M:%S.%LZ"; var av = Date.prototype.toISOString ? function(t) { return t.toISOString() } : t.utcFormat(ov); var uv = +new Date("2000-01-01T00:00:00.000Z") ? function(t) { var n = new Date(t); return isNaN(n) ? null : n } : t.utcParse(ov),
        cv = 1e3,
        fv = 6e4,
        sv = 36e5,
        lv = 864e5,
        hv = 2592e6,
        dv = 31536e6;

    function pv(t) { return new Date(t) }

    function gv(t) { return t instanceof Date ? +t : +new Date(+t) }

    function yv(t, n, r, i, o, a, u, c, f) { var s = up(),
            l = s.invert,
            h = s.domain,
            d = f(".%L"),
            p = f(":%S"),
            g = f("%I:%M"),
            y = f("%I %p"),
            v = f("%a %d"),
            _ = f("%b %d"),
            b = f("%B"),
            m = f("%Y"),
            x = [
                [u, 1, cv],
                [u, 5, 5e3],
                [u, 15, 15e3],
                [u, 30, 3e4],
                [a, 1, fv],
                [a, 5, 3e5],
                [a, 15, 9e5],
                [a, 30, 18e5],
                [o, 1, sv],
                [o, 3, 108e5],
                [o, 6, 216e5],
                [o, 12, 432e5],
                [i, 1, lv],
                [i, 2, 1728e5],
                [r, 1, 6048e5],
                [n, 1, hv],
                [n, 3, 7776e6],
                [t, 1, dv]
            ];

        function w(e) { return (u(e) < e ? d : a(e) < e ? p : o(e) < e ? g : i(e) < e ? y : n(e) < e ? r(e) < e ? v : _ : t(e) < e ? b : m)(e) }

        function M(n, r, i) { if (null == n && (n = 10), "number" == typeof n) { var o, a = Math.abs(i - r) / n,
                    u = e((function(t) { return t[2] })).right(x, a); return u === x.length ? (o = S(r / dv, i / dv, n), n = t) : u ? (o = (u = x[a / x[u - 1][2] < x[u][2] / a ? u - 1 : u])[1], n = u[0]) : (o = Math.max(S(r, i, n), 1), n = c), n.every(o) } return n } return s.invert = function(t) { return new Date(l(t)) }, s.domain = function(t) { return arguments.length ? h(Array.from(t, gv)) : h().map(pv) }, s.ticks = function(t) { var n, e = h(),
                r = e[0],
                i = e[e.length - 1],
                o = i < r; return o && (n = r, r = i, i = n), n = (n = M(t, r, i)) ? n.range(r, i + 1) : [], o ? n.reverse() : n }, s.tickFormat = function(t, n) { return null == n ? w : f(n) }, s.nice = function(t) { var n = h(); return (t = M(t, n[0], n[n.length - 1])) ? h(sp(n, t)) : s }, s.copy = function() { return op(s, yv(t, n, r, i, o, a, u, c, f)) }, s }

    function vv() { var t, n, e, r, i, o = 0,
            a = 1,
            u = np,
            c = !1;

        function f(n) { return isNaN(n = +n) ? i : u(0 === e ? .5 : (n = (r(n) - t) * e, c ? Math.max(0, Math.min(1, n)) : n)) }

        function s(t) { return function(n) { var e, r; return arguments.length ? ([e, r] = n, u = t(e, r), f) : [u(0), u(1)] } } return f.domain = function(i) { return arguments.length ? ([o, a] = i, t = r(o = +o), n = r(a = +a), e = t === n ? 0 : 1 / (n - t), f) : [o, a] }, f.clamp = function(t) { return arguments.length ? (c = !!t, f) : c }, f.interpolator = function(t) { return arguments.length ? (u = t, f) : u }, f.range = s(dr), f.rangeRound = s(pr), f.unknown = function(t) { return arguments.length ? (i = t, f) : i },
            function(i) { return r = i, t = i(o), n = i(a), e = t === n ? 0 : 1 / (n - t), f } }

    function _v(t, n) { return n.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown()) }

    function bv() { var t = Ap(vv()); return t.copy = function() { return _v(t, bv()).exponent(t.exponent()) }, $d.apply(t, arguments) }

    function mv() { var t, n, e, r, i, o, a, u = 0,
            c = .5,
            f = 1,
            s = 1,
            l = np,
            h = !1;

        function d(t) { return isNaN(t = +t) ? a : (t = .5 + ((t = +o(t)) - n) * (s * t < s * n ? r : i), l(h ? Math.max(0, Math.min(1, t)) : t)) }

        function p(t) { return function(n) { var e, r, i; return arguments.length ? ([e, r, i] = n, l = Dr(t, [e, r, i]), d) : [l(0), l(.5), l(1)] } } return d.domain = function(a) { return arguments.length ? ([u, c, f] = a, t = o(u = +u), n = o(c = +c), e = o(f = +f), r = t === n ? 0 : .5 / (n - t), i = n === e ? 0 : .5 / (e - n), s = n < t ? -1 : 1, d) : [u, c, f] }, d.clamp = function(t) { return arguments.length ? (h = !!t, d) : h }, d.interpolator = function(t) { return arguments.length ? (l = t, d) : l }, d.range = p(dr), d.rangeRound = p(pr), d.unknown = function(t) { return arguments.length ? (a = t, d) : a },
            function(a) { return o = a, t = a(u), n = a(c), e = a(f), r = t === n ? 0 : .5 / (n - t), i = n === e ? 0 : .5 / (e - n), s = n < t ? -1 : 1, d } }

    function xv() { var t = Ap(mv()); return t.copy = function() { return _v(t, xv()).exponent(t.exponent()) }, $d.apply(t, arguments) }

    function wv(t) { for (var n = t.length / 6 | 0, e = new Array(n), r = 0; r < n;) e[r] = "#" + t.slice(6 * r, 6 * ++r); return e } var Mv = wv("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
        Av = wv("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"),
        Tv = wv("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"),
        Sv = wv("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"),
        Ev = wv("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"),
        kv = wv("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"),
        Nv = wv("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"),
        Cv = wv("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"),
        Pv = wv("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"),
        zv = wv("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab"),
        Dv = t => er(t[t.length - 1]),
        qv = new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(wv),
        Rv = Dv(qv),
        Fv = new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(wv),
        Ov = Dv(Fv),
        Uv = new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(wv),
        Iv = Dv(Uv),
        Bv = new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(wv),
        Yv = Dv(Bv),
        Lv = new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(wv),
        jv = Dv(Lv),
        Hv = new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(wv),
        Xv = Dv(Hv),
        Gv = new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(wv),
        Vv = Dv(Gv),
        $v = new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(wv),
        Wv = Dv($v),
        Zv = new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(wv),
        Kv = Dv(Zv),
        Qv = new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(wv),
        Jv = Dv(Qv),
        t_ = new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(wv),
        n_ = Dv(t_),
        e_ = new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(wv),
        r_ = Dv(e_),
        i_ = new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(wv),
        o_ = Dv(i_),
        a_ = new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(wv),
        u_ = Dv(a_),
        c_ = new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(wv),
        f_ = Dv(c_),
        s_ = new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(wv),
        l_ = Dv(s_),
        h_ = new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(wv),
        d_ = Dv(h_),
        p_ = new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(wv),
        g_ = Dv(p_),
        y_ = new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(wv),
        v_ = Dv(y_),
        __ = new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(wv),
        b_ = Dv(__),
        m_ = new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(wv),
        x_ = Dv(m_),
        w_ = new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(wv),
        M_ = Dv(w_),
        A_ = new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(wv),
        T_ = Dv(A_),
        S_ = new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(wv),
        E_ = Dv(S_),
        k_ = new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(wv),
        N_ = Dv(k_),
        C_ = new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(wv),
        P_ = Dv(C_),
        z_ = new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(wv),
        D_ = Dv(z_); var q_ = zr(He(300, .5, 0), He(-240, .5, 1)),
        R_ = zr(He(-100, .75, .35), He(80, 1.5, .8)),
        F_ = zr(He(260, .75, .35), He(80, 1.5, .8)),
        O_ = He(); var U_ = ue(),
        I_ = Math.PI / 3,
        B_ = 2 * Math.PI / 3;

    function Y_(t) { var n = t.length; return function(e) { return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))] } } var L_ = Y_(wv("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),
        j_ = Y_(wv("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),
        H_ = Y_(wv("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),
        X_ = Y_(wv("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));

    function G_(t) { return function() { return t } } var V_ = Math.abs,
        $_ = Math.atan2,
        W_ = Math.cos,
        Z_ = Math.max,
        K_ = Math.min,
        Q_ = Math.sin,
        J_ = Math.sqrt,
        tb = 1e-12,
        nb = Math.PI,
        eb = nb / 2,
        rb = 2 * nb;

    function ib(t) { return t > 1 ? 0 : t < -1 ? nb : Math.acos(t) }

    function ob(t) { return t >= 1 ? eb : t <= -1 ? -eb : Math.asin(t) }

    function ab(t) { return t.innerRadius }

    function ub(t) { return t.outerRadius }

    function cb(t) { return t.startAngle }

    function fb(t) { return t.endAngle }

    function sb(t) { return t && t.padAngle }

    function lb(t, n, e, r, i, o, a, u) { var c = e - t,
            f = r - n,
            s = a - i,
            l = u - o,
            h = l * c - s * f; if (!(h * h < tb)) return [t + (h = (s * (n - o) - l * (t - i)) / h) * c, n + h * f] }

    function hb(t, n, e, r, i, o, a) { var u = t - e,
            c = n - r,
            f = (a ? o : -o) / J_(u * u + c * c),
            s = f * c,
            l = -f * u,
            h = t + s,
            d = n + l,
            p = e + s,
            g = r + l,
            y = (h + p) / 2,
            v = (d + g) / 2,
            _ = p - h,
            b = g - d,
            m = _ * _ + b * b,
            x = i - o,
            w = h * g - p * d,
            M = (b < 0 ? -1 : 1) * J_(Z_(0, x * x * m - w * w)),
            A = (w * b - _ * M) / m,
            T = (-w * _ - b * M) / m,
            S = (w * b + _ * M) / m,
            E = (-w * _ + b * M) / m,
            k = A - y,
            N = T - v,
            C = S - y,
            P = E - v; return k * k + N * N > C * C + P * P && (A = S, T = E), { cx: A, cy: T, x01: -s, y01: -l, x11: A * (i / x - 1), y11: T * (i / x - 1) } } var db = Array.prototype.slice;

    function pb(t) { return "object" == typeof t && "length" in t ? t : Array.from(t) }

    function gb(t) { this._context = t }

    function yb(t) { return new gb(t) }

    function vb(t) { return t[0] }

    function _b(t) { return t[1] }

    function bb(t, n) { var e = G_(!0),
            r = null,
            i = yb,
            o = null;

        function a(a) { var u, c, f, s = (a = pb(a)).length,
                l = !1; for (null == r && (o = i(f = Jo())), u = 0; u <= s; ++u) !(u < s && e(c = a[u], u, a)) === l && ((l = !l) ? o.lineStart() : o.lineEnd()), l && o.point(+t(c, u, a), +n(c, u, a)); if (f) return o = null, f + "" || null } return t = "function" == typeof t ? t : void 0 === t ? vb : G_(t), n = "function" == typeof n ? n : void 0 === n ? _b : G_(n), a.x = function(n) { return arguments.length ? (t = "function" == typeof n ? n : G_(+n), a) : t }, a.y = function(t) { return arguments.length ? (n = "function" == typeof t ? t : G_(+t), a) : n }, a.defined = function(t) { return arguments.length ? (e = "function" == typeof t ? t : G_(!!t), a) : e }, a.curve = function(t) { return arguments.length ? (i = t, null != r && (o = i(r)), a) : i }, a.context = function(t) { return arguments.length ? (null == t ? r = o = null : o = i(r = t), a) : r }, a }

    function mb(t, n, e) { var r = null,
            i = G_(!0),
            o = null,
            a = yb,
            u = null;

        function c(c) { var f, s, l, h, d, p = (c = pb(c)).length,
                g = !1,
                y = new Array(p),
                v = new Array(p); for (null == o && (u = a(d = Jo())), f = 0; f <= p; ++f) { if (!(f < p && i(h = c[f], f, c)) === g)
                    if (g = !g) s = f, u.areaStart(), u.lineStart();
                    else { for (u.lineEnd(), u.lineStart(), l = f - 1; l >= s; --l) u.point(y[l], v[l]);
                        u.lineEnd(), u.areaEnd() } g && (y[f] = +t(h, f, c), v[f] = +n(h, f, c), u.point(r ? +r(h, f, c) : y[f], e ? +e(h, f, c) : v[f])) } if (d) return u = null, d + "" || null }

        function f() { return bb().defined(i).curve(a).context(o) } return t = "function" == typeof t ? t : void 0 === t ? vb : G_(+t), n = "function" == typeof n ? n : G_(void 0 === n ? 0 : +n), e = "function" == typeof e ? e : void 0 === e ? _b : G_(+e), c.x = function(n) { return arguments.length ? (t = "function" == typeof n ? n : G_(+n), r = null, c) : t }, c.x0 = function(n) { return arguments.length ? (t = "function" == typeof n ? n : G_(+n), c) : t }, c.x1 = function(t) { return arguments.length ? (r = null == t ? null : "function" == typeof t ? t : G_(+t), c) : r }, c.y = function(t) { return arguments.length ? (n = "function" == typeof t ? t : G_(+t), e = null, c) : n }, c.y0 = function(t) { return arguments.length ? (n = "function" == typeof t ? t : G_(+t), c) : n }, c.y1 = function(t) { return arguments.length ? (e = null == t ? null : "function" == typeof t ? t : G_(+t), c) : e }, c.lineX0 = c.lineY0 = function() { return f().x(t).y(n) }, c.lineY1 = function() { return f().x(t).y(e) }, c.lineX1 = function() { return f().x(r).y(n) }, c.defined = function(t) { return arguments.length ? (i = "function" == typeof t ? t : G_(!!t), c) : i }, c.curve = function(t) { return arguments.length ? (a = t, null != o && (u = a(o)), c) : a }, c.context = function(t) { return arguments.length ? (null == t ? o = u = null : u = a(o = t), c) : o }, c }

    function xb(t, n) { return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN }

    function wb(t) { return t } gb.prototype = { areaStart: function() { this._line = 0 }, areaEnd: function() { this._line = NaN }, lineStart: function() { this._point = 0 }, lineEnd: function() {
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line }, point: function(t, n) { switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n); break;
                case 1:
                    this._point = 2;
                default:
                    this._context.lineTo(t, n) } } }; var Mb = Tb(yb);

    function Ab(t) { this._curve = t }

    function Tb(t) {
        function n(n) { return new Ab(t(n)) } return n._curve = t, n }

    function Sb(t) { var n = t.curve; return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t.curve = function(t) { return arguments.length ? n(Tb(t)) : n()._curve }, t }

    function Eb() { return Sb(bb().curve(Mb)) }

    function kb() { var t = mb().curve(Mb),
            n = t.curve,
            e = t.lineX0,
            r = t.lineX1,
            i = t.lineY0,
            o = t.lineY1; return t.angle = t.x, delete t.x, t.startAngle = t.x0, delete t.x0, t.endAngle = t.x1, delete t.x1, t.radius = t.y, delete t.y, t.innerRadius = t.y0, delete t.y0, t.outerRadius = t.y1, delete t.y1, t.lineStartAngle = function() { return Sb(e()) }, delete t.lineX0, t.lineEndAngle = function() { return Sb(r()) }, delete t.lineX1, t.lineInnerRadius = function() { return Sb(i()) }, delete t.lineY0, t.lineOuterRadius = function() { return Sb(o()) }, delete t.lineY1, t.curve = function(t) { return arguments.length ? n(Tb(t)) : n()._curve }, t }

    function Nb(t, n) { return [(n = +n) * Math.cos(t -= Math.PI / 2), n * Math.sin(t)] }

    function Cb(t) { return t.source }

    function Pb(t) { return t.target }

    function zb(t) { var n = Cb,
            e = Pb,
            r = vb,
            i = _b,
            o = null;

        function a() { var a, u = db.call(arguments),
                c = n.apply(this, u),
                f = e.apply(this, u); if (o || (o = a = Jo()), t(o, +r.apply(this, (u[0] = c, u)), +i.apply(this, u), +r.apply(this, (u[0] = f, u)), +i.apply(this, u)), a) return o = null, a + "" || null } return a.source = function(t) { return arguments.length ? (n = t, a) : n }, a.target = function(t) { return arguments.length ? (e = t, a) : e }, a.x = function(t) { return arguments.length ? (r = "function" == typeof t ? t : G_(+t), a) : r }, a.y = function(t) { return arguments.length ? (i = "function" == typeof t ? t : G_(+t), a) : i }, a.context = function(t) { return arguments.length ? (o = null == t ? null : t, a) : o }, a }

    function Db(t, n, e, r, i) { t.moveTo(n, e), t.bezierCurveTo(n = (n + r) / 2, e, n, i, r, i) }

    function qb(t, n, e, r, i) { t.moveTo(n, e), t.bezierCurveTo(n, e = (e + i) / 2, r, e, r, i) }

    function Rb(t, n, e, r, i) { var o = Nb(n, e),
            a = Nb(n, e = (e + i) / 2),
            u = Nb(r, e),
            c = Nb(r, i);
        t.moveTo(o[0], o[1]), t.bezierCurveTo(a[0], a[1], u[0], u[1], c[0], c[1]) } Ab.prototype = { areaStart: function() { this._curve.areaStart() }, areaEnd: function() { this._curve.areaEnd() }, lineStart: function() { this._curve.lineStart() }, lineEnd: function() { this._curve.lineEnd() }, point: function(t, n) { this._curve.point(n * Math.sin(t), n * -Math.cos(t)) } }; var Fb = { draw: function(t, n) { var e = Math.sqrt(n / nb);
                t.moveTo(e, 0), t.arc(0, 0, e, 0, rb) } },
        Ob = { draw: function(t, n) { var e = Math.sqrt(n / 5) / 2;
                t.moveTo(-3 * e, -e), t.lineTo(-e, -e), t.lineTo(-e, -3 * e), t.lineTo(e, -3 * e), t.lineTo(e, -e), t.lineTo(3 * e, -e), t.lineTo(3 * e, e), t.lineTo(e, e), t.lineTo(e, 3 * e), t.lineTo(-e, 3 * e), t.lineTo(-e, e), t.lineTo(-3 * e, e), t.closePath() } },
        Ub = Math.sqrt(1 / 3),
        Ib = 2 * Ub,
        Bb = { draw: function(t, n) { var e = Math.sqrt(n / Ib),
                    r = e * Ub;
                t.moveTo(0, -e), t.lineTo(r, 0), t.lineTo(0, e), t.lineTo(-r, 0), t.closePath() } },
        Yb = Math.sin(nb / 10) / Math.sin(7 * nb / 10),
        Lb = Math.sin(rb / 10) * Yb,
        jb = -Math.cos(rb / 10) * Yb,
        Hb = { draw: function(t, n) { var e = Math.sqrt(.8908130915292852 * n),
                    r = Lb * e,
                    i = jb * e;
                t.moveTo(0, -e), t.lineTo(r, i); for (var o = 1; o < 5; ++o) { var a = rb * o / 5,
                        u = Math.cos(a),
                        c = Math.sin(a);
                    t.lineTo(c * e, -u * e), t.lineTo(u * r - c * i, c * r + u * i) } t.closePath() } },
        Xb = { draw: function(t, n) { var e = Math.sqrt(n),
                    r = -e / 2;
                t.rect(r, r, e, e) } },
        Gb = Math.sqrt(3),
        Vb = { draw: function(t, n) { var e = -Math.sqrt(n / (3 * Gb));
                t.moveTo(0, 2 * e), t.lineTo(-Gb * e, -e), t.lineTo(Gb * e, -e), t.closePath() } },
        $b = -.5,
        Wb = Math.sqrt(3) / 2,
        Zb = 1 / Math.sqrt(12),
        Kb = 3 * (Zb / 2 + 1),
        Qb = { draw: function(t, n) { var e = Math.sqrt(n / Kb),
                    r = e / 2,
                    i = e * Zb,
                    o = r,
                    a = e * Zb + e,
                    u = -o,
                    c = a;
                t.moveTo(r, i), t.lineTo(o, a), t.lineTo(u, c), t.lineTo($b * r - Wb * i, Wb * r + $b * i), t.lineTo($b * o - Wb * a, Wb * o + $b * a), t.lineTo($b * u - Wb * c, Wb * u + $b * c), t.lineTo($b * r + Wb * i, $b * i - Wb * r), t.lineTo($b * o + Wb * a, $b * a - Wb * o), t.lineTo($b * u + Wb * c, $b * c - Wb * u), t.closePath() } },
        Jb = [Fb, Ob, Bb, Xb, Hb, Vb, Qb];

    function tm() {}

    function nm(t, n, e) { t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + n) / 6, (t._y0 + 4 * t._y1 + e) / 6) }

    function em(t) { this._context = t }

    function rm(t) { this._context = t }

    function im(t) { this._context = t }

    function om(t, n) { this._basis = new em(t), this._beta = n } em.prototype = { areaStart: function() { this._line = 0 }, areaEnd: function() { this._line = NaN }, lineStart: function() { this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0 }, lineEnd: function() { switch (this._point) {
                case 3:
                    nm(this, this._x1, this._y1);
                case 2:
                    this._context.lineTo(this._x1, this._y1) }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line }, point: function(t, n) { switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n); break;
                case 1:
                    this._point = 2; break;
                case 2:
                    this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
                default:
                    nm(this, t, n) } this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n } }, rm.prototype = { areaStart: tm, areaEnd: tm, lineStart: function() { this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0 }, lineEnd: function() { switch (this._point) {
                case 1:
                    this._context.moveTo(this._x2, this._y2), this._context.closePath(); break;
                case 2:
                    this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath(); break;
                case 3:
                    this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4) } }, point: function(t, n) { switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1, this._x2 = t, this._y2 = n; break;
                case 1:
                    this._point = 2, this._x3 = t, this._y3 = n; break;
                case 2:
                    this._point = 3, this._x4 = t, this._y4 = n, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + n) / 6); break;
                default:
                    nm(this, t, n) } this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n } }, im.prototype = { areaStart: function() { this._line = 0 }, areaEnd: function() { this._line = NaN }, lineStart: function() { this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0 }, lineEnd: function() {
            (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line }, point: function(t, n) { switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1; break;
                case 1:
                    this._point = 2; break;
                case 2:
                    this._point = 3; var e = (this._x0 + 4 * this._x1 + t) / 6,
                        r = (this._y0 + 4 * this._y1 + n) / 6;
                    this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r); break;
                case 3:
                    this._point = 4;
                default:
                    nm(this, t, n) } this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n } }, om.prototype = { lineStart: function() { this._x = [], this._y = [], this._basis.lineStart() }, lineEnd: function() { var t = this._x,
                n = this._y,
                e = t.length - 1; if (e > 0)
                for (var r, i = t[0], o = n[0], a = t[e] - i, u = n[e] - o, c = -1; ++c <= e;) r = c / e, this._basis.point(this._beta * t[c] + (1 - this._beta) * (i + r * a), this._beta * n[c] + (1 - this._beta) * (o + r * u));
            this._x = this._y = null, this._basis.lineEnd() }, point: function(t, n) { this._x.push(+t), this._y.push(+n) } }; var am = function t(n) {
        function e(t) { return 1 === n ? new em(t) : new om(t, n) } return e.beta = function(n) { return t(+n) }, e }(.85);

    function um(t, n, e) { t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - n), t._y2 + t._k * (t._y1 - e), t._x2, t._y2) }

    function cm(t, n) { this._context = t, this._k = (1 - n) / 6 } cm.prototype = { areaStart: function() { this._line = 0 }, areaEnd: function() { this._line = NaN }, lineStart: function() { this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0 }, lineEnd: function() { switch (this._point) {
                case 2:
                    this._context.lineTo(this._x2, this._y2); break;
                case 3:
                    um(this, this._x1, this._y1) }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line }, point: function(t, n) { switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n); break;
                case 1:
                    this._point = 2, this._x1 = t, this._y1 = n; break;
                case 2:
                    this._point = 3;
                default:
                    um(this, t, n) } this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n } }; var fm = function t(n) {
        function e(t) { return new cm(t, n) } return e.tension = function(n) { return t(+n) }, e }(0);

    function sm(t, n) { this._context = t, this._k = (1 - n) / 6 } sm.prototype = { areaStart: tm, areaEnd: tm, lineStart: function() { this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0 }, lineEnd: function() { switch (this._point) {
                case 1:
                    this._context.moveTo(this._x3, this._y3), this._context.closePath(); break;
                case 2:
                    this._context.lineTo(this._x3, this._y3), this._context.closePath(); break;
                case 3:
                    this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5) } }, point: function(t, n) { switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1, this._x3 = t, this._y3 = n; break;
                case 1:
                    this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n); break;
                case 2:
                    this._point = 3, this._x5 = t, this._y5 = n; break;
                default:
                    um(this, t, n) } this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n } }; var lm = function t(n) {
        function e(t) { return new sm(t, n) } return e.tension = function(n) { return t(+n) }, e }(0);

    function hm(t, n) { this._context = t, this._k = (1 - n) / 6 } hm.prototype = { areaStart: function() { this._line = 0 }, areaEnd: function() { this._line = NaN }, lineStart: function() { this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0 }, lineEnd: function() {
            (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line }, point: function(t, n) { switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1; break;
                case 1:
                    this._point = 2; break;
                case 2:
                    this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
                case 3:
                    this._point = 4;
                default:
                    um(this, t, n) } this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n } }; var dm = function t(n) {
        function e(t) { return new hm(t, n) } return e.tension = function(n) { return t(+n) }, e }(0);

    function pm(t, n, e) { var r = t._x1,
            i = t._y1,
            o = t._x2,
            a = t._y2; if (t._l01_a > tb) { var u = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
                c = 3 * t._l01_a * (t._l01_a + t._l12_a);
            r = (r * u - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c, i = (i * u - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c } if (t._l23_a > tb) { var f = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
                s = 3 * t._l23_a * (t._l23_a + t._l12_a);
            o = (o * f + t._x1 * t._l23_2a - n * t._l12_2a) / s, a = (a * f + t._y1 * t._l23_2a - e * t._l12_2a) / s } t._context.bezierCurveTo(r, i, o, a, t._x2, t._y2) }

    function gm(t, n) { this._context = t, this._alpha = n } gm.prototype = { areaStart: function() { this._line = 0 }, areaEnd: function() { this._line = NaN }, lineStart: function() { this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0 }, lineEnd: function() { switch (this._point) {
                case 2:
                    this._context.lineTo(this._x2, this._y2); break;
                case 3:
                    this.point(this._x2, this._y2) }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line }, point: function(t, n) { if (t = +t, n = +n, this._point) { var e = this._x2 - t,
                    r = this._y2 - n;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha)) } switch (this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n); break;
                case 1:
                    this._point = 2; break;
                case 2:
                    this._point = 3;
                default:
                    pm(this, t, n) } this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n } }; var ym = function t(n) {
        function e(t) { return n ? new gm(t, n) : new cm(t, 0) } return e.alpha = function(n) { return t(+n) }, e }(.5);

    function vm(t, n) { this._context = t, this._alpha = n } vm.prototype = { areaStart: tm, areaEnd: tm, lineStart: function() { this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0 }, lineEnd: function() { switch (this._point) {
                case 1:
                    this._context.moveTo(this._x3, this._y3), this._context.closePath(); break;
                case 2:
                    this._context.lineTo(this._x3, this._y3), this._context.closePath(); break;
                case 3:
                    this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5) } }, point: function(t, n) { if (t = +t, n = +n, this._point) { var e = this._x2 - t,
                    r = this._y2 - n;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha)) } switch (this._point) {
                case 0:
                    this._point = 1, this._x3 = t, this._y3 = n; break;
                case 1:
                    this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n); break;
                case 2:
                    this._point = 3, this._x5 = t, this._y5 = n; break;
                default:
                    pm(this, t, n) } this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n } }; var _m = function t(n) {
        function e(t) { return n ? new vm(t, n) : new sm(t, 0) } return e.alpha = function(n) { return t(+n) }, e }(.5);

    function bm(t, n) { this._context = t, this._alpha = n } bm.prototype = { areaStart: function() { this._line = 0 }, areaEnd: function() { this._line = NaN }, lineStart: function() { this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0 }, lineEnd: function() {
            (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line }, point: function(t, n) { if (t = +t, n = +n, this._point) { var e = this._x2 - t,
                    r = this._y2 - n;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha)) } switch (this._point) {
                case 0:
                    this._point = 1; break;
                case 1:
                    this._point = 2; break;
                case 2:
                    this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
                case 3:
                    this._point = 4;
                default:
                    pm(this, t, n) } this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n } }; var mm = function t(n) {
        function e(t) { return n ? new bm(t, n) : new hm(t, 0) } return e.alpha = function(n) { return t(+n) }, e }(.5);

    function xm(t) { this._context = t }

    function wm(t) { return t < 0 ? -1 : 1 }

    function Mm(t, n, e) { var r = t._x1 - t._x0,
            i = n - t._x1,
            o = (t._y1 - t._y0) / (r || i < 0 && -0),
            a = (e - t._y1) / (i || r < 0 && -0),
            u = (o * i + a * r) / (r + i); return (wm(o) + wm(a)) * Math.min(Math.abs(o), Math.abs(a), .5 * Math.abs(u)) || 0 }

    function Am(t, n) { var e = t._x1 - t._x0; return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n }

    function Tm(t, n, e) { var r = t._x0,
            i = t._y0,
            o = t._x1,
            a = t._y1,
            u = (o - r) / 3;
        t._context.bezierCurveTo(r + u, i + u * n, o - u, a - u * e, o, a) }

    function Sm(t) { this._context = t }

    function Em(t) { this._context = new km(t) }

    function km(t) { this._context = t }

    function Nm(t) { this._context = t }

    function Cm(t) { var n, e, r = t.length - 1,
            i = new Array(r),
            o = new Array(r),
            a = new Array(r); for (i[0] = 0, o[0] = 2, a[0] = t[0] + 2 * t[1], n = 1; n < r - 1; ++n) i[n] = 1, o[n] = 4, a[n] = 4 * t[n] + 2 * t[n + 1]; for (i[r - 1] = 2, o[r - 1] = 7, a[r - 1] = 8 * t[r - 1] + t[r], n = 1; n < r; ++n) e = i[n] / o[n - 1], o[n] -= e, a[n] -= e * a[n - 1]; for (i[r - 1] = a[r - 1] / o[r - 1], n = r - 2; n >= 0; --n) i[n] = (a[n] - i[n + 1]) / o[n]; for (o[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; n < r - 1; ++n) o[n] = 2 * t[n + 1] - i[n + 1]; return [i, o] }

    function Pm(t, n) { this._context = t, this._t = n }

    function zm(t, n) { if ((i = t.length) > 1)
            for (var e, r, i, o = 1, a = t[n[0]], u = a.length; o < i; ++o)
                for (r = a, a = t[n[o]], e = 0; e < u; ++e) a[e][1] += a[e][0] = isNaN(r[e][1]) ? r[e][0] : r[e][1] }

    function Dm(t) { for (var n = t.length, e = new Array(n); --n >= 0;) e[n] = n; return e }

    function qm(t, n) { return t[n] }

    function Rm(t) { const n = []; return n.key = t, n }

    function Fm(t) { var n = t.map(Om); return Dm(t).sort((function(t, e) { return n[t] - n[e] })) }

    function Om(t) { for (var n, e = -1, r = 0, i = t.length, o = -1 / 0; ++e < i;)(n = +t[e][1]) > o && (o = n, r = e); return r }

    function Um(t) { var n = t.map(Im); return Dm(t).sort((function(t, e) { return n[t] - n[e] })) }

    function Im(t) { for (var n, e = 0, r = -1, i = t.length; ++r < i;)(n = +t[r][1]) && (e += n); return e } xm.prototype = { areaStart: tm, areaEnd: tm, lineStart: function() { this._point = 0 }, lineEnd: function() { this._point && this._context.closePath() }, point: function(t, n) { t = +t, n = +n, this._point ? this._context.lineTo(t, n) : (this._point = 1, this._context.moveTo(t, n)) } }, Sm.prototype = { areaStart: function() { this._line = 0 }, areaEnd: function() { this._line = NaN }, lineStart: function() { this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0 }, lineEnd: function() { switch (this._point) {
                case 2:
                    this._context.lineTo(this._x1, this._y1); break;
                case 3:
                    Tm(this, this._t0, Am(this, this._t0)) }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line }, point: function(t, n) { var e = NaN; if (n = +n, (t = +t) !== this._x1 || n !== this._y1) { switch (this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n); break;
                    case 1:
                        this._point = 2; break;
                    case 2:
                        this._point = 3, Tm(this, Am(this, e = Mm(this, t, n)), e); break;
                    default:
                        Tm(this, this._t0, e = Mm(this, t, n)) } this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n, this._t0 = e } } }, (Em.prototype = Object.create(Sm.prototype)).point = function(t, n) { Sm.prototype.point.call(this, n, t) }, km.prototype = { moveTo: function(t, n) { this._context.moveTo(n, t) }, closePath: function() { this._context.closePath() }, lineTo: function(t, n) { this._context.lineTo(n, t) }, bezierCurveTo: function(t, n, e, r, i, o) { this._context.bezierCurveTo(n, t, r, e, o, i) } }, Nm.prototype = { areaStart: function() { this._line = 0 }, areaEnd: function() { this._line = NaN }, lineStart: function() { this._x = [], this._y = [] }, lineEnd: function() { var t = this._x,
                n = this._y,
                e = t.length; if (e)
                if (this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]), 2 === e) this._context.lineTo(t[1], n[1]);
                else
                    for (var r = Cm(t), i = Cm(n), o = 0, a = 1; a < e; ++o, ++a) this._context.bezierCurveTo(r[0][o], i[0][o], r[1][o], i[1][o], t[a], n[a]);
            (this._line || 0 !== this._line && 1 === e) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null }, point: function(t, n) { this._x.push(+t), this._y.push(+n) } }, Pm.prototype = { areaStart: function() { this._line = 0 }, areaEnd: function() { this._line = NaN }, lineStart: function() { this._x = this._y = NaN, this._point = 0 }, lineEnd: function() { 0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line) }, point: function(t, n) { switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n); break;
                case 1:
                    this._point = 2;
                default:
                    if (this._t <= 0) this._context.lineTo(this._x, n), this._context.lineTo(t, n);
                    else { var e = this._x * (1 - this._t) + t * this._t;
                        this._context.lineTo(e, this._y), this._context.lineTo(e, n) } } this._x = t, this._y = n } }; var Bm = t => () => t;

    function Ym(t, { sourceEvent: n, target: e, transform: r, dispatch: i }) { Object.defineProperties(this, { type: { value: t, enumerable: !0, configurable: !0 }, sourceEvent: { value: n, enumerable: !0, configurable: !0 }, target: { value: e, enumerable: !0, configurable: !0 }, transform: { value: r, enumerable: !0, configurable: !0 }, _: { value: i } }) }

    function Lm(t, n, e) { this.k = t, this.x = n, this.y = e } Lm.prototype = { constructor: Lm, scale: function(t) { return 1 === t ? this : new Lm(this.k * t, this.x, this.y) }, translate: function(t, n) { return 0 === t & 0 === n ? this : new Lm(this.k, this.x + this.k * t, this.y + this.k * n) }, apply: function(t) { return [t[0] * this.k + this.x, t[1] * this.k + this.y] }, applyX: function(t) { return t * this.k + this.x }, applyY: function(t) { return t * this.k + this.y }, invert: function(t) { return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k] }, invertX: function(t) { return (t - this.x) / this.k }, invertY: function(t) { return (t - this.y) / this.k }, rescaleX: function(t) { return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t)) }, rescaleY: function(t) { return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t)) }, toString: function() { return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")" } }; var jm = new Lm(1, 0, 0);

    function Hm(t) { for (; !t.__zoom;)
            if (!(t = t.parentNode)) return jm; return t.__zoom }

    function Xm(t) { t.stopImmediatePropagation() }

    function Gm(t) { t.preventDefault(), t.stopImmediatePropagation() }

    function Vm(t) { return !(t.ctrlKey && "wheel" !== t.type || t.button) }

    function $m() { var t = this; return t instanceof SVGElement ? (t = t.ownerSVGElement || t).hasAttribute("viewBox") ? [
            [(t = t.viewBox.baseVal).x, t.y],
            [t.x + t.width, t.y + t.height]
        ] : [
            [0, 0],
            [t.width.baseVal.value, t.height.baseVal.value]
        ] : [
            [0, 0],
            [t.clientWidth, t.clientHeight]
        ] }

    function Wm() { return this.__zoom || jm }

    function Zm(t) { return -t.deltaY * (1 === t.deltaMode ? .05 : t.deltaMode ? 1 : .002) * (t.ctrlKey ? 10 : 1) }

    function Km() { return navigator.maxTouchPoints || "ontouchstart" in this }

    function Qm(t, n, e) { var r = t.invertX(n[0][0]) - e[0][0],
            i = t.invertX(n[1][0]) - e[1][0],
            o = t.invertY(n[0][1]) - e[0][1],
            a = t.invertY(n[1][1]) - e[1][1]; return t.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), a > o ? (o + a) / 2 : Math.min(0, o) || Math.max(0, a)) } Hm.prototype = Lm.prototype, t.Adder = g, t.Delaunay = Xa, t.FormatSpecifier = Ku, t.Voronoi = Ia, t.active = function(t, n) { var e, r, i = t.__transition; if (i)
            for (r in n = null == n ? null : n + "", i)
                if ((e = i[r]).state > 1 && e.name === n) return new Di([
                    [t]
                ], uo, n, +r); return null }, t.arc = function() { var t = ab,
            n = ub,
            e = G_(0),
            r = null,
            i = cb,
            o = fb,
            a = sb,
            u = null;

        function c() { var c, f, s = +t.apply(this, arguments),
                l = +n.apply(this, arguments),
                h = i.apply(this, arguments) - eb,
                d = o.apply(this, arguments) - eb,
                p = V_(d - h),
                g = d > h; if (u || (u = c = Jo()), l < s && (f = l, l = s, s = f), l > tb)
                if (p > rb - tb) u.moveTo(l * W_(h), l * Q_(h)), u.arc(0, 0, l, h, d, !g), s > tb && (u.moveTo(s * W_(d), s * Q_(d)), u.arc(0, 0, s, d, h, g));
                else { var y, v, _ = h,
                        b = d,
                        m = h,
                        x = d,
                        w = p,
                        M = p,
                        A = a.apply(this, arguments) / 2,
                        T = A > tb && (r ? +r.apply(this, arguments) : J_(s * s + l * l)),
                        S = K_(V_(l - s) / 2, +e.apply(this, arguments)),
                        E = S,
                        k = S; if (T > tb) { var N = ob(T / s * Q_(A)),
                            C = ob(T / l * Q_(A));
                        (w -= 2 * N) > tb ? (m += N *= g ? 1 : -1, x -= N) : (w = 0, m = x = (h + d) / 2), (M -= 2 * C) > tb ? (_ += C *= g ? 1 : -1, b -= C) : (M = 0, _ = b = (h + d) / 2) } var P = l * W_(_),
                        z = l * Q_(_),
                        D = s * W_(x),
                        q = s * Q_(x); if (S > tb) { var R, F = l * W_(b),
                            O = l * Q_(b),
                            U = s * W_(m),
                            I = s * Q_(m); if (p < nb && (R = lb(P, z, U, I, F, O, D, q))) { var B = P - R[0],
                                Y = z - R[1],
                                L = F - R[0],
                                j = O - R[1],
                                H = 1 / Q_(ib((B * L + Y * j) / (J_(B * B + Y * Y) * J_(L * L + j * j))) / 2),
                                X = J_(R[0] * R[0] + R[1] * R[1]);
                            E = K_(S, (s - X) / (H - 1)), k = K_(S, (l - X) / (H + 1)) } } M > tb ? k > tb ? (y = hb(U, I, P, z, l, k, g), v = hb(F, O, D, q, l, k, g), u.moveTo(y.cx + y.x01, y.cy + y.y01), k < S ? u.arc(y.cx, y.cy, k, $_(y.y01, y.x01), $_(v.y01, v.x01), !g) : (u.arc(y.cx, y.cy, k, $_(y.y01, y.x01), $_(y.y11, y.x11), !g), u.arc(0, 0, l, $_(y.cy + y.y11, y.cx + y.x11), $_(v.cy + v.y11, v.cx + v.x11), !g), u.arc(v.cx, v.cy, k, $_(v.y11, v.x11), $_(v.y01, v.x01), !g))) : (u.moveTo(P, z), u.arc(0, 0, l, _, b, !g)) : u.moveTo(P, z), s > tb && w > tb ? E > tb ? (y = hb(D, q, F, O, s, -E, g), v = hb(P, z, U, I, s, -E, g), u.lineTo(y.cx + y.x01, y.cy + y.y01), E < S ? u.arc(y.cx, y.cy, E, $_(y.y01, y.x01), $_(v.y01, v.x01), !g) : (u.arc(y.cx, y.cy, E, $_(y.y01, y.x01), $_(y.y11, y.x11), !g), u.arc(0, 0, s, $_(y.cy + y.y11, y.cx + y.x11), $_(v.cy + v.y11, v.cx + v.x11), g), u.arc(v.cx, v.cy, E, $_(v.y11, v.x11), $_(v.y01, v.x01), !g))) : u.arc(0, 0, s, x, m, g) : u.lineTo(D, q) } else u.moveTo(0, 0); if (u.closePath(), c) return u = null, c + "" || null } return c.centroid = function() { var e = (+t.apply(this, arguments) + +n.apply(this, arguments)) / 2,
                r = (+i.apply(this, arguments) + +o.apply(this, arguments)) / 2 - nb / 2; return [W_(r) * e, Q_(r) * e] }, c.innerRadius = function(n) { return arguments.length ? (t = "function" == typeof n ? n : G_(+n), c) : t }, c.outerRadius = function(t) { return arguments.length ? (n = "function" == typeof t ? t : G_(+t), c) : n }, c.cornerRadius = function(t) { return arguments.length ? (e = "function" == typeof t ? t : G_(+t), c) : e }, c.padRadius = function(t) { return arguments.length ? (r = null == t ? null : "function" == typeof t ? t : G_(+t), c) : r }, c.startAngle = function(t) { return arguments.length ? (i = "function" == typeof t ? t : G_(+t), c) : i }, c.endAngle = function(t) { return arguments.length ? (o = "function" == typeof t ? t : G_(+t), c) : o }, c.padAngle = function(t) { return arguments.length ? (a = "function" == typeof t ? t : G_(+t), c) : a }, c.context = function(t) { return arguments.length ? (u = null == t ? null : t, c) : u }, c }, t.area = mb, t.areaRadial = kb, t.ascending = n, t.autoType = function(t) { for (var n in t) { var e, r, i = t[n].trim(); if (i)
                if ("true" === i) i = !0;
                else if ("false" === i) i = !1;
            else if ("NaN" === i) i = NaN;
            else if (isNaN(e = +i)) { if (!(r = i.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/))) continue;
                gu && r[4] && !r[7] && (i = i.replace(/-/g, "/").replace(/T/, " ")), i = new Date(i) } else i = e;
            else i = null;
            t[n] = i } return t }, t.axisBottom = function(t) { return et(3, t) }, t.axisLeft = function(t) { return et(4, t) }, t.axisRight = function(t) { return et(2, t) }, t.axisTop = function(t) { return et(1, t) }, t.bin = N, t.bisect = o, t.bisectCenter = u, t.bisectLeft = a, t.bisectRight = o, t.bisector = e, t.blob = function(t, n) { return fetch(t, n).then(yu) }, t.brush = function() { return Fo(Ao) }, t.brushSelection = function(t) { var n = t.__brush; return n ? n.dim.output(n.selection) : null }, t.brushX = function() { return Fo(wo) }, t.brushY = function() { return Fo(Mo) }, t.buffer = function(t, n) { return fetch(t, n).then(vu) }, t.chord = function() { return Vo(!1, !1) }, t.chordDirected = function() { return Vo(!0, !1) }, t.chordTranspose = function() { return Vo(!1, !0) }, t.cluster = function() { var t = Ph,
            n = 1,
            e = 1,
            r = !1;

        function i(i) { var o, a = 0;
            i.eachAfter((function(n) { var e = n.children;
                e ? (n.x = function(t) { return t.reduce(zh, 0) / t.length }(e), n.y = function(t) { return 1 + t.reduce(Dh, 0) }(e)) : (n.x = o ? a += t(n, o) : 0, n.y = 0, o = n) })); var u = function(t) { for (var n; n = t.children;) t = n[0]; return t }(i),
                c = function(t) { for (var n; n = t.children;) t = n[n.length - 1]; return t }(i),
                f = u.x - t(u, c) / 2,
                s = c.x + t(c, u) / 2; return i.eachAfter(r ? function(t) { t.x = (t.x - i.x) * n, t.y = (i.y - t.y) * e } : function(t) { t.x = (t.x - f) / (s - f) * n, t.y = (1 - (i.y ? t.y / i.y : 1)) * e }) } return i.separation = function(n) { return arguments.length ? (t = n, i) : t }, i.size = function(t) { return arguments.length ? (r = !1, n = +t[0], e = +t[1], i) : r ? null : [n, e] }, i.nodeSize = function(t) { return arguments.length ? (r = !0, n = +t[0], e = +t[1], i) : r ? [n, e] : null }, i }, t.color = re, t.contourDensity = function() { var t = xa,
            n = wa,
            e = Ma,
            r = 960,
            i = 500,
            o = 20,
            a = 2,
            u = 3 * o,
            c = r + 2 * u >> a,
            f = i + 2 * u >> a,
            s = ha(20);

        function l(r) { var i = new Float32Array(c * f),
                l = new Float32Array(c * f);
            r.forEach((function(r, o, s) { var l = +t(r, o, s) + u >> a,
                    h = +n(r, o, s) + u >> a,
                    d = +e(r, o, s);
                l >= 0 && l < c && h >= 0 && h < f && (i[l + h * c] += d) })), ba({ width: c, height: f, data: i }, { width: c, height: f, data: l }, o >> a), ma({ width: c, height: f, data: l }, { width: c, height: f, data: i }, o >> a), ba({ width: c, height: f, data: i }, { width: c, height: f, data: l }, o >> a), ma({ width: c, height: f, data: l }, { width: c, height: f, data: i }, o >> a), ba({ width: c, height: f, data: i }, { width: c, height: f, data: l }, o >> a), ma({ width: c, height: f, data: l }, { width: c, height: f, data: i }, o >> a); var d = s(i); if (!Array.isArray(d)) { var p = C(i);
                d = S(0, p, d), (d = B(0, Math.floor(p / d) * d, d)).shift() } return _a().thresholds(d).size([c, f])(i).map(h) }

        function h(t) { return t.value *= Math.pow(2, -2 * a), t.coordinates.forEach(d), t }

        function d(t) { t.forEach(p) }

        function p(t) { t.forEach(g) }

        function g(t) { t[0] = t[0] * Math.pow(2, a) - u, t[1] = t[1] * Math.pow(2, a) - u }

        function y() { return c = r + 2 * (u = 3 * o) >> a, f = i + 2 * u >> a, l } return l.x = function(n) { return arguments.length ? (t = "function" == typeof n ? n : ha(+n), l) : t }, l.y = function(t) { return arguments.length ? (n = "function" == typeof t ? t : ha(+t), l) : n }, l.weight = function(t) { return arguments.length ? (e = "function" == typeof t ? t : ha(+t), l) : e }, l.size = function(t) { if (!arguments.length) return [r, i]; var n = +t[0],
                e = +t[1]; if (!(n >= 0 && e >= 0)) throw new Error("invalid size"); return r = n, i = e, y() }, l.cellSize = function(t) { if (!arguments.length) return 1 << a; if (!((t = +t) >= 1)) throw new Error("invalid cell size"); return a = Math.floor(Math.log(t) / Math.LN2), y() }, l.thresholds = function(t) { return arguments.length ? (s = "function" == typeof t ? t : Array.isArray(t) ? ha(sa.call(t)) : ha(t), l) : s }, l.bandwidth = function(t) { if (!arguments.length) return Math.sqrt(o * (o + 1)); if (!((t = +t) >= 0)) throw new Error("invalid bandwidth"); return o = Math.round((Math.sqrt(4 * t * t + 1) - 1) / 2), y() }, l }, t.contours = _a, t.count = c, t.create = function(t) { return Mn(pt(t).call(document.documentElement)) }, t.creator = pt, t.cross = function(...t) { const n = "function" == typeof t[t.length - 1] && function(t) { return n => t(...n) }(t.pop()),
            e = (t = t.map(l)).map(f),
            r = t.length - 1,
            i = new Array(r + 1).fill(0),
            o = []; if (r < 0 || e.some(s)) return o; for (;;) { o.push(i.map((n, e) => t[e][n])); let a = r; for (; ++i[a] === e[a];) { if (0 === a) return n ? o.map(n) : o;
                i[a--] = 0 } } }, t.csv = xu, t.csvFormat = eu, t.csvFormatBody = ru, t.csvFormatRow = ou, t.csvFormatRows = iu, t.csvFormatValue = au, t.csvParse = tu, t.csvParseRows = nu, t.cubehelix = He, t.cumsum = function(t, n) { var e = 0,
            r = 0; return Float64Array.from(t, void 0 === n ? t => e += +t || 0 : i => e += +n(i, r++, t) || 0) }, t.curveBasis = function(t) { return new em(t) }, t.curveBasisClosed = function(t) { return new rm(t) }, t.curveBasisOpen = function(t) { return new im(t) }, t.curveBundle = am, t.curveCardinal = fm, t.curveCardinalClosed = lm, t.curveCardinalOpen = dm, t.curveCatmullRom = ym, t.curveCatmullRomClosed = _m, t.curveCatmullRomOpen = mm, t.curveLinear = yb, t.curveLinearClosed = function(t) { return new xm(t) }, t.curveMonotoneX = function(t) { return new Sm(t) }, t.curveMonotoneY = function(t) { return new Em(t) }, t.curveNatural = function(t) { return new Nm(t) }, t.curveStep = function(t) { return new Pm(t, .5) }, t.curveStepAfter = function(t) { return new Pm(t, 1) }, t.curveStepBefore = function(t) { return new Pm(t, 0) }, t.descending = function(t, n) { return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN }, t.deviation = d, t.difference = function(t, ...n) { t = new Set(t); for (const e of n)
            for (const n of e) t.delete(n); return t }, t.disjoint = function(t, n) { const e = n[Symbol.iterator](),
            r = new Set; for (const n of t) { if (r.has(n)) return !1; let t, i; for (;
                ({ value: t, done: i } = e.next()) && !i;) { if (Object.is(n, t)) return !1;
                r.add(t) } } return !0 }, t.dispatch = it, t.drag = function() { var t, n, e, r, i = Rn,
            o = Fn,
            a = On,
            u = Un,
            c = {},
            f = it("start", "drag", "end"),
            s = 0,
            l = 0;

        function h(t) { t.on("mousedown.drag", d).filter(u).on("touchstart.drag", y).on("touchmove.drag", v).on("touchend.drag touchcancel.drag", _).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)") }

        function d(a, u) { if (!r && i.call(this, a, u)) { var c = b(this, o.call(this, a, u), a, u, "mouse");
                c && (Mn(a.view).on("mousemove.drag", p, !0).on("mouseup.drag", g, !0), Pn(a.view), Nn(a), e = !1, t = a.clientX, n = a.clientY, c("start", a)) } }

        function p(r) { if (Cn(r), !e) { var i = r.clientX - t,
                    o = r.clientY - n;
                e = i * i + o * o > l } c.mouse("drag", r) }

        function g(t) { Mn(t.view).on("mousemove.drag mouseup.drag", null), zn(t.view, e), Cn(t), c.mouse("end", t) }

        function y(t, n) { if (i.call(this, t, n)) { var e, r, a = t.changedTouches,
                    u = o.call(this, t, n),
                    c = a.length; for (e = 0; e < c; ++e)(r = b(this, u, t, n, a[e].identifier, a[e])) && (Nn(t), r("start", t, a[e])) } }

        function v(t) { var n, e, r = t.changedTouches,
                i = r.length; for (n = 0; n < i; ++n)(e = c[r[n].identifier]) && (Cn(t), e("drag", t, r[n])) }

        function _(t) { var n, e, i = t.changedTouches,
                o = i.length; for (r && clearTimeout(r), r = setTimeout((function() { r = null }), 500), n = 0; n < o; ++n)(e = c[i[n].identifier]) && (Nn(t), e("end", t, i[n])) }

        function b(t, n, e, r, i, o) { var u, l, d, p = f.copy(),
                g = kn(o || e, n); if (null != (d = a.call(t, new qn("beforestart", { sourceEvent: e, target: h, identifier: i, active: s, x: g[0], y: g[1], dx: 0, dy: 0, dispatch: p }), r))) return u = d.x - g[0] || 0, l = d.y - g[1] || 0,
                function e(o, a, f) { var y, v = g; switch (o) {
                        case "start":
                            c[i] = e, y = s++; break;
                        case "end":
                            delete c[i], --s;
                        case "drag":
                            g = kn(f || a, n), y = s } p.call(o, t, new qn(o, { sourceEvent: a, subject: d, target: h, identifier: i, active: y, x: g[0] + u, y: g[1] + l, dx: g[0] - v[0], dy: g[1] - v[1], dispatch: p }), r) } } return h.filter = function(t) { return arguments.length ? (i = "function" == typeof t ? t : Dn(!!t), h) : i }, h.container = function(t) { return arguments.length ? (o = "function" == typeof t ? t : Dn(t), h) : o }, h.subject = function(t) { return arguments.length ? (a = "function" == typeof t ? t : Dn(t), h) : a }, h.touchable = function(t) { return arguments.length ? (u = "function" == typeof t ? t : Dn(!!t), h) : u }, h.on = function() { var t = f.on.apply(f, arguments); return t === f ? h : t }, h.clickDistance = function(t) { return arguments.length ? (l = (t = +t) * t, h) : Math.sqrt(l) }, h }, t.dragDisable = Pn, t.dragEnable = zn, t.dsv = function(t, n, e, r) { 3 === arguments.length && "function" == typeof e && (r = e, e = void 0); var i = Qa(t); return bu(n, e).then((function(t) { return i.parse(t, r) })) }, t.dsvFormat = Qa, t.easeBack = to, t.easeBackIn = Qi, t.easeBackInOut = to, t.easeBackOut = Ji, t.easeBounce = Zi, t.easeBounceIn = function(t) { return 1 - Zi(1 - t) }, t.easeBounceInOut = function(t) { return ((t *= 2) <= 1 ? 1 - Zi(1 - t) : Zi(t - 1) + 1) / 2 }, t.easeBounceOut = Zi, t.easeCircle = Vi, t.easeCircleIn = function(t) { return 1 - Math.sqrt(1 - t * t) }, t.easeCircleInOut = Vi, t.easeCircleOut = function(t) { return Math.sqrt(1 - --t * t) }, t.easeCubic = Ui, t.easeCubicIn = function(t) { return t * t * t }, t.easeCubicInOut = Ui, t.easeCubicOut = function(t) { return --t * t * t + 1 }, t.easeElastic = ro, t.easeElasticIn = eo, t.easeElasticInOut = io, t.easeElasticOut = ro, t.easeExp = Gi, t.easeExpIn = function(t) { return Xi(1 - +t) }, t.easeExpInOut = Gi, t.easeExpOut = function(t) { return 1 - Xi(t) }, t.easeLinear = t => +t, t.easePoly = Yi, t.easePolyIn = Ii, t.easePolyInOut = Yi, t.easePolyOut = Bi, t.easeQuad = Oi, t.easeQuadIn = function(t) { return t * t }, t.easeQuadInOut = Oi, t.easeQuadOut = function(t) { return t * (2 - t) }, t.easeSin = Hi, t.easeSinIn = function(t) { return 1 == +t ? 1 : 1 - Math.cos(t * ji) }, t.easeSinInOut = Hi, t.easeSinOut = function(t) { return Math.sin(t * ji) }, t.every = function(t, n) { if ("function" != typeof n) throw new TypeError("test is not a function"); let e = -1; for (const r of t)
            if (!n(r, ++e, t)) return !1; return !0 }, t.extent = p, t.filter = function(t, n) { if ("function" != typeof n) throw new TypeError("test is not a function"); const e = []; let r = -1; for (const i of t) n(i, ++r, t) && e.push(i); return e }, t.forceCenter = function(t, n) { var e, r = 1;

        function i() { var i, o, a = e.length,
                u = 0,
                c = 0; for (i = 0; i < a; ++i) u += (o = e[i]).x, c += o.y; for (u = (u / a - t) * r, c = (c / a - n) * r, i = 0; i < a; ++i)(o = e[i]).x -= u, o.y -= c } return null == t && (t = 0), null == n && (n = 0), i.initialize = function(t) { e = t }, i.x = function(n) { return arguments.length ? (t = +n, i) : t }, i.y = function(t) { return arguments.length ? (n = +t, i) : n }, i.strength = function(t) { return arguments.length ? (r = +t, i) : r }, i }, t.forceCollide = function(t) { var n, e, r, i = 1,
            o = 1;

        function a() { for (var t, a, c, f, s, l, h, d = n.length, p = 0; p < o; ++p)
                for (a = zu(n, Uu, Iu).visitAfter(u), t = 0; t < d; ++t) c = n[t], l = e[c.index], h = l * l, f = c.x + c.vx, s = c.y + c.vy, a.visit(g);

            function g(t, n, e, o, a) { var u = t.data,
                    d = t.r,
                    p = l + d; if (!u) return n > f + p || o < f - p || e > s + p || a < s - p; if (u.index > c.index) { var g = f - u.x - u.vx,
                        y = s - u.y - u.vy,
                        v = g * g + y * y;
                    v < p * p && (0 === g && (v += (g = Ou(r)) * g), 0 === y && (v += (y = Ou(r)) * y), v = (p - (v = Math.sqrt(v))) / v * i, c.vx += (g *= v) * (p = (d *= d) / (h + d)), c.vy += (y *= v) * p, u.vx -= g * (p = 1 - p), u.vy -= y * p) } } }

        function u(t) { if (t.data) return t.r = e[t.data.index]; for (var n = t.r = 0; n < 4; ++n) t[n] && t[n].r > t.r && (t.r = t[n].r) }

        function c() { if (n) { var r, i, o = n.length; for (e = new Array(o), r = 0; r < o; ++r) i = n[r], e[i.index] = +t(i, r, n) } } return "function" != typeof t && (t = Fu(null == t ? 1 : +t)), a.initialize = function(t, e) { n = t, r = e, c() }, a.iterations = function(t) { return arguments.length ? (o = +t, a) : o }, a.strength = function(t) { return arguments.length ? (i = +t, a) : i }, a.radius = function(n) { return arguments.length ? (t = "function" == typeof n ? n : Fu(+n), c(), a) : t }, a }, t.forceLink = function(t) { var n, e, r, i, o, a, u = Bu,
            c = function(t) { return 1 / Math.min(i[t.source.index], i[t.target.index]) },
            f = Fu(30),
            s = 1;

        function l(r) { for (var i = 0, u = t.length; i < s; ++i)
                for (var c, f, l, h, d, p, g, y = 0; y < u; ++y) f = (c = t[y]).source, h = (l = c.target).x + l.vx - f.x - f.vx || Ou(a), d = l.y + l.vy - f.y - f.vy || Ou(a), h *= p = ((p = Math.sqrt(h * h + d * d)) - e[y]) / p * r * n[y], d *= p, l.vx -= h * (g = o[y]), l.vy -= d * g, f.vx += h * (g = 1 - g), f.vy += d * g }

        function h() { if (r) { var a, c, f = r.length,
                    s = t.length,
                    l = new Map(r.map((t, n) => [u(t, n, r), t])); for (a = 0, i = new Array(f); a < s; ++a)(c = t[a]).index = a, "object" != typeof c.source && (c.source = Yu(l, c.source)), "object" != typeof c.target && (c.target = Yu(l, c.target)), i[c.source.index] = (i[c.source.index] || 0) + 1, i[c.target.index] = (i[c.target.index] || 0) + 1; for (a = 0, o = new Array(s); a < s; ++a) c = t[a], o[a] = i[c.source.index] / (i[c.source.index] + i[c.target.index]);
                n = new Array(s), d(), e = new Array(s), p() } }

        function d() { if (r)
                for (var e = 0, i = t.length; e < i; ++e) n[e] = +c(t[e], e, t) }

        function p() { if (r)
                for (var n = 0, i = t.length; n < i; ++n) e[n] = +f(t[n], n, t) } return null == t && (t = []), l.initialize = function(t, n) { r = t, a = n, h() }, l.links = function(n) { return arguments.length ? (t = n, h(), l) : t }, l.id = function(t) { return arguments.length ? (u = t, l) : u }, l.iterations = function(t) { return arguments.length ? (s = +t, l) : s }, l.strength = function(t) { return arguments.length ? (c = "function" == typeof t ? t : Fu(+t), d(), l) : c }, l.distance = function(t) { return arguments.length ? (f = "function" == typeof t ? t : Fu(+t), p(), l) : f }, l }, t.forceManyBody = function() { var t, n, e, r, i, o = Fu(-30),
            a = 1,
            u = 1 / 0,
            c = .81;

        function f(e) { var i, o = t.length,
                a = zu(t, ju, Hu).visitAfter(l); for (r = e, i = 0; i < o; ++i) n = t[i], a.visit(h) }

        function s() { if (t) { var n, e, r = t.length; for (i = new Array(r), n = 0; n < r; ++n) e = t[n], i[e.index] = +o(e, n, t) } }

        function l(t) { var n, e, r, o, a, u = 0,
                c = 0; if (t.length) { for (r = o = a = 0; a < 4; ++a)(n = t[a]) && (e = Math.abs(n.value)) && (u += n.value, c += e, r += e * n.x, o += e * n.y);
                t.x = r / c, t.y = o / c } else {
                (n = t).x = n.data.x, n.y = n.data.y;
                do { u += i[n.data.index] } while (n = n.next) } t.value = u }

        function h(t, o, f, s) { if (!t.value) return !0; var l = t.x - n.x,
                h = t.y - n.y,
                d = s - o,
                p = l * l + h * h; if (d * d / c < p) return p < u && (0 === l && (p += (l = Ou(e)) * l), 0 === h && (p += (h = Ou(e)) * h), p < a && (p = Math.sqrt(a * p)), n.vx += l * t.value * r / p, n.vy += h * t.value * r / p), !0; if (!(t.length || p >= u)) {
                (t.data !== n || t.next) && (0 === l && (p += (l = Ou(e)) * l), 0 === h && (p += (h = Ou(e)) * h), p < a && (p = Math.sqrt(a * p)));
                do { t.data !== n && (d = i[t.data.index] * r / p, n.vx += l * d, n.vy += h * d) } while (t = t.next) } } return f.initialize = function(n, r) { t = n, e = r, s() }, f.strength = function(t) { return arguments.length ? (o = "function" == typeof t ? t : Fu(+t), s(), f) : o }, f.distanceMin = function(t) { return arguments.length ? (a = t * t, f) : Math.sqrt(a) }, f.distanceMax = function(t) { return arguments.length ? (u = t * t, f) : Math.sqrt(u) }, f.theta = function(t) { return arguments.length ? (c = t * t, f) : Math.sqrt(c) }, f }, t.forceRadial = function(t, n, e) { var r, i, o, a = Fu(.1);

        function u(t) { for (var a = 0, u = r.length; a < u; ++a) { var c = r[a],
                    f = c.x - n || 1e-6,
                    s = c.y - e || 1e-6,
                    l = Math.sqrt(f * f + s * s),
                    h = (o[a] - l) * i[a] * t / l;
                c.vx += f * h, c.vy += s * h } }

        function c() { if (r) { var n, e = r.length; for (i = new Array(e), o = new Array(e), n = 0; n < e; ++n) o[n] = +t(r[n], n, r), i[n] = isNaN(o[n]) ? 0 : +a(r[n], n, r) } } return "function" != typeof t && (t = Fu(+t)), null == n && (n = 0), null == e && (e = 0), u.initialize = function(t) { r = t, c() }, u.strength = function(t) { return arguments.length ? (a = "function" == typeof t ? t : Fu(+t), c(), u) : a }, u.radius = function(n) { return arguments.length ? (t = "function" == typeof n ? n : Fu(+n), c(), u) : t }, u.x = function(t) { return arguments.length ? (n = +t, u) : n }, u.y = function(t) { return arguments.length ? (e = +t, u) : e }, u }, t.forceSimulation = function(t) { var n, e = 1,
            r = .001,
            i = 1 - Math.pow(r, 1 / 300),
            o = 0,
            a = .6,
            u = new Map,
            c = Vr(l),
            f = it("tick", "end"),
            s = function() { let t = 1; return () => (t = (1664525 * t + 1013904223) % Lu) / Lu }();

        function l() { h(), f.call("tick", n), e < r && (c.stop(), f.call("end", n)) }

        function h(r) { var c, f, s = t.length;
            void 0 === r && (r = 1); for (var l = 0; l < r; ++l)
                for (e += (o - e) * i, u.forEach((function(t) { t(e) })), c = 0; c < s; ++c) null == (f = t[c]).fx ? f.x += f.vx *= a : (f.x = f.fx, f.vx = 0), null == f.fy ? f.y += f.vy *= a : (f.y = f.fy, f.vy = 0); return n }

        function d() { for (var n, e = 0, r = t.length; e < r; ++e) { if ((n = t[e]).index = e, null != n.fx && (n.x = n.fx), null != n.fy && (n.y = n.fy), isNaN(n.x) || isNaN(n.y)) { var i = 10 * Math.sqrt(.5 + e),
                        o = e * Xu;
                    n.x = i * Math.cos(o), n.y = i * Math.sin(o) }(isNaN(n.vx) || isNaN(n.vy)) && (n.vx = n.vy = 0) } }

        function p(n) { return n.initialize && n.initialize(t, s), n } return null == t && (t = []), d(), n = { tick: h, restart: function() { return c.restart(l), n }, stop: function() { return c.stop(), n }, nodes: function(e) { return arguments.length ? (t = e, d(), u.forEach(p), n) : t }, alpha: function(t) { return arguments.length ? (e = +t, n) : e }, alphaMin: function(t) { return arguments.length ? (r = +t, n) : r }, alphaDecay: function(t) { return arguments.length ? (i = +t, n) : +i }, alphaTarget: function(t) { return arguments.length ? (o = +t, n) : o }, velocityDecay: function(t) { return arguments.length ? (a = 1 - t, n) : 1 - a }, randomSource: function(t) { return arguments.length ? (s = t, u.forEach(p), n) : s }, force: function(t, e) { return arguments.length > 1 ? (null == e ? u.delete(t) : u.set(t, p(e)), n) : u.get(t) }, find: function(n, e, r) { var i, o, a, u, c, f = 0,
                    s = t.length; for (null == r ? r = 1 / 0 : r *= r, f = 0; f < s; ++f)(a = (i = n - (u = t[f]).x) * i + (o = e - u.y) * o) < r && (c = u, r = a); return c }, on: function(t, e) { return arguments.length > 1 ? (f.on(t, e), n) : f.on(t) } } }, t.forceX = function(t) { var n, e, r, i = Fu(.1);

        function o(t) { for (var i, o = 0, a = n.length; o < a; ++o)(i = n[o]).vx += (r[o] - i.x) * e[o] * t }

        function a() { if (n) { var o, a = n.length; for (e = new Array(a), r = new Array(a), o = 0; o < a; ++o) e[o] = isNaN(r[o] = +t(n[o], o, n)) ? 0 : +i(n[o], o, n) } } return "function" != typeof t && (t = Fu(null == t ? 0 : +t)), o.initialize = function(t) { n = t, a() }, o.strength = function(t) { return arguments.length ? (i = "function" == typeof t ? t : Fu(+t), a(), o) : i }, o.x = function(n) { return arguments.length ? (t = "function" == typeof n ? n : Fu(+n), a(), o) : t }, o }, t.forceY = function(t) { var n, e, r, i = Fu(.1);

        function o(t) { for (var i, o = 0, a = n.length; o < a; ++o)(i = n[o]).vy += (r[o] - i.y) * e[o] * t }

        function a() { if (n) { var o, a = n.length; for (e = new Array(a), r = new Array(a), o = 0; o < a; ++o) e[o] = isNaN(r[o] = +t(n[o], o, n)) ? 0 : +i(n[o], o, n) } } return "function" != typeof t && (t = Fu(null == t ? 0 : +t)), o.initialize = function(t) { n = t, a() }, o.strength = function(t) { return arguments.length ? (i = "function" == typeof t ? t : Fu(+t), a(), o) : i }, o.y = function(n) { return arguments.length ? (t = "function" == typeof n ? n : Fu(+n), a(), o) : t }, o }, t.formatDefaultLocale = oc, t.formatLocale = ic, t.formatSpecifier = Zu, t.fsum = function(t, n) { const e = new g; if (void 0 === n)
            for (let n of t)(n = +n) && e.add(n);
        else { let r = -1; for (let i of t)(i = +n(i, ++r, t)) && e.add(i) } return +e }, t.geoAlbers = fh, t.geoAlbersUsa = function() { var t, n, e, r, i, o, a = fh(),
            u = ch().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
            c = ch().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
            f = { point: function(t, n) { o = [t, n] } };

        function s(t) { var n = t[0],
                a = t[1]; return o = null, e.point(n, a), o || (r.point(n, a), o) || (i.point(n, a), o) }

        function l() { return t = n = null, s } return s.invert = function(t) { var n = a.scale(),
                e = a.translate(),
                r = (t[0] - e[0]) / n,
                i = (t[1] - e[1]) / n; return (i >= .12 && i < .234 && r >= -.425 && r < -.214 ? u : i >= .166 && i < .234 && r >= -.214 && r < -.115 ? c : a).invert(t) }, s.stream = function(e) { return t && n === e ? t : (r = [a.stream(n = e), u.stream(e), c.stream(e)], i = r.length, t = { point: function(t, n) { for (var e = -1; ++e < i;) r[e].point(t, n) }, sphere: function() { for (var t = -1; ++t < i;) r[t].sphere() }, lineStart: function() { for (var t = -1; ++t < i;) r[t].lineStart() }, lineEnd: function() { for (var t = -1; ++t < i;) r[t].lineEnd() }, polygonStart: function() { for (var t = -1; ++t < i;) r[t].polygonStart() }, polygonEnd: function() { for (var t = -1; ++t < i;) r[t].polygonEnd() } }); var r, i }, s.precision = function(t) { return arguments.length ? (a.precision(t), u.precision(t), c.precision(t), l()) : a.precision() }, s.scale = function(t) { return arguments.length ? (a.scale(t), u.scale(.35 * t), c.scale(t), s.translate(a.translate())) : a.scale() }, s.translate = function(t) { if (!arguments.length) return a.translate(); var n = a.scale(),
                o = +t[0],
                s = +t[1]; return e = a.translate(t).clipExtent([
                [o - .455 * n, s - .238 * n],
                [o + .455 * n, s + .238 * n]
            ]).stream(f), r = u.translate([o - .307 * n, s + .201 * n]).clipExtent([
                [o - .425 * n + fc, s + .12 * n + fc],
                [o - .214 * n - fc, s + .234 * n - fc]
            ]).stream(f), i = c.translate([o - .205 * n, s + .212 * n]).clipExtent([
                [o - .214 * n + fc, s + .166 * n + fc],
                [o - .115 * n - fc, s + .234 * n - fc]
            ]).stream(f), l() }, s.fitExtent = function(t, n) { return Zl(s, t, n) }, s.fitSize = function(t, n) { return Kl(s, t, n) }, s.fitWidth = function(t, n) { return Ql(s, t, n) }, s.fitHeight = function(t, n) { return Jl(s, t, n) }, s.scale(1070) }, t.geoArea = function(t) { return rf = new g, Ic(t, of ), 2 * rf }, t.geoAzimuthalEqualArea = function() { return ih(hh).scale(124.75).clipAngle(179.999) }, t.geoAzimuthalEqualAreaRaw = hh, t.geoAzimuthalEquidistant = function() { return ih(dh).scale(79.4188).clipAngle(179.999) }, t.geoAzimuthalEquidistantRaw = dh, t.geoBounds = function(t) { var n, e, r, i, o, a, u; if ($c = Vc = -(Xc = Gc = 1 / 0), tf = [], Ic(t, Df), e = tf.length) { for (tf.sort(Lf), n = 1, o = [r = tf[0]]; n < e; ++n) jf(r, (i = tf[n])[0]) || jf(r, i[1]) ? (Yf(r[0], i[1]) > Yf(r[0], r[1]) && (r[1] = i[1]), Yf(i[0], r[1]) > Yf(r[0], r[1]) && (r[0] = i[0])) : o.push(r = i); for (a = -1 / 0, n = 0, r = o[e = o.length - 1]; n <= e; r = i, ++n) i = o[n], (u = Yf(r[1], i[0])) > a && (a = u, Xc = i[0], Vc = r[1]) } return tf = nf = null, Xc === 1 / 0 || Gc === 1 / 0 ? [
            [NaN, NaN],
            [NaN, NaN]
        ] : [
            [Xc, Gc],
            [Vc, $c]
        ] }, t.geoCentroid = function(t) { vf = _f = bf = mf = xf = wf = Mf = Af = 0, Tf = new g, Sf = new g, Ef = new g, Ic(t, Hf); var n = +Tf,
            e = +Sf,
            r = +Ef,
            i = Mc(n, e, r); return i < sc && (n = wf, e = Mf, r = Af, _f < fc && (n = bf, e = mf, r = xf), (i = Mc(n, e, r)) < sc) ? [NaN, NaN] : [bc(e, n) * gc, Pc(r / i) * gc] }, t.geoCircle = function() { var t, n, e = ns([0, 0]),
            r = ns(90),
            i = ns(6),
            o = { point: function(e, r) { t.push(e = n(e, r)), e[0] *= gc, e[1] *= gc } };

        function a() { var a = e.apply(this, arguments),
                u = r.apply(this, arguments) * yc,
                c = i.apply(this, arguments) * yc; return t = [], n = is(-a[0] * yc, -a[1] * yc, 0).invert, fs(o, u, c, 1), a = { type: "Polygon", coordinates: [t] }, t = n = null, a } return a.center = function(t) { return arguments.length ? (e = "function" == typeof t ? t : ns([+t[0], +t[1]]), a) : e }, a.radius = function(t) { return arguments.length ? (r = "function" == typeof t ? t : ns(+t), a) : r }, a.precision = function(t) { return arguments.length ? (i = "function" == typeof t ? t : ns(+t), a) : i }, a }, t.geoClipAntimeridian = xs, t.geoClipCircle = ws, t.geoClipExtent = function() { var t, n, e, r = 0,
            i = 0,
            o = 960,
            a = 500; return e = { stream: function(e) { return t && n === e ? t : t = Ns(r, i, o, a)(n = e) }, extent: function(u) { return arguments.length ? (r = +u[0][0], i = +u[0][1], o = +u[1][0], a = +u[1][1], t = n = null, e) : [
                    [r, i],
                    [o, a]
                ] } } }, t.geoClipRectangle = Ns, t.geoConicConformal = function() { return ah(vh).scale(109.5).parallels([30, 30]) }, t.geoConicConformalRaw = vh, t.geoConicEqualArea = ch, t.geoConicEqualAreaRaw = uh, t.geoConicEquidistant = function() { return ah(bh).scale(131.154).center([0, 13.9389]) }, t.geoConicEquidistantRaw = bh, t.geoContains = function(t, n) { return (t && Us.hasOwnProperty(t.type) ? Us[t.type] : Bs)(t, n) }, t.geoDistance = Os, t.geoEqualEarth = function() { return ih(Th).scale(177.158) }, t.geoEqualEarthRaw = Th, t.geoEquirectangular = function() { return ih(_h).scale(152.63) }, t.geoEquirectangularRaw = _h, t.geoGnomonic = function() { return ih(Sh).scale(144.049).clipAngle(60) }, t.geoGnomonicRaw = Sh, t.geoGraticule = $s, t.geoGraticule10 = function() { return $s()() }, t.geoIdentity = function() { var t, n, e, r, i, o, a, u = 1,
            c = 0,
            f = 0,
            s = 1,
            l = 1,
            h = 0,
            d = null,
            p = 1,
            g = 1,
            y = Vl({ point: function(t, n) { var e = b([t, n]);
                    this.stream.point(e[0], e[1]) } }),
            v = Js;

        function _() { return p = u * s, g = u * l, o = a = null, b }

        function b(e) { var r = e[0] * p,
                i = e[1] * g; if (h) { var o = i * t - r * n;
                r = r * t + i * n, i = o } return [r + c, i + f] } return b.invert = function(e) { var r = e[0] - c,
                i = e[1] - f; if (h) { var o = i * t + r * n;
                r = r * t - i * n, i = o } return [r / p, i / g] }, b.stream = function(t) { return o && a === t ? o : o = y(v(a = t)) }, b.postclip = function(t) { return arguments.length ? (v = t, d = e = r = i = null, _()) : v }, b.clipExtent = function(t) { return arguments.length ? (v = null == t ? (d = e = r = i = null, Js) : Ns(d = +t[0][0], e = +t[0][1], r = +t[1][0], i = +t[1][1]), _()) : null == d ? null : [
                [d, e],
                [r, i]
            ] }, b.scale = function(t) { return arguments.length ? (u = +t, _()) : u }, b.translate = function(t) { return arguments.length ? (c = +t[0], f = +t[1], _()) : [c, f] }, b.angle = function(e) { return arguments.length ? (n = Sc(h = e % 360 * yc), t = mc(h), _()) : h * gc }, b.reflectX = function(t) { return arguments.length ? (s = t ? -1 : 1, _()) : s < 0 }, b.reflectY = function(t) { return arguments.length ? (l = t ? -1 : 1, _()) : l < 0 }, b.fitExtent = function(t, n) { return Zl(b, t, n) }, b.fitSize = function(t, n) { return Kl(b, t, n) }, b.fitWidth = function(t, n) { return Ql(b, t, n) }, b.fitHeight = function(t, n) { return Jl(b, t, n) }, b }, t.geoInterpolate = function(t, n) { var e = t[0] * yc,
            r = t[1] * yc,
            i = n[0] * yc,
            o = n[1] * yc,
            a = mc(r),
            u = Sc(r),
            c = mc(o),
            f = Sc(o),
            s = a * mc(e),
            l = a * Sc(e),
            h = c * mc(i),
            d = c * Sc(i),
            p = 2 * Pc(kc(zc(o - r) + a * c * zc(i - e))),
            g = Sc(p),
            y = p ? function(t) { var n = Sc(t *= p) / g,
                    e = Sc(p - t) / g,
                    r = e * s + n * h,
                    i = e * l + n * d,
                    o = e * u + n * f; return [bc(i, r) * gc, bc(o, kc(r * r + i * i)) * gc] } : function() { return [e * gc, r * gc] }; return y.distance = p, y }, t.geoLength = qs, t.geoMercator = function() { return gh(ph).scale(961 / pc) }, t.geoMercatorRaw = ph, t.geoNaturalEarth1 = function() { return ih(Eh).scale(175.295) }, t.geoNaturalEarth1Raw = Eh, t.geoOrthographic = function() { return ih(kh).scale(249.5).clipAngle(90.000001) }, t.geoOrthographicRaw = kh, t.geoPath = function(t, n) { var e, r, i = 4.5;

        function o(t) { return t && ("function" == typeof i && r.pointRadius(+i.apply(this, arguments)), Ic(t, e(r))), r.result() } return o.area = function(t) { return Ic(t, e(el)), el.result() }, o.measure = function(t) { return Ic(t, e(Ll)), Ll.result() }, o.bounds = function(t) { return Ic(t, e(ll)), ll.result() }, o.centroid = function(t) { return Ic(t, e(Tl)), Tl.result() }, o.projection = function(n) { return arguments.length ? (e = null == n ? (t = null, Js) : (t = n).stream, o) : t }, o.context = function(t) { return arguments.length ? (r = null == t ? (n = null, new Xl) : new Rl(n = t), "function" != typeof i && r.pointRadius(i), o) : n }, o.pointRadius = function(t) { return arguments.length ? (i = "function" == typeof t ? t : (r.pointRadius(+t), +t), o) : i }, o.projection(t).context(n) }, t.geoProjection = ih, t.geoProjectionMutator = oh, t.geoRotation = cs, t.geoStereographic = function() { return ih(Nh).scale(250).clipAngle(142) }, t.geoStereographicRaw = Nh, t.geoStream = Ic, t.geoTransform = function(t) { return { stream: Vl(t) } }, t.geoTransverseMercator = function() { var t = gh(Ch),
            n = t.center,
            e = t.rotate; return t.center = function(t) { return arguments.length ? n([-t[1], t[0]]) : [(t = n())[1], -t[0]] }, t.rotate = function(t) { return arguments.length ? e([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : [(t = e())[0], t[1], t[2] - 90] }, e([0, 0, 90]).scale(159.155) }, t.geoTransverseMercatorRaw = Ch, t.gray = function(t, n) { return new Se(t, 0, 0, null == n ? 1 : n) }, t.greatest = function(t, e = n) { let r, i = !1; if (1 === e.length) { let o; for (const a of t) { const t = e(a);
                (i ? n(t, o) > 0 : 0 === n(t, t)) && (r = a, o = t, i = !0) } } else
            for (const n of t)(i ? e(n, r) > 0 : 0 === e(n, n)) && (r = n, i = !0); return r }, t.greatestIndex = function(t, e = n) { if (1 === e.length) return F(t, e); let r, i = -1,
            o = -1; for (const n of t) ++o, (i < 0 ? 0 === e(n, n) : e(n, r) > 0) && (r = n, i = o); return i }, t.group = function(t, ...n) { return _(t, y, y, n) }, t.groups = function(t, ...n) { return _(t, Array.from, y, n) }, t.hcl = ze, t.hierarchy = Rh, t.histogram = N, t.hsl = pe, t.html = Su, t.image = function(t, n) { return new Promise((function(e, r) { var i = new Image; for (var o in n) i[o] = n[o];
            i.onerror = r, i.onload = function() { e(i) }, i.src = t })) }, t.index = function(t, ...n) { return _(t, y, v, n) }, t.indexes = function(t, ...n) { return _(t, Array.from, v, n) }, t.interpolate = dr, t.interpolateArray = function(t, n) { return (or(n) ? ir : ar)(t, n) }, t.interpolateBasis = Ve, t.interpolateBasisClosed = $e, t.interpolateBlues = M_, t.interpolateBrBG = Rv, t.interpolateBuGn = Jv, t.interpolateBuPu = n_, t.interpolateCividis = function(t) { return t = Math.max(0, Math.min(1, t)), "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - t * (35.34 - t * (2381.73 - t * (6402.7 - t * (7024.72 - 2710.57 * t))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + t * (170.73 + t * (52.82 - t * (131.46 - t * (176.58 - 67.37 * t))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + t * (442.36 - t * (2482.43 - t * (6167.24 - t * (6614.94 - 2475.67 * t))))))) + ")" }, t.interpolateCool = F_, t.interpolateCubehelix = Pr, t.interpolateCubehelixDefault = q_, t.interpolateCubehelixLong = zr, t.interpolateDate = ur, t.interpolateDiscrete = function(t) { var n = t.length; return function(e) { return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))] } }, t.interpolateGnBu = r_, t.interpolateGreens = T_, t.interpolateGreys = E_, t.interpolateHcl = kr, t.interpolateHclLong = Nr, t.interpolateHsl = Tr, t.interpolateHslLong = Sr, t.interpolateHue = function(t, n) { var e = Ke(+t, +n); return function(t) { var n = e(t); return n - 360 * Math.floor(n / 360) } }, t.interpolateInferno = H_, t.interpolateLab = function(t, n) { var e = Je((t = Te(t)).l, (n = Te(n)).l),
            r = Je(t.a, n.a),
            i = Je(t.b, n.b),
            o = Je(t.opacity, n.opacity); return function(n) { return t.l = e(n), t.a = r(n), t.b = i(n), t.opacity = o(n), t + "" } }, t.interpolateMagma = j_, t.interpolateNumber = cr, t.interpolateNumberArray = ir, t.interpolateObject = fr, t.interpolateOrRd = o_, t.interpolateOranges = D_, t.interpolatePRGn = Ov, t.interpolatePiYG = Iv, t.interpolatePlasma = X_, t.interpolatePuBu = f_, t.interpolatePuBuGn = u_, t.interpolatePuOr = Yv, t.interpolatePuRd = l_, t.interpolatePurples = N_, t.interpolateRainbow = function(t) {
        (t < 0 || t > 1) && (t -= Math.floor(t)); var n = Math.abs(t - .5); return O_.h = 360 * t - 100, O_.s = 1.5 - 1.5 * n, O_.l = .8 - .9 * n, O_ + "" }, t.interpolateRdBu = jv, t.interpolateRdGy = Xv, t.interpolateRdPu = d_, t.interpolateRdYlBu = Vv, t.interpolateRdYlGn = Wv, t.interpolateReds = P_, t.interpolateRgb = tr, t.interpolateRgbBasis = er, t.interpolateRgbBasisClosed = rr, t.interpolateRound = pr, t.interpolateSinebow = function(t) { var n; return t = (.5 - t) * Math.PI, U_.r = 255 * (n = Math.sin(t)) * n, U_.g = 255 * (n = Math.sin(t + I_)) * n, U_.b = 255 * (n = Math.sin(t + B_)) * n, U_ + "" }, t.interpolateSpectral = Kv, t.interpolateString = hr, t.interpolateTransformCss = mr, t.interpolateTransformSvg = xr, t.interpolateTurbo = function(t) { return t = Math.max(0, Math.min(1, t)), "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + t * (1172.33 - t * (10793.56 - t * (33300.12 - t * (38394.49 - 14825.05 * t))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + t * (557.33 + t * (1225.33 - t * (3574.96 - t * (1073.77 + 707.56 * t))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + t * (3211.1 - t * (15327.97 - t * (27814 - t * (22569.18 - 6838.66 * t))))))) + ")" }, t.interpolateViridis = L_, t.interpolateWarm = R_, t.interpolateYlGn = v_, t.interpolateYlGnBu = g_, t.interpolateYlOrBr = b_, t.interpolateYlOrRd = x_, t.interpolateZoom = Mr, t.interrupt = oi, t.intersection = function(t, ...n) { t = new Set(t), n = n.map(G);
        t: for (const e of t)
            for (const r of n)
                if (!r.has(e)) { t.delete(e); continue t } return t }, t.interval = function(t, n, e) { var r = new Gr,
            i = n; return null == n ? (r.restart(t, n, e), r) : (r._restart = r.restart, r.restart = function(t, n, e) { n = +n, e = null == e ? Hr() : +e, r._restart((function o(a) { a += i, r._restart(o, i += n, e), t(a) }), n, e) }, r.restart(t, n, e), r) }, t.isoFormat = av, t.isoParse = uv, t.json = function(t, n) { return fetch(t, n).then(Mu) }, t.lab = Te, t.lch = function(t, n, e, r) { return 1 === arguments.length ? Pe(t) : new De(e, n, t, null == r ? 1 : r) }, t.least = function(t, e = n) { let r, i = !1; if (1 === e.length) { let o; for (const a of t) { const t = e(a);
                (i ? n(t, o) < 0 : 0 === n(t, t)) && (r = a, o = t, i = !0) } } else
            for (const n of t)(i ? e(n, r) < 0 : 0 === e(n, n)) && (r = n, i = !0); return r }, t.leastIndex = Y, t.line = bb, t.lineRadial = Eb, t.linkHorizontal = function() { return zb(Db) }, t.linkRadial = function() { var t = zb(Rb); return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t }, t.linkVertical = function() { return zb(qb) }, t.local = Tn, t.map = function(t, n) { if ("function" != typeof t[Symbol.iterator]) throw new TypeError("values is not iterable"); if ("function" != typeof n) throw new TypeError("mapper is not a function"); return Array.from(t, (e, r) => n(e, r, t)) }, t.matcher = mt, t.max = C, t.maxIndex = F, t.mean = function(t, n) { let e = 0,
            r = 0; if (void 0 === n)
            for (let n of t) null != n && (n = +n) >= n && (++e, r += n);
        else { let i = -1; for (let o of t) null != (o = n(o, ++i, t)) && (o = +o) >= o && (++e, r += o) } if (e) return r / e }, t.median = function(t, n) { return q(t, .5, n) }, t.merge = O, t.min = P, t.minIndex = U, t.namespace = lt, t.namespaces = st, t.nice = E, t.now = Hr, t.pack = function() { var t = null,
            n = 1,
            e = 1,
            r = ed;

        function i(i) { return i.x = n / 2, i.y = e / 2, t ? i.eachBefore(od(t)).eachAfter(ad(r, .5)).eachBefore(ud(1)) : i.eachBefore(od(id)).eachAfter(ad(ed, 1)).eachAfter(ad(r, i.r / Math.min(n, e))).eachBefore(ud(Math.min(n, e) / (2 * i.r))), i } return i.radius = function(n) { return arguments.length ? (t = td(n), i) : t }, i.size = function(t) { return arguments.length ? (n = +t[0], e = +t[1], i) : [n, e] }, i.padding = function(t) { return arguments.length ? (r = "function" == typeof t ? t : rd(+t), i) : r }, i }, t.packEnclose = Yh, t.packSiblings = function(t) { return Jh(t), t }, t.pairs = function(t, n = I) { const e = []; let r, i = !1; for (const o of t) i && e.push(n(r, o)), r = o, i = !0; return e }, t.partition = function() { var t = 1,
            n = 1,
            e = 0,
            r = !1;

        function i(i) { var o = i.height + 1; return i.x0 = i.y0 = e, i.x1 = t, i.y1 = n / o, i.eachBefore(function(t, n) { return function(r) { r.children && fd(r, r.x0, t * (r.depth + 1) / n, r.x1, t * (r.depth + 2) / n); var i = r.x0,
                        o = r.y0,
                        a = r.x1 - e,
                        u = r.y1 - e;
                    a < i && (i = a = (i + a) / 2), u < o && (o = u = (o + u) / 2), r.x0 = i, r.y0 = o, r.x1 = a, r.y1 = u } }(n, o)), r && i.eachBefore(cd), i } return i.round = function(t) { return arguments.length ? (r = !!t, i) : r }, i.size = function(e) { return arguments.length ? (t = +e[0], n = +e[1], i) : [t, n] }, i.padding = function(t) { return arguments.length ? (e = +t, i) : e }, i }, t.path = Jo, t.permute = function(t, n) { return Array.from(n, n => t[n]) }, t.pie = function() { var t = wb,
            n = xb,
            e = null,
            r = G_(0),
            i = G_(rb),
            o = G_(0);

        function a(a) { var u, c, f, s, l, h = (a = pb(a)).length,
                d = 0,
                p = new Array(h),
                g = new Array(h),
                y = +r.apply(this, arguments),
                v = Math.min(rb, Math.max(-rb, i.apply(this, arguments) - y)),
                _ = Math.min(Math.abs(v) / h, o.apply(this, arguments)),
                b = _ * (v < 0 ? -1 : 1); for (u = 0; u < h; ++u)(l = g[p[u] = u] = +t(a[u], u, a)) > 0 && (d += l); for (null != n ? p.sort((function(t, e) { return n(g[t], g[e]) })) : null != e && p.sort((function(t, n) { return e(a[t], a[n]) })), u = 0, f = d ? (v - h * b) / d : 0; u < h; ++u, y = s) c = p[u], s = y + ((l = g[c]) > 0 ? l * f : 0) + b, g[c] = { data: a[c], index: u, value: l, startAngle: y, endAngle: s, padAngle: _ }; return g } return a.value = function(n) { return arguments.length ? (t = "function" == typeof n ? n : G_(+n), a) : t }, a.sortValues = function(t) { return arguments.length ? (n = t, e = null, a) : n }, a.sort = function(t) { return arguments.length ? (e = t, n = null, a) : e }, a.startAngle = function(t) { return arguments.length ? (r = "function" == typeof t ? t : G_(+t), a) : r }, a.endAngle = function(t) { return arguments.length ? (i = "function" == typeof t ? t : G_(+t), a) : i }, a.padAngle = function(t) { return arguments.length ? (o = "function" == typeof t ? t : G_(+t), a) : o }, a }, t.piecewise = Dr, t.pointRadial = Nb, t.pointer = kn, t.pointers = function(t, n) { return t.target && (t = En(t), void 0 === n && (n = t.currentTarget), t = t.touches || [t]), Array.from(t, t => kn(t, n)) }, t.polygonArea = function(t) { for (var n, e = -1, r = t.length, i = t[r - 1], o = 0; ++e < r;) n = i, i = t[e], o += n[1] * i[0] - n[0] * i[1]; return o / 2 }, t.polygonCentroid = function(t) { for (var n, e, r = -1, i = t.length, o = 0, a = 0, u = t[i - 1], c = 0; ++r < i;) n = u, u = t[r], c += e = n[0] * u[1] - u[0] * n[1], o += (n[0] + u[0]) * e, a += (n[1] + u[1]) * e; return [o / (c *= 3), a / c] }, t.polygonContains = function(t, n) { for (var e, r, i = t.length, o = t[i - 1], a = n[0], u = n[1], c = o[0], f = o[1], s = !1, l = 0; l < i; ++l) e = (o = t[l])[0], (r = o[1]) > u != f > u && a < (c - e) * (u - r) / (f - r) + e && (s = !s), c = e, f = r; return s }, t.polygonHull = function(t) { if ((e = t.length) < 3) return null; var n, e, r = new Array(e),
            i = new Array(e); for (n = 0; n < e; ++n) r[n] = [+t[n][0], +t[n][1], n]; for (r.sort(Sd), n = 0; n < e; ++n) i[n] = [r[n][0], -r[n][1]]; var o = Ed(r),
            a = Ed(i),
            u = a[0] === o[0],
            c = a[a.length - 1] === o[o.length - 1],
            f = []; for (n = o.length - 1; n >= 0; --n) f.push(t[r[o[n]][2]]); for (n = +u; n < a.length - c; ++n) f.push(t[r[a[n]][2]]); return f }, t.polygonLength = function(t) { for (var n, e, r = -1, i = t.length, o = t[i - 1], a = o[0], u = o[1], c = 0; ++r < i;) n = a, e = u, n -= a = (o = t[r])[0], e -= u = o[1], c += Math.hypot(n, e); return c }, t.precisionFixed = ac, t.precisionPrefix = uc, t.precisionRound = cc, t.quadtree = zu, t.quantile = q, t.quantileSorted = R, t.quantize = function(t, n) { for (var e = new Array(n), r = 0; r < n; ++r) e[r] = t(r / (n - 1)); return e }, t.quickselect = z, t.radialArea = kb, t.radialLine = Eb, t.randomBates = qd, t.randomBernoulli = Od, t.randomBeta = Bd, t.randomBinomial = Yd, t.randomCauchy = jd, t.randomExponential = Rd, t.randomGamma = Id, t.randomGeometric = Ud, t.randomInt = Cd, t.randomIrwinHall = Dd, t.randomLcg = function(t = Math.random()) { let n = 0 | (0 <= t && t < 1 ? t / Gd : Math.abs(t)); return () => (n = 1664525 * n + 1013904223 | 0, Gd * (n >>> 0)) }, t.randomLogNormal = zd, t.randomLogistic = Hd, t.randomNormal = Pd, t.randomPareto = Fd, t.randomPoisson = Xd, t.randomUniform = Nd, t.randomWeibull = Ld, t.range = B, t.reduce = function(t, n, e) { if ("function" != typeof n) throw new TypeError("reducer is not a function"); const r = t[Symbol.iterator](); let i, o, a = -1; if (arguments.length < 3) { if (({ done: i, value: e } = r.next()), i) return;++a } for (;
            ({ done: i, value: o } = r.next()), !i;) e = n(e, o, ++a, t); return e }, t.reverse = function(t) { if ("function" != typeof t[Symbol.iterator]) throw new TypeError("values is not iterable"); return Array.from(t).reverse() }, t.rgb = ue, t.ribbon = function() { return fa() }, t.ribbonArrow = function() { return fa(ca) }, t.rollup = function(t, n, ...e) { return _(t, y, n, e) }, t.rollups = function(t, n, ...e) { return _(t, Array.from, n, e) }, t.scaleBand = Kd, t.scaleDiverging = function t() { var n = fp(mv()(np)); return n.copy = function() { return _v(n, t()) }, $d.apply(n, arguments) }, t.scaleDivergingLog = function t() { var n = vp(mv()).domain([.1, 1, 10]); return n.copy = function() { return _v(n, t()).base(n.base()) }, $d.apply(n, arguments) }, t.scaleDivergingPow = xv, t.scaleDivergingSqrt = function() { return xv.apply(null, arguments).exponent(.5) }, t.scaleDivergingSymlog = function t() { var n = mp(mv()); return n.copy = function() { return _v(n, t()).constant(n.constant()) }, $d.apply(n, arguments) }, t.scaleIdentity = function t(n) { var e;

        function r(t) { return isNaN(t = +t) ? e : t } return r.invert = r, r.domain = r.range = function(t) { return arguments.length ? (n = Array.from(t, Jd), r) : n.slice() }, r.unknown = function(t) { return arguments.length ? (e = t, r) : e }, r.copy = function() { return t(n).unknown(e) }, n = arguments.length ? Array.from(n, Jd) : [0, 1], fp(r) }, t.scaleImplicit = Wd, t.scaleLinear = function t() { var n = up(); return n.copy = function() { return op(n, t()) }, Vd.apply(n, arguments), fp(n) }, t.scaleLog = function t() { var n = vp(ap()).domain([1, 10]); return n.copy = function() { return op(n, t()).base(n.base()) }, Vd.apply(n, arguments), n }, t.scaleOrdinal = Zd, t.scalePoint = function() { return Qd(Kd.apply(null, arguments).paddingInner(1)) }, t.scalePow = Tp, t.scaleQuantile = function t() { var e, r = [],
            i = [],
            a = [];

        function u() { var t = 0,
                n = Math.max(1, i.length); for (a = new Array(n - 1); ++t < n;) a[t - 1] = R(r, t / n); return c }

        function c(t) { return isNaN(t = +t) ? e : i[o(a, t)] } return c.invertExtent = function(t) { var n = i.indexOf(t); return n < 0 ? [NaN, NaN] : [n > 0 ? a[n - 1] : r[0], n < a.length ? a[n] : r[r.length - 1]] }, c.domain = function(t) { if (!arguments.length) return r.slice();
            r = []; for (let n of t) null == n || isNaN(n = +n) || r.push(n); return r.sort(n), u() }, c.range = function(t) { return arguments.length ? (i = Array.from(t), u()) : i.slice() }, c.unknown = function(t) { return arguments.length ? (e = t, c) : e }, c.quantiles = function() { return a.slice() }, c.copy = function() { return t().domain(r).range(i).unknown(e) }, Vd.apply(c, arguments) }, t.scaleQuantize = function t() { var n, e = 0,
            r = 1,
            i = 1,
            a = [.5],
            u = [0, 1];

        function c(t) { return t <= t ? u[o(a, t, 0, i)] : n }

        function f() { var t = -1; for (a = new Array(i); ++t < i;) a[t] = ((t + 1) * r - (t - i) * e) / (i + 1); return c } return c.domain = function(t) { return arguments.length ? ([e, r] = t, e = +e, r = +r, f()) : [e, r] }, c.range = function(t) { return arguments.length ? (i = (u = Array.from(t)).length - 1, f()) : u.slice() }, c.invertExtent = function(t) { var n = u.indexOf(t); return n < 0 ? [NaN, NaN] : n < 1 ? [e, a[0]] : n >= i ? [a[i - 1], r] : [a[n - 1], a[n]] }, c.unknown = function(t) { return arguments.length ? (n = t, c) : c }, c.thresholds = function() { return a.slice() }, c.copy = function() { return t().domain([e, r]).range(u).unknown(n) }, Vd.apply(fp(c), arguments) }, t.scaleRadial = function t() { var n, e = up(),
            r = [0, 1],
            i = !1;

        function o(t) { var r = Ep(e(t)); return isNaN(r) ? n : i ? Math.round(r) : r } return o.invert = function(t) { return e.invert(Sp(t)) }, o.domain = function(t) { return arguments.length ? (e.domain(t), o) : e.domain() }, o.range = function(t) { return arguments.length ? (e.range((r = Array.from(t, Jd)).map(Sp)), o) : r.slice() }, o.rangeRound = function(t) { return o.range(t).round(!0) }, o.round = function(t) { return arguments.length ? (i = !!t, o) : i }, o.clamp = function(t) { return arguments.length ? (e.clamp(t), o) : e.clamp() }, o.unknown = function(t) { return arguments.length ? (n = t, o) : n }, o.copy = function() { return t(e.domain(), r).round(i).clamp(e.clamp()).unknown(n) }, Vd.apply(o, arguments), fp(o) }, t.scaleSequential = function t() { var n = fp(vv()(np)); return n.copy = function() { return _v(n, t()) }, $d.apply(n, arguments) }, t.scaleSequentialLog = function t() { var n = vp(vv()).domain([1, 10]); return n.copy = function() { return _v(n, t()).base(n.base()) }, $d.apply(n, arguments) }, t.scaleSequentialPow = bv, t.scaleSequentialQuantile = function t() { var e = [],
            r = np;

        function i(t) { if (!isNaN(t = +t)) return r((o(e, t, 1) - 1) / (e.length - 1)) } return i.domain = function(t) { if (!arguments.length) return e.slice();
            e = []; for (let n of t) null == n || isNaN(n = +n) || e.push(n); return e.sort(n), i }, i.interpolator = function(t) { return arguments.length ? (r = t, i) : r }, i.range = function() { return e.map((t, n) => r(n / (e.length - 1))) }, i.quantiles = function(t) { return Array.from({ length: t + 1 }, (n, r) => q(e, r / t)) }, i.copy = function() { return t(r).domain(e) }, $d.apply(i, arguments) }, t.scaleSequentialSqrt = function() { return bv.apply(null, arguments).exponent(.5) }, t.scaleSequentialSymlog = function t() { var n = mp(vv()); return n.copy = function() { return _v(n, t()).constant(n.constant()) }, $d.apply(n, arguments) }, t.scaleSqrt = function() { return Tp.apply(null, arguments).exponent(.5) }, t.scaleSymlog = function t() { var n = mp(ap()); return n.copy = function() { return op(n, t()).constant(n.constant()) }, Vd.apply(n, arguments) }, t.scaleThreshold = function t() { var n, e = [.5],
            r = [0, 1],
            i = 1;

        function a(t) { return t <= t ? r[o(e, t, 0, i)] : n } return a.domain = function(t) { return arguments.length ? (e = Array.from(t), i = Math.min(e.length, r.length - 1), a) : e.slice() }, a.range = function(t) { return arguments.length ? (r = Array.from(t), i = Math.min(e.length, r.length - 1), a) : r.slice() }, a.invertExtent = function(t) { var n = r.indexOf(t); return [e[n - 1], e[n]] }, a.unknown = function(t) { return arguments.length ? (n = t, a) : n }, a.copy = function() { return t().domain(e).range(r).unknown(n) }, Vd.apply(a, arguments) }, t.scaleTime = function() { return Vd.apply(yv(fg, ug, Vp, Hp, Lp, Bp, Up, Pp, t.timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments) }, t.scaleUtc = function() { return Vd.apply(yv(qg, zg, _g, gg, dg, lg, Up, Pp, t.utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments) }, t.scan = function(t, n) { const e = Y(t, n); return e < 0 ? void 0 : e }, t.schemeAccent = Av, t.schemeBlues = w_, t.schemeBrBG = qv, t.schemeBuGn = Qv, t.schemeBuPu = t_, t.schemeCategory10 = Mv, t.schemeDark2 = Tv, t.schemeGnBu = e_, t.schemeGreens = A_, t.schemeGreys = S_, t.schemeOrRd = i_, t.schemeOranges = z_, t.schemePRGn = Fv, t.schemePaired = Sv, t.schemePastel1 = Ev, t.schemePastel2 = kv, t.schemePiYG = Uv, t.schemePuBu = c_, t.schemePuBuGn = a_, t.schemePuOr = Bv, t.schemePuRd = s_, t.schemePurples = k_, t.schemeRdBu = Lv, t.schemeRdGy = Hv, t.schemeRdPu = h_, t.schemeRdYlBu = Gv, t.schemeRdYlGn = $v, t.schemeReds = C_, t.schemeSet1 = Nv, t.schemeSet2 = Cv, t.schemeSet3 = Pv, t.schemeSpectral = Zv, t.schemeTableau10 = zv, t.schemeYlGn = y_, t.schemeYlGnBu = p_, t.schemeYlOrBr = __, t.schemeYlOrRd = m_, t.select = Mn, t.selectAll = function(t) { return "string" == typeof t ? new xn([document.querySelectorAll(t)], [document.documentElement]) : new xn([null == t ? [] : vt(t)], mn) }, t.selection = wn, t.selector = yt, t.selectorAll = bt, t.shuffle = L, t.shuffler = j, t.some = function(t, n) { if ("function" != typeof n) throw new TypeError("test is not a function"); let e = -1; for (const r of t)
            if (n(r, ++e, t)) return !0; return !1 }, t.sort = function(t, e = n) { if ("function" != typeof t[Symbol.iterator]) throw new TypeError("values is not iterable"); return Array.from(t).sort(e) }, t.stack = function() { var t = G_([]),
            n = Dm,
            e = zm,
            r = qm;

        function i(i) { var o, a, u = Array.from(t.apply(this, arguments), Rm),
                c = u.length,
                f = -1; for (const t of i)
                for (o = 0, ++f; o < c; ++o)(u[o][f] = [0, +r(t, u[o].key, f, i)]).data = t; for (o = 0, a = pb(n(u)); o < c; ++o) u[a[o]].index = o; return e(u, a), u } return i.keys = function(n) { return arguments.length ? (t = "function" == typeof n ? n : G_(Array.from(n)), i) : t }, i.value = function(t) { return arguments.length ? (r = "function" == typeof t ? t : G_(+t), i) : r }, i.order = function(t) { return arguments.length ? (n = null == t ? Dm : "function" == typeof t ? t : G_(Array.from(t)), i) : n }, i.offset = function(t) { return arguments.length ? (e = null == t ? zm : t, i) : e }, i }, t.stackOffsetDiverging = function(t, n) { if ((u = t.length) > 0)
            for (var e, r, i, o, a, u, c = 0, f = t[n[0]].length; c < f; ++c)
                for (o = a = 0, e = 0; e < u; ++e)(i = (r = t[n[e]][c])[1] - r[0]) > 0 ? (r[0] = o, r[1] = o += i) : i < 0 ? (r[1] = a, r[0] = a += i) : (r[0] = 0, r[1] = i) }, t.stackOffsetExpand = function(t, n) { if ((r = t.length) > 0) { for (var e, r, i, o = 0, a = t[0].length; o < a; ++o) { for (i = e = 0; e < r; ++e) i += t[e][o][1] || 0; if (i)
                    for (e = 0; e < r; ++e) t[e][o][1] /= i } zm(t, n) } }, t.stackOffsetNone = zm, t.stackOffsetSilhouette = function(t, n) { if ((e = t.length) > 0) { for (var e, r = 0, i = t[n[0]], o = i.length; r < o; ++r) { for (var a = 0, u = 0; a < e; ++a) u += t[a][r][1] || 0;
                i[r][1] += i[r][0] = -u / 2 } zm(t, n) } }, t.stackOffsetWiggle = function(t, n) { if ((i = t.length) > 0 && (r = (e = t[n[0]]).length) > 0) { for (var e, r, i, o = 0, a = 1; a < r; ++a) { for (var u = 0, c = 0, f = 0; u < i; ++u) { for (var s = t[n[u]], l = s[a][1] || 0, h = (l - (s[a - 1][1] || 0)) / 2, d = 0; d < u; ++d) { var p = t[n[d]];
                        h += (p[a][1] || 0) - (p[a - 1][1] || 0) } c += l, f += h * l } e[a - 1][1] += e[a - 1][0] = o, c && (o -= f / c) } e[a - 1][1] += e[a - 1][0] = o, zm(t, n) } }, t.stackOrderAppearance = Fm, t.stackOrderAscending = Um, t.stackOrderDescending = function(t) { return Um(t).reverse() }, t.stackOrderInsideOut = function(t) { var n, e, r = t.length,
            i = t.map(Im),
            o = Fm(t),
            a = 0,
            u = 0,
            c = [],
            f = []; for (n = 0; n < r; ++n) e = o[n], a < u ? (a += i[e], c.push(e)) : (u += i[e], f.push(e)); return f.reverse().concat(c) }, t.stackOrderNone = Dm, t.stackOrderReverse = function(t) { return Dm(t).reverse() }, t.stratify = function() { var t = hd,
            n = dd;

        function e(e) { var r, i, o, a, u, c, f, s = Array.from(e),
                l = s.length,
                h = new Map; for (i = 0; i < l; ++i) r = s[i], u = s[i] = new Bh(r), null != (c = t(r, i, e)) && (c += "") && (f = u.id = c, h.set(f, h.has(f) ? ld : u)), null != (c = n(r, i, e)) && (c += "") && (u.parent = c); for (i = 0; i < l; ++i)
                if (c = (u = s[i]).parent) { if (!(a = h.get(c))) throw new Error("missing: " + c); if (a === ld) throw new Error("ambiguous: " + c);
                    a.children ? a.children.push(u) : a.children = [u], u.parent = a } else { if (o) throw new Error("multiple roots");
                    o = u } if (!o) throw new Error("no root"); if (o.parent = sd, o.eachBefore((function(t) { t.depth = t.parent.depth + 1, --l })).eachBefore(Ih), o.parent = null, l > 0) throw new Error("cycle"); return o } return e.id = function(n) { return arguments.length ? (t = nd(n), e) : t }, e.parentId = function(t) { return arguments.length ? (n = nd(t), e) : n }, e }, t.style = jt, t.subset = function(t, n) { return V(n, t) }, t.sum = function(t, n) { let e = 0; if (void 0 === n)
            for (let n of t)(n = +n) && (e += n);
        else { let r = -1; for (let i of t)(i = +n(i, ++r, t)) && (e += i) } return e }, t.superset = V, t.svg = Eu, t.symbol = function(t, n) { var e = null;

        function r() { var r; if (e || (e = r = Jo()), t.apply(this, arguments).draw(e, +n.apply(this, arguments)), r) return e = null, r + "" || null } return t = "function" == typeof t ? t : G_(t || Fb), n = "function" == typeof n ? n : G_(void 0 === n ? 64 : +n), r.type = function(n) { return arguments.length ? (t = "function" == typeof n ? n : G_(n), r) : t }, r.size = function(t) { return arguments.length ? (n = "function" == typeof t ? t : G_(+t), r) : n }, r.context = function(t) { return arguments.length ? (e = null == t ? null : t, r) : e }, r }, t.symbolCircle = Fb, t.symbolCross = Ob, t.symbolDiamond = Bb, t.symbolSquare = Xb, t.symbolStar = Hb, t.symbolTriangle = Vb, t.symbolWye = Qb, t.symbols = Jb, t.text = bu, t.thresholdFreedmanDiaconis = function(t, n, e) { return Math.ceil((e - n) / (2 * (q(t, .75) - q(t, .25)) * Math.pow(c(t), -1 / 3))) }, t.thresholdScott = function(t, n, e) { return Math.ceil((e - n) / (3.5 * d(t) * Math.pow(c(t), -1 / 3))) }, t.thresholdSturges = k, t.tickFormat = cp, t.tickIncrement = T, t.tickStep = S, t.ticks = A, t.timeDay = Hp, t.timeDays = Xp, t.timeFormatDefaultLocale = iv, t.timeFormatLocale = Ig, t.timeFriday = Qp, t.timeFridays = og, t.timeHour = Lp, t.timeHours = jp, t.timeInterval = Cp, t.timeMillisecond = Pp, t.timeMilliseconds = zp, t.timeMinute = Bp, t.timeMinutes = Yp, t.timeMonday = $p, t.timeMondays = ng, t.timeMonth = ug, t.timeMonths = cg, t.timeSaturday = Jp, t.timeSaturdays = ag, t.timeSecond = Up, t.timeSeconds = Ip, t.timeSunday = Vp, t.timeSundays = tg, t.timeThursday = Kp, t.timeThursdays = ig, t.timeTuesday = Wp, t.timeTuesdays = eg, t.timeWednesday = Zp, t.timeWednesdays = rg, t.timeWeek = Vp, t.timeWeeks = tg, t.timeYear = fg, t.timeYears = sg, t.timeout = Qr, t.timer = Vr, t.timerFlush = $r, t.transition = qi, t.transpose = H, t.tree = function() { var t = pd,
            n = 1,
            e = 1,
            r = null;

        function i(i) { var c = function(t) { for (var n, e, r, i, o, a = new bd(t, 0), u = [a]; n = u.pop();)
                    if (r = n._.children)
                        for (n.children = new Array(o = r.length), i = o - 1; i >= 0; --i) u.push(e = n.children[i] = new bd(r[i], i)), e.parent = n; return (a.parent = new bd(null, 0)).children = [a], a }(i); if (c.eachAfter(o), c.parent.m = -c.z, c.eachBefore(a), r) i.eachBefore(u);
            else { var f = i,
                    s = i,
                    l = i;
                i.eachBefore((function(t) { t.x < f.x && (f = t), t.x > s.x && (s = t), t.depth > l.depth && (l = t) })); var h = f === s ? 1 : t(f, s) / 2,
                    d = h - f.x,
                    p = n / (s.x + h + d),
                    g = e / (l.depth || 1);
                i.eachBefore((function(t) { t.x = (t.x + d) * p, t.y = t.depth * g })) } return i }

        function o(n) { var e = n.children,
                r = n.parent.children,
                i = n.i ? r[n.i - 1] : null; if (e) {! function(t) { for (var n, e = 0, r = 0, i = t.children, o = i.length; --o >= 0;)(n = i[o]).z += e, n.m += e, e += n.s + (r += n.c) }(n); var o = (e[0].z + e[e.length - 1].z) / 2;
                i ? (n.z = i.z + t(n._, i._), n.m = n.z - o) : n.z = o } else i && (n.z = i.z + t(n._, i._));
            n.parent.A = function(n, e, r) { if (e) { for (var i, o = n, a = n, u = e, c = o.parent.children[0], f = o.m, s = a.m, l = u.m, h = c.m; u = yd(u), o = gd(o), u && o;) c = gd(c), (a = yd(a)).a = n, (i = u.z + l - o.z - f + t(u._, o._)) > 0 && (vd(_d(u, n, r), n, i), f += i, s += i), l += u.m, f += o.m, h += c.m, s += a.m;
                    u && !yd(a) && (a.t = u, a.m += l - s), o && !gd(c) && (c.t = o, c.m += f - h, r = n) } return r }(n, i, n.parent.A || r[0]) }

        function a(t) { t._.x = t.z + t.parent.m, t.m += t.parent.m }

        function u(t) { t.x *= n, t.y = t.depth * e } return i.separation = function(n) { return arguments.length ? (t = n, i) : t }, i.size = function(t) { return arguments.length ? (r = !1, n = +t[0], e = +t[1], i) : r ? null : [n, e] }, i.nodeSize = function(t) { return arguments.length ? (r = !0, n = +t[0], e = +t[1], i) : r ? [n, e] : null }, i }, t.treemap = function() { var t = Md,
            n = !1,
            e = 1,
            r = 1,
            i = [0],
            o = ed,
            a = ed,
            u = ed,
            c = ed,
            f = ed;

        function s(t) { return t.x0 = t.y0 = 0, t.x1 = e, t.y1 = r, t.eachBefore(l), i = [0], n && t.eachBefore(cd), t }

        function l(n) { var e = i[n.depth],
                r = n.x0 + e,
                s = n.y0 + e,
                l = n.x1 - e,
                h = n.y1 - e;
            l < r && (r = l = (r + l) / 2), h < s && (s = h = (s + h) / 2), n.x0 = r, n.y0 = s, n.x1 = l, n.y1 = h, n.children && (e = i[n.depth + 1] = o(n) / 2, r += f(n) - e, s += a(n) - e, (l -= u(n) - e) < r && (r = l = (r + l) / 2), (h -= c(n) - e) < s && (s = h = (s + h) / 2), t(n, r, s, l, h)) } return s.round = function(t) { return arguments.length ? (n = !!t, s) : n }, s.size = function(t) { return arguments.length ? (e = +t[0], r = +t[1], s) : [e, r] }, s.tile = function(n) { return arguments.length ? (t = nd(n), s) : t }, s.padding = function(t) { return arguments.length ? s.paddingInner(t).paddingOuter(t) : s.paddingInner() }, s.paddingInner = function(t) { return arguments.length ? (o = "function" == typeof t ? t : rd(+t), s) : o }, s.paddingOuter = function(t) { return arguments.length ? s.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t) : s.paddingTop() }, s.paddingTop = function(t) { return arguments.length ? (a = "function" == typeof t ? t : rd(+t), s) : a }, s.paddingRight = function(t) { return arguments.length ? (u = "function" == typeof t ? t : rd(+t), s) : u }, s.paddingBottom = function(t) { return arguments.length ? (c = "function" == typeof t ? t : rd(+t), s) : c }, s.paddingLeft = function(t) { return arguments.length ? (f = "function" == typeof t ? t : rd(+t), s) : f }, s }, t.treemapBinary = function(t, n, e, r, i) { var o, a, u = t.children,
            c = u.length,
            f = new Array(c + 1); for (f[0] = a = o = 0; o < c; ++o) f[o + 1] = a += u[o].value;! function t(n, e, r, i, o, a, c) { if (n >= e - 1) { var s = u[n]; return s.x0 = i, s.y0 = o, s.x1 = a, void(s.y1 = c) } var l = f[n],
                h = r / 2 + l,
                d = n + 1,
                p = e - 1; for (; d < p;) { var g = d + p >>> 1;
                f[g] < h ? d = g + 1 : p = g } h - f[d - 1] < f[d] - h && n + 1 < d && --d; var y = f[d] - l,
                v = r - y; if (a - i > c - o) { var _ = r ? (i * v + a * y) / r : a;
                t(n, d, y, i, o, _, c), t(d, e, v, _, o, a, c) } else { var b = r ? (o * v + c * y) / r : c;
                t(n, d, y, i, o, a, b), t(d, e, v, i, b, a, c) } }(0, c, t.value, n, e, r, i) }, t.treemapDice = fd, t.treemapResquarify = Ad, t.treemapSlice = md, t.treemapSliceDice = function(t, n, e, r, i) {
        (1 & t.depth ? md : fd)(t, n, e, r, i) }, t.treemapSquarify = Md, t.tsv = wu, t.tsvFormat = su, t.tsvFormatBody = lu, t.tsvFormatRow = du, t.tsvFormatRows = hu, t.tsvFormatValue = pu, t.tsvParse = cu, t.tsvParseRows = fu, t.union = function(...t) { const n = new Set; for (const e of t)
            for (const t of e) n.add(t); return n }, t.utcDay = gg, t.utcDays = yg, t.utcFriday = Mg, t.utcFridays = Cg, t.utcHour = dg, t.utcHours = pg, t.utcMillisecond = Pp, t.utcMilliseconds = zp, t.utcMinute = lg, t.utcMinutes = hg, t.utcMonday = bg, t.utcMondays = Sg, t.utcMonth = zg, t.utcMonths = Dg, t.utcSaturday = Ag, t.utcSaturdays = Pg, t.utcSecond = Up, t.utcSeconds = Ip, t.utcSunday = _g, t.utcSundays = Tg, t.utcThursday = wg, t.utcThursdays = Ng, t.utcTuesday = mg, t.utcTuesdays = Eg, t.utcWednesday = xg, t.utcWednesdays = kg, t.utcWeek = _g, t.utcWeeks = Tg, t.utcYear = qg, t.utcYears = Rg, t.variance = h, t.version = "6.2.0", t.window = It, t.xml = Tu, t.zip = function() { return H(arguments) }, t.zoom = function() { var t, n, e, r = Vm,
            i = $m,
            o = Qm,
            a = Zm,
            u = Km,
            c = [0, 1 / 0],
            f = [
                [-1 / 0, -1 / 0],
                [1 / 0, 1 / 0]
            ],
            s = 250,
            l = Mr,
            h = it("start", "zoom", "end"),
            d = 500,
            p = 0,
            g = 10;

        function y(t) { t.property("__zoom", Wm).on("wheel.zoom", M).on("mousedown.zoom", A).on("dblclick.zoom", T).filter(u).on("touchstart.zoom", S).on("touchmove.zoom", E).on("touchend.zoom touchcancel.zoom", k).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)") }

        function v(t, n) { return (n = Math.max(c[0], Math.min(c[1], n))) === t.k ? t : new Lm(n, t.x, t.y) }

        function _(t, n, e) { var r = n[0] - e[0] * t.k,
                i = n[1] - e[1] * t.k; return r === t.x && i === t.y ? t : new Lm(t.k, r, i) }

        function b(t) { return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2] }

        function m(t, n, e, r) { t.on("start.zoom", (function() { x(this, arguments).event(r).start() })).on("interrupt.zoom end.zoom", (function() { x(this, arguments).event(r).end() })).tween("zoom", (function() { var t = this,
                    o = arguments,
                    a = x(t, o).event(r),
                    u = i.apply(t, o),
                    c = null == e ? b(u) : "function" == typeof e ? e.apply(t, o) : e,
                    f = Math.max(u[1][0] - u[0][0], u[1][1] - u[0][1]),
                    s = t.__zoom,
                    h = "function" == typeof n ? n.apply(t, o) : n,
                    d = l(s.invert(c).concat(f / s.k), h.invert(c).concat(f / h.k)); return function(t) { if (1 === t) t = h;
                    else { var n = d(t),
                            e = f / n[2];
                        t = new Lm(e, c[0] - n[0] * e, c[1] - n[1] * e) } a.zoom(null, t) } })) }

        function x(t, n, e) { return !e && t.__zooming || new w(t, n) }

        function w(t, n) { this.that = t, this.args = n, this.active = 0, this.sourceEvent = null, this.extent = i.apply(t, n), this.taps = 0 }

        function M(t, ...n) { if (r.apply(this, arguments)) { var e = x(this, n).event(t),
                    i = this.__zoom,
                    u = Math.max(c[0], Math.min(c[1], i.k * Math.pow(2, a.apply(this, arguments)))),
                    s = kn(t); if (e.wheel) e.mouse[0][0] === s[0] && e.mouse[0][1] === s[1] || (e.mouse[1] = i.invert(e.mouse[0] = s)), clearTimeout(e.wheel);
                else { if (i.k === u) return;
                    e.mouse = [s, i.invert(s)], oi(this), e.start() } Gm(t), e.wheel = setTimeout(l, 150), e.zoom("mouse", o(_(v(i, u), e.mouse[0], e.mouse[1]), e.extent, f)) }

            function l() { e.wheel = null, e.end() } }

        function A(t, ...n) { if (!e && r.apply(this, arguments)) { var i = x(this, n, !0).event(t),
                    a = Mn(t.view).on("mousemove.zoom", h, !0).on("mouseup.zoom", d, !0),
                    u = kn(t, c),
                    c = t.currentTarget,
                    s = t.clientX,
                    l = t.clientY;
                Pn(t.view), Xm(t), i.mouse = [u, this.__zoom.invert(u)], oi(this), i.start() }

            function h(t) { if (Gm(t), !i.moved) { var n = t.clientX - s,
                        e = t.clientY - l;
                    i.moved = n * n + e * e > p } i.event(t).zoom("mouse", o(_(i.that.__zoom, i.mouse[0] = kn(t, c), i.mouse[1]), i.extent, f)) }

            function d(t) { a.on("mousemove.zoom mouseup.zoom", null), zn(t.view, i.moved), Gm(t), i.event(t).end() } }

        function T(t, ...n) { if (r.apply(this, arguments)) { var e = this.__zoom,
                    a = kn(t.changedTouches ? t.changedTouches[0] : t, this),
                    u = e.invert(a),
                    c = e.k * (t.shiftKey ? .5 : 2),
                    l = o(_(v(e, c), a, u), i.apply(this, n), f);
                Gm(t), s > 0 ? Mn(this).transition().duration(s).call(m, l, a, t) : Mn(this).call(y.transform, l, a, t) } }

        function S(e, ...i) { if (r.apply(this, arguments)) { var o, a, u, c, f = e.touches,
                    s = f.length,
                    l = x(this, i, e.changedTouches.length === s).event(e); for (Xm(e), a = 0; a < s; ++a) c = [c = kn(u = f[a], this), this.__zoom.invert(c), u.identifier], l.touch0 ? l.touch1 || l.touch0[2] === c[2] || (l.touch1 = c, l.taps = 0) : (l.touch0 = c, o = !0, l.taps = 1 + !!t);
                t && (t = clearTimeout(t)), o && (l.taps < 2 && (n = c[0], t = setTimeout((function() { t = null }), d)), oi(this), l.start()) } }

        function E(t, ...n) { if (this.__zooming) { var e, r, i, a, u = x(this, n).event(t),
                    c = t.changedTouches,
                    s = c.length; for (Gm(t), e = 0; e < s; ++e) i = kn(r = c[e], this), u.touch0 && u.touch0[2] === r.identifier ? u.touch0[0] = i : u.touch1 && u.touch1[2] === r.identifier && (u.touch1[0] = i); if (r = u.that.__zoom, u.touch1) { var l = u.touch0[0],
                        h = u.touch0[1],
                        d = u.touch1[0],
                        p = u.touch1[1],
                        g = (g = d[0] - l[0]) * g + (g = d[1] - l[1]) * g,
                        y = (y = p[0] - h[0]) * y + (y = p[1] - h[1]) * y;
                    r = v(r, Math.sqrt(g / y)), i = [(l[0] + d[0]) / 2, (l[1] + d[1]) / 2], a = [(h[0] + p[0]) / 2, (h[1] + p[1]) / 2] } else { if (!u.touch0) return;
                    i = u.touch0[0], a = u.touch0[1] } u.zoom("touch", o(_(r, i, a), u.extent, f)) } }

        function k(t, ...r) { if (this.__zooming) { var i, o, a = x(this, r).event(t),
                    u = t.changedTouches,
                    c = u.length; for (Xm(t), e && clearTimeout(e), e = setTimeout((function() { e = null }), d), i = 0; i < c; ++i) o = u[i], a.touch0 && a.touch0[2] === o.identifier ? delete a.touch0 : a.touch1 && a.touch1[2] === o.identifier && delete a.touch1; if (a.touch1 && !a.touch0 && (a.touch0 = a.touch1, delete a.touch1), a.touch0) a.touch0[1] = this.__zoom.invert(a.touch0[0]);
                else if (a.end(), 2 === a.taps && (o = kn(o, this), Math.hypot(n[0] - o[0], n[1] - o[1]) < g)) { var f = Mn(this).on("dblclick.zoom");
                    f && f.apply(this, arguments) } } } return y.transform = function(t, n, e, r) { var i = t.selection ? t.selection() : t;
            i.property("__zoom", Wm), t !== i ? m(t, n, e, r) : i.interrupt().each((function() { x(this, arguments).event(r).start().zoom(null, "function" == typeof n ? n.apply(this, arguments) : n).end() })) }, y.scaleBy = function(t, n, e, r) { y.scaleTo(t, (function() { var t = this.__zoom.k,
                    e = "function" == typeof n ? n.apply(this, arguments) : n; return t * e }), e, r) }, y.scaleTo = function(t, n, e, r) { y.transform(t, (function() { var t = i.apply(this, arguments),
                    r = this.__zoom,
                    a = null == e ? b(t) : "function" == typeof e ? e.apply(this, arguments) : e,
                    u = r.invert(a),
                    c = "function" == typeof n ? n.apply(this, arguments) : n; return o(_(v(r, c), a, u), t, f) }), e, r) }, y.translateBy = function(t, n, e, r) { y.transform(t, (function() { return o(this.__zoom.translate("function" == typeof n ? n.apply(this, arguments) : n, "function" == typeof e ? e.apply(this, arguments) : e), i.apply(this, arguments), f) }), null, r) }, y.translateTo = function(t, n, e, r, a) { y.transform(t, (function() { var t = i.apply(this, arguments),
                    a = this.__zoom,
                    u = null == r ? b(t) : "function" == typeof r ? r.apply(this, arguments) : r; return o(jm.translate(u[0], u[1]).scale(a.k).translate("function" == typeof n ? -n.apply(this, arguments) : -n, "function" == typeof e ? -e.apply(this, arguments) : -e), t, f) }), r, a) }, w.prototype = { event: function(t) { return t && (this.sourceEvent = t), this }, start: function() { return 1 == ++this.active && (this.that.__zooming = this, this.emit("start")), this }, zoom: function(t, n) { return this.mouse && "mouse" !== t && (this.mouse[1] = n.invert(this.mouse[0])), this.touch0 && "touch" !== t && (this.touch0[1] = n.invert(this.touch0[0])), this.touch1 && "touch" !== t && (this.touch1[1] = n.invert(this.touch1[0])), this.that.__zoom = n, this.emit("zoom"), this }, end: function() { return 0 == --this.active && (delete this.that.__zooming, this.emit("end")), this }, emit: function(t) { var n = Mn(this.that).datum();
                h.call(t, this.that, new Ym(t, { sourceEvent: this.sourceEvent, target: y, type: t, transform: this.that.__zoom, dispatch: h }), n) } }, y.wheelDelta = function(t) { return arguments.length ? (a = "function" == typeof t ? t : Bm(+t), y) : a }, y.filter = function(t) { return arguments.length ? (r = "function" == typeof t ? t : Bm(!!t), y) : r }, y.touchable = function(t) { return arguments.length ? (u = "function" == typeof t ? t : Bm(!!t), y) : u }, y.extent = function(t) { return arguments.length ? (i = "function" == typeof t ? t : Bm([
                [+t[0][0], +t[0][1]],
                [+t[1][0], +t[1][1]]
            ]), y) : i }, y.scaleExtent = function(t) { return arguments.length ? (c[0] = +t[0], c[1] = +t[1], y) : [c[0], c[1]] }, y.translateExtent = function(t) { return arguments.length ? (f[0][0] = +t[0][0], f[1][0] = +t[1][0], f[0][1] = +t[0][1], f[1][1] = +t[1][1], y) : [
                [f[0][0], f[0][1]],
                [f[1][0], f[1][1]]
            ] }, y.constrain = function(t) { return arguments.length ? (o = t, y) : o }, y.duration = function(t) { return arguments.length ? (s = +t, y) : s }, y.interpolate = function(t) { return arguments.length ? (l = t, y) : l }, y.on = function() { var t = h.on.apply(h, arguments); return t === h ? y : t }, y.clickDistance = function(t) { return arguments.length ? (p = (t = +t) * t, y) : Math.sqrt(p) }, y.tapDistance = function(t) { return arguments.length ? (g = +t, y) : g }, y }, t.zoomIdentity = jm, t.zoomTransform = Hm, Object.defineProperty(t, "__esModule", { value: !0 }) }));