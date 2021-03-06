"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var services_barrel_1 = require('./services.barrel');
var ParameterResolve = (function () {
    function ParameterResolve(ps) {
        this.ps = ps;
        console.log('in ParameterResolve');
    }
    ParameterResolve.prototype.resolve = function () {
        console.log('inside ParameterResolve');
    };
    ParameterResolve = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [services_barrel_1.ParameterService])
    ], ParameterResolve);
    return ParameterResolve;
}());
exports.ParameterResolve = ParameterResolve;
//# sourceMappingURL=parameter-resolve.service.js.map