import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { SITE_TEXTS } from '../../shared/constants/texts';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  texts = SITE_TEXTS;
  email = '';

  subscribeNewsletter() {
    if (this.email) {
      console.log('Newsletter subscription:', this.email);
      // Implement newsletter subscription logic
      this.email = '';
    }
  }
}