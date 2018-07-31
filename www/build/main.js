webpackJsonp([0],{

/***/ 185:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 185;

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		227
	],
	"../pages/registro/registro.module": [
		235
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 226;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(429);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(229);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthProvider = /** @class */ (function () {
    function AuthProvider(afAuth) {
        this.afAuth = afAuth;
    }
    //create user 
    AuthProvider.prototype.resgister = function (data) {
        return this.afAuth.auth.createUserWithEmailAndPassword(data.email, data.senha);
    };
    //login 
    AuthProvider.prototype.login = function (data) {
        return this.afAuth.auth.signInWithEmailAndPassword(data.email, data.senha);
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(233);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FirebaseProvider = /** @class */ (function () {
    function FirebaseProvider(afs) {
        this.afs = afs;
    }
    //create user on Firebase
    FirebaseProvider.prototype.postUser = function (user) {
        console.log('usario recebido ' + user);
        //setando o usuario na coleção users com o uid
        this.afs.collection("users").doc(user.uid).set(user);
    };
    FirebaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], FirebaseProvider);
    return FirebaseProvider;
}());

//# sourceMappingURL=firebase.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageModule", function() { return RegistroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registro__ = __webpack_require__(449);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegistroPageModule = /** @class */ (function () {
    function RegistroPageModule() {
    }
    RegistroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__registro__["a" /* RegistroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__registro__["a" /* RegistroPage */]),
            ],
        })
    ], RegistroPageModule);
    return RegistroPageModule;
}());

//# sourceMappingURL=registro.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, platform, geolocation, 
        //public modalPage : MapModalPage,
        modalCrtl, viewController) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.geolocation = geolocation;
        this.modalCrtl = modalCrtl;
        this.viewController = viewController;
        this.evento = { titulo: '', periodo: '', tema: '', local: '' };
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        //espera a pagina carregar por completo
        this.platform.ready().then(function () {
            //pega minha posição atual
            _this.geolocation.getCurrentPosition()
                .then(function (result) {
                _this.initMap(result.coords.latitude, result.coords.longitude);
            })
                .catch(function (err) {
                console.log(err);
            });
        });
    };
    HomePage.prototype.initMap = function (lat, lng) {
        var latLng = new google.maps.LatLng(lat, lng);
        var opcoes = {
            center: latLng,
            zoom: 18,
            //mapTypeId : google.maps.mapTypeId.ROADMAP
            disableDefaultUI: true
            //mapTypeId:google.maps.MapTypeId.SATELLITE,
        };
        var elemento = document.getElementById('map');
        this.map = new google.maps.Map(elemento, opcoes);
        var marcador = new google.maps.Marker({
            position: latLng,
        });
        marcador.setMap(this.map);
        this.getEndereco(latLng, function (res) {
            console.log(res);
        });
    };
    HomePage.prototype.getEndereco = function (latLng, successCallBack) {
        //pega o endereço da minha posição atual
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ location: latLng }, function (results, status) {
            //verifica o codigo de status,
            if (status === google.maps.GeocoderStatus.OK) {
                console.log('entrou no if');
                if (results[0]) {
                    successCallBack(results[0].formatted_address);
                }
            }
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/jonas/Documentos/Curso Ionic Fire Base/Projeto Banco 2/Projeto1-BD2/src/pages/home/home.html"*/'<ion-content>\n    <div id="map"></div>\n</ion-content>'/*ion-inline-end:"/home/jonas/Documentos/Curso Ionic Fire Base/Projeto Banco 2/Projeto1-BD2/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(403);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login_module__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_registro_registro_module__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__configs_firebase__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_firestore__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__provides_auth__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__provides_firebase__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_geolocation__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__(475);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//importando o modulo da Pagina login



//importações do firebase e angular fire




//provides 




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_6__pages_registro_registro_module__["RegistroPageModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registro/registro.module#RegistroPageModule', name: 'RegistroPage', segment: 'registro', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_8__configs_firebase__["a" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__provides_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_13__provides_firebase__["a" /* FirebaseProvider */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_geolocation__["a" /* Geolocation */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provides_auth__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provides_firebase__ = __webpack_require__(232);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, afProvider, fireProvader, loadCrtl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afProvider = afProvider;
        this.fireProvader = fireProvader;
        this.loadCrtl = loadCrtl;
        this.login = true;
        this.registro = false;
        this.loginForm = { email: '', senha: '' };
        this.registerForm = { email: '', nome: '', senha: '', curso: '', instituicao: '' };
    }
    LoginPage.prototype.criaConta = function () {
        this.login = false;
        this.registro = true;
    };
    LoginPage.prototype.acesaConta = function () {
        this.login = true;
        this.registro = false;
    };
    LoginPage.prototype.fazerLogin = function () {
        var load = this.loadCrtl.create();
        load.present();
        this.afProvider.login(this.loginForm)
            .then(function (res) {
            load.dismiss();
            console.log(res);
        })
            .catch(function (err) {
            load.present();
        });
    };
    LoginPage.prototype.fazerCadastro = function () {
        var _this = this;
        var load = this.loadCrtl.create();
        load.present();
        this.afProvider.resgister(this.registerForm)
            .then(function (res) {
            var uid = res.user.uid;
            //cria um novo objeto e grava no fireStorage
            var user = {
                uid: uid,
                nome: _this.registerForm.nome,
                email: _this.registerForm.email,
            };
            _this.fireProvader.postUser(user);
            load.dismiss();
        })
            .catch(function () {
            load.dismiss();
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/jonas/Documentos/Curso Ionic Fire Base/Projeto Banco 2/Projeto1-BD2/src/pages/login/login.html"*/'<ion-content>\n    <!--Background-->\n  <div class="bg-login" *ngIf="login">\n      <div class="overlay">  \n        <!--Container-->\n        <div>    \n  \n          <!--Logo-->\n          <div class="center">\n              <img src="/assets/imgs/logoMaps.png" class="logo pd-top-20">\n          </div>     \n          <!--Textos--> \n          <div class="mg-top-40 ">\n            <!--Titulo--> \n            <h5 class="snow center bold no-margin">Que bom te ver aqui!</h5>\n            <!--SubTitulo--> \n            <p class="center snow ligth no-margin mg-top-5">Entre com sua conta para continuar</p>          \n          </div>\n          <!--forms--> \n          <div class="padding-40">\n\n            <ion-item class="bg-tranparente">\n              <ion-label stacked class="bold snow no-padding mg-top-40">\n                Email\n              </ion-label>\n              <ion-input type="email" class="snow"  [(ngModel)]="loginForm.email"></ion-input>\n            </ion-item>\n            \n            <ion-item class="bg-tranparente">\n              <ion-label stacked class="snow bold no-padding mg-top-10" >\n                Senha\n              </ion-label>\n              <ion-input type="password" class="snow" [(ngModel)]="loginForm.senha"></ion-input>\n            </ion-item>\n            <div class="ctaLogin center bolde mg-top-30" (click)="fazerLogin()"> \n                Login\n            </div>\n    \n            <div class=" snow bold center mg-top-20" (click)="criaConta()">\n                Criar uma nova conta de acesso\n            </div>\n\n         </div>\n  \n        </div>\n        <!--Fim do Container-->\n      </div>\n  </div>\n  <!--Background-->  \n\n  \n  <!--Resgistro -->\n\n  <!--Background-->\n  <div class="bg-registro" *ngIf="registro">\n      <div class="overlay">  \n        <!--Registro container-->\n        <div>    \n  \n          <!--Logo-->\n          <div class="center">\n              <img src="/assets/imgs/logoMaps.png" class="logo pd-top-20">\n          </div>     \n          <!--Textos--> \n          <div class="mg-top-40 ">\n            <!--Titulo--> \n            <h5 class="snow center bold no-margin">Éba! Vamos lá!</h5>\n            <!--SubTitulo--> \n            <p class="center snow ligth no-margin mg-top-5">\n              Crie suas credenciais para acessar o app\n            </p>          \n          </div>\n          <!--forms--> \n          <div class="padding-40">\n              <ion-item class="bg-tranparente">\n                  <ion-label stacked class="bold snow no-padding mg-top-40" >\n                    Qual é o seu nome\n                  </ion-label>\n                  <ion-input type="email" class="snow" [(ngModel)]="registerForm.nome"></ion-input>\n                </ion-item>\n\n            <ion-item class="bg-tranparente">\n              <ion-label stacked class="bold snow no-padding mg-top-30" >\n                Qual é a sua instituição\n              </ion-label>\n              <ion-input type="text" class="snow" [(ngModel)]="registerForm.instituicao"></ion-input>\n            </ion-item>\n\n            <ion-item class="bg-tranparente">\n              <ion-label stacked class="bold snow no-padding mg-top-30" >\n                Qual é o seu curso\n              </ion-label>\n              <ion-input type="text" class="snow" [(ngModel)]="registerForm.curso"></ion-input>\n            </ion-item>\n\n            <ion-item class="bg-tranparente">\n              <ion-label stacked class="snow bold no-padding mg-top-30" >\n                Escolha a sua senha\n              </ion-label>\n              <ion-input type="password" class="snow" [(ngModel)]="registerForm.senha"></ion-input>\n            </ion-item>\n            \n            <div class="ctaRegistrar center bolde mg-top-30" (click)="fazerCadastro()">\n              Cadastrar\n            </div>\n  \n            <div class=" snow bold center mg-top-20" (click)="acesaConta()">\n              Já tenho uma conta\n            </div>\n         </div>\n  \n        </div>\n        <!--Fim do Container-->\n      </div>\n  </div>\n  <!--Background-->  \n  </ion-content>\n '/*ion-inline-end:"/home/jonas/Documentos/Curso Ionic Fire Base/Projeto Banco 2/Projeto1-BD2/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__provides_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__provides_firebase__["a" /* FirebaseProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistroPage = /** @class */ (function () {
    function RegistroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegistroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistroPage');
    };
    RegistroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registro',template:/*ion-inline-start:"/home/jonas/Documentos/Curso Ionic Fire Base/Projeto Banco 2/Projeto1-BD2/src/pages/registro/registro.html"*/'<ion-content>\n    <!--Background-->\n  <div class="bg-login" *ngIf="login">\n      <div class="overlay">  \n        <!--Container-->\n        <div>    \n  \n          <!--Logo-->\n          <div class="center">\n              <img src="/assets/imgs/logo.png" class="logo pd-top-20">\n          </div>     \n          <!--Textos--> \n          <div class="mg-top-40 ">\n            <!--Titulo--> \n            <h5 class="snow center bold no-margin">Que bom te ver aqui!</h5>\n            <!--SubTitulo--> \n            <p class="center snow ligth no-margin mg-top-5">Entre com sua conta para continuar</p>          \n          </div>\n          <!--forms--> \n          <div class="padding-40">\n            <ion-item class="bg-tranparente">\n              <ion-label stacked class="bold snow no-padding mg-top-40">Email</ion-label>\n              <ion-input type="email" class="snow"></ion-input>\n            </ion-item>\n            \n            <ion-item class="bg-tranparente">\n              <ion-label stacked class="snow bold no-padding mg-top-10">Senha</ion-label>\n              <ion-input type="password" class="snow"></ion-input>\n            </ion-item>\n            \n            <div class="ctaLogin center bolde mg-top-30">\n              Entrar\n            </div>\n  \n            <div class="ctaRegistrar snow bold center mg-top-20">\n              Quero criar uma nova conta!\n            </div>\n         </div>\n  \n        </div>\n        <!--Fim do Container-->\n      </div>\n  </div>\n  <!--Background-->  \n  \n  <!--Resgistro -->\n  <!--Background-->\n  <div class="bg-registro" *ngIf="registro">\n      <div class="overlay">  \n        <!--Container-->\n        <div>    \n  \n          <!--Logo-->\n          <div class="center">\n              <img src="/assets/imgs/logo.png" class="logo pd-top-20">\n          </div>     \n          <!--Textos--> \n          <div class="mg-top-40 ">\n            <!--Titulo--> \n            <h5 class="snow center bold no-margin">Que bom te ver aqui!</h5>\n            <!--SubTitulo--> \n            <p class="center snow ligth no-margin mg-top-5">Entre com sua conta para continuar</p>          \n          </div>\n          <!--forms--> \n          <div class="padding-40">\n            <ion-item class="bg-tranparente">\n              <ion-label stacked class="bold snow no-padding mg-top-40">Email</ion-label>\n              <ion-input type="email" class="snow"></ion-input>\n            </ion-item>\n            \n            <ion-item class="bg-tranparente">\n              <ion-label stacked class="snow bold no-padding mg-top-10">Senha</ion-label>\n              <ion-input type="password" class="snow"></ion-input>\n            </ion-item>\n            \n            <div class="ctaLogin center bolde mg-top-30">\n              Entrar\n            </div>\n  \n            <div class="ctaRegistrar snow bold center mg-top-20">\n              Quero criar uma nova conta!\n            </div>\n         </div>\n  \n        </div>\n        <!--Fim do Container-->\n      </div>\n  </div>\n  <!--Background-->  \n  </ion-content>\n '/*ion-inline-end:"/home/jonas/Documentos/Curso Ionic Fire Base/Projeto Banco 2/Projeto1-BD2/src/pages/registro/registro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RegistroPage);
    return RegistroPage;
}());

//# sourceMappingURL=registro.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
//exportando as configurações do firebase
var firebaseConfig = {
    apiKey: "AIzaSyBXSQ8AYqpHKcMSulZvfEl-2bJRzz7twLg",
    authDomain: "delivery-5cec6.firebaseapp.com",
    databaseURL: "https://delivery-5cec6.firebaseio.com",
    projectId: "delivery-5cec6",
    storageBucket: "",
    messagingSenderId: "437701539426"
};
//# sourceMappingURL=firebase.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/jonas/Documentos/Curso Ionic Fire Base/Projeto Banco 2/Projeto1-BD2/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/jonas/Documentos/Curso Ionic Fire Base/Projeto Banco 2/Projeto1-BD2/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[280]);
//# sourceMappingURL=main.js.map