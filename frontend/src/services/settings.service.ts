import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Quiz} from '../models/quiz.model';
import {User} from '../models/user.model';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  /**
   * DEFAULT VALUES
   */
  textColor = 'black';
  backgroundColor = 'white';
  borderColor = 'white';
  styleSmall = '15px';
  styleMedium = '23px';
  styleBig = '30px';
  soundAuto = true;
  timer = true;

  /**
   * GUI PARAMS
   */

  settings: any;
  saveQuiz: any;
  settings$: BehaviorSubject<any> = new BehaviorSubject(this.settings);

  constructor(private userService: UserService) {
    this.initLastSettings();
    this.initLastQuiz();

  }


  changeColor(val1: any, val2: any) {
    this.settings.color = val1;
    this.settings['background-color'] = val2;
    this.settings['border-color'] = val1;
    localStorage.setItem('textColor', val1);
    localStorage.setItem('borderColor', val1);
    localStorage.setItem('backgroundColor', val2);
    this.updateUser();
    this.settings$.next(this.settings);
  }

  changeSize(textSize: string) {
    this.settings['font-size'] = textSize;
    localStorage.setItem('textSize', textSize);
    this.updateUser();
    this.settings$.next(this.settings);
  }



  swipeSoundAuto(value: boolean) {
    this.settings.soundAuto = value;
    console.log('service sound test ', value);
    localStorage.setItem('soundAuto', JSON.stringify(value));
    this.updateUser();
    this.settings$.next(this.settings);
  }

  changeTimer(value: boolean) {
    this.settings.timer = value;
    localStorage.setItem('timer', JSON.stringify(this.settings.timer));
    this.updateUser();
    this.settings$.next(this.settings);
  }

 initLastSettings() {
   this.settings = {color  : localStorage.getItem('textColor') != null ? localStorage.getItem('textColor') : this.textColor,
     'background-color' : localStorage.getItem('backgroundColor') != null ? localStorage.getItem('backgroundColor') : this.backgroundColor,
     'font-size' : localStorage.getItem('textSize') != null ? localStorage.getItem('textSize') : this.styleBig,
     'border-color': localStorage.getItem('borderColor') != null ? localStorage.getItem('borderColor') : this.borderColor,
     soundAuto : localStorage.getItem('soundAuto') != null ? JSON.parse(localStorage.getItem('soundAuto')) : this.soundAuto,
      timer : localStorage.getItem('timer') != null ? JSON.parse(localStorage.getItem('timer')) : this.timer };
   this.settings$.next(this.settings);
 }

  saveQuizProgress(save: any) {
    this.saveQuiz = save;
    localStorage.setItem('inProgress', JSON.stringify(this.saveQuiz));
  }

  quizDone() {
    this.saveQuiz = null;
    localStorage.removeItem('inProgress');
  }

  private initLastQuiz() {
    this.saveQuiz = JSON.parse(localStorage.getItem('inProgress'));
  }

  updateSettings(settings: any) {
    this.changeColor(settings.color, settings['background-color']);
    this.changeSize(settings['font-size']);
    this.swipeSoundAuto(JSON.parse(settings.soundAuto));
    this.changeTimer(JSON.parse(settings.timer));
  }

  setUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  removeUser() {
    localStorage.removeItem('user');
  }
  updateUser() {
    if (this.getUser() !== null) {
      const user = this.getUser();
      user.settings = this.settings;
      this.userService.updateSettings(user);
    }
  }
}

