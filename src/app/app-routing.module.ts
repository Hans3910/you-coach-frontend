import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {ProfileInformationComponent} from './profile-information/profile-information.component';
import {BecomeACoachComponent} from './become-a-coach/become-a-coach.component';
import {RequestSessionComponent} from './request-session/request-session.component';
import {CoachProfileInformationComponent} from './coach-profile-information/coach-profile-information.component';
import {CoachRequestProfileChangeComponent} from './coach-request-profile-change/coach-request-profile-change.component';
import {CoachOverviewComponent} from './coach-overview/coach-overview.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'signin', component: SignInComponent},
    {path: 'user/:id', component: ProfileInformationComponent},
    {path: 'becomeacoach', component: BecomeACoachComponent},
    {path: 'requestsession', component: RequestSessionComponent},
  {path: 'coach/overview', component: CoachOverviewComponent},
    {path: 'coach/requestprofilechange', component: CoachRequestProfileChangeComponent},
    {path: 'coach/:id', component: CoachProfileInformationComponent}
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
