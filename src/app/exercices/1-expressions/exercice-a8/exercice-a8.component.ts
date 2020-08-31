import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-exercice-a8',
  templateUrl: './exercice-a8.component.html',
  styleUrls: ['./exercice-a8.component.css']
})
export class ExerciceA8Component implements OnInit {

 voitures = [
	{modele:"clio", puissance:"4cv", prix:15000, annee:1325372400},
	{modele:"captur", puissance:"5cv", prix:20000, annee:1388530800},
	{modele:"megane", puissance:"6cv", prix:25000, annee:1451602800},

	];

  constructor() { }

  ngOnInit() {
  }

}
