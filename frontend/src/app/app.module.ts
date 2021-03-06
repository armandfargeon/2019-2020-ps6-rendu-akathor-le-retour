import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { QuizListComponent } from './admin/quizzes/quiz-list/quiz-list.component';
import { QuizComponent } from './admin/quizzes/quiz/quiz.component';
import { HeaderComponent } from './header/header.component';
import { QuizFormComponent } from './admin/quizzes/quiz-form/quiz-form.component';
import {HttpClientModule} from '@angular/common/http';
import {QuizEditComponent} from './admin/quizzes/quiz-edit/quiz-edit.component';
import {AppRoutingModule} from './app.routing.module';
import {QuestionFormComponent} from './admin/quizzes/questions/question-form/question-form.component';
import {QuestionComponent} from './admin/quizzes/questions/question/question.component';
import {QuestionListComponent} from './admin/quizzes/questions/question-list/question-list.component';
import { UserListComponent } from './admin/users/user-list/user-list.component';
import { UserComponent } from './admin/users/user/user.component';
import { UserFormComponent } from './admin/users/user-form/user-form.component';
import { HomeComponent } from './admin/home/home.component';
import { AdministrationComponent } from './admin/administration/administration.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { SelectThemeComponent } from './game/select-theme/select-theme.component';
import { PlayQuizComponent } from './game/play/play-quiz/play-quiz.component';
import {PlayQuestionComponent} from './game/play/play-question/play-question.component';
import {PlayResultsComponent} from './game/play/play-results/play-results.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule, MatDialogModule} from '@angular/material';
import { DisplayComponent } from './game/display/display.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MatAutocompleteModule, MatInputModule} from '@angular/material';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { DisplayFailComponent } from './game/display-fail/display-fail.component';
import { HomeAdminComponent } from './admin/homeadmin/home-admin.component';
import { SettingsEditComponent } from './admin/users/settings-edit/settings-edit.component';
import { LoadUserComponent } from './game/load-user/load-user.component';
import { DisplayTimerComponent } from './game/display-timer/display-timer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    AppComponent,
    QuizListComponent,
    QuizComponent,
    HeaderComponent,
    QuizFormComponent,
    QuizEditComponent,
    QuestionComponent,
    QuestionFormComponent,
    QuestionListComponent,
    UserComponent,
    UserFormComponent,
    UserListComponent,
    HomeComponent,
    AdministrationComponent,
    SettingsComponent,
    SelectThemeComponent,
    PlayQuizComponent,
    PlayQuestionComponent,
    PlayResultsComponent,
    DisplayComponent,
    DisplayFailComponent,
    HomeAdminComponent,
    SettingsEditComponent,
    LoadUserComponent,
    DisplayTimerComponent,
  ],
  entryComponents: [DisplayComponent, DisplayFailComponent, DisplayTimerComponent],

  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule,
    MatAutocompleteModule,
    MatInputModule,
    MatTooltipModule,
    MatButtonModule,
    FormsModule,
    MatRadioModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      animationDuration: 300,    })
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
