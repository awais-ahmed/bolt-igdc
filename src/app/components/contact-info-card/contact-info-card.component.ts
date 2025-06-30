import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact-info-card',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './contact-info-card.component.html',
  styleUrl: './contact-info-card.component.scss'
})
export class ContactInfoCardComponent {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() content: string = '';
}