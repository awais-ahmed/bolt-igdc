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
import { SEO_DATA } from '../../shared/constants/seo-data';

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
  template: `
    <!-- Hero Section -->
    <app-hero-section
      [title]="texts.HOME.HERO_TITLE"
      [highlightedTitle]="texts.HOME.HERO_SUBTITLE"
      [description]="texts.HOME.HERO_DESCRIPTION"
      [backgroundImage]="'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'"
      [showButton]="true"
      [buttonText]="texts.NAV.DONATE_NOW"
      [isDonateButton]="true">
    </app-hero-section>

    <!-- What is IGDC Section -->
    <app-image-text-section
      [title]="texts.HOME.WHAT_IS_IGDC_TITLE"
      [paragraphs]="whatIsIgdcParagraphs"
      [imageUrl]="'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'"
      [imageAlt]="'Il nostro centro'"
      [showButton]="true"
      [buttonText]="texts.NAV.GET_INVOLVED">
    </app-image-text-section>

    <!-- Vision Section -->
    <app-image-text-section
      [title]="texts.HOME.VISION_TITLE"
      [paragraphs]="visionParagraphs"
      [imageUrl]="'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'"
      [imageAlt]="'La nostra visione'"
      [imageOnLeft]="false"
      [showButton]="true"
      [buttonText]="'STRUTTURE'"
      [sectionClass]="'bg-primary-800 text-white'"
      [titleClass]="'text-4xl font-bold mb-6'"
      [textClass]="'text-primary-100'"
      [buttonClass]="'bg-white text-primary-800 hover:bg-gray-100 font-medium px-6 py-3'">
    </app-image-text-section>

    <!-- Facilities Preview -->
    <section class="section-padding bg-white">
      <div class="max-w-7xl mx-auto text-center">
        <app-section-title
          [title]="'Strutture '"
          [highlightedText]="'IGDC'">
        </app-section-title>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <app-facility-card 
            *ngFor="let facility of facilitiesPreview" 
            [facility]="facility">
          </app-facility-card>
        </div>

        <button mat-raised-button class="btn-primary">
          {{ texts.HOME.MORE_FACILITIES }}
        </button>
      </div>
    </section>
  `
})
export class HomeComponent implements OnInit {
  texts = SITE_TEXTS;
  facilitiesPreview = FACILITIES_DATA.slice(0, 3);

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
    this.seoService.updateSEO(SEO_DATA['home']);
    this.seoService.generateStructuredData('Organization', {});
  }
}