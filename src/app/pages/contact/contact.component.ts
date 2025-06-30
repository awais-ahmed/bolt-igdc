import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';

import { ContactInfoCardComponent } from '../../components/contact-info-card/contact-info-card.component';

import { SITE_TEXTS } from '../../shared/constants/texts';
import { FAQ_DATA } from '../../shared/constants/data';
import { SeoService } from '../../shared/services/seo.service';
import { SEO_DATA, BREADCRUMB_DATA } from '../../shared/constants/seo-data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule, 
    MatCardModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule, 
    MatButtonModule, 
    MatCheckboxModule, 
    MatExpansionModule,
    ContactInfoCardComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  texts = SITE_TEXTS;
  faqs = FAQ_DATA;
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private seoService: SeoService
  ) {
    // Inizializzazione del form di contatto
    this.contactForm = this.fb.group({
      title: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      phone: ['', Validators.required],
      message: [''],
      agreement: [false, Validators.requiredTrue]
    });
  }

  ngOnInit() {
    // CONFIGURAZIONE SEO PER LA PAGINA CONTATTI
    
    // 1. Aggiorna i meta tag SEO
    this.seoService.updateSEO(SEO_DATA['contact']);
    
    // 2. Genera le breadcrumb
    this.seoService.generateBreadcrumbStructuredData(BREADCRUMB_DATA['contact']);
    
    // 3. Genera dati strutturati per le FAQ
    // Questo può far apparire le FAQ direttamente nei risultati di ricerca
    this.seoService.generateFAQStructuredData(this.faqs);
    
    // 4. Genera dati strutturati per i contatti
    const contactStructuredData = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contatti - Il Giardino della Conoscenza",
      "description": "Contatta il Giardino della Conoscenza per informazioni sui nostri servizi e programmi",
      "mainEntity": {
        "@type": "Organization",
        "name": "Il Giardino della Conoscenza",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+39 02 1234 5678",
          "contactType": "customer service",
          "email": "info@giardinoconoscenza.it",
          "availableLanguage": "Italian"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Via della Conoscenza, 26",
          "addressLocality": "Milano",
          "postalCode": "20100",
          "addressCountry": "IT"
        }
      }
    };
    
    // Aggiunge i dati strutturati per i contatti
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(contactStructuredData);
    document.head.appendChild(script);
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      alert(this.texts.CONTACT.SUCCESS_MESSAGE);
      this.contactForm.reset();
    }
  }
}