import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-c2',
  templateUrl: './exercice-c2.component.html',
  styleUrls: ['./exercice-c2.component.css']
})
export class ExerciceC2Component implements OnInit {

	utilisateur = {
	nom : 'toto',
	prenom : 'toto',
	courriel : 'toto',
	age : '',
	};

  constructor() { }

  ngOnInit() {
  }

}
