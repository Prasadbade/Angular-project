import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html'
})
export class FirstComponent 
{
name:string="prasad"
Display():string
{
  var ret:string="hello "+this.name
  return ret
}
addition(no1:number,no2:number):number
{
  return no1+no2
}
}
