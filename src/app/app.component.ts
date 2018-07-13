import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  property = 'desde un parametro ';
  title = 'app';
  fromEvent ='';

  constructor() { 
    console.log("constructor display1");
    
}
  
  ngOnInit() {
    console.log("ngOnInit display1");
  }

  TextfromFunction() {
    this.property ='desde una funciòn ';
  }
  onUpdateFromEvent(event:any ){
    this.fromEvent = event.target.value;
    console.log(event);
    console.log(event.currentTarget.dataset.name);
  }

}
