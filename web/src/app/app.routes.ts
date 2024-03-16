import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { ExperiencesComponent } from './pages/experiences/experiences.component';
import { FeaturesComponent } from './pages/features/features.component';
import { AboutComponent } from './pages/about/about.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { UploadProfileComponent } from './pages/upload-profile/upload-profile.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';  

export const routes: Routes = [
  // Landing page route. Do not add components inside to the app
  // component other than the application router.
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'experiences',
    component: ExperiencesComponent,
  },
  {
    path: 'features',
    component: FeaturesComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'upload-profile',
    component: UploadProfileComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  }
 
];
