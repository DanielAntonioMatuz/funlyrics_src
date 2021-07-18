(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_player_yt_yt_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/player/yt/yt.component */ "./src/app/components/player/yt/yt.component.ts");
/* harmony import */ var _components_player_local_local_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/player/local/local.component */ "./src/app/components/player/local/local.component.ts");
/* harmony import */ var _components_lyrics_sync_sync_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/lyrics/sync/sync.component */ "./src/app/components/lyrics/sync/sync.component.ts");
/* harmony import */ var _components_pages_watchfun_watchfun_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pages/watchfun/watchfun.component */ "./src/app/components/pages/watchfun/watchfun.component.ts");
/* harmony import */ var _components_pages_my_funsync_my_funsync_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/my-funsync/my-funsync.component */ "./src/app/components/pages/my-funsync/my-funsync.component.ts");
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/home/home.component */ "./src/app/components/pages/home/home.component.ts");
/* harmony import */ var _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pages/login/login.component */ "./src/app/components/pages/login/login.component.ts");
/* harmony import */ var _components_pages_search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pages/search/search.component */ "./src/app/components/pages/search/search.component.ts");












const routes = [
    { path: 'player/yt', component: _components_player_yt_yt_component__WEBPACK_IMPORTED_MODULE_2__["YtComponent"] },
    { path: 'player/local', component: _components_player_local_local_component__WEBPACK_IMPORTED_MODULE_3__["LocalComponent"] },
    { path: 'lyrics/sync', component: _components_lyrics_sync_sync_component__WEBPACK_IMPORTED_MODULE_4__["SyncComponent"] },
    { path: 'watchfun', component: _components_pages_watchfun_watchfun_component__WEBPACK_IMPORTED_MODULE_5__["WatchfunComponent"] },
    { path: 'my-funsync', component: _components_pages_my_funsync_my_funsync_component__WEBPACK_IMPORTED_MODULE_6__["MyFunsyncComponent"] },
    { path: '', component: _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'login', component: _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'search', component: _components_pages_search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"] },
    { path: 'home', component: _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    /*  dataLyricsSync = [[7,'I\'d move to Tokyo',14],[14,'If that\'s where you want to go',18],[18,'Don\'t have to go alone',22],[22,'You can just let me know',26],
        [26,'I\'d move to Tokyo',30],[30,'To London or Mexico',34],[34,'I know that I said goodbye',38],[38,'But can I still change my mind?',40],
        [40,'I was just scared (it got heavy)',48],[48,'This time I swear (I\'m ready)',91],[91,'I\'d move to Tokyo',100]
        ,[100,'I know that I said goodbye',103],[103,'Can I still change my mind?',138],[138,'I\'d move to Tokyo',141],[141,'To London or Mexico',145],
        [145,'I know that I said goodbye',149],[149,'But can I still change my mind?',153],[153,'I was just scared',159],
        [159,'This time I swear (I\'m ready)',168],[168,'But can I still change my mind?',199],[199,'End...',286]]
    
      dataLyricsSyncTraslate = [[7,'Me mudaría a tokio',14],[14,'Si es ahí a donde quieres ir',18],[18,'No tienes que ir solo',22],[22,'Puedes dejarme saber',26],
        [26,'Me mudaría a tokio',30],[30,'A Londres o México',34],[34,'Yo se que dije adios',38],[38,'¿Pero todavía puedo cambiar de opinión?',40],
        [40,'Solo estaba asustado (se puso pesado)',48],[48,'Esta vez lo juro (estoy listo)',91],[91,'Me mudaría a tokio',100]
        ,[100,'Yo se que dije adios',103],[103,'¿Todavía puedo cambiar de opinión?',138],[138,'Me mudaría a tokio',141],[141,'A Londres o México',145],
        [145,'Yo se que dije adios',149],[149,'¿Pero todavía puedo cambiar de opinión?',153],[153,'Solo estaba asustada',159],
        [159,'Esta vez lo juro (estoy listo)',168],[168,'¿Pero todavía puedo cambiar de opinión?',199],[199,'Fin...',286]]*/
    constructor() {
        this.title = 'MusicLetter';
        this.play = false;
        this.lyricsDisplay = "...";
        this.lyricsTraslateDisplay = "...";
        this.playControl = false;
        this.volumeControl = false;
        this.timeTotalMusic = '0:00';
        this.timeCurrentMusic = '0:00';
        this.volumeDefect = 100;
        this.dataLyricsSync = [[5, 'Fireworks', 8], [9, 'Shooting stars', 11], [11, 'Blinding lights', 13], [13, 'Wonder where', 14],
            [14, 'Where you are', 17], [17, 'You\'re in the leaves', 18], [18, 'You\'re in the rain', 20], [20, 'You\'re in the air', 23],
            [23, 'You\'re the one that I keep chasing everywhere', 29], [29, 'I will hunt you down', 34], [34, 'I will hunt you down (2)', 41],
            [41, 'Firefly', 122], [121, 'In the night', 122], [122, 'I see your trail', 125], [125, 'And I wish', 126], [127, 'That somehow', 128],
            [128, 'You could stay', 131], [131, 'But you keep flying', 132], [132, 'That\'s the way', 134], [134, 'That you are', 137],
            [137, 'You will always belong among the stars', 143], [143, 'Firefly', 240], [240, 'End ...', 244]];
        this.dataLyricsSyncTraslate = [[5, 'Fuegos artificiales', 8], [9, 'Estrellas fugaces', 11], [11, 'Luces cegadoras', 13],
            [13, 'Me pregunto donde', 14], [14, 'Dónde estás', 17], [17, 'Estas en las hojas', 18], [18, 'Estas en la lluvia', 20],
            [20, 'Estas en el aire', 23], [23, 'Eres la que sigo persiguiendo en todas partes', 29],
            [29, 'Te cazaré', 34], [34, 'Te cazaré (2)', 41], [41, 'Fuegos artificiales', 122], [121, 'En la noche', 122],
            [122, 'Veo tu rastro', 125], [125, 'Y deseo', 126], [127, 'Que de alguna manera', 128], [128, 'Podrías quedarte', 131],
            [131, 'Pero sigues volando', 132], [132, 'Esa es la manera', 134], [134, 'Eso eres', 137], [137, 'Siempre pertenecerás entre las estrellas', 143],
            [143, 'Fuegos artificiales', 240], [240, 'Fin ...', 244]];
    }
    playOrPaused() {
        this.playControl = !this.playControl;
    }
    btnVolume() {
        this.volumeControl = !this.volumeControl;
    }
    timeSlider() {
        var seekslider, seekto;
        seekslider = document.getElementById('seekslider');
        let audio = document.getElementById('audio-element');
        seekto = audio.duration * (seekslider.value / 100);
        audio.currentTime = seekto;
        seekslider.value = (100 / audio.duration) * audio.currentTime;
    }
    volumeSlider() {
        var volumeslider;
        volumeslider = document.getElementById('volume');
        let audio = document.getElementById('audio-element');
        audio.volume = volumeslider.value / 100;
        this.volumeDefect = volumeslider.value;
    }
    playSyncMusic() {
        setTimeout(() => {
            this.syncLyrics();
        }, 1000);
    }
    syncLyrics() {
        let audio = document.getElementById('audio-element');
        var time = audio.currentTime;
        this.timeTotalMusic = this.timeCurrentPlay(audio.duration);
        this.timeCurrentMusic = this.timeCurrentPlay(audio.currentTime);
        var seekslider;
        seekslider = document.getElementById('seekslider');
        seekslider.value = (100 / audio.duration) * audio.currentTime;
        if (Math.round(time) == this.dataLyricsSync[this.dataLyricsSync.length - 1][2]) {
            this.playControl = false;
            seekslider.value = 100;
        }
        for (let i = 0; i < this.dataLyricsSync.length; i++) {
            if (Math.round(time) == this.dataLyricsSync[i][0]) {
                this.lyricsDisplay = this.dataLyricsSync[i][1] + '';
                this.lyricsTraslateDisplay = this.dataLyricsSyncTraslate[i][1] + '';
            }
            if (Math.round(time) == this.dataLyricsSync[i][2]) {
                this.lyricsDisplay = this.dataLyricsSync[i + 1][1] + '';
                this.lyricsTraslateDisplay = this.dataLyricsSyncTraslate[i + 1][1] + '';
            }
        }
        setTimeout(() => {
            this.syncLyrics();
        }, 1000);
    }
    timeCurrentPlay(segundosP) {
        var dataTime = '';
        let segundos = (Math.round(segundosP % 0x3C)).toString();
        let horas = (Math.floor(segundosP / 0xE10)).toString();
        let minutos = (Math.floor(segundosP / 0x3C) % 0x3C).toString();
        if (parseInt(segundos) < 10) {
            segundos = "0" + segundos;
        }
        if (segundos == "60") {
            segundos = '59';
        }
        dataTime = minutos + ':' + segundos;
        return dataTime;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_player_yt_yt_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/player/yt/yt.component */ "./src/app/components/player/yt/yt.component.ts");
/* harmony import */ var _components_player_local_local_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/player/local/local.component */ "./src/app/components/player/local/local.component.ts");
/* harmony import */ var _components_lyrics_sync_sync_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/lyrics/sync/sync.component */ "./src/app/components/lyrics/sync/sync.component.ts");
/* harmony import */ var _components_structure_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/structure/navbar/navbar.component */ "./src/app/components/structure/navbar/navbar.component.ts");
/* harmony import */ var _components_pages_watchfun_watchfun_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pages/watchfun/watchfun.component */ "./src/app/components/pages/watchfun/watchfun.component.ts");
/* harmony import */ var _components_pages_my_funsync_my_funsync_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pages/my-funsync/my-funsync.component */ "./src/app/components/pages/my-funsync/my-funsync.component.ts");
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pages/home/home.component */ "./src/app/components/pages/home/home.component.ts");
/* harmony import */ var _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pages/login/login.component */ "./src/app/components/pages/login/login.component.ts");
/* harmony import */ var _components_pages_search_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/pages/search/search.component */ "./src/app/components/pages/search/search.component.ts");
/* harmony import */ var _components_pages_index_index_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/pages/index/index.component */ "./src/app/components/pages/index/index.component.ts");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_player_yt_yt_component__WEBPACK_IMPORTED_MODULE_4__["YtComponent"],
        _components_player_local_local_component__WEBPACK_IMPORTED_MODULE_5__["LocalComponent"],
        _components_lyrics_sync_sync_component__WEBPACK_IMPORTED_MODULE_6__["SyncComponent"],
        _components_structure_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
        _components_pages_watchfun_watchfun_component__WEBPACK_IMPORTED_MODULE_8__["WatchfunComponent"],
        _components_pages_my_funsync_my_funsync_component__WEBPACK_IMPORTED_MODULE_9__["MyFunsyncComponent"],
        _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
        _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
        _components_pages_search_search_component__WEBPACK_IMPORTED_MODULE_12__["SearchComponent"],
        _components_pages_index_index_component__WEBPACK_IMPORTED_MODULE_13__["IndexComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_player_yt_yt_component__WEBPACK_IMPORTED_MODULE_4__["YtComponent"],
                    _components_player_local_local_component__WEBPACK_IMPORTED_MODULE_5__["LocalComponent"],
                    _components_lyrics_sync_sync_component__WEBPACK_IMPORTED_MODULE_6__["SyncComponent"],
                    _components_structure_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                    _components_pages_watchfun_watchfun_component__WEBPACK_IMPORTED_MODULE_8__["WatchfunComponent"],
                    _components_pages_my_funsync_my_funsync_component__WEBPACK_IMPORTED_MODULE_9__["MyFunsyncComponent"],
                    _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                    _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                    _components_pages_search_search_component__WEBPACK_IMPORTED_MODULE_12__["SearchComponent"],
                    _components_pages_index_index_component__WEBPACK_IMPORTED_MODULE_13__["IndexComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/lyrics/sync/sync.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/lyrics/sync/sync.component.ts ***!
  \**********************************************************/
/*! exports provided: SyncComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncComponent", function() { return SyncComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _structure_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../structure/navbar/navbar.component */ "./src/app/components/structure/navbar/navbar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function SyncComponent_div_6_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Upss... No olvides agregar el link de YouTube para comenzar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SyncComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sync");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Fun:)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sincroniza y ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "diviertete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " con tu contenido favorito");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SyncComponent_div_6_div_12_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "A\u00F1ade la URL de YouTube del video");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SyncComponent_div_6_Template_input_input_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.addLinkYouTube($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SyncComponent_div_6_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.startSyncExecutions(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Empezar a sincronizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.error);
} }
function SyncComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SyncComponent_div_7_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.startProcessMainSync(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sincronizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "A\u00F1ade la letra de toda la canci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "textarea", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SyncComponent_div_7_Template_textarea_input_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.addLyricsData($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SyncComponent_div_8_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Empieza a sincronizar, dale click al boton ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "play");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SyncComponent_div_8_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A1Estas sincronizando!, para parar, presiona el bot\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "stop");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SyncComponent_div_8_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Haz sincronizado ", ctx_r17.position, " de ", ctx_r17.dataLyricsMain.length - 1, " letras");
} }
function SyncComponent_div_8_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Video sincronizado, dale click en terminar para ver como quedo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SyncComponent_div_8_label_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r19.dataLyricsMain[ctx_r19.position]);
} }
function SyncComponent_div_8_label_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Fin...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SyncComponent_div_8_div_13_div_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SyncComponent_div_8_div_13_div_1_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r26.playOrPaused(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SyncComponent_div_8_div_13_div_1_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SyncComponent_div_8_div_13_div_1_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r28.playOrPaused2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SyncComponent_div_8_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SyncComponent_div_8_div_13_div_1_button_1_Template, 3, 0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SyncComponent_div_8_div_13_div_1_button_2_Template, 3, 0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SyncComponent_div_8_div_13_div_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r30.startProcessMainSync(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "-1 s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SyncComponent_div_8_div_13_div_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r32.startProcessMainSync(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "+1 s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SyncComponent_div_8_div_13_div_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r33.reloadData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Reiniciar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r22.playControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.playControl);
} }
function SyncComponent_div_8_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SyncComponent_div_8_div_13_div_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r34.endSyncVideo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Terminar de sincronizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SyncComponent_div_8_div_13_div_2_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r36.reloadData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Reiniciar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Ir a WatchFun");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SyncComponent_div_8_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SyncComponent_div_8_div_13_div_1_Template, 9, 2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SyncComponent_div_8_div_13_div_2_Template, 7, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.dataLyricsMain[ctx_r21.position] != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.dataLyricsMain[ctx_r21.position] == null);
} }
function SyncComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SyncComponent_div_8_Template_input_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.pauseByActions(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Pausa por cada sincronizaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SyncComponent_div_8_div_5_Template, 6, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SyncComponent_div_8_div_6_Template, 6, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SyncComponent_div_8_p_8_Template, 2, 2, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SyncComponent_div_8_p_9_Template, 2, 0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SyncComponent_div_8_label_11_Template, 2, 1, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SyncComponent_div_8_label_12_Template, 2, 0, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SyncComponent_div_8_div_13_Template, 3, 2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.playControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.playControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.position <= ctx_r2.dataLyricsMain.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.position > ctx_r2.dataLyricsMain.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.dataLyricsMain[ctx_r2.position] != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.dataLyricsMain[ctx_r2.position] == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.endSyncExecute);
} }
function SyncComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.lyricsDisplay);
} }
function SyncComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sincronizaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " completa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Comparte esta gran ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "historia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " con tus amigos:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Tu link de ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "WatchFun:)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " del video");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SyncComponent_div_10_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.copyUrl(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Copiar link y salir");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SyncComponent_div_11_a_1_h3_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r44.nameVideo);
} }
function SyncComponent_div_11_a_1_h3_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SyncComponent_div_11_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SyncComponent_div_11_a_1_h3_3_Template, 2, 1, "h3", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SyncComponent_div_11_a_1_h3_4_Template, 2, 0, "h3", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.youtube.com/watch?v=", ctx_r41.video, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r41.preview);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r41.preview);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://img.youtube.com/vi/", ctx_r41.video, "/maxresdefault.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SyncComponent_div_11_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SyncComponent_div_11_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r46.openFullScreen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SyncComponent_div_11_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SyncComponent_div_11_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r48.closeFullScreen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SyncComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SyncComponent_div_11_a_1_Template, 7, 4, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "audio", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("play", function SyncComponent_div_11_Template_audio_play_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.playSyncMusic(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "source", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SyncComponent_div_11_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.btnVolume(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SyncComponent_div_11_Template_input_change_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.timeSlider(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SyncComponent_div_11_button_18_Template, 3, 0, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SyncComponent_div_11_button_19_Template, 3, 0, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.detailsHidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r5.timeCurrentMusic, "/", ctx_r5.timeTotalMusic, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.fullScreen);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.fullScreen);
} }
function SyncComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SyncComponent_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r54.endSynEx(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Terminar preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SyncComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SyncComponent_div_14_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r56.volumeSlider(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r7.volumeDefect);
} }
class SyncComponent {
    constructor() {
        this.title = 'MusicLetter';
        this.play = false;
        this.lyricsDisplay = '...';
        this.lyricsTraslateDisplay = '...';
        this.playControl = false;
        this.volumeControl = false;
        this.timeTotalMusic = '0:00';
        this.timeCurrentMusic = '0:00';
        this.volumeDefect = 100;
        this.fullScreen = false;
        this.reframed = false;
        this.nameVideo = '';
        this.syncStart = false;
        this.error = false;
        this.dataLyricsMain = [];
        this.mainAction = false;
        this.position = 0;
        this.statusSync = 2;
        this.dataSyncEnter = [];
        this.preview = false;
        this.detailsHidden = true;
        this.pauseActions = true;
        this.endSyncExecute = false;
        this.dataLyricsSync = [];
        this.elem = document.documentElement;
    }
    ngOnInit() {
    }
    btnVolume() {
        this.volumeControl = !this.volumeControl;
    }
    timeSlider() {
        var seekslider, seekto;
        seekslider = document.getElementById('seekslider');
        seekto = this.player.getDuration() * (seekslider.value / 100);
        this.player.seekTo(seekto);
        seekslider.value = (100 / this.player.getDuration()) * this.player.getCurrentTime();
        // @ts-ignore
        document.getElementById('audio-element').play();
        document.getElementById('body').classList.remove('bkg-alternative');
        this.eventData.target.playVideo();
        this.playControl = true;
        this.lyricsDisplay = '...';
        this.lyricsTraslateDisplay = '...';
    }
    volumeSlider() {
        var volumeslider;
        volumeslider = document.getElementById('volume');
        this.player.setVolume(volumeslider.value);
        this.volumeDefect = volumeslider.value;
    }
    playSyncMusic() {
        document.getElementById('body').classList.remove('bkg-alternative');
        setTimeout(() => {
            this.syncLyrics();
        }, 1000);
    }
    syncLyrics() {
        var time = this.cleanTime();
        this.timeTotalMusic = this.timeCurrentPlay(this.player.getDuration());
        this.timeCurrentMusic = this.timeCurrentPlay(this.cleanTime());
        this.nameVideo = this.player.getVideoData().title;
        var seekslider;
        seekslider = document.getElementById('seekslider');
        seekslider.value = (100 / this.player.getDuration()) * this.player.getCurrentTime();
        if (Math.round(time) == this.dataLyricsSync[this.dataLyricsSync.length - 1][2]) {
            this.playControl = false;
            seekslider.value = 100;
        }
        if (this.preview) {
            for (let i = 0; i < this.dataLyricsSync.length; i++) {
                if (Math.round(time) == this.dataLyricsSync[i].tI) {
                    this.lyricsDisplay = this.dataLyricsSync[i].data + '';
                }
                /*        if (Math.round(time) == this.dataLyricsSync[i].tE) {
                          this.lyricsDisplay = this.dataLyricsSync[i + 1].data + '';
                        }*/
            }
        }
        setTimeout(() => {
            this.syncLyrics();
        }, 1000);
    }
    timeCurrentPlay(segundosP) {
        var dataTime = '';
        let segundos = (Math.round(segundosP % 0x3C)).toString();
        let horas = (Math.floor(segundosP / 0xE10)).toString();
        let minutos = (Math.floor(segundosP / 0x3C) % 0x3C).toString();
        if (parseInt(segundos) < 10) {
            segundos = '0' + segundos;
        }
        if (segundos == '60') {
            segundos = '59';
        }
        dataTime = minutos + ':' + segundos;
        return dataTime;
    }
    init() {
        var tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        window['onYouTubeIframeAPIReady'] = () => this.startVideo();
    }
    startVideo() {
        this.reframed = false;
        this.player = new window['YT'].Player('player', {
            videoId: this.video,
            playerVars: {
                autoplay: 0,
                modestbranding: 0,
                controls: 0,
                disablekb: 0,
                rel: 0,
                showinfo: 0,
                fs: 0,
                playsinline: 0
            },
            events: {
                'onStateChange': this.onPlayerStateChange.bind(this),
                'onError': this.onPlayerError.bind(this),
                'onReady': this.onPlayerReady.bind(this),
            }
        });
    }
    onPlayerReady(event) {
        this.eventData = event;
    }
    onPlayerStateChange(event) {
        //console.log(event)
        switch (event.data) {
            case window['YT'].PlayerState.PLAYING:
                if (this.cleanTime() == 0) {
                    //console.log('started ' + this.cleanTime());
                    this.playSyncMusic();
                }
                else {
                    //console.log('playing ' + this.cleanTime())
                }
                ;
                break;
            case window['YT'].PlayerState.PAUSED:
                if (this.player.getDuration() - this.player.getCurrentTime() != 0) {
                    // console.log('paused' + ' @ ' + this.cleanTime());
                }
                ;
                break;
            case window['YT'].PlayerState.ENDED:
                document.getElementById('body').classList.add('bkg-alternative');
                this.playControl = false;
                //console.log('ended ');
                break;
        }
    }
    cleanTime() {
        return Math.round(this.player.getCurrentTime());
    }
    onPlayerError(event) {
        switch (event.data) {
            case 2:
                //console.log('' + this.video)
                break;
            case 100:
                break;
            case 101 || false:
                break;
        }
    }
    playOrPaused() {
        this.playControl = !this.playControl;
        try {
            this.eventData.target.playVideo();
        }
        catch (e) {
            this.eventData.target.playVideo();
        }
        this.dataLyricsSync.push({ "tI": Math.round(this.player.getCurrentTime()), "data": this.dataLyricsMain[this.position], "tE": 0 });
    }
    playOrPaused2() {
        this.playControl = !this.playControl;
        if (this.pauseActions) {
            this.eventData.target.pauseVideo();
        }
        this.dataLyricsSync[this.position][2] = Math.round(this.player.getCurrentTime());
        this.position++;
    }
    openFullScreen() {
        var elem = document.documentElement;
        this.fullScreen = true;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else { // @ts-ignore
            if (elem.webkitRequestFullscreen) { /* Safari */
                // @ts-ignore
                elem.webkitRequestFullscreen();
            }
            else { // @ts-ignore
                if (elem.msRequestFullscreen) { /* IE11 */
                    // @ts-ignore
                    elem.msRequestFullscreen();
                }
            }
        }
    }
    closeFullScreen() {
        var elem = document.documentElement;
        this.fullScreen = false;
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else { // @ts-ignore
            if (document.webkitExitFullscreen) { /* Safari */
                // @ts-ignore
                document.webkitExitFullscreen();
            }
            else { // @ts-ignore
                if (document.msExitFullscreen) { /* IE11 */
                    // @ts-ignore
                    document.msExitFullscreen();
                }
            }
        }
    }
    addLinkYouTube(value) {
        let dataAux = value.split('https://www.youtube.com/watch?v=');
        this.video = dataAux[1];
    }
    startSyncExecutions() {
        if (this.video != null) {
            this.syncStart = true;
            this.error = false;
            this.init();
            this.playSyncMusic();
            this.detailsHidden = false;
        }
        else {
            this.error = true;
        }
    }
    addLyricsData(value) {
        this.dataLyricsMain = value.split("\n");
    }
    startProcessMainSync() {
        let dataAux = [];
        for (let i = 0; i < this.dataLyricsMain.length; i++) {
            if (this.dataLyricsMain[i] != "") {
                dataAux.push(this.dataLyricsMain[i]);
            }
        }
        this.dataLyricsMain = dataAux;
        this.mainAction = true;
    }
    endSyncVideo() {
        this.preview = true;
        this.init();
        this.player.seekTo(0);
        this.eventData.target.playVideo();
    }
    pauseByActions() {
        this.pauseActions = false;
    }
    reloadData() {
        this.eventData.target.pauseVideo();
        this.init();
        this.player.seekTo(0);
        this.playControl = false;
        this.position = 0;
    }
    endSynEx() {
        this.endSyncExecute = true;
    }
    copyUrl() {
    }
}
SyncComponent.ɵfac = function SyncComponent_Factory(t) { return new (t || SyncComponent)(); };
SyncComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SyncComponent, selectors: [["app-sync"]], decls: 15, vars: 8, consts: [["id", "body"], [1, "mx-auto", "bck-main", "bkg-alpha"], [1, "video-foreground", 2, "position", "fixed", "z-index", "-99", "width", "100%", "height", "100%"], ["id", "player", 2, "width", "100%!important", "height", "100%!important"], [1, "letter", "container", "mx-auto", "w-75", 2, "text-align", "center"], ["class", "row", "style", "text-align: center", 4, "ngIf"], ["class", "row ", "style", "text-align: center", 4, "ngIf"], ["class", "mx-auto player", "style", "text-align: center", 4, "ngIf"], [2, "display", "block", "margin-top", "-190px", "margin-left", "15px"], ["type", "button", "class", "btn btn-primary mb-3", "style", "margin-left: 10px", 3, "click", 4, "ngIf"], ["style", "display: block; margin-top: -160px; margin-left: 15px;background: transparent!important;", 4, "ngIf"], [1, "row", 2, "text-align", "center"], ["for", "exampleFormControlInput1", 1, "form-label"], [2, "font-weight", "600"], [1, "container", 2, "text-align", "center"], [2, "font-size", "30px", "text-align", "center"], [1, "col-12", "letter-mv", 2, "text-align", "center"], ["class", "alert alert-danger", "role", "alert", "style", "font-size: 18px", 4, "ngIf"], ["for", "exampleFormControlInput1", 1, "form-label", 2, "font-size", "35px!important"], ["type", "url", "id", "exampleFormControlInput1", "placeholder", "Link YouTube", 1, "form-control", 2, "width", "100%", "outline", "none!important", "height", "60px", "border-radius", "15px", 3, "input"], [1, "col-12", 2, "text-align", "center"], [1, "col-auto"], ["type", "button", 1, "btn", "btn-primary", "mb-3", "btn-stt", 3, "click"], ["role", "alert", 1, "alert", "alert-danger", 2, "font-size", "18px"], [1, "col-12", 2, "text-align", "center", "margin-bottom", "-50px"], ["type", "url", "id", "exampleFormControlInput2", "placeholder", "Agrega la letra", 1, "form-control", 2, "width", "100%", "min-height", "350px", "max-height", "600px", "border-radius", "30px", 3, "input"], [1, "form-check", "form-switch", "w-50", 2, "font-size", "25px", "text-align", "left"], ["type", "checkbox", "id", "flexSwitchCheckChecked", "checked", "", 1, "form-check-input", 3, "click"], ["for", "flexSwitchCheckChecked", 1, "form-check-label", "txt-fix"], ["class", "txt-fix", "style", "background-color: #23d5ab; border-radius: 15px; padding: 0px!important; height: 90px!important;", 4, "ngIf"], ["style", "background-color: #e73c7e; border-radius: 15px; padding: 0px!important; height: 90px!important;", 4, "ngIf"], [2, "margin-top", "15px"], ["style", "font-size: 18px;", 4, "ngIf"], [1, "col-12", "letter-mv", "bkg-alternative", 2, "text-align", "center", "border-radius", "15px"], ["for", "exampleFormControlInput1", "class", "form-label", 4, "ngIf"], ["class", "col-12", "style", "text-align: center", 4, "ngIf"], [1, "txt-fix", 2, "background-color", "#23d5ab", "border-radius", "15px", "padding", "0px!important", "height", "90px!important"], ["for", "exampleFormControlInput1 txt-fix", 1, "form-label", 2, "font-size", "35px!important", "margin-top", "15px!important"], [1, "txt-fix"], [2, "background-color", "#e73c7e", "border-radius", "15px", "padding", "0px!important", "height", "90px!important"], [2, "font-size", "18px"], ["class", "col-auto", 4, "ngIf"], ["class", "btn btn-primary mb-3", "onclick", "document.getElementById('audio-element').play()", 3, "click", 4, "ngIf"], ["class", "btn btn-primary mb-3", "onclick", "document.getElementById('audio-element').pause()", "style", "margin-left: 10px", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", "mb-3", 2, "margin-left", "10px", 3, "click"], ["onclick", "document.getElementById('audio-element').play()", 1, "btn", "btn-primary", "mb-3", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "32", "height", "32", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-caret-right-fill"], ["d", "M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"], ["onclick", "document.getElementById('audio-element').pause()", 1, "btn", "btn-primary", "mb-3", 2, "margin-left", "10px", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "32", "height", "32", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-pause-fill"], ["d", "M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"], ["href", "/watchfun", "type", "button", 1, "btn", "btn-primary", "mb-3", 2, "margin-left", "10px"], ["for", "exampleFormControlInput1", 1, "form-label", "txt-fix"], [1, "txt-fix", 2, "font-size", "30px", "text-align", "center"], ["for", "exampleFormControlInput1", 1, "form-label", "txt-fix", 2, "font-size", "35px!important"], [1, "ft-600"], ["disabled", "", "value", "link", "type", "url", "placeholder", "Link YouTube", 1, "form-control", "link", 2, "width", "100%", "outline", "none!important", "height", "60px", "border-radius", "15px"], [1, "mx-auto", "player", 2, "text-align", "center"], ["style", "text-decoration: none!important; margin-top: -55px", "class", "header data-music bkg ocultar-div", 3, "href", 4, "ngIf"], ["id", "audio-element", "controls", "", 2, "visibility", "hidden", 3, "play"], ["src", "", "type", "audio/flac"], [1, "music-player"], [2, "float", "left"], [1, "btn-play", 2, "background", "transparent!important", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "32", "height", "32", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-volume-up-fill"], ["d", "M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"], ["d", "M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"], ["d", "M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"], ["disabled", "", 1, "btn-play", "let-ch", 2, "background", "transparent!important"], [1, "row"], [1, "col-11", 2, "text-align", "left", "margin-top", "20px", "margin-left", "20px"], ["id", "timeline"], ["id", "seekslider", "type", "range", "min", "0", "max", "100", "value", "0", "step", "1", 1, "input-play", "uk-progress", 2, "width", "100%", 3, "change"], [1, "ocultar-div"], ["class", "btn-play", "style", "margin-top: 4px; text-align: right;background: transparent!important;", 3, "click", 4, "ngIf"], ["class", "btn-play", "style", "margin-top: 4px; text-align: right; background: transparent!important;", 3, "click", 4, "ngIf"], [1, "header", "data-music", "bkg", "ocultar-div", 2, "text-decoration", "none!important", "margin-top", "-55px", 3, "href"], [1, "row", "let-ch"], [1, "col-7", "justify-text", "adjust-v-h"], ["style", "margin-top: 5px; margin-left: 8px; text-align: center; font-size: 20px!important;", 4, "ngIf"], ["style", "margin-top: 5px; margin-left: 8px; text-align: center; font-size: 30px!important;", 4, "ngIf"], [1, "col-5"], [2, "width", "90px", "height", "90px", "border-radius", "10px", "margin-top", "5px", 3, "src"], [2, "margin-top", "5px", "margin-left", "8px", "text-align", "center", "font-size", "20px!important"], [2, "margin-top", "5px", "margin-left", "8px", "text-align", "center", "font-size", "30px!important"], [1, "btn-play", 2, "margin-top", "4px", "text-align", "right", "background", "transparent!important", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-fullscreen"], ["d", "M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrows-fullscreen"], ["fill-rule", "evenodd", "d", "M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"], [2, "display", "block", "margin-top", "-160px", "margin-left", "15px", "background", "transparent!important"], ["id", "volume", "type", "range", "min", "0", "max", "100", "step", "1", 1, "vranger", "input-play", "uk-progress", 2, "width", "150px", "background-color", "indianred!important", 3, "value", "change"]], template: function SyncComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SyncComponent_div_6_Template, 20, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SyncComponent_div_7_Template, 9, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SyncComponent_div_8_Template, 14, 7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SyncComponent_div_9_Template, 4, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SyncComponent_div_10_Template, 22, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SyncComponent_div_11_Template, 20, 5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SyncComponent_button_13_Template, 2, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SyncComponent_div_14_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.syncStart && !ctx.endSyncExecute);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.syncStart && !ctx.mainAction && !ctx.endSyncExecute);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mainAction && !ctx.preview && !ctx.endSyncExecute);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.preview && !ctx.endSyncExecute);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.endSyncExecute);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.detailsHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.preview && !ctx.endSyncExecute);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.volumeControl);
    } }, directives: [_structure_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["@charset \"UTF-8\";\n@media screen and (max-width: 600px) {\n  .letter-mv[_ngcontent-%COMP%] {\n    font-size: 40px !important;\n  }\n\n  .ocultar-div[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .mrg-t-m[_ngcontent-%COMP%] {\n    margin-top: 60px;\n  }\n\n  .txt-fix[_ngcontent-%COMP%] {\n    font-size: 18px !important;\n  }\n}\n.data-music[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  background: transparent !important;\n}\n.bkg-alternative[_ngcontent-%COMP%] {\n  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab) !important;\n  background-size: 400% 400%;\n  animation: gradient 15s ease infinite !important;\n}\n.bkg-alpha[_ngcontent-%COMP%] {\n  background: linear-gradient(-45deg, black, rgba(35, 23, 171, 0.85), rgba(35, 213, 171, 0.85)) !important;\n  background-size: 400% 400%;\n  animation: gradient 15s ease infinite !important;\n}\n@keyframes gradient {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n.video-background[_ngcontent-%COMP%] {\n  background: #000;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -99;\n}\n.video-foreground[_ngcontent-%COMP%], .video-background[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n@keyframes gradient {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n.bck-main[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n.header[_ngcontent-%COMP%] {\n  position: fixed;\n  height: 100px;\n  width: 300px;\n  background-color: white;\n  border-radius: 20px;\n  margin-top: 15px;\n  margin-left: 5px;\n}\n#audio-element[_ngcontent-%COMP%] {\n  width: 100%;\n  outline: none !important;\n}\n.bkg[_ngcontent-%COMP%] {\n  background: black !important;\n  background-size: 400% 400%;\n  animation: gradient 15s ease infinite;\n}\n.letter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 90vh;\n  font-size: 80px;\n  color: white;\n  font-family: atten-round-new, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  text-align: center;\n  word-wrap: break-word;\n}\n.let-ch[_ngcontent-%COMP%] {\n  font-family: atten-round-new, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n}\n.main-presentation[_ngcontent-%COMP%] {\n  width: 75%;\n  height: 400px;\n  background-color: #e73c7e;\n  text-align: center;\n  border-radius: 15px;\n  padding-top: 75px;\n}\n.justify-text[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n  max-width: 100%;\n}\n.adjust-v-h[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.player[_ngcontent-%COMP%] {\n  position: absolute;\n  \n  left: 0px;\n  \n  right: 0px;\n  \n  bottom: 0px;\n  \n  z-index: 0;\n}\n.data-music[_ngcontent-%COMP%] {\n  color: white;\n}\n.music-player[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n.btn-play[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  border: none !important;\n  color: white;\n  margin-left: 5px;\n  margin-top: 25px;\n  height: 50px;\n  width: 50px;\n  border-radius: 5px;\n  outline: none !important;\n  padding-top: -30px !important;\n}\n.btn-play-style[_ngcontent-%COMP%] {\n  color: white;\n}\n#timeline[_ngcontent-%COMP%] {\n  width: 85%;\n  height: 20px;\n  margin-top: 20px;\n  float: left;\n  border-radius: 15px;\n  position: relative;\n  background: #5f2c82;\n  \n  \n  background: linear-gradient(to right, #49a09d, #5f2c82);\n  \n}\n.uk-progress[_ngcontent-%COMP%] {\n  overflow: hidden;\n  height: 20px !important;\n  -webkit-appearance: none;\n  background-color: transparent !important;\n  border-radius: 15px;\n  outline: none !important;\n}\ninput[type=range][_ngcontent-%COMP%]::-webkit-slider-thumb {\n  width: 20px;\n  -webkit-appearance: none;\n  height: 20px;\n  cursor: ew-resize;\n  border-radius: 50%;\n  background: white;\n}\n.vranger[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  transform: rotate(270deg);\n  -moz-transform: rotate(270deg);\n  \n}\n.volume-input[_ngcontent-%COMP%]::-webkit-slider-thumb {\n  width: 20px;\n  -webkit-appearance: none;\n  height: 20px;\n  cursor: ew-resize;\n  border-radius: 50%;\n  background: white !important;\n}\n\n[_ngcontent-%COMP%]:-webkit-full-screen {\n  background-color: yellow;\n}\n\n[_ngcontent-%COMP%]:-ms-fullscreen {\n  background-color: yellow;\n}\n\n[_ngcontent-%COMP%]:-webkit-full-screen {\n  background-color: yellow;\n}\n[_ngcontent-%COMP%]:fullscreen {\n  background-color: yellow;\n}\n.btn-stt[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  background-color: #23a6d5;\n  border-color: transparent;\n  outline: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9seXJpY3Mvc3luYy9zeW5jLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFO0lBQ0UsMEJBQUE7RUFFRjs7RUFBQTtJQUNFLGFBQUE7RUFHRjs7RUFEQTtJQUNFLGdCQUFBO0VBSUY7O0VBRkE7SUFDRSwwQkFBQTtFQUtGO0FBQ0Y7QUFGQTtFQUNFLGtDQUFBO0FBSUY7QUFEQTtFQUNFLGtGQUFBO0VBQ0EsMEJBQUE7RUFDQSxnREFBQTtBQUlGO0FBREE7RUFDRSx3R0FBQTtFQUNBLDBCQUFBO0VBQ0EsZ0RBQUE7QUFJRjtBQURBO0VBQ0U7SUFDRSwyQkFBQTtFQUlGO0VBRkE7SUFDRSw2QkFBQTtFQUlGO0VBRkE7SUFDRSwyQkFBQTtFQUlGO0FBQ0Y7QUFEQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFBUSxRQUFBO0VBQVUsU0FBQTtFQUFXLE9BQUE7RUFDN0IsWUFBQTtBQU1GO0FBSkE7O0VBRUUsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFPRjtBQUpBO0VBQ0U7SUFDRSwyQkFBQTtFQU9GO0VBTEE7SUFDRSw2QkFBQTtFQU9GO0VBTEE7SUFDRSwyQkFBQTtFQU9GO0FBQ0Y7QUFKQTtFQUNFLGFBQUE7QUFNRjtBQUhBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFNRjtBQUhBO0VBQ0UsV0FBQTtFQUNBLHdCQUFBO0FBTUY7QUFIQTtFQUNFLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQ0FBQTtBQU1GO0FBSEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBTUY7QUFIQTtFQUNFLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQU1GO0FBSEE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBTUY7QUFIQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQU1GO0FBSEE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQU1GO0FBSEE7RUFDRSxrQkFBQTtFQUFtQixpREFBQTtFQUNuQixTQUFBO0VBQVUsc0NBQUE7RUFDVixVQUFBO0VBQVcsd0NBQUE7RUFDWCxXQUFBO0VBQVksK0JBQUE7RUFDWixVQUFBO0FBVUY7QUFQQTtFQUNFLFlBQUE7QUFVRjtBQVBBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQVVGO0FBUEE7RUFDRSx3Q0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSw2QkFBQTtBQVVGO0FBUEE7RUFDRSxZQUFBO0FBVUY7QUFQQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQXNCLDhCQUFBO0VBQzRDLCtCQUFBO0VBQ2xFLHVEQUFBO0VBQXlELHFFQUFBO0FBYTNEO0FBVEE7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUFZRjtBQVRBO0VBQ0UsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQVlGO0FBVEE7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFBZ0MseUNBQUE7QUFhbEM7QUFWQTtFQUNFLFdBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7QUFhRjtBQVZBLGtCQUFBO0FBQ0E7RUFDRSx3QkFBQTtBQWFGO0FBVkEsU0FBQTtBQUNBO0VBQ0Usd0JBQUE7QUFhRjtBQVZBLG9CQUFBO0FBQ0E7RUFDRSx3QkFBQTtBQWFGO0FBZEE7RUFDRSx3QkFBQTtBQWFGO0FBVEE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtBQVlGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9seXJpY3Mvc3luYy9zeW5jLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmxldHRlci1tdiB7XG4gICAgZm9udC1zaXplOiA0MHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAub2N1bHRhci1kaXYge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubXJnLXQtbSB7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgfVxuXG4gIC50eHQtZml4IHtcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgfVxufVxuLmRhdGEtbXVzaWMsIGJvZHkge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4uYmtnLWFsdGVybmF0aXZlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2VlNzc1MiwgI2U3M2M3ZSwgIzIzYTZkNSwgIzIzZDVhYikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiA0MDAlIDQwMCU7XG4gIGFuaW1hdGlvbjogZ3JhZGllbnQgMTVzIGVhc2UgaW5maW5pdGUgIWltcG9ydGFudDtcbn1cblxuLmJrZy1hbHBoYSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsIGJsYWNrLCByZ2JhKDM1LCAyMywgMTcxLCAwLjg1KSwgcmdiYSgzNSwgMjEzLCAxNzEsIDAuODUpKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgNDAwJTtcbiAgYW5pbWF0aW9uOiBncmFkaWVudCAxNXMgZWFzZSBpbmZpbml0ZSAhaW1wb3J0YW50O1xufVxuXG5Aa2V5ZnJhbWVzIGdyYWRpZW50IHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcbiAgfVxuICA1MCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcbiAgfVxufVxuLnZpZGVvLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogLTk5O1xufVxuXG4udmlkZW8tZm9yZWdyb3VuZCxcbi52aWRlby1iYWNrZ3JvdW5kIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuQGtleWZyYW1lcyBncmFkaWVudCB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gIH1cbiAgNTAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gIH1cbn1cbi5iY2stbWFpbiB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbiNhdWRpby1lbGVtZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmJrZyB7XG4gIGJhY2tncm91bmQ6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xuICBhbmltYXRpb246IGdyYWRpZW50IDE1cyBlYXNlIGluZmluaXRlO1xufVxuXG4ubGV0dGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDkwdmg7XG4gIGZvbnQtc2l6ZTogODBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogYXR0ZW4tcm91bmQtbmV3LCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG4ubGV0LWNoIHtcbiAgZm9udC1mYW1pbHk6IGF0dGVuLXJvdW5kLW5ldywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4ubWFpbi1wcmVzZW50YXRpb24ge1xuICB3aWR0aDogNzUlO1xuICBoZWlnaHQ6IDQwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTczYzdlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBhZGRpbmctdG9wOiA3NXB4O1xufVxuXG4uanVzdGlmeS10ZXh0IHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5hZGp1c3Qtdi1oIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wbGF5ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8qRWwgZGl2IHNlcsOhIHViaWNhZG8gY29uIHJlbGFjacOzbiBhIGxhIHBhbnRhbGxhKi9cbiAgbGVmdDogMHB4O1xuICAvKkEgbGEgZGVyZWNoYSBkZWplIHVuIGVzcGFjaW8gZGUgMHB4Ki9cbiAgcmlnaHQ6IDBweDtcbiAgLypBIGxhIGl6cXVpZXJkYSBkZWplIHVuIGVzcGFjaW8gZGUgMHB4Ki9cbiAgYm90dG9tOiAwcHg7XG4gIC8qQWJham8gZGVqZSB1biBlc3BhY2lvIGRlIDBweCovXG4gIHotaW5kZXg6IDA7XG59XG5cbi5kYXRhLW11c2ljIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubXVzaWMtcGxheWVyIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmJ0bi1wbGF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAtMzBweCAhaW1wb3J0YW50O1xufVxuXG4uYnRuLXBsYXktc3R5bGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbiN0aW1lbGluZSB7XG4gIHdpZHRoOiA4NSU7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogIzVmMmM4MjtcbiAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzQ5YTA5ZCwgIzVmMmM4Mik7XG4gIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzQ5YTA5ZCwgIzVmMmM4Mik7XG4gIC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cbn1cblxuLnVrLXByb2dyZXNzIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5pbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICB3aWR0aDogMjBweDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBoZWlnaHQ6IDIwcHg7XG4gIGN1cnNvcjogZXctcmVzaXplO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4udnJhbmdlciB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgLypkbyBzYW1lIGZvciBvdGhlciBicm93c2VycyBpZiByZXF1aXJlZCovXG59XG5cbi52b2x1bWUtaW5wdXQ6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgd2lkdGg6IDIwcHg7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgaGVpZ2h0OiAyMHB4O1xuICBjdXJzb3I6IGV3LXJlc2l6ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4vKiBTYWZhcmkgc3ludGF4ICovXG46LXdlYmtpdC1mdWxsLXNjcmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbn1cblxuLyogSUUxMSAqL1xuOi1tcy1mdWxsc2NyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xufVxuXG4vKiBTdGFuZGFyZCBzeW50YXggKi9cbjpmdWxsc2NyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xufVxuXG4uYnRuLXN0dCB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyM2E2ZDU7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SyncComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sync',
                templateUrl: './sync.component.html',
                styleUrls: ['./sync.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/pages/home/home.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _structure_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../structure/navbar/navbar.component */ "./src/app/components/structure/navbar/navbar.component.ts");



class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 249, vars: 0, consts: [[1, "bkg-alternative", "full-display", "let-ch"], ["id", "main", 1, "fix-display"], [1, "main-presentation", "mx-auto", "mrg-main", 2, "background", "url(https://miro.medium.com/max/10000/0*980dH3rjTZ6BHbWw)", "background-position", "center", "background-repeat", "no-repeat", "background-size", "cover", "margin-top", "0px"], [1, "color-wh", 2, "text-align", "left", "margin-left", "20px"], [2, "font-weight", "600"], [2, "font-size", "50px"], [1, "color-wh", 2, "text-align", "center"], [1, "slider", "mx-auto"], [1, "slides"], [2, "background", "url(https://miro.medium.com/max/10000/0*980dH3rjTZ6BHbWw)", "background-position", "center", "background-repeat", "no-repeat", "background-size", "cover"], [1, "row", 2, "margin-left", "95px"], [1, "col-12", "text-1", 2, "text-align", "left", "margin-left", "15px"], [1, "col-12", "w-75", "text", 2, "font-size", "20px", "text-align", "left", "margin-left", "15px"], [1, "bkg-alternative"], [1, "row"], [1, "col-12"], [1, "ft-600"], [1, "col-12", 2, "margin-top", "-70px"], [1, "btn-start", 2, "font-size", "22px"], [1, "mrg-main"], [1, "fix-display"], [1, "mx-auto", "color-wh", "w-75", 2, "text-align", "center"], [2, "text-align", "left"], [2, "font-size", "22px"], [1, "mx-auto", "txt-center", "mrg-main", "color-wh", "w-75"], [1, "mrg-main", "mx-auto", "mrg-ctn"], [1, "col-12", 2, "margin-top", "30px"], [1, "mrg-ctn"], [1, "mrg-main", "color-wh", 2, "text-align", "center"], [1, "main-presentation", "mx-auto", 2, "background", "url(https://res.cloudinary.com/vxosplatform/image/upload/v1612850580/resources-tlint/Componente_1_1_xkzxdb.png)", "background-position", "center", "background-repeat", "no-repeat", "background-size", "cover"], [1, "color-wh", 2, "margin-top", "35px"], [1, "btn-start"], [1, "mx-auto", "txt-center", "mrg-main", "color-wh", "w-75", 2, "text-align", "center"], [1, "btn-start", 2, "font-size", "22px", "margin-top", "15px", "margin-bottom", "15px"], [1, "main-presentation", "mx-auto", "mrg-main", 2, "background", "url(https://miro.medium.com/max/10000/0*980dH3rjTZ6BHbWw)", "background-position", "center", "background-repeat", "no-repeat", "background-size", "cover"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Algo nuevo que ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "descubir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "En un espacio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u00FAnico, donde eres t\u00FA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Titulo del video ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Descripci\u00F3n del video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " 4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " 5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Descubre m\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "M\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Explora nuevo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "contenido sincronizado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Nuevas aventuras de todos los videos con los mensajes m\u00E1s bellos o misteriosos del mundo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Titulo del video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Descripci\u00F3n del video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " 4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " 5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Descubre m\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "M\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Ver todo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Videos divertidos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " con historias sincronizadas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "No hay limites para lo que queremos decir...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Titulo del video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Descripci\u00F3n del video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " 4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " 5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Descubre m\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "M\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Ver todo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Sincroniza un nuevo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "video o historia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Es tu turno de mostrarle al mundo tu arte e intenciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "E M P E Z A R");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "S I N C R O N I Z A R");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Explora ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "canciones con letras sincronizadas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Una gran canci\u00F3n merece un karaoke perfectamente sincronizado contigo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Titulo del video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Descripci\u00F3n del video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, " 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " 4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " 5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Descubre m\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "M\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Ver todo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Muchas letras ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "divertidas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, " y grandiosas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Explora o diviertete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "sincronizando");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, " momentos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "E X P L O R A R");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, ">\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Explora las ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "historias de todo el mundo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Mucha gente quiere revivir sus videos con interesantes expresiones contigo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "Titulo del video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Descripci\u00F3n del video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, " 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, " 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, " 4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, " 5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Descubre m\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "M\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "Ver todo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_structure_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"]], styles: ["@media screen and (max-width: 600px) {\n  .letter-mv[_ngcontent-%COMP%] {\n    font-size: 40px !important;\n  }\n\n  .ocultar-div[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .main-presentation[_ngcontent-%COMP%] {\n    width: 95% !important;\n    height: 350px !important;\n    background-color: #e73c7e;\n    text-align: center;\n    border-radius: 15px;\n    padding-top: 75px;\n  }\n}\n.bkg-alternative[_ngcontent-%COMP%] {\n  background: linear-gradient(-45deg, black, rgba(35, 23, 171, 0.85), rgba(35, 213, 171, 0.85)) !important;\n  background-size: 400% 400%;\n  animation: gradient 15s ease infinite !important;\n}\n.fix-display[_ngcontent-%COMP%] {\n  height: 8vh;\n}\n.full-display[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.mrg-main[_ngcontent-%COMP%] {\n  margin-top: 80px;\n}\n.mrg-ctn[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.mrg-end[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.main-presentation[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 400px;\n  background-color: #e73c7e;\n  text-align: center;\n  border-radius: 15px;\n  padding-top: 75px;\n}\n.hero-text[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n}\n.let-ch[_ngcontent-%COMP%] {\n  font-family: atten-round-new, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n}\n.color-wh[_ngcontent-%COMP%] {\n  color: white !important;\n}\n.btn-start[_ngcontent-%COMP%] {\n  background: linear-gradient(-45deg, #f11a65, rgba(35, 23, 171, 0.85), rgba(35, 213, 171, 0.85)) !important;\n  color: white !important;\n  height: 40px;\n  width: 200px;\n  border: none !important;\n  border-radius: 15px;\n}\n.txt-center[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n.ft-600[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.slider[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  overflow: hidden;\n}\n.slides[_ngcontent-%COMP%] {\n  display: flex;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  scroll-behavior: smooth;\n  -webkit-overflow-scrolling: touch;\n  \n}\n.slides[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n.slides[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e91f8b;\n  border-radius: 10px;\n}\n.slides[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.slides[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  scroll-snap-align: start;\n  flex-shrink: 0;\n  width: 500px;\n  height: 300px;\n  margin-right: 50px;\n  border-radius: 10px;\n  background: #eee;\n  transform-origin: center center;\n  transform: scale(1);\n  transition: transform 0.5s;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 100px;\n}\n.slides[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:target {\n  \n}\n.author-info[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.75);\n  color: white;\n  padding: 0.75rem;\n  text-align: center;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  margin: 0;\n}\n.author-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\nimg[_ngcontent-%COMP%] {\n  object-fit: cover;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.slider[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 1.5rem;\n  height: 1.5rem;\n  background: white;\n  text-decoration: none;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  margin: 0 0 0.5rem 0;\n  position: relative;\n}\n.slider[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:active {\n  top: 1px;\n}\n.slider[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\n  background: #000;\n}\n.stl-search-i[_ngcontent-%COMP%] {\n  border: none !important;\n  outline: none !important;\n  border-radius: 25px;\n  height: 50px;\n}\n.btn-search[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  border-color: #e73c7e;\n  color: #e73c7e;\n  background-color: #e73c7e;\n  outline: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLDBCQUFBO0VBQ0Y7O0VBQ0E7SUFDRSxhQUFBO0VBRUY7O0VBQUE7SUFDRSxxQkFBQTtJQUNBLHdCQUFBO0lBQ0EseUJBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7RUFHRjtBQUNGO0FBQUE7RUFDRSx3R0FBQTtFQUNBLDBCQUFBO0VBQ0EsZ0RBQUE7QUFFRjtBQUNBO0VBQ0UsV0FBQTtBQUVGO0FBQ0E7RUFDRSxZQUFBO0FBRUY7QUFDQTtFQUNFLGdCQUFBO0FBRUY7QUFDQTtFQUNFLGdCQUFBO0FBRUY7QUFDQTtFQUNFLG1CQUFBO0FBRUY7QUFFQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDRjtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFFQTtFQUNFLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGO0FBRUE7RUFDRSx1QkFBQTtBQUNGO0FBRUE7RUFDRSwwR0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFFQTtFQUNFLDZCQUFBO0FBQ0Y7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7QUFFQSxrQkFBQTtBQUVBO0VBQ0Usc0JBQUE7QUFBRjtBQUdBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUdBO0VBQ0UsYUFBQTtFQUVBLGdCQUFBO0VBQ0EsNkJBQUE7RUFJQSx1QkFBQTtFQUNBLGlDQUFBO0VBRUE7OztHQUFBO0FBRkY7QUFPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBSkY7QUFNQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QUFIRjtBQUtBO0VBQ0UsdUJBQUE7QUFGRjtBQUlBO0VBQ0Usd0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFGRjtBQUlBO0VBQ0UsNkJBQUE7QUFERjtBQUdBO0VBQ0UsK0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUFGO0FBRUE7RUFDRSxZQUFBO0FBQ0Y7QUFDQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRUY7QUFDQTtFQUNFLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQUVGO0FBQUE7RUFDRSxRQUFBO0FBR0Y7QUFEQTtFQUNFLGdCQUFBO0FBSUY7QUFDQTtFQUNFLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFFRjtBQUNBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0FBRUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmxldHRlci1tdntcclxuICAgIGZvbnQtc2l6ZTogNDBweCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5vY3VsdGFyLWRpdntcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICB9XHJcbiAgLm1haW4tcHJlc2VudGF0aW9uIHtcclxuICAgIHdpZHRoOiA5NSUhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAzNTBweCFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTczYzdlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHBhZGRpbmctdG9wOiA3NXB4O1xyXG4gIH1cclxufVxyXG5cclxuLmJrZy1hbHRlcm5hdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgwLDAsMCwxKSwgIHJnYmEoMzUsMjMsMTcxLDAuODUpLCByZ2JhKDM1LDIxMywxNzEsMC44NSkpIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgNDAwJTtcclxuICBhbmltYXRpb246IGdyYWRpZW50IDE1cyBlYXNlIGluZmluaXRlIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZpeC1kaXNwbGF5IHtcclxuICBoZWlnaHQ6IDh2aDtcclxufVxyXG5cclxuLmZ1bGwtZGlzcGxheSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubXJnLW1haW4ge1xyXG4gIG1hcmdpbi10b3A6IDgwcHg7XHJcbn1cclxuXHJcbi5tcmctY3RuIHtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG4ubXJnLWVuZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuXHJcbi5tYWluLXByZXNlbnRhdGlvbiB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNzNjN2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcGFkZGluZy10b3A6IDc1cHg7XHJcbn1cclxuXHJcbi5oZXJvLXRleHQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmxldC1jaCB7XHJcbiAgZm9udC1mYW1pbHk6IGF0dGVuLXJvdW5kLW5ldywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuLmNvbG9yLXdoIHtcclxuICBjb2xvcjogd2hpdGUhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLXN0YXJ0IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2IoMjQxLCAyNiwgMTAxKSwgIHJnYmEoMzUsMjMsMTcxLDAuODUpLCByZ2JhKDM1LDIxMywxNzEsMC44NSkpIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGUhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgYm9yZGVyOiBub25lIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4udHh0LWNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZ0LTYwMCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLyoqIENhcmQgZGVzaW5nICoqL1xyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnNsaWRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zbGlkZXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgc2Nyb2xsLXNuYXAtdHlwZTogeCBtYW5kYXRvcnk7XHJcblxyXG5cclxuXHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG5cclxuICAvKlxyXG4gIHNjcm9sbC1zbmFwLXBvaW50cy14OiByZXBlYXQoMzAwcHgpO1xyXG4gIHNjcm9sbC1zbmFwLXR5cGU6IG1hbmRhdG9yeTtcclxuICAqL1xyXG59XHJcbi5zbGlkZXM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMTBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbn1cclxuLnNsaWRlczo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICNlOTFmOGI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uc2xpZGVzOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLnNsaWRlcyA+IGRpdiB7XHJcbiAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTAwcHg7XHJcbn1cclxuLnNsaWRlcyA+IGRpdjp0YXJnZXQge1xyXG4gIC8qICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpOyAqL1xyXG59XHJcbi5hdXRob3ItaW5mbyB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMC43NXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uYXV0aG9yLWluZm8gYSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmltZyB7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnNsaWRlciA+IGEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIHdpZHRoOiAxLjVyZW07XHJcbiAgaGVpZ2h0OiAxLjVyZW07XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbjogMCAwIDAuNXJlbSAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uc2xpZGVyID4gYTphY3RpdmUge1xyXG4gIHRvcDogMXB4O1xyXG59XHJcbi5zbGlkZXIgPiBhOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG59XHJcblxyXG5cclxuXHJcbi5zdGwtc2VhcmNoLWkge1xyXG4gIGJvcmRlcjogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgb3V0bGluZTogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5idG4tc2VhcmNoIHtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJvcmRlci1jb2xvcjogI2U3M2M3ZTtcclxuICBjb2xvcjogI2U3M2M3ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTczYzdlO1xyXG4gIG91dGxpbmU6IG5vbmUhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/pages/index/index.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/index/index.component.ts ***!
  \***********************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class IndexComponent {
    constructor() { }
    ngOnInit() {
        this.menuList = document.getElementById("menuList");
        this.menuList.style.maxHeight = "0px";
    }
    menuOpen() {
        if (this.menuList.style.maxHeight == "0px") {
            this.menuList.style.maxHeight = "130px";
        }
        else {
            this.menuList.style.maxHeight = "0px";
        }
    }
}
IndexComponent.ɵfac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(); };
IndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndexComponent, selectors: [["app-index"]], decls: 125, vars: 0, consts: [[1, "container-a"], [1, "navbar-a"], [1, "logo", "mr-m", 2, "color", "white"], [2, "font-weight", "600"], ["id", "menuList"], ["href", ""], ["href", "/login"], ["src", "./assets/images/menu.png", "alt", "", 1, "menu-icon", "visible", 3, "click"], [1, "row-a"], [1, "col-1-a"], [2, "color", "white"], ["type", "button"], ["src", "./assets/images/arrow.png"], [1, "col-2-a"], ["src", "https://res.cloudinary.com/vxosplatform/image/upload/q_47/v1612993019/resources-tlint/Componente_2_1_nykiny.png", "alt", "", 1, "letter-main"], [1, "color-box"], ["id", "about"], [1, "about-left-col"], ["src", "https://res.cloudinary.com/vxosplatform/image/upload/v1612998584/resources-tlint/Componente_4_2_p5x4nu.png", "alt", ""], [1, "about-right-col"], [1, "about-text"], [2, "font-size", "20px"], ["id", "features"], [2, "text-align", "center"], [2, "font-size", "20px", "margin-top", "8px"], [1, "features-row"], [1, "features-col"], ["src", "https://res.cloudinary.com/vxosplatform/image/upload/q_49/v1612998301/resources-tlint/Componente_3_1_s3bbd1.png", "alt", ""], ["src", "https://res.cloudinary.com/vxosplatform/image/upload/q_47/v1612998301/resources-tlint/Componente_4_1_ua0sk5.png", "alt", ""], ["src", "https://res.cloudinary.com/vxosplatform/image/upload/q_45/v1612998301/resources-tlint/Componente_5_1_p8xhh0.png", "alt", ""], [1, "main-presentation", "mx-auto", "mrg-main", 2, "background", "url(https://miro.medium.com/max/10000/0*980dH3rjTZ6BHbWw)", "background-position", "center", "background-repeat", "no-repeat", "background-size", "cover", "margin-top", "0px"], [1, "color-wh", 2, "text-align", "left", "margin-left", "20px"], [2, "font-size", "50px"], [1, "btn-start", 2, "font-size", "22px", "margin-top", "15px", "margin-bottom", "15px"], [1, "color-wh", 2, "text-align", "center"], [1, "slider", "mx-auto"], [1, "slides"], [2, "background", "url(https://miro.medium.com/max/10000/0*980dH3rjTZ6BHbWw)", "background-position", "center", "background-repeat", "no-repeat", "background-size", "cover"], [1, "row", 2, "margin-left", "95px"], [1, "col-12", "text-1", 2, "text-align", "left", "margin-left", "15px"], [1, "col-12", "w-75", "text", 2, "font-size", "20px", "text-align", "left", "margin-left", "15px"], [1, "bkg-alternative"], [1, "row"], [1, "col-12"], [1, "ft-600"], [1, "col-12", 2, "margin-top", "-70px"], [1, "btn-start", 2, "font-size", "22px"]], template: function IndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Fun");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Lyrics:)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Sobre FunLyrics:)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "iniciar sesion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_img_click_18_listener() { return ctx.menuOpen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Una divertida forma de sincronizar tus sentimientos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "con lo mejor de tu historia y recuerdos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Descubre canciones con sus letras sincronizadas o sincroniza tu propio contenido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Empieza ahora ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " A\u00F1ade mensajes sincronizados a tus videos de YouTube ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Desde tu contenido o practicamente cualquier otro, desde una canci\u00F3n o una escena divertida, a\u00F1ade las letras y sincronizalos para armar tu karaoke y disfrutarlo desde en cualquier parte y cualquier momento o a\u00F1ade mensajes personalizados para expresar eso que sientes y no encuentras la forma de como decirlo, hazlo con FunLyrics:) y que sepa la persona o el mundo tus grandiosas intenciones. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "section", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Un lugar donde las letras, el arte y tu creatividad... Ordenan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Aqu\u00ED te mostramos un poco del poder de FunLyrics que tiene para ti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Sincronizar letras o mensajes personalizados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\u00BFAlguna vez haz querido decirle algo a cualquier persona y no encuentras como hacerlo, o bien, cantar o montar un karaoke de tus canciones favoritas?, en FunLyrics, haz eso y m\u00E1s en tiempo real y sumamente f\u00E1cil y sencillo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Sincroniza una vez, disfrutalo siempre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Cuando sincronizas un contenido, estar\u00E1 listo para siempre, disfrutalo cuando y en d\u00F3nde quieras a trav\u00E9s de FunLyrics, ya que es una comunidad que alberga una amplia base de datos de letras y mensajes personalizados para ti y el mundo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Tu video en YouTube, tu mensaje en FunLyrics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Tu contenido o bien, cualquier contenido disponible en YouTube, puedes sincronizar las letras de forma sencilla y r\u00E1pida, o bien, crear historias divertidas o con mensajes personalizados para dar m\u00E1s intensidad al contenido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Algo nuevo que ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "descubir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h2", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "En un espacio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " \u00FAnico, donde eres t\u00FA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Empezar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Titulo del video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Descripci\u00F3n del video ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " 4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " 5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Descubre m\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "M\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\n  color: white;\n  background: linear-gradient(-45deg, black, rgba(35, 23, 171, 0.85), rgba(35, 213, 171, 0.85)) !important;\n}\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  font-family: atten-round-new, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n}\n\n.container-a[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 100vh;\n  padding-left: 8%;\n  padding-right: 8%;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n\n.navbar-a[_ngcontent-%COMP%] {\n  width: 100% !important;\n  display: flex;\n  align-items: center;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 250px;\n  cursor: pointer;\n  margin: 30px;\n}\n\n.menu-icon[_ngcontent-%COMP%] {\n  width: 25px;\n  cursor: pointer;\n}\n\nnav[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: right;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  display: inline-block;\n  margin-right: 30px;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #ffffff;\n  font-size: 20px;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #4ab7e8;\n}\n\n.row-a[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 100px 0;\n}\n\n.col-1-a[_ngcontent-%COMP%] {\n  flex-basis: 40%;\n  position: relative;\n  margin-left: 50px;\n}\n\n.col-1-a[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 54px;\n}\n\n.col-1-a[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: #ffffff;\n  font-weight: 100;\n  margin: 20px 0 10px;\n}\n\n.col-1-a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 30px 0;\n  font-size: 20px;\n  color: #ffffff;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 150px;\n  border: 0;\n  padding: 12px 10px;\n  color: #fff;\n  background: linear-gradient(to right, #4481eb, #1662de) !important;\n  cursor: pointer;\n  transition: width 0.5s;\n}\n\nbutton[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  display: none;\n}\n\nbutton[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  display: block;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  width: 160px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.col-1-a[_ngcontent-%COMP%]::after {\n  content: \"\" !important;\n  width: 10px !important;\n  height: 57% !important;\n  background: linear-gradient(#4481eb, #1662de) !important;\n  position: absolute !important;\n  left: -40px !important;\n  top: 8px !important;\n  border-radius: 5px !important;\n}\n\n.col-2-a[_ngcontent-%COMP%] {\n  position: relative !important;\n  flex-basis: 60% !important;\n  display: flex !important;\n  align-items: center !important;\n}\n\n.col-2-a[_ngcontent-%COMP%]   .letter-main[_ngcontent-%COMP%] {\n  width: 90%;\n  z-index: 1 !important;\n}\n\n.color-box[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  background: linear-gradient(#4481eb, #1662de) !important;\n  border-radius: 20px 0 0 20px;\n  height: 100%;\n  width: 80%;\n  transform: translateX(150px);\n}\n\n.mr-m[_ngcontent-%COMP%] {\n  margin-top: 55px;\n}\n\n@media only screen and (min-width: 701px) {\n  .visible[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n\n@media only screen and (max-width: 700px) {\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    width: 100%;\n    background: linear-gradient(#4481eb, #1662de) !important;\n    position: absolute;\n    top: 75px;\n    right: 0;\n    z-index: 2;\n  }\n\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: block;\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #fff;\n  }\n\n  .menu-icon[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  #menuList[_ngcontent-%COMP%] {\n    overflow: hidden;\n    transition: 0.5s;\n  }\n\n  .row-a[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n    margin: 50px 0;\n  }\n\n  .col-2-a[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n    margin-bottom: 50px;\n  }\n\n  .col-2-a[_ngcontent-%COMP%]   .letter-main[_ngcontent-%COMP%] {\n    width: 77%;\n  }\n\n  .color-box[_ngcontent-%COMP%] {\n    transform: translateX(75px);\n  }\n\n  .col-1-a[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n  }\n\n  .col-1-a[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n\n  .col-1-a[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n\n  .mr-m[_ngcontent-%COMP%] {\n    margin-top: 25px;\n  }\n}\n\n\n\n#about[_ngcontent-%COMP%] {\n  padding: 100px 0;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.about-left-col[_ngcontent-%COMP%] {\n  flex-basis: 50%;\n}\n\n.about-left-col[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.about-right-col[_ngcontent-%COMP%] {\n  flex-basis: 50%;\n  text-align: right;\n}\n\n.about-text[_ngcontent-%COMP%] {\n  max-width: 500px;\n  margin-right: 100px;\n  display: inline-block;\n}\n\n.about-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 50px 0 10px;\n  font-size: 28px;\n}\n\n\n\n#features[_ngcontent-%COMP%] {\n  padding-top: 50px;\n  padding-bottom: 50px;\n}\n\n.features-row[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n\n.features-col[_ngcontent-%COMP%] {\n  flex-basis: 25%;\n  text-align: center;\n}\n\n.features-col[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 250px;\n}\n\n.features-col[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  font-size: 20px;\n  font-weight: 400;\n}\n\n\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.slider[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  overflow: hidden;\n}\n\n.slides[_ngcontent-%COMP%] {\n  display: flex;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  scroll-behavior: smooth;\n  -webkit-overflow-scrolling: touch;\n  \n}\n\n.slides[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n\n.slides[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e91f8b;\n  border-radius: 10px;\n}\n\n.slides[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.slides[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  scroll-snap-align: start;\n  flex-shrink: 0;\n  width: 500px;\n  height: 300px;\n  margin-right: 50px;\n  border-radius: 10px;\n  background: #eee;\n  transform-origin: center center;\n  transform: scale(1);\n  transition: transform 0.5s;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 100px;\n}\n\n.slides[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:target {\n  \n}\n\n.author-info[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.75);\n  color: white;\n  padding: 0.75rem;\n  text-align: center;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  margin: 0;\n}\n\n.author-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.slider[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 1.5rem;\n  height: 1.5rem;\n  background: white;\n  text-decoration: none;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  margin: 0 0 0.5rem 0;\n  position: relative;\n}\n\n.slider[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:active {\n  top: 1px;\n}\n\n.slider[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\n  background: #000;\n}\n\n.main-presentation[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 400px;\n  background-color: #e73c7e;\n  text-align: center;\n  border-radius: 15px;\n  padding-top: 75px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9pbmRleC9pbmRleC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSx3R0FBQTtBQUNGOztBQUNBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUNBO0VBQ0UsT0FBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFDQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFFRjs7QUFDQTtFQUNFLGNBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBRUY7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtFQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3REFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0Esd0RBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBR0E7RUFDRTtJQUNFLHdCQUFBO0VBQUY7QUFDRjs7QUFHQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLHdEQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLFVBQUE7RUFERjs7RUFJQTtJQUNFLGNBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VBREY7O0VBSUE7SUFDRSxXQUFBO0VBREY7O0VBSUE7SUFDRSxjQUFBO0VBREY7O0VBSUE7SUFDRSxnQkFBQTtJQUNBLGdCQUFBO0VBREY7O0VBSUE7SUFDRSw4QkFBQTtJQUNBLGNBQUE7RUFERjs7RUFJQTtJQUNFLGdCQUFBO0lBQ0EsbUJBQUE7RUFERjs7RUFJQTtJQUNFLFVBQUE7RUFERjs7RUFJQTtJQUNFLDJCQUFBO0VBREY7O0VBSUE7SUFDRSxnQkFBQTtFQURGOztFQUlBO0lBQ0UsZUFBQTtFQURGOztFQUlBO0lBQ0UsZUFBQTtFQURGOztFQUlBO0lBQ0UsZ0JBQUE7RUFERjtBQUNGOztBQU9BLFlBQUE7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFORjs7QUFTQTtFQUNFLGVBQUE7QUFORjs7QUFTQTtFQUNFLFdBQUE7QUFORjs7QUFTQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQU5GOztBQVNBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBTkY7O0FBU0E7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUFORjs7QUFTQSxlQUFBOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQVBGOztBQVVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUFQRjs7QUFVQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQVBGOztBQVVBO0VBQ0UsWUFBQTtBQVBGOztBQVVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVBGOztBQVlBLGtCQUFBOztBQUVBO0VBQ0Usc0JBQUE7QUFWRjs7QUFhQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBVkY7O0FBYUE7RUFDRSxhQUFBO0VBRUEsZ0JBQUE7RUFDQSw2QkFBQTtFQUlBLHVCQUFBO0VBQ0EsaUNBQUE7RUFFQTs7O0dBQUE7QUFaRjs7QUFpQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQWRGOztBQWdCQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QUFiRjs7QUFlQTtFQUNFLHVCQUFBO0FBWkY7O0FBY0E7RUFDRSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQVpGOztBQWNBO0VBQ0UsNkJBQUE7QUFYRjs7QUFhQTtFQUNFLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFWRjs7QUFZQTtFQUNFLFlBQUE7QUFURjs7QUFZQTtFQUNFLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQVRGOztBQVdBO0VBQ0UsUUFBQTtBQVJGOztBQVVBO0VBQ0UsZ0JBQUE7QUFQRjs7QUFXQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFSRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvaW5kZXgvaW5kZXguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgwLDAsMCwxKSwgIHJnYmEoMzUsMjMsMTcxLDAuODUpLCByZ2JhKDM1LDIxMywxNzEsMC44NSkpIWltcG9ydGFudDtcclxufVxyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LWZhbWlseTogYXR0ZW4tcm91bmQtbmV3LCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHBhZGRpbmctbGVmdDogOCU7XHJcbiAgcGFkZGluZy1yaWdodDogOCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubmF2YmFyLWEge1xyXG4gIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbjogMzBweDtcclxufVxyXG5cclxuLm1lbnUtaWNvbiB7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5uYXYge1xyXG4gIGZsZXg6IDE7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbm5hdiB1bCBsaSB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG5uYXYgdWwgbGkgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxubmF2IHVsIGxpIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjNGFiN2U4O1xyXG59XHJcblxyXG4ucm93LWEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAxMDBweCAwO1xyXG59XHJcblxyXG4uY29sLTEtYSB7XHJcbiAgZmxleC1iYXNpczogNDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuLmNvbC0xLWEgaDIge1xyXG4gIGZvbnQtc2l6ZTogNTRweDtcclxufVxyXG5cclxuLmNvbC0xLWEgaDMge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG4gIG1hcmdpbjogMjBweCAwIDEwcHg7XHJcbn1cclxuXHJcbi5jb2wtMS1hIHAge1xyXG4gIG1hcmdpbjogMzBweCAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuXHJcbmJ1dHRvbiB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGJvcmRlcjogMDtcclxuICBwYWRkaW5nOiAxMnB4IDEwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNDQ4MWViLCAjMTY2MmRlKSFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNXM7XHJcbn1cclxuXHJcbmJ1dHRvbiBpbWcge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciBpbWcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIHdpZHRoOiAxNjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uY29sLTEtYTo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnIWltcG9ydGFudDtcclxuICB3aWR0aDogMTBweCFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA1NyUhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNDQ4MWViLCAjMTY2MmRlKSFpbXBvcnRhbnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlIWltcG9ydGFudDtcclxuICBsZWZ0OiAtNDBweCFpbXBvcnRhbnQ7XHJcbiAgdG9wOiA4cHghaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb2wtMi1hIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmUhaW1wb3J0YW50O1xyXG4gIGZsZXgtYmFzaXM6IDYwJSFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogZmxleCFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlciFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb2wtMi1hIC5sZXR0ZXItbWFpbiB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICB6LWluZGV4OiAxIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbG9yLWJveCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzQ0ODFlYiwgIzE2NjJkZSkhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMCAwIDIwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1MHB4KTtcclxufVxyXG5cclxuLm1yLW17XHJcbiAgbWFyZ2luLXRvcDogNTVweDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAxcHgpIHtcclxuICAudmlzaWJsZSB7XHJcbiAgICBkaXNwbGF5OiBub25lIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICBuYXYgdWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzQ0ODFlYiwgIzE2NjJkZSkhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA3NXB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuXHJcbiAgbmF2IHVsIGxpIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG5cclxuICBuYXYgdWwgbGkgYSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcblxyXG4gIC5tZW51LWljb24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAjbWVudUxpc3Qge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgfVxyXG5cclxuICAucm93LWEge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgbWFyZ2luOiA1MHB4IDA7XHJcbiAgfVxyXG5cclxuICAuY29sLTItYSB7XHJcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB9XHJcblxyXG4gIC5jb2wtMi1hIC5sZXR0ZXItbWFpbiB7XHJcbiAgICB3aWR0aDogNzclO1xyXG4gIH1cclxuXHJcbiAgLmNvbG9yLWJveCB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNzVweCk7XHJcbiAgfVxyXG5cclxuICAuY29sLTEtYSB7XHJcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC0xLWEgaDIge1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbC0xLWEgaDMge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLm1yLW17XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuLyoqIEFib3V0ICoqL1xyXG5cclxuI2Fib3V0IHtcclxuICBwYWRkaW5nOiAxMDBweCAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5hYm91dC1sZWZ0LWNvbCB7XHJcbiAgZmxleC1iYXNpczogNTAlO1xyXG59XHJcblxyXG4uYWJvdXQtbGVmdC1jb2wgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmFib3V0LXJpZ2h0LWNvbCB7XHJcbiAgZmxleC1iYXNpczogNTAlO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uYWJvdXQtdGV4dCB7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmFib3V0LXRleHQgaDIge1xyXG4gIG1hcmdpbjogNTBweCAwIDEwcHg7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG59XHJcblxyXG4vKiogRmVhdHVyZXMgKiovXHJcblxyXG4jZmVhdHVyZXMge1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4uZmVhdHVyZXMtcm93IHtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uZmVhdHVyZXMtY29sIHtcclxuICBmbGV4LWJhc2lzOiAyNSU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZmVhdHVyZXMtY29sIGltZyB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4uZmVhdHVyZXMtY29sIGg0IHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIENhcmQgZGVzaW5nICoqL1xyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnNsaWRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zbGlkZXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgc2Nyb2xsLXNuYXAtdHlwZTogeCBtYW5kYXRvcnk7XHJcblxyXG5cclxuXHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG5cclxuICAvKlxyXG4gIHNjcm9sbC1zbmFwLXBvaW50cy14OiByZXBlYXQoMzAwcHgpO1xyXG4gIHNjcm9sbC1zbmFwLXR5cGU6IG1hbmRhdG9yeTtcclxuICAqL1xyXG59XHJcbi5zbGlkZXM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMTBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbn1cclxuLnNsaWRlczo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICNlOTFmOGI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uc2xpZGVzOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLnNsaWRlcyA+IGRpdiB7XHJcbiAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTAwcHg7XHJcbn1cclxuLnNsaWRlcyA+IGRpdjp0YXJnZXQge1xyXG4gIC8qICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpOyAqL1xyXG59XHJcbi5hdXRob3ItaW5mbyB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMC43NXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uYXV0aG9yLWluZm8gYSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc2xpZGVyID4gYSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgd2lkdGg6IDEuNXJlbTtcclxuICBoZWlnaHQ6IDEuNXJlbTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWFyZ2luOiAwIDAgMC41cmVtIDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5zbGlkZXIgPiBhOmFjdGl2ZSB7XHJcbiAgdG9wOiAxcHg7XHJcbn1cclxuLnNsaWRlciA+IGE6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQ6ICMwMDA7XHJcbn1cclxuXHJcblxyXG4ubWFpbi1wcmVzZW50YXRpb24ge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTczYzdlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHBhZGRpbmctdG9wOiA3NXB4O1xyXG59XHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-index',
                templateUrl: './index.component.html',
                styleUrls: ['./index.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/pages/login/login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoginComponent {
    constructor() {
        this.sign_in_btn = document.querySelector("#sign-in-btn");
        this.sign_up_btn = document.querySelector("#sign-up-btn");
        this.container = document.querySelector(".container");
    }
    ngOnInit() {
    }
    sign_up() {
        document.getElementById("container").classList.add('sign-up-mode');
    }
    sign_in() {
        document.getElementById("container").classList.remove('sign-up-mode');
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 83, vars: 0, consts: [[1, "let-ch", "bkg-alternative"], [1, "navbar", "navbar-light", "bg-light", 2, "position", "fixed", "z-index", "100", "width", "100%", "height", "50px", "background", "transparent!important", "border-bottom", "1px solid #04befe"], [1, "container-fluid"], ["href", "/", 1, "navbar-brand", "color-wh", 2, "margin-left", "25px"], [2, "font-size", "25px"], [2, "font-weight", "600"], ["id", "container", 1, "bkg-alternative", "container-a", "color-wh"], [1, "forms-container", "color-wh"], [1, "signin-signup"], ["action", "#", 1, "sign-in-form"], [1, "title", "color-wh"], [1, "input-field"], [1, "fas", "fa-user"], ["type", "text", "placeholder", "Usuario"], [1, "fas", "fa-lock"], ["type", "password", "placeholder", "Contrase\u00F1a"], ["type", "submit", 1, "btn", "solid"], [1, "social-text"], [1, "social-media"], ["href", "#", 1, "social-icon", "color-wh", 2, "border-color", "white"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-facebook"], ["d", "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-google"], ["d", "M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"], ["action", "#", 1, "sign-up-form"], [1, "fas", "fa-envelope"], ["type", "email", "placeholder", "Email"], ["type", "submit", "value", "Sign up", 1, "btn"], [1, "panels-container"], [1, "panel", "left-panel"], [1, "content"], [2, "font-size", "60px"], [2, "font-size", "22px"], ["id", "sign-up-btn", 1, "btn", "transparent", 3, "click"], ["src", "img/log.svg", "alt", "", 1, "image"], [1, "panel", "right-panel"], ["id", "sign-in-btn", 1, "btn", "transparent", 3, "click"], ["src", "img/register.svg", "alt", "", 1, "image"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "P", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Fun");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lyrics:)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Iniciar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Iniciar sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "O inicia sesi\u00F3n con tu red favorita");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "svg", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "svg", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "form", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Registrarse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "BUTTON", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Registrarme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "O registrate con tu red social favorita");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "svg", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "svg", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Fun");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Lyrics:)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\u00BFNuevo por aqu\u00ED?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Registrate y sincroniza o dise\u00F1a tus propias historias increibles para el mundo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_67_listener() { return ctx.sign_up(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Registrarme ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Fun");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Lyrics:)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\u00BFYa eres parte del club?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Inicia sesi\u00F3n y empieza a sincronizar o a disfrutar de las historias de todo el mundo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_80_listener() { return ctx.sign_in(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Iniciar sesi\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.color-wh[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\n.bkg-alternative[_ngcontent-%COMP%] {\n  background: linear-gradient(-45deg, black, rgba(35, 23, 171, 0.85), rgba(35, 213, 171, 0.85)) !important;\n  background-size: 400% 400%;\n  animation: gradient 15s ease infinite !important;\n}\n\n.container-a[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100% !important;\n  background-color: #fff;\n  min-height: 100vh;\n  overflow: hidden;\n}\n\n.forms-container[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n.signin-signup[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  left: 75%;\n  width: 50%;\n  transition: 1s 0.7s ease-in-out;\n  display: grid;\n  grid-template-columns: 1fr;\n  z-index: 5;\n}\n\nform[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 0rem 5rem;\n  transition: all 0.2s 0.7s;\n  overflow: hidden;\n  grid-column: 1/2;\n  grid-row: 1/2;\n}\n\nform.sign-up-form[_ngcontent-%COMP%] {\n  opacity: 0;\n  z-index: 1;\n}\n\nform.sign-in-form[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  color: #444;\n  margin-bottom: 10px;\n}\n\n.input-field[_ngcontent-%COMP%] {\n  max-width: 380px;\n  width: 100%;\n  background-color: #f0f0f0;\n  margin: 10px 0;\n  height: 55px;\n  border-radius: 55px;\n  display: grid;\n  grid-template-columns: 15% 85%;\n  padding: 0 0.4rem;\n  position: relative;\n}\n\n.input-field[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: 55px;\n  color: #acacac;\n  transition: 0.5s;\n  font-size: 1.1rem;\n}\n\n.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: none;\n  outline: none;\n  border: none;\n  line-height: 1;\n  font-weight: 600;\n  font-size: 1.1rem;\n  color: #333;\n}\n\n.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #aaa;\n  font-weight: 500;\n}\n\n.social-text[_ngcontent-%COMP%] {\n  padding: 0.7rem 0;\n  font-size: 1rem;\n}\n\n.social-media[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.social-icon[_ngcontent-%COMP%] {\n  height: 46px;\n  width: 46px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 0.45rem;\n  color: #333;\n  border-radius: 50%;\n  border: 1px solid #333;\n  text-decoration: none;\n  font-size: 1.1rem;\n  transition: 0.3s;\n}\n\n.social-icon[_ngcontent-%COMP%]:hover {\n  color: #4481eb;\n  border-color: #4481eb;\n}\n\n.btn[_ngcontent-%COMP%] {\n  width: 150px;\n  background-color: #5995fd;\n  border: none;\n  outline: none;\n  height: 49px;\n  border-radius: 49px;\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: 600;\n  margin: 10px 0;\n  cursor: pointer;\n  transition: 0.5s;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #4d84e2;\n}\n\n.panels-container[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100% !important;\n  top: 0;\n  left: 0;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n\n.container-a[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  height: 2000px;\n  width: 2000px;\n  top: -10%;\n  right: 48%;\n  transform: translateY(-50%);\n  background-image: linear-gradient(-45deg, #000000, #04befe);\n  transition: 1.8s ease-in-out;\n  border-radius: 50%;\n  z-index: 6;\n}\n\n.image[_ngcontent-%COMP%] {\n  width: 100%;\n  transition: transform 1.1s ease-in-out;\n  transition-delay: 0.4s;\n}\n\n.panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: space-around;\n  text-align: center;\n  z-index: 6;\n}\n\n.left-panel[_ngcontent-%COMP%] {\n  pointer-events: all;\n  padding: 3rem 17% 2rem 12%;\n}\n\n.right-panel[_ngcontent-%COMP%] {\n  pointer-events: none;\n  padding: 3rem 12% 2rem 17%;\n}\n\n.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  color: #fff;\n  transition: transform 0.9s ease-in-out;\n  transition-delay: 0.6s;\n}\n\n.panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  line-height: 1;\n  font-size: 1.5rem;\n}\n\n.panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  padding: 0.7rem 0;\n}\n\n.btn.transparent[_ngcontent-%COMP%] {\n  margin: 0;\n  background: none;\n  border: 2px solid #fff;\n  width: 130px;\n  height: 41px;\n  font-weight: 600;\n  font-size: 0.8rem;\n}\n\n.right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  transform: translateX(800px);\n}\n\n\n\n.container-a.sign-up-mode[_ngcontent-%COMP%]:before {\n  transform: translate(100%, -50%);\n  right: 52%;\n}\n\n.container-a.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .container-a.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  transform: translateX(-800px);\n}\n\n.container-a.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%] {\n  left: 25%;\n}\n\n.container-a.sign-up-mode[_ngcontent-%COMP%]   form.sign-up-form[_ngcontent-%COMP%] {\n  opacity: 1;\n  z-index: 2;\n}\n\n.container-a.sign-up-mode[_ngcontent-%COMP%]   form.sign-in-form[_ngcontent-%COMP%] {\n  opacity: 0;\n  z-index: 1;\n}\n\n.container-a.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .container-a.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  transform: translateX(0%);\n}\n\n.container-a.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.container-a.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%] {\n  pointer-events: all;\n}\n\n@media (max-width: 870px) {\n  .container-a[_ngcontent-%COMP%] {\n    min-height: 800px;\n    height: 100vh;\n  }\n\n  .signin-signup[_ngcontent-%COMP%] {\n    width: 100%;\n    top: 95%;\n    transform: translate(-50%, -100%);\n    transition: 1s 0.8s ease-in-out;\n  }\n\n  .signin-signup[_ngcontent-%COMP%], .container-a.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%] {\n    left: 50%;\n  }\n\n  .panels-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 2fr 1fr;\n  }\n\n  .panel[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    padding: 2.5rem 8%;\n    grid-column: 1/2;\n  }\n\n  .right-panel[_ngcontent-%COMP%] {\n    grid-row: 3/4;\n  }\n\n  .left-panel[_ngcontent-%COMP%] {\n    grid-row: 1/2;\n  }\n\n  .image[_ngcontent-%COMP%] {\n    width: 200px;\n    transition: transform 0.9s ease-in-out;\n    transition-delay: 0.6s;\n  }\n\n  .panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    padding-right: 15%;\n    transition: transform 0.9s ease-in-out;\n    transition-delay: 0.8s;\n  }\n\n  .panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n\n  .panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    padding: 0.5rem 0;\n  }\n\n  .btn.transparent[_ngcontent-%COMP%] {\n    width: 110px;\n    height: 35px;\n    font-size: 0.7rem;\n  }\n\n  .container-a[_ngcontent-%COMP%]:before {\n    width: 1500px;\n    height: 1500px;\n    transform: translateX(-50%);\n    left: 30%;\n    bottom: 68%;\n    right: initial;\n    top: initial;\n    transition: 2s ease-in-out;\n  }\n\n  .container-a.sign-up-mode[_ngcontent-%COMP%]:before {\n    transform: translate(-50%, 100%);\n    bottom: 32%;\n    right: initial;\n  }\n\n  .container-a.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .container-a.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    transform: translateY(-300px);\n  }\n\n  .container-a.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .container-a.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    transform: translateY(0px);\n  }\n\n  .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    transform: translateY(300px);\n  }\n\n  .container-a.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%] {\n    top: 5%;\n    transform: translate(-50%, 0);\n  }\n}\n\n@media (max-width: 570px) {\n  form[_ngcontent-%COMP%] {\n    padding: 0 1.5rem;\n  }\n\n  .image[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    padding: 0.5rem 1rem;\n  }\n\n  .container-a[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n\n  .container-a[_ngcontent-%COMP%]:before {\n    bottom: 72%;\n    left: 50%;\n  }\n\n  .container-a.sign-up-mode[_ngcontent-%COMP%]:before {\n    bottom: 28%;\n    left: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3R0FBQTtFQUNBLDBCQUFBO0VBQ0EsZ0RBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsMkRBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLHNDQUFBO0VBQ0Esc0JBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFFRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EsMEJBQUE7QUFFRjs7QUFDQTtFQUNFLG9CQUFBO0VBQ0EsMEJBQUE7QUFFRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxzQ0FBQTtFQUNBLHNCQUFBO0FBRUY7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUNBO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFDQTs7RUFFRSw0QkFBQTtBQUVGOztBQUNBLGNBQUE7O0FBRUE7RUFDRSxnQ0FBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTs7RUFFRSw2QkFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7O0VBRUUseUJBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLGFBQUE7RUFDRjs7RUFDQTtJQUNFLFdBQUE7SUFDQSxRQUFBO0lBQ0EsaUNBQUE7SUFDQSwrQkFBQTtFQUVGOztFQUNBOztJQUVFLFNBQUE7RUFFRjs7RUFDQTtJQUNFLDBCQUFBO0lBQ0EsK0JBQUE7RUFFRjs7RUFDQTtJQUNFLG1CQUFBO0lBQ0EsNkJBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7RUFFRjs7RUFDQTtJQUNFLGFBQUE7RUFFRjs7RUFDQTtJQUNFLGFBQUE7RUFFRjs7RUFDQTtJQUNFLFlBQUE7SUFDQSxzQ0FBQTtJQUNBLHNCQUFBO0VBRUY7O0VBQ0E7SUFDRSxrQkFBQTtJQUNBLHNDQUFBO0lBQ0Esc0JBQUE7RUFFRjs7RUFDQTtJQUNFLGlCQUFBO0VBRUY7O0VBQ0E7SUFDRSxpQkFBQTtJQUNBLGlCQUFBO0VBRUY7O0VBQ0E7SUFDRSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0VBRUY7O0VBQ0E7SUFDRSxhQUFBO0lBQ0EsY0FBQTtJQUNBLDJCQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7SUFDQSxjQUFBO0lBQ0EsWUFBQTtJQUNBLDBCQUFBO0VBRUY7O0VBQ0E7SUFDRSxnQ0FBQTtJQUNBLFdBQUE7SUFDQSxjQUFBO0VBRUY7O0VBQ0E7O0lBRUUsNkJBQUE7RUFFRjs7RUFDQTs7SUFFRSwwQkFBQTtFQUVGOztFQUNBOztJQUVFLDRCQUFBO0VBRUY7O0VBQ0E7SUFDRSxPQUFBO0lBQ0EsNkJBQUE7RUFFRjtBQUNGOztBQUNBO0VBQ0U7SUFDRSxpQkFBQTtFQUNGOztFQUVBO0lBQ0UsYUFBQTtFQUNGOztFQUNBO0lBQ0Usb0JBQUE7RUFFRjs7RUFBQTtJQUNFLGVBQUE7RUFHRjs7RUFBQTtJQUNFLFdBQUE7SUFDQSxTQUFBO0VBR0Y7O0VBQUE7SUFDRSxXQUFBO0lBQ0EsU0FBQTtFQUdGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmNvbG9yLXdoIHtcclxuICBjb2xvcjogd2hpdGUhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmtnLWFsdGVybmF0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDAsMCwwLDEpLCAgcmdiYSgzNSwyMywxNzEsMC44NSksIHJnYmEoMzUsMjEzLDE3MSwwLjg1KSkhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xyXG4gIGFuaW1hdGlvbjogZ3JhZGllbnQgMTVzIGVhc2UgaW5maW5pdGUhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29udGFpbmVyLWEge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZm9ybXMtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4uc2lnbmluLXNpZ251cCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGxlZnQ6IDc1JTtcclxuICB3aWR0aDogNTAlO1xyXG4gIHRyYW5zaXRpb246IDFzIDAuN3MgZWFzZS1pbi1vdXQ7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB6LWluZGV4OiA1O1xyXG59XHJcblxyXG5mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAwcmVtIDVyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgMC43cztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcclxuICBncmlkLXJvdzogMSAvIDI7XHJcbn1cclxuXHJcbmZvcm0uc2lnbi11cC1mb3JtIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbmZvcm0uc2lnbi1pbi1mb3JtIHtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gIGNvbG9yOiAjNDQ0O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZCB7XHJcbiAgbWF4LXdpZHRoOiAzODBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG4gIGhlaWdodDogNTVweDtcclxuICBib3JkZXItcmFkaXVzOiA1NXB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNSUgODUlO1xyXG4gIHBhZGRpbmc6IDAgMC40cmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmlucHV0LWZpZWxkIGkge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogNTVweDtcclxuICBjb2xvcjogI2FjYWNhYztcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG59XHJcblxyXG4uaW5wdXQtZmllbGQgaW5wdXQge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLmlucHV0LWZpZWxkIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICNhYWE7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnNvY2lhbC10ZXh0IHtcclxuICBwYWRkaW5nOiAwLjdyZW0gMDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5zb2NpYWwtbWVkaWEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zb2NpYWwtaWNvbiB7XHJcbiAgaGVpZ2h0OiA0NnB4O1xyXG4gIHdpZHRoOiA0NnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDAgMC40NXJlbTtcclxuICBjb2xvcjogIzMzMztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLnNvY2lhbC1pY29uOmhvdmVyIHtcclxuICBjb2xvcjogIzQ0ODFlYjtcclxuICBib3JkZXItY29sb3I6ICM0NDgxZWI7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk5NWZkO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGhlaWdodDogNDlweDtcclxuICBib3JkZXItcmFkaXVzOiA0OXB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW46IDEwcHggMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuLmJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRkODRlMjtcclxufVxyXG4ucGFuZWxzLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWE6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDIwMDBweDtcclxuICB3aWR0aDogMjAwMHB4O1xyXG4gIHRvcDogLTEwJTtcclxuICByaWdodDogNDglO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjMDAwMDAwLCAjMDRiZWZlKTtcclxuICB0cmFuc2l0aW9uOiAxLjhzIGVhc2UtaW4tb3V0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB6LWluZGV4OiA2O1xyXG59XHJcblxyXG4uaW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxLjFzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuNHM7XHJcbn1cclxuXHJcbi5wYW5lbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgei1pbmRleDogNjtcclxufVxyXG5cclxuLmxlZnQtcGFuZWwge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbiAgcGFkZGluZzogM3JlbSAxNyUgMnJlbSAxMiU7XHJcbn1cclxuXHJcbi5yaWdodC1wYW5lbCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgcGFkZGluZzogM3JlbSAxMiUgMnJlbSAxNyU7XHJcbn1cclxuXHJcbi5wYW5lbCAuY29udGVudCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMC42cztcclxufVxyXG5cclxuLnBhbmVsIGgzIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4ucGFuZWwgcCB7XHJcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gIHBhZGRpbmc6IDAuN3JlbSAwO1xyXG59XHJcblxyXG4uYnRuLnRyYW5zcGFyZW50IHtcclxuICBtYXJnaW46IDA7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gIHdpZHRoOiAxMzBweDtcclxuICBoZWlnaHQ6IDQxcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxufVxyXG5cclxuLnJpZ2h0LXBhbmVsIC5pbWFnZSxcclxuLnJpZ2h0LXBhbmVsIC5jb250ZW50IHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoODAwcHgpO1xyXG59XHJcblxyXG4vKiBBTklNQVRJT04gKi9cclxuXHJcbi5jb250YWluZXItYS5zaWduLXVwLW1vZGU6YmVmb3JlIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlLCAtNTAlKTtcclxuICByaWdodDogNTIlO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWEuc2lnbi11cC1tb2RlIC5sZWZ0LXBhbmVsIC5pbWFnZSxcclxuLmNvbnRhaW5lci1hLnNpZ24tdXAtbW9kZSAubGVmdC1wYW5lbCAuY29udGVudCB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04MDBweCk7XHJcbn1cclxuXHJcbi5jb250YWluZXItYS5zaWduLXVwLW1vZGUgLnNpZ25pbi1zaWdudXAge1xyXG4gIGxlZnQ6IDI1JTtcclxufVxyXG5cclxuLmNvbnRhaW5lci1hLnNpZ24tdXAtbW9kZSBmb3JtLnNpZ24tdXAtZm9ybSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWEuc2lnbi11cC1tb2RlIGZvcm0uc2lnbi1pbi1mb3JtIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5jb250YWluZXItYS5zaWduLXVwLW1vZGUgLnJpZ2h0LXBhbmVsIC5pbWFnZSxcclxuLmNvbnRhaW5lci1hLnNpZ24tdXAtbW9kZSAucmlnaHQtcGFuZWwgLmNvbnRlbnQge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbn1cclxuXHJcbi5jb250YWluZXItYS5zaWduLXVwLW1vZGUgLmxlZnQtcGFuZWwge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWEuc2lnbi11cC1tb2RlIC5yaWdodC1wYW5lbCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDg3MHB4KSB7XHJcbiAgLmNvbnRhaW5lci1hIHtcclxuICAgIG1pbi1oZWlnaHQ6IDgwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcbiAgLnNpZ25pbi1zaWdudXAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0b3A6IDk1JTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xMDAlKTtcclxuICAgIHRyYW5zaXRpb246IDFzIDAuOHMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICAuc2lnbmluLXNpZ251cCxcclxuICAuY29udGFpbmVyLWEuc2lnbi11cC1tb2RlIC5zaWduaW4tc2lnbnVwIHtcclxuICAgIGxlZnQ6IDUwJTtcclxuICB9XHJcblxyXG4gIC5wYW5lbHMtY29udGFpbmVyIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDFmcjtcclxuICB9XHJcblxyXG4gIC5wYW5lbCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMi41cmVtIDglO1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xyXG4gIH1cclxuXHJcbiAgLnJpZ2h0LXBhbmVsIHtcclxuICAgIGdyaWQtcm93OiAzIC8gNDtcclxuICB9XHJcblxyXG4gIC5sZWZ0LXBhbmVsIHtcclxuICAgIGdyaWQtcm93OiAxIC8gMjtcclxuICB9XHJcblxyXG4gIC5pbWFnZSB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC45cyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgfVxyXG5cclxuICAucGFuZWwgLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTUlO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjhzO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsIHAge1xyXG4gICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMDtcclxuICB9XHJcblxyXG4gIC5idG4udHJhbnNwYXJlbnQge1xyXG4gICAgd2lkdGg6IDExMHB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyLWE6YmVmb3JlIHtcclxuICAgIHdpZHRoOiAxNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MDBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIGxlZnQ6IDMwJTtcclxuICAgIGJvdHRvbTogNjglO1xyXG4gICAgcmlnaHQ6IGluaXRpYWw7XHJcbiAgICB0b3A6IGluaXRpYWw7XHJcbiAgICB0cmFuc2l0aW9uOiAycyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXItYS5zaWduLXVwLW1vZGU6YmVmb3JlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDEwMCUpO1xyXG4gICAgYm90dG9tOiAzMiU7XHJcbiAgICByaWdodDogaW5pdGlhbDtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXItYS5zaWduLXVwLW1vZGUgLmxlZnQtcGFuZWwgLmltYWdlLFxyXG4gIC5jb250YWluZXItYS5zaWduLXVwLW1vZGUgLmxlZnQtcGFuZWwgLmNvbnRlbnQge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMDBweCk7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyLWEuc2lnbi11cC1tb2RlIC5yaWdodC1wYW5lbCAuaW1hZ2UsXHJcbiAgLmNvbnRhaW5lci1hLnNpZ24tdXAtbW9kZSAucmlnaHQtcGFuZWwgLmNvbnRlbnQge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgfVxyXG5cclxuICAucmlnaHQtcGFuZWwgLmltYWdlLFxyXG4gIC5yaWdodC1wYW5lbCAuY29udGVudCB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzAwcHgpO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lci1hLnNpZ24tdXAtbW9kZSAuc2lnbmluLXNpZ251cCB7XHJcbiAgICB0b3A6IDUlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTcwcHgpIHtcclxuICBmb3JtIHtcclxuICAgIHBhZGRpbmc6IDAgMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmltYWdlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5wYW5lbCAuY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICB9XHJcbiAgLmNvbnRhaW5lci1hIHtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXItYTpiZWZvcmUge1xyXG4gICAgYm90dG9tOiA3MiU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyLWEuc2lnbi11cC1tb2RlOmJlZm9yZSB7XHJcbiAgICBib3R0b206IDI4JTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/pages/my-funsync/my-funsync.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/my-funsync/my-funsync.component.ts ***!
  \*********************************************************************/
/*! exports provided: MyFunsyncComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFunsyncComponent", function() { return MyFunsyncComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _structure_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../structure/navbar/navbar.component */ "./src/app/components/structure/navbar/navbar.component.ts");



class MyFunsyncComponent {
    constructor() { }
    ngOnInit() {
    }
}
MyFunsyncComponent.ɵfac = function MyFunsyncComponent_Factory(t) { return new (t || MyFunsyncComponent)(); };
MyFunsyncComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyFunsyncComponent, selectors: [["app-my-funsync"]], decls: 52, vars: 0, consts: [[1, "bkg-alternative", "full-display", "let-ch"], ["id", "main", 1, "fix-display"], [1, "main-presentation", "mx-auto", "mrg-main", 2, "background", "url(https://miro.medium.com/max/10000/0*980dH3rjTZ6BHbWw)", "background-position", "center", "background-repeat", "no-repeat", "background-size", "cover"], [1, "color-wh", 2, "margin-top", "35px", "text-align", "left", "margin-left", "20px"], [2, "font-weight", "600"], [2, "font-size", "50px"], [1, "mrg-main"], [1, "mx-auto", "color-wh", "w-75", 2, "text-align", "center"], [2, "text-align", "left"], [1, "ft-600"], [2, "font-size", "22px"], [1, "mrg-main", "mx-auto", "mrg-ctn"], [1, "slider", "mx-auto"], [1, "slides"], [2, "background", "url(https://miro.medium.com/max/10000/0*980dH3rjTZ6BHbWw)", "background-position", "center", "background-repeat", "no-repeat", "background-size", "cover"], [1, "row", 2, "margin-left", "95px"], [1, "col-12", "text-1", 2, "text-align", "left", "margin-left", "15px"], [1, "col-12", "w-75", "text", 2, "font-size", "20px", "text-align", "left", "margin-left", "15px"], [1, "bkg-alternative"], [1, "row"], [1, "col-12"], [1, "col-12", 2, "margin-top", "-70px"], [1, "btn-start", 2, "font-size", "22px"], [1, "btn-start", 2, "font-size", "22px", "margin-top", "15px", "margin-bottom", "15px"]], template: function MyFunsyncComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hola ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "de nuevo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Username name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Tus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "videos e historia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Tu propio espacio, tu propio arte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Titulo del video a ama aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Descripci\u00F3n del video aaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " 4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " 5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Descubre m\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "M\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Ver todo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_structure_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"]], styles: ["@media screen and (max-width: 600px) {\n  .letter-mv[_ngcontent-%COMP%] {\n    font-size: 40px !important;\n  }\n\n  .ocultar-div[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .main-presentation[_ngcontent-%COMP%] {\n    width: 85% !important;\n    height: 550px !important;\n    background-color: #e73c7e;\n    text-align: center;\n    border-radius: 15px;\n    padding-top: 75px;\n  }\n}\n.bkg-alternative[_ngcontent-%COMP%] {\n  background: linear-gradient(-45deg, black, rgba(35, 23, 171, 0.85), rgba(35, 213, 171, 0.85)) !important;\n  background-size: 400% 400%;\n  animation: gradient 15s ease infinite !important;\n}\n.fix-display[_ngcontent-%COMP%] {\n  height: 2vh;\n}\n.full-display[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.mrg-main[_ngcontent-%COMP%] {\n  margin-top: 80px;\n}\n.mrg-ctn[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.mrg-end[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.main-presentation[_ngcontent-%COMP%] {\n  width: 75%;\n  height: 400px;\n  background-color: #e73c7e;\n  text-align: center;\n  border-radius: 15px;\n  padding-top: 75px;\n}\n.hero-text[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n}\n.let-ch[_ngcontent-%COMP%] {\n  font-family: atten-round-new, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n}\n.color-wh[_ngcontent-%COMP%] {\n  color: white !important;\n}\n.btn-start[_ngcontent-%COMP%] {\n  background: linear-gradient(-45deg, #f11a65, rgba(35, 23, 171, 0.85), rgba(35, 213, 171, 0.85)) !important;\n  color: white !important;\n  height: 40px;\n  width: 200px;\n  border: none !important;\n  border-radius: 15px;\n}\n.txt-center[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n.ft-600[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.slider[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  overflow: hidden;\n}\n.slides[_ngcontent-%COMP%] {\n  display: flex;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  scroll-behavior: smooth;\n  -webkit-overflow-scrolling: touch;\n  \n}\n.slides[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n.slides[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e91f8b;\n  border-radius: 10px;\n}\n.slides[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.slides[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  scroll-snap-align: start;\n  flex-shrink: 0;\n  width: 500px;\n  height: 300px;\n  margin-right: 50px;\n  border-radius: 10px;\n  background: #eee;\n  transform-origin: center center;\n  transform: scale(1);\n  transition: transform 0.5s;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 100px;\n}\n.slides[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:target {\n  \n}\n.author-info[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.75);\n  color: white;\n  padding: 0.75rem;\n  text-align: center;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  margin: 0;\n}\n.author-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\nimg[_ngcontent-%COMP%] {\n  object-fit: cover;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.slider[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 1.5rem;\n  height: 1.5rem;\n  background: white;\n  text-decoration: none;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  margin: 0 0 0.5rem 0;\n  position: relative;\n}\n.slider[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:active {\n  top: 1px;\n}\n.slider[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\n  background: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9teS1mdW5zeW5jL215LWZ1bnN5bmMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLDBCQUFBO0VBQ0Y7O0VBQ0E7SUFDRSxhQUFBO0VBRUY7O0VBQUE7SUFDRSxxQkFBQTtJQUNBLHdCQUFBO0lBQ0EseUJBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7RUFHRjtBQUNGO0FBQUE7RUFDRSx3R0FBQTtFQUNBLDBCQUFBO0VBQ0EsZ0RBQUE7QUFFRjtBQUNBO0VBQ0UsV0FBQTtBQUVGO0FBQ0E7RUFDRSxZQUFBO0FBRUY7QUFDQTtFQUNFLGdCQUFBO0FBRUY7QUFDQTtFQUNFLGdCQUFBO0FBRUY7QUFDQTtFQUNFLG1CQUFBO0FBRUY7QUFFQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDRjtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFFQTtFQUNFLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGO0FBRUE7RUFDRSx1QkFBQTtBQUNGO0FBRUE7RUFDRSwwR0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFFQTtFQUNFLDZCQUFBO0FBQ0Y7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7QUFFQSxrQkFBQTtBQUVBO0VBQ0Usc0JBQUE7QUFBRjtBQUdBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUdBO0VBQ0UsYUFBQTtFQUVBLGdCQUFBO0VBQ0EsNkJBQUE7RUFJQSx1QkFBQTtFQUNBLGlDQUFBO0VBRUE7OztHQUFBO0FBRkY7QUFPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBSkY7QUFNQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QUFIRjtBQUtBO0VBQ0UsdUJBQUE7QUFGRjtBQUlBO0VBQ0Usd0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFGRjtBQUlBO0VBQ0UsNkJBQUE7QUFERjtBQUdBO0VBQ0UsK0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUFGO0FBRUE7RUFDRSxZQUFBO0FBQ0Y7QUFDQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRUY7QUFDQTtFQUNFLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQUVGO0FBQUE7RUFDRSxRQUFBO0FBR0Y7QUFEQTtFQUNFLGdCQUFBO0FBSUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL215LWZ1bnN5bmMvbXktZnVuc3luYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmxldHRlci1tdntcclxuICAgIGZvbnQtc2l6ZTogNDBweCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5vY3VsdGFyLWRpdntcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICB9XHJcbiAgLm1haW4tcHJlc2VudGF0aW9uIHtcclxuICAgIHdpZHRoOiA4NSUhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA1NTBweCFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTczYzdlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHBhZGRpbmctdG9wOiA3NXB4O1xyXG4gIH1cclxufVxyXG5cclxuLmJrZy1hbHRlcm5hdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgwLDAsMCwxKSwgIHJnYmEoMzUsMjMsMTcxLDAuODUpLCByZ2JhKDM1LDIxMywxNzEsMC44NSkpIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgNDAwJTtcclxuICBhbmltYXRpb246IGdyYWRpZW50IDE1cyBlYXNlIGluZmluaXRlIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZpeC1kaXNwbGF5IHtcclxuICBoZWlnaHQ6IDJ2aDtcclxufVxyXG5cclxuLmZ1bGwtZGlzcGxheSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubXJnLW1haW4ge1xyXG4gIG1hcmdpbi10b3A6IDgwcHg7XHJcbn1cclxuXHJcbi5tcmctY3RuIHtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG4ubXJnLWVuZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuXHJcbi5tYWluLXByZXNlbnRhdGlvbiB7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNzNjN2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcGFkZGluZy10b3A6IDc1cHg7XHJcbn1cclxuXHJcbi5oZXJvLXRleHQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmxldC1jaCB7XHJcbiAgZm9udC1mYW1pbHk6IGF0dGVuLXJvdW5kLW5ldywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuLmNvbG9yLXdoIHtcclxuICBjb2xvcjogd2hpdGUhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLXN0YXJ0IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2IoMjQxLCAyNiwgMTAxKSwgIHJnYmEoMzUsMjMsMTcxLDAuODUpLCByZ2JhKDM1LDIxMywxNzEsMC44NSkpIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGUhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgYm9yZGVyOiBub25lIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4udHh0LWNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZ0LTYwMCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLyoqIENhcmQgZGVzaW5nICoqL1xyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnNsaWRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zbGlkZXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgc2Nyb2xsLXNuYXAtdHlwZTogeCBtYW5kYXRvcnk7XHJcblxyXG5cclxuXHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG5cclxuICAvKlxyXG4gIHNjcm9sbC1zbmFwLXBvaW50cy14OiByZXBlYXQoMzAwcHgpO1xyXG4gIHNjcm9sbC1zbmFwLXR5cGU6IG1hbmRhdG9yeTtcclxuICAqL1xyXG59XHJcbi5zbGlkZXM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMTBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbn1cclxuLnNsaWRlczo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICNlOTFmOGI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uc2xpZGVzOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLnNsaWRlcyA+IGRpdiB7XHJcbiAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTAwcHg7XHJcbn1cclxuLnNsaWRlcyA+IGRpdjp0YXJnZXQge1xyXG4gIC8qICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpOyAqL1xyXG59XHJcbi5hdXRob3ItaW5mbyB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMC43NXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uYXV0aG9yLWluZm8gYSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmltZyB7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnNsaWRlciA+IGEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIHdpZHRoOiAxLjVyZW07XHJcbiAgaGVpZ2h0OiAxLjVyZW07XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbjogMCAwIDAuNXJlbSAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uc2xpZGVyID4gYTphY3RpdmUge1xyXG4gIHRvcDogMXB4O1xyXG59XHJcbi5zbGlkZXIgPiBhOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyFunsyncComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-funsync',
                templateUrl: './my-funsync.component.html',
                styleUrls: ['./my-funsync.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/pages/search/search.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/pages/search/search.component.ts ***!
  \*************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _structure_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../structure/navbar/navbar.component */ "./src/app/components/structure/navbar/navbar.component.ts");



class SearchComponent {
    constructor() { }
    ngOnInit() {
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 31, vars: 0, consts: [[1, "bkg", 2, "height", "100vh"], [1, "fix-display"], [1, "mx-auto", "color-wh", "w-75", 2, "text-align", "center"], [2, "text-align", "center"], [1, "ft-600"], [1, "mx-auto", "txt-center", "mrg-main", "color-wh", "w-75"], [1, "mrg-main", "mx-auto", "mrg-ctn"], [1, "slider", "mx-auto"], [1, "slides"], [2, "background", "url(https://miro.medium.com/max/10000/0*980dH3rjTZ6BHbWw)", "background-position", "center", "background-repeat", "no-repeat", "background-size", "cover"], [1, "row", 2, "margin-left", "175px"], [1, "col-12", "text-1", 2, "text-align", "left", "margin-left", "15px"], [1, "col-12", "w-75", "text", 2, "font-size", "20px", "text-align", "left", "margin-left", "15px"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Tus resultados de tu busqueda:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Titulo del video a ama aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Descripci\u00F3n del video aaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " 4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " 5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_structure_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"]], styles: ["@media screen and (max-width: 600px) {\n  .letter-mv[_ngcontent-%COMP%] {\n    font-size: 40px !important;\n  }\n\n  .ocultar-div[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .main-presentation[_ngcontent-%COMP%] {\n    width: 95% !important;\n    height: 350px !important;\n    background-color: #e73c7e;\n    text-align: center;\n    border-radius: 15px;\n    padding-top: 75px;\n  }\n}\n.bkg-alternative[_ngcontent-%COMP%] {\n  background: linear-gradient(-45deg, black, rgba(35, 23, 171, 0.85), rgba(35, 213, 171, 0.85)) !important;\n  background-size: 400% 400%;\n  animation: gradient 15s ease infinite !important;\n}\n.fix-display[_ngcontent-%COMP%] {\n  height: 8vh;\n}\n.full-display[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.mrg-main[_ngcontent-%COMP%] {\n  margin-top: 80px;\n}\n.mrg-ctn[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.mrg-end[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.main-presentation[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 400px;\n  background-color: #e73c7e;\n  text-align: center;\n  border-radius: 15px;\n  padding-top: 75px;\n}\n.hero-text[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n}\n.let-ch[_ngcontent-%COMP%] {\n  font-family: atten-round-new, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n}\n.color-wh[_ngcontent-%COMP%] {\n  color: white !important;\n}\n.btn-start[_ngcontent-%COMP%] {\n  background: linear-gradient(-45deg, #f11a65, rgba(35, 23, 171, 0.85), rgba(35, 213, 171, 0.85)) !important;\n  color: white !important;\n  height: 40px;\n  width: 200px;\n  border: none !important;\n  border-radius: 15px;\n}\n.txt-center[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n.ft-600[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.slider[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  overflow: hidden;\n}\n.slides[_ngcontent-%COMP%] {\n  display: flex;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  scroll-behavior: smooth;\n  -webkit-overflow-scrolling: touch;\n  \n}\n.slides[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n.slides[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e91f8b;\n  border-radius: 10px;\n}\n.slides[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.slides[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  scroll-snap-align: start;\n  flex-shrink: 0;\n  width: 500px;\n  height: 300px;\n  margin-right: 50px;\n  border-radius: 10px;\n  background: #eee;\n  transform-origin: center center;\n  transform: scale(1);\n  transition: transform 0.5s;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 100px;\n}\n.slides[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:target {\n  \n}\n.author-info[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.75);\n  color: white;\n  padding: 0.75rem;\n  text-align: center;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  margin: 0;\n}\n.author-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\nimg[_ngcontent-%COMP%] {\n  object-fit: cover;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.slider[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 1.5rem;\n  height: 1.5rem;\n  background: white;\n  text-decoration: none;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  margin: 0 0 0.5rem 0;\n  position: relative;\n}\n.slider[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:active {\n  top: 1px;\n}\n.slider[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\n  background: #000;\n}\n.stl-search-i[_ngcontent-%COMP%] {\n  border: none !important;\n  outline: none !important;\n  border-radius: 25px;\n  height: 50px;\n}\n.btn-search[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  border-color: #e73c7e;\n  color: #e73c7e;\n  background-color: #e73c7e;\n  outline: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSwwQkFBQTtFQUNGOztFQUNBO0lBQ0UsYUFBQTtFQUVGOztFQUFBO0lBQ0UscUJBQUE7SUFDQSx3QkFBQTtJQUNBLHlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0VBR0Y7QUFDRjtBQUFBO0VBQ0Usd0dBQUE7RUFDQSwwQkFBQTtFQUNBLGdEQUFBO0FBRUY7QUFDQTtFQUNFLFdBQUE7QUFFRjtBQUNBO0VBQ0UsWUFBQTtBQUVGO0FBQ0E7RUFDRSxnQkFBQTtBQUVGO0FBQ0E7RUFDRSxnQkFBQTtBQUVGO0FBQ0E7RUFDRSxtQkFBQTtBQUVGO0FBRUE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFFQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtBQUNGO0FBRUE7RUFDRSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUVBO0VBQ0UsdUJBQUE7QUFDRjtBQUVBO0VBQ0UsMEdBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBRUE7RUFDRSw2QkFBQTtBQUNGO0FBRUE7RUFDRSxnQkFBQTtBQUNGO0FBRUEsa0JBQUE7QUFFQTtFQUNFLHNCQUFBO0FBQUY7QUFHQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQUY7QUFHQTtFQUNFLGFBQUE7RUFFQSxnQkFBQTtFQUNBLDZCQUFBO0VBSUEsdUJBQUE7RUFDQSxpQ0FBQTtFQUVBOzs7R0FBQTtBQUZGO0FBT0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUpGO0FBTUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FBSEY7QUFLQTtFQUNFLHVCQUFBO0FBRkY7QUFJQTtFQUNFLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBRkY7QUFJQTtFQUNFLDZCQUFBO0FBREY7QUFHQTtFQUNFLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFBRjtBQUVBO0VBQ0UsWUFBQTtBQUNGO0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUVGO0FBQ0E7RUFDRSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFFRjtBQUFBO0VBQ0UsUUFBQTtBQUdGO0FBREE7RUFDRSxnQkFBQTtBQUlGO0FBQ0E7RUFDRSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBRUY7QUFDQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtBQUVGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAubGV0dGVyLW12e1xyXG4gICAgZm9udC1zaXplOiA0MHB4IWltcG9ydGFudDtcclxuICB9XHJcbiAgLm9jdWx0YXItZGl2e1xyXG4gICAgZGlzcGxheTpub25lO1xyXG4gIH1cclxuICAubWFpbi1wcmVzZW50YXRpb24ge1xyXG4gICAgd2lkdGg6IDk1JSFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDM1MHB4IWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNzNjN2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDc1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYmtnLWFsdGVybmF0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDAsMCwwLDEpLCAgcmdiYSgzNSwyMywxNzEsMC44NSksIHJnYmEoMzUsMjEzLDE3MSwwLjg1KSkhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xyXG4gIGFuaW1hdGlvbjogZ3JhZGllbnQgMTVzIGVhc2UgaW5maW5pdGUhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZml4LWRpc3BsYXkge1xyXG4gIGhlaWdodDogOHZoO1xyXG59XHJcblxyXG4uZnVsbC1kaXNwbGF5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5tcmctbWFpbiB7XHJcbiAgbWFyZ2luLXRvcDogODBweDtcclxufVxyXG5cclxuLm1yZy1jdG4ge1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuXHJcbi5tcmctZW5kIHtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG5cclxuLm1haW4tcHJlc2VudGF0aW9uIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3M2M3ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBwYWRkaW5nLXRvcDogNzVweDtcclxufVxyXG5cclxuLmhlcm8tdGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubGV0LWNoIHtcclxuICBmb250LWZhbWlseTogYXR0ZW4tcm91bmQtbmV3LCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG4uY29sb3Itd2gge1xyXG4gIGNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tc3RhcnQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYigyNDEsIDI2LCAxMDEpLCAgcmdiYSgzNSwyMywxNzEsMC44NSksIHJnYmEoMzUsMjEzLDE3MSwwLjg1KSkhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBib3JkZXI6IG5vbmUhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi50eHQtY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZnQtNjAwIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4vKiogQ2FyZCBkZXNpbmcgKiovXHJcblxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uc2xpZGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnNsaWRlcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcclxuXHJcblxyXG5cclxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcblxyXG4gIC8qXHJcbiAgc2Nyb2xsLXNuYXAtcG9pbnRzLXg6IHJlcGVhdCgzMDBweCk7XHJcbiAgc2Nyb2xsLXNuYXAtdHlwZTogbWFuZGF0b3J5O1xyXG4gICovXHJcbn1cclxuLnNsaWRlczo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAxMHB4O1xyXG4gIGhlaWdodDogMTBweDtcclxufVxyXG4uc2xpZGVzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogI2U5MWY4YjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5zbGlkZXM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4uc2xpZGVzID4gZGl2IHtcclxuICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2VlZTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMDBweDtcclxufVxyXG4uc2xpZGVzID4gZGl2OnRhcmdldCB7XHJcbiAgLyogICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7ICovXHJcbn1cclxuLmF1dGhvci1pbmZvIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5hdXRob3ItaW5mbyBhIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuaW1nIHtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc2xpZGVyID4gYSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgd2lkdGg6IDEuNXJlbTtcclxuICBoZWlnaHQ6IDEuNXJlbTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWFyZ2luOiAwIDAgMC41cmVtIDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5zbGlkZXIgPiBhOmFjdGl2ZSB7XHJcbiAgdG9wOiAxcHg7XHJcbn1cclxuLnNsaWRlciA+IGE6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQ6ICMwMDA7XHJcbn1cclxuXHJcblxyXG5cclxuLnN0bC1zZWFyY2gtaSB7XHJcbiAgYm9yZGVyOiBub25lIWltcG9ydGFudDtcclxuICBvdXRsaW5lOiBub25lIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLmJ0bi1zZWFyY2gge1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZTczYzdlO1xyXG4gIGNvbG9yOiAjZTczYzdlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNzNjN2U7XHJcbiAgb3V0bGluZTogbm9uZSFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/pages/watchfun/watchfun.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/watchfun/watchfun.component.ts ***!
  \*****************************************************************/
/*! exports provided: WatchfunComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchfunComponent", function() { return WatchfunComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _structure_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../structure/navbar/navbar.component */ "./src/app/components/structure/navbar/navbar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function WatchfunComponent_button_27_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WatchfunComponent_button_27_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.playOrPaused(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WatchfunComponent_button_28_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WatchfunComponent_button_28_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.playOrPaused2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class WatchfunComponent {
    constructor() {
        this.play = false;
        this.lyricsDisplay = "...";
        this.lyricsTraslateDisplay = "...";
        this.volumeControl = false;
        this.timeTotalMusic = '0:00';
        this.timeCurrentMusic = '0:00';
        this.volumeDefect = 100;
        this.fullScreen = false;
        this.playAction = false;
        this.reframed = false;
        this.nameVideo = "";
        this.demoArrayData = ['0fnrNna6fuk', 'GTcM3qCeup0'];
        this.position = 0;
        this.dataLyricsSync = [[5, 'Fireworks', 8], [9, 'Shooting stars', 11], [11, 'Blinding lights', 13], [13, 'Wonder where', 14],
            [14, 'Where you are', 17], [17, 'You\'re in the leaves', 18], [18, 'You\'re in the rain', 20], [20, 'You\'re in the air', 23],
            [23, 'You\'re the one that I keep chasing everywhere', 29], [29, 'I will hunt you down', 34], [34, 'I will hunt you down (2)', 41],
            [41, 'Firefly', 122], [121, 'In the night', 122], [122, 'I see your trail', 125], [125, 'And I wish', 126], [127, 'That somehow', 128],
            [128, 'You could stay', 131], [131, 'But you keep flying', 132], [132, 'That\'s the way', 134], [134, 'That you are', 137],
            [137, 'You will always belong among the stars', 143], [143, 'Firefly', 240], [240, 'End ...', 244]];
        this.dataLyricsSyncTraslate = [[5, 'Fuegos artificiales', 8], [9, 'Estrellas fugaces', 11], [11, 'Luces cegadoras', 13],
            [13, 'Me pregunto donde', 14], [14, 'Dónde estás', 17], [17, 'Estas en las hojas', 18], [18, 'Estas en la lluvia', 20],
            [20, 'Estas en el aire', 23], [23, 'Eres la que sigo persiguiendo en todas partes', 29],
            [29, 'Te cazaré', 34], [34, 'Te cazaré (2)', 41], [41, 'Fuegos artificiales', 122], [121, 'En la noche', 122],
            [122, 'Veo tu rastro', 125], [125, 'Y deseo', 126], [127, 'Que de alguna manera', 128], [128, 'Podrías quedarte', 131],
            [131, 'Pero sigues volando', 132], [132, 'Esa es la manera', 134], [134, 'Eso eres', 137], [137, 'Siempre pertenecerás entre las estrellas', 143],
            [143, 'Fuegos artificiales', 240], [240, 'Fin ...', 244]];
        this.elem = document.documentElement;
    }
    ngOnInit() {
        this.video = this.demoArrayData[this.position];
        this.init();
        this.playSyncMusic();
    }
    btnVolume() {
        this.volumeControl = !this.volumeControl;
    }
    timeSlider() {
        var seekslider, seekto;
        seekslider = document.getElementById('seekslider');
        seekto = this.player.getDuration() * (seekslider.value / 100);
        this.player.seekTo(seekto);
        seekslider.value = (100 / this.player.getDuration()) * this.player.getCurrentTime();
        // @ts-ignore
        document.getElementById('audio-element').play();
        document.getElementById("body").classList.remove('bkg-alternative');
        this.eventData.target.playVideo();
        this.playAction = true;
        this.lyricsDisplay = "...";
        this.lyricsTraslateDisplay = "...";
    }
    volumeSlider() {
        var volumeslider;
        volumeslider = document.getElementById('volume');
        this.player.setVolume(volumeslider.value);
        this.volumeDefect = volumeslider.value;
    }
    playSyncMusic() {
        document.getElementById("body").classList.remove('bkg-alternative');
        setTimeout(() => {
            this.syncLyrics();
        }, 1000);
    }
    syncLyrics() {
        var time = this.cleanTime();
        this.timeTotalMusic = this.timeCurrentPlay(this.player.getDuration());
        this.timeCurrentMusic = this.timeCurrentPlay(this.cleanTime());
        this.nameVideo = this.player.getVideoData().title;
        if (Math.round(time) == this.dataLyricsSync[this.dataLyricsSync.length - 1][2]) {
            this.playAction = false;
        }
        for (let i = 0; i < this.dataLyricsSync.length; i++) {
            if (Math.round(time) == this.dataLyricsSync[i][0]) {
                this.lyricsDisplay = this.dataLyricsSync[i][1] + '';
                this.lyricsTraslateDisplay = this.dataLyricsSyncTraslate[i][1] + '';
            }
            if (Math.round(time) == this.dataLyricsSync[i][2]) {
                this.lyricsDisplay = this.dataLyricsSync[i + 1][1] + '';
                this.lyricsTraslateDisplay = this.dataLyricsSyncTraslate[i + 1][1] + '';
            }
        }
        setTimeout(() => {
            this.syncLyrics();
        }, 1000);
    }
    timeCurrentPlay(segundosP) {
        var dataTime = '';
        let segundos = (Math.round(segundosP % 0x3C)).toString();
        let horas = (Math.floor(segundosP / 0xE10)).toString();
        let minutos = (Math.floor(segundosP / 0x3C) % 0x3C).toString();
        if (parseInt(segundos) < 10) {
            segundos = "0" + segundos;
        }
        if (segundos == "60") {
            segundos = '59';
        }
        dataTime = minutos + ':' + segundos;
        return dataTime;
    }
    init() {
        var tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        window['onYouTubeIframeAPIReady'] = () => this.startVideo();
    }
    startVideo() {
        this.reframed = false;
        document.getElementById("main").classList.remove('bkg-alternative');
        this.player = new window['YT'].Player('player', {
            videoId: this.video,
            playerVars: {
                autoplay: 0,
                modestbranding: 0,
                controls: 0,
                disablekb: 0,
                rel: 0,
                showinfo: 0,
                fs: 0,
                playsinline: 0
            },
            events: {
                'onStateChange': this.onPlayerStateChange.bind(this),
                'onError': this.onPlayerError.bind(this),
                'onReady': this.onPlayerReady.bind(this),
            }
        });
    }
    onPlayerReady(event) {
        this.eventData = event;
    }
    onPlayerStateChange(event) {
        //console.log(event)
        switch (event.data) {
            case window['YT'].PlayerState.PLAYING:
                if (this.cleanTime() == 0) {
                    //console.log('started ' + this.cleanTime());
                    this.playSyncMusic();
                }
                else {
                    //console.log('playing ' + this.cleanTime())
                }
                ;
                break;
            case window['YT'].PlayerState.PAUSED:
                if (this.player.getDuration() - this.player.getCurrentTime() != 0) {
                    // console.log('paused' + ' @ ' + this.cleanTime());
                }
                ;
                break;
            case window['YT'].PlayerState.ENDED:
                document.getElementById("body").classList.add('bkg-alternative');
                if (this.position <= this.demoArrayData.length - 1) {
                    this.nextContent();
                }
                break;
        }
    }
    cleanTime() {
        return Math.round(this.player.getCurrentTime());
    }
    onPlayerError(event) {
        switch (event.data) {
            case 2:
                //console.log('' + this.video)
                break;
            case 100:
                break;
            case 101 || false:
                break;
        }
    }
    playOrPaused() {
        this.playAction = !this.playAction;
        this.eventData.target.playVideo();
    }
    playOrPaused2() {
        this.playAction = !this.playAction;
        this.eventData.target.pauseVideo();
    }
    openFullScreen() {
        var elem = document.documentElement;
        this.fullScreen = true;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else { // @ts-ignore
            if (elem.webkitRequestFullscreen) { /* Safari */
                // @ts-ignore
                elem.webkitRequestFullscreen();
            }
            else { // @ts-ignore
                if (elem.msRequestFullscreen) { /* IE11 */
                    // @ts-ignore
                    elem.msRequestFullscreen();
                }
            }
        }
    }
    closeFullScreen() {
        var elem = document.documentElement;
        this.fullScreen = false;
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else { // @ts-ignore
            if (document.webkitExitFullscreen) { /* Safari */
                // @ts-ignore
                document.webkitExitFullscreen();
            }
            else { // @ts-ignore
                if (document.msExitFullscreen) { /* IE11 */
                    // @ts-ignore
                    document.msExitFullscreen();
                }
            }
        }
    }
    backContent() {
        this.position--;
        this.coreContent();
    }
    nextContent() {
        this.position++;
        this.coreContent();
    }
    coreContent() {
        if (this.position <= this.demoArrayData.length - 1) {
            this.player.loadVideoById(this.demoArrayData[this.position], 0, "default");
            this.eventData.target.playVideo();
            this.playAction = true;
            this.lyricsDisplay = "...";
            this.lyricsTraslateDisplay = "...";
            // @ts-ignore
            document.getElementById('audio-element').play();
        }
    }
}
WatchfunComponent.ɵfac = function WatchfunComponent_Factory(t) { return new (t || WatchfunComponent)(); };
WatchfunComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WatchfunComponent, selectors: [["app-watchfun"]], decls: 32, vars: 6, consts: [["id", "body"], ["id", "main", 1, "mx-auto", "bck-main", "bkg-alternative"], [1, "header", "data-music", "bkg", 2, "text-decoration", "none!important", "margin-top", "75px", 3, "href"], [1, "row", "let-ch"], [1, "col-12", "justify-text", "adjust-v-h", "text", "color-wh", 2, "margin-top", "25px"], [2, "margin-top", "5px", "margin-left", "8px", "text-align", "center", "font-size", "20px!important"], [1, "video-foreground", 2, "position", "fixed", "z-index", "-99", "width", "100%", "height", "100%"], ["id", "core-data", 2, "height", "100%"], ["id", "player", 2, "width", "100%!important", "height", "100%!important"], [1, "letter", "container", "mx-auto", "w-75", 2, "text-align", "center"], [1, "row", 2, "text-align", "center"], [1, "col-12", "letter-mv", 2, "text-align", "center"], [1, "col-12", 2, "text-align", "center"], [2, "font-size", "35px", "font-weight", "800", "color", "gold"], ["id", "audio-element", "controls", "", 2, "visibility", "hidden", 3, "play"], ["src", "", "type", "audio/flac"], [1, "player", "centered", "w-75", 2, "background-color", "#373B44"], [2, "height", "60px", "margin-top", "25px"], ["onclick", "document.getElementById('audio-element').play()", 1, "col-4", "color-wh", 2, "text-align", "center", "background", "transparent!important", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "32", "height", "32", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-90deg-down"], ["fill-rule", "evenodd", "d", "M4.854 14.854a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V3.5A2.5 2.5 0 0 1 6.5 1h8a.5.5 0 0 1 0 1h-8A1.5 1.5 0 0 0 5 3.5v9.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4z"], ["class", "col-4 color-wh", "style", "text-align: center;background: transparent!important;", "onclick", "document.getElementById('audio-element').play()", 3, "click", 4, "ngIf"], ["class", "col-4 color-wh", "style", "text-align: center;background: transparent!important;", "onclick", "document.getElementById('audio-element').pause()", 3, "click", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "width", "32", "height", "32", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-90deg-up"], ["fill-rule", "evenodd", "d", "M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "32", "height", "32", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-play"], ["d", "M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"], ["onclick", "document.getElementById('audio-element').pause()", 1, "col-4", "color-wh", 2, "text-align", "center", "background", "transparent!important", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "32", "height", "32", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-pause"], ["d", "M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"]], template: function WatchfunComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "audio", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("play", function WatchfunComponent_Template_audio_play_19_listener() { return ctx.playSyncMusic(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "source", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WatchfunComponent_Template_button_click_24_listener() { return ctx.nextContent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, WatchfunComponent_button_27_Template, 3, 0, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, WatchfunComponent_button_28_Template, 3, 0, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WatchfunComponent_Template_button_click_29_listener() { return ctx.backContent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.youtube.com/watch?v=", ctx.video, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.nameVideo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lyricsDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lyricsTraslateDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.playAction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.playAction);
    } }, directives: [_structure_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["@media screen and (max-width: 600px) {\n  .letter-mv[_ngcontent-%COMP%] {\n    font-size: 40px !important;\n  }\n\n  .ocultar-div[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .main-presentation[_ngcontent-%COMP%] {\n    width: 85% !important;\n    height: 550px !important;\n    background-color: #e73c7e;\n    text-align: center;\n    border-radius: 15px;\n    padding-top: 75px;\n  }\n}\n.bkg-alternative[_ngcontent-%COMP%] {\n  background: linear-gradient(-45deg, black, rgba(35, 23, 171, 0.85), rgba(35, 213, 171, 0.85)) !important;\n  background-size: 400% 400%;\n  animation: gradient 15s ease infinite !important;\n}\n.fix-display[_ngcontent-%COMP%] {\n  height: 8vh;\n}\n.full-display[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.mrg-main[_ngcontent-%COMP%] {\n  margin-top: 80px;\n}\n.mrg-ctn[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.mrg-end[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.main-presentation[_ngcontent-%COMP%] {\n  width: 75%;\n  height: 400px;\n  background-color: #e73c7e;\n  text-align: center;\n  border-radius: 15px;\n  padding-top: 75px;\n}\n.hero-text[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n}\n.let-ch[_ngcontent-%COMP%] {\n  font-family: atten-round-new, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n}\n.color-wh[_ngcontent-%COMP%] {\n  color: white !important;\n}\n.btn-start[_ngcontent-%COMP%] {\n  background: linear-gradient(-45deg, #f11a65, rgba(35, 23, 171, 0.85), rgba(35, 213, 171, 0.85)) !important;\n  color: white !important;\n  height: 40px;\n  width: 200px;\n  border: none !important;\n  border-radius: 15px;\n  outline: none !important;\n}\n.txt-center[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n.ft-600[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.slider[_ngcontent-%COMP%] {\n  width: 75%;\n  text-align: center;\n  overflow: hidden;\n}\n.slides[_ngcontent-%COMP%] {\n  display: flex;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  scroll-behavior: smooth;\n  -webkit-overflow-scrolling: touch;\n  \n}\n.slides[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n.slides[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e91f8b;\n  border-radius: 10px;\n}\n.slides[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.slides[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  scroll-snap-align: start;\n  flex-shrink: 0;\n  width: 300px;\n  height: 500px;\n  margin-right: 50px;\n  border-radius: 10px;\n  background: #eee;\n  transform-origin: center center;\n  transform: scale(1);\n  transition: transform 0.5s;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 100px;\n}\n.slides[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:target {\n  \n}\n.author-info[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.75);\n  color: white;\n  padding: 0.75rem;\n  text-align: center;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  margin: 0;\n}\n.author-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\nimg[_ngcontent-%COMP%] {\n  object-fit: cover;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.slider[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 1.5rem;\n  height: 1.5rem;\n  background: white;\n  text-decoration: none;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  margin: 0 0 0.5rem 0;\n  position: relative;\n}\n.slider[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:active {\n  top: 1px;\n}\n.slider[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\n  background: #000;\n}\n.data-music[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  background: transparent !important;\n}\n.bkg-alternative[_ngcontent-%COMP%] {\n  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5) !important;\n  background-size: 400% 400%;\n  animation: gradient 15s ease infinite !important;\n}\n@keyframes gradient {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n.video-background[_ngcontent-%COMP%] {\n  background: #000;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -99;\n}\n.video-foreground[_ngcontent-%COMP%], .video-background[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n@keyframes gradient {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n.bck-main[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n.header[_ngcontent-%COMP%] {\n  position: fixed;\n  height: 100px;\n  width: 300px;\n  background-color: white;\n  border-radius: 20px;\n  margin-top: 15px;\n  margin-left: 15px;\n}\n#audio-element[_ngcontent-%COMP%] {\n  width: 100%;\n  outline: none !important;\n}\n.bkg[_ngcontent-%COMP%] {\n  background: black !important;\n  background-size: 400% 400%;\n  animation: gradient 15s ease infinite;\n}\n.letter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 90vh;\n  font-size: 80px;\n  color: white;\n  font-family: atten-round-new, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  text-align: center;\n  word-wrap: break-word;\n}\n.let-ch[_ngcontent-%COMP%] {\n  font-family: atten-round-new, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n}\n.justify-text[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n  max-width: 100%;\n}\n.adjust-v-h[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.player[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  z-index: 0;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n}\n.centered[_ngcontent-%COMP%] {\n  left: 50% !important;\n  transform: translate(-50%, 0) !important;\n}\n.data-music[_ngcontent-%COMP%] {\n  color: white;\n}\n.music-player[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n.btn-play[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  border: none !important;\n  color: white;\n  margin-left: 5px;\n  margin-top: 25px;\n  height: 50px;\n  width: 50px;\n  border-radius: 5px;\n  outline: none !important;\n}\n.btn-play-style[_ngcontent-%COMP%] {\n  color: white;\n}\n#timeline[_ngcontent-%COMP%] {\n  width: 85%;\n  height: 20px;\n  margin-top: 20px;\n  float: left;\n  border-radius: 15px;\n  position: relative;\n  background: #5f2c82;\n  \n  \n  background: linear-gradient(to right, #49a09d, #5f2c82);\n  \n}\n.uk-progress[_ngcontent-%COMP%] {\n  overflow: hidden;\n  height: 20px !important;\n  -webkit-appearance: none;\n  background-color: transparent !important;\n  border-radius: 15px;\n  outline: none !important;\n}\ninput[type=range][_ngcontent-%COMP%]::-webkit-slider-thumb {\n  width: 20px;\n  -webkit-appearance: none;\n  height: 20px;\n  cursor: ew-resize;\n  border-radius: 50%;\n  background: white;\n}\n.vranger[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  transform: rotate(270deg);\n  -moz-transform: rotate(270deg);\n  \n}\n.volume-input[_ngcontent-%COMP%]::-webkit-slider-thumb {\n  width: 20px;\n  -webkit-appearance: none;\n  height: 20px;\n  cursor: ew-resize;\n  border-radius: 50%;\n  background: white !important;\n}\n\n[_ngcontent-%COMP%]:-webkit-full-screen {\n  background-color: yellow;\n}\n\n[_ngcontent-%COMP%]:-ms-fullscreen {\n  background-color: yellow;\n}\n\n[_ngcontent-%COMP%]:-webkit-full-screen {\n  background-color: yellow;\n}\n[_ngcontent-%COMP%]:fullscreen {\n  background-color: yellow;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy93YXRjaGZ1bi93YXRjaGZ1bi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsMEJBQUE7RUFDRjs7RUFDQTtJQUNFLGFBQUE7RUFFRjs7RUFBQTtJQUNFLHFCQUFBO0lBQ0Esd0JBQUE7SUFDQSx5QkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtFQUdGO0FBQ0Y7QUFBQTtFQUNFLHdHQUFBO0VBQ0EsMEJBQUE7RUFDQSxnREFBQTtBQUVGO0FBQ0E7RUFDRSxXQUFBO0FBRUY7QUFDQTtFQUNFLFlBQUE7QUFFRjtBQUNBO0VBQ0UsZ0JBQUE7QUFFRjtBQUNBO0VBQ0UsZ0JBQUE7QUFFRjtBQUNBO0VBQ0UsbUJBQUE7QUFFRjtBQUVBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNGO0FBRUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7QUFDRjtBQUVBO0VBQ0Usd0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFFQTtFQUNFLHVCQUFBO0FBQ0Y7QUFFQTtFQUNFLDBHQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQUNGO0FBRUE7RUFDRSw2QkFBQTtBQUNGO0FBRUE7RUFDRSxnQkFBQTtBQUNGO0FBRUEsa0JBQUE7QUFFQTtFQUNFLHNCQUFBO0FBQUY7QUFHQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQUY7QUFHQTtFQUNFLGFBQUE7RUFFQSxnQkFBQTtFQUNBLDZCQUFBO0VBSUEsdUJBQUE7RUFDQSxpQ0FBQTtFQUVBOzs7R0FBQTtBQUZGO0FBT0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUpGO0FBTUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FBSEY7QUFLQTtFQUNFLHVCQUFBO0FBRkY7QUFJQTtFQUNFLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBRkY7QUFJQTtFQUNFLDZCQUFBO0FBREY7QUFHQTtFQUNFLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFBRjtBQUVBO0VBQ0UsWUFBQTtBQUNGO0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUVGO0FBQ0E7RUFDRSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFFRjtBQUFBO0VBQ0UsUUFBQTtBQUdGO0FBREE7RUFDRSxnQkFBQTtBQUlGO0FBQUE7RUFDRSxrQ0FBQTtBQUdGO0FBQUE7RUFDRSx5RUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0RBQUE7QUFHRjtBQUFBO0VBQ0U7SUFDRSwyQkFBQTtFQUdGO0VBREE7SUFDRSw2QkFBQTtFQUdGO0VBREE7SUFDRSwyQkFBQTtFQUdGO0FBQ0Y7QUFBQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFBUSxRQUFBO0VBQVUsU0FBQTtFQUFXLE9BQUE7RUFDN0IsWUFBQTtBQUtGO0FBSEE7O0VBRUUsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFNRjtBQUhBO0VBQ0U7SUFDRSwyQkFBQTtFQU1GO0VBSkE7SUFDRSw2QkFBQTtFQU1GO0VBSkE7SUFDRSwyQkFBQTtFQU1GO0FBQ0Y7QUFIQTtFQUNFLGFBQUE7QUFLRjtBQUZBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFLRjtBQUZBO0VBQ0UsV0FBQTtFQUNBLHdCQUFBO0FBS0Y7QUFGQTtFQUNFLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQ0FBQTtBQUtGO0FBRkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBS0Y7QUFGQTtFQUNFLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUtGO0FBRkE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7QUFLRjtBQUZBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFLRjtBQUZBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FBS0Y7QUFGQTtFQUNFLG9CQUFBO0VBQ0Esd0NBQUE7QUFLRjtBQUZBO0VBQ0UsWUFBQTtBQUtGO0FBRkE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FBS0Y7QUFGQTtFQUNFLHdDQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQUtGO0FBRkE7RUFDRSxZQUFBO0FBS0Y7QUFGQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQXNCLDhCQUFBO0VBQzRDLCtCQUFBO0VBQ2xFLHVEQUFBO0VBQXlELHFFQUFBO0FBUTNEO0FBSkE7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUFPRjtBQUpBO0VBQ0UsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQU9GO0FBSkE7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFBZ0MseUNBQUE7QUFRbEM7QUFMQTtFQUNFLFdBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7QUFRRjtBQUxBLGtCQUFBO0FBQ0E7RUFDRSx3QkFBQTtBQVFGO0FBTEEsU0FBQTtBQUNBO0VBQ0Usd0JBQUE7QUFRRjtBQUxBLG9CQUFBO0FBQ0E7RUFDRSx3QkFBQTtBQVFGO0FBVEE7RUFDRSx3QkFBQTtBQVFGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy93YXRjaGZ1bi93YXRjaGZ1bi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmxldHRlci1tdntcclxuICAgIGZvbnQtc2l6ZTogNDBweCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5vY3VsdGFyLWRpdntcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICB9XHJcbiAgLm1haW4tcHJlc2VudGF0aW9uIHtcclxuICAgIHdpZHRoOiA4NSUhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA1NTBweCFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTczYzdlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHBhZGRpbmctdG9wOiA3NXB4O1xyXG4gIH1cclxufVxyXG5cclxuLmJrZy1hbHRlcm5hdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgwLDAsMCwxKSwgIHJnYmEoMzUsMjMsMTcxLDAuODUpLCByZ2JhKDM1LDIxMywxNzEsMC44NSkpIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgNDAwJTtcclxuICBhbmltYXRpb246IGdyYWRpZW50IDE1cyBlYXNlIGluZmluaXRlIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZpeC1kaXNwbGF5IHtcclxuICBoZWlnaHQ6IDh2aDtcclxufVxyXG5cclxuLmZ1bGwtZGlzcGxheSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubXJnLW1haW4ge1xyXG4gIG1hcmdpbi10b3A6IDgwcHg7XHJcbn1cclxuXHJcbi5tcmctY3RuIHtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG4ubXJnLWVuZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuXHJcbi5tYWluLXByZXNlbnRhdGlvbiB7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNzNjN2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcGFkZGluZy10b3A6IDc1cHg7XHJcbn1cclxuXHJcbi5oZXJvLXRleHQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmxldC1jaCB7XHJcbiAgZm9udC1mYW1pbHk6IGF0dGVuLXJvdW5kLW5ldywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuLmNvbG9yLXdoIHtcclxuICBjb2xvcjogd2hpdGUhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLXN0YXJ0IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2IoMjQxLCAyNiwgMTAxKSwgIHJnYmEoMzUsMjMsMTcxLDAuODUpLCByZ2JhKDM1LDIxMywxNzEsMC44NSkpIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGUhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgYm9yZGVyOiBub25lIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIG91dGxpbmU6IG5vbmUhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udHh0LWNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZ0LTYwMCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLyoqIENhcmQgZGVzaW5nICoqL1xyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnNsaWRlciB7XHJcbiAgd2lkdGg6IDc1JTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnNsaWRlcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcclxuXHJcblxyXG5cclxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcblxyXG4gIC8qXHJcbiAgc2Nyb2xsLXNuYXAtcG9pbnRzLXg6IHJlcGVhdCgzMDBweCk7XHJcbiAgc2Nyb2xsLXNuYXAtdHlwZTogbWFuZGF0b3J5O1xyXG4gICovXHJcbn1cclxuLnNsaWRlczo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAxMHB4O1xyXG4gIGhlaWdodDogMTBweDtcclxufVxyXG4uc2xpZGVzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogI2U5MWY4YjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5zbGlkZXM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4uc2xpZGVzID4gZGl2IHtcclxuICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2VlZTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMDBweDtcclxufVxyXG4uc2xpZGVzID4gZGl2OnRhcmdldCB7XHJcbiAgLyogICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7ICovXHJcbn1cclxuLmF1dGhvci1pbmZvIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5hdXRob3ItaW5mbyBhIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuaW1nIHtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc2xpZGVyID4gYSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgd2lkdGg6IDEuNXJlbTtcclxuICBoZWlnaHQ6IDEuNXJlbTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWFyZ2luOiAwIDAgMC41cmVtIDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5zbGlkZXIgPiBhOmFjdGl2ZSB7XHJcbiAgdG9wOiAxcHg7XHJcbn1cclxuLnNsaWRlciA+IGE6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQ6ICMwMDA7XHJcbn1cclxuXHJcblxyXG4uZGF0YS1tdXNpYyxib2R5IHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ia2ctYWx0ZXJuYXRpdmUge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNlZTc3NTIsICNlNzNjN2UsICMyM2E2ZDUpIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgNDAwJTtcclxuICBhbmltYXRpb246IGdyYWRpZW50IDE1cyBlYXNlIGluZmluaXRlIWltcG9ydGFudDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBncmFkaWVudCB7XHJcbiAgMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xyXG4gIH1cclxufVxyXG5cclxuLnZpZGVvLWJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDsgcmlnaHQ6IDA7IGJvdHRvbTogMDsgbGVmdDogMDtcclxuICB6LWluZGV4OiAtOTk7XHJcbn1cclxuLnZpZGVvLWZvcmVncm91bmQsXHJcbi52aWRlby1iYWNrZ3JvdW5kIGlmcmFtZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBncmFkaWVudCB7XHJcbiAgMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xyXG4gIH1cclxufVxyXG5cclxuLmJjay1tYWlue1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbiNhdWRpby1lbGVtZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdXRsaW5lOiBub25lIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJrZyB7XHJcbiAgYmFja2dyb3VuZDogYmxhY2shaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xyXG4gIGFuaW1hdGlvbjogZ3JhZGllbnQgMTVzIGVhc2UgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5sZXR0ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiA5MHZoO1xyXG4gIGZvbnQtc2l6ZTogODBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6IGF0dGVuLXJvdW5kLW5ldywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcblxyXG4ubGV0LWNoIHtcclxuICBmb250LWZhbWlseTogYXR0ZW4tcm91bmQtbmV3LCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG4uanVzdGlmeS10ZXh0IHtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgbWF4LXdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbi5hZGp1c3Qtdi1oIHtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnBsYXllciB7XHJcbiAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgbGVmdDowcHg7XHJcbiAgcmlnaHQ6MHB4O1xyXG4gIGJvdHRvbTowcHg7XHJcbiAgei1pbmRleDowO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XHJcbn1cclxuXHJcbi5jZW50ZXJlZCB7XHJcbiAgbGVmdDogNTAlIWltcG9ydGFudDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kYXRhLW11c2ljIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tdXNpYy1wbGF5ZXIge1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjUpO1xyXG59XHJcblxyXG4uYnRuLXBsYXkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcclxuICBib3JkZXI6IG5vbmUhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBvdXRsaW5lOiBub25lIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1wbGF5LXN0eWxlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiN0aW1lbGluZXtcclxuICB3aWR0aDogODUlO1xyXG4gIGhlaWdodDogMjBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6ICM1ZjJjODI7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM0OWEwOWQsICM1ZjJjODIpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM0OWEwOWQsICM1ZjJjODIpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcblxyXG59XHJcblxyXG4udWstcHJvZ3Jlc3N7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBoZWlnaHQ6IDIwcHghaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBvdXRsaW5lOiBub25lIWltcG9ydGFudDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT0ncmFuZ2UnXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgY3Vyc29yOiBldy1yZXNpemU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4udnJhbmdlciB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTsgLypkbyBzYW1lIGZvciBvdGhlciBicm93c2VycyBpZiByZXF1aXJlZCovXHJcbn1cclxuXHJcbi52b2x1bWUtaW5wdXQ6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcclxuICB3aWR0aDogMjBweDtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGN1cnNvcjogZXctcmVzaXplO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIFNhZmFyaSBzeW50YXggKi9cclxuOi13ZWJraXQtZnVsbC1zY3JlZW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxufVxyXG5cclxuLyogSUUxMSAqL1xyXG46LW1zLWZ1bGxzY3JlZW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxufVxyXG5cclxuLyogU3RhbmRhcmQgc3ludGF4ICovXHJcbjpmdWxsc2NyZWVuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WatchfunComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-watchfun',
                templateUrl: './watchfun.component.html',
                styleUrls: ['./watchfun.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/player/local/local.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/player/local/local.component.ts ***!
  \************************************************************/
/*! exports provided: LocalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalComponent", function() { return LocalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _structure_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../structure/navbar/navbar.component */ "./src/app/components/structure/navbar/navbar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function LocalComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LocalComponent_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.playOrPaused(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LocalComponent_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LocalComponent_button_24_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.playOrPaused(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LocalComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LocalComponent_div_36_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.volumeSlider(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r2.volumeDefect);
} }
class LocalComponent {
    constructor() {
        this.title = 'MusicLetter';
        this.play = false;
        this.lyricsDisplay = "...";
        this.lyricsTraslateDisplay = "...";
        this.playControl = false;
        this.volumeControl = false;
        this.timeTotalMusic = '0:00';
        this.timeCurrentMusic = '0:00';
        this.volumeDefect = 100;
        this.dataLyricsSync = [[5, 'Fireworks', 8], [9, 'Shooting stars', 11], [11, 'Blinding lights', 13], [13, 'Wonder where', 14],
            [14, 'Where you are', 17], [17, 'You\'re in the leaves', 18], [18, 'You\'re in the rain', 20], [20, 'You\'re in the air', 23],
            [23, 'You\'re the one that I keep chasing everywhere', 29], [29, 'I will hunt you down', 34], [34, 'I will hunt you down (2)', 41],
            [41, 'Firefly', 122], [121, 'In the night', 122], [122, 'I see your trail', 125], [125, 'And I wish', 126], [127, 'That somehow', 128],
            [128, 'You could stay', 131], [131, 'But you keep flying', 132], [132, 'That\'s the way', 134], [134, 'That you are', 137],
            [137, 'You will always belong among the stars', 143], [143, 'Firefly', 240], [240, 'End ...', 244]];
        this.dataLyricsSyncTraslate = [[5, 'Fuegos artificiales', 8], [9, 'Estrellas fugaces', 11], [11, 'Luces cegadoras', 13],
            [13, 'Me pregunto donde', 14], [14, 'Dónde estás', 17], [17, 'Estas en las hojas', 18], [18, 'Estas en la lluvia', 20],
            [20, 'Estas en el aire', 23], [23, 'Eres la que sigo persiguiendo en todas partes', 29],
            [29, 'Te cazaré', 34], [34, 'Te cazaré (2)', 41], [41, 'Fuegos artificiales', 122], [121, 'En la noche', 122],
            [122, 'Veo tu rastro', 125], [125, 'Y deseo', 126], [127, 'Que de alguna manera', 128], [128, 'Podrías quedarte', 131],
            [131, 'Pero sigues volando', 132], [132, 'Esa es la manera', 134], [134, 'Eso eres', 137], [137, 'Siempre pertenecerás entre las estrellas', 143],
            [143, 'Fuegos artificiales', 240], [240, 'Fin ...', 244]];
    }
    ngOnInit() {
    }
    /*  dataLyricsSync = [[7,'I\'d move to Tokyo',14],[14,'If that\'s where you want to go',18],[18,'Don\'t have to go alone',22],[22,'You can just let me know',26],
        [26,'I\'d move to Tokyo',30],[30,'To London or Mexico',34],[34,'I know that I said goodbye',38],[38,'But can I still change my mind?',40],
        [40,'I was just scared (it got heavy)',48],[48,'This time I swear (I\'m ready)',91],[91,'I\'d move to Tokyo',100]
        ,[100,'I know that I said goodbye',103],[103,'Can I still change my mind?',138],[138,'I\'d move to Tokyo',141],[141,'To London or Mexico',145],
        [145,'I know that I said goodbye',149],[149,'But can I still change my mind?',153],[153,'I was just scared',159],
        [159,'This time I swear (I\'m ready)',168],[168,'But can I still change my mind?',199],[199,'End...',286]]
  
      dataLyricsSyncTraslate = [[7,'Me mudaría a tokio',14],[14,'Si es ahí a donde quieres ir',18],[18,'No tienes que ir solo',22],[22,'Puedes dejarme saber',26],
        [26,'Me mudaría a tokio',30],[30,'A Londres o México',34],[34,'Yo se que dije adios',38],[38,'¿Pero todavía puedo cambiar de opinión?',40],
        [40,'Solo estaba asustado (se puso pesado)',48],[48,'Esta vez lo juro (estoy listo)',91],[91,'Me mudaría a tokio',100]
        ,[100,'Yo se que dije adios',103],[103,'¿Todavía puedo cambiar de opinión?',138],[138,'Me mudaría a tokio',141],[141,'A Londres o México',145],
        [145,'Yo se que dije adios',149],[149,'¿Pero todavía puedo cambiar de opinión?',153],[153,'Solo estaba asustada',159],
        [159,'Esta vez lo juro (estoy listo)',168],[168,'¿Pero todavía puedo cambiar de opinión?',199],[199,'Fin...',286]]*/
    playOrPaused() {
        this.playControl = !this.playControl;
    }
    btnVolume() {
        this.volumeControl = !this.volumeControl;
    }
    timeSlider() {
        var seekslider, seekto;
        seekslider = document.getElementById('seekslider');
        let audio = document.getElementById('audio-element');
        seekto = audio.duration * (seekslider.value / 100);
        audio.currentTime = seekto;
        seekslider.value = (100 / audio.duration) * audio.currentTime;
    }
    volumeSlider() {
        var volumeslider;
        volumeslider = document.getElementById('volume');
        let audio = document.getElementById('audio-element');
        audio.volume = volumeslider.value / 100;
        this.volumeDefect = volumeslider.value;
    }
    playSyncMusic() {
        setTimeout(() => {
            this.syncLyrics();
        }, 1000);
    }
    syncLyrics() {
        let audio = document.getElementById('audio-element');
        var time = audio.currentTime;
        this.timeTotalMusic = this.timeCurrentPlay(audio.duration);
        this.timeCurrentMusic = this.timeCurrentPlay(audio.currentTime);
        var seekslider;
        seekslider = document.getElementById('seekslider');
        seekslider.value = (100 / audio.duration) * audio.currentTime;
        if (Math.round(time) == this.dataLyricsSync[this.dataLyricsSync.length - 1][2]) {
            this.playControl = false;
            seekslider.value = 100;
        }
        for (let i = 0; i < this.dataLyricsSync.length; i++) {
            if (Math.round(time) == this.dataLyricsSync[i][0]) {
                this.lyricsDisplay = this.dataLyricsSync[i][1] + '';
                this.lyricsTraslateDisplay = this.dataLyricsSyncTraslate[i][1] + '';
            }
            if (Math.round(time) == this.dataLyricsSync[i][2]) {
                this.lyricsDisplay = this.dataLyricsSync[i + 1][1] + '';
                this.lyricsTraslateDisplay = this.dataLyricsSyncTraslate[i + 1][1] + '';
            }
        }
        setTimeout(() => {
            this.syncLyrics();
        }, 1000);
    }
    timeCurrentPlay(segundosP) {
        var dataTime = '';
        let segundos = (Math.round(segundosP % 0x3C)).toString();
        let horas = (Math.floor(segundosP / 0xE10)).toString();
        let minutos = (Math.floor(segundosP / 0x3C) % 0x3C).toString();
        if (parseInt(segundos) < 10) {
            segundos = "0" + segundos;
        }
        if (segundos == "60") {
            segundos = '59';
        }
        dataTime = minutos + ':' + segundos;
        return dataTime;
    }
}
LocalComponent.ɵfac = function LocalComponent_Factory(t) { return new (t || LocalComponent)(); };
LocalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LocalComponent, selectors: [["app-local"]], decls: 37, vars: 7, consts: [[1, "mx-auto", "bck-main"], [1, "header", "data-music"], [1, "row", "let-ch"], [1, "col-7", "justify-text", "adjust-v-h"], [2, "margin-top", "5px", "margin-left", "8px", "text-align", "center"], [1, "col-5"], ["src", "https://i1.sndcdn.com/artworks-000173887329-mm20bc-t500x500.jpg", 2, "width", "90px", "height", "90px", "border-radius", "10px", "margin-top", "5px"], [1, "letter", "container", "mx-auto", "w-75", 2, "text-align", "center"], [1, "row", 2, "text-align", "center"], [1, "col-12", 2, "text-align", "center"], [2, "font-size", "35px", "font-weight", "800", "color", "gold"], [1, "mx-auto", "player", 2, "text-align", "center"], ["id", "audio-element", "controls", "", 2, "visibility", "hidden", 3, "play"], ["src", "./assets/audio/Dreamlag%20-%20Firefly%20(Anki%20Remix).mp3", "type", "audio/flac"], [1, "music-player"], [2, "float", "left"], ["class", "btn-play btn-play-style", "onclick", "document.getElementById('audio-element').play()", 3, "click", 4, "ngIf"], ["class", "btn-play btn-play-style", "onclick", "document.getElementById('audio-element').pause()", 3, "click", 4, "ngIf"], [1, "btn-play", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "32", "height", "32", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-volume-up-fill"], ["d", "M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"], ["d", "M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"], ["d", "M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"], ["disabled", "", 1, "btn-play", "let-ch"], [1, "row"], [1, "col-11", 2, "text-align", "left", "margin-top", "20px", "margin-left", "30px"], ["id", "timeline"], ["id", "seekslider", "type", "range", "min", "0", "max", "100", "value", "0", "step", "1", 1, "input-play", "uk-progress", 2, "width", "100%", 3, "change"], ["style", "display: block; margin-top: -160px;", 4, "ngIf"], ["onclick", "document.getElementById('audio-element').play()", 1, "btn-play", "btn-play-style", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "32", "height", "32", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-caret-right-fill"], ["d", "M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"], ["onclick", "document.getElementById('audio-element').pause()", 1, "btn-play", "btn-play-style", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "32", "height", "32", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-pause-fill"], ["d", "M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"], [2, "display", "block", "margin-top", "-160px"], ["id", "volume", "type", "range", "min", "0", "max", "100", "step", "1", 1, "vranger", "input-play", "uk-progress", 2, "width", "150px", "background-color", "black!important", 3, "value", "change"]], template: function LocalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Firefly - Dreamlag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "audio", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("play", function LocalComponent_Template_audio_play_19_listener() { return ctx.playSyncMusic(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "source", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, LocalComponent_button_23_Template, 3, 0, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, LocalComponent_button_24_Template, 3, 0, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LocalComponent_Template_button_click_25_listener() { return ctx.btnVolume(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LocalComponent_Template_input_change_35_listener() { return ctx.timeSlider(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, LocalComponent_div_36_Template, 2, 1, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lyricsDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lyricsTraslateDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.playControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.playControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.timeCurrentMusic, "/", ctx.timeTotalMusic, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.volumeControl);
    } }, directives: [_structure_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["@charset \"UTF-8\";\n.data-music[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab, #49a09d, #5f2c82, #373B44) !important;\n  background-size: 400% 400%;\n  animation: gradient 15s ease infinite;\n}\n@keyframes gradient {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n.bck-main[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n.header[_ngcontent-%COMP%] {\n  position: fixed;\n  height: 100px;\n  width: 300px;\n  background-color: white;\n  border-radius: 20px;\n  margin-top: 15px;\n  margin-left: 15px;\n}\n#audio-element[_ngcontent-%COMP%] {\n  width: 100%;\n  outline: none !important;\n}\n.letter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 90vh;\n  font-size: 80px;\n  color: white;\n  font-family: atten-round-new, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  text-align: center;\n  word-wrap: break-word;\n}\n.let-ch[_ngcontent-%COMP%] {\n  font-family: atten-round-new, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n}\n.justify-text[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n  max-width: 100%;\n}\n.adjust-v-h[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.player[_ngcontent-%COMP%] {\n  position: absolute;\n  \n  left: 0px;\n  \n  right: 0px;\n  \n  bottom: 0px;\n  \n  z-index: 0;\n}\n.data-music[_ngcontent-%COMP%] {\n  color: white;\n}\n.music-player[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 100%;\n  background: black;\n}\n.btn-play[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  border: none !important;\n  color: white;\n  margin-left: 5px;\n  margin-top: 25px;\n  height: 50px;\n  width: 50px;\n  border-radius: 5px;\n  outline: none !important;\n}\n.btn-play-style[_ngcontent-%COMP%] {\n  color: white;\n}\n#timeline[_ngcontent-%COMP%] {\n  width: 85%;\n  height: 20px;\n  margin-top: 20px;\n  float: left;\n  border-radius: 15px;\n  position: relative;\n  background: #5f2c82;\n  \n  \n  background: linear-gradient(to right, #49a09d, #5f2c82);\n  \n}\n.uk-progress[_ngcontent-%COMP%] {\n  overflow: hidden;\n  height: 20px !important;\n  -webkit-appearance: none;\n  background-color: transparent !important;\n  border-radius: 15px;\n  outline: none !important;\n}\ninput[type=range][_ngcontent-%COMP%]::-webkit-slider-thumb {\n  width: 20px;\n  -webkit-appearance: none;\n  height: 20px;\n  cursor: ew-resize;\n  border-radius: 50%;\n  background: white;\n}\n.vranger[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  transform: rotate(270deg);\n  -moz-transform: rotate(270deg);\n  \n}\n.volume-input[_ngcontent-%COMP%]::-webkit-slider-thumb {\n  width: 20px;\n  -webkit-appearance: none;\n  height: 20px;\n  cursor: ew-resize;\n  border-radius: 50%;\n  background: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wbGF5ZXIvbG9jYWwvbG9jYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0UsNkdBQUE7RUFDQSwwQkFBQTtFQUNBLHFDQUFBO0FBRUY7QUFDQTtFQUNFO0lBQ0UsMkJBQUE7RUFFRjtFQUFBO0lBQ0UsNkJBQUE7RUFFRjtFQUFBO0lBQ0UsMkJBQUE7RUFFRjtBQUNGO0FBQ0E7RUFFRSxhQUFBO0FBQUY7QUFHQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQUY7QUFHQTtFQUNFLFdBQUE7RUFDQSx3QkFBQTtBQUFGO0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBQUY7QUFHQTtFQUNFLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUFGO0FBR0E7RUFDRSxxQkFBQTtFQUNBLGVBQUE7QUFBRjtBQUdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBRjtBQUdBO0VBQ0Usa0JBQUE7RUFBbUIsaURBQUE7RUFDbkIsU0FBQTtFQUFVLHNDQUFBO0VBQ1YsVUFBQTtFQUFXLHdDQUFBO0VBQ1gsV0FBQTtFQUFZLCtCQUFBO0VBQ1osVUFBQTtBQUlGO0FBREE7RUFDRSxZQUFBO0FBSUY7QUFEQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFJRjtBQURBO0VBQ0Usd0NBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FBSUY7QUFEQTtFQUNFLFlBQUE7QUFJRjtBQURBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFBc0IsOEJBQUE7RUFDNEMsK0JBQUE7RUFDbEUsdURBQUE7RUFBeUQscUVBQUE7QUFPM0Q7QUFIQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQU1GO0FBSEE7RUFDRSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBTUY7QUFIQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUFnQyx5Q0FBQTtBQU9sQztBQUpBO0VBQ0UsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtBQU9GIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wbGF5ZXIvbG9jYWwvbG9jYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uZGF0YS1tdXNpYywgYm9keSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNlZTc3NTIsICNlNzNjN2UsICMyM2E2ZDUsICMyM2Q1YWIsICM0OWEwOWQsICM1ZjJjODIsICMzNzNCNDQpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xuICBhbmltYXRpb246IGdyYWRpZW50IDE1cyBlYXNlIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGdyYWRpZW50IHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcbiAgfVxuICA1MCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcbiAgfVxufVxuLmJjay1tYWluIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbiNhdWRpby1lbGVtZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmxldHRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA5MHZoO1xuICBmb250LXNpemU6IDgwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IGF0dGVuLXJvdW5kLW5ldywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuLmxldC1jaCB7XG4gIGZvbnQtZmFtaWx5OiBhdHRlbi1yb3VuZC1uZXcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmp1c3RpZnktdGV4dCB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uYWRqdXN0LXYtaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucGxheWVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvKkVsIGRpdiBzZXLDoSB1YmljYWRvIGNvbiByZWxhY2nDs24gYSBsYSBwYW50YWxsYSovXG4gIGxlZnQ6IDBweDtcbiAgLypBIGxhIGRlcmVjaGEgZGVqZSB1biBlc3BhY2lvIGRlIDBweCovXG4gIHJpZ2h0OiAwcHg7XG4gIC8qQSBsYSBpenF1aWVyZGEgZGVqZSB1biBlc3BhY2lvIGRlIDBweCovXG4gIGJvdHRvbTogMHB4O1xuICAvKkFiYWpvIGRlamUgdW4gZXNwYWNpbyBkZSAwcHgqL1xuICB6LWluZGV4OiAwO1xufVxuXG4uZGF0YS1tdXNpYyB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm11c2ljLXBsYXllciB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuLmJ0bi1wbGF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tcGxheS1zdHlsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuI3RpbWVsaW5lIHtcbiAgd2lkdGg6IDg1JTtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjNWYyYzgyO1xuICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNDlhMDlkLCAjNWYyYzgyKTtcbiAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNDlhMDlkLCAjNWYyYzgyKTtcbiAgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xufVxuXG4udWstcHJvZ3Jlc3Mge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gIHdpZHRoOiAyMHB4O1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGhlaWdodDogMjBweDtcbiAgY3Vyc29yOiBldy1yZXNpemU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi52cmFuZ2VyIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICAvKmRvIHNhbWUgZm9yIG90aGVyIGJyb3dzZXJzIGlmIHJlcXVpcmVkKi9cbn1cblxuLnZvbHVtZS1pbnB1dDo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICB3aWR0aDogMjBweDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBoZWlnaHQ6IDIwcHg7XG4gIGN1cnNvcjogZXctcmVzaXplO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-local',
                templateUrl: './local.component.html',
                styleUrls: ['./local.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/player/yt/yt.component.ts":
/*!******************************************************!*\
  !*** ./src/app/components/player/yt/yt.component.ts ***!
  \******************************************************/
/*! exports provided: YtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YtComponent", function() { return YtComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _structure_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../structure/navbar/navbar.component */ "./src/app/components/structure/navbar/navbar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function YtComponent_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function YtComponent_button_25_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.playOrPaused(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function YtComponent_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function YtComponent_button_26_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.playOrPaused2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function YtComponent_button_39_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function YtComponent_button_39_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.openFullScreen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function YtComponent_button_40_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function YtComponent_button_40_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.closeFullScreen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function YtComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function YtComponent_div_41_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.volumeSlider(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r4.volumeDefect);
} }
class YtComponent {
    constructor() {
        this.title = 'MusicLetter';
        this.play = false;
        this.lyricsDisplay = "...";
        this.lyricsTraslateDisplay = "...";
        this.playControl = false;
        this.volumeControl = false;
        this.timeTotalMusic = '0:00';
        this.timeCurrentMusic = '0:00';
        this.volumeDefect = 100;
        this.fullScreen = false;
        this.reframed = false;
        this.nameVideo = "";
        this.dataLyricsSync = [[5, 'Fireworks', 8], [9, 'Shooting stars', 11], [11, 'Blinding lights', 13], [13, 'Wonder where', 14],
            [14, 'Where you are', 17], [17, 'You\'re in the leaves', 18], [18, 'You\'re in the rain', 20], [20, 'You\'re in the air', 23],
            [23, 'You\'re the one that I keep chasing everywhere', 29], [29, 'I will hunt you down', 34], [34, 'I will hunt you down (2)', 41],
            [41, 'Firefly', 122], [121, 'In the night', 122], [122, 'I see your trail', 125], [125, 'And I wish', 126], [127, 'That somehow', 128],
            [128, 'You could stay', 131], [131, 'But you keep flying', 132], [132, 'That\'s the way', 134], [134, 'That you are', 137],
            [137, 'You will always belong among the stars', 143], [143, 'Firefly', 240], [240, 'End ...', 244]];
        this.dataLyricsSyncTraslate = [[5, 'Fuegos artificiales', 8], [9, 'Estrellas fugaces', 11], [11, 'Luces cegadoras', 13],
            [13, 'Me pregunto donde', 14], [14, 'Dónde estás', 17], [17, 'Estas en las hojas', 18], [18, 'Estas en la lluvia', 20],
            [20, 'Estas en el aire', 23], [23, 'Eres la que sigo persiguiendo en todas partes', 29],
            [29, 'Te cazaré', 34], [34, 'Te cazaré (2)', 41], [41, 'Fuegos artificiales', 122], [121, 'En la noche', 122],
            [122, 'Veo tu rastro', 125], [125, 'Y deseo', 126], [127, 'Que de alguna manera', 128], [128, 'Podrías quedarte', 131],
            [131, 'Pero sigues volando', 132], [132, 'Esa es la manera', 134], [134, 'Eso eres', 137], [137, 'Siempre pertenecerás entre las estrellas', 143],
            [143, 'Fuegos artificiales', 240], [240, 'Fin ...', 244]];
        /*
            dataLyricsSync = [[7,'I\'d move to Tokyo',14],[14,'If that\'s where you want to go',18],[18,'Don\'t have to go alone',22],[22,'You can just let me know',26],
              [26,'I\'d move to Tokyo',30],[30,'To London or Mexico',34],[34,'I know that I said goodbye',38],[38,'But can I still change my mind?',40],
              [40,'I was just scared (it got heavy)',48],[48,'This time I swear (I\'m ready)',91],[91,'I\'d move to Tokyo',100]
              ,[100,'I know that I said goodbye',103],[103,'Can I still change my mind?',138],[138,'I\'d move to Tokyo',141],[141,'To London or Mexico',145],
              [145,'I know that I said goodbye',149],[149,'But can I still change my mind?',153],[153,'I was just scared',159],
              [159,'This time I swear (I\'m ready)',168],[168,'But can I still change my mind?',199],[199,'End...',286]]
        
            dataLyricsSyncTraslate = [[7,'Me mudaría a tokio',14],[14,'Si es ahí a donde quieres ir',18],[18,'No tienes que ir solo',22],[22,'Puedes dejarme saber',26],
              [26,'Me mudaría a tokio',30],[30,'A Londres o México',34],[34,'Yo se que dije adios',38],[38,'¿Pero todavía puedo cambiar de opinión?',40],
              [40,'Solo estaba asustado (se puso pesado)',48],[48,'Esta vez lo juro (estoy listo)',91],[91,'Me mudaría a tokio',100]
              ,[100,'Yo se que dije adios',103],[103,'¿Todavía puedo cambiar de opinión?',138],[138,'Me mudaría a tokio',141],[141,'A Londres o México',145],
              [145,'Yo se que dije adios',149],[149,'¿Pero todavía puedo cambiar de opinión?',153],[153,'Solo estaba asustada',159],
              [159,'Esta vez lo juro (estoy listo)',168],[168,'¿Pero todavía puedo cambiar de opinión?',199],[199,'Fin...',286]]
        */
        this.elem = document.documentElement;
    }
    ngOnInit() {
        this.video = '0fnrNna6fuk';
        this.init();
        this.playSyncMusic();
    }
    btnVolume() {
        this.volumeControl = !this.volumeControl;
    }
    timeSlider() {
        var seekslider, seekto;
        seekslider = document.getElementById('seekslider');
        seekto = this.player.getDuration() * (seekslider.value / 100);
        this.player.seekTo(seekto);
        seekslider.value = (100 / this.player.getDuration()) * this.player.getCurrentTime();
        // @ts-ignore
        document.getElementById('audio-element').play();
        document.getElementById("body").classList.remove('bkg-alternative');
        this.eventData.target.playVideo();
        this.playControl = true;
        this.lyricsDisplay = "...";
        this.lyricsTraslateDisplay = "...";
    }
    volumeSlider() {
        var volumeslider;
        volumeslider = document.getElementById('volume');
        this.player.setVolume(volumeslider.value);
        this.volumeDefect = volumeslider.value;
    }
    playSyncMusic() {
        document.getElementById("body").classList.remove('bkg-alternative');
        setTimeout(() => {
            this.syncLyrics();
        }, 1000);
    }
    syncLyrics() {
        var time = this.cleanTime();
        this.timeTotalMusic = this.timeCurrentPlay(this.player.getDuration());
        this.timeCurrentMusic = this.timeCurrentPlay(this.cleanTime());
        this.nameVideo = this.player.getVideoData().title;
        var seekslider;
        seekslider = document.getElementById('seekslider');
        seekslider.value = (100 / this.player.getDuration()) * this.player.getCurrentTime();
        if (Math.round(time) == this.dataLyricsSync[this.dataLyricsSync.length - 1][2]) {
            this.playControl = false;
            seekslider.value = 100;
        }
        for (let i = 0; i < this.dataLyricsSync.length; i++) {
            if (Math.round(time) == this.dataLyricsSync[i][0]) {
                this.lyricsDisplay = this.dataLyricsSync[i][1] + '';
                this.lyricsTraslateDisplay = this.dataLyricsSyncTraslate[i][1] + '';
            }
            if (Math.round(time) == this.dataLyricsSync[i][2]) {
                this.lyricsDisplay = this.dataLyricsSync[i + 1][1] + '';
                this.lyricsTraslateDisplay = this.dataLyricsSyncTraslate[i + 1][1] + '';
            }
        }
        setTimeout(() => {
            this.syncLyrics();
        }, 1000);
    }
    timeCurrentPlay(segundosP) {
        var dataTime = '';
        let segundos = (Math.round(segundosP % 0x3C)).toString();
        let horas = (Math.floor(segundosP / 0xE10)).toString();
        let minutos = (Math.floor(segundosP / 0x3C) % 0x3C).toString();
        if (parseInt(segundos) < 10) {
            segundos = "0" + segundos;
        }
        if (segundos == "60") {
            segundos = '59';
        }
        dataTime = minutos + ':' + segundos;
        return dataTime;
    }
    init() {
        var tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        window['onYouTubeIframeAPIReady'] = () => this.startVideo();
    }
    startVideo() {
        this.reframed = false;
        this.player = new window['YT'].Player('player', {
            videoId: this.video,
            playerVars: {
                autoplay: 0,
                modestbranding: 0,
                controls: 0,
                disablekb: 0,
                rel: 0,
                showinfo: 0,
                fs: 0,
                playsinline: 0
            },
            events: {
                'onStateChange': this.onPlayerStateChange.bind(this),
                'onError': this.onPlayerError.bind(this),
                'onReady': this.onPlayerReady.bind(this),
            }
        });
    }
    onPlayerReady(event) {
        this.eventData = event;
    }
    onPlayerStateChange(event) {
        //console.log(event)
        switch (event.data) {
            case window['YT'].PlayerState.PLAYING:
                if (this.cleanTime() == 0) {
                    //console.log('started ' + this.cleanTime());
                    this.playSyncMusic();
                }
                else {
                    //console.log('playing ' + this.cleanTime())
                }
                ;
                break;
            case window['YT'].PlayerState.PAUSED:
                if (this.player.getDuration() - this.player.getCurrentTime() != 0) {
                    // console.log('paused' + ' @ ' + this.cleanTime());
                }
                ;
                break;
            case window['YT'].PlayerState.ENDED:
                document.getElementById("body").classList.add('bkg-alternative');
                this.playControl = false;
                //console.log('ended ');
                break;
        }
    }
    cleanTime() {
        return Math.round(this.player.getCurrentTime());
    }
    onPlayerError(event) {
        switch (event.data) {
            case 2:
                //console.log('' + this.video)
                break;
            case 100:
                break;
            case 101 || false:
                break;
        }
    }
    playOrPaused() {
        this.playControl = !this.playControl;
        this.eventData.target.playVideo();
    }
    playOrPaused2() {
        this.playControl = !this.playControl;
        this.eventData.target.pauseVideo();
    }
    openFullScreen() {
        var elem = document.documentElement;
        this.fullScreen = true;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else { // @ts-ignore
            if (elem.webkitRequestFullscreen) { /* Safari */
                // @ts-ignore
                elem.webkitRequestFullscreen();
            }
            else { // @ts-ignore
                if (elem.msRequestFullscreen) { /* IE11 */
                    // @ts-ignore
                    elem.msRequestFullscreen();
                }
            }
        }
    }
    closeFullScreen() {
        var elem = document.documentElement;
        this.fullScreen = false;
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else { // @ts-ignore
            if (document.webkitExitFullscreen) { /* Safari */
                // @ts-ignore
                document.webkitExitFullscreen();
            }
            else { // @ts-ignore
                if (document.msExitFullscreen) { /* IE11 */
                    // @ts-ignore
                    document.msExitFullscreen();
                }
            }
        }
    }
}
YtComponent.ɵfac = function YtComponent_Factory(t) { return new (t || YtComponent)(); };
YtComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: YtComponent, selectors: [["app-yt"]], decls: 42, vars: 12, consts: [["id", "body"], [1, "mx-auto", "bck-main"], [1, "header", "data-music", "bkg", 2, "text-decoration", "none!important", "margin-top", "75px", 3, "href"], [1, "row", "let-ch"], [1, "col-7", "justify-text", "adjust-v-h"], [2, "margin-top", "5px", "margin-left", "8px", "text-align", "center", "font-size", "20px!important"], [1, "col-5"], [2, "width", "90px", "height", "90px", "border-radius", "10px", "margin-top", "5px", 3, "src"], [1, "video-foreground", 2, "position", "fixed", "z-index", "-99", "width", "100%", "height", "100%"], ["id", "player", 2, "width", "100%!important", "height", "100%!important"], [1, "letter", "container", "mx-auto", "w-75", 2, "text-align", "center"], [1, "row", 2, "text-align", "center"], [1, "col-12", "letter-mv", 2, "text-align", "center"], [1, "col-12", 2, "text-align", "center"], [2, "font-size", "35px", "font-weight", "800", "color", "gold"], [1, "mx-auto", "player", 2, "text-align", "center"], ["id", "audio-element", "controls", "", 2, "visibility", "hidden", 3, "play"], ["src", "", "type", "audio/flac"], [1, "music-player"], [2, "float", "left"], ["style", "background: transparent!important;", "class", "btn-play btn-play-style", "onclick", "document.getElementById('audio-element').play()", 3, "click", 4, "ngIf"], ["style", "background: transparent!important;", "class", "btn-play btn-play-style", "onclick", "document.getElementById('audio-element').pause()", 3, "click", 4, "ngIf"], [1, "btn-play", 2, "background", "transparent!important", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "32", "height", "32", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-volume-up-fill"], ["d", "M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"], ["d", "M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"], ["d", "M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"], ["disabled", "", 1, "btn-play", "let-ch", 2, "background", "transparent!important"], [1, "row"], [1, "col-10", 2, "text-align", "left", "margin-top", "20px", "margin-left", "30px"], ["id", "timeline"], ["id", "seekslider", "type", "range", "min", "0", "max", "100", "value", "0", "step", "1", 1, "input-play", "uk-progress", 2, "width", "100%", 3, "change"], [1, "ocultar-div"], ["class", "btn-play", "style", "margin-top: 4px; text-align: right;background: transparent!important;", 3, "click", 4, "ngIf"], ["style", "display: block; margin-top: -160px; margin-left: 15px;background: transparent!important;", 4, "ngIf"], ["onclick", "document.getElementById('audio-element').play()", 1, "btn-play", "btn-play-style", 2, "background", "transparent!important", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "32", "height", "32", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-caret-right-fill"], ["d", "M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"], ["onclick", "document.getElementById('audio-element').pause()", 1, "btn-play", "btn-play-style", 2, "background", "transparent!important", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "32", "height", "32", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-pause-fill"], ["d", "M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"], [1, "btn-play", 2, "margin-top", "4px", "text-align", "right", "background", "transparent!important", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-fullscreen"], ["d", "M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrows-fullscreen"], ["fill-rule", "evenodd", "d", "M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"], [2, "display", "block", "margin-top", "-160px", "margin-left", "15px", "background", "transparent!important"], ["id", "volume", "type", "range", "min", "0", "max", "100", "step", "1", 1, "vranger", "input-play", "uk-progress", 2, "width", "150px", "background-color", "indianred!important", 3, "value", "change"]], template: function YtComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "audio", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("play", function YtComponent_Template_audio_play_21_listener() { return ctx.playSyncMusic(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "source", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, YtComponent_button_25_Template, 3, 0, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, YtComponent_button_26_Template, 3, 0, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function YtComponent_Template_button_click_27_listener() { return ctx.btnVolume(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function YtComponent_Template_input_change_37_listener() { return ctx.timeSlider(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, YtComponent_button_39_Template, 3, 0, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, YtComponent_button_40_Template, 3, 0, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, YtComponent_div_41_Template, 2, 1, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.youtube.com/watch?v=", ctx.video, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.nameVideo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://img.youtube.com/vi/", ctx.video, "/maxresdefault.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lyricsDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lyricsTraslateDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.playControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.playControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.timeCurrentMusic, "/", ctx.timeTotalMusic, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.fullScreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fullScreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.volumeControl);
    } }, directives: [_structure_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["@charset \"UTF-8\";\n@media screen and (max-width: 600px) {\n  .letter-mv[_ngcontent-%COMP%] {\n    font-size: 40px !important;\n  }\n\n  .ocultar-div[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.data-music[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  background: transparent !important;\n}\n.bkg-alternative[_ngcontent-%COMP%] {\n  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5) !important;\n  background-size: 400% 400%;\n  animation: gradient 15s ease infinite !important;\n}\n@keyframes gradient {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n.video-background[_ngcontent-%COMP%] {\n  background: #000;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -99;\n}\n.video-foreground[_ngcontent-%COMP%], .video-background[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n@keyframes gradient {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n.bck-main[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n.header[_ngcontent-%COMP%] {\n  position: fixed;\n  height: 100px;\n  width: 300px;\n  background-color: white;\n  border-radius: 20px;\n  margin-top: 15px;\n  margin-left: 15px;\n}\n#audio-element[_ngcontent-%COMP%] {\n  width: 100%;\n  outline: none !important;\n}\n.bkg[_ngcontent-%COMP%] {\n  background: black !important;\n  background-size: 400% 400%;\n  animation: gradient 15s ease infinite;\n}\n.letter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 90vh;\n  font-size: 80px;\n  color: white;\n  font-family: atten-round-new, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  text-align: center;\n  word-wrap: break-word;\n}\n.let-ch[_ngcontent-%COMP%] {\n  font-family: atten-round-new, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n}\n.justify-text[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n  max-width: 100%;\n}\n.adjust-v-h[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.player[_ngcontent-%COMP%] {\n  position: absolute;\n  \n  left: 0px;\n  \n  right: 0px;\n  \n  bottom: 0px;\n  \n  z-index: 0;\n}\n.data-music[_ngcontent-%COMP%] {\n  color: white;\n}\n.music-player[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n.btn-play[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  border: none !important;\n  color: white;\n  margin-left: 5px;\n  margin-top: 25px;\n  height: 50px;\n  width: 50px;\n  border-radius: 5px;\n  outline: none !important;\n}\n.btn-play-style[_ngcontent-%COMP%] {\n  color: white;\n}\n#timeline[_ngcontent-%COMP%] {\n  width: 85%;\n  height: 20px;\n  margin-top: 20px;\n  float: left;\n  border-radius: 15px;\n  position: relative;\n  background: #5f2c82;\n  \n  \n  background: linear-gradient(to right, #49a09d, #5f2c82);\n  \n}\n.uk-progress[_ngcontent-%COMP%] {\n  overflow: hidden;\n  height: 20px !important;\n  -webkit-appearance: none;\n  background-color: transparent !important;\n  border-radius: 15px;\n  outline: none !important;\n}\ninput[type=range][_ngcontent-%COMP%]::-webkit-slider-thumb {\n  width: 20px;\n  -webkit-appearance: none;\n  height: 20px;\n  cursor: ew-resize;\n  border-radius: 50%;\n  background: white;\n}\n.vranger[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  transform: rotate(270deg);\n  -moz-transform: rotate(270deg);\n  \n}\n.volume-input[_ngcontent-%COMP%]::-webkit-slider-thumb {\n  width: 20px;\n  -webkit-appearance: none;\n  height: 20px;\n  cursor: ew-resize;\n  border-radius: 50%;\n  background: white !important;\n}\n\n[_ngcontent-%COMP%]:-webkit-full-screen {\n  background-color: yellow;\n}\n\n[_ngcontent-%COMP%]:-ms-fullscreen {\n  background-color: yellow;\n}\n\n[_ngcontent-%COMP%]:-webkit-full-screen {\n  background-color: yellow;\n}\n[_ngcontent-%COMP%]:fullscreen {\n  background-color: yellow;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wbGF5ZXIveXQveXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0U7SUFDRSwwQkFBQTtFQUVGOztFQUFBO0lBQ0UsYUFBQTtFQUdGO0FBQ0Y7QUFBQTtFQUNFLGtDQUFBO0FBRUY7QUFDQTtFQUNFLHlFQUFBO0VBQ0EsMEJBQUE7RUFDQSxnREFBQTtBQUVGO0FBQ0E7RUFDRTtJQUNFLDJCQUFBO0VBRUY7RUFBQTtJQUNFLDZCQUFBO0VBRUY7RUFBQTtJQUNFLDJCQUFBO0VBRUY7QUFDRjtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUFRLFFBQUE7RUFBVSxTQUFBO0VBQVcsT0FBQTtFQUM3QixZQUFBO0FBSUY7QUFGQTs7RUFFRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUtGO0FBRkE7RUFDRTtJQUNFLDJCQUFBO0VBS0Y7RUFIQTtJQUNFLDZCQUFBO0VBS0Y7RUFIQTtJQUNFLDJCQUFBO0VBS0Y7QUFDRjtBQUZBO0VBQ0UsYUFBQTtBQUlGO0FBREE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUlGO0FBREE7RUFDRSxXQUFBO0VBQ0Esd0JBQUE7QUFJRjtBQURBO0VBQ0UsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLHFDQUFBO0FBSUY7QUFEQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFJRjtBQURBO0VBQ0Usd0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBSUY7QUFEQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQUlGO0FBREE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUlGO0FBREE7RUFDRSxrQkFBQTtFQUFtQixpREFBQTtFQUNuQixTQUFBO0VBQVUsc0NBQUE7RUFDVixVQUFBO0VBQVcsd0NBQUE7RUFDWCxXQUFBO0VBQVksK0JBQUE7RUFDWixVQUFBO0FBUUY7QUFMQTtFQUNFLFlBQUE7QUFRRjtBQUxBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQVFGO0FBTEE7RUFDRSx3Q0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUFRRjtBQUxBO0VBQ0UsWUFBQTtBQVFGO0FBTEE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUFzQiw4QkFBQTtFQUM0QywrQkFBQTtFQUNsRSx1REFBQTtFQUF5RCxxRUFBQTtBQVczRDtBQVBBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBVUY7QUFQQTtFQUNFLFdBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFVRjtBQVBBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQWdDLHlDQUFBO0FBV2xDO0FBUkE7RUFDRSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0FBV0Y7QUFSQSxrQkFBQTtBQUNBO0VBQ0Usd0JBQUE7QUFXRjtBQVJBLFNBQUE7QUFDQTtFQUNFLHdCQUFBO0FBV0Y7QUFSQSxvQkFBQTtBQUNBO0VBQ0Usd0JBQUE7QUFXRjtBQVpBO0VBQ0Usd0JBQUE7QUFXRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGxheWVyL3l0L3l0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmxldHRlci1tdiB7XG4gICAgZm9udC1zaXplOiA0MHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAub2N1bHRhci1kaXYge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5kYXRhLW11c2ljLCBib2R5IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLmJrZy1hbHRlcm5hdGl2ZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNlZTc3NTIsICNlNzNjN2UsICMyM2E2ZDUpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xuICBhbmltYXRpb246IGdyYWRpZW50IDE1cyBlYXNlIGluZmluaXRlICFpbXBvcnRhbnQ7XG59XG5cbkBrZXlmcmFtZXMgZ3JhZGllbnQge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuICB9XG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuICB9XG59XG4udmlkZW8tYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAtOTk7XG59XG5cbi52aWRlby1mb3JlZ3JvdW5kLFxuLnZpZGVvLWJhY2tncm91bmQgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5Aa2V5ZnJhbWVzIGdyYWRpZW50IHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcbiAgfVxuICA1MCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcbiAgfVxufVxuLmJjay1tYWluIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbiNhdWRpby1lbGVtZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmJrZyB7XG4gIGJhY2tncm91bmQ6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xuICBhbmltYXRpb246IGdyYWRpZW50IDE1cyBlYXNlIGluZmluaXRlO1xufVxuXG4ubGV0dGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDkwdmg7XG4gIGZvbnQtc2l6ZTogODBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogYXR0ZW4tcm91bmQtbmV3LCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG4ubGV0LWNoIHtcbiAgZm9udC1mYW1pbHk6IGF0dGVuLXJvdW5kLW5ldywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uanVzdGlmeS10ZXh0IHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5hZGp1c3Qtdi1oIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wbGF5ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8qRWwgZGl2IHNlcsOhIHViaWNhZG8gY29uIHJlbGFjacOzbiBhIGxhIHBhbnRhbGxhKi9cbiAgbGVmdDogMHB4O1xuICAvKkEgbGEgZGVyZWNoYSBkZWplIHVuIGVzcGFjaW8gZGUgMHB4Ki9cbiAgcmlnaHQ6IDBweDtcbiAgLypBIGxhIGl6cXVpZXJkYSBkZWplIHVuIGVzcGFjaW8gZGUgMHB4Ki9cbiAgYm90dG9tOiAwcHg7XG4gIC8qQWJham8gZGVqZSB1biBlc3BhY2lvIGRlIDBweCovXG4gIHotaW5kZXg6IDA7XG59XG5cbi5kYXRhLW11c2ljIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubXVzaWMtcGxheWVyIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmJ0bi1wbGF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tcGxheS1zdHlsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuI3RpbWVsaW5lIHtcbiAgd2lkdGg6IDg1JTtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjNWYyYzgyO1xuICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNDlhMDlkLCAjNWYyYzgyKTtcbiAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNDlhMDlkLCAjNWYyYzgyKTtcbiAgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xufVxuXG4udWstcHJvZ3Jlc3Mge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gIHdpZHRoOiAyMHB4O1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGhlaWdodDogMjBweDtcbiAgY3Vyc29yOiBldy1yZXNpemU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi52cmFuZ2VyIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICAvKmRvIHNhbWUgZm9yIG90aGVyIGJyb3dzZXJzIGlmIHJlcXVpcmVkKi9cbn1cblxuLnZvbHVtZS1pbnB1dDo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICB3aWR0aDogMjBweDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBoZWlnaHQ6IDIwcHg7XG4gIGN1cnNvcjogZXctcmVzaXplO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi8qIFNhZmFyaSBzeW50YXggKi9cbjotd2Via2l0LWZ1bGwtc2NyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xufVxuXG4vKiBJRTExICovXG46LW1zLWZ1bGxzY3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59XG5cbi8qIFN0YW5kYXJkIHN5bnRheCAqL1xuOmZ1bGxzY3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YtComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-yt',
                templateUrl: './yt.component.html',
                styleUrls: ['./yt.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/structure/navbar/navbar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/structure/navbar/navbar.component.ts ***!
  \*****************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 27, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "desing-main-navbar", "let-ch", 2, "z-index", "100", "position", "fixed", "width", "100%"], [1, "container-fluid"], ["href", "/home", 1, "navbar-brand", "color-wh", "let-25"], [1, "let-bold"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "color-wh"], [1, "navbar-toggler-icon", 2, "color", "white!important", "outline", "none!important"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["aria-current", "page", "href", "/my-funsync", 1, "nav-link", "active", "color-wh"], ["href", "/lyrics/sync", 1, "nav-link", "color-wh"], ["href", "/watchfun", "tabindex", "-1", "aria-disabled", "true", 1, "nav-link", "color-wh"], [1, "d-flex"], ["type", "search", "placeholder", "Buscar en WatchFun:)", "aria-label", "Search", 1, "form-control", "me-2", "lg-w75", "bd-r15", "stl-search-i"], ["type", "submit", 1, "btn", "btn-outline-success", "color-wh", "btn-search"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Fun");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Lyrics:)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Mi perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Sync");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Fun:)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Watch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Fun:)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Buscar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".desing-main-navbar[_ngcontent-%COMP%] {\n  background: linear-gradient(-45deg, #2045ec, #323232, #000) !important;\n  border-bottom: 2px solid #23a6d5;\n}\n\n.color-wh[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\n.let-ch[_ngcontent-%COMP%] {\n  font-family: atten-round-new, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n}\n\n.let-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.let-25[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n\n.lg-w75[_ngcontent-%COMP%] {\n  width: 750px;\n}\n\n.bd-r15[_ngcontent-%COMP%] {\n  border-radius: 15px;\n}\n\n.stl-search-i[_ngcontent-%COMP%] {\n  border: none !important;\n  outline: none !important;\n}\n\n.btn-search[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  border-color: #e73c7e;\n  color: #e73c7e;\n  background-color: #e73c7e;\n  outline: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdHJ1Y3R1cmUvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNFQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSx3QkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N0cnVjdHVyZS9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2luZy1tYWluLW5hdmJhciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzIwNDVlYywgIzMyMzIzMiwgIzAwMCkhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMjNhNmQ1O1xyXG59XHJcblxyXG4uY29sb3Itd2gge1xyXG4gIGNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sZXQtY2gge1xyXG4gIGZvbnQtZmFtaWx5OiBhdHRlbi1yb3VuZC1uZXcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbi5sZXQtYm9sZCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmxldC0yNSB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG4ubGctdzc1IHtcclxuICB3aWR0aDogNzUwcHg7XHJcbn1cclxuXHJcbi5iZC1yMTUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi5zdGwtc2VhcmNoLWkge1xyXG4gIGJvcmRlcjogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgb3V0bGluZTogbm9uZSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tc2VhcmNoIHtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJvcmRlci1jb2xvcjogI2U3M2M3ZTtcclxuICBjb2xvcjogI2U3M2M3ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTczYzdlO1xyXG4gIG91dGxpbmU6IG5vbmUhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\danie\Documents\Software\Angular\FunLyrics\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map