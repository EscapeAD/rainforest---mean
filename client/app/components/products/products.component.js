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
var ProductsComponent = (function () {
    function ProductsComponent(productService, router) {
        this.productService = productService;
        this.router = router;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts()
            .subscribe(function (products) {
            _this.products = products;
            _this.resets = products;
            console.log(products);
        });
    };
    ProductsComponent.prototype.goProduct = function (id) {
        this.router.navigate(['/products', id]);
    };
    ProductsComponent.prototype.filterSearch = function (searchQ) {
        var search = this.search;
        if (search.trim() != '' && search) {
            this.products = this.products.filter(function (product) {
                return (product['name'].toLowerCase().indexOf(search.toLowerCase()) > -1);
            });
        }
        else {
            this.products = this.resets;
        }
    };
    ProductsComponent.prototype.resetSearch = function () {
        this.products = this.resets;
    };
    ProductsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'products',
            templateUrl: 'products.component.html',
            providers: [products_service_1.ProductService]
        }), 
        __metadata('design:paramtypes', [products_service_1.ProductService, router_1.Router])
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=products.component.js.map