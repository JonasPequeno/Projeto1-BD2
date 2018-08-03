import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-evento-modal',
  templateUrl: 'evento-modal.html',
})
export class EventoModalPage {

  private evento = {titulo : '', dataInicio : '',dataFim : '',horaInicio: '', horaFim:'', tema : '', local : '', usuario : ''};

  constructor(public navCtrl: NavController, public navParams: NavParams , public viewCrtl : ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventoModalPage');
  }

  cancel() {
    this.viewCrtl.dismiss();
  }

  salvar() {

    this.viewCrtl.dismiss(this.evento);
  }
}
