import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { PageHeroComponent } from '../../components/page-hero/page-hero.component';
import { FacilityCardComponent } from '../../components/facility-card/facility-card.component';

import { SITE_TEXTS } from '../../shared/constants/texts';
import { FACILITIES_DATA } from '../../shared/constants/data';
import { SeoService } from '../../shared/services/seo.service';
import { SEO_DATA } from '../../shared/constants/seo-data';

@Component({
  selector: 'app-facilities',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    PageHeroComponent,
    FacilityCardComponent
  ],
  template: `
    <div class="pt-24">
      <!-- Hero Section -->
      <app-page-hero
        [title]="texts.FACILITIES.TITLE"
        [description]="texts.FACILITIES.HERO_DESCRIPTION">
      </app-page-hero>

      <!-- Facilities Grid -->
      <section class="section-padding bg-white">
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <app-facility-card 
              *ngFor="let facility of facilities" 
              [facility]="facility">
            </app-facility-card>
          </div>

          <div class="text-center mt-12">
            <button mat-raised-button class="btn-primary">
              {{ texts.FACILITIES.MORE_FACILITIES }}
            </button>
          </div>
        </div>
      </section>
    </div>
  `
})
export class FacilitiesComponent implements OnInit {
  texts = SITE_TEXTS;
  facilities = FACILITIES_DATA;

  constructor(private seoService: SeoService) {}

  ngOnInit() {
    this.seoService.updateSEO(SEO_DATA['facilities']);
  }
}