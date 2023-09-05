"use strict";
(self["webpackChunkgithubPages"] = self["webpackChunkgithubPages"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/main/main.component */ 2409);
/* harmony import */ var _components_bigger_bigger_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/bigger/bigger.component */ 5694);
/* harmony import */ var _components_smaller_smaller_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/smaller/smaller.component */ 8722);
/* harmony import */ var _components_kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/kontakt/kontakt.component */ 2082);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6839);







const routes = [{
  path: '',
  component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent
}, {
  path: 'groessere_Projekte',
  component: _components_bigger_bigger_component__WEBPACK_IMPORTED_MODULE_1__.BiggerComponent
}, {
  path: 'kleinere_Projekte',
  component: _components_smaller_smaller_component__WEBPACK_IMPORTED_MODULE_2__.SmallerComponent
}, {
  path: 'kontakt',
  component: _components_kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_3__.KontaktComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  }), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ 4726);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);




class AppComponent {
  constructor() {
    this.title = 'githubPages';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 3,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-nav-bar")(1, "router-outlet")(2, "app-footer");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_0__.NavBarComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ 4726);
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main/main.component */ 2409);
/* harmony import */ var _components_bigger_bigger_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/bigger/bigger.component */ 5694);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swimlane/ngx-charts */ 4142);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 9240);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);
/* harmony import */ var _components_project_card_project_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/project-card/project-card.component */ 9221);
/* harmony import */ var _components_smaller_smaller_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/smaller/smaller.component */ 8722);
/* harmony import */ var _components_kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/kontakt/kontakt.component */ 2082);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 6839);














class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  providers: [(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.provideClientHydration)()],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__.NgxChartsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__.NavBarComponent, _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__.MainComponent, _components_bigger_bigger_component__WEBPACK_IMPORTED_MODULE_4__.BiggerComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent, _components_project_card_project_card_component__WEBPACK_IMPORTED_MODULE_6__.ProjectCardComponent, _components_smaller_smaller_component__WEBPACK_IMPORTED_MODULE_7__.SmallerComponent, _components_kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_8__.KontaktComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__.NgxChartsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule]
  });
})();

/***/ }),

/***/ 5694:
/*!*******************************************************!*\
  !*** ./src/app/components/bigger/bigger.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BiggerComponent": () => (/* binding */ BiggerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project-card/project-card.component */ 9221);



function BiggerComponent_div_1_app_project_card_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-project-card", 5);
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", item_r1);
  }
}
function BiggerComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BiggerComponent_div_1_app_project_card_2_Template, 1, 1, "app-project-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", item_r1.livesitesrc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r1);
  }
}
class BiggerComponent {
  constructor() {
    this.$biggerSites = [{
      title: 'SEO Content',
      src: 'assets/gitpage-images/SEOContent.png',
      description: 'Wordpress Plugin der SEO Küche',
      language: 'PHP, JS/JSX, HTML, SCSS',
      livesite: '',
      livesitesrc: 'https://github.com/namedmichi/SEO-Content',
      aufgaben: 'Chefentwickler und Maintainer'
    }, {
      title: 'namedTask',
      src: 'assets/gitpage-images/namedTask.png',
      description: 'Angular Projekt',
      language: 'HTML, CSS, Typescript',
      livesite: 'Vorhanden',
      livesitesrc: 'https://namedtask.michael-selbertinger.de'
    }];
  }
}
BiggerComponent.ɵfac = function BiggerComponent_Factory(t) {
  return new (t || BiggerComponent)();
};
BiggerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: BiggerComponent,
  selectors: [["app-bigger"]],
  decls: 2,
  vars: 1,
  consts: [[1, "biggerBody"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], ["target", "_blank", 3, "href"], [3, "item", 4, "ngIf"], [3, "item"]],
  template: function BiggerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BiggerComponent_div_1_Template, 3, 2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.$biggerSites);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_0__.ProjectCardComponent],
  styles: [".biggerBody[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  flex-wrap: wrap;\r\n}\r\na[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:link {\r\n  color: white !important;\r\n  text-decoration: none;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9iaWdnZXIvYmlnZ2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGVBQWU7QUFDakI7QUFDQTs7RUFFRSx1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiLmJpZ2dlckJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcbmE6dmlzaXRlZCxcclxuYTpsaW5rIHtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 4662:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 6679);


class FooterComponent {}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 5,
  vars: 0,
  consts: [[1, "footerBody"], [1, "footerContent"], [1, "footerSection"], ["routerLink", "/kontakt"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Kontakt");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: [".footerBody[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background-color: var(--dark-background);\r\n  height: 120px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.footerContent[_ngcontent-%COMP%] {\r\n  width: 60%;\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n.footerContent[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:link, a[_ngcontent-%COMP%]:visited {\r\n  color: white;\r\n  text-decoration: none;\r\n  font-size: 25px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsd0NBQXdDO0VBQ3hDLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7QUFDQTs7RUFFRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakIiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyQm9keSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1iYWNrZ3JvdW5kKTtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uZm9vdGVyQ29udGVudCB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcbi5mb290ZXJDb250ZW50IGE6bGluayxcclxuYTp2aXNpdGVkIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 2082:
/*!*********************************************************!*\
  !*** ./src/app/components/kontakt/kontakt.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KontaktComponent": () => (/* binding */ KontaktComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

class KontaktComponent {}
KontaktComponent.ɵfac = function KontaktComponent_Factory(t) {
  return new (t || KontaktComponent)();
};
KontaktComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: KontaktComponent,
  selectors: [["app-kontakt"]],
  decls: 14,
  vars: 0,
  consts: [[1, "kontaktBody"], ["href", "mailto:mail@michael-selbertinger.de"], ["href", "https://github.com/namedmichi"], ["href", "https://www.linkedin.com/in/michael-selbertinger-259b05288/"]],
  template: function KontaktComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " E-Mail: mail@michael-selbertinger.de ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "(senden)");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Github: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "(klick)");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " LinkedIn: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "(click)");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  styles: ["a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:link {\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n.kontaktBody[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  height: 70dvh;\r\n  font-size: large;\r\n}\r\na[_ngcontent-%COMP%] {\r\n  font-weight: bolder;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9rb250YWt0L2tvbnRha3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0VBR0UsWUFBWTtFQUNaLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImEsXHJcbmE6dmlzaXRlZCxcclxuYTpsaW5rIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5rb250YWt0Qm9keSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA3MGR2aDtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcbmEge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 2409:
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ 5139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ 4142);
/* harmony import */ var _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project-card/project-card.component */ 9221);





function MainComponent_div_11_app_project_card_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-project-card", 26);
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", item_r1);
  }
}
function MainComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23)(1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MainComponent_div_11_app_project_card_2_Template, 1, 1, "app-project-card", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", item_r1.livesitesrc, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1);
  }
}
class MainComponent {
  getChartData() {
    var counterText;
    var html;
    var css;
    var js;
    var ts;
    var jsLines;
    fetch(location.href + '/assets/CounterFile.txt').then(response => response.text()).then(text => counterText = text).then(text => {
      counterText = counterText.split(';');
      console.log(counterText);
      console.log(typeof counterText);
      var lenght = counterText.length;
      html = counterText[lenght - 7];
      css = counterText[lenght - 6];
      js = counterText[lenght - 5];
      ts = counterText[lenght - 4];
      console.log(html);
      html = html.split(' ');
      css = css.split(' ');
      js = js.split(' ');
      ts = ts.split(' ');
      console.log(css[0].substring(1));
      console.log(js);
      this.htmlChars = html[0];
      this.htmlWords = html[3];
      this.htmlLines = html[6];
      this.cssChars = css[0].substring(1);
      this.cssWords = css[3];
      this.cssLines = css[6];
      this.jsChars = js[0].substring(1);
      this.jsWords = js[3];
      this.jsLines = js[6];
      this.tsChars = ts[0].substring(1);
      this.tsChars = ts[0];
      this.tsWords = ts[3];
      this.tsLines = ts[6];
      this.charsTotal = parseInt(this.htmlChars) + parseInt(this.cssChars) + parseInt(this.jsChars) + parseInt(this.tsChars);
      this.wordsTotal = parseInt(this.htmlWords) + parseInt(this.cssWords) + parseInt(this.jsWords) + parseInt(this.tsWords);
      this.linesTotal = parseInt(this.htmlLines) + parseInt(this.cssLines) + parseInt(this.jsLines) + parseInt(this.tsLines);
      var Zeichendaten = [{
        name: 'HTML',
        value: this.htmlChars
      }, {
        name: 'CSS',
        value: this.cssChars
      }, {
        name: 'Javascript/Typescript',
        value: (parseInt(this.jsChars) + parseInt(this.tsChars) + 67836).toString()
      }, {
        name: 'PHP',
        value: this.phpChars
      }];
      var Woerterdaten = [{
        name: 'HTML',
        value: this.htmlWords
      }, {
        name: 'CSS',
        value: this.cssWords
      }, {
        name: 'Java/Typescript',
        value: (parseInt(this.jsWords) + parseInt(this.tsWords) + 6612).toString()
      }, {
        name: 'PHP',
        value: this.phpWords
      }];
      var Lienendaten = [{
        name: 'HTML',
        value: this.htmlLines
      }, {
        name: 'CSS',
        value: this.cssLines
      }, {
        name: 'Javascript/Typescript',
        value: (parseInt(this.jsLines) + parseInt(this.tsLines) + 2049).toString()
      }, {
        name: 'PHP',
        value: this.phpLines
      }];
      Object.assign(this, {
        Zeichendaten,
        Woerterdaten,
        Lienendaten
      });
    });
  }
  ngOnInit() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(() => {
      this.getChartData();
    });
  }
  constructor() {
    this.sites = [{
      title: 'SEO Content',
      src: 'assets/gitpage-images/SEOContent.png',
      description: 'Wordpress Plugin der SEO Küche',
      language: 'PHP, JS/JSX, HTML, SCSS',
      livesite: '',
      livesitesrc: 'https://github.com/namedmichi/SEO-Content',
      aufgaben: 'Chefentwickler und Maintainer'
    }, {
      title: 'namedTask',
      src: 'assets/gitpage-images/namedTask.png',
      description: 'Angular Projekt',
      language: 'HTML, CSS, Typescript',
      livesite: 'Vorhanden',
      livesitesrc: 'https://namedtask.michael-selbertinger.de'
    }];
    this.view = [600, 400];
    this.htmlChars = '0';
    this.htmlWords = '0';
    this.htmlLines = '0';
    this.cssChars = '0';
    this.cssWords = '0';
    this.cssLines = '0';
    this.jsChars = '0';
    this.jsWords = '0';
    this.jsLines = '0';
    this.tsChars = '0';
    this.tsWords = '0';
    this.tsLines = '0';
    this.phpChars = '152584';
    this.phpWords = '12316';
    this.phpLines = '3761';
    this.charsTotal = 0;
    this.wordsTotal = 0;
    this.linesTotal = 0;
    this.Zeichendaten = [{
      name: 'Zeichen',
      value: this.htmlChars
    }, {
      name: 'Wörter',
      value: this.cssChars
    }, {
      name: 'Zeilen',
      value: this.tsChars
    }];
    this.Woerterdaten = [{
      name: 'HTML',
      value: this.htmlWords
    }, {
      name: 'CSS',
      value: this.cssWords
    }, {
      name: 'Javascript',
      value: this.tsWords
    }, {
      name: 'Typescript',
      value: this.tsWords
    }];
    this.Lienendaten = [{
      name: 'HTML',
      value: this.htmlLines
    }, {
      name: 'CSS',
      value: this.cssLines
    }, {
      name: 'Javascript',
      value: this.tsLines
    }, {
      name: 'Typescript',
      value: this.tsLines
    }];
    // options
    // options
    this.showXAxis = true;
    this.showYAxis = true;
    this.gradient = false;
    this.showLegend = true;
    this.showXAxisLabel = true;
    this.xAxisLabel1 = 'Buchstaben';
    this.xAxisLabel2 = 'Wörter';
    this.xAxisLabel3 = 'Zeilen';
    this.showYAxisLabel = true;
    this.yAxisLabel = 'Anzahl';
    this.colorScheme = [{
      name: 'HTML',
      value: '#f06529'
    }, {
      name: 'CSS',
      value: '#264de4'
    }, {
      name: 'JavaScript',
      value: '#F0DB4F'
    }, {
      name: 'Typescript',
      value: '#007acc'
    }];
  }
  onSelect(event) {
    console.log(event);
  }
}
MainComponent.ɵfac = function MainComponent_Factory(t) {
  return new (t || MainComponent)();
};
MainComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: MainComponent,
  selectors: [["app-main"]],
  decls: 85,
  vars: 22,
  consts: [[1, "mainBody"], ["data-locale", "de_DE", "data-size", "large", "data-theme", "dark", "data-type", "HORIZONTAL", "data-vanity", "michael-selbertinger-259b05288", "data-version", "v1", 1, "badge-base", "LI-profile-badge", "badge"], ["href", "https://de.linkedin.com/in/michael-selbertinger-259b05288?trk=profile-badge", 1, "badge-base__link", "LI-simple-link"], [1, "content"], [1, "centerFix", 2, "margin-top", "0"], [1, "aktuelles"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "flex"], [1, "flexCol"], [2, "fill", "#fff", 3, "view", "customColors", "results", "gradient", "xAxis", "yAxis", "select"], [1, "header"], [1, "design-section"], [1, "timeline"], [1, "timeline-component", "timeline-content"], ["href", "https://www.ifb-rosenheim.de"], [1, "date", "dateTop"], ["href", "https://azonlinesolutions.de"], ["id", "karriere"], [1, "timeline-middle", "start"], [1, "timeline-circle"], [1, "timeline-middle"], [1, "date"], ["href", "https://www.seo-kueche.de"], [1, "card"], ["target", "_blank", 3, "href"], [3, "item", 4, "ngIf"], [3, "item"]],
  template: function MainComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h1")(2, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " < / > ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Michael Selbertinger Portfolio ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 3)(8, "h2", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Aktuelles");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, MainComponent_div_11_Template, 3, 2, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Statistiken");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 7)(15, "div", 8)(16, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Zeichen");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "ngx-charts-bar-vertical", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("select", function MainComponent_Template_ngx_charts_bar_vertical_select_20_listener($event) {
        return ctx.onSelect($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 8)(22, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "W\u00F6rter");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "ngx-charts-bar-vertical", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("select", function MainComponent_Template_ngx_charts_bar_vertical_select_26_listener($event) {
        return ctx.onSelect($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 8)(28, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Zeilen");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "ngx-charts-bar-vertical", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("select", function MainComponent_Template_ngx_charts_bar_vertical_select_32_listener($event) {
        return ctx.onSelect($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 10)(34, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Karriere");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "section", 11)(37, "div", 12)(38, "div", 13)(39, "a", 14)(40, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "IFB Rosenheim");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Schulische Ausbildung Informatikassistent");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 15)(45, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "April 23 - Juli 23");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 13)(48, "a", 16)(49, "h3", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "AZ Online Solutions");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Praktikum Full-Stack Webentwicklung");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 15)(54, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "September 23 -");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 18)(57, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Start");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "div", 19)(60, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 21)(68, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "September 22 - vorauss. Juli 24");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 13)(71, "a", 22)(72, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "SEO-K\u00FCche Rosenheim");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Minijob Onpage Entwickler");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 21)(77, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Juli 23 - August 24");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 13)(80, "a", 22)(81, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "SEO-K\u00FCche Rosenheim");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "Teilzeit Webentwickler");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.sites);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Insgesamt:", ctx.charsTotal.toLocaleString("de-DE"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("view", ctx.view)("customColors", ctx.colorScheme)("results", ctx.Zeichendaten)("gradient", ctx.gradient)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Insgesamt:", ctx.wordsTotal.toLocaleString("de-DE"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("view", ctx.view)("customColors", ctx.colorScheme)("results", ctx.Woerterdaten)("gradient", ctx.gradient)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Insgesamt:", ctx.linesTotal.toLocaleString("de-DE"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("view", ctx.view)("customColors", ctx.colorScheme)("results", ctx.Lienendaten)("gradient", ctx.gradient)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__.BarVerticalComponent, _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_1__.ProjectCardComponent],
  styles: ["@import url(https://fonts.googleapis.com/css2?family=Jost:wght@200;300[_ngcontent-%COMP%];400&display=swap)[_ngcontent-%COMP%];.mainBody[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:link {\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n.headlineSpan[_ngcontent-%COMP%] {\r\n  font-size: 3.5rem;\r\n}\r\n.greaterThan[_ngcontent-%COMP%] {\r\n  width: 44px;\r\n  display: inline-block;\r\n  height: 1px;\r\n}\r\n.centerFix[_ngcontent-%COMP%] {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  font-size: 2.9rem;\r\n  margin-bottom: 0;\r\n}\r\nh2[_ngcontent-%COMP%] {\r\n  font-size: 2.3rem;\r\n}\r\n.badge[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n}\r\n.content[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n}\r\n.aktuelles[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  flex-wrap: wrap;\r\n}\r\n.flex[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  width: 100%;\r\n  justify-content: space-around;\r\n}\r\n.flexCol[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  align-self: center;\r\n}\r\n.header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: center;\r\n}\r\n.design-section[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #1f1f1f;\r\n  min-height: 60vh;\r\n  padding: 100px 0;\r\n  font-family: Jost;\r\n  padding-top: 0;\r\n}\r\n\r\n.design[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.timeline[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n  max-width: 800px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.timeline-content[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n  background: #1f1f1f;\r\n  box-shadow: 5px 5px 10px #1a1a1a, -5px -5px 10px #242424;\r\n  border-radius: 5px;\r\n  color: white;\r\n  padding: 1.75rem;\r\n  transition: 0.4s ease;\r\n  overflow-wrap: break-word !important;\r\n  margin: 1rem;\r\n  margin-bottom: 20px;\r\n  border-radius: 6px;\r\n  min-width: 140px;\r\n}\r\n\r\n.timeline-component[_ngcontent-%COMP%] {\r\n  margin: 20px 20px 20px 20px;\r\n}\r\n\r\n.timeline[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-rows: 1fr 6px 1fr;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr;\r\n}\r\n.timeline-middle[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  background-image: linear-gradient(180deg, #f27121, #e94057, #8a2387);\r\n  width: 100%;\r\n  height: 6px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.main-middle[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n}\r\n.timeline-circle[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  bottom: 20%;\r\n  left: 50%;\r\n  width: 15px;\r\n  height: 15px;\r\n  border-radius: 50%;\r\n  background-image: linear-gradient(45deg, #f27121, #e94057, #8a2387);\r\n  transform: translateX(-50%);\r\n}\r\n.start[_ngcontent-%COMP%]   .timeline-circle[_ngcontent-%COMP%]:nth-of-type(2) {\r\n  position: relative;\r\n  right: 10px;\r\n  left: unset;\r\n}\r\n.timeline-middle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: -50px;\r\n  font-size: 20px;\r\n}\r\n.date[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.dateTop[_ngcontent-%COMP%] {\r\n  align-items: end;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0UsWUFBWTtFQUNaLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixXQUFXO0VBQ1gsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUVuQix3REFBd0Q7RUFDeEQsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLHNDQUFzQztBQUN4QztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9FQUFvRTtFQUNwRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1FQUFtRTtFQUVuRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztBQUNiO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQiIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluQm9keSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmEsXHJcbmE6dmlzaXRlZCxcclxuYTpsaW5rIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5oZWFkbGluZVNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xyXG59XHJcbi5ncmVhdGVyVGhhbiB7XHJcbiAgd2lkdGg6IDQ0cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogMXB4O1xyXG59XHJcbi5jZW50ZXJGaXgge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuaDEge1xyXG4gIGZvbnQtc2l6ZTogMi45cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuaDIge1xyXG4gIGZvbnQtc2l6ZTogMi4zcmVtO1xyXG59XHJcbi5iYWRnZSB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4uY29udGVudCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmFrdHVlbGxlcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuLmZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcbi5mbGV4Q29sIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uY29udGVudCBoMSB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcbi5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc3Q6d2dodEAyMDA7MzAwOzQwMCZkaXNwbGF5PXN3YXBcIik7XHJcbi5kZXNpZ24tc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmMWYxZjtcclxuICBtaW4taGVpZ2h0OiA2MHZoO1xyXG4gIHBhZGRpbmc6IDEwMHB4IDA7XHJcbiAgZm9udC1mYW1pbHk6IEpvc3Q7XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbn1cclxuXHJcbi5kZXNpZ24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnRpbWVsaW5lIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLnRpbWVsaW5lLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogIzFmMWYxZjtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCA1cHggMTBweCAjMWExYTFhLCAtNXB4IC01cHggMTBweCAjMjQyNDI0O1xyXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCAjMWExYTFhLCAtNXB4IC01cHggMTBweCAjMjQyNDI0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMS43NXJlbTtcclxuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XHJcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBtaW4td2lkdGg6IDE0MHB4O1xyXG59XHJcblxyXG4udGltZWxpbmUtY29tcG9uZW50IHtcclxuICBtYXJnaW46IDIwcHggMjBweCAyMHB4IDIwcHg7XHJcbn1cclxuXHJcbi50aW1lbGluZSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA2cHggMWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xyXG59XHJcbi50aW1lbGluZS1taWRkbGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZjI3MTIxLCAjZTk0MDU3LCAjOGEyMzg3KTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYWluLW1pZGRsZSB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG4udGltZWxpbmUtY2lyY2xlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm90dG9tOiAyMCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIGhlaWdodDogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZjI3MTIxLCAjZTk0MDU3LCAjOGEyMzg3KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbn1cclxuLnN0YXJ0IC50aW1lbGluZS1jaXJjbGU6bnRoLW9mLXR5cGUoMikge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICByaWdodDogMTBweDtcclxuICBsZWZ0OiB1bnNldDtcclxufVxyXG4udGltZWxpbmUtbWlkZGxlIHAge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAtNTBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmRhdGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmRhdGVUb3Age1xyXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */", "@import url(\"https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400&display=swap\");"]
});


/***/ }),

/***/ 4726:
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavBarComponent": () => (/* binding */ NavBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 6679);


class NavBarComponent {}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) {
  return new (t || NavBarComponent)();
};
NavBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NavBarComponent,
  selectors: [["app-nav-bar"]],
  decls: 14,
  vars: 0,
  consts: [[1, "navBody"], ["routerLink", "/"], ["routerLink", "/groessere_Projekte"], ["routerLink", "/kleinere_Projekte"], ["href", "/#karriere"]],
  template: function NavBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "ul")(2, "a", 1)(3, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Startseite");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2)(6, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Gr\u00F6\u00DFere Projekte");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3)(9, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Just for fun");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4)(12, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Karriere");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: [".navBody[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100px;\r\n  background-color: var(--dark-background);\r\n}\r\nul[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  display: flex;\r\n  height: 100%;\r\n  align-items: center;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n  float: left;\r\n  font-size: 2rem;\r\n}\r\nli[_ngcontent-%COMP%] {\r\n  margin-left: 50px;\r\n}\r\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: block;\r\n  color: white;\r\n  text-align: center;\r\n  padding: 16px;\r\n  text-decoration: none;\r\n}\r\na[_ngcontent-%COMP%]:link {\r\n  color: var(--secondary);\r\n}\r\na[_ngcontent-%COMP%]:visited {\r\n  color: var(--secondary);\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isd0NBQXdDO0FBQzFDO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QiIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZCb2R5IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmFja2dyb3VuZCk7XHJcbn1cclxudWwge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmxpIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxubGkge1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcbmxpIGEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuYTpsaW5rIHtcclxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcclxufVxyXG5hOnZpc2l0ZWQge1xyXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 9221:
/*!*******************************************************************!*\
  !*** ./src/app/components/project-card/project-card.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectCardComponent": () => (/* binding */ ProjectCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6477);


function ProjectCardComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "p")(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Besonderheiten");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.item.description);
  }
}
function ProjectCardComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "p")(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Meine Aufgaben");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.item.aufgaben);
  }
}
class ProjectCardComponent {}
ProjectCardComponent.ɵfac = function ProjectCardComponent_Factory(t) {
  return new (t || ProjectCardComponent)();
};
ProjectCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ProjectCardComponent,
  selectors: [["app-project-card"]],
  inputs: {
    item: "item"
  },
  decls: 13,
  vars: 5,
  consts: [[1, "card"], [1, "left"], ["alt", "", 3, "src"], [1, "right"], [4, "ngIf"]],
  template: function ProjectCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProjectCardComponent_div_6_Template, 6, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProjectCardComponent_div_7_Template, 6, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p")(9, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sprachen");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.item.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item.description);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item.aufgaben);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.language);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
  styles: [".card[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin: 1rem;\r\n  padding: 2rem;\r\n  flex-direction: row;\r\n}\r\n.card[_ngcontent-%COMP%]:hover {\r\n  background-color: rgba(0, 0, 0, 0.185);\r\n  border-radius: 20px;\r\n}\r\nh3[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n}\r\n.left[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n.right[_ngcontent-%COMP%] {\r\n  padding-top: 70px;\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-left: 20px;\r\n  flex-direction: column;\r\n}\r\np[_ngcontent-%COMP%] {\r\n  margin-top: 12px;\r\n  margin-bottom: 12px;\r\n}\r\nimg[_ngcontent-%COMP%] {\r\n  width: 550px;\r\n}\r\nb[_ngcontent-%COMP%] {\r\n  font-size: 1.4rem;\r\n}\r\nh3[_ngcontent-%COMP%] {\r\n  font-size: 2rem;\r\n}\r\na[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:link {\r\n  color: white !important;\r\n  text-decoration: underline;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0LWNhcmQvcHJvamVjdC1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHNDQUFzQztFQUN0QyxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7O0VBRUUsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtBQUM1QiIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMXJlbTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuLmNhcmQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xODUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuaDMge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuLmxlZnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5yaWdodCB7XHJcbiAgcGFkZGluZy10b3A6IDcwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbnAge1xyXG4gIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG5pbWcge1xyXG4gIHdpZHRoOiA1NTBweDtcclxufVxyXG5iIHtcclxuICBmb250LXNpemU6IDEuNHJlbTtcclxufVxyXG5oMyB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcbmE6dmlzaXRlZCxcclxuYTpsaW5rIHtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 8722:
/*!*********************************************************!*\
  !*** ./src/app/components/smaller/smaller.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmallerComponent": () => (/* binding */ SmallerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project-card/project-card.component */ 9221);



function SmallerComponent_div_1_app_project_card_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-project-card", 5);
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", item_r1);
  }
}
function SmallerComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SmallerComponent_div_1_app_project_card_2_Template, 1, 1, "app-project-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", item_r1.livesitesrc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r1);
  }
}
class SmallerComponent {
  constructor() {
    this.$smallerSites = [{
      title: 'Wo in der Welt',
      src: 'assets/gitpage-images/woinderwelt.png',
      description: 'Erstes Angular Projekt',
      language: 'HTML, CSS, Typescript',
      livesite: 'Vorhanden',
      livesitesrc: 'https://namedmichi.github.io/workspacestudio/angular-test/firstTest/docs/'
    }, {
      title: 'Schere Stein Papier',
      src: 'assets/gitpage-images/scheresteinpapier.png',
      description: 'Spiele gegen einen Bot',
      language: 'HTML, CSS, Javascript',
      livesite: 'Vorhanden',
      livesitesrc: 'https://namedmichi.github.io/workspacestudio/rock-paper-scissors-master/index.html'
    }, {
      title: 'Sneaker Produkt Page',
      src: 'assets/gitpage-images/sneaker.png',
      description: 'Funktionierende Shop Seite',
      language: 'HTML, CSS, Javascript',
      livesite: 'Vorhanden',
      livesitesrc: 'https://namedmichi.github.io/workspacestudio/ecommerce-product-page-main/index.html'
    }, {
      title: 'Fake Google',
      src: 'assets/gitpage-images/google.png',
      description: 'Selbstgebauter Klon',
      language: 'HTML, CSS',
      livesite: 'Vorhanden',
      livesitesrc: 'https://namedmichi.github.io/workspacestudio/uebungen.23/google/google.html'
    }, {
      title: ' Web 3.0',
      src: 'assets/gitpage-images/web3.png',
      description: '',
      language: 'HTML, CSS',
      livesite: 'Vorhanden',
      livesitesrc: 'https://namedmichi.github.io/workspacestudio/news-homepage-main/index.html'
    }, {
      title: ' Clipboard',
      src: 'assets/gitpage-images/clipboard.png',
      description: '',
      language: 'HTML, CSS, Javascript',
      livesite: 'Vorhanden',
      livesitesrc: 'https://namedmichi.github.io/workspacestudio/clipboard-landing-page-master/index.html'
    }, {
      title: 'Huddle',
      src: 'assets/gitpage-images/huddle.png',
      description: '',
      language: 'HTML, CSS',
      livesite: 'Vorhanden',
      livesitesrc: 'https://namedmichi.github.io/workspacestudio/huddle-landing-page-with-alternating-feature-blocks-master/index.html'
    }];
  }
}
SmallerComponent.ɵfac = function SmallerComponent_Factory(t) {
  return new (t || SmallerComponent)();
};
SmallerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SmallerComponent,
  selectors: [["app-smaller"]],
  decls: 2,
  vars: 1,
  consts: [[1, "smallerBody"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], ["target", "_blank", 3, "href"], [3, "item", 4, "ngIf"], [3, "item"]],
  template: function SmallerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SmallerComponent_div_1_Template, 3, 2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.$smallerSites);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_0__.ProjectCardComponent],
  styles: [".smallerBody[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  flex-wrap: wrap;\r\n}\r\na[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:link {\r\n  color: white !important;\r\n  text-decoration: underline;\r\n  text-decoration: none;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zbWFsbGVyL3NtYWxsZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjtBQUNBOztFQUVFLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIscUJBQXFCO0FBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiLnNtYWxsZXJCb2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5hOnZpc2l0ZWQsXHJcbmE6bGluayB7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map