import { SEOData } from '../services/seo.service';

export const SEO_DATA: { [key: string]: SEOData } = {
  home: {
    title: 'Il Giardino della Conoscenza - Associazione No Profit per l\'Educazione',
    description: 'Benvenuti al Giardino della Conoscenza. Associazione no profit dedicata all\'educazione, formazione e crescita culturale della comunità. Scopri i nostri servizi e strutture.',
    keywords: 'associazione no profit, educazione, formazione, comunità, cultura, apprendimento, Milano, corsi, supporto educativo, centro di apprendimento',
    url: 'https://giardinoconoscenza.it',
    type: 'website'
  },
  
  about: {
    title: 'Chi Siamo - Il Giardino della Conoscenza',
    description: 'Scopri la missione, i valori e la storia del Giardino della Conoscenza. Un\'associazione no profit dedicata alla crescita culturale e all\'educazione della comunità.',
    keywords: 'chi siamo, missione, valori, storia, associazione no profit, educazione, comunità',
    url: 'https://giardinoconoscenza.it/chi-siamo',
    type: 'website'
  },
  
  services: {
    title: 'I Nostri Servizi - Formazione e Supporto Educativo',
    description: 'Scopri tutti i servizi offerti dal Giardino della Conoscenza: corsi di formazione, supporto educativo, consulenza, eventi culturali e programmi comunitari.',
    keywords: 'servizi, corsi di formazione, supporto educativo, consulenza, eventi culturali, programmi giovanili, supporto familiare',
    url: 'https://giardinoconoscenza.it/servizi',
    type: 'website'
  },
  
  facilities: {
    title: 'Le Nostre Strutture - Centro di Apprendimento e Spazi Comunitari',
    description: 'Esplora le moderne strutture del Giardino della Conoscenza: centro di apprendimento, biblioteca, aule studio, spazi comunitari e molto altro.',
    keywords: 'strutture, centro di apprendimento, biblioteca, aule studio, spazi comunitari, appartamenti, spazi commerciali',
    url: 'https://giardinoconoscenza.it/strutture',
    type: 'website'
  },
  
  getInvolved: {
    title: 'Coinvolgiti - Volontariato e Donazioni',
    description: 'Unisciti a noi! Scopri come puoi contribuire al Giardino della Conoscenza attraverso volontariato, donazioni, sponsorizzazioni e altre forme di supporto.',
    keywords: 'volontariato, donazioni, sponsorizzazioni, coinvolgimento, supporto, comunità, aiuto',
    url: 'https://giardinoconoscenza.it/coinvolgiti',
    type: 'website'
  },
  
  blog: {
    title: 'Blog - Notizie e Riflessioni dalla Comunità',
    description: 'Leggi gli ultimi articoli del blog del Giardino della Conoscenza. Notizie, riflessioni, storie dalla comunità e approfondimenti sui nostri progetti.',
    keywords: 'blog, notizie, articoli, riflessioni, comunità, educazione, cultura, progetti',
    url: 'https://giardinoconoscenza.it/blog',
    type: 'website'
  },
  
  contact: {
    title: 'Contatti - Il Giardino della Conoscenza',
    description: 'Contatta il Giardino della Conoscenza. Trova tutte le informazioni per raggiungerci: indirizzo, telefono, email e modulo di contatto.',
    keywords: 'contatti, indirizzo, telefono, email, modulo contatto, Milano, informazioni',
    url: 'https://giardinoconoscenza.it/contatti',
    type: 'website'
  }
};

export const BLOG_SEO_DATA = {
  generateBlogPostSEO: (post: any): SEOData => ({
    title: `${post.title} - Blog Il Giardino della Conoscenza`,
    description: post.excerpt,
    keywords: `${post.category.toLowerCase()}, blog, articolo, ${post.title.toLowerCase()}`,
    image: post.image,
    url: `https://giardinoconoscenza.it/blog/${post.id}`,
    type: 'article',
    publishedTime: post.date,
    modifiedTime: post.date
  })
};