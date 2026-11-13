export const seasonsData = [
  {
    year: 2027,
    title: "Saison 2027",
    isComingSoon: true, // <-- Active automatiquement le composant "À venir / Chargement"
    events: []
  },
  {
    year: 2026,
    title: "Saison 2026",
    isComingSoon: false,
    events: [
      {
        id: 1,
        title: "39ème Superbiker de Mettet",
        dateDisplay: "9 - 11 Octobre 2026",
        startDateISO: "2026-10-09",
        endDateISO: "2026-10-11",
        location: "Circuit Jules Tacheny, Mettet",
        country: "be",
        countryName: "Belgique",
        type: "Compétition",
        description: "Objectif majeur de la saison ! Participation aux qualifications du mythique Superbiker.",
        link: "https://www.superbiker.com"
      },
      {
        id: 2,
        title: "Mettet - 1er manche du championnat de Belgique",
        dateDisplay: "7 - 8 Mars 2026",
        startDateISO: "2026-03-07",
        endDateISO: "2026-03-08",
        location: "Circuit Jules Tacheny, Mettet",
        country: "be",
        countryName: "Belgique",
        type: "Compétition",
        description: "Première manche du championnat de Belgique.",
        link: "https://www.fmb-bmb.be/evenement/supermoto-belgian-championship-benecup-10/"
      },
      {
        id: 3,
        title: "Chimay - 2ème manche du championnat de Belgique",
        dateDisplay: "11 - 12 Avril 2026",
        startDateISO: "2026-04-11",
        endDateISO: "2026-04-12",
        location: "Circuit du Chimay",
        country: "be",
        countryName: "Belgique",
        type: "Compétition",
        description: "Deuxième manche du championnat de Belgique.",
        link: "https://www.fmb-bmb.be/evenement/supermoto-belgian-championship-benecup-12/"
      },
      {
        id: 4,
        title: "Bilstain - 3ème manche du championnat de Belgique",
        dateDisplay: "9 - 10 Mai 2026",
        startDateISO: "2026-05-09",
        endDateISO: "2026-05-10",
        location: "Le Domaine Bilstain",
        country: "be",
        countryName: "Belgique",
        type: "Compétition",
        description: "Troisième manche du championnat de Belgique.",
        link: "https://www.fmb-bmb.be/evenement/supermoto-belgian-championship-benecup-13/"
      },
      {
        id: 5,
        title: "Battice - 4ème manche du championnat de Belgique",
        dateDisplay: "19 - 20 Septembre 2026",
        startDateISO: "2026-09-19",
        endDateISO: "2026-09-20",
        location: "Battice - Herve",
        country: "be",
        countryName: "Belgique",
        type: "Compétition",
        description: "Quatrième manche du championnat de Belgique.",
        link: "https://www.fmb-bmb.be/evenement/supermoto-belgian-championship-benecup-15/"
      },
      {
        id: 6,
        title: "Val D'argenton (79) - 1er manche du championnat de France",
        dateDisplay: "25 - 26 Avril 2026",
        startDateISO: "2026-04-25",
        endDateISO: "2026-04-26",
        location: "Circuit du Val d'argenton",
        country: "fr",
        countryName: "France",
        type: "Compétition",
        description: "Première manche du championnat de France.",
        link: "https://www.supermotard-france.fr/?epreuve=54371"
      },
      {
        id: 7,
        title: "Lohéac (35) - 2ème manche du championnat de France",
        dateDisplay: "6 - 7 Juin 2026",
        startDateISO: "2026-06-06",
        endDateISO: "2026-06-07",
        location: "Circuit de Lohéac",
        country: "fr",
        countryName: "France",
        type: "Compétition",
        description: "Deuxième manche du championnat de France.",
        link: "https://www.supermotard-france.fr/?epreuve=54372"
      },
      {
        id: 8,
        title: "Rouen (74) - 3ème manche du championnat de France",
        dateDisplay: "4 - 5 juillet 2026",
        startDateISO: "2026-07-04",
        endDateISO: "2026-07-05",
        location: "Circuit de Rouen",
        country: "fr",
        countryName: "France",
        type: "Compétition",
        description: "Troisième manche du championnat de France.",
        link: "https://www.supermotard-france.fr/?epreuve=54373"
      },
      {
        id: 9,
        title: "Saint-Amand-Colombiers (18) - 4ème manche du championnat de France",
        dateDisplay: "25 - 26 Juillet 2026",
        startDateISO: "2026-07-25",
        endDateISO: "2026-07-26",
        location: "Circuit Saint-Amand-Colombiers",
        country: "fr",
        countryName: "France",
        type: "Compétition",
        description: "Quatrième manche du championnat de France.",
        link: "https://www.supermotard-france.fr/?epreuve=54374"
      },
      {
        id: 10,
        title: "Circuit d'Albi - 5ème manche du championnat de France",
        dateDisplay: "29 - 30 Août 2026",
        startDateISO: "2026-08-29",
        endDateISO: "2026-08-30",
        location: "Circuit d'Albi",
        country: "fr",
        countryName: "France",
        type: "Compétition",
        description: "Cinquième manche du championnat de France.",
        link: "https://www.supermotard-france.fr/?epreuve=54375"
      },
      {
        id: 11,
        title: "Villard-Sous-Écot - 6ème manche du championnat de France",
        dateDisplay: "12 - 13 Septembre 2026",
        startDateISO: "2026-09-12",
        endDateISO: "2026-09-13",
        location: "Circuit Villard-Sous-Écot",
        country: "fr",
        countryName: "France",
        type: "Compétition",
        description: "Sixième manche du championnat de France.",
        link: "https://www.supermotard-france.fr/?epreuve=54376"
      },
      {
        id: 12,
        title: "Supermoto of Nations - 2026",
        dateDisplay: "26 - 27 Septembre 2026",
        startDateISO: "2026-09-26",
        endDateISO: "2026-09-27",
        location: "ADAC Circuit St. Wendel",
        country: "de",
        countryName: "Allemagne",
        type: "Compétition",
        description: "The 2026 FIM Supermoto of Nations is ready to bring the world’s best riders and national teams together for one epic weekend.",
        link: "https://www.supermotos1gp.com/event/gp_germany_st-wendel/"
      },
      {
        id: 13,
        title: "Mettet XMAS",
        dateDisplay: "11 & 12 décembre 2026",
        startDateISO: "2026-12-11",
        endDateISO: "2026-12-12",
        location: "Circuit Jules Tacheny, Mettet",
        country: "be",
        countryName: "Belgique",
        type: "Compétition",
        description: "Pour la deuxième édition, Mettet XP se transformera une nouvelle fois en véritable village de Noël ! Le temps d’un week-end, le Circuit Jules Tacheny accueille le Mettet XMAS : un événement unique mêlant sport, convivialité et ambiance festive.",
        link: "https://mettet-xp.be/mettet-xmas/"
      }
    ]
  }
];