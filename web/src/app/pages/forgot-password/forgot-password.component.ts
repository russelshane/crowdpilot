import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [LucideAngularModule, RouterLink, FormsModule, CommonModule],
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent {
  email: string = '';
  emailSent: boolean = false;
  confirmEmail: string = '';

  // On forgot password form submit
  onSubmit() {
    console.log('form: ', this.email);
    this.confirmEmail = this.email;
    this.emailSent = true;
  }
}
