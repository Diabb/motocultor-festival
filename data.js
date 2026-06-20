// Données de programmation Motocultor Festival 2026 — Carhaix
// Source : running order publié (mars 2026), mis à jour avec le changement
// du 14 août : Revnoir remplace Chelsea Grin sur Dave Mustage (17h25–18h10).
const FESTIVAL_DATA = {
  name: "Motocultor Festival 2026",
  location: "Carhaix-Plouguer, Kerampuilh",
  dates: "13–16 août 2026",
  stages: [
    { id: "mustage", name: "Dave Mustage", color: "#e8542c" },
    { id: "massey", name: "Massey Ferguscène", color: "#2c9e6b" },
    { id: "supositor", name: "Supositor Stage", color: "#c2a23a" },
    { id: "dickinscene", name: "Bruce Dickinscene", color: "#3a6fc2" }
  ],
  days: [
    {
      id: "jeu13",
      label: "Jeudi 13 août",
      sets: [
        { stage: "mustage", band: "Unearth", start: "15:15", end: "16:00" },
        { stage: "mustage", band: "Kittie", start: "16:50", end: "17:50" },
        { stage: "mustage", band: "TBC", start: "18:50", end: "19:50" },
        { stage: "mustage", band: "Godsmack", start: "20:55", end: "22:05" },
        { stage: "mustage", band: "Primus", start: "23:15", end: "00:25" },

        { stage: "massey", band: "Battlesnake", start: "16:05", end: "16:45" },
        { stage: "massey", band: "Pilori", start: "17:55", end: "18:45" },
        { stage: "massey", band: "Gaerea", start: "19:50", end: "20:50" },
        { stage: "massey", band: "Amenra", start: "22:10", end: "23:10" },
        { stage: "massey", band: "Oomph!", start: "00:30", end: "01:30" },

        { stage: "supositor", band: "200 Stab Wounds", start: "16:05", end: "16:45" },
        { stage: "supositor", band: "Sanguisugabogg", start: "17:55", end: "18:45" },
        { stage: "supositor", band: "Bloodbath", start: "19:50", end: "20:50" },
        { stage: "supositor", band: "Death Angel", start: "22:10", end: "23:10" },
        { stage: "supositor", band: "Municipal Waste", start: "00:30", end: "01:30" },

        { stage: "dickinscene", band: "Fauxx", start: "15:15", end: "16:00" },
        { stage: "dickinscene", band: "Brieg Guerveno", start: "16:50", end: "17:50" },
        { stage: "dickinscene", band: "Celkilt x Bagad de Quimper", start: "18:50", end: "19:50" },
        { stage: "dickinscene", band: "Denez Prigent", start: "20:55", end: "22:05" },
        { stage: "dickinscene", band: "Komodrag and the Mounodor", start: "23:15", end: "00:25" }
      ]
    },
    {
      id: "ven14",
      label: "Vendredi 14 août",
      sets: [
        { stage: "mustage", band: "Ice Sealed Eyes", start: "12:45", end: "13:25" },
        { stage: "mustage", band: "Cage Fight", start: "14:15", end: "14:55" },
        { stage: "mustage", band: "Hellripper", start: "15:45", end: "16:30" },
        { stage: "mustage", band: "Revnoir", start: "17:25", end: "18:10" },
        { stage: "mustage", band: "Lord of the Lost", start: "19:10", end: "20:00" },
        { stage: "mustage", band: "Mass Hysteria", start: "21:00", end: "22:00" },
        { stage: "mustage", band: "Slaughter to Prevail", start: "23:00", end: "00:10" },
        { stage: "mustage", band: "Filth", start: "01:20", end: "02:20" },

        { stage: "massey", band: "Gravity", start: "13:30", end: "14:10" },
        { stage: "massey", band: "Urne", start: "15:00", end: "15:40" },
        { stage: "massey", band: "Iotunn", start: "16:35", end: "17:20" },
        { stage: "massey", band: "Textures", start: "18:15", end: "19:05" },
        { stage: "massey", band: "Soen", start: "20:05", end: "20:55" },
        { stage: "massey", band: "Paradise Lost", start: "22:05", end: "23:05" },
        { stage: "massey", band: "Alcest", start: "00:15", end: "01:15" },

        { stage: "supositor", band: "Guineapig", start: "13:30", end: "14:10" },
        { stage: "supositor", band: "Skaphos", start: "15:00", end: "15:40" },
        { stage: "supositor", band: "Bölzer", start: "16:35", end: "17:20" },
        { stage: "supositor", band: "Coroner", start: "18:15", end: "19:05" },
        { stage: "supositor", band: "Unleashed", start: "20:05", end: "20:55" },
        { stage: "supositor", band: "Emperor", start: "22:05", end: "23:05" },
        { stage: "supositor", band: "Darkened Nocturn Slaughtercult", start: "00:15", end: "01:15" },

        { stage: "dickinscene", band: "Nawather", start: "12:45", end: "13:25" },
        { stage: "dickinscene", band: "Vansind", start: "14:15", end: "14:55" },
        { stage: "dickinscene", band: "Stille Volk", start: "15:45", end: "16:30" },
        { stage: "dickinscene", band: "Hrafngrimr", start: "17:25", end: "18:10" },
        { stage: "dickinscene", band: "Miracle of Sound", start: "19:10", end: "20:00" },
        { stage: "dickinscene", band: "Visions of Atlantis", start: "21:00", end: "22:00" },
        { stage: "dickinscene", band: "Master Boot Record", start: "23:00", end: "00:10" },
        { stage: "dickinscene", band: "Eihwar", start: "01:20", end: "02:20" }
      ]
    },
    {
      id: "sam15",
      label: "Samedi 15 août",
      sets: [
        { stage: "mustage", band: "Necrowretch", start: "12:45", end: "13:25" },
        { stage: "mustage", band: "Ashen", start: "14:15", end: "14:55" },
        { stage: "mustage", band: "Ill Niño", start: "15:45", end: "16:30" },
        { stage: "mustage", band: "Orden Ogan", start: "17:25", end: "18:10" },
        { stage: "mustage", band: "Leprous", start: "19:10", end: "20:00" },
        { stage: "mustage", band: "Eisbrecher", start: "21:00", end: "22:00" },
        { stage: "mustage", band: "Within Temptation", start: "23:00", end: "00:10" },
        { stage: "mustage", band: "Perturbator", start: "01:30", end: "02:30" },

        { stage: "massey", band: "Basalt", start: "13:30", end: "14:10" },
        { stage: "massey", band: "Bruit ≤", start: "15:00", end: "15:40" },
        { stage: "massey", band: "Hollow Jan", start: "16:35", end: "17:20" },
        { stage: "massey", band: "Múr", start: "18:15", end: "19:05" },
        { stage: "massey", band: "Slift", start: "20:05", end: "20:55" },
        { stage: "massey", band: "Svinkels Friends & Family", start: "22:15", end: "23:05" },
        { stage: "massey", band: "Sierra Veins", start: "00:25", end: "01:25" },

        { stage: "supositor", band: "Aorlhac", start: "13:30", end: "14:10" },
        { stage: "supositor", band: "Rectal Smegma", start: "15:00", end: "15:40" },
        { stage: "supositor", band: "Cancer", start: "16:35", end: "17:20" },
        { stage: "supositor", band: "Grave", start: "18:15", end: "19:05" },
        { stage: "supositor", band: "Anaal Nathrakh", start: "20:05", end: "20:55" },
        { stage: "supositor", band: "Nevermore", start: "22:15", end: "23:05" },
        { stage: "supositor", band: "Omnium Gatherum", start: "00:25", end: "01:25" },

        { stage: "dickinscene", band: "Shady Fat Katz", start: "12:45", end: "13:25" },
        { stage: "dickinscene", band: "Monde de Merde", start: "14:15", end: "14:55" },
        { stage: "dickinscene", band: "Jetsex", start: "15:45", end: "16:30" },
        { stage: "dickinscene", band: "The Casualties", start: "17:25", end: "18:10" },
        { stage: "dickinscene", band: "Les 3 Fromages", start: "19:10", end: "20:00" },
        { stage: "dickinscene", band: "Frog Leap", start: "21:00", end: "22:00" },
        { stage: "dickinscene", band: "Steven'n'Seagulls", start: "23:10", end: "00:20" },
        { stage: "dickinscene", band: "Nanowar of Steel", start: "01:30", end: "02:30" }
      ]
    },
    {
      id: "dim16",
      label: "Dimanche 16 août",
      sets: [
        { stage: "mustage", band: "Holy Mother", start: "11:45", end: "12:25" },
        { stage: "mustage", band: "Jools", start: "13:05", end: "13:45" },
        { stage: "mustage", band: "Killers", start: "14:30", end: "15:10" },
        { stage: "mustage", band: "Fit for an Autopsy", start: "16:05", end: "16:50" },
        { stage: "mustage", band: "Kim Dracula", start: "17:50", end: "18:40" },
        { stage: "mustage", band: "Airbourne", start: "19:40", end: "20:40" },
        { stage: "mustage", band: "Judas Priest", start: "21:40", end: "23:10" },
        { stage: "mustage", band: "Arch Enemy", start: "00:10", end: "01:10" },

        { stage: "massey", band: "Eyes", start: "12:25", end: "13:05" },
        { stage: "massey", band: "Heretoir", start: "13:45", end: "14:25" },
        { stage: "massey", band: "Pain Magazine", start: "15:15", end: "16:00" },
        { stage: "massey", band: "John Cxnnor", start: "16:55", end: "17:45" },
        { stage: "massey", band: "Voivod", start: "18:45", end: "19:35" },
        { stage: "massey", band: "Deafheaven", start: "20:45", end: "21:35" },
        { stage: "massey", band: "Shaârghot", start: "23:15", end: "00:05" },

        { stage: "supositor", band: "Internal Bleeding", start: "12:25", end: "13:05" },
        { stage: "supositor", band: "Heavy/Hitter", start: "13:45", end: "14:25" },
        { stage: "supositor", band: "Cryptopsy", start: "15:15", end: "16:00" },
        { stage: "supositor", band: "Signs of the Swarm", start: "16:55", end: "17:45" },
        { stage: "supositor", band: "Witch Club Satan", start: "18:45", end: "19:35" },
        { stage: "supositor", band: "Vader", start: "20:45", end: "21:35" },
        { stage: "supositor", band: "Sacred Reich", start: "23:15", end: "00:05" },

        { stage: "dickinscene", band: "Les Hommes Crabes", start: "11:45", end: "12:25" },
        { stage: "dickinscene", band: "Modder", start: "13:05", end: "13:45" },
        { stage: "dickinscene", band: "Red Sun Atacama", start: "14:30", end: "15:10" },
        { stage: "dickinscene", band: "Wormsand", start: "16:05", end: "16:50" },
        { stage: "dickinscene", band: "Castle Rat", start: "17:50", end: "18:40" },
        { stage: "dickinscene", band: "Monkeys on Mars", start: "19:40", end: "20:40" },
        { stage: "dickinscene", band: "Coltaine", start: "21:40", end: "23:10" },
        { stage: "dickinscene", band: "Warning", start: "00:10", end: "01:10" }
      ]
    }
  ]
};
