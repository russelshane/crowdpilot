import { Component } from '@angular/core';
import { MastheadComponent } from '../../ui/masthead/masthead.component';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [MastheadComponent],
  templateUrl: './features.component.html',
})
export class FeaturesComponent {}
