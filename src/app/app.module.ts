import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { ImportanceComponent } from './importance/importance.component';
import { OptionsComponent } from './options/options.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { ArgumentsComponent } from './arguments/arguments.component';
import { MoreDetailsComponent } from './more-details/more-details.component';
import { QuestionIndexComponent } from './question-index/question-index.component';
import { QuestionsService } from './questions.service';
import { ImportanceItemComponent } from './importance-item/importance-item.component';
import { OptionComponent } from './option/option.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    ImportanceComponent,
    OptionsComponent,
    QuestionListComponent,
    ArgumentsComponent,
    MoreDetailsComponent,
    QuestionIndexComponent,
    ImportanceItemComponent,
    OptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    QuestionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
