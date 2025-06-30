import { SEOData } from '../services/seo.service';

/**
 * CONFIGURAZIONE SEO PER TUTTE LE PAGINE
 * 
 * Questo file contiene tutti i dati SEO per ogni pagina del sito.
 * Ogni pagina ha:
 * - title: Titolo che appare nella tab del browser e nei risultati di ricerca
 * - description: Descrizione che appare nei risultati di ricerca (max 160 caratteri)
 * - keywords: Parole chiave per il SEO (separate da virgole)
 * - url: URL canonico della pagina
 * - type: Tipo di contenuto (website, article, etc.)
 */

export const SEO_DATA: { [key: string]: SEOData } = {
  home: {
    title: 'Il Giardino della Conoscenza - Associazione No Profit per l\'Educazione',
    description: 'Benvenuti al Giardino della Conoscenza. Associazione no profit dedicata all\'educazione, formazione e crescita culturale della comunità. Scopri i nostri servizi e strutture.',
    keywords: 'associazione no profit, educazione, formazione, comunità, cultura, apprendimento, Milano, corsi, supporto educativo, centro di apprendimento',
    url: 'https://giardinoconoscenza.it',
    type: 'website',
    image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop'
  },
  
  about: {
    title: 'Chi Siamo - Il Giardino della Conoscenza',
    description: 'Scopri la missione, i valori e la storia del Giardino della Conoscenza. Un\'associazione no profit dedicata alla crescita culturale e all\'educazione della comunità.',
    keywords: 'chi siamo, missione, valori, storia, associazione no profit, educazione, comunità, Milano',
    url: 'https://giardinoconoscenza.it/chi-siamo',
    type: 'website',
    image: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop'
  },
  
  services: {
    title: 'I Nostri Servizi - Formazione e Supporto Educativo',
    description: 'Scopri tutti i servizi offerti dal Giardino della Conoscenza: corsi di formazione, supporto educativo, consulenza, eventi culturali e programmi comunitari.',
    keywords: 'servizi, corsi di formazione, supporto educativo, consulenza, eventi culturali, programmi giovanili, supporto familiare, Milano',
    url: 'https://giardinoconoscenza.it/servizi',
    type: 'website',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop'
  },
  
  facilities: {
    title: 'Le Nostre Strutture - Centro di Apprendimento e Spazi Comunitari',
    description: 'Esplora le moderne strutture del Giardino della Conoscenza: centro di apprendimento, biblioteca, aule studio, spazi comunitari e molto altro.',
    keywords: 'strutture, centro di apprendimento, biblioteca, aule studio, spazi comunitari, appartamenti, spazi commerciali, Milano',
    url: 'https://giardinoconoscenza.it/strutture',
    type: 'website',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop'
  },
  
  getInvolved: {
    title: 'Coinvolgiti - Volontariato e Donazioni',
    description: 'Unisciti a noi! Scopri come puoi contribuire al Giardino della Conoscenza attraverso volontariato, donazioni, sponsorizzazioni e altre forme di supporto.',
    keywords: 'volontariato, donazioni, sponsorizzazioni, coinvolgimento, supporto, comunità, aiuto, Milano',
    url: 'https://giardinoconoscenza.it/coinvolgiti',
    type: 'website',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop'
  },
  
  blog: {
    title: 'Blog - Notizie e Riflessioni dalla Comunità',
    description: 'Leggi gli ultimi articoli del blog del Giardino della Conoscenza. Notizie, riflessioni, storie dalla comunità e approfondimenti sui nostri progetti.',
    keywords: 'blog, notizie, articoli, riflessioni, comunità, educazione, cultura, progetti, Milano',
    url: 'https://giardinoconoscenza.it/blog',
    type: 'website',
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop'
  },
  
  contact: {
    title: 'Contatti - Il Giardino della Conoscenza',
    description: 'Contatta il Giardino della Conoscenza. Trova tutte le informazioni per raggiungerci: indirizzo, telefono, email e modulo di contatto.',
    keywords: 'contatti, indirizzo, telefono, email, modulo contatto, Milano, informazioni, dove siamo',
    url: 'https://giardinoconoscenza.it/contatti',
    type: 'website',
    image: 'https://images.pexels.com/photos/1181319/pexels-photo-1181319.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop'
  }
};

/**
 * GENERATORE SEO PER BLOG POST
 * 
 * Funzione helper per generare dati SEO dinamici per i post del blog
 */
export const BLOG_SEO_DATA = {
  generateBlogPostSEO: (post: any): SEOData => ({
    title: `${post.title} - Blog Il Giardino della Conoscenza`,
    description: post.excerpt.length > 160 ? post.excerpt.substring(0, 157) + '...' : post.excerpt,
    keywords: `${post.category.toLowerCase()}, blog, articolo, ${post.title.toLowerCase()}, educazione, comunità`,
    image: post.image,
    url: `https://giardinoconoscenza.it/blog/${post.id}`,
    type: 'article',
    publishedTime: post.date,
    modifiedTime: post.date
  })
};

/**
 * BREADCRUMB DATA
 * 
 * Configurazione delle breadcrumb per ogni pagina
 */
export const BREADCRUMB_DATA: { [key: string]: Array<{name: string, url: string}> } = {
  home: [
    { name: 'Home', url: 'https://giardinoconoscenza.it' }
  ],
  about: [
    { name: 'Home', url: 'https://giardinoconoscenza.it' },
    { name: 'Chi Siamo', url: 'https://giardinoconoscenza.it/chi-siamo' }
  ],
  services: [
    { name: 'Home', url: 'https://giardinoconoscenza.it' },
    { name: 'Servizi', url: 'https://giardinoconoscenza.it/servizi' }
  ],
  facilities: [
    { name: 'Home', url: 'https://giardinoconoscenza.it' },
    { name: 'Strutture', url: 'https://giardinoconoscenza.it/strutture' }
  ],
  getInvolved: [
    { name: 'Home', url: 'https://giardinoconoscenza.it' },
    { name: 'Coinvolgiti', url: 'https://giardinoconoscenza.it/coinvolgiti' }
  ],
  blog: [
    { name: 'Home', url: 'https://giardinoconoscenza.it' },
    { name: 'Blog', url: 'https://giardinoconoscenza.it/blog' }
  ],
  contact: [
    { name: 'Home', url: 'https://giardinoconoscenza.it' },
    { name: 'Contatti', url: 'https://giardinoconoscenza.it/contatti' }
  ]
};