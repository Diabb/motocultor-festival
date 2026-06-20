// Fiches groupes — Motocultor Festival 2026
// Rempli progressivement, jour par jour. Clé = nom exact du groupe tel
// qu'il apparaît dans data.js (FESTIVAL_DATA).
//
// Format de chaque entrée :
// "Nom du groupe": {
//   genre: "Genre musical",
//   origin: "Pays / ville d'origine",
//   members: ["Prénom Nom", ...],     // ou [] si formation/projet sans liste publique
//   bio: "Résumé court (1-3 phrases).",
//   image: "URL de l'image/logo officiel",
//   spotify: "URL Spotify de l'artiste"
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
    spotify: "https://open.spotify.com/artist/44wJRGNtWywCUJZug8FJg3"
  }
};
