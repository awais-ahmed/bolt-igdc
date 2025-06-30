import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { PageHeroComponent } from '../../components/page-hero/page-hero.component';
import { SectionTitleComponent } from '../../components/section-title/section-title.component';
import { GetInvolvedCardComponent } from '../../components/get-involved-card/get-involved-card.component';

import { SITE_TEXTS } from '../../shared/constants/texts';
import { GET_INVOLVED_DATA } from '../../shared/constants/data';
import { SeoService } from '../../shared/services/seo.service';
import { SEO_DATA, BREADCRUMB_DATA } from '../../shared/constants/seo-data';

@Component({
  selector: 'app-get-involved',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    PageHeroComponent,
    SectionTitleComponent,
    GetInvolvedCardComponent
  ],
  templateUrl: './get-involved.component.html',
  styleUrl: './get-involved.component.scss'
})
export class GetInvolvedComponent implements OnInit {
  texts = SITE_TEXTS;
  getInvolvedItems = GET_INVOLVED_DATA;

  constructor(private seoService: SeoService) {}

  ngOnInit() {
    // CONFIGURAZIONE SEO PER LA PAGINA COINVOLGITI
    
    // 1. Aggiorna i meta tag SEO
    this.seoService.updateSEO(SEO_DATA['getInvolved']);
    
    // 2. Genera le breadcrumb
    this.seoService.generateBreadcrumbStructuredData(BREADCRUMB_DATA['getInvolved']);
    
    // 3. Genera dati strutturati per le opportunità di volontariato
    const volunteerStructuredData = {
      "@context": "https://schema.org",
      "@type": "VolunteerOpportunity",
      "name": "Opportunità di Volontariato - Il Giardino della Conoscenza",
      "description": "Unisciti a noi come volontario e aiuta la comunità attraverso l'educazione e il supporto sociale",
      "organizer": {
        "@type": "Organization",
        "name": "Il Giardino della Conoscenza"
      },
      "location": {
        "@type": "Place",
        "name": "Milano",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Milano",
          "addressCountry": "IT"
        }
      },
      "skills": this.getInvolvedItems.map(item => item.title)
    };
    
    // Aggiunge i dati strutturati per il volontariato
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(volunteerStructuredData);
    document.head.appendChild(script);
  }
}