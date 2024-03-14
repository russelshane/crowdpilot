import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { ExperiencesComponent } from './pages/experiences/experiences.component';
import { FeaturesComponent } from './pages/features/features.component';
import { AboutComponent } from './pages/about/about.component';

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
];
