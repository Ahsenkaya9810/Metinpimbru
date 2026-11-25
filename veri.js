/* Pimbru — Metin Buhran, 9 Eylül 2020. Fotoğraflar sabittir. */

const AYARLAR = {
  marka: "Pimbru",
  yorumcuAdi: "Murat K.",

};

const PROFIL = {
  ad: "Metin Buhran",
  profilFoto: "metin-9-eylul-2020.jpg",   // varsayılan profil fotoğrafı
  kapakRenk1: "#343b50",                  // kapak fotoğrafı yoksa bu iki renkte geçiş olur
  kapakRenk2: "#78869b",
  kapakFoto: "",                          // istersen "foto/kapak.jpg" yaz
  arkadasSayisi: "312 arkadaş",
  // Profil açıklaması (bio). Boş kalması istendi; yazı eklemek isterseniz tırnak içine yazın:
  // ör. bilgiler: ["🏠 İstanbul'da yaşıyor", "💼 Serbest"],
  bilgiler: [],
  // Ekranı bir arkadaşının telefonundan görüyoruz: Metin onun arkadaşı.
  arkadasMi: true,
};

/* Tek gönderi: 2020 tarihli profil fotoğrafı güncellemesi. */
const PAYLASIMLAR = [
  {
    tur: "profil-guncelleme",
    tarih: "9 Eylül 2020",
    yazi: "",
    foto: "metin-9-eylul-2020.jpg",
    begeni: 48,
    begenenler: "Murat K. ve diğer 47 kişi",
    yorumlar: [
      { ad: "Murat K.", yazi: "Yine artistlik peşindesin kardeşim 😄", sure: "6 y" },
      { ad: "Hakan B.", yazi: "İyi çıkmışsın 😄", sure: "6 y" },
      { ad: "Gülay Teyze", yazi: "Maşallah oğlum 🧿", sure: "6 y" },
    ],
    paylasim: 1,
  },
];

