import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {ProfileInformationComponent} from './profile-information/profile-information.component';
import {BecomeACoachComponent} from './become-a-coach/become-a-coach.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'signin', component: SignInComponent},
    {path: 'user/:id', component: ProfileInformationComponent},
    {path: 'becomeacoach', component: BecomeACoachComponent}
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
