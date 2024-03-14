import { Component } from '@angular/core';
import { MastheadComponent } from '../../ui/masthead/masthead.component';
import { HeroComponent } from '../../ui/hero/hero.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [MastheadComponent, HeroComponent],
  templateUrl: './landing.component.html',
})
export class LandingComponent {}
