import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  flag:boolean=true;
  modelImg:string='';

   srcs :string[] = [
     'assets/imges/poert1.png',
     'assets/imges/port2.png',
     'assets/imges/port3.png',
     'assets/imges/poert1.png',
     'assets/imges/port2.png',
     'assets/imges/port3.png'
   ]

  hideModel( element: EventTarget | null ,img:HTMLImageElement):void{
    if(element == img) return;

    this.flag = true;
  }
   constructor(){}

}
