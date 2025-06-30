import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BlogPost } from '../../shared/constants/data';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss'
})
export class BlogCardComponent {
  @Input() post!: BlogPost;
  @Input() showCategory: boolean = true;
  @Input() buttonText: string = 'Leggi di più';
  @Input() titleClass: string = 'text-xl font-semibold mb-3';
  @Input() excerptClass: string = 'text-gray-600 mb-4 text-sm';
  @Input() buttonClass: string = '';
  @Input() iconClass: string = '';
}