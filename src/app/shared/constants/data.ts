export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface FacilityItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface GetInvolvedItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  buttonText: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 1,
    title: 'Corsi di Formazione',
    description: 'Offriamo corsi di formazione professionale e personale per aiutare gli individui a sviluppare nuove competenze.',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
  },
  {
    id: 2,
    title: 'Supporto Educativo',
    description: 'Forniamo tutoraggio e supporto educativo per studenti di tutte le età, aiutandoli a raggiungere i loro obiettivi accademici.',
    image: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
  },
  {
    id: 3,
    title: 'Consulenza',
    description: 'Offriamo servizi di consulenza per aiutare individui e famiglie a navigare le sfide della vita quotidiana.',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
  },
  {
    id: 4,
    title: 'Eventi Culturali',
    description: 'Organizziamo eventi culturali e comunitari per celebrare la diversità e promuovere l\'inclusione sociale.',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
  },
  {
    id: 5,
    title: 'Programmi Giovanili',
    description: 'Programmi dedicati ai giovani per sviluppare leadership, creatività e competenze sociali.',
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
  },
  {
    id: 6,
    title: 'Supporto Familiare',
    description: 'Servizi di supporto per famiglie, inclusi programmi di genitorialità e mediazione familiare.',
    image: 'https://images.pexels.com/photos/1181319/pexels-photo-1181319.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
  }
];

export const FACILITIES_DATA: FacilityItem[] = [
  {
    id: 1,
    title: 'Centro di Apprendimento Permanente',
    description: 'Il nostro Centro di Apprendimento Permanente si impegna a potenziare la prossima generazione.',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
  },
  {
    id: 2,
    title: 'Centro Comunitario',
    description: 'Il Centro Comunitario offrirà uno spazio per individui di diverse culture per riunirsi.',
    image: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
  },
  {
    id: 3,
    title: 'Spazi Commerciali',
    description: 'Gli spazi commerciali rafforzeranno l\'economia locale.',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
  },
  {
    id: 4,
    title: 'Appartamenti',
    description: 'Appartamenti progettati con attenzione per la comunità.',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
  },
  {
    id: 5,
    title: 'Progetto Eco',
    description: 'Goditi i bellissimi dintorni dei nostri spazi verdi dedicati.',
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
  },
  {
    id: 6,
    title: 'Biblioteca',
    description: 'Una biblioteca moderna con risorse digitali e tradizionali per tutti.',
    image: 'https://images.pexels.com/photos/1181319/pexels-photo-1181319.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
  }
];

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: 1,
    title: "La Crescita attraverso l'Educazione",
    excerpt: "Come l'educazione continua può trasformare le nostre vite e le nostre comunità...",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    date: "15 Gen 2024",
    category: "Educazione"
  },
  {
    id: 2,
    title: "Costruire Ponti nella Comunità",
    excerpt: "L'importanza di creare connessioni significative tra diverse culture e background...",
    image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    date: "12 Gen 2024",
    category: "Comunità"
  },
  {
    id: 3,
    title: "Domande Frequenti sui Nostri Servizi",
    excerpt: "Risposte alle domande più comuni sui nostri programmi e servizi...",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    date: "10 Gen 2024",
    category: "FAQ"
  },
  {
    id: 4,
    title: "La Crescita attraverso l'Educazione",
    excerpt: "Le moschee di tutto il paese stanno iniziando ad accendersi in preparazione del mese di Rabi Ul Awwal! È un momento per celebrare...",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    date: "8 Gen 2024",
    category: "Spiritualità"
  },
  {
    id: 5,
    title: "Massimizzare l'Apprendimento: Come Ottenere il Massimo",
    excerpt: "Il mese di Muharram segna l'inizio dell'anno islamico. Il suo nome deriva dalla radice araba...",
    image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    date: "5 Gen 2024",
    category: "Apprendimento"
  },
  {
    id: 6,
    title: "FAQ sui Servizi Comunitari",
    excerpt: "Le moschee di tutto il paese stanno iniziando ad accendersi in preparazione del mese di Rabi Ul Awwal! È un momento per celebrare la nascita del profeta Muhammad ﷺ e...",
    image: "https://images.pexels.com/photos/1181319/pexels-photo-1181319.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    date: "3 Gen 2024",
    category: "FAQ"
  }
];

export const FAQ_DATA: FAQ[] = [
  {
    question: "Qual è il progresso attuale del progetto?",
    answer: "Il progetto è attualmente in fase di sviluppo. Stiamo lavorando per completare la prima fase che include il centro di apprendimento e gli spazi comunitari principali."
  },
  {
    question: "Come posso donare per Il Giardino della Conoscenza?",
    answer: "Puoi donare attraverso il nostro sito web utilizzando il pulsante 'Dona Ora' o contattandoci direttamente per altre modalità di donazione. Accettiamo donazioni una tantum e ricorrenti."
  },
  {
    question: "Quali servizi prevede di fornire Il Giardino della Conoscenza?",
    answer: "Offriremo una vasta gamma di servizi educativi, programmi comunitari, supporto familiare, corsi di formazione professionale e spazi per eventi culturali."
  },
  {
    question: "Quando posso contattare per domande generali sul Giardino della Conoscenza?",
    answer: "Puoi contattarci in qualsiasi momento attraverso il modulo di contatto, email o telefono. Il nostro team risponde solitamente entro 24-48 ore."
  },
  {
    question: "Sono interessato ad affittare uno spazio commerciale o un appartamento - chi dovrei contattare?",
    answer: "Per informazioni su spazi commerciali e appartamenti, ti preghiamo di contattarci direttamente tramite il modulo di contatto specificando il tuo interesse. Un membro del nostro team ti contatterà per discutere le opzioni disponibili."
  },
  {
    question: "Vorrei aiutare a raccogliere fondi per questo progetto - chi dovrei contattare?",
    answer: "Siamo sempre alla ricerca di volontari per la raccolta fondi! Contattaci attraverso il modulo specificando il tuo interesse nel volontariato e ti metteremo in contatto con il nostro team di raccolta fondi."
  }
];

export const GET_INVOLVED_DATA: GetInvolvedItem[] = [
  {
    id: 1,
    title: 'Volontariato',
    description: 'Dedica il tuo tempo e le tue competenze per supportare i nostri programmi e aiutare la comunità a crescere.',
    icon: 'volunteer_activism',
    buttonText: 'Diventa Volontario'
  },
  {
    id: 2,
    title: 'Donazioni',
    description: 'Le tue donazioni ci aiutano a mantenere e espandere i nostri servizi per raggiungere più persone nella comunità.',
    icon: 'favorite',
    buttonText: 'Dona Ora'
  },
  {
    id: 3,
    title: 'Sponsorizzazioni',
    description: 'Le aziende possono supportare la nostra missione attraverso sponsorizzazioni e partnership strategiche.',
    icon: 'business',
    buttonText: 'Diventa Sponsor'
  },
  {
    id: 4,
    title: 'Insegnamento',
    description: 'Condividi le tue conoscenze e competenze insegnando nei nostri corsi e programmi educativi.',
    icon: 'school',
    buttonText: 'Insegna con Noi'
  },
  {
    id: 5,
    title: 'Organizza Eventi',
    description: 'Aiutaci a organizzare eventi comunitari, workshop e attività culturali per la nostra comunità.',
    icon: 'event',
    buttonText: 'Organizza Eventi'
  },
  {
    id: 6,
    title: 'Diffondi la Parola',
    description: 'Aiutaci a far conoscere la nostra missione condividendo le nostre iniziative sui social media e nella comunità.',
    icon: 'campaign',
    buttonText: 'Condividi'
  }
];