import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-hero.component.html',
  styleUrl: './page-hero.component.scss'
})
export class PageHeroComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() backgroundClass: string = 'bg-gradient-to-br from-primary-600 to-primary-800';
  @Input() isWhiteText: boolean = true;
}