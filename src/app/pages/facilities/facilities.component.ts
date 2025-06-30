import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { PageHeroComponent } from '../../components/page-hero/page-hero.component';
import { FacilityCardComponent } from '../../components/facility-card/facility-card.component';

import { SITE_TEXTS } from '../../shared/constants/texts';
import { FACILITIES_DATA } from '../../shared/constants/data';
import { SeoService } from '../../shared/services/seo.service';
import { SEO_DATA, BREADCRUMB_DATA } from '../../shared/constants/seo-data';

@Component({
  selector: 'app-facilities',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    PageHeroComponent,
    FacilityCardComponent
  ],
  templateUrl: './facilities.component.html',
  styleUrl: './facilities.component.scss'
})
export class FacilitiesComponent implements OnInit {
  texts = SITE_TEXTS;
  facilities = FACILITIES_DATA;

  constructor(private seoService: SeoService) {}

  ngOnInit() {
    // CONFIGURAZIONE SEO PER LA PAGINA STRUTTURE
    
    // 1. Aggiorna i meta tag SEO
    this.seoService.updateSEO(SEO_DATA['facilities']);
    
    // 2. Genera le breadcrumb
    this.seoService.generateBreadcrumbStructuredData(BREADCRUMB_DATA['facilities']);
    
    // 3. Genera dati strutturati per le strutture/luoghi
    const facilitiesStructuredData = {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "Il Giardino della Conoscenza - Strutture",
      "description": "Centro educativo con moderne strutture per l'apprendimento e la crescita della comunità",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Via della Conoscenza, 26",
        "addressLocality": "Milano",
        "postalCode": "20100",
        "addressCountry": "IT"
      },
      "amenityFeature": this.facilities.map(facility => ({
        "@type": "LocationFeatureSpecification",
        "name": facility.title,
        "value": facility.description
      }))
    };
    
    // Aggiunge i dati strutturati per le strutture
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(facilitiesStructuredData);
    document.head.appendChild(script);
  }
}