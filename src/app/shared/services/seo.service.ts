import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private defaultSEO: SEOData = {
    title: 'Il Giardino della Conoscenza - Associazione No Profit',
    description: 'Il Giardino della Conoscenza è un\'associazione no profit dedicata all\'educazione e alla crescita culturale della comunità. Offriamo corsi di formazione, supporto educativo e servizi comunitari.',
    keywords: 'associazione no profit, educazione, formazione, comunità, cultura, apprendimento, Milano, corsi, supporto educativo',
    image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop',
    type: 'website',
    author: 'Il Giardino della Conoscenza'
  };

  constructor(
    private meta: Meta,
    private title: Title,
    private router: Router
  ) {
    this.initializeRouterSEO();
  }

  private initializeRouterSEO() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateCanonicalUrl(event.url);
      });
  }

  updateSEO(seoData: Partial<SEOData>) {
    const data = { ...this.defaultSEO, ...seoData };
    
    // Update title
    this.title.setTitle(data.title);
    
    // Update meta tags
    this.updateMetaTag('description', data.description);
    this.updateMetaTag('keywords', data.keywords || '');
    this.updateMetaTag('author', data.author || '');
    
    // Open Graph tags
    this.updateMetaTag('og:title', data.title, 'property');
    this.updateMetaTag('og:description', data.description, 'property');
    this.updateMetaTag('og:image', data.image || '', 'property');
    this.updateMetaTag('og:url', data.url || '', 'property');
    this.updateMetaTag('og:type', data.type || 'website', 'property');
    this.updateMetaTag('og:site_name', 'Il Giardino della Conoscenza', 'property');
    this.updateMetaTag('og:locale', 'it_IT', 'property');
    
    // Twitter Card tags
    this.updateMetaTag('twitter:card', 'summary_large_image', 'name');
    this.updateMetaTag('twitter:title', data.title, 'name');
    this.updateMetaTag('twitter:description', data.description, 'name');
    this.updateMetaTag('twitter:image', data.image || '', 'name');
    
    // Article specific tags
    if (data.publishedTime) {
      this.updateMetaTag('article:published_time', data.publishedTime, 'property');
    }
    if (data.modifiedTime) {
      this.updateMetaTag('article:modified_time', data.modifiedTime, 'property');
    }
    
    // Robots meta tag
    this.updateMetaTag('robots', 'index, follow');
    
    // Language
    this.updateMetaTag('language', 'Italian');
  }

  private updateMetaTag(name: string, content: string, attribute: string = 'name') {
    if (content) {
      if (this.meta.getTag(`${attribute}="${name}"`)) {
        this.meta.updateTag({ [attribute]: name, content });
      } else {
        this.meta.addTag({ [attribute]: name, content });
      }
    }
  }

  private updateCanonicalUrl(url: string) {
    const canonicalUrl = `https://giardinoconoscenza.it${url}`;
    
    // Remove existing canonical link
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }
    
    // Add new canonical link
    const link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', canonicalUrl);
    document.head.appendChild(link);
    
    // Update og:url
    this.updateMetaTag('og:url', canonicalUrl, 'property');
  }

  generateStructuredData(type: 'Organization' | 'Article' | 'Event', data: any) {
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    let structuredData: any;

    switch (type) {
      case 'Organization':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Il Giardino della Conoscenza",
          "description": "Associazione no profit dedicata all'educazione e alla crescita culturale della comunità",
          "url": "https://giardinoconoscenza.it",
          "logo": "https://giardinoconoscenza.it/assets/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+39 02 1234 5678",
            "contactType": "customer service",
            "availableLanguage": "Italian"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Via della Conoscenza, 26",
            "addressLocality": "Milano",
            "postalCode": "20100",
            "addressCountry": "IT"
          },
          "sameAs": [
            "https://www.facebook.com/giardinoconoscenza",
            "https://www.instagram.com/giardinoconoscenza"
          ]
        };
        break;
      
      case 'Article':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.title,
          "description": data.description,
          "image": data.image,
          "author": {
            "@type": "Organization",
            "name": "Il Giardino della Conoscenza"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Il Giardino della Conoscenza",
            "logo": {
              "@type": "ImageObject",
              "url": "https://giardinoconoscenza.it/assets/logo.png"
            }
          },
          "datePublished": data.publishedTime,
          "dateModified": data.modifiedTime || data.publishedTime
        };
        break;
    }

    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }
}