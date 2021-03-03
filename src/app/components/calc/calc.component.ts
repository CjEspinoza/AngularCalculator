import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  constructor() { }
  subText = '';
  mainText = '';
  operand1: number;
  operand2: number;
  operator = '';
  calculationString = ''; 
  answered = false; 
  operatorSet = false;

  ngOnInit(): void {
  }

  pressKey(key: string) {
    if (key === '/' || key === 'x' || key === '-' || key === '+') {
       const lastKey = this.mainText[this.mainText.length - 1];
       if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+')  {
         this.operatorSet = true;
       }
       if ((this.operatorSet) || (this.mainText === '')) {
         return;
       }
       this.operand1 = parseFloat(this.mainText);
       this.operand2 = parseFloat(this.mainText);
       this.operator = key;
       this.operatorSet = true;
    }
    if (this.mainText.length === 10) {
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
 }
calcAnswer() {
  let formula = this.mainText;

  let lastKey = formula[formula.length - 1];

  if (lastKey === '.')  {
    formula=formula.substr(0,formula.length - 1);
  }

  lastKey = formula[formula.length - 1];

  if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === '.')  {
    formula=formula.substr(0,formula.length - 1);
  }
  this.mainText = eval(formula);
}

equals() {
  if(this.mainText != ''){
    this.calcAnswer();
    this.subText = this.mainText;
    if (this.mainText=="0") this.mainText="";
  }else{
    this.clear();
  }
}
 delete(){
  if (this.mainText !="") {
    this.mainText=this.mainText.substr(0, this.mainText.length-1);
  }
 }
 keydownDelete($event){
  if($event.key == 'Delete'){
    if (this.mainText !="") {
      this.mainText=this.mainText.substr(0, this.mainText.length-1);
    }
    }
 }
 keydownEnd($event){
   if($event.key =='End'){
     this.clear();
   }
 }
}
