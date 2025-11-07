// Bilingual ES/EN Translation System

const translations = {
  es: {
    nav: {
      logo: 'TIU PAVIMENTOS',
      home: 'Inicio',
      products: 'Productos',
      contact: 'Contacto'
    },
    hero: {
      title: 'Soluciones Innovadoras para Pavimentos',
      subtitle: 'Tecnología de vanguardia para pavimentos duraderos y seguros'
    },
    about: {
      title: 'Quiénes Somos',
      p1: 'Somos una empresa dedicada a ofrecer soluciones innovadoras que fortalecen la seguridad y prolongan la vida útil de los pavimentos. Combinamos materiales de la más alta calidad con tecnologías de vanguardia a nivel mundial para garantizar resultados duraderos, eficientes y sostenibles.'
    },
    tech: {
      title: 'Nuestra Tecnología',
      p1: 'Nuestros recubrimientos asfálticos ofrecen un alto desempeño y durabilidad gracias a su formulación con minerales, cerámicas, polímeros de última generación; incluyendo SEBS, SBS, EVA y Hule Molido de Llanta, los cuales proporcionan una gran flexibilidad, estabilidad térmica y excelente integración al pavimento existente.',
      p2: 'Su alto peso molecular y elevado punto de reblandecimiento permiten resistir temperaturas extremas y cargas de tráfico intenso. Su acabado negro satinado crea una superficie fuerte y a la vez flexible, capaz de proteger el pavimento frente al desgaste por neumáticos, radiación solar y humedad.',
      p3: 'En los sistemas de aplicación R.A.A.D Type S, R.A.A.D RC (TractionShield) Y SUPRA, se incorpora material basáltico triturado, que aporta una microtextura superior y mejora significativamente la fricción y el desempeño superficial del pavimento.'
    },
    products: {
      title: 'Nuestros Productos',
      'page-title': 'Nuestros Productos',
      'page-subtitle': 'Soluciones innovadoras para la protección y mantenimiento de pavimentos asfálticos',
      'view-all': 'Ver Todos los Productos',
      'learn-more': 'Más Información',
      'type-s': {
        short: 'Tratamiento superficial que protege e impermeabiliza pavimentos asfálticos con nanotecnología.',
        description: 'Tratamiento superficial que protege e impermeabiliza pavimentos asfálticos con nanotecnología, ofreciendo alta durabilidad y resistencia al tráfico intenso.'
      },
      supra: {
        short: 'Aplicación superficial con base asfáltica modificada que restaura pavimentos moderadamente deteriorados.',
        description: 'Aplicación superficial con base asfáltica modificada con polímeros y fibras cerámicas que restaura pavimentos moderadamente deteriorados, ofreciendo alta resistencia, durabilidad y una superficie segura.'
      },
      rc: {
        short: 'TractionShield - Sellador asfáltico ecológico en base agua que se integra al pavimento sellando superficies con alta eficiencia.',
        description: 'TractionShield es un sellador asfáltico plural y reactivo a base de asfaltos modificados con polímeros, ecológico y en base agua, que se integra al pavimento sellando superficies con alta eficiencia, seguridad y sostenibilidad.'
      },
      h25: {
        short: 'Aditivo de hidrocarburos modificados que mejora la superficie de pavimentos, seguro, duradero y de secado rápido.',
        description: 'Es un aditivo de hidrocarburos modificados con termoplástico de alto peso molecular derivado del asfalto, que mejora la superficie de pavimentos, es seguro (sin HAP), duradero, de secado rápido y aplicable en distintas condiciones.'
      }
    },
    product: {
      back: '← Volver a Inicio',
      uses: 'Usos Recomendados',
      benefits: 'Beneficios',
      'technical-sheet': 'Ficha Técnica',
      'download-pdf': 'Descargar PDF',
      gallery: 'Galería'
    },
    'raad-type-s': {
      intro: 'Este tratamiento superficial está diseñado para proteger e impermeabilizar pavimentos asfálticos, proporcionando una superficie de rodamiento cómoda y segura en carreteras, zonas urbanas y pistas de aeropuertos.',
      description: 'Desarrollado en Estados Unidos por Carbonyte Inc., incorpora nanotecnología en su estructura, lo que permite el uso de asfaltos de muy baja penetración junto con diversos tipos de polímeros y cerámicas. Esto le confiere una durabilidad excepcional y una resistencia superior al tráfico intenso y pesado, garantizando pavimentos más seguros y de larga vida útil.',
      use1: 'Para zonas de operación de baja a regular como rodajes, vialidades lado tierra, vialidades internas, vialidades en plataforma y tercios laterales de pista.',
      benefit1: 'No contiene Hidrocarburos aromáticos policíclicos (No-PAHs)',
      benefit2: 'Alto punto de reblandecimiento',
      benefit3: 'Mejor ductilidad en climas fríos',
      benefit4: 'Seguro para manejar y almacenar',
      benefit5: 'Muy buena resistencia química, resistencia a derrames',
      benefit6: 'Debido a su alto peso molecular, tiene una muy buena cohesión y alta resistencia a la abrasión',
      benefit7: 'Rápido tiempo de secado y curado, generalmente 2 horas',
      benefit8: 'Alta resistencia a rayos infrarrojos y UV',
      benefit9: 'Protege a los pavimentos del desgaste y factores ambientales',
      benefit10: 'Recomendado para zonas de bajo tránsito, tercios laterales de pista y márgenes',
      benefit11: 'No disminuye la fricción al contener minerales en su estructura interna y mantiene la macrotextura'
    },
    supra: {
      intro: 'Aplicación superficial con base asfáltica modificada con polímeros y fibras cerámicas que restaura pavimentos moderadamente deteriorados, ofreciendo alta resistencia, durabilidad y una superficie segura.',
      description: 'SUPRA es una solución avanzada para la rehabilitación de pavimentos que combina tecnología de polímeros de última generación con fibras cerámicas, creando una superficie resistente y duradera que protege y extiende la vida útil del pavimento existente.'
    },
    'raad-rc': {
      intro: 'TractionShield es un sellador asfáltico plural y reactivo a base de asfaltos modificados con polímeros, ecológico y en base agua, que se integra al pavimento sellando superficies con alta eficiencia, seguridad y sostenibilidad.',
      description: 'Este innovador producto combina la efectividad de los selladores tradicionales con una formulación ecológica en base agua, proporcionando una solución sustentable para el mantenimiento y protección de pavimentos asfálticos. Su capacidad de integración con el pavimento existente garantiza un sellado duradero y eficiente.'
    },
    h25: {
      intro: 'Es un aditivo de hidrocarburos modificados con termoplástico de alto peso molecular derivado del asfalto, que mejora la superficie de pavimentos, es seguro (sin HAP), duradero, de secado rápido y aplicable en distintas condiciones.',
      description: 'H-25 es una solución versátil y segura para el mejoramiento de pavimentos asfálticos. Su formulación libre de hidrocarburos aromáticos policíclicos (HAP) garantiza la seguridad tanto en su aplicación como en su uso a largo plazo, mientras que su rápido tiempo de secado permite una rápida puesta en servicio de las superficies tratadas.'
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Estamos aquí para ayudarle con sus proyectos de pavimentación',
      'info-title': 'Información de Contacto',
      address: 'Dirección',
      email: 'Correo Electrónico',
      phone: 'Teléfono',
      'hours-title': 'Horario de Atención',
      weekdays: 'Lunes a Viernes',
      saturday: 'Sábado',
      connect: 'Conéctate con Nosotros',
      response: 'Nos pondremos en contacto contigo lo antes posible para discutir tus necesidades de pavimentación.',
      'cta-title': '¿Listo para Comenzar tu Proyecto?',
      'cta-text': 'Contáctanos hoy para obtener una cotización personalizada',
      'cta-button': 'Enviar Correo'
    },
    footer: {
      company: 'TIU Pavimentos',
      tagline: 'Soluciones innovadoras para pavimentos de alta calidad',
      contact: 'Contacto',
      info: 'Información',
      rights: 'Todos los derechos reservados.'
    }
  },
  en: {
    nav: {
      logo: 'TIU PAVEMENTS',
      home: 'Home',
      products: 'Products',
      contact: 'Contact'
    },
    hero: {
      title: 'Innovative Pavement Solutions',
      subtitle: 'Cutting-edge technology for durable and safe pavements'
    },
    about: {
      title: 'Who We Are',
      p1: 'We are a company dedicated to offering innovative solutions that strengthen safety and extend the lifespan of pavements. We combine the highest quality materials with world-class cutting-edge technologies to guarantee lasting, efficient and sustainable results.'
    },
    tech: {
      title: 'Our Technology',
      p1: 'Our asphalt coatings offer high performance and durability thanks to their formulation with minerals, ceramics, and latest generation polymers; including SEBS, SBS, EVA and Ground Tire Rubber, which provide great flexibility, thermal stability and excellent integration with existing pavement.',
      p2: 'Their high molecular weight and elevated softening point allow them to resist extreme temperatures and heavy traffic loads. Their satin black finish creates a strong yet flexible surface, capable of protecting the pavement against tire wear, solar radiation and moisture.',
      p3: 'In the R.A.A.D Type S, R.A.A.D RC (TractionShield) and SUPRA application systems, crushed basaltic material is incorporated, which provides superior microtexture and significantly improves the friction and surface performance of the pavement.'
    },
    products: {
      title: 'Our Products',
      'page-title': 'Our Products',
      'page-subtitle': 'Innovative solutions for the protection and maintenance of asphalt pavements',
      'view-all': 'View All Products',
      'learn-more': 'Learn More',
      'type-s': {
        short: 'Surface treatment that protects and waterproofs asphalt pavements with nanotechnology.',
        description: 'Surface treatment that protects and waterproofs asphalt pavements with nanotechnology, offering high durability and resistance to heavy traffic.'
      },
      supra: {
        short: 'Surface application with modified asphalt base that restores moderately deteriorated pavements.',
        description: 'Surface application with polymer-modified asphalt base and ceramic fibers that restores moderately deteriorated pavements, offering high strength, durability and a safe surface.'
      },
      rc: {
        short: 'TractionShield - Eco-friendly water-based asphalt sealer that integrates with pavement sealing surfaces with high efficiency.',
        description: 'TractionShield is a plural and reactive asphalt sealer based on polymer-modified asphalts, eco-friendly and water-based, that integrates with pavement sealing surfaces with high efficiency, safety and sustainability.'
      },
      h25: {
        short: 'Modified hydrocarbon additive that improves pavement surface, safe, durable and fast-drying.',
        description: 'It is a modified hydrocarbon additive with high molecular weight thermoplastic derived from asphalt, which improves pavement surface, is safe (PAH-free), durable, fast-drying and applicable in different conditions.'
      }
    },
    product: {
      back: '← Back to Home',
      uses: 'Recommended Uses',
      benefits: 'Benefits',
      'technical-sheet': 'Technical Datasheet',
      'download-pdf': 'Download PDF',
      gallery: 'Gallery'
    },
    'raad-type-s': {
      intro: 'This surface treatment is designed to protect and waterproof asphalt pavements, providing a comfortable and safe riding surface on highways, urban areas and airport runways.',
      description: 'Developed in the United States by Carbonyte Inc., it incorporates nanotechnology in its structure, which allows the use of very low penetration asphalts together with various types of polymers and ceramics. This gives it exceptional durability and superior resistance to heavy and intense traffic, guaranteeing safer and longer-lasting pavements.',
      use1: 'For low to regular operation areas such as taxiways, landside roads, internal roads, platform roads and runway lateral thirds.',
      benefit1: 'Does not contain Polycyclic Aromatic Hydrocarbons (Non-PAHs)',
      benefit2: 'High softening point',
      benefit3: 'Better ductility in cold climates',
      benefit4: 'Safe to handle and store',
      benefit5: 'Very good chemical resistance, spill resistance',
      benefit6: 'Due to its high molecular weight, it has very good cohesion and high abrasion resistance',
      benefit7: 'Fast drying and curing time, generally 2 hours',
      benefit8: 'High resistance to infrared and UV rays',
      benefit9: 'Protects pavements from wear and environmental factors',
      benefit10: 'Recommended for low traffic areas, runway lateral thirds and margins',
      benefit11: 'Does not decrease friction by containing minerals in its internal structure and maintains macrotexture'
    },
    supra: {
      intro: 'Surface application with polymer-modified asphalt base and ceramic fibers that restores moderately deteriorated pavements, offering high strength, durability and a safe surface.',
      description: 'SUPRA is an advanced solution for pavement rehabilitation that combines latest generation polymer technology with ceramic fibers, creating a resistant and durable surface that protects and extends the lifespan of existing pavement.'
    },
    'raad-rc': {
      intro: 'TractionShield is a plural and reactive asphalt sealer based on polymer-modified asphalts, eco-friendly and water-based, that integrates with pavement sealing surfaces with high efficiency, safety and sustainability.',
      description: 'This innovative product combines the effectiveness of traditional sealers with an eco-friendly water-based formulation, providing a sustainable solution for the maintenance and protection of asphalt pavements. Its integration capacity with existing pavement guarantees a durable and efficient seal.'
    },
    h25: {
      intro: 'It is a modified hydrocarbon additive with high molecular weight thermoplastic derived from asphalt, which improves pavement surface, is safe (PAH-free), durable, fast-drying and applicable in different conditions.',
      description: 'H-25 is a versatile and safe solution for improving asphalt pavements. Its formulation free of polycyclic aromatic hydrocarbons (PAH) guarantees safety both in its application and long-term use, while its fast drying time allows rapid service of treated surfaces.'
    },
    contact: {
      title: 'Contact',
      subtitle: 'We are here to help you with your paving projects',
      'info-title': 'Contact Information',
      address: 'Address',
      email: 'Email',
      phone: 'Phone',
      'hours-title': 'Business Hours',
      weekdays: 'Monday to Friday',
      saturday: 'Saturday',
      connect: 'Connect With Us',
      response: 'We will contact you as soon as possible to discuss your paving needs.',
      'cta-title': 'Ready to Start Your Project?',
      'cta-text': 'Contact us today for a personalized quote',
      'cta-button': 'Send Email'
    },
    footer: {
      company: 'TIU Pavements',
      tagline: 'Innovative solutions for high-quality pavements',
      contact: 'Contact',
      info: 'Information',
      rights: 'All rights reserved.'
    }
  }
};

// Get current language from localStorage or default to Spanish
let currentLang = localStorage.getItem('language') || 'es';

// Set document language
document.documentElement.lang = currentLang;

// Function to translate the page
function translatePage() {
  const elements = document.querySelectorAll('[data-i18n]');

  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    const keys = key.split('.');
    let translation = translations[currentLang];

    // Navigate through nested keys
    for (const k of keys) {
      translation = translation?.[k];
    }

    if (translation) {
      element.textContent = translation;
    }
  });
}

// Function to toggle language
function toggleLanguage() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  localStorage.setItem('language', currentLang);
  document.documentElement.lang = currentLang;
  translatePage();
}

// Translate page on load
document.addEventListener('DOMContentLoaded', translatePage);
