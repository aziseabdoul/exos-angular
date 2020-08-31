import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-b5',
  templateUrl: './exercice-b5.component.html',
  styleUrls: ['./exercice-b5.component.css']
})
export class ExerciceB5Component implements OnInit {

	prop: number;

	x: string;
	y: string;

  onKeyUpEvent(event: KeyboardEvent): void {
   this.prop = event.keyCode;
}

	suivre(x, y) {
	this.x = x;
	this.y = y;
	return x + y;
	}

  constructor() { }

  ngOnInit() {
  }

}
