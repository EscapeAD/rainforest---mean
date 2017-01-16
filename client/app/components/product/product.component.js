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
require('rxjs/add/operator/switchMap');
var products_service_1 = require('../../services/products.service');
var ProductComponent = (function () {
    function ProductComponent(router, productService, route) {
        this.router = router;
        this.productService = productService;
        this.route = route;
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.productService.getProduct(params['id']); })
            .subscribe(function (product) {
            console.log(product);
            _this.product = product;
        });
    };
    ProductComponent.prototype.goHome = function () {
        this.router.navigate(['/products']);
    };
    ProductComponent.prototype.goDelete = function (id) {
        var _this = this;
        this.productService.goDelete(id)
            .subscribe(function (data) {
            _this.router.navigate(['/products']);
        });
    };
    ProductComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'product',
            templateUrl: 'product.component.html',
            providers: [products_service_1.ProductService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, products_service_1.ProductService, router_1.ActivatedRoute])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map