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
  formula = '';

  ngOnInit(): void {
  }
  pressKey(key: string) {
    if (key==".") {
      if (this.mainText !="" ) {
 
        const lastNum=this.getOperator()
        if (lastNum.lastIndexOf(".") >= 0) return;
      }
    }
    if (key=="0") {
      if (this.mainText=="" ) {
        return;
      }
      const PrevKey = this.mainText[this.mainText.length - 1];
      if (PrevKey === '/' || PrevKey === '*' || PrevKey === '-' || PrevKey === '+')  {
          return;
      }
    }
    this.mainText = this.mainText + key;
    this.formula = this.mainText;
  }

  getOperator() {
    let index:number;

    index = this.mainText.toString().lastIndexOf("+")

    if (this.mainText.toString().lastIndexOf("-") > index)
     index=this.mainText.lastIndexOf("-")
    else if (this.mainText.toString().lastIndexOf("*") > index) 
      index=this.mainText.lastIndexOf("*")
    else if (this.mainText.toString().lastIndexOf("/") > index) 
     index=this.mainText.lastIndexOf("/")

    return this.mainText.substr(index+1)
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

calculate() {
  let equation = this.mainText;
 
    let checkInput = equation[equation.length - 1];
 
    if (checkInput === '.')  {
      equation=equation.substr(0,equation.length - 1);
    }
 
    checkInput = equation[equation.length - 1];
 
    if (checkInput === '/' || checkInput === '*' || checkInput === '-' || checkInput === '+' || checkInput === '.')  {
      equation=equation.substr(0,equation.length - 1);
    }
    this.subText = eval(equation);

    var checkLength = `${this.mainText}`;

    if(checkLength.length > 10){
      document.getElementById('max').style.color = 'gray';
      this.subText = this.mainText;
    }
}
equals(){
  this.subText = this.formula;
  this.calculate();
  if (this.mainText=="0") this.mainText="";
}
pressOperator(op: string) {
  let checkInput = this.mainText[this.mainText.length - 1];
  if (checkInput === '/' || checkInput === '*' || checkInput === '-' || checkInput === '+')  {
    return;
  }
  this.mainText = this.mainText + op
  this.calculate();
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
