import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-a5',
  templateUrl: './exercice-a5.component.html',
  styleUrls: ['./exercice-a5.component.css']
})
export class ExerciceA5Component implements OnInit {

	inscrits = [
    {prenom:"prenom1", nom:"nom1", age:100},
    {prenom:"prenom2", nom:"nom2", age:101},

  ]; 

  constructor() { }

  ngOnInit() {
  }

}
