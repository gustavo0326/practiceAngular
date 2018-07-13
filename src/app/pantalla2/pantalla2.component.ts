import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pantalla2',
  templateUrl: './pantalla2.component.html',
  styleUrls: ['./pantalla2.component.css']
})

export class Pantalla2Component implements OnInit {
  index=1;
  url="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Naruto_logo.svg/1200px-Naruto_logo.svg.png"
  anime ='Naruto';
  trama ='En ese punto Sasuke intenta matar a los 5 kages, argumentando que desea formar un nuevo mundo sin el sistema ninja dando a conocer que lo que desea es una revolución, es vencido por Naruto en la batalla final de la historia, después de esto y con Kakashi como el Sexto Hokage';
  
  constructor() { 
    console.log("constructor");
    
}
  
  ngOnInit() {
    console.log("ngOnInit");
  }

  OnChanges(){
    console.log("OnChanges");
  }
  ngDoCheck(){
    //console.log("ngDoCheck");
    if (this.url =="https://vignette.wikia.nocookie.net/gamefactory/images/2/25/Naruto-Shippuden-logo.png/revision/latest?cb=20151019075228") {
      setTimeout(() => {
      this.url ="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Naruto_logo.svg/1200px-Naruto_logo.svg.png";
      },6000);
    }else{
      setTimeout(() => {
        this.url ="https://vignette.wikia.nocookie.net/gamefactory/images/2/25/Naruto-Shippuden-logo.png/revision/latest?cb=20151019075228";
        },6000);
    }
    
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit()");
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit");
  }
  

}
