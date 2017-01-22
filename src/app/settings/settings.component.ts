import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from './../store/app.state';
import { SET_DIFFICULTY, GameDifficulty} from './../store/settings.reducer';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settings: Observable<{}>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.settings = this.store.select('settings');
  }

  setDifficulty() {
    this.store.dispatch({ type: SET_DIFFICULTY, payload: GameDifficulty.medium });
  }
}
