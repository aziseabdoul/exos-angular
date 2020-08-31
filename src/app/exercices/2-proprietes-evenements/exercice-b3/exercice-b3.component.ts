import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-b3',
  templateUrl: './exercice-b3.component.html',
  styleUrls: ['./exercice-b3.component.css']
})
export class ExerciceB3Component implements OnInit {

	count: number = 0;
	mode: string ="increment";
	btnMsg: string = "Cliquez";

    action(){
        if(this.mode === "increment"){
        this.btnMsg="increment";
        
            this.increment();
            
        }else if(this.mode === "decrement"){
            this.btnMsg="decrement";
            this.decrement();

        }
    }

    decrement(){
    this.count--
    if(this.count <= 0){
            this.mode = "increment";
    }
}

increment() {
    this.count++
    if(this.count >= 10){
            this.mode = "decrement";
    }
}


  constructor() { }

  ngOnInit() {
  }

}
