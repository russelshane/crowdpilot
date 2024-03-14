import { Component } from '@angular/core';
import { MastheadComponent } from '../../ui/masthead/masthead.component';
import { HeroComponent } from '../../ui/hero/hero.component';
import { SearchComponent } from '../../ui/search/search.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [MastheadComponent, HeroComponent, SearchComponent],
  templateUrl: './landing.component.html',
})
export class LandingComponent {}
