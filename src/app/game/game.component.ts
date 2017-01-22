import { Component, OnInit } from '@angular/core';

import { MathService, MathProblem } from './../shared/math.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  mathProblem: MathProblem;
  showValue = false;

  constructor(private mathService: MathService) { }

  ngOnInit() {
    this.getNextProblem();
  }

  getNextProblem() {
    this.showValue = false;
    this.mathProblem = this.mathService.getAdditionProblem();
  }
}
