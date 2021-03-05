import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  constructor(private decimal : DecimalPipe) { }
  subText = '';
  mainText = '';
  num1: number;
  num2: number;
  operator = '';
  calculationString = ''; 
  answered = false; 
  operatorSet = false;

  ngOnInit(): void {

  }

  pressKey(key: string) {
    if (key === '/' || key === '*' || key === '-' || key === '+') {
       const lastKey = this.mainText[this.mainText.length - 1];
       if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+')  {
         this.operatorSet = true;
       }
       if ((this.operatorSet) || (this.mainText === '')) {
         return;
       }
       this.num1 = parseFloat(this.mainText);
       this.operator = key;
       this.operatorSet = true;
    }
    if (this.mainText.length === 12) {
      return;
    }
    this.mainText += key;
 }

 clear(){
   this.mainText = '';
   this.subText = '';
   this.operator = '';
   this.calculationString = '';
   this.answered = false;
   this.operatorSet = false;
   document.getElementById('max').style.color = 'rgba(255, 255, 255, 0.05)';
 }
equals() {
  this.calculationString = this.mainText;
    this.num2 = parseFloat(this.mainText.split(this.operator)[1]);
    if (this.operator === '/') {
      this.subText = this.mainText;
      this.mainText = (this.num1 / this.num2).toString();
      this.subText = this.calculationString;
      if (this.mainText.length > 9) {
        this.mainText = this.mainText.substr(0, 9);
      }
    } else if (this.operator === '*') {
      this.subText = this.mainText;
      this.mainText = (this.num1 * this.num2).toString();
      this.subText = this.calculationString;
      if (this.mainText.length > 9) {
        this.mainText = 'ERROR';
        this.subText = 'Range Exceeded';
      }
    } else if (this.operator === '-') {
      this.subText = this.mainText;
      this.mainText = (this.num1 - this.num2).toString();
      this.subText = this.calculationString;
    } else if (this.operator === '+') {
      this.subText = this.mainText;
      this.mainText = (this.num1 + this.num2).toString();
      this.subText = this.calculationString;
      if (this.mainText.length > 9) {
        this.mainText = 'ERROR';
        this.subText = 'Range Exceeded';
      }
    } else {
      this.subText = 'ERROR: Invalid Operation';
    }
    this.answered = true;

    var checkLength = `${this.mainText}`;

    if(checkLength.length > 10){
      document.getElementById('max').style.color = 'gray';
      this.subText = this.mainText;
    }
}
 delete(){
   if(this.answered == true){
    this.clear();
   }else{
    if (this.mainText !="") {
      this.mainText=this.mainText.substr(0, this.mainText.length-1);
    }
   }

 }
 keydownDelete($event){
  if($event.key =='Delete'){
    this.clear();
  }
 }
 keydownEnd($event){
  if($event.key == 'End'){
    if (this.mainText !="") {
      this.mainText=this.mainText.substr(0, this.mainText.length-1);
    }
    }
}
}
