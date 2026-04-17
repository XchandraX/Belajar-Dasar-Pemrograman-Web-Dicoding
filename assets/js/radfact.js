const KontenFakta = document.getElementById("fact-content")
const fakta = [
    {
        judul: "Studio Ghibli Tidak Menggunakan Komputer untuk Animasi",
        isi: "Studio Ghibli, yang dikenal dengan karya-karya ikonik seperti Spirited Away, My Neighbor Totoro, dan Princess Mononoke, sangat terkenal karena menggunakan animasi tangan (2D) dalam sebagian besar film mereka. Meskipun teknologi CGI sudah ada, Studio Ghibli tetap mempertahankan metode tradisional ini untuk menghasilkan karya mereka yang penuh detail dan keindahan."
    },
    {
        judul: "Pengisi Suara Paling Multitalenta",
        isi: "Mamoru Miyano, yang jadi suara Light Yagami (Death Note), Tamaki Suoh (Ouran High School Host Club), dan Chrollo (Hunter x Hunter), juga seorang penyanyi top di Jepang. Dia sering ngadain konser solo yang fans-nya dateng ribuan. Bayangin, cowok ini gak cuma nge-voice aktor, tapi juga bisa bikin penonton nangis pas nyanyi. 😭🎤"
    },
    {
        judul: "Dunia Pokemon Itu Gak Sembarangan",
        isi: "Nama beberapa kota di dunia Pokemon generasi pertama terinspirasi dari nama warna, kayak Pallet (palet warna), Vermillion (merah jingga), dan Cerulean (biru muda). Tapi yang lebih gila, setiap generasi baru Pokemon sering didesain sesuai lokasi nyata, kayak Kalos yang terinspirasi dari Prancis atau Galar yang terinspirasi Inggris."
    },
    {
        judul: "Frieren Menyentuh Tema Waktu dan Kehidupan yang Jarang Ditemui di Anime Lain",
        isi: "Frieren: Beyond Journey's End atau Sousou no Frieren tidak seperti anime petualangan pada umumnya.Manga dan anime ini mengangkat tema waktu dan kenangan dari perspektif seorang penyihir yang telah hidup selama ratusan tahun.Cerita ini berfokus pada Frieren, seorang penyihir yang ikut dalam petualangan bersama pahlawan untuk mengalahkan raja iblis, namun setelah petualangan itu selesai, ia mulai menyadari bahwa teman - temannya telah tua dan meninggal, sementara dirinya tetap muda karena usia yang panjang.Ini menciptakan perspektif yang unik tentang waktu yang berlalu, yang sangat jarang ditemukan dalam genre anime petualangan."
    },
    {
        judul: "Cosplay Punya Hari Nasional di Jepang",
        isi: "Tanggal 5 Mei dirayain sebagai Hari Cosplay di Jepang. Fans dari seluruh dunia sering banget dateng buat ngeramein acara ini. Gak cuma pakai kostum keren, mereka juga biasanya bikin parade!"
    },
    {
        judul: "Studio Ghibli Punya Pulau Rahasia",
        isi: "Studio Ghibli punya museum keren di Mitaka, Tokyo, tapi tahukah lo mereka juga bikin replika Dondoko Forest dari film My Neighbor Totoro di pulau rahasia? Tempat ini sengaja dibikin eksklusif dan hanya buka untuk acara tertentu. Serasa masuk dunia Totoro beneran! 🌳✨"
    },
    {
        judul: "Film Anime Penghasil Uang Terbesar",
        isi: "Banyak yang kira Your Name bakal susah dilawan, tapi ternyata film Demon Slayer: Mugen Train berhasil jadi anime dengan pendapatan tertinggi sepanjang masa. Gak cuma di Jepang, ini juga sukses gede di bioskop internasional, bahkan ngalahin film Hollywood! 🔥"
    },
    {
        judul: "Inspirasi One Punch Man Gak Main-Main",
        isi: "Saitama, karakter utama One Punch Man, terinspirasi dari rasa frustasi creator-nya, ONE. Dia bikin karakter yang terlalu kuat untuk ngejek cerita superhero klise yang selalu bikin pahlawan susah menang. Eh, malah jadi salah satu konsep terunik di dunia anime! 😂💪"
    }
];

function tampilkanFaktaAcak() {
    const faktaTerpilih1 = fakta[Math.floor(Math.random() * fakta.length)];
    let faktaTerpilih2;
    do {
        faktaTerpilih2 = fakta[Math.floor(Math.random() * fakta.length)];
    } while (faktaTerpilih1 === faktaTerpilih2);
    KontenFakta.innerHTML = `
        <h3>${faktaTerpilih1.judul}</h3>
        <p>${faktaTerpilih1.isi}</p>
        <hr>
        <h3>${faktaTerpilih2.judul}</h3>
        <p>${faktaTerpilih2.isi}</p>
    `;
}

window.onload = tampilkanFaktaAcak;