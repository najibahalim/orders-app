import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  online = true;
  orders = [];
  CLIENT_API = "http://demo8360259.mockable.io/clients";
  constructor(private call: CallNumber) {}

  ngOnInit(){
    fetch(this.CLIENT_API).then(response => response.json())
      .then(data => this.orders = data.orders);
  }

  callNumber(phone: string) {
    this.call.callNumber(phone, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
    console.log(phone);
  }

}
