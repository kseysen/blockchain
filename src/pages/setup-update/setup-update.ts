import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Setup } from '../../services/setups/setup';
import { SetupService } from '../../services/setups/setup.service';

@Component({
  selector: 'page-setup-update',
  templateUrl: 'setup-update.html',
})
export class SetupUpdatePage {

  item: Setup;
  bool: Boolean;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private setupService : SetupService) {
    this.item = this.navParams.data;
  }

  edit(){
      this
      .setupService
      .editSetup(this.item)
      .subscribe(response => response,
      error => console.log(error)
      );
    this.navCtrl.pop();
  }

}
