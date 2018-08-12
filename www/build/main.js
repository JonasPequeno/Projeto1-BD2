webpackJsonp([3],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provides_auth__ = __webpack_require__(52);
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
    function FirebaseProvider(afs, authProvider) {
        this.afs = afs;
        this.authProvider = authProvider;
    }
    //create user on Firebase
    FirebaseProvider.prototype.postUser = function (user) {
        return __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('users/' + user.uid).set({
            nome: user.nome,
            email: user.email,
            curso: user.curso,
            instituicao: user.instituicao,
        });
    };
    FirebaseProvider.prototype.getUser = function (callback) {
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('users/' + this.authProvider.getEmailUser()).on('value', function (user) {
            var usuario = {
                nome: user.val().nome,
                email: user.val().email,
                curso: user.val().curso,
                instituicao: user.val().instituicao
            };
            callback(usuario);
        });
    };
    FirebaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_3__provides_auth__["a" /* AuthProvider */]])
    ], FirebaseProvider);
    return FirebaseProvider;
}());

//# sourceMappingURL=firebase.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__evento_modal_evento_modal__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__provides_eventos__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__provides_auth__ = __webpack_require__(52);
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
    function HomePage(navCtrl, platform, geolocation, navParms, eventProvider, modalCrtl, viewController, afProvider, toastCrtl) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.geolocation = geolocation;
        this.navParms = navParms;
        this.eventProvider = eventProvider;
        this.modalCrtl = modalCrtl;
        this.viewController = viewController;
        this.afProvider = afProvider;
        this.toastCrtl = toastCrtl;
        this.evento = { id: '', titulo: '', periodo: '', tema: '', local: '', usario: '' };
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        //espera a pagina carregar por completo
        this.platform.ready().then(function () {
            //pega minha posição atual
            _this.geolocation.getCurrentPosition()
                .then(function (result) {
                _this.initMap(result.coords.latitude, result.coords.longitude);
                _this.marcaPontos();
            })
                .catch(function (err) {
                console.log(err);
            });
        });
        //this.eventProvider.getEventos();
    };
    HomePage.prototype.initMap = function (lat, lng) {
        var _this = this;
        var latLng = new google.maps.LatLng(lat, lng);
        var opcoes = {
            center: latLng,
            zoom: 14,
            //mapTypeId : google.maps.mapTypeId.ROADMAP
            disableDefaultUI: true
            //mapTypeId:google.maps.MapTypeId.SATELLITE,
        };
        var elemento = document.getElementById('map');
        this.map = new google.maps.Map(elemento, opcoes);
        this.map.setMapTypeId('roadmap');
        var marcador = new google.maps.Marker({
            position: latLng,
        });
        //evento de click para criar os eventos
        this.map.addListener('click', (function (e) {
            var modal = _this.modalCrtl.create(__WEBPACK_IMPORTED_MODULE_3__evento_modal_evento_modal__["a" /* EventoModalPage */]);
            modal.onDidDismiss(function (data) {
                if (data) {
                    _this.criaMarcador(e);
                    _this.getEndereco(e.latLng, function (local) {
                        // let locali : string = local.geometry.location;
                        var rua = local.results;
                        data.local = e.latLng + "";
                        var emailUser = _this.afProvider.getEmailUser();
                        alert('ID' + emailUser);
                        data.usuario = emailUser;
                        _this.eventProvider.postEvento(data)
                            .then(function (res) {
                            var toast = _this.toastCrtl.create({
                                message: 'Evento criado com sucesso !',
                                duration: 2000,
                                position: 'middle'
                            });
                            toast.present();
                        });
                    });
                }
            });
            modal.present();
        }));
        marcador.setMap(this.map);
        //verificar se ta pegando o endereco correto
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
                    successCallBack(results[0]);
                }
            }
        });
    };
    HomePage.prototype.criaMarcador = function (event) {
        var _this = this;
        this.getEndereco(event.latLng, function (endereco) {
            _this.endereco = endereco;
            console.log('Endereco do evvento ', _this.endereco);
            var marcador = new google.maps.Marker({
                position: event.latLng,
                map: _this.map,
                title: 'Novo Marcador'
            });
        });
    };
    HomePage.prototype.marcaPontos = function () {
        var _this = this;
        this.eventProvider.getEventosAll(function (eventos) {
            console.log('entoru no for' + eventos);
            var _loop_1 = function (i) {
                console.log('entoru no for' + eventos);
                var coo = eventos[i].local.replace('(', '').replace(')', '').split(',');
                console.log(eventos);
                var lat = parseFloat(coo[0]);
                var lng = parseFloat(coo[1]);
                var latlng = new google.maps.LatLng(lat, lng);
                _this.getEndereco(latlng, function (result) {
                    _this.endereco = result.formatted_address.split(',');
                    var texto = "<p> Titulo : " + eventos[i].titulo + "</p> <br> <p> Tema : " + eventos[i].tema + "</p>" +
                        "<br><p> Local :" + _this.endereco[0] + "</p>";
                    var info = new google.maps.InfoWindow({
                        content: texto,
                    });
                    var marcador = new google.maps.Marker({
                        position: latlng,
                        map: _this.map,
                        title: eventos[i].tema
                    });
                    marcador.addListener('click', function () {
                        info.open(this.map, marcador);
                    });
                });
            };
            for (var i = 0; i < eventos.length; i++) {
                _loop_1(i);
            }
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/jonas/Documentos/Curso Ionic Fire Base/app/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button icon-only menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Home</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    \n    <div id="map"></div>\n</ion-content>'/*ion-inline-end:"/home/jonas/Documentos/Curso Ionic Fire Base/app/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__provides_eventos__["a" /* EventosProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5__provides_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provides_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventosProvider = /** @class */ (function () {
    function EventosProvider(afStore, authProvider, datePipe) {
        this.afStore = afStore;
        this.authProvider = authProvider;
        this.datePipe = datePipe;
    }
    //salva o evento no banco
    EventosProvider.prototype.postEvento = function (evento) {
        //cria um chave para o evento
        var key = this.datePipe.transform(new Date(), "ddMMyyyyHHmmss");
        evento.id = key;
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('eventos/' + key).set({
            local: evento.local,
            titulo: evento.titulo,
            dataFim: evento.dataFim,
            dataInicio: evento.dataInicio,
            horaInicio: evento.horaInicio,
            horaFim: evento.horaFim,
            tema: evento.tema,
            usuario: evento.usuario,
            id: evento.id
        });
    };
    EventosProvider.prototype.getEventos = function (callback) {
        var _this = this;
        var listEventos = [];
        var eventos = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('eventos');
        eventos.on('value', function (snapshot) {
            snapshot.forEach(function (element) {
                //pega o uid do usuario logado
                var emailUser = _this.authProvider.getEmailUser();
                if (element.val().usuario == _this.authProvider.getEmailUser()) {
                    var evento = element.val();
                    var latitude = evento.local.replace('(', "").replace(')', '').split(',');
                    //cria uma foto do ponto no mapa
                    evento.map = "https://maps.googleapis.com/maps/api/staticmap?center=" +
                        latitude[0] + "," + latitude[1] +
                        "&zoom=15&size=400x400" +
                        "&markers=color:red%7Clabel:S%7C" +
                        latitude[0] + "," + latitude[1] +
                        "&maptype=roadmap&key=AIzaSyBx-WZzpi4YDO9vrIBjZDqWv7_nU3u5-Bs";
                    listEventos.push(evento);
                }
            });
            callback(listEventos);
        });
    };
    EventosProvider.prototype.getEventosAll = function (callback) {
        var listEventos = [];
        var eventos = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('eventos');
        eventos.on('value', function (snapshot) {
            snapshot.forEach(function (element) {
                //pega o uid do usuario logado
                var evento = element.val();
                listEventos.push(evento);
            });
            callback(listEventos);
        });
    };
    //remove o evento
    EventosProvider.prototype.removeEventos = function (evento) {
        alert(evento.id);
        __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('eventos/' + evento.id).remove();
    };
    EventosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__provides_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__provides_auth__["a" /* AuthProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */]) === "function" && _c || Object])
    ], EventosProvider);
    return EventosProvider;
    var _a, _b, _c;
}());

//# sourceMappingURL=eventos.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventoModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventoModalPage = /** @class */ (function () {
    function EventoModalPage(navCtrl, navParams, viewCrtl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCrtl = viewCrtl;
        this.evento = { titulo: '', dataInicio: '', dataFim: '', horaInicio: '', horaFim: '', tema: '', local: '', usuario: '' };
    }
    EventoModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventoModalPage');
    };
    EventoModalPage.prototype.cancel = function () {
        this.viewCrtl.dismiss();
    };
    EventoModalPage.prototype.salvar = function () {
        this.viewCrtl.dismiss(this.evento);
    };
    EventoModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-evento-modal',template:/*ion-inline-start:"/home/jonas/Documentos/Curso Ionic Fire Base/app/src/pages/evento-modal/evento-modal.html"*/'<ion-header>\n    <ion-navbar>\n       <ion-buttons start>\n           <button (click)="cancel()">\n               <ion-icon name="close"></ion-icon>\n           </button>\n       </ion-buttons>\n       <ion-title>Criar Evento</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list  class="bold">\n        <ion-item>\n            <ion-label floating >Titulo</ion-label>\n            <ion-input type="text" [(ngModel)]="evento.titulo"></ion-input>\n        </ion-item> \n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <ion-item col-md-6>\n                        <ion-label floating>Horario Inicio</ion-label>\n                        <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="evento.horaInicio"></ion-datetime>\n                    </ion-item>\n                </ion-col>\n                <ion-col>\n                    <ion-item col-md-6>\n                        <ion-label floating>Horario Fim</ion-label>\n                        <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="evento.horaFim"></ion-datetime>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-md-6>\n                    <ion-item>\n                        <ion-label floating>Data Inicio</ion-label>\n                        <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="evento.dataInicio"></ion-datetime>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-md-6>\n                        <ion-item>\n                            <ion-label floating>Data Fim</ion-label>\n                            <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="evento.dataFim"></ion-datetime>\n                        </ion-item>\n                    </ion-col>\n            </ion-row>\n        </ion-grid>\n        <ion-item>\n            <ion-label floating >Tema</ion-label>\n            <ion-input type="text" [(ngModel)]="evento.tema"></ion-input>\n        </ion-item> \n    </ion-list>\n    <button (click)="salvar()" ion-button full >Salvar</button>\n</ion-content>\n'/*ion-inline-end:"/home/jonas/Documentos/Curso Ionic Fire Base/app/src/pages/evento-modal/evento-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], EventoModalPage);
    return EventoModalPage;
}());

//# sourceMappingURL=evento-modal.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeusEventosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provides_eventos__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MeusEventosPage = /** @class */ (function () {
    function MeusEventosPage(navCtrl, navParams, eventProvider, toastCrtl, alertCrtl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eventProvider = eventProvider;
        this.toastCrtl = toastCrtl;
        this.alertCrtl = alertCrtl;
        this.listEventos = [];
    }
    MeusEventosPage.prototype.ngOnInit = function () {
        var _this = this;
        this.eventProvider.getEventos(function (eventos) {
            _this.listEventos = eventos;
        });
    };
    MeusEventosPage.prototype.remover = function (evento) {
        var _this = this;
        var alert = this.alertCrtl.create({
            title: 'Excluir',
            subTitle: 'Deseja realmente realmente excluir o evento : ' + evento.titulo + '?',
            buttons: [{
                    text: 'Confirmar',
                    handler: function () {
                        var pos = _this.listEventos.indexOf(evento);
                        _this.eventProvider.removeEventos(evento);
                        _this.listEventos.splice(pos, 1);
                    }
                },
                {
                    text: 'Cancelar',
                    handler: function () {
                        alert.onDidDismiss;
                    }
                }
            ]
        });
        alert.present();
    };
    MeusEventosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-meus-eventos',template:/*ion-inline-start:"/home/jonas/Documentos/Curso Ionic Fire Base/app/src/pages/meus-eventos/meus-eventos.html"*/'<ion-header>\n\n  <ion-navbar>\n        <button ion-button icon-only menuToggle>\n                <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Meus Eventos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n      <ion-item-sliding *ngFor="let evento of listEventos" >\n          <ion-item >        \n                <ion-card class="bold">\n                    <img src="{{evento.map}}">                \n                    <ion-item class="center">                     \n                        <ion-title> {{evento.titulo}}</ion-title>   \n                    </ion-item>\n                    <ion-item>\n                            <ion-icon item-start large ios="ios-calendar" md="md-calendar"></ion-icon>\n                            <h5> Entre {{evento.dataInicio}} e {{evento.dataFim}}</h5>\n                    </ion-item>\n\n                    <ion-item>\n                            <ion-icon item-start large ios="ios-time" md="md-time"></ion-icon>\n                            <h2>{{evento.horaInicio}}:Hrs as {{evento.horaFim}}:Hrs</h2>\n                    </ion-item>\n\n                </ion-card>\n               \n          </ion-item>\n          \n          <ion-item-options>\n              <button ion-button (click)="remover(evento)"color="danger">Excluir</button>\n          </ion-item-options>\n      </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/jonas/Documentos/Curso Ionic Fire Base/app/src/pages/meus-eventos/meus-eventos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__provides_eventos__["a" /* EventosProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MeusEventosPage);
    return MeusEventosPage;
}());

//# sourceMappingURL=meus-eventos.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provides_firebase__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PerfilPage = /** @class */ (function () {
    function PerfilPage(navCtrl, navParams, fire) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fire = fire;
        this.user = {
            nome: "",
            email: "",
            curso: "",
            instituicao: ""
        };
    }
    PerfilPage.prototype.ngOnInit = function () {
        var _this = this;
        this.fire.getUser(function (usuario) {
            _this.user = usuario;
            console.log("baby baby: ", _this.user);
        });
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"/home/jonas/Documentos/Curso Ionic Fire Base/app/src/pages/perfil/perfil.html"*/'\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n     <ion-title>Perfil</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-grid class="center">\n        <ion-row>\n            <h6>Nome : {{user.nome}}</h6>\n        </ion-row>\n        <ion-row>\n            <h6>Email : {{user.email}}</h6>\n        </ion-row>\n        <ion-row>\n            <h6>Curso : {{user.curso}}</h6>\n        </ion-row>        \n        <ion-row>\n            <h6>Instituição : {{user.instituicao}}</h6>\n        </ion-row>\n    </ion-grid>\n    \n</ion-content>\n'/*ion-inline-end:"/home/jonas/Documentos/Curso Ionic Fire Base/app/src/pages/perfil/perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__provides_firebase__["a" /* FirebaseProvider */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 195:
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
webpackEmptyAsyncContext.id = 195;

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/evento-modal/evento-modal.module": [
		485,
		2
	],
	"../pages/login/login.module": [
		237
	],
	"../pages/meus-eventos/meus-eventos.module": [
		486,
		1
	],
	"../pages/perfil/perfil.module": [
		487,
		0
	],
	"../pages/registro/registro.module": [
		249
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
webpackAsyncContext.id = 236;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(238);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provides_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provides_firebase__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(135);
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
    function LoginPage(navCtrl, navParams, afProvider, fireProvader, loadCrtl, toastCrtl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afProvider = afProvider;
        this.fireProvader = fireProvader;
        this.loadCrtl = loadCrtl;
        this.toastCrtl = toastCrtl;
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
        var _this = this;
        var load = this.loadCrtl.create();
        load.present();
        this.afProvider.login(this.loginForm)
            .then(function (res) {
            load.dismiss();
            console.log(res.user.email);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
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
            console.log('usuario criado ' + res.user);
            //cria um novo objeto e grava no fireStorage
            var user = {
                uid: uid,
                nome: _this.registerForm.nome,
                email: _this.registerForm.email,
                instituicao: _this.registerForm.instituicao,
                curso: _this.registerForm.curso
            };
            _this.fireProvader.postUser(user)
                .then(function () {
                var toast = _this.toastCrtl.create({
                    message: 'Cadastro feito com sucesso !',
                    duration: 2000,
                    position: 'middle'
                });
                toast.present();
                _this.login = true;
                _this.registro = false;
            });
            load.dismiss();
        })
            .catch(function (err) {
            console.log(err);
            load.dismiss();
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/jonas/Documentos/Curso Ionic Fire Base/app/src/pages/login/login.html"*/'<ion-content>\n    <!--Background-->\n  <div class="bg-login" *ngIf="login">\n      <div class="overlay">  \n        <!--Container-->\n        <div>    \n  \n          <!--Logo-->\n          <div class="center">\n              <img src="/assets/imgs/logoMaps.png" class="logo pd-top-20">\n          </div>     \n          <!--Textos--> \n          <div class="mg-top-40 ">\n            <!--Titulo--> \n            <h5 class="snow center bold no-margin">Let\'s Go Events</h5>\n            <!--SubTitulo--> \n            <p class="center snow ligth no-margin mg-top-5">Entre com sua conta para continuar</p>          \n          </div>\n          <!--forms--> \n          <div class="padding-40">\n\n            <ion-item class="bg-tranparente">\n              <ion-label stacked class="bold snow no-padding mg-top-40">\n                Email\n              </ion-label>\n              <ion-input type="email" class="snow"  [(ngModel)]="loginForm.email"></ion-input>\n            </ion-item>\n            \n            <ion-item class="bg-tranparente">\n              <ion-label stacked class="snow bold no-padding mg-top-10" >\n                Senha\n              </ion-label>\n              <ion-input type="password" class="snow" [(ngModel)]="loginForm.senha"></ion-input>\n            </ion-item>\n            <div class="ctaLogin center bolde mg-top-30" (click)="fazerLogin()"> \n                Login\n            </div>\n    \n            <div class=" snow bold center mg-top-20" (click)="criaConta()">\n                Criar uma nova conta de acesso\n            </div>\n\n         </div>\n  \n        </div>\n        <!--Fim do Container-->\n      </div>\n  </div>\n  <!--Background-->  \n\n  \n  <!--Resgistro -->\n\n  <!--Background-->\n  <div class="bg-registro" *ngIf="registro">\n      <div class="overlay">  \n        <!--Registro container-->\n        <div>    \n  \n          <!--Logo-->\n          <div class="center">\n              <img src="/assets/imgs/logoMaps.png" class="logo pd-top-20">\n          </div>     \n          <!--Textos--> \n          <div class="mg-top-40 ">\n            <!--Titulo--> \n            <h5 class="snow center bold no-margin">Êba! Vamos lá!</h5>\n            <!--SubTitulo--> \n            <p class="center snow ligth no-margin mg-top-5">\n              Crie suas credenciais para acessar o app\n            </p>          \n          </div>\n          <!--forms--> \n          <div class="padding-40">\n              <ion-item class="bg-tranparente">\n                  <ion-label stacked class="bold snow no-padding mg-top-40" >\n                    Qual é o seu nome\n                  </ion-label>\n                  <ion-input type="text" class="snow" [(ngModel)]="registerForm.nome"></ion-input>\n                </ion-item>\n\n            <ion-item class="bg-tranparente">\n                <ion-label stacked class="bold snow no-padding mg-top-40" >\n                  Qual é o seu email\n                </ion-label>\n                <ion-input type="email" class="snow" [(ngModel)]="registerForm.email"></ion-input>\n            </ion-item>\n\n            <ion-item class="bg-tranparente">\n              <ion-label stacked class="bold snow no-padding mg-top-30" >\n                Qual é a sua instituição\n              </ion-label>\n              <ion-input type="text" class="snow" [(ngModel)]="registerForm.instituicao"></ion-input>\n            </ion-item>\n\n            <ion-item class="bg-tranparente">\n              <ion-label stacked class="bold snow no-padding mg-top-30" >\n                Qual é o seu curso\n              </ion-label>\n              <ion-input type="text" class="snow" [(ngModel)]="registerForm.curso"></ion-input>\n            </ion-item>\n\n            <ion-item class="bg-tranparente">\n              <ion-label stacked class="snow bold no-padding mg-top-30" >\n                Escolha a sua senha\n              </ion-label>\n              <ion-input type="password" class="snow" [(ngModel)]="registerForm.senha"></ion-input>\n            </ion-item>\n            \n            <div class="ctaRegistrar center bolde mg-top-30" (click)="fazerCadastro()">\n              Cadastrar\n            </div>\n  \n            <div class=" snow bold center mg-top-20" (click)="acesaConta()">\n              Já tenho uma conta\n            </div>\n         </div>\n  \n        </div>\n        <!--Fim do Container-->\n      </div>\n  </div>\n  <!--Background-->  \n  </ion-content>\n '/*ion-inline-end:"/home/jonas/Documentos/Curso Ionic Fire Base/app/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__provides_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__provides_firebase__["a" /* FirebaseProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageModule", function() { return RegistroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registro__ = __webpack_require__(465);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__registro__["a" /* RegistroPage */]),
            ],
        })
    ], RegistroPageModule);
    return RegistroPageModule;
}());

//# sourceMappingURL=registro.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(414);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login_module__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_registro_registro_module__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_evento_modal_evento_modal__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_meus_eventos_meus_eventos__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_perfil_perfil__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__configs_firebase__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_firestore__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__provides_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__provides_firebase__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_geolocation__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__provides_eventos__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_common__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_component__ = __webpack_require__(484);
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
                __WEBPACK_IMPORTED_MODULE_20__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_evento_modal_evento_modal__["a" /* EventoModalPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_meus_eventos_meus_eventos__["a" /* MeusEventosPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_perfil_perfil__["a" /* PerfilPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_6__pages_registro_registro_module__["RegistroPageModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_20__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/evento-modal/evento-modal.module#EventoModalPageModule', name: 'EventoModalPage', segment: 'evento-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/meus-eventos/meus-eventos.module#MeusEventosPageModule', name: 'MeusEventosPage', segment: 'meus-eventos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registro/registro.module#RegistroPageModule', name: 'RegistroPage', segment: 'registro', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_11__configs_firebase__["a" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_evento_modal_evento_modal__["a" /* EventoModalPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_meus_eventos_meus_eventos__["a" /* MeusEventosPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__provides_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_19__angular_common__["d" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_16__provides_firebase__["a" /* FirebaseProvider */],
                __WEBPACK_IMPORTED_MODULE_18__provides_eventos__["a" /* EventosProvider */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_geolocation__["a" /* Geolocation */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
            selector: 'page-registro',template:/*ion-inline-start:"/home/jonas/Documentos/Curso Ionic Fire Base/app/src/pages/registro/registro.html"*/'<ion-content>\n    <!--Background-->\n  <div class="bg-login" *ngIf="login">\n      <div class="overlay">  \n        <!--Container-->\n        <div>    \n  \n          <!--Logo-->\n          <div class="center">\n              <img src="/assets/imgs/logo.png" class="logo pd-top-20">\n          </div>     \n          <!--Textos--> \n          <div class="mg-top-40 ">\n            <!--Titulo--> \n            <h5 class="snow center bold no-margin">Que bom te ver aqui!</h5>\n            <!--SubTitulo--> \n            <p class="center snow ligth no-margin mg-top-5">Entre com sua conta para continuar</p>          \n          </div>\n          <!--forms--> \n          <div class="padding-40">\n            <ion-item class="bg-tranparente">\n              <ion-label stacked class="bold snow no-padding mg-top-40">Email</ion-label>\n              <ion-input type="email" class="snow"></ion-input>\n            </ion-item>\n            \n            <ion-item class="bg-tranparente">\n              <ion-label stacked class="snow bold no-padding mg-top-10">Senha</ion-label>\n              <ion-input type="password" class="snow"></ion-input>\n            </ion-item>\n            \n            <div class="ctaLogin center bolde mg-top-30">\n              Entrar\n            </div>\n  \n            <div class="ctaRegistrar snow bold center mg-top-20">\n              Quero criar uma nova conta!\n            </div>\n         </div>\n  \n        </div>\n        <!--Fim do Container-->\n      </div>\n  </div>\n  <!--Background-->  \n  \n  <!--Resgistro -->\n  <!--Background-->\n  <div class="bg-registro" *ngIf="registro">\n      <div class="overlay">  \n        <!--Container-->\n        <div>    \n  \n          <!--Logo-->\n          <div class="center">\n              <img src="/assets/imgs/logo.png" class="logo pd-top-20">\n          </div>     \n          <!--Textos--> \n          <div class="mg-top-40 ">\n            <!--Titulo--> \n            <h5 class="snow center bold no-margin">Que bom te ver aqui!</h5>\n            <!--SubTitulo--> \n            <p class="center snow ligth no-margin mg-top-5">Entre com sua conta para continuar</p>          \n          </div>\n          <!--forms--> \n          <div class="padding-40">\n            <ion-item class="bg-tranparente">\n              <ion-label stacked class="bold snow no-padding mg-top-40">Email</ion-label>\n              <ion-input type="email" class="snow"></ion-input>\n            </ion-item>\n            \n            <ion-item class="bg-tranparente">\n              <ion-label stacked class="snow bold no-padding mg-top-10">Senha</ion-label>\n              <ion-input type="password" class="snow"></ion-input>\n            </ion-item>\n            \n            <div class="ctaLogin center bolde mg-top-30">\n              Entrar\n            </div>\n  \n            <div class="ctaRegistrar snow bold center mg-top-20">\n              Quero criar uma nova conta!\n            </div>\n         </div>\n  \n        </div>\n        <!--Fim do Container-->\n      </div>\n  </div>\n  <!--Background-->  \n  </ion-content>\n '/*ion-inline-end:"/home/jonas/Documentos/Curso Ionic Fire Base/app/src/pages/registro/registro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], RegistroPage);
    return RegistroPage;
}());

//# sourceMappingURL=registro.js.map

/***/ }),

/***/ 483:
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

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__provides_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_meus_eventos_meus_eventos__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_perfil_perfil__ = __webpack_require__(162);
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
    function MyApp(platform, statusBar, splashScreen, auth) {
        this.auth = auth;
        this.perfil = __WEBPACK_IMPORTED_MODULE_8__pages_perfil_perfil__["a" /* PerfilPage */];
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.home = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.login = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.meusEventos = __WEBPACK_IMPORTED_MODULE_7__pages_meus_eventos_meus_eventos__["a" /* MeusEventosPage */];
        this.sair = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.isMenu = false;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.trocaPagina = function (pagina) {
        this.rootPage = pagina;
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/jonas/Documentos/Curso Ionic Fire Base/app/src/app/app.html"*/'<ion-menu [content] = "menu">\n    <ion-content>\n        <ion-list>\n            <button ion-item menuClose (click)="trocaPagina(perfil)">Perfil</button>\n            <button ion-item menuClose (click)="trocaPagina(home)">Home</button>\n            <button ion-item menuClose (click)="trocaPagina(meusEventos)" >Meus Eventos</button>\n            <button ion-item menuClose (click)="trocaPagina(sair)">Sair</button>\n        </ion-list>    \n    </ion-content>\n</ion-menu>\n\n<ion-nav #menu [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/jonas/Documentos/Curso Ionic Fire Base/app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__provides_auth__["a" /* AuthProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(239);
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
    AuthProvider.prototype.getEmailUser = function () {
        return this.afAuth.auth.currentUser.uid;
    };
    AuthProvider.prototype.getEmail = function () {
        console.log('retorno do email no auth ' + this.afAuth.auth.currentUser.email);
        return this.afAuth.auth.currentUser.email;
    };
    //login 
    AuthProvider.prototype.login = function (data) {
        return this.afAuth.auth.signInWithEmailAndPassword(data.email, data.senha);
    };
    //sair 
    AuthProvider.prototype.logout = function () {
        return this.afAuth.auth.signOut();
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ })

},[291]);
//# sourceMappingURL=main.js.map