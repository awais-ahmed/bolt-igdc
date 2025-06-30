import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHeroComponent } from '../../components/page-hero/page-hero.component';
import { ImageTextSectionComponent } from '../../components/image-text-section/image-text-section.component';
import { SectionTitleComponent } from '../../components/section-title/section-title.component';
import { ValueCardComponent } from '../../components/value-card/value-card.component';

import { SITE_TEXTS } from '../../shared/constants/texts';
import { SeoService } from '../../shared/services/seo.service';
import { SEO_DATA } from '../../shared/constants/seo-data';

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
  template: `
    <div class="pt-24">
      <!-- Hero Section -->
      <app-page-hero
        [title]="texts.ABOUT.TITLE"
        [description]="texts.ABOUT.HERO_DESCRIPTION">
      </app-page-hero>

      <!-- Mission Section -->
      <app-image-text-section
        [title]="texts.ABOUT.MISSION_TITLE"
        [paragraphs]="missionParagraphs"
        [imageUrl]="'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'"
        [imageAlt]="'La nostra missione'"
        [sectionClass]="'bg-white'">
      </app-image-text-section>

      <!-- Values Section -->
      <section class="section-padding bg-gray-50">
        <div class="max-w-7xl mx-auto">
          <app-section-title
            [title]="texts.ABOUT.VALUES_TITLE">
          </app-section-title>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <app-value-card
              [icon]="'school'"
              [title]="texts.ABOUT.VALUES.EDUCATION.TITLE"
              [description]="texts.ABOUT.VALUES.EDUCATION.DESCRIPTION">
            </app-value-card>

            <app-value-card
              [icon]="'people'"
              [title]="texts.ABOUT.VALUES.COMMUNITY.TITLE"
              [description]="texts.ABOUT.VALUES.COMMUNITY.DESCRIPTION">
            </app-value-card>

            <app-value-card
              [icon]="'favorite'"
              [title]="texts.ABOUT.VALUES.COMPASSION.TITLE"
              [description]="texts.ABOUT.VALUES.COMPASSION.DESCRIPTION">
            </app-value-card>
          </div>
        </div>
      </section>
    </div>
  `
})
export class AboutComponent implements OnInit {
  texts = SITE_TEXTS;

  missionParagraphs = [
    this.texts.ABOUT.MISSION_DESCRIPTION_1,
    this.texts.ABOUT.MISSION_DESCRIPTION_2
  ];

  constructor(private seoService: SeoService) {}

  ngOnInit() {
    this.seoService.updateSEO(SEO_DATA['about']);
  }
}