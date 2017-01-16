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
var router_1 = require('@angular/router');
var products_service_1 = require('../../services/products.service');
var NewProductComponent = (function () {
    function NewProductComponent(productService, router) {
        this.productService = productService;
        this.router = router;
    }
    NewProductComponent.prototype.addProduct = function (event) {
        var _this = this;
        event.preventDefault();
        var newProduct = {
            name: this.name,
            description: this.description,
            price: this.price
        };
        this.productService.addProduct(newProduct)
            .subscribe(function (data) {
            _this.router.navigate(['/products']);
        });
    };
    NewProductComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'newproduct',
            templateUrl: 'newproduct.component.html',
            providers: [products_service_1.ProductService]
        }), 
        __metadata('design:paramtypes', [products_service_1.ProductService, router_1.Router])
    ], NewProductComponent);
    return NewProductComponent;
}());
exports.NewProductComponent = NewProductComponent;
//# sourceMappingURL=newproduct.component.js.map