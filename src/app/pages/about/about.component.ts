import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHeroComponent } from '../../components/page-hero/page-hero.component';
import { ImageTextSectionComponent } from '../../components/image-text-section/image-text-section.component';
import { SectionTitleComponent } from '../../components/section-title/section-title.component';
import { ValueCardComponent } from '../../components/value-card/value-card.component';

import { SITE_TEXTS } from '../../shared/constants/texts';
import { SeoService } from '../../shared/services/seo.service';
import { SEO_DATA, BREADCRUMB_DATA } from '../../shared/constants/seo-data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    PageHeroComponent,
    ImageTextSectionComponent,
    SectionTitleComponent,
    ValueCardComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  texts = SITE_TEXTS;

  // Preparazione dei paragrafi per la sezione missione
  missionParagraphs = [
    this.texts.ABOUT.MISSION_DESCRIPTION_1,
    this.texts.ABOUT.MISSION_DESCRIPTION_2
  ];

  constructor(private seoService: SeoService) {}

  ngOnInit() {
    // CONFIGURAZIONE SEO PER LA PAGINA CHI SIAMO
    
    // 1. Aggiorna i meta tag SEO specifici per questa pagina
    this.seoService.updateSEO(SEO_DATA['about']);
    
    // 2. Genera le breadcrumb per la navigazione
    this.seoService.generateBreadcrumbStructuredData(BREADCRUMB_DATA['about']);
    
    // 3. Genera dati strutturati per l'organizzazione
    // Rinforza le informazioni sull'organizzazione per i motori di ricerca
    this.seoService.generateStructuredData('Organization', {
      description: this.texts.ABOUT.MISSION_DESCRIPTION_1
    });
  }
}