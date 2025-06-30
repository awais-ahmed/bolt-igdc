import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { PageHeroComponent } from '../../components/page-hero/page-hero.component';
import { SectionTitleComponent } from '../../components/section-title/section-title.component';
import { GetInvolvedCardComponent } from '../../components/get-involved-card/get-involved-card.component';

import { SITE_TEXTS } from '../../shared/constants/texts';
import { GET_INVOLVED_DATA } from '../../shared/constants/data';
import { SeoService } from '../../shared/services/seo.service';
import { SEO_DATA } from '../../shared/constants/seo-data';

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
  template: `
    <div class="pt-24">
      <!-- Hero Section -->
      <app-page-hero
        [title]="texts.GET_INVOLVED.TITLE"
        [description]="texts.GET_INVOLVED.HERO_DESCRIPTION">
      </app-page-hero>

      <!-- Ways to Get Involved -->
      <section class="section-padding bg-white">
        <div class="max-w-7xl mx-auto">
          <app-section-title
            [title]="texts.GET_INVOLVED.HOW_TO_HELP_TITLE">
          </app-section-title>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <app-get-involved-card 
              *ngFor="let item of getInvolvedItems" 
              [item]="item">
            </app-get-involved-card>
          </div>
        </div>
      </section>

      <!-- Call to Action -->
      <section class="section-padding bg-gray-50">
        <div class="max-w-4xl mx-auto text-center">
          <app-section-title
            [title]="texts.GET_INVOLVED.CTA_TITLE"
            [description]="texts.GET_INVOLVED.CTA_DESCRIPTION">
          </app-section-title>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button mat-raised-button class="btn-primary text-lg px-8 py-4">
              {{ texts.GET_INVOLVED.CONTACT_NOW }}
            </button>
            <button mat-raised-button class="btn-secondary text-lg px-8 py-4">
              {{ texts.GET_INVOLVED.LEARN_MORE }}
            </button>
          </div>
        </div>
      </section>
    </div>
  `
})
export class GetInvolvedComponent implements OnInit {
  texts = SITE_TEXTS;
  getInvolvedItems = GET_INVOLVED_DATA;

  constructor(private seoService: SeoService) {}

  ngOnInit() {
    this.seoService.updateSEO(SEO_DATA['getInvolved']);
  }
}