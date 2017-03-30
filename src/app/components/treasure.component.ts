import { Component } from '@angular/core';
import { NavBarComponent } from './navbar.component'

@Component({
  selector: 'treasure',
  templateUrl: '../templates/treasure.component.html',
  styleUrls: ['../app.component.css']
})
export class TreasureComponent {
    type: string;
    level: string;
    lootMessage: string;
    loot: string[];

    constructor(){
        this.type = "Individual";
        this.level = "1";
        this.lootMessage = "The Looting Begins Here!";
        this.loot = [];
    }

    beginLooting() {
        let lvl = parseInt(this.level);
        this.loot = [];
        if(this.type == "Individual") {
            let randomPercent = Math.floor(Math.random() * 100) + 1;
            let coin, coin2 = "";
            let randomCoin;
            if(lvl <= 4) {
                if(randomPercent < 31) {
                    randomCoin = Math.floor(Math.random() * 26) + 5;
                    coin = randomCoin + " cp";
                    this.loot.push(coin);
                } else if (randomPercent > 30 && randomPercent <= 60) {
                    randomCoin = Math.floor(Math.random() * 21) + 4;
                    coin = randomCoin + " sp";
                    this.loot.push(coin);
                } else if (randomPercent > 60 && randomPercent <= 70) {
                    randomCoin = Math.floor(Math.random() * 16) + 3;
                    coin = randomCoin + " ep";
                    this.loot.push(coin);                    
                } else if (randomPercent > 70 && randomPercent <= 90) {
                    randomCoin = Math.floor(Math.random() * 16) + 3;
                    coin = randomCoin + " gp";
                    this.loot.push(coin);                    
                } else {
                    randomCoin = Math.floor(Math.random() * 6) + 1;
                    coin = randomCoin + " pp";
                    this.loot.push(coin);
                }
            } else if (lvl > 4 && lvl <= 10) {
                if(randomPercent < 31) {
                    randomCoin = Math.floor(Math.random() * 2001) + 400;
                    coin = randomCoin + " cp";
                    this.loot.push(coin);
                    randomCoin = Math.floor(Math.random() * 51) + 10;
                    coin2 = randomCoin + " ep";
                    this.loot.push(coin2);

                } else if (randomPercent > 30 && randomPercent <= 60) {
                    randomCoin = Math.floor(Math.random() * 301) + 60;
                    coin = randomCoin + " sp";
                    this.loot.push(coin);
                    randomCoin = Math.floor(Math.random() * 111) + 10;
                    coin2 = randomCoin + " gp";
                    this.loot.push(coin2);
                } else if (randomPercent > 60 && randomPercent <= 70) {
                    randomCoin = Math.floor(Math.random() * 151) + 30;
                    coin = randomCoin + " ep";
                    this.loot.push(coin);
                    randomCoin = Math.floor(Math.random() * 101) + 20;
                    coin2 = randomCoin + " gp";
                    this.loot.push(coin2);                    
                } else if (randomPercent > 70 && randomPercent <= 90) {
                    randomCoin = Math.floor(Math.random() * 201) + 40;
                    coin = randomCoin + " gp";
                    this.loot.push(coin);                    
                } else {
                    randomCoin = Math.floor(Math.random() * 101) + 20;
                    coin = randomCoin + " gp";
                    this.loot.push(coin);
                    randomCoin = Math.floor(Math.random() * 16) + 3;
                    coin2 = randomCoin + " pp";
                    this.loot.push(coin2);
                }
            } else if (lvl > 10 && lvl <= 16) {
                if(randomPercent < 21) {
                    randomCoin = Math.floor(Math.random() * 2001) + 400;
                    coin = randomCoin + " sp";
                    this.loot.push(coin);
                    randomCoin = Math.floor(Math.random() * 501) + 100;
                    coin2 = randomCoin + " gp";
                    this.loot.push(coin2);

                } else if (randomPercent > 20 && randomPercent <= 35) {
                    randomCoin = Math.floor(Math.random() * 501) + 100;
                    coin = randomCoin + " ep";
                    this.loot.push(coin);
                    randomCoin = Math.floor(Math.random() * 501) + 100;
                    coin2 = randomCoin + " gp";
                    this.loot.push(coin2);
                } else if (randomPercent > 35 && randomPercent <= 75) {
                    randomCoin = Math.floor(Math.random() * 1001) + 200;
                    coin = randomCoin + " gp";
                    this.loot.push(coin);
                    randomCoin = Math.floor(Math.random() * 51) + 10;
                    coin2 = randomCoin + " pp";
                    this.loot.push(coin2);                    
                } else {
                    randomCoin = Math.floor(Math.random() * 1001) + 200;
                    coin = randomCoin + " gp";
                    this.loot.push(coin);
                    randomCoin = Math.floor(Math.random() * 101) + 20;
                    coin2 = randomCoin + " pp";
                    this.loot.push(coin2);
                }
            } else {
                if(randomPercent < 15) {
                    randomCoin = Math.floor(Math.random() * 2001) + 400;
                    coin = randomCoin + " ep";
                    this.loot.push(coin);
                    randomCoin = Math.floor(Math.random() * 501) + 100;
                    coin2 = randomCoin + " gp";
                    this.loot.push(coin2);

                } else if (randomPercent > 14 && randomPercent <= 55) {
                    randomCoin = Math.floor(Math.random() * 501) + 100;
                    coin = randomCoin + " gp";
                    this.loot.push(coin);
                    randomCoin = Math.floor(Math.random() * 501) + 100;
                    coin2 = randomCoin + " pp";
                    this.loot.push(coin2);
                } else {
                    randomCoin = Math.floor(Math.random() * 1001) + 200;
                    coin = randomCoin + " gp";
                    this.loot.push(coin);
                    randomCoin = Math.floor(Math.random() * 101) + 20;
                    coin2 = randomCoin + " pp";
                    this.loot.push(coin2);
                }  
            }
        } else {
            //handle hoard
            //generate gold
            //generate art & Gems
            //generate Magic Items
            let coin = "";
            coin = "Not Implemented yet :(";
            this.loot.push(coin);
        }
        this.lootMessage = "Your Treasure: ";   
    }
}