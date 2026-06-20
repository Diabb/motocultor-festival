// Fiches groupes — Motocultor Festival 2026
// Rempli progressivement, jour par jour. Clé = nom exact du groupe tel
// qu'il apparaît dans data.js (FESTIVAL_DATA).
//
// Format de chaque entrée :
// "Nom du groupe": {
//   genre: "Genre musical",
//   origin: "Pays / ville d'origine",
//   members: ["Prénom Nom – rôle", ...],     // ou [] si formation/projet sans liste publique
//   bio: "Résumé court (1-3 phrases).",
//   image: "URL de l'image/logo officiel",
//   spotify: "URL Spotify de l'artiste",
//   albums: [{ title: "Titre", year: "2023", spotify: "URL Spotify de l'album" }, ...]
//            // 2-3 albums récents/marquants. La pochette est récupérée
//            // automatiquement via l'API oEmbed de Spotify (pas besoin de
//            // stocker l'image nous-mêmes).
// }
//
// Si une fiche n'existe pas encore pour un groupe, l'app affiche un
// état "infos à venir" sans planter.
const BAND_INFO = {
  "Unearth": {
    genre: "Metalcore mélodique",
    origin: "Boston, États-Unis",
    members: ["Trevor Phipps – chant", "Buz McGrath – guitare", "Peter Layman – guitare", "Chris O'Toole – basse", "Mike Justian – batterie"],
    bio: "Pionniers du metalcore américain formés en 1998 à Boston, Unearth mélange death metal européen, hardcore et thrash mélodique. Le groupe a sorti huit albums studio, dont The Wretched; The Ruinous en 2023.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Unearth%202018%20(cropped).jpg",
    spotify: "https://open.spotify.com/artist/44wJRGNtWywCUJZug8FJg3",
    albums: [
      { title: "The Wretched; The Ruinous", year: "2023", spotify: "https://open.spotify.com/album/09LBDZTHGu6VF0S8Pcxn34" },
      { title: "Extinction(s)", year: "2018", spotify: "https://open.spotify.com/album/1NOyZLIGviFHXS7Baq7OjU" },
      { title: "Watchers of Rule", year: "2014", spotify: "https://open.spotify.com/album/2Y6ql33HaZfnWSLMruIRGU" }
    ]
  }
};
