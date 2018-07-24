import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sombras :string [];
  title = 'app';
  fromEvent ='';
  kague:string;
  constructor() {
    this.sombras=['Hokage','kage','Kazekage']; 
    console.log("constructor display1");
    
}
  
  ngOnInit() {
    console.log("ngOnInit display1");
  }

  TextfromFunction() {
    this.sombras.push('Mizukage');
  }
  onUpdateFromEvent(event:any ){
    this.fromEvent = event.target.value;
    console.log(event);
    console.log(event.currentTarget.dataset.name);
  }

}
