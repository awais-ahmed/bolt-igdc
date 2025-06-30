import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { DonateButtonComponent } from '../donate-button/donate-button.component';

@Component({
  selector: 'app-image-text-section',
  standalone: true,
  imports: [CommonModule, MatButtonModule, DonateButtonComponent],
  templateUrl: './image-text-section.component.html',
  styleUrl: './image-text-section.component.scss'
})
export class ImageTextSectionComponent {
  @Input() title: string = '';
  @Input() highlightedTitle?: string;
  @Input() paragraphs: string[] = [];
  @Input() imageUrl: string = '';
  @Input() imageAlt: string = '';
  @Input() imageOnLeft: boolean = false;
  @Input() showButton: boolean = false;
  @Input() buttonText: string = '';
  @Input() isDonateButton: boolean = false;
  @Input() donateVariant: 'primary' | 'secondary' = 'primary';
  @Input() sectionClass: string = 'bg-gray-50';
  @Input() titleClass: string = 'text-4xl font-bold text-gray-800 mb-6';
  @Input() textClass: string = 'text-gray-600';
  @Input() buttonClass: string = 'btn-primary';

  onButtonClick() {
    console.log('Image text section button clicked');
  }
}