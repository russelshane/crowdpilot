import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-sign-up',
  standalone: true,

  // Import 'LucideAngularModule' for Lucide Icons to work
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent {}
