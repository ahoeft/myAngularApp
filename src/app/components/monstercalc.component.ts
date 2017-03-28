import { Component } from '@angular/core';

@Component({
  selector: 'monster',
  templateUrl: '../templates/monster.component.html',
  styleUrls: ['../app.component.css']
})
export class MonsterComponent {
  title;
  AC: string;
  ACRating: number;
  HP: string;
  HPRating: number;
  defenseRating: number;
  attBonus: string;
  attRating: number;
  avgDamage: string;
  DamageRating: number;
  offenseRating: number;
  challenge: number;

  constructor(){
    this.title = 'Monster Calculator';
    this.defenseRating = 0;
    this.AC = '0';
    this.HP = '0';
    this.attBonus = '0';
    this.avgDamage = '0';
    this.offenseRating = 0;
    this.challenge = 0;
  }

  calculateChallenge() {
    //calculate defense
    //calculate HPRating
    if(parseFloat(this.HP) <= 6) {
        this.HPRating = 1;
        this.ACRating = 13;
    } else if(parseFloat(this.HP) > 6 && parseFloat(this.HP) <= 35) {
        this.HPRating = 2;
        this.ACRating = 13;
    } else if(parseFloat(this.HP) > 35 && parseFloat(this.HP) <= 50) {
        this.HPRating = 3;
        this.ACRating = 13;
    } else if(parseFloat(this.HP) > 50 && parseFloat(this.HP) <= 71) {
        this.HPRating = 4;
        this.ACRating = 13;
    } else if(parseFloat(this.HP) > 71 && parseFloat(this.HP) <= 85) {
        this.HPRating = 5;
        this.ACRating = 13;
    } else if(parseFloat(this.HP) > 85 && parseFloat(this.HP) <= 100) {
        this.HPRating = 6;
        this.ACRating = 13;
    } else if(parseFloat(this.HP) > 100 && parseFloat(this.HP) <= 115) {
        this.HPRating = 7;
        this.ACRating = 13;
    } else if(parseFloat(this.HP) > 115 && parseFloat(this.HP) <= 130) {
        this.HPRating = 8;
        this.ACRating = 14;
    } else if(parseFloat(this.HP) > 130 && parseFloat(this.HP) <= 145) {
        this.HPRating = 9;
        this.ACRating = 15;
    } else if(parseFloat(this.HP) > 160 && parseFloat(this.HP) <= 160) {
        this.HPRating = 10;
        this.ACRating = 15;
    } else if(parseFloat(this.HP) > 160 && parseFloat(this.HP) <= 175) {
        this.HPRating = 11;
        this.ACRating = 15;
    } else if(parseFloat(this.HP) > 175 && parseFloat(this.HP) <= 190) {
        this.HPRating = 12;
        this.ACRating = 16;
    } else if(parseFloat(this.HP) > 190 && parseFloat(this.HP) <= 205) {
        this.HPRating = 13;
        this.ACRating = 16;
    } else if(parseFloat(this.HP) > 205 && parseFloat(this.HP) <= 220) {
        this.HPRating = 14;
        this.ACRating = 17;
    } else if(parseFloat(this.HP) > 220 && parseFloat(this.HP) <= 235) {
        this.HPRating = 15;
        this.ACRating = 17;
    } else if(parseFloat(this.HP) > 235 && parseFloat(this.HP) <= 250) {
        this.HPRating = 16;
        this.ACRating = 17;
    } else if(parseFloat(this.HP) > 250 && parseFloat(this.HP) <= 265) {
        this.HPRating = 17;
        this.ACRating = 18;
    } else if(parseFloat(this.HP) > 265 && parseFloat(this.HP) <= 280) {
        this.HPRating = 18;
        this.ACRating = 18;
    } else if(parseFloat(this.HP) > 280 && parseFloat(this.HP) <= 295) {
        this.HPRating = 19;
        this.ACRating = 18;
    } else if(parseFloat(this.HP) > 295 && parseFloat(this.HP) <= 310) {
        this.HPRating = 20;
        this.ACRating = 18;
    } else if(parseFloat(this.HP) > 310 && parseFloat(this.HP) <= 325) {
        this.HPRating = 21;
        this.ACRating = 19;
    } else if(parseFloat(this.HP) > 325 && parseFloat(this.HP) <= 340) {
        this.HPRating = 22;
        this.ACRating = 19;
    } else {
        this.HPRating = 23;
        this.ACRating = 19;
    }
    //Calculate actual defenseRating
    let ACadjustment = (parseFloat(this.AC) - this.ACRating) / 2;
    this.defenseRating = this.HPRating + Math.round(ACadjustment);

    //calculate offense
    if(parseFloat(this.avgDamage) <= 1) {
        this.DamageRating = 1;
        this.attRating = 3;
    } else if(parseFloat(this.avgDamage) > 1 && parseFloat(this.avgDamage) <= 3) {
        this.DamageRating = 2;
        this.attRating = 3;
    } else if(parseFloat(this.avgDamage) > 3 && parseFloat(this.avgDamage) <= 5) {
        this.DamageRating = 3;
        this.attRating = 3;
    } else if(parseFloat(this.avgDamage) > 5 && parseFloat(this.avgDamage) <= 8) {
        this.DamageRating = 4;
        this.attRating = 3;
    } else if(parseFloat(this.avgDamage) > 8 && parseFloat(this.avgDamage) <= 14) {
        this.DamageRating = 5;
        this.attRating = 3;
    } else if(parseFloat(this.avgDamage) > 14 && parseFloat(this.avgDamage) <= 20) {
        this.DamageRating = 6;
        this.attRating = 3;
    } else if(parseFloat(this.avgDamage) > 20 && parseFloat(this.avgDamage) <= 26) {
        this.DamageRating = 7;
        this.attRating = 4;
    } else if(parseFloat(this.avgDamage) > 26 && parseFloat(this.avgDamage) <= 32) {
        this.DamageRating = 8;
        this.attRating = 5;
    } else if(parseFloat(this.avgDamage) > 32 && parseFloat(this.avgDamage) <= 38) {
        this.DamageRating = 9;
        this.attRating = 6;
    } else if(parseFloat(this.avgDamage) > 38 && parseFloat(this.avgDamage) <= 44) {
        this.DamageRating = 10;
        this.attRating = 6;
    } else if(parseFloat(this.avgDamage) > 44 && parseFloat(this.avgDamage) <= 50) {
        this.DamageRating = 11;
        this.attRating = 6;
    } else if(parseFloat(this.avgDamage) > 50 && parseFloat(this.avgDamage) <= 56) {
        this.DamageRating = 12;
        this.attRating = 7;
    } else if(parseFloat(this.avgDamage) > 56 && parseFloat(this.avgDamage) <= 62) {
        this.DamageRating = 13;
        this.attRating = 7;
    } else if(parseFloat(this.avgDamage) > 62 && parseFloat(this.avgDamage) <= 68) {
        this.DamageRating = 14;
        this.attRating = 7;
    } else if(parseFloat(this.avgDamage) > 74 && parseFloat(this.avgDamage) <= 80) {
        this.DamageRating = 15;
        this.attRating = 8;
    } else if(parseFloat(this.avgDamage) > 80 && parseFloat(this.avgDamage) <= 86) {
        this.DamageRating = 16;
        this.attRating = 8;
    } else if(parseFloat(this.avgDamage) > 92 && parseFloat(this.avgDamage) <= 98) {
        this.DamageRating = 17;
        this.attRating = 8;
    } else if(parseFloat(this.avgDamage) > 98 && parseFloat(this.avgDamage) <= 104) {
        this.DamageRating = 18;
        this.attRating = 8;
    } else if(parseFloat(this.avgDamage) > 104 && parseFloat(this.avgDamage) <= 110) {
        this.DamageRating = 19;
        this.attRating = 8;
    } else if(parseFloat(this.avgDamage) > 110 && parseFloat(this.avgDamage) <= 116) {
        this.DamageRating = 20;
        this.attRating = 9;
    } else if(parseFloat(this.avgDamage) > 116 && parseFloat(this.avgDamage) <= 122) {
        this.DamageRating = 21;
        this.attRating = 10;
    } else if(parseFloat(this.avgDamage) > 122 && parseFloat(this.avgDamage) <= 128) {
        this.DamageRating = 22;
        this.attRating = 10;
    } else {
        this.DamageRating = 23;
        this.attRating = 10;
    }

    //Calculate actual offenseRating
    let attAdjustment = (parseFloat(this.attBonus) - this.attRating) / 2;
    this.offenseRating = this.DamageRating + Math.round(attAdjustment);

    //end result
    this.challenge = (this.defenseRating + this.offenseRating) / 2;
    //display correctly for weird 0, 1/8, 1/4, 1/2, thanks wizards.
    this.challenge = Math.round(this.challenge);
    if(this.challenge == 1) {
        this.challenge = 0;
    } else if (this.challenge == 2) {
        this.challenge = .125;
    } else if (this.challenge == 3) {
        this.challenge = .25;
    } else if (this.challenge == 4) {
        this.challenge = .5;
    } else {
        this.challenge = this.challenge - 4;
    }
  } 
}