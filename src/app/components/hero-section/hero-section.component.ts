import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { DonateButtonComponent } from '../donate-button/donate-button.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, MatButtonModule, DonateButtonComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  @Input() title: string = '';
  @Input() highlightedTitle?: string;
  @Input() description: string = '';
  @Input() backgroundImage?: string;
  @Input() backgroundClass: string = 'bg-gradient-to-br from-primary-800 to-primary-900';
  @Input() showOverlay: boolean = true;
  @Input() isWhiteText: boolean = true;
  @Input() showButton: boolean = false;
  @Input() buttonText: string = '';
  @Input() isDonateButton: boolean = false;

  onButtonClick() {
    // Emit event or handle button click
    console.log('Hero button clicked');
  }
}