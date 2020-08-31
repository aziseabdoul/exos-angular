import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-b4',
  templateUrl: './exercice-b4.component.html',
  styleUrls: ['./exercice-b4.component.css']
})
export class ExerciceB4Component implements OnInit {

	activeHeadingNumber: number;

	setActiveHeadingNumber(n) {
	this.activeHeadingNumber = n;
	}

	checkActiveHeadingNumber(m) {
	if (this.activeHeadingNumber === m) {
	return true;
	} else {
	return false;
	}
	}

  constructor() { }

  ngOnInit() {
  }

}
