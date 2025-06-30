import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHeroComponent } from '../../components/page-hero/page-hero.component';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';

import { SITE_TEXTS } from '../../shared/constants/texts';
import { SERVICES_DATA } from '../../shared/constants/data';
import { SeoService } from '../../shared/services/seo.service';
import { SEO_DATA } from '../../shared/constants/seo-data';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    PageHeroComponent,
    ServiceCardComponent
  ],
  template: `
    <div class="pt-24">
      <!-- Hero Section -->
      <app-page-hero
        [title]="texts.SERVICES.TITLE"
        [description]="texts.SERVICES.HERO_DESCRIPTION">
      </app-page-hero>

      <!-- Services Grid -->
      <section class="section-padding bg-white">
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <app-service-card 
              *ngFor="let service of services" 
              [service]="service"
              [buttonText]="texts.SERVICES.DISCOVER_MORE">
            </app-service-card>
          </div>
        </div>
      </section>
    </div>
  `
})
export class ServicesComponent implements OnInit {
  texts = SITE_TEXTS;
  services = SERVICES_DATA;

  constructor(private seoService: SeoService) {}

  ngOnInit() {
    this.seoService.updateSEO(SEO_DATA['services']);
  }
}