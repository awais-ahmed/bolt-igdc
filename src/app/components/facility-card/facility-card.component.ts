import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FacilityItem } from '../../shared/constants/data';

@Component({
  selector: 'app-facility-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './facility-card.component.html',
  styleUrl: './facility-card.component.scss'
})
export class FacilityCardComponent {
  @Input() facility!: FacilityItem;
}