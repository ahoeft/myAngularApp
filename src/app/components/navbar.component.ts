import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: '../templates/navbar.component.html',
  styleUrls: ['../app.component.css']
})
export class NavBarComponent {
    active: string;

    constructor(){
        this.active = "Home";
    }

    setActive(str) {
        this.active = str;
    }
}