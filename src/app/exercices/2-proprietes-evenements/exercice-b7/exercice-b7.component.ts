import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-b7',
  templateUrl: './exercice-b7.component.html',
  styleUrls: ['./exercice-b7.component.css']
})
export class ExerciceB7Component implements OnInit {

	styles = [
		{largeur : "10px", hauteur : "20px", couleur : "red"},
		{largeur : "20px", hauteur : "30px", couleur : "blue"},
		{largeur : "30px", hauteur : "40px", couleur : "green"}
	]

	increment(i) {
		this.styles[i].largeur = "100px";
	}

  constructor() { }

  ngOnInit() {
  }

}
