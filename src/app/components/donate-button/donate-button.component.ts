import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-donate-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './donate-button.component.html',
  styleUrl: './donate-button.component.scss'
})
export class DonateButtonComponent {
  @Input() buttonText: string = 'Dona Ora';
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() showIcon: boolean = true;
  @Input() showArrow: boolean = false;
  @Input() icon: string = 'favorite';
  @Input() disabled: boolean = false;
  @Input() pulse: boolean = false;
  @Input() customClass: string = '';
  @Input() ariaLabel: string = 'Effettua una donazione';
  
  @Output() donateClick = new EventEmitter<void>();

  get buttonClass(): string {
    const baseClasses = ['donate-button'];
    
    // Variant classes
    if (this.variant === 'primary') {
      baseClasses.push('donate-primary');
    } else {
      baseClasses.push('donate-secondary');
    }
    
    // Size classes
    baseClasses.push(`donate-${this.size}`);
    
    // Pulse effect
    if (this.pulse) {
      baseClasses.push('donate-pulse');
    }
    
    // Custom classes
    if (this.customClass) {
      baseClasses.push(this.customClass);
    }
    
    return baseClasses.join(' ');
  }

  onDonateClick() {
    if (!this.disabled) {
      this.donateClick.emit();
      
      // Default behavior: redirect to donation page or show donation modal
      // This can be customized by parent components using the donateClick event
      if (this.donateClick.observers.length === 0) {
        this.handleDefaultDonation();
      }
    }
  }

  private handleDefaultDonation() {
    // Default donation handling
    // In a real application, this would redirect to a payment processor
    // or open a donation modal
    console.log('Donation button clicked - implement donation logic');
    
    // Example: redirect to external donation page
    // window.open('https://donate.example.com', '_blank');
    
    // Or show a modal/dialog for donation
    alert('Grazie per il tuo interesse! La funzionalità di donazione sarà disponibile presto.');
  }
}