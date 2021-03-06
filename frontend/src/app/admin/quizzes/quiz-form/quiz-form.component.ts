import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { QuizService } from '../../../../services/quiz.service';
import { Quiz} from '../../../../models/quiz.model';
import {Theme} from '../../../../models/theme.model';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})
export class QuizFormComponent implements OnInit {



  // Note: We are using here ReactiveForms to create our form. Be careful when you look for some documentation to
  // avoid TemplateDrivenForm (another type of form)

  /**
   * QuizForm: Object which manages the form in our component.
   * More information about Reactive Forms: https://angular.io/guide/reactive-forms#step-1-creating-a-formgroup-instance
   */
  public quizForm: FormGroup;
  keys = Object.keys;
  public difficulties: string[] = ['Facile', 'Moyen', 'Difficile'];
  submitted = false;
  displayAddTheme: boolean;
  addNewTheme: string;
  currentThemeSelected: string  ;
  public themeList: Theme[] = [];

  constructor(public formBuilder: FormBuilder, public quizService: QuizService) {
    // Form creation
    this.quizForm = this.formBuilder.group({
      name: ['', Validators.required],
      theme: [''],
      difficulte: ['', Validators.required],
    });
    // You can also add validators to your inputs such as required, maxlength or even create your own validator!
    // More information: https://angular.io/guide/reactive-forms#simple-form-validation
    // Advanced validation: https://angular.io/guide/form-validation#reactive-form-validation
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.quizForm.invalid) {
      return;
    }
    let addTheme = true;
    for (const t of this.themeList) {
      if (t.name === this.currentThemeSelected) {
        addTheme = false;
      }
    }
    if (addTheme) {
      this.quizService.addTheme({name: this.quizForm.get('theme').value});
    }
    this.addQuiz();

  }

  onReset() {
    this.submitted = false;
    this.quizForm.reset();
  }

  get f() { return this.quizForm.controls; }

  ngOnInit() {
    this.quizService.themes$.subscribe((themes) => this.themeList = themes);

  }

  addQuiz() {
    // We retrieve here the quiz object from the quizForm and we cast the type "as Quiz".
    const quizToCreate: Quiz = this.quizForm.getRawValue() as Quiz;
    const theme: Theme = {name: quizToCreate.theme} as unknown as Theme;
    quizToCreate.theme = theme;
    // Do you need to log your object here in your class? Uncomment the code below
    // and open your console in your browser by pressing F12 and choose the tab "Console".
    // You will see your quiz object when you click on the create button.
    console.log('Add quiz: ', quizToCreate);

    // Now, add your quiz in the list!
    this.quizService.addQuiz(quizToCreate);
    this.initializeQuizForm();
  }

  private initializeQuizForm() {
    this.quizForm = this.formBuilder.group({
      name: ['', Validators.required],
      theme: [''],
      difficulte: ['', Validators.required],
    });
    this.submitted = false ;
  }

  addTheme() {
    this.displayAddTheme = true;
    for (const t of this.themeList) {
      if (t.name === this.currentThemeSelected) {
        this.displayAddTheme = false;
      }
    }
  }
}

