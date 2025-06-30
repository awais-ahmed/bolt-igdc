import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.scss'
})
export class SectionTitleComponent {
  @Input() title: string = '';
  @Input() highlightedText?: string;
  @Input() description?: string;
  @Input() containerClass: string = 'text-center mb-12';
  @Input() titleClass: string = 'text-4xl font-bold text-gray-800 mb-6';
  @Input() descriptionClass: string = 'text-xl text-gray-600 mb-8 leading-relaxed';
}