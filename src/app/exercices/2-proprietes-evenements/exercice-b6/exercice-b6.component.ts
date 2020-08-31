import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-b6',
  templateUrl: './exercice-b6.component.html',
  styleUrls: ['./exercice-b6.component.css']
})
export class ExerciceB6Component implements OnInit {

	newsletter: boolean = false;
	cgu: boolean = false;
	valide: boolean;

  constructor() { }

  ngOnInit() {
  }

}
