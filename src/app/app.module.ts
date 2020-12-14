import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {RegisterComponent} from './register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {SignInComponent} from './sign-in/sign-in.component';
import {ProfileInformationComponent} from './profile-information/profile-information.component';
import {MAT_DATE_LOCALE, MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {FormsModule} from '@angular/forms';
import {BecomeACoachComponent} from './become-a-coach/become-a-coach.component';
import {RequestSessionComponent} from './request-session/request-session.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { BecomeACoachComponent } from './become-a-coach/become-a-coach.component';
import { CoachProfileInformationComponent } from './coach-profile-information/coach-profile-information.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';





// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    SignInComponent,
    ProfileInformationComponent,
    BecomeACoachComponent,
    RequestSessionComponent,
    CoachProfileInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonToggleModule,
    HttpClientModule,
    MatGridListModule,
    MatOptionModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [{
    provide: MAT_DATE_LOCALE, useValue: 'en-GB'}, ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
