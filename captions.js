/* ─────────────────────────────────────────────────────────────
   ALTYAZILAR / CAPTIONS — düzenlenebilir (metin). Zamanlar film saniyesidir.
   note: öğretmen için önerilen seslendirme cümlesi.
   Senaryo değişirse: node scripts/build.mjs (zamanlar yeniden hesaplanır).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const CAPTIONS = [
    { scene: 1, start: 0.9, end: 8.5, tr: "Okulda bir kimliğin var; internette de bir kimliğin var", en: "You have an identity at school, and one on the internet too",
      note: "Okulda bir kimliğin var: adın, sınıfın, öğrenci numaran. İnternette de bir kimliğin olduğunu biliyor muydun?" },
    { scene: 1, start: 9.3, end: 15, tr: "İnternette nasıl bir vatandaşsın?", en: "What kind of citizen are you online?",
      note: "Bu filmde dijital kimliğimizi, internette bıraktığımız izleri ve iyi bir dijital vatandaş olmayı konuşacağız." },
    { scene: 2, start: 17.8, end: 23.9, tr: "Kullanıcı adı: internette bizi tanıtan ad", en: "Username: the name that introduces us online",
      note: "Bir oyuna ya da uygulamaya üye olurken bir kullanıcı adı seçeriz. Bu ad internette bizi tanıtır." },
    { scene: 2, start: 24.7, end: 30.8, tr: "Profil: fotoğraf, yaş, okul gibi bilgiler", en: "Profile: information such as photo, age and school",
      note: "Profilimizde fotoğrafımız, yaşımız, okulumuz gibi bilgiler yer alabilir." },
    { scene: 2, start: 31.6, end: 38.3, tr: "Gizlilik: bilgilerimizi kimin göreceğini seçmek", en: "Privacy: choosing who can see our information",
      note: "Gizlilik ayarlarıyla bu bilgileri kimlerin göreceğine biz karar veririz." },
    { scene: 2, start: 39.1, end: 44.8, tr: "Hepsi birlikte: dijital kimlik", en: "All together: our digital identity",
      note: "Oyun hesabımız, e-postamız, okul hesabımız... İnternetteki bütün hesaplarımız ve bilgilerimiz dijital kimliğimizi oluşturur." },
    { scene: 3, start: 47.6, end: 53.5, tr: "İnternette yaptığımız her şey iz bırakır", en: "Everything we do online leaves a trace",
      note: "Kumda yürürken ayak izi bırakırız. İnternette de yaptığımız her şey bir iz bırakır: buna dijital ayak izi denir." },
    { scene: 3, start: 54.4, end: 60.6, tr: "Paylaşımlar ve yorumlar uzun süre kalabilir", en: "Posts and comments can stay for a long time",
      note: "Paylaştığımız bir fotoğraf ya da yazdığımız bir yorum, yıllar sonra bile başkaları tarafından görülebilir." },
    { scene: 3, start: 61.5, end: 67.3, tr: "Aramalarımız ve konumumuz da kaydedilir", en: "Our searches and location are recorded too",
      note: "Arama motoruna yazdıklarımız kaydedilir; bu yüzden karşımıza çıkan reklamlar bize göre değişir. Konumumuzu açık bırakırsak nerede olduğumuz bilinir." },
    { scene: 3, start: 68.1, end: 73.8, tr: "Beğeniler bile ne sevdiğimizi anlatır", en: "Even likes tell what we love",
      note: "Beğendiğimiz paylaşımlar bile neleri sevdiğimizi anlatır. İzlerimizi düşünerek paylaşım yapalım." },
    { scene: 4, start: 76.6, end: 82.8, tr: "Arkadaşımın fotoğrafını izinsiz paylaşmak", en: "Sharing a friend's photo without permission",
      note: "Arkadaşımızın fotoğrafını ondan izin almadan paylaşmak doğru değil; onun dijital izini de etkileriz." },
    { scene: 4, start: 83.5, end: 90, tr: "Profilimi gizli tutup güçlü parola kullanmak", en: "Keeping my profile private and using a strong password",
      note: "Profilimizi yalnızca tanıdıklarımızın görebileceği şekilde ayarlamak ve güçlü parola kullanmak sorumlu bir davranıştır." },
    { scene: 4, start: 90.8, end: 96.5, tr: "Kötü bir yorum görünce yardım istemek", en: "Asking for help when I see a mean comment",
      note: "İnternette kötü bir durumla karşılaşırsak ailemizden, öğretmenimizden, rehberlik servisinden ya da BTK'dan yardım isteyebiliriz." },
    { scene: 5, start: 99.2, end: 106.3, tr: "Dijital vatandaş: teknolojiyi sorumlu kullanan kişi", en: "A digital citizen uses technology responsibly",
      note: "Dijital vatandaş, teknolojiyi güvenli, saygılı ve sorumlu kullanan kişidir. Dijital vatandaşlık uygulamalarını kullanım alanlarına göre gruplayalım." },
    { scene: 5, start: 107.1, end: 112.8, tr: "Eğitim: EBA ile ders, e-Okul ile not", en: "Education: lessons on EBA, grades on e-Okul",
      note: "Eğitimde EBA ile derslere katılabilir, e-Okul ile notlarımıza bakabiliriz." },
    { scene: 5, start: 113.6, end: 119.9, tr: "Sağlık: MHRS ile randevu, e-Nabız ile bilgi", en: "Health: appointments on MHRS, records on e-Nabız",
      note: "Sağlıkta MHRS ile doktordan randevu alınır, e-Nabız'da sağlık bilgilerimize ulaşılır." },
    { scene: 5, start: 120.8, end: 127.5, tr: "Kamu hizmetleri ve sosyal medyada da sorumluyuz", en: "We are responsible in public services and on social media too",
      note: "e-Devlet'ten belge alınır, e-kitap ödünç alınır. Sosyal medyada saygılı yorum yazmak ve yalan haberi paylaşmamak da dijital vatandaşlıktır." },
    { scene: 6, start: 130.3, end: 136.1, tr: "Aklında kalsın: dijital kimliğini koru", en: "Remember: protect your digital identity",
      note: "Aklında kalsın: hesapların ve bilgilerin dijital kimliğindir; onu koru. Her paylaşım bir iz bırakır." },
    { scene: 6, start: 136.8, end: 143, tr: "İzini düşün, iyi bir dijital vatandaş ol!", en: "Think about your footprint, be a good digital citizen!",
      note: "Paylaşmadan önce izini düşün, dijital hizmetleri doğru amaçla kullan ve iyi bir dijital vatandaş ol!" },
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = CAPTIONS;
  else { root.BF = root.BF || {}; root.BF.CAPTIONS = CAPTIONS; }
})(typeof window !== 'undefined' ? window : globalThis);
