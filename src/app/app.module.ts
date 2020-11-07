import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListstudentComponent } from './liststudent/liststudent.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatestudentComponent } from './createstudent/createstudent.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListstudentComponent,
    CreatestudentComponent,
    UpdatestudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
