import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-a2',
  templateUrl: './exercice-a2.component.html',
  styleUrls: ['./exercice-a2.component.css']
})
export class ExerciceA2Component implements OnInit {

	promotions: number[] = [2015,2016,2017,2018,2019];

	classe = {
		nom : "UIRD",
		specialite : "Web",
		nbInscrits : 16
	};

  constructor() { }

  ngOnInit() {
  }

}
