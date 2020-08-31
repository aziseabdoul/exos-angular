import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-a7',
  templateUrl: './exercice-a7.component.html',
  styleUrls: ['./exercice-a7.component.css']
})
export class ExerciceA7Component implements OnInit {

	inputElementRef: HTMLInputElement;

	show(inputElementRef: HTMLInputElement){
    console.log(inputElementRef.value);
}

  constructor() { }

  ngOnInit() {
  }

}
