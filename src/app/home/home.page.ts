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
  constructor(private call: CallNumber) {}

  ngOnInit(){
    fetch("http://demo8360259.mockable.io/clients").then(response => response.json())
      .then(data => this.orders = data.orders);
  }

  callNumber(phone) {
    this.call.callNumber(phone, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
    console.log(phone);
  }

}
