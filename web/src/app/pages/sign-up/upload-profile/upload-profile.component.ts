import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-upload-profile',
  standalone: true,
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './upload-profile.component.html',
})
export class UploadProfileComponent {}
