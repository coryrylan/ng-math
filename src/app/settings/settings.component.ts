import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/distinctUntilChanged';

import { AppState } from './../store/app.state';
import {
  GameSettings,
  SET_DIFFICULTY,
  SET_GAME_TYPE,
  SET_MATH_TYPE
} from './../store/settings.reducer';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settings: Observable<GameSettings>;
  settingsForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>) {
    this.settingsForm = this.formBuilder.group({
      // gameType: ['0'],
      mathType: ['0'],
      difficulty: ['0']
    });
  }

  ngOnInit() {
    this.settings = this.store.select('settings');
    this.settings.subscribe(settings => {
      // this.settingsForm.controls['gameType'].setValue(settings.gameType.toString());
      this.settingsForm.controls['mathType'].setValue(settings.mathType.toString());
      this.settingsForm.controls['difficulty'].setValue(settings.difficulty.toString());
    });

    // this.settingsForm.controls['gameType'].valueChanges.distinctUntilChanged()
    //  .subscribe(value => this.store.dispatch({ type: SET_GAME_TYPE, payload: +value }));
    this.settingsForm.controls['mathType'].valueChanges.distinctUntilChanged()
      .subscribe(value => this.store.dispatch({ type: SET_MATH_TYPE, payload: +value }));
    this.settingsForm.controls['difficulty'].valueChanges.distinctUntilChanged()
      .subscribe(value => this.store.dispatch({ type: SET_DIFFICULTY, payload: +value }));
  }
}
