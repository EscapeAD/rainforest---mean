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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var app_routing_module_1 = require('./app-routing.module');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var products_component_1 = require('./components/products/products.component');
var login_component_1 = require('./components/login/login.component');
var product_component_1 = require('./components/product/product.component');
var newproduct_component_1 = require('./components/newproduct/newproduct.component');
var nav_component_1 = require('./components/navbar/nav.component');
var alert_component_1 = require('./components/alert/alert.component');
var register_component_1 = require('./components/register/register.component');
var auth_service_1 = require('./services/auth.service');
var alert_service_1 = require('./services/alert.service');
var user_service_1 = require('./services/user.service');
var products_service_1 = require('./services/products.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, router_1.RouterModule, app_routing_module_1.AppRoutingModule, http_1.HttpModule, forms_1.FormsModule],
            declarations: [app_component_1.AppComponent, products_component_1.ProductsComponent, nav_component_1.NavComponent, product_component_1.ProductComponent, newproduct_component_1.NewProductComponent, login_component_1.LoginComponent, alert_component_1.AlertComponent, register_component_1.RegisterComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [auth_service_1.AuthenticationService, alert_service_1.AlertService, user_service_1.UserService, products_service_1.ProductService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map