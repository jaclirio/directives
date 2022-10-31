import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  foods = [
    { name: 'Balut', price: 50 },
    { name: 'Squidball 5pcs', price: 30 },
    { name: 'Fish Ball 5pcs', price: 10 },
    { name: 'One Day Old', price: 25 },
    { name: 'Kwek Kwek', price: 20 }
  ];
  isLoggedIn = false;
  language = 'en';
  ngClassOptions = {
    red: false,
    underline: false,
    alien: false
  }

  ngStyleOptions = {
    fontFamily: 'Arial',
    fontSize: '16px'
  };

  setisLoggedIn(event: Event) {
    this.isLoggedIn = (event.target as HTMLInputElement).checked;
  }

  setLanguage(event: Event) {
    this.language = (event.target as HTMLSelectElement).value;
  }

  setNgClass(event: Event, className: string) {
    (this.ngClassOptions as any)[className] = (event.target as HTMLInputElement).checked;
  }

  setStyle(event: Event, property: string) {
    (this.ngStyleOptions as any)[property] = (event.target as HTMLSelectElement).value;
  }
}
