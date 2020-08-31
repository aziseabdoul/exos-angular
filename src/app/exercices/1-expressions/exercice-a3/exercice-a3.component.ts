import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-a3',
  templateUrl: './exercice-a3.component.html',
  styleUrls: ['./exercice-a3.component.css']
})
export class ExerciceA3Component implements OnInit {

	bjr = () => {return "Bonjour !"};

	division = (a,b) => {return a/b};

	array: string[];

	arr = (array) => {return array};

	

  constructor() { }

  ngOnInit() {
  }

}
