import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { BlogCardComponent } from '../../components/blog-card/blog-card.component';

import { SITE_TEXTS } from '../../shared/constants/texts';
import { BLOG_POSTS_DATA, BlogPost } from '../../shared/constants/data';
import { SeoService } from '../../shared/services/seo.service';
import { SEO_DATA, BREADCRUMB_DATA } from '../../shared/constants/seo-data';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    BlogCardComponent
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit {
  texts = SITE_TEXTS;
  featuredPosts: BlogPost[] = BLOG_POSTS_DATA.slice(0, 3);
  blogPosts: BlogPost[] = BLOG_POSTS_DATA.slice(3, 6);
  instagramImages = [1, 2, 3, 4, 5, 6];

  constructor(private seoService: SeoService) {}

  ngOnInit() {
    // CONFIGURAZIONE SEO PER LA PAGINA BLOG
    
    // 1. Aggiorna i meta tag SEO
    this.seoService.updateSEO(SEO_DATA['blog']);
    
    // 2. Genera le breadcrumb
    this.seoService.generateBreadcrumbStructuredData(BREADCRUMB_DATA['blog']);
    
    // 3. Genera dati strutturati per il blog
    const blogStructuredData = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Blog - Il Giardino della Conoscenza",
      "description": "Notizie, riflessioni e storie dalla comunità del Giardino della Conoscenza",
      "url": "https://giardinoconoscenza.it/blog",
      "publisher": {
        "@type": "Organization",
        "name": "Il Giardino della Conoscenza"
      },
      "blogPost": this.featuredPosts.map(post => ({
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "image": post.image,
        "datePublished": post.date,
        "author": {
          "@type": "Organization",
          "name": "Il Giardino della Conoscenza"
        }
      }))
    };
    
    // Aggiunge i dati strutturati per il blog
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(blogStructuredData);
    document.head.appendChild(script);
  }
}