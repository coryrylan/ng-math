import { Component, OnInit, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';

import { MathType } from './../store/settings.reducer';
import { MathService, MathProblem } from './../shared/math.service';
import { GameSettings } from './../store/settings.reducer';
import { AppState } from './../store/app.state';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  mathProblem: MathProblem;
  settings: GameSettings;
  showValue = true;

  constructor(private mathService: MathService, private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('settings').subscribe((settings: GameSettings) => {
      this.settings = settings;
      this.getNextProblem();
    });
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.getNextProblem();
    }
  }

  getNextProblem() {
    if (this.showValue) {
      this.showValue = false;

      switch (this.settings.mathType) {
        case MathType.addition:
          this.mathProblem = this.mathService.getAdditionProblem(this.settings.difficulty);
          break;
        case MathType.subtraction:
          this.mathProblem = this.mathService.getSubtractionProblem(this.settings.difficulty);
          break;
        case MathType.multiplication:
          this.mathProblem = this.mathService.getMultiplicationProblem(this.settings.difficulty);
          break;
        case MathType.division:
          this.mathProblem = this.mathService.getDivisionProblem(this.settings.difficulty);
          break;
        default:
          this.mathProblem = this.mathService.getRandomProblem(this.settings.difficulty);
          break;
      }
    } else {
      this.showValue = true;
    }
  }
}
