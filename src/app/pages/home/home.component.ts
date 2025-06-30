import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { ImageTextSectionComponent } from '../../components/image-text-section/image-text-section.component';
import { SectionTitleComponent } from '../../components/section-title/section-title.component';
import { FacilityCardComponent } from '../../components/facility-card/facility-card.component';

import { SITE_TEXTS } from '../../shared/constants/texts';
import { FACILITIES_DATA } from '../../shared/constants/data';
import { SeoService } from '../../shared/services/seo.service';
import { SEO_DATA, BREADCRUMB_DATA } from '../../shared/constants/seo-data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    MatButtonModule,
    HeroSectionComponent,
    ImageTextSectionComponent,
    SectionTitleComponent,
    FacilityCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  texts = SITE_TEXTS;
  facilitiesPreview = FACILITIES_DATA.slice(0, 3);

  // Preparazione dei paragrafi per le sezioni
  whatIsIgdcParagraphs = [
    this.texts.HOME.WHAT_IS_IGDC_DESCRIPTION_1,
    this.texts.HOME.WHAT_IS_IGDC_DESCRIPTION_2,
    this.texts.HOME.WHAT_IS_IGDC_DESCRIPTION_3
  ];

  visionParagraphs = [
    this.texts.HOME.VISION_DESCRIPTION_1,
    this.texts.HOME.VISION_DESCRIPTION_2,
    this.texts.HOME.VISION_DESCRIPTION_3,
    this.texts.HOME.VISION_DESCRIPTION_4,
    this.texts.HOME.VISION_DESCRIPTION_5,
    this.texts.HOME.VISION_DESCRIPTION_6
  ];

  constructor(private seoService: SeoService) {}

  ngOnInit() {
    // CONFIGURAZIONE SEO COMPLETA PER LA HOME PAGE
    
    // 1. Aggiorna tutti i meta tag SEO
    this.seoService.updateSEO(SEO_DATA['home']);
    
    // 2. Genera i dati strutturati per l'organizzazione
    // Questo aiuta Google a capire che siamo un'organizzazione
    this.seoService.generateStructuredData('Organization', {});
    
    // 3. Genera i dati strutturati per attività locale
    // Utile per le ricerche locali su Google Maps
    this.seoService.generateStructuredData('LocalBusiness', {});
    
    // 4. Genera le breadcrumb strutturate
    this.seoService.generateBreadcrumbStructuredData(BREADCRUMB_DATA['home']);
  }
}