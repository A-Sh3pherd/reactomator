"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var ProtectedRoute = function (_a) {
    var Component = _a.Component, RedirectTo = _a.RedirectTo, condition = _a.condition, rest = __rest(_a, ["Component", "RedirectTo", "condition"]);
    return (jsx_runtime_1.jsx(react_router_dom_1.Route, __assign({}, rest, { render: function (props) {
            if (condition) {
                return jsx_runtime_1.jsx(Component, {}, void 0);
            }
            else {
                return jsx_runtime_1.jsx(react_router_dom_1.Redirect, { to: {
                        pathname: RedirectTo,
                        state: {
                            from: props.location
                        }
                    } }, void 0);
            }
        } }), void 0));
};
exports.default = ProtectedRoute;
//# sourceMappingURL=ProtectedRoute.js.map