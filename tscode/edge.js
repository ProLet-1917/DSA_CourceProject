"use strict";
exports.__esModule = true;
exports.Edge = void 0;
var Edge = /** @class */ (function () {
    function Edge(from, to, weight, hasWeight) {
        if (hasWeight === void 0) { hasWeight = true; }
        this.hasWeight = hasWeight;
        this.next = undefined;
        this.weight = Number.MAX_SAFE_INTEGER;
        this.from = from;
        this.to = to;
        this.weight = weight;
    }
    ;
    return Edge;
}());
exports.Edge = Edge;
