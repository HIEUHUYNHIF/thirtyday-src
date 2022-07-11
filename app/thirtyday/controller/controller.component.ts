import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss']
})
export class ControllerComponent implements OnInit {
  //constructor{} and ngOnIt{}
  constructor() { 

  }
  ngOnInit(): void {
  }

//property
images = [
  { path:'day1' ,  src:'assets/images/day1/day1.png'},
  { path:'day2' ,  src:'assets/images/day2/day2.png'},
  { path:'day3' ,  src:'assets/images/day3/day3.png'},
  { path:'day4' ,  src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day5' ,  src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day6' ,  src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day7' ,  src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day8' ,  src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day9' ,  src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day10' , src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day11' , src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day12' , src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day13' , src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day14' , src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day15' , src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day16' , src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day17' , src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day18' , src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day19' , src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day20' , src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day21' , src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day22' , src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day23' , src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day24' , src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day25' , src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day26' , src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day27' , src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day28' , src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day29' , src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day30' , src:'assets/images/day1/Nike Zoom KD 12.png'},
];
// method
scrollView(target:any):void{
    target.scrollIntoView({behavior:"smooth"});
}
i:number = 0;
j:number = this.images.length;
enableCSSnext():void{
  if(this.i > this.j)
  {
    var n;
      for( n = 0; n < this.j; n++)
      {
        let img = document.getElementsByClassName('image')[n];
        img.className = img.className.replace(" image-disable-right"," image-disable-left");
      };
      this.i = 1;
      let img = document.getElementsByClassName('image')[this.i-1];
      let dot = document.getElementsByClassName('dot')[this.i-1];
      setTimeout(() => {
        img.className = img.className.replace(" image-disable-left"," image-enable");
        dot.className = dot.className.replace(" dot-disable"," dot-enable");
      }, 80);
  }
  else{
    let img = document.getElementsByClassName('image')[this.i-1];
    let dot = document.getElementsByClassName('dot')[this.i-1];
        img.className = img.className.replace(" image-disable-left"," image-enable");
        dot.className = dot.className.replace(" dot-disable"," dot-enable");
  }
}
enableCSSPrev():void{
  if(this.i <= 0 ){
      this.i = 1;
  }
  let img = document.getElementsByClassName('image')[this.i-1];
  let dot = document.getElementsByClassName('dot')[this.i-1];
    img.className = img.className.replace(" image-disable-right"," image-enable");
    dot.className = dot.className.replace(" dot-disable"," dot-enable");
}
disableCSSNext():void{
  if(this.i > 0){
    let img = document.getElementsByClassName('image')[this.i-1];
    let dot = document.getElementsByClassName('dot')[this.i-1];
    img.className = img.className.replace(" image-enable"," image-disable-right");
    dot.className = dot.className.replace(" dot-enable"," dot-disable");
  }
}
disableCSSPrev():void{
  if(this.i > 1)
  {
    let img = document.getElementsByClassName('image')[this.i-1];
    let dot = document.getElementsByClassName('dot')[this.i-1];
    img.className = img.className.replace(" image-enable"," image-disable-left");
    dot.className = dot.className.replace(" dot-enable"," dot-disable");
  }
}
n:number=0;
changeCSSNext():void{
  this.disableCSSNext();
  this.i++;
  setTimeout(() => {
    this.enableCSSnext();
  }, 260);
  
}
next:any;
prev:any;
autoChangeCSSNext():void{
  this.next = setInterval(() => {
    this.changeCSSNext()
  }, 2500);
}

stopslide():void{
  clearInterval(this.next);
}
nextslide():void{
  if( this.i < this.j )
  {
    setTimeout(() => {
      this.stopslide();
      this.disableCSSNext();
      this.i++;
      this.enableCSSnext();
    }, 100);
    setTimeout(() => {
      this.autoChangeCSSNext();
    }, 150);
  }

}
prevslide():void{
  if( this.i > 1 )
  {
    setTimeout(() => {
      this.stopslide();
      this.disableCSSPrev();
      this.i--;
      this.enableCSSPrev();
    }, 100);
    setTimeout(() => {
      this.autoChangeCSSNext();
    }, 150);
  }
}
}