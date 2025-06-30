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

  /**
   * INIZIALIZZAZIONE SEO
   * Configura l'ascolto dei cambi di rotta per aggiornare automaticamente
   * l'URL canonico quando l'utente naviga tra le pagine
   */
  private initializeRouterSEO() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateCanonicalUrl(event.url);
      });
  }

  /**
   * AGGIORNAMENTO SEO PRINCIPALE
   * Questa è la funzione principale che ogni pagina dovrebbe chiamare
   * nel suo ngOnInit() per configurare tutti i meta tag SEO
   * 
   * @param seoData - Dati SEO specifici per la pagina
   */
  updateSEO(seoData: Partial<SEOData>) {
    // Combina i dati di default con quelli specifici della pagina
    const data = { ...this.defaultSEO, ...seoData };
    
    // 1. TITLE TAG - Il più importante per SEO
    this.title.setTitle(data.title);
    
    // 2. META TAG FONDAMENTALI
    this.updateMetaTag('description', data.description);
    this.updateMetaTag('keywords', data.keywords || '');
    this.updateMetaTag('author', data.author || '');
    
    // 3. OPEN GRAPH TAGS (per Facebook, LinkedIn, etc.)
    // Questi tag controllano come appare il link quando condiviso sui social
    this.updateMetaTag('og:title', data.title, 'property');
    this.updateMetaTag('og:description', data.description, 'property');
    this.updateMetaTag('og:image', data.image || '', 'property');
    this.updateMetaTag('og:url', data.url || '', 'property');
    this.updateMetaTag('og:type', data.type || 'website', 'property');
    this.updateMetaTag('og:site_name', 'Il Giardino della Conoscenza', 'property');
    this.updateMetaTag('og:locale', 'it_IT', 'property');
    
    // 4. TWITTER CARD TAGS (per Twitter)
    // Controllano come appare il link quando condiviso su Twitter
    this.updateMetaTag('twitter:card', 'summary_large_image', 'name');
    this.updateMetaTag('twitter:title', data.title, 'name');
    this.updateMetaTag('twitter:description', data.description, 'name');
    this.updateMetaTag('twitter:image', data.image || '', 'name');
    
    // 5. ARTICLE TAGS (per blog post e articoli)
    if (data.publishedTime) {
      this.updateMetaTag('article:published_time', data.publishedTime, 'property');
    }
    if (data.modifiedTime) {
      this.updateMetaTag('article:modified_time', data.modifiedTime, 'property');
    }
    
    // 6. ROBOTS META TAG - Dice ai motori di ricerca cosa fare
    this.updateMetaTag('robots', 'index, follow');
    
    // 7. LANGUAGE TAG
    this.updateMetaTag('language', 'Italian');
  }

  /**
   * HELPER PER AGGIORNARE META TAG
   * Funzione di utilità che aggiorna o crea meta tag
   * 
   * @param name - Nome del meta tag
   * @param content - Contenuto del meta tag
   * @param attribute - Tipo di attributo ('name' o 'property')
   */
  private updateMetaTag(name: string, content: string, attribute: string = 'name') {
    if (content) {
      // Controlla se il tag esiste già
      if (this.meta.getTag(`${attribute}="${name}"`)) {
        // Aggiorna il tag esistente
        this.meta.updateTag({ [attribute]: name, content });
      } else {
        // Crea un nuovo tag
        this.meta.addTag({ [attribute]: name, content });
      }
    }
  }

  /**
   * AGGIORNAMENTO URL CANONICO
   * L'URL canonico dice ai motori di ricerca qual è la versione "ufficiale"
   * di una pagina, evitando problemi di contenuto duplicato
   * 
   * @param url - URL della pagina corrente
   */
  private updateCanonicalUrl(url: string) {
    const canonicalUrl = `https://giardinoconoscenza.it${url}`;
    
    // Rimuove il link canonico esistente
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }
    
    // Aggiunge il nuovo link canonico
    const link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', canonicalUrl);
    document.head.appendChild(link);
    
    // Aggiorna anche og:url per coerenza
    this.updateMetaTag('og:url', canonicalUrl, 'property');
  }

  /**
   * STRUCTURED DATA (Schema.org)
   * I dati strutturati aiutano i motori di ricerca a capire meglio
   * il contenuto del sito e possono generare rich snippets nei risultati
   * 
   * @param type - Tipo di schema (Organization, Article, Event, etc.)
   * @param data - Dati specifici per il tipo di schema
   */
  generateStructuredData(type: 'Organization' | 'Article' | 'Event' | 'LocalBusiness', data: any) {
    // Rimuove lo script esistente se presente
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    let structuredData: any;

    switch (type) {
      case 'Organization':
        // Schema per organizzazioni/aziende
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
        // Schema per articoli del blog
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

      case 'LocalBusiness':
        // Schema per attività locali
        structuredData = {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Il Giardino della Conoscenza",
          "description": "Associazione no profit dedicata all'educazione e alla crescita culturale della comunità",
          "url": "https://giardinoconoscenza.it",
          "telephone": "+39 02 1234 5678",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Via della Conoscenza, 26",
            "addressLocality": "Milano",
            "postalCode": "20100",
            "addressCountry": "IT"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "45.4642",
            "longitude": "9.1900"
          },
          "openingHours": "Mo-Fr 09:00-18:00",
          "priceRange": "€"
        };
        break;
    }

    // Aggiunge lo script con i dati strutturati al DOM
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }

  /**
   * BREADCRUMB STRUCTURED DATA
   * Genera i dati strutturati per le breadcrumb (percorso di navigazione)
   * 
   * @param breadcrumbs - Array di oggetti con name e url
   */
  generateBreadcrumbStructuredData(breadcrumbs: Array<{name: string, url: string}>) {
    const breadcrumbStructuredData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
    };

    // Rimuove breadcrumb esistenti
    const existingBreadcrumb = document.querySelector('script[data-type="breadcrumb"]');
    if (existingBreadcrumb) {
      existingBreadcrumb.remove();
    }

    // Aggiunge nuove breadcrumb
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-type', 'breadcrumb');
    script.text = JSON.stringify(breadcrumbStructuredData);
    document.head.appendChild(script);
  }

  /**
   * FAQ STRUCTURED DATA
   * Genera i dati strutturati per le FAQ che possono apparire
   * come rich snippets nei risultati di ricerca
   * 
   * @param faqs - Array di oggetti con question e answer
   */
  generateFAQStructuredData(faqs: Array<{question: string, answer: string}>) {
    const faqStructuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    // Rimuove FAQ esistenti
    const existingFAQ = document.querySelector('script[data-type="faq"]');
    if (existingFAQ) {
      existingFAQ.remove();
    }

    // Aggiunge nuove FAQ
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-type', 'faq');
    script.text = JSON.stringify(faqStructuredData);
    document.head.appendChild(script);
  }
}