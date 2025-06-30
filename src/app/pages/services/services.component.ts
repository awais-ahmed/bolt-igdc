import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHeroComponent } from '../../components/page-hero/page-hero.component';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';

import { SITE_TEXTS } from '../../shared/constants/texts';
import { SERVICES_DATA } from '../../shared/constants/data';
import { SeoService } from '../../shared/services/seo.service';
import { SEO_DATA, BREADCRUMB_DATA } from '../../shared/constants/seo-data';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    PageHeroComponent,
    ServiceCardComponent
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {
  texts = SITE_TEXTS;
  services = SERVICES_DATA;

  constructor(private seoService: SeoService) {}

  ngOnInit() {
    // CONFIGURAZIONE SEO PER LA PAGINA SERVIZI
    
    // 1. Aggiorna i meta tag SEO
    this.seoService.updateSEO(SEO_DATA['services']);
    
    // 2. Genera le breadcrumb
    this.seoService.generateBreadcrumbStructuredData(BREADCRUMB_DATA['services']);
    
    // 3. Genera dati strutturati per i servizi
    // Questo può aiutare Google a mostrare i nostri servizi nei risultati
    const servicesStructuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Educational Services",
      "provider": {
        "@type": "Organization",
        "name": "Il Giardino della Conoscenza"
      },
      "areaServed": "Milano, Italy",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Educational Services",
        "itemListElement": this.services.map(service => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service.title,
            "description": service.description
          }
        }))
      }
    };
    
    // Aggiunge manualmente i dati strutturati per i servizi
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(servicesStructuredData);
    document.head.appendChild(script);
  }
}