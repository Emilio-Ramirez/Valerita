// Bilingual ES/EN Translation System

const translations = {
  es: {
    nav: {
      logo: 'CARBONITTE',
      home: 'Inicio',
      products: 'Productos',
      contact: 'Contacto'
    },
    hero: {
      title: 'Carbonitte',
      subtitle: 'Aerospace Coating Tecnology'
    },
    about: {
      title: 'Quiénes Somos',
      p1: 'Somos una empresa dedicada a ofrecer soluciones innovadoras que fortalecen la seguridad y prolongan la vida útil de los pavimentos. Combinamos materiales de la más alta calidad con tecnologías de vanguardia a nivel mundial para garantizar resultados duraderos, eficientes y sostenibles.'
    },
    tech: {
      title: 'Nuestra Tecnología',
      p1: 'Nuestros recubrimientos asfálticos ofrecen un alto desempeño y durabilidad gracias a su formulación con minerales, cerámicas, polímeros de última generación; incluyendo SEBS, SBS, EVA y Hule Molido de Llanta, los cuales proporcionan una gran flexibilidad, estabilidad térmica y excelente integración al pavimento existente. Su alto peso molecular y elevado punto de reblandecimiento permiten resistir temperaturas extremas y cargas de tráfico intenso. Su acabado negro satinado crea una superficie fuerte y a la vez flexible, capaz de proteger el pavimento frente al desgaste por neumáticos, radiación solar y humedad. En los sistemas de aplicación R.A.A.D Type S, R.A.A.D RC (TractionShield) Y SUPRA, se incorpora material basáltico triturado, que aporta una microtextura superior y mejora significativamente la fricción y el desempeño superficial del pavimento.'
    },
    products: {
      title: 'Nuestros Productos',
      subtitle: 'Soluciones innovadoras y tecnología de vanguardia',
      'type-s': {
        short: 'Tratamiento superficial que protege e impermeabiliza pavimentos asfálticos con nanotecnología, ofreciendo alta durabilidad y resistencia al tráfico intenso.'
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
      back: '← Volver a Productos',
      uses: 'Usos Recomendados',
      benefits: 'Beneficios',
      'technical-sheet': 'Ficha Técnica',
      'download-pdf': 'Descargar PDF',
      gallery: 'Galería'
    },
    'raad-type-s': {
      intro: 'Este tratamiento superficial está diseñado para proteger e impermeabilizar pavimentos asfálticos, proporcionando una superficie de rodamiento cómoda y segura en carreteras, zonas urbanas y pistas de aeropuertos. Desarrollado en Estados Unidos por Carbonyte Inc., incorpora nanotecnología en su estructura, lo que permite el uso de asfaltos de muy baja penetración junto con diversos tipos de polímeros y cerámicas. Esto le confiere una durabilidad excepcional y una resistencia superior al tráfico intenso y pesado, garantizando pavimentos más seguros y de larga vida útil.',
      use1: 'Pavimentos nuevos como capa de protección.',
      use2: 'Pavimentos con agrietamientos moderados.',
      use3: 'Pavimentos con desgaste superficial.',
      use4: 'Zonas sometidas al derrame de combustibles y aceites (formulación especial).',
      use5: 'Zonas con restricciones de horarios para trabajar: centros comerciales, zonas urbanas, aeropuertos.',
      use6: 'Superficies de rodamiento con bajo coeficiente de fricción.',
      use7: 'En general, cualquier pavimento al que se desee incrementar la vida útil y mejorar su apariencia.',
      benefit1: 'Protege las carpetas asfálticas de la oxidación, producto de los factores ambientales.',
      benefit2: 'Renueva la superficie de rodamiento.',
      benefit3: 'Mejora la microtextura e incrementa los valores de fricción.',
      benefit4: 'Previene la penetración de agua a las capas subyacentes.',
      benefit5: 'Mejora la apariencia del pavimento, proporcionando una superficie uniforme.'
    },
    supra: {
      intro: 'Se trata de una aplicación superficial compuesta por una base asfáltica modificada con polímeros y agregado pétreo de altas especificaciones, diseñada para restaurar la pérdida de finos y ofrecer una superficie de rodamiento cómoda y segura en pavimentos asfálticos. Este producto permite recuperar pavimentos con deterioros moderados de manera eficiente. Su secado rápido y su estructura reforzada con fibras cerámicas, junto con la base asfáltica modificada, proporcionan una mayor resistencia y durabilidad, extendiendo significativamente la vida útil del pavimento.',
      use1: 'Diseñado para aplicarse sobre superficies asfálticas con desgranamientos moderados a severos: carreteras, autopistas, pistas de aeropuertos, rodajes y estacionamientos.',
      use2: 'Funciona como superficie de desgaste y para la protección de pavimentos asfálticos en general',
      benefit1: 'Restaura la pérdida de finos y retiene el deterioro acelerado de carpetas asfálticas.',
      benefit2: 'Impermeabiliza la superficie.',
      benefit3: 'Protege la carpeta asfáltica existente.',
      benefit4: 'Sella los agrietamientos pequeños e incipientes.',
      benefit5: 'Curado rápido, permitiendo la circulación en 2 a 4 horas.',
      benefit6: 'Proporciona una superficie de rodamiento cómoda y segura.',
      benefit7: 'Excelente microtextura.',
      benefit8: 'Alta resistencia a la torsión e impacto.',
      benefit9: 'Aplicable en capas, lo que permite controlar los tiempos de secado.'
    },
    'raad-rc': {
      intro: 'Sellador asfáltico plural y reactivo, fabricado a base de asfaltos modificados con polímeros de alto peso molecular. Está diseñado para integrarse completamente al pavimento existente, sellando de manera eficiente superficies asfálticas en aeropuertos, calles y autopistas.',
      description: 'Es una solución ecológica y respetuosa con el medio ambiente, ya que es a base de agua, no contiene solventes y su proceso de preparación y aplicación requiere calentamiento, garantizando seguridad y sostenibilidad sin comprometer su desempeño.',
      use1: 'Zonas sometidas al derrame de combustibles y aceites.',
      use2: 'Zonas con restricciones de horarios para trabajar: centros comerciales, zonas urbanas, aeropuertos.',
      use3: 'Protege las carpetas asfálticas de la oxidación causada por factores ambientales.',
      use4: 'Rejuvenece la superficie de rodamiento.',
      use5: 'Protege contra la absorción de agua en las microfisuras de las superficies.',
      use6: 'Pavimentos que presenten desgaste.',
      benefit1: 'Resistente a combustibles de aeronaves (Jet A JP-8), al aceite y lubricante.',
      benefit2: 'Reactivo único que ataca químicamente los óxidos presentes en la superficie expuesta del agregado.',
      benefit3: 'Secado y curado tanto diurno como nocturno.',
      benefit4: 'Prácticamente cero VOC (compuestos orgánicos volátiles).'
    },
    h25: {
      intro: 'Es un aditivo de hidrocarburos modificados, compuesto por un termoplástico de alto peso molecular emulsionado, derivado del asfalto. Este innovador producto mejora significativamente la superficie de los pavimentos asfálticos, proporcionando una protección eficiente contra factores ambientales y el tráfico moderado. Además, está formulado sin la presencia de HAP (Hidrocarburos Aromáticos Policíclicos), compuestos conocidos por su potencial cancerígeno, lo que garantiza una opción más segura y amigable con la salud.',
      description: 'Su estructura, enriquecida con polímeros, asfaltos de baja penetración y minerales de alta calidad, le otorga una durabilidad excepcional. De secado rápido, puede ser aplicado tanto de noche como en áreas sin exposición directa al sol, asegurando flexibilidad en su uso y máxima eficiencia en diferentes condiciones.',
      use1: 'Para zonas de operación de baja a regular como  rodajes, vialidades lado tierra, vialidades internas, vialidades en plataforma y tercios laterales de pista.',
      benefit1: 'No contiene Hidrocarburos aromáticos policíclicos (No-PAHs)',
      benefit2: 'Alto punto de reblandecimiento.',
      benefit3: 'Mejor ductilidad en climas fríos.',
      benefit4: 'Seguro para manejar y almacenar.',
      benefit5: 'Muy buena resistencia química, resistencia a derrames.',
      benefit6: 'Debido a su alto peso molecular, tiene una muy buena cohesión y alta resistencia a la abrasión.',
      benefit7: 'Rápido tiempo de secado y curado, generalmente 2 horas.',
      benefit8: 'Alta resistencia a rayos infrarrojos y UV.',
      benefit9: 'Protege a los pavimentos del desgaste y factores ambientales.',
      benefit10: 'Recomendado para zonas de bajo tránsito, tercios laterales de pista y márgenes.',
      benefit11: 'No disminuye la fricción al contener minerales en su estructura interna y mantiene la macrotextura.'
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
      company: 'Carbonitte',
      tagline: 'Soluciones innovadoras y tecnología de vanguardia',
      address: 'Dirección',
      contact: 'Contacto',
      info: 'Información',
      rights: 'Todos los derechos reservados.'
    }
  },
  en: {
    nav: {
      logo: 'CARBONITTE MEXICO',
      home: 'Home',
      products: 'Products',
      contact: 'Contact'
    },
    hero: {
      title: 'Carbonitte',
      subtitle: 'Aerospace Coating Technology'
    },
    about: {
      title: 'Who We Are',
      p1: 'We are a company dedicated to offering innovative solutions that strengthen safety and extend the lifespan of pavements. We combine the highest quality materials with world-class cutting-edge technologies to guarantee lasting, efficient and sustainable results.'
    },
    tech: {
      title: 'Our Technology',
      p1: 'Our asphalt coatings offer high performance and durability thanks to their formulation with minerals, ceramics, and latest generation polymers; including SEBS, SBS, EVA and Ground Tire Rubber, which provide great flexibility, thermal stability and excellent integration with existing pavement. Their high molecular weight and elevated softening point allow them to resist extreme temperatures and heavy traffic loads. Their satin black finish creates a strong yet flexible surface, capable of protecting the pavement against tire wear, solar radiation and moisture. In the R.A.A.D Type S, R.A.A.D RC (TractionShield) and SUPRA application systems, crushed basaltic material is incorporated, which provides superior microtexture and significantly improves the friction and surface performance of the pavement.'
    },
    products: {
      title: 'Our Products',
      subtitle: 'Innovative solutions and cutting-edge technology',
      'type-s': {
        short: 'Surface treatment that protects and waterproofs asphalt pavements with nanotechnology, offering high durability and resistance to heavy traffic.'
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
      back: '← Back to Products',
      uses: 'Recommended Uses',
      benefits: 'Benefits',
      'technical-sheet': 'Technical Datasheet',
      'download-pdf': 'Download PDF',
      gallery: 'Gallery'
    },
    'raad-type-s': {
      intro: 'This surface treatment is designed to protect and waterproof asphalt pavements, providing a comfortable and safe riding surface on highways, urban areas, and airport runways. Developed in the United States by Carbonyte Inc., it incorporates nanotechnology in its structure, which allows the use of very low penetration asphalts along with various types of polymers and ceramics. This gives it exceptional durability and superior resistance to heavy and intense traffic, guaranteeing safer and longer-lasting pavements.',
      use1: 'New pavements as a protective layer.',
      use2: 'Pavements with moderate cracking.',
      use3: 'Pavements with surface wear.',
      use4: 'Areas subject to fuel and oil spills (special formulation).',
      use5: 'Areas with time restrictions for working: shopping centers, urban areas, airports.',
      use6: 'Riding surfaces with low friction coefficient.',
      use7: 'In general, any pavement where you want to increase service life and improve appearance.',
      benefit1: 'Protects asphalt layers from oxidation caused by environmental factors.',
      benefit2: 'Renews the riding surface.',
      benefit3: 'Improves microtexture and increases friction values.',
      benefit4: 'Prevents water penetration to underlying layers.',
      benefit5: 'Improves pavement appearance, providing a uniform surface.'
    },
    supra: {
      intro: 'It is a surface application composed of a polymer-modified asphalt base and high-specification stone aggregate, designed to restore loss of fines and provide a comfortable and safe riding surface on asphalt pavements. This product allows efficient recovery of pavements with moderate deterioration. Its fast drying and reinforced structure with ceramic fibers, along with the modified asphalt base, provide greater resistance and durability, significantly extending the pavement\'s service life.',
      use1: 'Designed to be applied on asphalt surfaces with moderate to severe raveling: highways, freeways, airport runways, taxiways and parking lots.',
      use2: 'Functions as a wearing surface and for the protection of asphalt pavements in general',
      benefit1: 'Restores loss of fines and retains accelerated deterioration of asphalt layers.',
      benefit2: 'Waterproofs the surface.',
      benefit3: 'Protects the existing asphalt layer.',
      benefit4: 'Seals small and incipient cracks.',
      benefit5: 'Fast curing, allowing traffic in 2 to 4 hours.',
      benefit6: 'Provides a comfortable and safe riding surface.',
      benefit7: 'Excellent microtexture.',
      benefit8: 'High resistance to torsion and impact.',
      benefit9: 'Applicable in layers, allowing control of drying times.'
    },
    'raad-rc': {
      intro: 'Plural and reactive asphalt sealer, manufactured with high molecular weight polymer-modified asphalts. It is designed to fully integrate with existing pavement, efficiently sealing asphalt surfaces in airports, streets and highways.',
      description: 'It is an ecological and environmentally friendly solution, as it is water-based, contains no solvents and its preparation and application process requires heating, guaranteeing safety and sustainability without compromising its performance.',
      use1: 'Areas subject to fuel and oil spills.',
      use2: 'Areas with time restrictions for working: shopping centers, urban areas, airports.',
      use3: 'Protects asphalt layers from oxidation caused by environmental factors.',
      use4: 'Rejuvenates the riding surface.',
      use5: 'Protects against water absorption in surface microcracks.',
      use6: 'Pavements showing wear.',
      benefit1: 'Resistant to aircraft fuels (Jet A JP-8), oil and lubricant.',
      benefit2: 'Unique reactive that chemically attacks oxides present on the exposed aggregate surface.',
      benefit3: 'Drying and curing both day and night.',
      benefit4: 'Virtually zero VOC (volatile organic compounds).'
    },
    h25: {
      intro: 'It is a modified hydrocarbon additive, composed of an emulsified high molecular weight thermoplastic derived from asphalt. This innovative product significantly improves the surface of asphalt pavements, providing efficient protection against environmental factors and moderate traffic. Additionally, it is formulated without the presence of PAH (Polycyclic Aromatic Hydrocarbons), compounds known for their carcinogenic potential, which guarantees a safer and more health-friendly option.',
      description: 'Its structure, enriched with polymers, low penetration asphalts and high-quality minerals, gives it exceptional durability. Fast-drying, it can be applied both at night and in areas without direct sun exposure, ensuring flexibility in use and maximum efficiency in different conditions.',
      use1: 'For low to regular operation areas such as taxiways, landside roads, internal roads, platform roads and runway lateral thirds.',
      benefit1: 'Does not contain Polycyclic Aromatic Hydrocarbons (Non-PAHs)',
      benefit2: 'High softening point.',
      benefit3: 'Better ductility in cold climates.',
      benefit4: 'Safe to handle and store.',
      benefit5: 'Very good chemical resistance, spill resistance.',
      benefit6: 'Due to its high molecular weight, it has very good cohesion and high abrasion resistance.',
      benefit7: 'Fast drying and curing time, generally 2 hours.',
      benefit8: 'High resistance to infrared and UV rays.',
      benefit9: 'Protects pavements from wear and environmental factors.',
      benefit10: 'Recommended for low traffic areas, runway lateral thirds and margins.',
      benefit11: 'Does not decrease friction by containing minerals in its internal structure and maintains macrotexture.'
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
      company: 'Carbonitte',
      tagline: 'Innovative solutions and cutting-edge technology',
      address: 'Address',
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

  // Update technical sheet link if the function exists
  if (typeof updateTechnicalSheetLink === 'function') {
    updateTechnicalSheetLink();
  }
}

// Translate page on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', translatePage);
} else {
  // DOM is already ready, translate immediately
  translatePage();
}
