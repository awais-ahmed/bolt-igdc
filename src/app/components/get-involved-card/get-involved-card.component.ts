import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GetInvolvedItem } from '../../shared/constants/data';

@Component({
  selector: 'app-get-involved-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './get-involved-card.component.html',
  styleUrl: './get-involved-card.component.scss'
})
export class GetInvolvedCardComponent {
  @Input() item!: GetInvolvedItem;
}