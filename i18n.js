(function (global) {
  'use strict';

  var T = {
    fr: {
      // NAV
      'nav.about':     'À propos',
      'nav.services':  'Forfaits',
      'nav.alacarte':  'À la carte',
      'nav.parcours':  'Parcours',
      'nav.portfolio': 'Portfolio',
      'nav.presse':    'Dans la presse',
      'nav.contact':   'Contactez-moi',

      // FOOTER
      'footer.copy': '© 2026 Mario Jorge Ramos — Tous droits réservés — Montréal, QC',

      // SPLASH
      'splash.sub':              'Spécialiste des communications',
      'splash.services.label':   'Offre de<br>services',
      'splash.services.desc':    'Communications, relations de presse et stratégie de lancement.',
      'splash.portfolio.desc':   'Projets, productions et réalisations.',
      'splash.blog.desc':        'Blogue sur l\'industrie du jeu vidéo au Québec.',

      // HERO
      'hero.tag':              'Spécialiste des communications en jeu vidéo',
      'hero.slogan':           'Vos jeux méritent<br>d\'être <em>vus</em> et <em>joués</em>.',
      'hero.btn.services':     'Voir les forfaits',
      'hero.btn.contact':      'Discutons de votre projet',
      'hero.stat.exp':         'Années d\'expérience dans les médias<br>et dans l\'industrie du jeu vidéo',
      'hero.stat.gemaux':      'Lauréat Prix Gémeaux',
      'hero.stat.bell':        'Bell Média / RDS Jeux vidéo',
      'hero.stat.bell.unit':   ' ans',
      'hero.stat.lang.unit':   ' langues',

      // ABOUT
      'about.tag': 'À propos',
      'about.p1':  'Je suis un <strong>professionnel des médias numériques et de la communication</strong> avec une connaissance approfondie de l\'industrie du jeu vidéo — de l\'intérieur. J\'ai couvert, promu et lancé des jeux. J\'ai géré des marques, construit des communautés, et obtenu des couvertures dans les médias qui comptent.',
      'about.p2':  'Mon avantage, c\'est un <strong>réseau humain</strong> bâti sur 8 ans dans cet écosystème : journalistes, développeurs, éditeurs, organisateurs d\'événements, mais aussi créateurs de contenu et influenceurs gaming. Quand je vous représente, je parle la même langue que vos interlocuteurs.',
      'about.p3':  'Étant moi-même journaliste en jeu vidéo, je comprends les médias de l\'intérieur — <strong>comment ils pensent, ce qui retient leur attention</strong>, et ce qui finit à la corbeille. C\'est un avantage que peu d\'agences de communication peuvent offrir.',
      'about.skill.pr':      'Relations de presse',
      'about.skill.social':  'Stratégie réseaux sociaux',
      'about.skill.content': 'Rédaction / création de contenu',
      'about.skill.gaming':  'Connaissance industrie JV',
      'about.card.hiu.title':       'Responsable des communications',
      'about.card.hiu.desc':        'Lancement AA, relations de presse internationales, gestion des réseaux sociaux et des communautés.',
      'about.card.bell.title':      'Rédacteur en chef',
      'about.card.bell.desc':       'J\'ai dirigé la marque RDS Jeux vidéo pendant 5 ans — couverture éditoriale, partenariats commerciaux et développement d\'audience.',
      'about.card.guilde.title':    'Consultant aux communications',
      'about.card.guilde.desc':     'Soutien stratégique aux communications de l\'association qui représente l\'industrie du jeu vidéo québécoise, incluant les initatives comme la Zone Indie Loto-Québec, les DemoNights, le MIGS.',
      'about.card.gardiens.title':  'Directeur des communications',
      'about.card.gardiens.desc':   'Direction des communications et stratégie numérique pour l\'OBNL dédié au bien-être des joueurs, incluant la production balado et les campagnes de sensibilisation.',

      // SERVICES
      'services.tag':         'Forfaits',
      'services.h2':          'Choisissez votre niveau<br>d\'engagement',
      'services.desc':        'Trois formules conçues pour s\'adapter à vos besoins et votre budget. Pas de contrat d\'un an obligatoire. Pas de frais cachés.',
      'services.card1.badge': 'Ponctuel',
      'services.card1.title': 'Conseil Express',
      'services.card1.unit':  ' / heure',
      'services.card1.desc':  'Vous avez une question stratégique précise. On règle ça ensemble en 1 ou 2 heures.',
      'services.card1.li1':   'Consultation stratégique 1h ou 2h',
      'services.card1.li2':   'Audit de votre présence actuelle',
      'services.card1.li3':   'Recommandations actionnables immédiates',
      'services.card1.li4':   'Idéal pour un studio en début de parcours',
      'services.card1.li5':   '1re heure de découverte à 75 $',
      'services.card2.badge': '⭐ Recommandé',
      'services.card2.title': 'Pack Lancement',
      'services.card2.desc':  'Le forfait complet pour un lancement réussi. 8 semaines d\'accompagnement du plan à la couverture presse.',
      'services.card2.li1':   'Plan de communication complet (8 semaines)',
      'services.card2.li2':   'Kit de presse — communiqué + assets',
      'services.card2.li3':   'Envoi aux médias ciblés',
      'services.card2.li4':   'Stratégie réseaux sociaux + calendrier éditorial',
      'services.card2.li5':   'Relances et gestion des demandes presse',
      'services.card2.li6':   'Rapport et bilan post-lancement',
      'services.card2.li7':   '1 séance de révision incluse',
      'services.card3.badge': 'Récurrent',
      'services.card3.title': 'Retainer Mensuel',
      'services.card3.unit':  ' / mois',
      'services.card3.desc':  'Votre spécialiste comm dédié chaque mois — disponible, réactif, intégré à votre rythme de développement.',
      'services.card3.li1':   '3-4 jours / mois de disponibilité dédiée',
      'services.card3.li2':   'Gestion réseaux sociaux — 2 à 3 posts / semaine',
      'services.card3.li3':   'Veille médiatique gaming Québec',
      'services.card3.li4':   '1 communiqué / annonce communautaire par mois',
      'services.card3.li5':   'Accès prioritaire en période de lancement',
      'services.card3.li6':   'Engagement minimum 3 mois',
      'services.note':        '// Les forfaits sont des points de départ — chaque projet est unique. Contactez-moi pour une proposition personnalisée.',

      // À LA CARTE
      'carte.tag':        'Services',
      'carte.h2':         'À la carte',
      'carte.desc':       'Besoin d\'un service précis, sans forfait complet ? Choisissez exactement ce dont vous avez besoin.',
      'carte.cat1.title': 'Relations de presse',
      'carte.cat1.row1':  'Rédaction d\'un communiqué de presse',
      'carte.cat1.row2':  'Liste médias ciblée + envoi (QC)',
      'carte.cat1.row3':  'Relances et gestion des demandes',
      'carte.cat1.row4':  'Traduction FR ↔ EN',
      'carte.cat2.title': 'Stratégie & planning',
      'carte.cat2.row1':  'Audit de communication (état des lieux)',
      'carte.cat2.row2':  'Plan de communication lancement',
      'carte.cat2.row3':  'Stratégie réseaux sociaux (document)',
      'carte.cat2.row4':  'Simulation de critique professionnelle (mock review)',
      'carte.cat3.title': 'Contenu & réseaux sociaux',
      'carte.cat3.row1':  'Calendrier éditorial mensuel (30 idées)',
      'carte.cat3.row2':  'Rédaction + mise en page posts (×10)',
      'carte.cat3.row3':  'Prise en charge complète réseaux (4 sem.)',
      'carte.cat3.row4':  'Couverture événement (journée)',
      'carte.note':       '// Tous les prix en CAD, avant taxes. Ajustables selon la taille du studio et la complexité du projet.',

      // EXPÉRIENCE
      'exp.tag':               'Parcours',
      'exp.h2':                'Le bon joueur<br>pour votre équipe',
      'exp.desc':              'J\'ai évolué dans les deux solitudes de l\'industrie médias-gaming : la grande diffusion (Bell Média) et le terrain indie (La Guilde, Rogue Factor). Cette dualité me permet de positionner votre studio auprès du grand public autant que des audiences spécialisées.',
      'exp.industries.title':  'INDUSTRIES COUVERTES',
      'exp.tag1':  'Jeux vidéo AA',
      'exp.tag2':  'Studios indépendants',
      'exp.tag3':  'Médias numériques',
      'exp.tag4':  'Télévision',
      'exp.tag5':  'Événementiel',
      'exp.tag6':  'OBNL culturel',
      'exp.tl1.role':    'Scénariste, réalisateur, monteur vidéo',
      'exp.tl1.company': 'Séries numériques originales sur TOU.TV et Ztélé Temps Mort et Projet-M',
      'exp.tl1.tag2':    'Temps Mort',
      'exp.tl1.tag3':    'Projet-M',
      'exp.tl2.role':    'Fondateur et rédacteur en chef — Vidéoludique.ca',
      'exp.tl2.company': 'Blogue indépendant dédié à la critique et à l\'actualité du jeu vidéo',
      'exp.tl2.tag1':    'Journalisme',
      'exp.tl2.tag2':    'Critique de jeux',
      'exp.tl2.tag3':    'Blogue',
      'exp.tl3.role':    'Blogueur pop culture, jeux vidéo et techno',
      'exp.tl3.company': 'Radio-Canada, RDS, Ztélé, Balle Courbe…',
      'exp.tl3.tag1':    'Chroniques',
      'exp.tl3.tag2':    'Contenu',
      'exp.tl3.tag3':    'Médias',
      'exp.tl5.role':    'Responsable des communications — Rogue Factor',
      'exp.tl5.company': 'Lancement AA de Hell is Us, relations de presse internationales et gestion des communautés.',
      'exp.tl5.tag1':    'Rogue Factor',
      'exp.tl5.tag2':    'Hell is Us',
      'exp.tl5.tag3':    'Jeu vidéo AA',
      'exp.tl6.role':    'Consultant aux communications — La Guilde du jeu vidéo du Québec & XP Gaming',
      'exp.tl6.company': 'Soutien stratégique aux communications de l\'association qui représente l\'industrie du jeu vidéo québécoise.',
      'exp.tl6.tag1':    'La Guilde',
      'exp.tl6.tag2':    'XP Gaming',
      'exp.tl6.tag3':    'Relations publiques',
      'exp.tl4.role':    'Rédacteur en chef — Bell Média / RDS Jeux vidéo',
      'exp.tl4.company': 'Fondateur et pilote éditorial de la marque RDS Jeux vidéo pendant 5 ans.',
      'exp.tl4.tag1':    'Bell Média',
      'exp.tl4.tag3':    'Jeu vidéo AA',
      'exp.tl4.tag4':    'Influenceurs gaming',

      // CONTACT
      'contact.tag': 'Contact',
      'contact.h2':  'Votre prochain lancement<br>commence <em style="color:var(--teal); font-style:normal;">ici</em>.',
      'contact.sub': 'Une première conversation sans engagement pour parler de votre projet, votre budget, et voir si on est le bon match. Première heure de consultation à 75 $.',
      'contact.btn': 'Écrivez-moi maintenant',

      // PORTFOLIO PAGE
      'portfolio.tag':        'Portfolio',
      'portfolio.h2':         'Projets',
      'portfolio.desc':       'Une sélection de mandats en communication à travers les jeux vidéo, le cinéma, la télévision et la bande dessinée.',
      'portfolio.filter.all': 'Tous',
      'portfolio.empty':      'Aucun projet dans cette catégorie pour l\'instant.',

      // CATEGORY LABELS
      'cat.jeux-video':    'Jeux vidéo',
      'cat.cinema-tv':     'Cinéma / TV',
      'cat.bande-dessinee':'Bande dessinée',
      'cat.balado':        'Balado',

      // PRESSE PAGE
      'presse.tag':   'Presse',
      'presse.h2':    'Dans la presse',
      'presse.desc':  'Articles, entrevues et mentions dans les médias — une sélection de couvertures presse autour de mes projets et mandats en communications.',
      'presse.empty': 'Aucun article pour l\'instant.',

      // PROJECT PAGE
      'project.meta.category':  'Catégorie',
      'project.meta.role':      'Rôle',
      'project.meta.medium':    'Médium',
      'project.meta.year':      'Année',
      'project.meta.link':      'Voir le projet',
      'project.video.label':    'Vidéo',
      'project.gallery.label':  'Galerie',
      'project.accolades.label':'Accolades',
      'project.notfound.h2':    'Projet introuvable',
      'project.notfound.p':     'Ce projet n\'existe pas ou a été supprimé.',
      'project.back':           'Portfolio',

      // ARTICLE PAGE
      'article.notfound.h2':    'Article introuvable',
      'article.notfound.p':     'Cet article n\'existe pas ou a été supprimé.',
      'article.back':           'Dans la presse',
      'article.meta.publication':'Publication',
      'article.meta.author':    'Auteur',
      'article.meta.date':      'Date de parution',
      'article.meta.readlink':  'Lire l\'article',

      // META
      'meta.title.index':    'Mario J. Ramos — Spécialiste des communications',
      'meta.desc.index':     'Mario J. Ramos, spécialiste des communications — stratégie de lancement, relations de presse et communications pour studios de jeux vidéo, productions cinéma et bande dessinée.',
      'meta.title.portfolio':'Mario J. Ramos — Portfolio',
      'meta.desc.portfolio': 'Portfolio de Mario J. Ramos — projets en communications pour jeux vidéo, cinéma/TV et bande dessinée.',
      'meta.title.presse':   'Mario J. Ramos — Dans la presse',
      'meta.desc.presse':    'Revue de presse de Mario J. Ramos — articles et mentions dans les médias spécialisés en jeux vidéo, cinéma et bande dessinée.',

      // DATE LOCALE
      'date.locale': 'fr-CA'
    },

    en: {
      // NAV
      'nav.about':     'About',
      'nav.services':  'Packages',
      'nav.alacarte':  'À la carte',
      'nav.parcours':  'Career',
      'nav.portfolio': 'Portfolio',
      'nav.presse':    'Press',
      'nav.contact':   'Contact me',

      // FOOTER
      'footer.copy': '© 2026 Mario Jorge Ramos — All rights reserved — Montréal, QC',

      // SPLASH
      'splash.sub':            'Communications Specialist',
      'splash.services.label': 'Service<br>Offer',
      'splash.services.desc':  'Communications, press relations and launch strategy.',
      'splash.portfolio.desc': 'Projects, productions and achievements.',
      'splash.blog.desc':      'Blog on the video game industry in Quebec.',

      // HERO
      'hero.tag':            'Video game communications specialist',
      'hero.slogan':         'Your games deserve<br>to be <em>seen</em> and <em>played</em>.',
      'hero.btn.services':   'View packages',
      'hero.btn.contact':    'Let\'s discuss your project',
      'hero.stat.exp':       'Years of experience in media<br>and the video game industry',
      'hero.stat.gemaux':    'Gemini Award Winner',
      'hero.stat.bell':      'Bell Media / RDS Gaming',
      'hero.stat.bell.unit': ' yrs',
      'hero.stat.lang.unit': ' lang.',

      // ABOUT
      'about.tag': 'About',
      'about.p1':  'I am a <strong>digital media and communications professional</strong> with deep knowledge of the video game industry — from the inside. I\'ve covered, promoted and launched games. I\'ve managed brands, built communities, and secured coverage in the media that matters.',
      'about.p2':  'My edge is a <strong>human network</strong> built over 8 years in this ecosystem: journalists, developers, publishers, event organizers, as well as gaming content creators and influencers. When I represent you, I speak the same language as your contacts.',
      'about.p3':  'As a video game journalist myself, I understand media from the inside — <strong>how they think, what captures their attention</strong>, and what ends up in the trash. It\'s an advantage few communications agencies can offer.',
      'about.skill.pr':      'Press relations',
      'about.skill.social':  'Social media strategy',
      'about.skill.content': 'Copywriting / content creation',
      'about.skill.gaming':  'Gaming industry knowledge',
      'about.card.hiu.title':       'Communications Manager',
      'about.card.hiu.desc':        'AA launch, international press relations, social media and community management.',
      'about.card.bell.title':      'Editor-in-Chief',
      'about.card.bell.desc':       'I led the RDS Gaming brand for 5 years — editorial coverage, commercial partnerships and audience development.',
      'about.card.guilde.title':    'Communications Consultant',
      'about.card.guilde.desc':     'Strategic communications support for the association representing the Quebec video game industry, including initiatives like Zone Indie Loto-Québec, DemoNights, and MIGS.',
      'about.card.gardiens.title':  'Communications Director',
      'about.card.gardiens.desc':   'Communications leadership and digital strategy for the non-profit dedicated to player wellness, including podcast production and awareness campaigns.',

      // SERVICES
      'services.tag':         'Packages',
      'services.h2':          'Choose your level<br>of commitment',
      'services.desc':        'Three plans designed to fit your needs and budget. No mandatory one-year contract. No hidden fees.',
      'services.card1.badge': 'One-time',
      'services.card1.title': 'Express Consulting',
      'services.card1.unit':  ' / hour',
      'services.card1.desc':  'You have a specific strategic question. We sort it out together in 1 or 2 hours.',
      'services.card1.li1':   '1h or 2h strategic consultation',
      'services.card1.li2':   'Audit of your current presence',
      'services.card1.li3':   'Immediate actionable recommendations',
      'services.card1.li4':   'Ideal for an early-stage studio',
      'services.card1.li5':   '1st discovery hour at $75',
      'services.card2.badge': '⭐ Recommended',
      'services.card2.title': 'Launch Package',
      'services.card2.desc':  'The complete package for a successful launch. 8 weeks of support from plan to press coverage.',
      'services.card2.li1':   'Full communications plan (8 weeks)',
      'services.card2.li2':   'Press kit — press release + assets',
      'services.card2.li3':   'Distribution to targeted media',
      'services.card2.li4':   'Social media strategy + editorial calendar',
      'services.card2.li5':   'Follow-ups and press inquiry management',
      'services.card2.li6':   'Post-launch report and review',
      'services.card2.li7':   '1 revision session included',
      'services.card3.badge': 'Recurring',
      'services.card3.title': 'Monthly Retainer',
      'services.card3.unit':  ' / month',
      'services.card3.desc':  'Your dedicated comms specialist every month — available, responsive, integrated into your development pace.',
      'services.card3.li1':   '3-4 days / month of dedicated availability',
      'services.card3.li2':   'Social media management — 2 to 3 posts / week',
      'services.card3.li3':   'Quebec gaming media monitoring',
      'services.card3.li4':   '1 press release / community announcement per month',
      'services.card3.li5':   'Priority access during launch periods',
      'services.card3.li6':   'Minimum 3-month commitment',
      'services.note':        '// Packages are starting points — every project is unique. Contact me for a customized proposal.',

      // À LA CARTE
      'carte.tag':        'Services',
      'carte.h2':         'À la carte',
      'carte.desc':       'Need a specific service, without a full package? Choose exactly what you need.',
      'carte.cat1.title': 'Press relations',
      'carte.cat1.row1':  'Press release writing',
      'carte.cat1.row2':  'Targeted media list + distribution (QC)',
      'carte.cat1.row3':  'Follow-ups and inquiry management',
      'carte.cat1.row4':  'FR ↔ EN translation',
      'carte.cat2.title': 'Strategy & planning',
      'carte.cat2.row1':  'Communications audit (current state)',
      'carte.cat2.row2':  'Launch communications plan',
      'carte.cat2.row3':  'Social media strategy (document)',
      'carte.cat2.row4':  'Professional critique simulation (mock review)',
      'carte.cat3.title': 'Content & social media',
      'carte.cat3.row1':  'Monthly editorial calendar (30 ideas)',
      'carte.cat3.row2':  'Post writing + layout (×10)',
      'carte.cat3.row3':  'Full social media management (4 wks)',
      'carte.cat3.row4':  'Event coverage (full day)',
      'carte.note':       '// All prices in CAD, before taxes. Adjustable based on studio size and project complexity.',

      // EXPÉRIENCE
      'exp.tag':               'Career',
      'exp.h2':                'The right player<br>for your team',
      'exp.desc':              'I\'ve evolved in both worlds of the media-gaming industry: mainstream broadcasting (Bell Media) and the indie scene (La Guilde, Rogue Factor). This duality allows me to position your studio with the general public as well as specialized audiences.',
      'exp.industries.title':  'INDUSTRIES COVERED',
      'exp.tag1':  'AA video games',
      'exp.tag2':  'Independent studios',
      'exp.tag3':  'Digital media',
      'exp.tag4':  'Television',
      'exp.tag5':  'Events',
      'exp.tag6':  'Cultural non-profit',
      'exp.tl1.role':    'Screenwriter, director, video editor',
      'exp.tl1.company': 'Original web series on TOU.TV and Ztélé — Temps Mort and Projet-M',
      'exp.tl1.tag2':    'Temps Mort',
      'exp.tl1.tag3':    'Projet-M',
      'exp.tl2.role':    'Founder and Editor-in-Chief — Vidéoludique.ca',
      'exp.tl2.company': 'Independent blog dedicated to video game criticism and news',
      'exp.tl2.tag1':    'Journalism',
      'exp.tl2.tag2':    'Game reviews',
      'exp.tl2.tag3':    'Blog',
      'exp.tl3.role':    'Pop culture, gaming and tech blogger',
      'exp.tl3.company': 'Radio-Canada, RDS, Ztélé, Balle Courbe…',
      'exp.tl3.tag1':    'Columns',
      'exp.tl3.tag2':    'Content',
      'exp.tl3.tag3':    'Media',
      'exp.tl5.role':    'Communications Manager — Rogue Factor',
      'exp.tl5.company': 'AA launch of Hell is Us, international press relations and community management.',
      'exp.tl5.tag1':    'Rogue Factor',
      'exp.tl5.tag2':    'Hell is Us',
      'exp.tl5.tag3':    'AA gaming',
      'exp.tl6.role':    'Communications Consultant — La Guilde du jeu vidéo du Québec & XP Gaming',
      'exp.tl6.company': 'Strategic communications support for the association representing Quebec\'s video game industry.',
      'exp.tl6.tag1':    'La Guilde',
      'exp.tl6.tag2':    'XP Gaming',
      'exp.tl6.tag3':    'Public relations',
      'exp.tl4.role':    'Editor-in-Chief — Bell Media / RDS Gaming',
      'exp.tl4.company': 'Founder and editorial lead of the RDS Gaming brand for 5 years.',
      'exp.tl4.tag1':    'Bell Media',
      'exp.tl4.tag3':    'AA gaming',
      'exp.tl4.tag4':    'Gaming influencers',

      // CONTACT
      'contact.tag': 'Contact',
      'contact.h2':  'Your next launch<br>starts <em style="color:var(--teal); font-style:normal;">here</em>.',
      'contact.sub': 'A first no-commitment conversation to talk about your project, your budget, and see if we\'re a good match. First consultation hour at $75.',
      'contact.btn': 'Write to me now',

      // PORTFOLIO PAGE
      'portfolio.tag':        'Portfolio',
      'portfolio.h2':         'Projects',
      'portfolio.desc':       'A selection of communications mandates across video games, cinema, television and comics.',
      'portfolio.filter.all': 'All',
      'portfolio.empty':      'No projects in this category yet.',

      // CATEGORY LABELS
      'cat.jeux-video':    'Video games',
      'cat.cinema-tv':     'Cinema / TV',
      'cat.bande-dessinee':'Comics',
      'cat.balado':        'Podcast',

      // PRESSE PAGE
      'presse.tag':   'Press',
      'presse.h2':    'In the press',
      'presse.desc':  'Articles, interviews and media mentions — a selection of press coverage around my projects and communications mandates.',
      'presse.empty': 'No articles yet.',

      // PROJECT PAGE
      'project.meta.category':  'Category',
      'project.meta.role':      'Role',
      'project.meta.medium':    'Medium',
      'project.meta.year':      'Year',
      'project.meta.link':      'View project',
      'project.video.label':    'Video',
      'project.gallery.label':  'Gallery',
      'project.accolades.label':'Accolades',
      'project.notfound.h2':    'Project not found',
      'project.notfound.p':     'This project does not exist or has been deleted.',
      'project.back':           'Portfolio',

      // ARTICLE PAGE
      'article.notfound.h2':    'Article not found',
      'article.notfound.p':     'This article does not exist or has been deleted.',
      'article.back':           'In the press',
      'article.meta.publication':'Publication',
      'article.meta.author':    'Author',
      'article.meta.date':      'Publication date',
      'article.meta.readlink':  'Read the article',

      // META
      'meta.title.index':    'Mario J. Ramos — Communications Specialist',
      'meta.desc.index':     'Mario J. Ramos, communications specialist — launch strategy, press relations and communications for video game studios, film productions and comics.',
      'meta.title.portfolio':'Mario J. Ramos — Portfolio',
      'meta.desc.portfolio': 'Mario J. Ramos portfolio — communications projects for video games, film/TV and comics.',
      'meta.title.presse':   'Mario J. Ramos — In the press',
      'meta.desc.presse':    'Press coverage of Mario J. Ramos — articles and mentions in specialized media for video games, cinema and comics.',

      // DATE LOCALE
      'date.locale': 'en-CA'
    },

    pt: {
      // NAV
      'nav.about':     'Sobre',
      'nav.services':  'Pacotes',
      'nav.alacarte':  'À la carte',
      'nav.parcours':  'Percurso',
      'nav.portfolio': 'Portefólio',
      'nav.presse':    'Imprensa',
      'nav.contact':   'Contacte-me',

      // FOOTER
      'footer.copy': '© 2026 Mario Jorge Ramos — Todos os direitos reservados — Montreal, QC',

      // SPLASH
      'splash.sub':              'Especialista em comunicação',
      'splash.services.label':   'Oferta de<br>serviços',
      'splash.services.desc':    'Comunicação, relações com a imprensa e estratégia de lançamento.',
      'splash.portfolio.desc':   'Projetos, produções e realizações.',
      'splash.blog.desc':        'Blogue sobre a indústria dos videojogos no Quebeque.',

      // HERO
      'hero.tag':              'Especialista em comunicação de videojogos',
      'hero.slogan':           'Os seus jogos merecem<br>ser <em>vistos</em> e <em>jogados</em>.',
      'hero.btn.services':     'Ver os pacotes',
      'hero.btn.contact':      'Vamos falar do seu projeto',
      'hero.stat.exp':         'Anos de experiência nos media<br>e na indústria dos videojogos',
      'hero.stat.gemaux':      'Vencedor do Prémio Gémeaux',
      'hero.stat.bell':        'Bell Média / RDS Videojogos',
      'hero.stat.bell.unit':   ' anos',
      'hero.stat.lang.unit':   ' línguas',

      // ABOUT
      'about.tag': 'Sobre',
      'about.p1':  'Sou um <strong>profissional de media digitais e comunicação</strong> com um conhecimento profundo da indústria dos videojogos — por dentro. Já cobri, promovi e lancei jogos. Geri marcas, criei comunidades e obtive cobertura nos media que contam.',
      'about.p2':  'A minha vantagem é uma <strong>rede humana</strong> construída ao longo de 8 anos neste ecossistema: jornalistas, criadores, editoras, organizadores de eventos, bem como criadores de conteúdo e influenciadores de gaming. Quando o represento, falo a mesma língua que os seus interlocutores.',
      'about.p3':  'Sendo eu próprio jornalista de videojogos, compreendo os media por dentro — <strong>como pensam, o que capta a sua atenção</strong> e o que acaba no lixo. É uma vantagem que poucas agências de comunicação podem oferecer.',
      'about.skill.pr':      'Relações com a imprensa',
      'about.skill.social':  'Estratégia de redes sociais',
      'about.skill.content': 'Redação / criação de conteúdo',
      'about.skill.gaming':  'Conhecimento da indústria de videojogos',
      'about.card.hiu.title':       'Responsável de comunicação',
      'about.card.hiu.desc':        'Lançamento AA, relações com a imprensa internacional, gestão de redes sociais e de comunidades.',
      'about.card.bell.title':      'Editor-chefe',
      'about.card.bell.desc':       'Dirigi a marca RDS Videojogos durante 5 anos — cobertura editorial, parcerias comerciais e desenvolvimento de audiência.',
      'about.card.guilde.title':    'Consultor de comunicação',
      'about.card.guilde.desc':     'Apoio estratégico à comunicação da associação que representa a indústria dos videojogos do Quebeque, incluindo iniciativas como a Zone Indie Loto-Québec, as DemoNights e o MIGS.',
      'about.card.gardiens.title':  'Diretor de comunicação',
      'about.card.gardiens.desc':   'Direção da comunicação e estratégia digital para a organização sem fins lucrativos dedicada ao bem-estar dos jogadores, incluindo a produção de podcast e campanhas de sensibilização.',

      // SERVICES
      'services.tag':         'Pacotes',
      'services.h2':          'Escolha o seu nível<br>de compromisso',
      'services.desc':        'Três fórmulas concebidas para se adaptarem às suas necessidades e ao seu orçamento. Sem contrato obrigatório de um ano. Sem custos escondidos.',
      'services.card1.badge': 'Pontual',
      'services.card1.title': 'Consultoria Express',
      'services.card1.unit':  ' / hora',
      'services.card1.desc':  'Tem uma questão estratégica específica. Resolvemo-la juntos em 1 ou 2 horas.',
      'services.card1.li1':   'Consultoria estratégica de 1h ou 2h',
      'services.card1.li2':   'Auditoria da sua presença atual',
      'services.card1.li3':   'Recomendações acionáveis imediatas',
      'services.card1.li4':   'Ideal para um estúdio em início de percurso',
      'services.card1.li5':   '1.ª hora de descoberta a 75 $',
      'services.card2.badge': '⭐ Recomendado',
      'services.card2.title': 'Pacote de Lançamento',
      'services.card2.desc':  'O pacote completo para um lançamento bem-sucedido. 8 semanas de acompanhamento, do plano à cobertura de imprensa.',
      'services.card2.li1':   'Plano de comunicação completo (8 semanas)',
      'services.card2.li2':   'Kit de imprensa — comunicado + materiais',
      'services.card2.li3':   'Envio para media segmentados',
      'services.card2.li4':   'Estratégia de redes sociais + calendário editorial',
      'services.card2.li5':   'Acompanhamento e gestão dos pedidos de imprensa',
      'services.card2.li6':   'Relatório e balanço pós-lançamento',
      'services.card2.li7':   '1 sessão de revisão incluída',
      'services.card3.badge': 'Recorrente',
      'services.card3.title': 'Avença Mensal',
      'services.card3.unit':  ' / mês',
      'services.card3.desc':  'O seu especialista de comunicação dedicado todos os meses — disponível, reativo e integrado no seu ritmo de desenvolvimento.',
      'services.card3.li1':   '3-4 dias / mês de disponibilidade dedicada',
      'services.card3.li2':   'Gestão de redes sociais — 2 a 3 publicações / semana',
      'services.card3.li3':   'Monitorização dos media de gaming do Quebeque',
      'services.card3.li4':   '1 comunicado / anúncio comunitário por mês',
      'services.card3.li5':   'Acesso prioritário em períodos de lançamento',
      'services.card3.li6':   'Compromisso mínimo de 3 meses',
      'services.note':        '// Os pacotes são pontos de partida — cada projeto é único. Contacte-me para uma proposta personalizada.',

      // À LA CARTE
      'carte.tag':        'Serviços',
      'carte.h2':         'À la carte',
      'carte.desc':       'Precisa de um serviço específico, sem um pacote completo? Escolha exatamente o que precisa.',
      'carte.cat1.title': 'Relações com a imprensa',
      'carte.cat1.row1':  'Redação de um comunicado de imprensa',
      'carte.cat1.row2':  'Lista de media segmentada + envio (QC)',
      'carte.cat1.row3':  'Acompanhamento e gestão de pedidos',
      'carte.cat1.row4':  'Tradução FR ↔ EN',
      'carte.cat2.title': 'Estratégia e planeamento',
      'carte.cat2.row1':  'Auditoria de comunicação (ponto de situação)',
      'carte.cat2.row2':  'Plano de comunicação de lançamento',
      'carte.cat2.row3':  'Estratégia de redes sociais (documento)',
      'carte.cat2.row4':  'Simulação de crítica profissional (mock review)',
      'carte.cat3.title': 'Conteúdo e redes sociais',
      'carte.cat3.row1':  'Calendário editorial mensal (30 ideias)',
      'carte.cat3.row2':  'Redação + composição de publicações (×10)',
      'carte.cat3.row3':  'Gestão completa das redes sociais (4 sem.)',
      'carte.cat3.row4':  'Cobertura de evento (dia inteiro)',
      'carte.note':       '// Todos os preços em CAD, antes de impostos. Ajustáveis consoante a dimensão do estúdio e a complexidade do projeto.',

      // EXPÉRIENCE
      'exp.tag':               'Percurso',
      'exp.h2':                'O jogador certo<br>para a sua equipa',
      'exp.desc':              'Evoluí nos dois mundos da indústria media-gaming: a grande difusão (Bell Média) e o terreno indie (La Guilde, Rogue Factor). Esta dualidade permite-me posicionar o seu estúdio junto do grande público e de audiências especializadas.',
      'exp.industries.title':  'INDÚSTRIAS ABRANGIDAS',
      'exp.tag1':  'Videojogos AA',
      'exp.tag2':  'Estúdios independentes',
      'exp.tag3':  'Media digitais',
      'exp.tag4':  'Televisão',
      'exp.tag5':  'Eventos',
      'exp.tag6':  'Organização cultural sem fins lucrativos',
      'exp.tl1.role':    'Argumentista, realizador, editor de vídeo',
      'exp.tl1.company': 'Séries digitais originais na TOU.TV e na Ztélé — Temps Mort e Projet-M',
      'exp.tl1.tag2':    'Temps Mort',
      'exp.tl1.tag3':    'Projet-M',
      'exp.tl2.role':    'Fundador e editor-chefe — Vidéoludique.ca',
      'exp.tl2.company': 'Blogue independente dedicado à crítica e à atualidade dos videojogos',
      'exp.tl2.tag1':    'Jornalismo',
      'exp.tl2.tag2':    'Crítica de jogos',
      'exp.tl2.tag3':    'Blogue',
      'exp.tl3.role':    'Blogger de cultura pop, videojogos e tecnologia',
      'exp.tl3.company': 'Radio-Canada, RDS, Ztélé, Balle Courbe…',
      'exp.tl3.tag1':    'Crónicas',
      'exp.tl3.tag2':    'Conteúdo',
      'exp.tl3.tag3':    'Media',
      'exp.tl5.role':    'Responsável de comunicação — Rogue Factor',
      'exp.tl5.company': 'Lançamento AA de Hell is Us, relações com a imprensa internacional e gestão de comunidades.',
      'exp.tl5.tag1':    'Rogue Factor',
      'exp.tl5.tag2':    'Hell is Us',
      'exp.tl5.tag3':    'Videojogos AA',
      'exp.tl6.role':    'Consultor de comunicação — La Guilde du jeu vidéo du Québec & XP Gaming',
      'exp.tl6.company': 'Apoio estratégico à comunicação da associação que representa a indústria dos videojogos do Quebeque.',
      'exp.tl6.tag1':    'La Guilde',
      'exp.tl6.tag2':    'XP Gaming',
      'exp.tl6.tag3':    'Relações públicas',
      'exp.tl4.role':    'Editor-chefe — Bell Média / RDS Videojogos',
      'exp.tl4.company': 'Fundador e responsável editorial da marca RDS Videojogos durante 5 anos.',
      'exp.tl4.tag1':    'Bell Média',
      'exp.tl4.tag3':    'Videojogos AA',
      'exp.tl4.tag4':    'Influenciadores de gaming',

      // CONTACT
      'contact.tag': 'Contacto',
      'contact.h2':  'O seu próximo lançamento<br>começa <em style="color:var(--teal); font-style:normal;">aqui</em>.',
      'contact.sub': 'Uma primeira conversa sem compromisso para falar do seu projeto, do seu orçamento e ver se somos o par certo. Primeira hora de consultoria a 75 $.',
      'contact.btn': 'Escreva-me agora',

      // PORTFOLIO PAGE
      'portfolio.tag':        'Portefólio',
      'portfolio.h2':         'Projetos',
      'portfolio.desc':       'Uma seleção de mandatos de comunicação em videojogos, cinema, televisão e banda desenhada.',
      'portfolio.filter.all': 'Todos',
      'portfolio.empty':      'Ainda não há projetos nesta categoria.',

      // CATEGORY LABELS
      'cat.jeux-video':    'Videojogos',
      'cat.cinema-tv':     'Cinema / TV',
      'cat.bande-dessinee':'Banda desenhada',
      'cat.balado':        'Podcast',

      // PRESSE PAGE
      'presse.tag':   'Imprensa',
      'presse.h2':    'Na imprensa',
      'presse.desc':  'Artigos, entrevistas e menções nos media — uma seleção de cobertura de imprensa em torno dos meus projetos e mandatos de comunicação.',
      'presse.empty': 'Ainda não há artigos.',

      // PROJECT PAGE
      'project.meta.category':  'Categoria',
      'project.meta.role':      'Função',
      'project.meta.medium':    'Meio',
      'project.meta.year':      'Ano',
      'project.meta.link':      'Ver o projeto',
      'project.video.label':    'Vídeo',
      'project.gallery.label':  'Galeria',
      'project.accolades.label':'Distinções',
      'project.notfound.h2':    'Projeto não encontrado',
      'project.notfound.p':     'Este projeto não existe ou foi eliminado.',
      'project.back':           'Portefólio',

      // ARTICLE PAGE
      'article.notfound.h2':    'Artigo não encontrado',
      'article.notfound.p':     'Este artigo não existe ou foi eliminado.',
      'article.back':           'Na imprensa',
      'article.meta.publication':'Publicação',
      'article.meta.author':    'Autor',
      'article.meta.date':      'Data de publicação',
      'article.meta.readlink':  'Ler o artigo',

      // META
      'meta.title.index':    'Mario J. Ramos — Especialista em comunicação',
      'meta.desc.index':     'Mario J. Ramos, especialista em comunicação — estratégia de lançamento, relações com a imprensa e comunicação para estúdios de videojogos, produções de cinema e banda desenhada.',
      'meta.title.portfolio':'Mario J. Ramos — Portefólio',
      'meta.desc.portfolio': 'Portefólio de Mario J. Ramos — projetos de comunicação para videojogos, cinema/TV e banda desenhada.',
      'meta.title.presse':   'Mario J. Ramos — Na imprensa',
      'meta.desc.presse':    'Revista de imprensa de Mario J. Ramos — artigos e menções nos media especializados em videojogos, cinema e banda desenhada.',

      // DATE LOCALE
      'date.locale': 'pt-PT'
    }
  };

  // ── CORE API ──────────────────────────────────────────────

  var LANGS = ['fr', 'en', 'pt'];
  var OG_LOCALES = { fr: 'fr_CA', en: 'en_CA', pt: 'pt_PT' };

  function getLang() {
    try {
      var p = new URLSearchParams(window.location.search).get('lang');
      if (p && LANGS.indexOf(p) !== -1) {
        localStorage.setItem('mjr_lang', p);
        return p;
      }
    } catch (e) {}
    return localStorage.getItem('mjr_lang') || 'fr';
  }

  function setLang(lang) {
    localStorage.setItem('mjr_lang', lang);
  }

  // Build the canonical URL for a given language (fr = clean/default URL,
  // en/pt carry a ?lang= parameter). Preserves other params such as ?id=.
  function urlForLang(lang) {
    var params = new URLSearchParams(window.location.search);
    if (lang === 'fr') { params.delete('lang'); }
    else { params.set('lang', lang); }
    var qs = params.toString();
    return window.location.origin + window.location.pathname + (qs ? '?' + qs : '');
  }

  // Keep <link rel=canonical>, og:url, og:locale and hreflang alternates in
  // sync with the active language (client-side i18n SEO/GEO signalling).
  function updateSeoLinks(lang) {
    var canonical = urlForLang(lang);

    var canon = document.querySelector('link[rel="canonical"]');
    if (canon) canon.setAttribute('href', canonical);

    var ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonical);

    var ogLoc = document.querySelector('meta[property="og:locale"]');
    if (ogLoc) ogLoc.setAttribute('content', OG_LOCALES[lang] || 'fr_CA');

    // hreflang alternates — created on the fly so dynamic pages (project /
    // article, which carry ?id=) are covered too.
    ['fr', 'en', 'pt', 'x-default'].forEach(function (hl) {
      var link = document.querySelector('link[rel="alternate"][hreflang="' + hl + '"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', hl);
        document.head.appendChild(link);
      }
      link.setAttribute('href', urlForLang(hl === 'x-default' ? 'fr' : hl));
    });
  }

  function t(key) {
    var lang = getLang();
    var val = (T[lang] || T.fr)[key];
    if (val === undefined) val = T.fr[key];
    return val !== undefined ? val : key;
  }

  function applyTranslations(lang) {
    var tr = T[lang] || T.fr;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (tr[key] !== undefined) el.textContent = tr[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (tr[key] !== undefined) el.innerHTML = tr[key];
    });

    document.documentElement.lang = lang;
    updateSeoLinks(lang);

    // Update page title & meta tags
    var page = document.documentElement.getAttribute('data-page');
    if (page) {
      if (tr['meta.title.' + page]) {
        document.title = tr['meta.title.' + page];
        var ogT  = document.querySelector('meta[property="og:title"]');
        var twT  = document.querySelector('meta[name="twitter:title"]');
        if (ogT) ogT.setAttribute('content', tr['meta.title.' + page]);
        if (twT) twT.setAttribute('content', tr['meta.title.' + page]);
      }
      if (tr['meta.desc.' + page]) {
        var metaD = document.querySelector('meta[name="description"]');
        var ogD   = document.querySelector('meta[property="og:description"]');
        var twD   = document.querySelector('meta[name="twitter:description"]');
        if (metaD) metaD.setAttribute('content', tr['meta.desc.' + page]);
        if (ogD)   ogD.setAttribute('content',   tr['meta.desc.' + page]);
        if (twD)   twD.setAttribute('content',   tr['meta.desc.' + page]);
      }
    }

    updateLangButton(lang);
  }

  function updateLangButton(lang) {
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      LANGS.forEach(function (code) {
        var span = btn.querySelector('[data-lang="' + code + '"]');
        if (span) span.classList.toggle('lang-active', lang === code);
      });
    });
  }

  function initLangBtn() {
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var idx = LANGS.indexOf(getLang());
        if (idx === -1) idx = 0;
        var next = LANGS[(idx + 1) % LANGS.length];
        setLang(next);
        // Reflect the language in the URL (?lang=) without a reload so the
        // page can be shared/bookmarked in the chosen language.
        try {
          if (window.history && window.history.replaceState) {
            window.history.replaceState(null, '', urlForLang(next));
          }
        } catch (e) {}
        applyTranslations(next);
        if (typeof global.onLangChange === 'function') {
          global.onLangChange(next);
        }
      });
    });
  }

  // ── PUBLIC API ────────────────────────────────────────────
  global.I18n = { getLang: getLang, setLang: setLang, t: t, apply: applyTranslations };

  document.addEventListener('DOMContentLoaded', function () {
    applyTranslations(getLang());
    initLangBtn();
  });

}(window));
