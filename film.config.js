/* ─────────────────────────────────────────────────────────────
   FİLM KİMLİĞİ / Film identity — scripts/build.mjs ile scenes/film.js'ten üretilir.
   Süreler altyazı uzunluğundan hesaplanır (okuma hızı: ~10 harf/sn).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const META = {
    "slug": "dijital-ben",
    "title": "Dijital Ben",
    "titleEn": "Digital Me",
    "grade": 5,
    "theme": "Bilişim Teknolojilerinin Hayatımızdaki Yeri",
    "code": "BTY.5.1.3",
    "outcome": "Dijital vatandaşlık uygulamalarını sınıflandırabilme",
    "outcomeEn": "Classifying digital citizenship practices",
    "duration": 144.3,
    "tempo": 1
  };
  const SCENES = [
    {
      "id": "s0",
      "t0": 0,
      "t1": 16.3,
      "name": "",
      "en": "",
      "concept": "",
      "noHeader": true
    },
    {
      "id": "s1",
      "t0": 16.3,
      "t1": 46.1,
      "name": "Dijital kimlik",
      "en": "Digital identity",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s2",
      "t0": 46.1,
      "t1": 75.2,
      "name": "Dijital ayak izi",
      "en": "Digital footprint",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s3",
      "t0": 75.2,
      "t1": 97.8,
      "name": "Sorumlu davranış",
      "en": "Responsible behaviour",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s4",
      "t0": 97.8,
      "t1": 128.8,
      "name": "Dijital vatandaşlık",
      "en": "Digital citizenship",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s5",
      "t0": 128.8,
      "t1": 144.3,
      "name": "Aklında kalsın",
      "en": "Remember",
      "concept": "",
      "noHeader": false
    }
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = { META, SCENES };
  else { root.BF = root.BF || {}; root.BF.META = META; root.BF.SCENES = SCENES; }
})(typeof window !== 'undefined' ? window : globalThis);
