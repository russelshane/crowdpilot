import { Component } from '@angular/core';
import { MastheadComponent } from '../../ui/masthead/masthead.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MastheadComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent {}
