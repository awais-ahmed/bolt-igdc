import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-value-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './value-card.component.html',
  styleUrl: './value-card.component.scss'
})
export class ValueCardComponent {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}