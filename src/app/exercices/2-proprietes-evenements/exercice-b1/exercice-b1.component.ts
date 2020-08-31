import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-b1',
  templateUrl: './exercice-b1.component.html',
  styleUrls: ['./exercice-b1.component.css']
})
export class ExerciceB1Component implements OnInit {

	chien: string = "https://static.actu.fr/uploads/2019/10/chien-854x599.jpg";

	chats: string[] = ["https://www.zooplus.fr/magazine/wp-content/uploads/2019/06/comprendre-le-langage-des-chats-768x576.jpg", 
	"https://www.sciencesetavenir.fr/assets/img/2020/01/17/cover-r4x3w1000-5e21bf77a1547-chartreux-3298051-1920.jpg", 
	"https://assets.afcdn.com/story/20150323/621527_w980h638c1cx1185cy841.jpg"];

	cats = [
	 {imgUrl:"https://www.zooplus.fr/magazine/wp-content/uploads/2019/06/comprendre-le-langage-des-chats-768x576.jpg"},
	 {imgUrl:"https://www.sciencesetavenir.fr/assets/img/2020/01/17/cover-r4x3w1000-5e21bf77a1547-chartreux-3298051-1920.jpg"},
	 {imgUrl:"https://assets.afcdn.com/story/20150323/621527_w980h638c1cx1185cy841.jpg"}
	]; 

  constructor() { }

  ngOnInit() {
  }

}
