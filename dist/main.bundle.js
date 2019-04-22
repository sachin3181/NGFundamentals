webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/user/user.module": [
		"./src/app/user/user.module.ts",
		"user.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* unused harmony export checkDirtyState */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_index__ = __webpack_require__("./src/app/events/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__events_app_component__ = __webpack_require__("./src/app/events-app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nav_nav_bar_component__ = __webpack_require__("./src/app/nav/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_index__ = __webpack_require__("./src/app/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes__ = __webpack_require__("./src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__errors_404_component__ = __webpack_require__("./src/app/errors/404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_auth_service__ = __webpack_require__("./src/app/user/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_modalTrigger_directive__ = __webpack_require__("./src/app/common/modalTrigger.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var toastr = window['toastr'];
var jQuery = window['$'];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__routes__["a" /* appRoutes */])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__events_app_component__["a" /* EventsAppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__events_index__["i" /* EventsListComponent */],
                __WEBPACK_IMPORTED_MODULE_4__events_index__["h" /* EventThumbnailComponent */],
                __WEBPACK_IMPORTED_MODULE_4__events_index__["d" /* EventDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__nav_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_4__events_index__["a" /* CreateEventComponent */],
                __WEBPACK_IMPORTED_MODULE_9__errors_404_component__["a" /* Error404Component */],
                __WEBPACK_IMPORTED_MODULE_4__events_index__["b" /* CreateSessionComponent */],
                __WEBPACK_IMPORTED_MODULE_4__events_index__["k" /* SessionListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__common_index__["a" /* CollapsibleWellComponent */],
                __WEBPACK_IMPORTED_MODULE_7__common_index__["c" /* SimpleModalComponent */],
                __WEBPACK_IMPORTED_MODULE_11__common_modalTrigger_directive__["a" /* ModalTriggerDirective */],
                __WEBPACK_IMPORTED_MODULE_4__events_index__["j" /* LocationValidator */],
                __WEBPACK_IMPORTED_MODULE_4__events_index__["c" /* DurationPipe */],
                __WEBPACK_IMPORTED_MODULE_4__events_index__["l" /* UpvoteComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__events_index__["g" /* EventService */],
                { provide: __WEBPACK_IMPORTED_MODULE_7__common_index__["d" /* TOASTR_TOKEN */], useValue: toastr },
                { provide: __WEBPACK_IMPORTED_MODULE_7__common_index__["b" /* JQ_TOKEN */], useValue: jQuery },
                __WEBPACK_IMPORTED_MODULE_4__events_index__["f" /* EventResolver */],
                __WEBPACK_IMPORTED_MODULE_4__events_index__["m" /* VoterService */],
                __WEBPACK_IMPORTED_MODULE_4__events_index__["e" /* EventListResolver */],
                __WEBPACK_IMPORTED_MODULE_10__user_auth_service__["a" /* AuthService */],
                {
                    provide: 'canDeactivateCreateEvent',
                    useValue: checkDirtyState
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__events_app_component__["a" /* EventsAppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

function checkDirtyState(component) {
    if (component.isDirty) {
        return window.confirm('You have not saved this event, do you really want to cancel?');
    }
    return true;
}


/***/ }),

/***/ "./src/app/common/collapsible-well.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollapsibleWellComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CollapsibleWellComponent = /** @class */ (function () {
    function CollapsibleWellComponent() {
        this.visible = true;
    }
    CollapsibleWellComponent.prototype.toggleContent = function () {
        this.visible = !this.visible;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], CollapsibleWellComponent.prototype, "title", void 0);
    CollapsibleWellComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'collapsible-well',
            template: "\n  <div (click)=\"toggleContent()\" class=\"well pointable\">\n    <h4>\n      <ng-content select=\"[well-title]\"></ng-content>\n    </h4>\n    <ng-content *ngIf=\"visible\" select=\"[well-body]\"></ng-content>\n  </div>\n  "
        })
    ], CollapsibleWellComponent);
    return CollapsibleWellComponent;
}());



/***/ }),

/***/ "./src/app/common/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jQuery_service__ = __webpack_require__("./src/app/common/jQuery.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__jQuery_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toastr_service__ = __webpack_require__("./src/app/common/toastr.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__toastr_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collapsible_well_component__ = __webpack_require__("./src/app/common/collapsible-well.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__collapsible_well_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__simpleModal_component__ = __webpack_require__("./src/app/common/simpleModal.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__simpleModal_component__["a"]; });






/***/ }),

/***/ "./src/app/common/jQuery.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JQ_TOKEN; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var JQ_TOKEN = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* InjectionToken */]('jQuery');


/***/ }),

/***/ "./src/app/common/modalTrigger.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalTriggerDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__("./src/app/common/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ModalTriggerDirective = /** @class */ (function () {
    function ModalTriggerDirective(ref, $) {
        this.$ = $;
        this.el = ref.nativeElement;
    }
    ModalTriggerDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.el.addEventListener('click', function (e) {
            _this.$("#" + _this.modalId).modal({});
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('modal-trigger'),
        __metadata("design:type", String)
    ], ModalTriggerDirective.prototype, "modalId", void 0);
    ModalTriggerDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[modal-trigger]'
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__index__["b" /* JQ_TOKEN */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], Object])
    ], ModalTriggerDirective);
    return ModalTriggerDirective;
}());



/***/ }),

/***/ "./src/app/common/simpleModal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__("./src/app/common/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var SimpleModalComponent = /** @class */ (function () {
    function SimpleModalComponent($) {
        this.$ = $;
    }
    SimpleModalComponent.prototype.closeModal = function () {
        if (this.closeOnBodyClick.toLocaleLowerCase() === 'true') {
            console.log(this.$);
            this.$(this.containerEl.nativeElement).modal('hide');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SimpleModalComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SimpleModalComponent.prototype, "elementId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SimpleModalComponent.prototype, "closeOnBodyClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('modalcontainer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], SimpleModalComponent.prototype, "containerEl", void 0);
    SimpleModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'simple-modal',
            template: "\n  <div id=\"{{elementId}}\" #modalcontainer class=\"modal fade\" tabindex=\"-1\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span>&times;</span></button>\n          <h4 class=\"modal-title\">{{title}}</h4>\n        </div>\n        <div class=\"modal-body\" (click)=\"closeModal()\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n    </div>\n  </div>\n  ",
            styles: ["\n    .modal-body { height: 250px; overflow-y: scroll; }\n  "]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__index__["b" /* JQ_TOKEN */])),
        __metadata("design:paramtypes", [Object])
    ], SimpleModalComponent);
    return SimpleModalComponent;
}());



/***/ }),

/***/ "./src/app/common/toastr.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TOASTR_TOKEN; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var TOASTR_TOKEN = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* InjectionToken */]('toastr');


/***/ }),

/***/ "./src/app/errors/404.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error404Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Error404Component = /** @class */ (function () {
    function Error404Component() {
    }
    Error404Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n    <h1 class=\"errorMessage\">404'd</h1>\n  ",
            styles: ["\n    .errorMessage {\n      margin-top:150px;\n      font-size: 170px;\n      text-align: center;\n    }"]
        }),
        __metadata("design:paramtypes", [])
    ], Error404Component);
    return Error404Component;
}());



/***/ }),

/***/ "./src/app/events-app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsAppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_auth_service__ = __webpack_require__("./src/app/user/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventsAppComponent = /** @class */ (function () {
    function EventsAppComponent(auth) {
        this.auth = auth;
        this.title = 'app';
    }
    EventsAppComponent.prototype.ngOnInit = function () {
        this.auth.CheckAuthStatus();
    };
    EventsAppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'events-app',
            template: "\n    <nav-bar></nav-bar>\n    <router-outlet></router-outlet>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_auth_service__["a" /* AuthService */]])
    ], EventsAppComponent);
    return EventsAppComponent;
}());



/***/ }),

/***/ "./src/app/events/create-event.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>New Event</h1>\r\n<hr>\r\n<div class=\"col-md-6\">\r\n  <form #newEventForm=\"ngForm\" (ngSubmit)=\"saveEvent(newEventForm.value)\" autocomplete=\"off\" novalidate>\r\n    <div class=\"form-group\"\r\n      [ngClass]=\"{'error': newEventForm.controls.name?.invalid && newEventForm.controls.name?.touched}\">\r\n      <label for=\"eventName\">Event Name:</label>\r\n      <em *ngIf=\"newEventForm.controls.name?.invalid && (newEventForm.controls.name?.touched)\">Required</em>\r\n      <input (ngModel)=\"newEvent.name\" name=\"name\" required id=\"name\" type=\"text\" class=\"form-control\"\r\n        placeholder=\"Name of your event...\" />\r\n    </div>\r\n    <div class=\"form-group\"\r\n      [ngClass]=\"{'error': newEventForm.controls.date?.invalid && newEventForm.controls.date?.touched}\">\r\n      <label for=\"eventDate\">Event Date:</label>\r\n      <em *ngIf=\"newEventForm.controls.date?.invalid && (newEventForm.controls.date?.touched)\">Required</em>\r\n      <input (ngModel)=\"newEvent.date\" name=\"date\" required id=\"eventDate\" type=\"text\" class=\"form-control\"\r\n        placeholder=\"format (mm/dd/yyyy)...\" />\r\n    </div>\r\n    <div class=\"form-group\"\r\n      [ngClass]=\"{'error': newEventForm.controls.time?.invalid && newEventForm.controls.time?.touched}\">\r\n      <label for=\"eventTime\">Event Time:</label>\r\n      <em *ngIf=\"newEventForm.controls.time?.invalid && (newEventForm.controls.time?.touched)\">Required</em>\r\n      <input (ngModel)=\"newEvent.time\" name=\"time\" required id=\"eventTime\" type=\"text\" class=\"form-control\"\r\n        placeholder=\"start and end time...\" />\r\n    </div>\r\n    <div class=\"form-group\"\r\n      [ngClass]=\"{'error': newEventForm.controls.price?.invalid && newEventForm.controls.price?.touched}\">\r\n      <label for=\"eventPrice\">Event Price:</label>\r\n      <em *ngIf=\"newEventForm.controls.price?.invalid && (newEventForm.controls.price?.touched)\">Required</em>\r\n      <input (ngModel)=\"newEvent.price\" name=\"price\" required id=\"eventPrice\" type=\"text\" type=\"number\"\r\n        class=\"form-control\" placeholder=\"event price...\" />\r\n    </div>\r\n\r\n    <div ngModelGroup=\"location\" #locationGroup=\"ngModelGroup\" validateLocation>\r\n      <div class=\"form-group\">\r\n        <label for=\"address\">Event Location:</label>\r\n        <em *ngIf=\"locationGroup?.invalid && locationGroup?.touched\">You must enter either the full location OR an\r\n          online Url</em>\r\n        <input (ngModel)=\"newEvent.address\" name=\"address\" id=\"address\" type=\"text\" class=\"form-control\"\r\n          placeholder=\"Address of event...\" />\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <input (ngModel)=\"newEvent.city\" name=\"city\" id=\"city\" type=\"text\" class=\"form-control\"\r\n            placeholder=\"City...\" />\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <input (ngModel)=\"newEvent.country\" name=\"country\" id=\"country\" type=\"text\" class=\"form-control\"\r\n            placeholder=\"Country...\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"onlineUrl\">Online Url:</label>\r\n      <input (ngModel)=\"newEvent.onlineUrl\" name=\"onlineUrl\" id=\"onlineUrl\" type=\"text\" class=\"form-control\"\r\n        (change)=\"locationGroup.control.controls.address.updateValueAndValidity()\" placeholder=\"Online Url...\" />\r\n    </div>\r\n    <div class=\"form-group\"\r\n      [ngClass]=\"{'error': newEventForm.controls.imageUrl?.invalid && newEventForm.controls.imageUrl?.touched}\">\r\n      <label for=\"imageUrl\">Image:</label>\r\n      <em\r\n        *ngIf=\"newEventForm.controls.imageUrl?.invalid && newEventForm.controls.imageUrl?.touched && newEventForm.controls.imageUrl?.errors.required\">Required</em>\r\n      <em\r\n        *ngIf=\"newEventForm.controls.imageUrl?.invalid && newEventForm.controls.imageUrl?.touched  && newEventForm.controls.imageUrl?.errors.pattern\">Must\r\n        be a png or jpg url</em>\r\n      <input (ngModel)=\"newEvent.imageUrl\" name=\"imageUrl\" required pattern=\".*\\/.*.(png|jpg)\" id=\"imageUrl\" type=\"text\"\r\n        class=\"form-control\" placeholder=\"url of image...\" />\r\n      <img [src]=\"newEventForm.controls.imageUrl.value\" *ngIf=\"newEventForm.controls.imageUrl?.valid\" />\r\n    </div>\r\n\r\n    <button type=\"submit\" [disabled]=\"newEventForm.invalid\" class=\"btn btn-primary\">Save</button>\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"cancel()\">Cancel</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/events/create-event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateEventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_index__ = __webpack_require__("./src/app/events/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateEventComponent = /** @class */ (function () {
    function CreateEventComponent(router, eventService) {
        this.router = router;
        this.eventService = eventService;
        this.isDirty = true;
    }
    CreateEventComponent.prototype.saveEvent = function (formValues) {
        var _this = this;
        this.eventService.saveEvent(formValues).subscribe(function () {
            _this.isDirty = false;
            _this.router.navigate(['/events']);
        });
    };
    CreateEventComponent.prototype.cancel = function () {
        this.router.navigate(['/events']);
    };
    CreateEventComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/events/create-event.component.html"),
            styles: ["\n    em {float:right; color:#E05C65; padding-left:10px;}\n    .error input {background-color:#E3C3C5;}\n    .error ::-webkit-input-placeholder { color: #999; }\n    .error :-moz-placeholder { color: #999; }\n    .error ::-moz-placeholder {color: #999; }\n    .error :ms-input-placeholder { color: #999; }\n  "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__shared_index__["b" /* EventService */]])
    ], CreateEventComponent);
    return CreateEventComponent;
}());



/***/ }),

/***/ "./src/app/events/event-details/create-session.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n  <h3>Create Session</h3>\r\n</div>\r\n<div class=\"col-md-6\">\r\n  <form [formGroup]=\"newSessionForm\" (ngSubmit)=\"saveSession(newSessionForm.value)\" autocomplete=\"off\">\r\n    <div class=\"form-group\" [ngClass]=\"{'error': name.invalid && name.dirty }\">\r\n      <label for=\"sessionName\">Session Name:</label>\r\n      <em *ngIf=\"name.invalid && name.dirty\">Required</em>\r\n      <input formControlName=\"name\" id=\"sessionName\" type=\"text\" class=\"form-control\" placeholder=\"session name...\" />\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{'error': presenter.invalid && presenter.dirty }\">\r\n      <label for=\"eventDate\">Presenter:</label>\r\n      <em *ngIf=\"presenter.invalid && presenter.dirty\">Required</em>\r\n      <input formControlName=\"presenter\" id=\"presenter\" type=\"text\" class=\"form-control\" placeholder=\"presenter...\" />\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{'error': duration.invalid && duration.dirty }\">\r\n      <label for=\"duration\">Duration:</label>\r\n      <em *ngIf=\"duration.invalid && duration.dirty\">Required</em>\r\n      <select formControlName=\"duration\" class=\"form-control\">\r\n        <option value=\"\">select duration...</option>\r\n        <option value=\"1\">Half Hour</option>\r\n        <option value=\"2\">1 Hour</option>\r\n        <option value=\"3\">Half Day</option>\r\n        <option value=\"4\">Full Day</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{'error': level.invalid && level.dirty }\">\r\n      <label for=\"level\">Level:</label>\r\n      <em *ngIf=\"level.invalid && level.dirty\">Required</em>\r\n      <select formControlName=\"level\" class=\"form-control\">\r\n        <option value=\"\">select level...</option>\r\n        <option value=\"Beginner\">Beginner</option>\r\n        <option value=\"Intermediate\">Intermediate</option>\r\n        <option value=\"Advanced\">Advanced</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{'error': abstract.invalid && abstract.dirty }\">\r\n      <label for=\"abstract\">Abstract:</label>\r\n      <em *ngIf=\"abstract.invalid && abstract.dirty && abstract?.errors.required\">Required</em>\r\n      <em *ngIf=\"abstract.invalid && abstract.dirty && abstract?.errors.maxLength\">Cannot exceed 400 characters</em>\r\n      <em *ngIf=\"abstract.invalid && abstract.dirty && abstract?.errors.restrictedWords\">Restricted words found: {{abstract.errors.restrictedWords}}</em>\r\n      <textarea formControlName=\"abstract\" id=\"abstract\" rows=3 class=\"form-control\" placeholder=\"abstract...\"></textarea>\r\n    </div>\r\n    <button type=\"submit\" [disabled]=\"newSessionForm.invalid\"  class=\"btn btn-primary\">Save</button>\r\n    <button type=\"button\" (click)=\"cancel()\" class=\"btn btn-default\">Cancel</button>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/events/event-details/create-session.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateSessionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_index__ = __webpack_require__("./src/app/events/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateSessionComponent = /** @class */ (function () {
    function CreateSessionComponent() {
        this.saveNewSession = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.cancelAddSession = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    CreateSessionComponent.prototype.ngOnInit = function () {
        this.name = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required);
        this.presenter = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required);
        this.duration = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required);
        this.level = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required);
        this.abstract = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(400), Object(__WEBPACK_IMPORTED_MODULE_2__shared_index__["c" /* restrictedWords */])(['foo', 'bar'])]);
        this.newSessionForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        });
    };
    CreateSessionComponent.prototype.saveSession = function (formValues) {
        var session = {
            id: undefined,
            name: formValues.name,
            duration: +formValues.duration,
            level: formValues.level,
            presenter: formValues.presenter,
            abstract: formValues.abstract,
            voters: []
        };
        this.saveNewSession.emit(session);
    };
    CreateSessionComponent.prototype.cancel = function () {
        this.cancelAddSession.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], CreateSessionComponent.prototype, "saveNewSession", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], CreateSessionComponent.prototype, "cancelAddSession", void 0);
    CreateSessionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'create-session',
            template: __webpack_require__("./src/app/events/event-details/create-session.component.html"),
            styles: ["\n    em {float:right; color:#E05C65; padding-left:10px;}\n    .error input, .error select, .error textarea {background-color:#E3C3C5;}\n    .error ::-webkit-input-placeholder { color: #999; }\n    .error :-moz-placeholder { color: #999; }\n    .error ::-moz-placeholder {color: #999; }\n    .error :ms-input-placeholder { color: #999; }\n  "]
        })
    ], CreateSessionComponent);
    return CreateSessionComponent;
}());



/***/ }),

/***/ "./src/app/events/event-details/event-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <img [src]=\"event?.imageUrl\" [alt]=\"event?.name\" class=\"event-image\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-11\">\r\n      <h2>{{event?.name | uppercase}} </h2>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <div><strong>Date:</strong> {{event?.date | date:'shortDate'}}</div>\r\n      <div><strong>Time:</strong> {{event?.time}}</div>\r\n      <div><strong>Price:</strong> {{event?.price | currency:'USD'}}</div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <address>\r\n        <strong>Address:</strong><br />\r\n        {{event?.location?.address}}<br />\r\n        {{event?.location?.city}}, {{event?.location?.country}}\r\n      </address>\r\n    </div>\r\n  </div>\r\n\r\n  <hr>\r\n\r\n\r\n\r\n  <div class=\"row\" style=\"margin-bottom:10px\">\r\n    <div class=\"col-md-2\">\r\n      <h3 style=\"margin:0\">Sessions</h3>\r\n    </div>\r\n    <div class=\"col-md-7\">\r\n      <div class=\"btn-group btn-group-sm\" style=\"margin-right:20px;margin-left:20px\">\r\n        <button class=\"btn btn-default\" [class.active]=\"sortBy==='name'\" (click)=\"sortBy='name'\">By Name</button>\r\n        <button class=\"btn btn-default\" [class.active]=\"sortBy==='votes'\" (click)=\"sortBy='votes'\">By Votes</button>\r\n      </div>\r\n\r\n      <div class=\"btn-group btn-group-sm\">\r\n        <button class=\"btn btn-default\" [class.active]=\"filterBy==='all'\" (click)=\"filterBy='all'\">All</button>\r\n        <button class=\"btn btn-default\" [class.active]=\"filterBy==='beginner'\" (click)=\"filterBy='beginner'\">Beginner</button>\r\n        <button class=\"btn btn-default\" [class.active]=\"filterBy==='intermediate'\" (click)=\"filterBy='intermediate'\">Intermediate</button>\r\n        <button class=\"btn btn-default\" [class.active]=\"filterBy==='advanced'\" (click)=\"filterBy='advanced'\">Advanced</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n      <a (click)=\"addSession()\">Add Session</a>\r\n    </div>\r\n  </div>\r\n\r\n  <session-list [filterBy]=\"filterBy\" [eventId]=\"event?.id\" [sortBy]=\"sortBy\" *ngIf=\"!addMode\" [sessions]=\"event?.sessions\"></session-list>\r\n  <create-session *ngIf=\"addMode\" (saveNewSession)=\"saveNewSession($event)\" (cancelAddSession)=\"cancelAddSession()\"></create-session>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/events/event-details/event-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_event_service__ = __webpack_require__("./src/app/events/shared/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventDetailsComponent = /** @class */ (function () {
    function EventDetailsComponent(eventService, route) {
        this.eventService = eventService;
        this.route = route;
        this.filterBy = 'all';
        this.sortBy = 'votes';
    }
    EventDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.forEach(function (data) {
            _this.event = _this.route.snapshot.data['event'];
            _this.addMode = false;
        });
    };
    EventDetailsComponent.prototype.addSession = function () {
        this.addMode = true;
    };
    EventDetailsComponent.prototype.saveNewSession = function (session) {
        var nextId = Math.max.apply(null, this.event.sessions.map(function (s) { return s.id; }));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.saveEvent(this.event).subscribe();
        this.addMode = false;
    };
    EventDetailsComponent.prototype.cancelAddSession = function () {
        this.addMode = false;
    };
    EventDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/events/event-details/event-details.component.html"),
            styles: ["\n    .container { padding-left:20px; padding-right:20px; }\n    .event-image { height: 100px; }\n    a {cursor:pointer}\n  "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_event_service__["a" /* EventService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], EventDetailsComponent);
    return EventDetailsComponent;
}());



/***/ }),

/***/ "./src/app/events/event-details/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_details_component__ = __webpack_require__("./src/app/events/event-details/event-details.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__event_details_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__create_session_component__ = __webpack_require__("./src/app/events/event-details/create-session.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__create_session_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_list_component__ = __webpack_require__("./src/app/events/event-details/session-list.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__session_list_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__upvote_upvote_component__ = __webpack_require__("./src/app/events/event-details/upvote/upvote.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__upvote_upvote_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__voter_service__ = __webpack_require__("./src/app/events/event-details/voter.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__voter_service__["a"]; });







/***/ }),

/***/ "./src/app/events/event-details/session-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngFor=\"let session of visibleSessions\">\r\n  <div class=\"col-md-1\">\r\n    <div *ngIf=\"authService.isAuthenticated()\">\r\n      <upvote (vote)=\"toggleVote(session)\" [count]=\"session.voters.length\" [voted]=\"userHasVoted(session)\"></upvote>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-10\">\r\n    <collapsible-well [title]=\"session.name\">\r\n      <div well-title>\r\n        {{session.name}}\r\n        <i *ngIf=\"session.voters.length > 3\" class=\"glyphicon glyphicon-fire\" style=\"color:red\"></i>\r\n      </div>\r\n      <div well-body>\r\n        <h6>{{session.presenter}}</h6>\r\n        <span>Duration: {{session.duration | duration}}</span><br />\r\n        <span>Level: {{session.level}}</span>\r\n\r\n        <p>{{session.abstract}}</p>\r\n      </div>\r\n    </collapsible-well>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/events/event-details/session-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_auth_service__ = __webpack_require__("./src/app/user/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voter_service__ = __webpack_require__("./src/app/events/event-details/voter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SessionListComponent = /** @class */ (function () {
    function SessionListComponent(authService, voterService) {
        this.authService = authService;
        this.voterService = voterService;
        this.visibleSessions = [];
    }
    SessionListComponent.prototype.ngOnChanges = function () {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc);
        }
    };
    SessionListComponent.prototype.toggleVote = function (session) {
        if (this.userHasVoted(session)) {
            this.voterService.deleteVoter(this.eventId, session, this.authService.currentUser.userName);
        }
        else {
            this.voterService.addVoter(this.eventId, session, this.authService.currentUser.userName);
        }
        if (this.sortBy === 'votes') {
            this.visibleSessions.sort(sortByVotesDesc);
        }
    };
    SessionListComponent.prototype.userHasVoted = function (session) {
        return this.voterService.userHasVoted(session, this.authService.currentUser.userName);
    };
    SessionListComponent.prototype.filterSessions = function (filter) {
        if (filter === 'all') {
            this.visibleSessions = this.sessions.slice(0);
        }
        else {
            this.visibleSessions = this.sessions.filter(function (session) {
                return session.level.toLocaleLowerCase() === filter;
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], SessionListComponent.prototype, "sessions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SessionListComponent.prototype, "filterBy", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SessionListComponent.prototype, "sortBy", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], SessionListComponent.prototype, "eventId", void 0);
    SessionListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'session-list',
            template: __webpack_require__("./src/app/events/event-details/session-list.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__voter_service__["a" /* VoterService */]])
    ], SessionListComponent);
    return SessionListComponent;
}());

function sortByNameAsc(s1, s2) {
    if (s1.name > s2.name) {
        return 1;
    }
    else if (s1.name === s2.name) {
        return 0;
    }
    else {
        return -1;
    }
}
function sortByVotesDesc(s1, s2) {
    return s2.voters.length - s1.voters.length;
}


/***/ }),

/***/ "./src/app/events/event-details/upvote/upvote.component.css":
/***/ (function(module, exports) {

module.exports = ".votingWidgetContainer {\r\n    padding-left:24px;\r\n  }\r\n  \r\n  .votingWidget {\r\n    height: 64px;\r\n    padding-top: 7px;\r\n    border-radius: 21px;\r\n  }\r\n  \r\n  .votingButton {\r\n    margin-left: -7px;\r\n    margin-top: 1px;\r\n    cursor:pointer;\r\n  }\r\n  \r\n  .votingButton i {\r\n    color: white;\r\n  }\r\n  \r\n  .badge-inverse {\r\n    background-color: #fff;\r\n    color: #4e5d6c;\r\n  }\r\n  \r\n  .votingCount {\r\n    margin-left: -11px;\r\n    margin-top: 1px;\r\n    font-weight: bold;\r\n    font-size: 14px;\r\n  }"

/***/ }),

/***/ "./src/app/events/event-details/upvote/upvote.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"votingWidgetContainer pointable\" (click)=\"onClick()\">\n  <div class=\"well votingWidget\">\n    <div class=\"votingButton\">\n      <i class=\"glyphicon glyphicon-heart\" [style.color]=\"iconColor\"></i>\n    </div>\n    <div class=\"badge badge-inverse votingCount\">\n        <div>{{count}}</div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/events/event-details/upvote/upvote.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpvoteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UpvoteComponent = /** @class */ (function () {
    function UpvoteComponent() {
        this.vote = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    Object.defineProperty(UpvoteComponent.prototype, "voted", {
        set: function (val) {
            this.iconColor = val ? 'red' : 'white';
        },
        enumerable: true,
        configurable: true
    });
    UpvoteComponent.prototype.ngOnInit = function () {
    };
    UpvoteComponent.prototype.onClick = function () {
        this.vote.emit({});
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], UpvoteComponent.prototype, "voted", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], UpvoteComponent.prototype, "count", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], UpvoteComponent.prototype, "vote", void 0);
    UpvoteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'upvote',
            template: __webpack_require__("./src/app/events/event-details/upvote/upvote.component.html"),
            styles: [__webpack_require__("./src/app/events/event-details/upvote/upvote.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UpvoteComponent);
    return UpvoteComponent;
}());



/***/ }),

/***/ "./src/app/events/event-details/voter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VoterService = /** @class */ (function () {
    function VoterService(http) {
        this.http = http;
    }
    VoterService.prototype.deleteVoter = function (eventId, session, voterName) {
        session.voters = session.voters.filter(function (voter) { return voter !== voterName; });
        var url = "/api/events/" + eventId + "/sessions/" + session.id + "/voters/" + voterName;
        this.http.delete(url)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError('addVoter')))
            .subscribe();
    };
    VoterService.prototype.addVoter = function (eventId, session, voterName) {
        session.voters.push(voterName);
        var options = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }) };
        var url = "/api/events/" + eventId + "/sessions/" + session.id + "/voters/" + voterName;
        this.http.post(url, {}, options)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError('addVoter')))
            .subscribe();
    };
    VoterService.prototype.userHasVoted = function (session, voterName) {
        return session.voters.some(function (voter) { return voter === voterName; });
    };
    VoterService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    VoterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], VoterService);
    return VoterService;
}());



/***/ }),

/***/ "./src/app/events/event-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_event_service__ = __webpack_require__("./src/app/events/shared/event.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventResolver = /** @class */ (function () {
    function EventResolver(eventService) {
        this.eventService = eventService;
    }
    EventResolver.prototype.resolve = function (route) {
        return this.eventService.getEvent(route.params['id']);
    };
    EventResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_event_service__["a" /* EventService */]])
    ], EventResolver);
    return EventResolver;
}());



/***/ }),

/***/ "./src/app/events/event-thumbnail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventThumbnailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventThumbnailComponent = /** @class */ (function () {
    function EventThumbnailComponent() {
    }
    EventThumbnailComponent.prototype.getStartTimeStyle = function () {
        if (this.event && this.event.time === '8:00 am') {
            return { color: '#003300', 'font-weight': 'bold' };
        }
        return {};
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], EventThumbnailComponent.prototype, "event", void 0);
    EventThumbnailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'event-thumbnail',
            template: "\n    <div [routerLink]=\"['/events', event.id]\" class=\"well hoverwell thumbnail\">\n      <h2>{{event?.name | uppercase}}</h2>\n      <div>Date: {{event?.date | date:'shortDate'}}</div>\n      <div [ngStyle]=\"getStartTimeStyle()\" [ngSwitch]=\"event?.time\">\n        Time: {{event?.time}}\n        <span *ngSwitchCase=\"'8:00 am'\">(Early Start)</span>\n        <span *ngSwitchCase=\"'10:00 am'\">(Late Start)</span>\n        <span *ngSwitchDefault>(Normal Start)</span>\n      </div>\n      <div>Price: {{event?.price | currency:'USD'}}</div>\n      <div *ngIf=\"event?.location\">\n        <span>Location: {{event?.location?.address}}</span>\n        <span class=\"pad-left\">{{event?.location?.city}}, {{event?.location?.country}}</span>\n      </div>\n      <div *ngIf=\"event?.onlineUrl\">\n        Online URL: {{event?.onlineUrl}}\n      </div>\n    </div>\n  ",
            styles: ["\n    .thumbnail { min-height: 210px; }\n    .pad-left { margin-left: 10px; }\n    .well div { color: #bbb; }\n  "]
        })
    ], EventThumbnailComponent);
    return EventThumbnailComponent;
}());



/***/ }),

/***/ "./src/app/events/events-list-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventListResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_event_service__ = __webpack_require__("./src/app/events/shared/event.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventListResolver = /** @class */ (function () {
    function EventListResolver(eventService) {
        this.eventService = eventService;
    }
    EventListResolver.prototype.resolve = function () {
        return this.eventService.getEvents();
    };
    EventListResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_event_service__["a" /* EventService */]])
    ], EventListResolver);
    return EventListResolver;
}());



/***/ }),

/***/ "./src/app/events/events-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_event_service__ = __webpack_require__("./src/app/events/shared/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventsListComponent = /** @class */ (function () {
    function EventsListComponent(eventService, route) {
        this.eventService = eventService;
        this.route = route;
    }
    EventsListComponent.prototype.ngOnInit = function () {
        this.events = this.route.snapshot.data['events'];
    };
    EventsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n  <div>\n    <h1>Upcoming Angular 2 Events</h1>\n    <hr/>\n    <div class=\"row\">\n      <div *ngFor=\"let event of events\" class=\"col-md-5\">\n        <event-thumbnail [event]=\"event\"></event-thumbnail>\n      </div>\n    </div>\n  </div>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_event_service__["a" /* EventService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], EventsListComponent);
    return EventsListComponent;
}());



/***/ }),

/***/ "./src/app/events/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__create_event_component__ = __webpack_require__("./src/app/events/create-event.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__create_event_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_thumbnail_component__ = __webpack_require__("./src/app/events/event-thumbnail.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__event_thumbnail_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_list_resolver_service__ = __webpack_require__("./src/app/events/events-list-resolver.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__events_list_resolver_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events_list_component__ = __webpack_require__("./src/app/events/events-list.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_3__events_list_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_index__ = __webpack_require__("./src/app/events/shared/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__shared_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__shared_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event_details_index__ = __webpack_require__("./src/app/events/event-details/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__event_details_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__event_details_index__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_5__event_details_index__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_5__event_details_index__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_5__event_details_index__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__location_validator_directive__ = __webpack_require__("./src/app/events/location-validator.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_6__location_validator_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__event_resolver_service__ = __webpack_require__("./src/app/events/event-resolver.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_7__event_resolver_service__["a"]; });










/***/ }),

/***/ "./src/app/events/location-validator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LocationValidator = /** @class */ (function () {
    function LocationValidator() {
    }
    LocationValidator_1 = LocationValidator;
    LocationValidator.prototype.validate = function (formGroup) {
        var addressControl = formGroup.controls['address'];
        var cityControl = formGroup.controls['city'];
        var countryControl = formGroup.controls['country'];
        var onlineUrlControl = formGroup.root.controls['onlineUrl'];
        if ((addressControl && addressControl.value && cityControl &&
            cityControl.value && countryControl && countryControl.value) ||
            (onlineUrlControl && onlineUrlControl.value)) {
            return null;
        }
        else {
            return { validateLocation: false };
        }
    };
    LocationValidator = LocationValidator_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[validateLocation]',
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALIDATORS */], useExisting: LocationValidator_1, multi: true }]
        })
    ], LocationValidator);
    return LocationValidator;
    var LocationValidator_1;
}());



/***/ }),

/***/ "./src/app/events/shared/duration.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DurationPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DurationPipe = /** @class */ (function () {
    function DurationPipe() {
    }
    DurationPipe.prototype.transform = function (value) {
        switch (value) {
            case 1: return 'Half Hour';
            case 2: return 'One Hour';
            case 3: return 'Half Day';
            case 4: return 'Full Day';
            default: return value.toString();
        }
    };
    DurationPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({ name: 'duration' })
    ], DurationPipe);
    return DurationPipe;
}());



/***/ }),

/***/ "./src/app/events/shared/event.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventService = /** @class */ (function () {
    function EventService(http) {
        this.http = http;
    }
    EventService.prototype.getEvents = function () {
        // let subject = new Subject<IEvent[]>()
        // setTimeout(() => {subject.next(EVENTS); subject.complete(); }, 100)
        // return subject
        return this.http.get('/api/events')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('getEvents', [])));
    };
    EventService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    EventService.prototype.getEvent = function (id) {
        return this.http.get('/api/events/' + id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('getEvent')));
    };
    EventService.prototype.saveEvent = function (event) {
        var options = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }) };
        return this.http.post('/api/events', event, options)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('saveEvent')));
    };
    EventService.prototype.searchSessions = function (searchTerm) {
        return this.http.get('/api/sessions/search?search=' + searchTerm)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('searchSessions')));
    };
    EventService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], EventService);
    return EventService;
}());

var EVENTS = [
    {
        id: 1,
        name: 'Angular Connect',
        date: new Date('9/26/2036'),
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        },
        sessions: [
            {
                id: 1,
                name: 'Using Angular 4 Pipes',
                presenter: 'Peter Bacon Darwin',
                duration: 1,
                level: 'Intermediate',
                abstract: "Learn all about the new pipes in Angular 4, both\n          how to write them, and how to get the new AI CLI to write\n          them for you. Given by the famous PBD, president of Angular\n          University (formerly Oxford University)",
                voters: ['bradgreen', 'igorminar', 'martinfowler']
            },
            {
                id: 2,
                name: 'Getting the most out of your dev team',
                presenter: 'Jeff Cross',
                duration: 1,
                level: 'Intermediate',
                abstract: "We all know that our dev teams work hard, but with\n          the right management they can be even more productive, without\n          overworking them. In this session I'll show you how to get the\n          best results from the talent you already have on staff.",
                voters: ['johnpapa', 'bradgreen', 'igorminar', 'martinfowler']
            },
            {
                id: 3,
                name: 'Angular 4 Performance Metrics',
                presenter: 'Rob Wormald',
                duration: 2,
                level: 'Advanced',
                abstract: "Angular 4 Performance is hot. In this session, we'll see\n          how Angular gets such great performance by preloading data on\n          your users devices before they even hit your site using the\n          new predictive algorithms and thought reading software\n          built into Angular 4.",
                voters: []
            },
            {
                id: 4,
                name: 'Angular 5 Look Ahead',
                presenter: 'Brad Green',
                duration: 2,
                level: 'Advanced',
                abstract: "Even though Angular 5 is still 6 years away, we all want\n          to know all about it so that we can spend endless hours in meetings\n          debating if we should use Angular 4 or not. This talk will look at\n          Angular 6 even though no code has yet been written for it. We'll\n          look at what it might do, and how to convince your manager to\n          hold off on any new apps until it's released",
                voters: []
            },
            {
                id: 5,
                name: 'Basics of Angular 4',
                presenter: 'John Papa',
                duration: 2,
                level: 'Beginner',
                abstract: "It's time to learn the basics of Angular 4. This talk\n          will give you everything you need to know about Angular 4 to\n          get started with it today and be building UI's for your self\n          driving cars and butler-bots in no time.",
                voters: ['bradgreen', 'igorminar']
            }
        ]
    },
    {
        id: 2,
        name: 'ng-nl',
        date: new Date('4/15/2037'),
        time: '9:00 am',
        price: 950.00,
        imageUrl: '/assets/images/ng-nl.png',
        onlineUrl: 'http://ng-nl.org/',
        sessions: [
            {
                id: 1,
                name: 'Testing Angular 4 Workshop',
                presenter: 'Pascal Precht & Christoph Bergdorf',
                duration: 4,
                level: 'Beginner',
                abstract: "In this 6 hour workshop you will learn not only how to test Angular 4,\n          you will also learn how to make the most of your team's efforts. Other topics\n          will be convincing your manager that testing is a good idea, and using the new\n          protractor tool for end to end testing.",
                voters: ['bradgreen', 'igorminar']
            },
            {
                id: 2,
                name: 'Angular 4 and Firebase',
                presenter: 'David East',
                duration: 3,
                level: 'Intermediate',
                abstract: "In this workshop, David East will show you how to use Angular with the new\n          ultra-real-time 5D Firebase back end, hosting platform, and wine recommendation engine.",
                voters: ['bradgreen', 'igorminar', 'johnpapa']
            },
            {
                id: 3,
                name: 'Reading the Angular 4 Source',
                presenter: 'Patrick Stapleton',
                duration: 2,
                level: 'Intermediate',
                abstract: "Angular 4's source code may be over 25 million lines of code, but it's really\n          a lot easier to read and understand then you may think. Patrick Stapleton will talk\n          about his secretes for keeping up with the changes, and navigating around the code.",
                voters: ['martinfowler']
            },
            {
                id: 4,
                name: 'Hail to the Lukas',
                presenter: 'Lukas Ruebbelke',
                duration: 1,
                level: 'Beginner',
                abstract: "In this session, Lukas will present the\n          secret to being awesome, and how he became the President\n          of the United States through his amazing programming skills,\n          showing how you too can be success with just attitude.",
                voters: ['bradgreen']
            },
        ]
    },
    {
        id: 3,
        name: 'ng-conf 2037',
        date: new Date('5/4/2037'),
        time: '9:00 am',
        price: 759.00,
        imageUrl: '/assets/images/ng-conf.png',
        location: {
            address: 'The Palatial America Hotel',
            city: 'Salt Lake City',
            country: 'USA'
        },
        sessions: [
            {
                id: 1,
                name: 'How Elm Powers Angular 4',
                presenter: 'Murphy Randle',
                duration: 2,
                level: 'Intermediate',
                abstract: "We all know that Angular is written in Elm, but did you\n          know how the source code is really written? In this exciting look\n          into the internals of Angular 4, we'll see exactly how Elm powers\n          the framework, and what you can do to take advantage of this knowledge.",
                voters: ['bradgreen', 'martinfowler', 'igorminar']
            },
            {
                id: 2,
                name: 'Angular and React together',
                presenter: 'Jamison Dance',
                duration: 2,
                level: 'Intermediate',
                abstract: "React v449.6 has just been released. Let's see how to use\n          this new version with Angular to create even more impressive applications.",
                voters: ['bradgreen', 'martinfowler']
            },
            {
                id: 3,
                name: 'Redux Woes',
                presenter: 'Rob Wormald',
                duration: 1,
                level: 'Intermediate',
                abstract: "Everyone is using Redux for everything from Angular to React to\n          Excel macros, but you're still having trouble grasping it? We'll take a look\n          at how farmers use Redux when harvesting grain as a great introduction to\n          this game changing technology.",
                voters: ['bradgreen', 'martinfowler', 'johnpapa']
            },
            {
                id: 4,
                name: 'ng-wat again!!',
                presenter: 'Shai Reznik',
                duration: 1,
                level: 'Beginner',
                abstract: "Let's take a look at some of the stranger pieces of Angular 4,\n          including neural net nets, Android in Androids, and using pipes with actual pipes.",
                voters: ['bradgreen', 'martinfowler', 'igorminar', 'johnpapa']
            },
            {
                id: 5,
                name: 'Dressed for Success',
                presenter: 'Ward Bell',
                duration: 2,
                level: 'Beginner',
                abstract: "Being a developer in 2037 is about more than just writing bug-free code.\n          You also have to look the part. In this amazing expose, Ward will talk you through\n          how to pick out the right clothes to make your coworkers and boss not only\n          respect you, but also want to be your buddy.",
                voters: ['bradgreen', 'martinfowler']
            },
            {
                id: 6,
                name: 'These aren\'t the directives you\'re looking for',
                presenter: 'John Papa',
                duration: 2,
                level: 'Intermediate',
                abstract: "Coinciding with the release of Star Wars Episode 18, this talk will show how\n          to use directives in your Angular 4 development while drawing lessons from the new movie,\n          featuring all your favorite characters like Han Solo's ghost and Darth Jar Jar.",
                voters: ['bradgreen', 'martinfowler']
            },
        ]
    },
    {
        id: 4,
        name: 'UN Angular Summit',
        date: new Date('6/10/2037'),
        time: '8:00 am',
        price: 800.00,
        imageUrl: '/assets/images/basic-shield.png',
        location: {
            address: 'The UN Angular Center',
            city: 'New York',
            country: 'USA'
        },
        sessions: [
            {
                id: 1,
                name: 'Diversity in Tech',
                presenter: 'Sir Dave Smith',
                duration: 2,
                level: 'Beginner',
                abstract: "Yes, we all work with cyborgs and androids and Martians, but\n          we probably don't realize that sometimes our internal biases can make it difficult for\n          these well-designed coworkers to really feel at home coding alongside us. This talk will\n          look at things we can do to recognize our biases and counteract them.",
                voters: ['bradgreen', 'igorminar']
            },
            {
                id: 2,
                name: 'World Peace and Angular',
                presenter: 'US Secretary of State Zach Galifianakis',
                duration: 2,
                level: 'Beginner',
                abstract: "Angular has been used in most of the major peace brokering that has\n          happened in the last decade, but there is still much we can do to remove all\n          war from the world, and Angular will be a key part of that effort.",
                voters: ['bradgreen', 'igorminar', 'johnpapa']
            },
            {
                id: 3,
                name: 'Using Angular with Androids',
                presenter: 'Dan Wahlin',
                duration: 3,
                level: 'Advanced',
                abstract: "Androids may do everything for us now, allowing us to spend all day playing\n          the latest Destiny DLC, but we can still improve the massages they give and the handmade\n          brie they make using Angular 4. This session will show you how.",
                voters: ['igorminar', 'johnpapa']
            },
        ]
    },
    {
        id: 5,
        name: 'ng-vegas',
        date: new Date('2/10/2037'),
        time: '9:00 am',
        price: 400.00,
        imageUrl: '/assets/images/ng-vegas.png',
        location: {
            address: 'The Excalibur',
            city: 'Las Vegas',
            country: 'USA'
        },
        sessions: [
            {
                id: 1,
                name: 'Gambling with Angular',
                presenter: 'John Papa',
                duration: 1,
                level: 'Intermediate',
                abstract: "No, this talk isn't about slot machines. We all know that\n          Angular is used in most waiter-bots and coke vending machines, but\n          did you know that was also used to write the core engine in the majority\n          of voting machines? This talk will look at how all presidential elections\n          are now determined by Angular code.",
                voters: ['bradgreen', 'igorminar']
            },
            {
                id: 2,
                name: 'Angular 4 in 60ish Minutes',
                presenter: 'Dan Wahlin',
                duration: 2,
                level: 'Beginner',
                abstract: "Get the skinny on Angular 4 for anyone new to this great new technology.\n          Dan Wahlin will show you how you can get started with Angular in 60ish minutes,\n          guaranteed!",
                voters: ['bradgreen', 'igorminar', 'johnpapa']
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/events/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_service__ = __webpack_require__("./src/app/events/shared/event.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__event_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__restricted_words_validator__ = __webpack_require__("./src/app/events/shared/restricted-words.validator.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__restricted_words_validator__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__duration_pipe__ = __webpack_require__("./src/app/events/shared/duration.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__duration_pipe__["a"]; });





/***/ }),

/***/ "./src/app/events/shared/restricted-words.validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = restrictedWords;
function restrictedWords(words) {
    return function (control) {
        if (!words) {
            return null;
        }
        var invalidWords = words
            .map(function (w) { return control.value.includes(w) ? w : null; })
            .filter(function (w) { return w != null; });
        return invalidWords && invalidWords.length > 0
            ? { 'restrictedWords': invalidWords.join(', ') }
            : null;
    };
}


/***/ }),

/***/ "./src/app/nav/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\">ngEvents</a>\r\n    </div>\r\n\r\n    <div class=\"collapse navbar-collapse\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li>\r\n          <a [routerLink]=\"['/events']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">All\r\n            Events</a>\r\n        </li>\r\n        <li><a [routerLink]=\"['/events/new']\" routerLinkActive=\"active\">Create Event</a></li>\r\n        <li class=\"dropdown\">\r\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n            Events\r\n            <span class=\"caret\"></span>\r\n          </a>\r\n          <ul class=\"dropdown-menu\">\r\n            <li>\r\n              <a href=\"\">Angular Connect</a>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n      <div class=\"navbar-header navbar-right\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <li>\r\n            <a *ngIf=\"!auth.isAuthenticated()\" [routerLink]=\"['user/login']\">Login</a>\r\n            <a *ngIf=\"auth.isAuthenticated()\" [routerLink]=\"['user/profile']\">Welcome {{auth.currentUser.firstName}}</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <form id=\"searchForm\" (ngSubmit)=\"searchSessions(searchTerm)\" class=\"navbar-form navbar-right\">\r\n        <div class=\"form-group\">\r\n          <input [(ngModel)]=\"searchTerm\" name=\"searchTerm\" type=\"text\" class=\"form-control\"\r\n            placeholder=\"Search Sessions\">\r\n        </div>\r\n        <button class=\"btn btn-default\" modal-trigger=\"searchResults\">\r\n          Search\r\n        </button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<simple-modal closeOnBodyClick=\"true\" elementId=\"searchResults\" title=\"Matching Sessions\">\r\n  <div class=\"list-group\">\r\n    <a class=\"list-group-item\" *ngFor=\"let session of foundSessions\"\r\n      [routerLink]=\"['/events', session.eventId]\">{{session.name}}</a>\r\n  </div>\r\n</simple-modal>\r\n"

/***/ }),

/***/ "./src/app/nav/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_auth_service__ = __webpack_require__("./src/app/user/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_index__ = __webpack_require__("./src/app/events/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(auth, eventService) {
        this.auth = auth;
        this.eventService = eventService;
        this.searchTerm = '';
    }
    NavBarComponent.prototype.searchSessions = function (searchTerm) {
        var _this = this;
        this.eventService.searchSessions(searchTerm).subscribe(function (sessions) {
            _this.foundSessions = sessions;
        });
    };
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'nav-bar',
            template: __webpack_require__("./src/app/nav/nav-bar.component.html"),
            styles: ["\n    .nav.navbar-nav {font-size: 15px;}\n    #searchForm {margin-right: 100px;}\n    @media (max-width: 1200px) {#searchForm {display:none}}\n    li > a.active { color: #F97924; }\n  "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__events_index__["g" /* EventService */]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events_index__ = __webpack_require__("./src/app/events/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__errors_404_component__ = __webpack_require__("./src/app/errors/404.component.ts");


var appRoutes = [
    { path: 'events/new', component: __WEBPACK_IMPORTED_MODULE_0__events_index__["a" /* CreateEventComponent */], canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: __WEBPACK_IMPORTED_MODULE_0__events_index__["i" /* EventsListComponent */], resolve: { events: __WEBPACK_IMPORTED_MODULE_0__events_index__["e" /* EventListResolver */] } },
    { path: 'events/:id', component: __WEBPACK_IMPORTED_MODULE_0__events_index__["d" /* EventDetailsComponent */], resolve: { event: __WEBPACK_IMPORTED_MODULE_0__events_index__["f" /* EventResolver */] } },
    { path: 'events/session/new', component: __WEBPACK_IMPORTED_MODULE_0__events_index__["b" /* CreateSessionComponent */] },
    { path: '404', component: __WEBPACK_IMPORTED_MODULE_1__errors_404_component__["a" /* Error404Component */] },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
];


/***/ }),

/***/ "./src/app/user/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.loginUser = function (userName, password) {
        var _this = this;
        var loginInfo = { username: userName, password: password };
        var options = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }) };
        return this.http.post('/api/login', loginInfo, options)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* tap */])(function (data) {
            _this.currentUser = data['user'];
        }))
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(function (err) {
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(false);
        }));
    };
    AuthService.prototype.isAuthenticated = function () {
        return !!this.currentUser;
    };
    AuthService.prototype.updateCurrentUser = function (firstName, lastName) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
        var options = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'ContentType': 'application/json' }) };
        return this.http.put("/api/users/" + this.currentUser.id, this.currentUser, options);
    };
    AuthService.prototype.CheckAuthStatus = function () {
        var _this = this;
        this.http.get('/api/currentIdentity')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* tap */])(function (data) {
            if (data instanceof Object) {
                _this.currentUser = data;
            }
        })).subscribe();
    };
    AuthService.prototype.logOut = function () {
        this.currentUser = undefined;
        var options = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'ContentType': 'application/json' }) };
        return this.http.post('/api/logout', {}, options);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map