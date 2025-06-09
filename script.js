document.addEventListener('DOMContentLoaded', function() {
    
    // =================================================================
    // ESKİ KODUNUZ (Karşılama Ekranı ve Müzik Listesi) - DOKUNMAYIN
    // =================================================================

    // Gerekli HTML elementlerini seçiyoruz
    const startButton = document.getElementById('startButton');
    const splashScreen = document.getElementById('splash-screen');
    const mainSite = document.getElementById('main-site');
    const backgroundMusic = document.getElementById('backgroundMusic');

    // --- PLAYLIST AYARLARI ---
    const songList = [
        'music/sarki1.mp3',
        'music/sarki2.mp3',
        'music/sarki3.mp3'
        // Kendi şarkı listeniz burada kalmalı
    ];
    let currentSongIndex = 0;

    // Sıradaki şarkıyı çalan fonksiyon
    function playCurrentSong() {
        if (songList.length > 0) {
            backgroundMusic.src = songList[currentSongIndex];
            backgroundMusic.play().catch(error => {
                console.error("Hata: Müzik çalınamadı.", error);
            });
        }
    }

    // Bir şarkı bittiğinde ne olacağını belirleyen olay dinleyici
    backgroundMusic.addEventListener('ended', function() {
        currentSongIndex++;
        if (currentSongIndex >= songList.length) {
            currentSongIndex = 0;
        }
        playCurrentSong();
    });

    // "Hazır Mısın?" butonuna tıklanınca ne olacağı
    startButton.addEventListener('click', function() {
        splashScreen.classList.add('hidden');
        setTimeout(function() {
            splashScreen.style.display = 'none';
            mainSite.style.display = 'block';
            document.body.style.overflow = 'auto';
            playCurrentSong();
        }, 500);
    });


    // =================================================================
    // YENİ EKLENECEK KOD (Ay Butonları Slideshow) - BU BÖLÜM EKLENDİ
    // =================================================================

    // Sayfadaki tüm ay butonlarını seç
    const allMonthButtons = document.querySelectorAll('.month-button');

    // Her bir buton için slideshow işlemini başlat
    allMonthButtons.forEach(button => {
        // Butonun 'data-photos' özelliğindeki fotoğraf yollarını alıp bir diziye çevir
        const photos = button.dataset.photos.split(',').map(s => s.trim());
        
        // Butonun ilk arka plan fotoğrafını ayarla
        if (photos.length > 0 && photos[0]) {
            button.style.backgroundImage = `url('${photos[0]}')`;
        }

        // Eğer butona ait birden fazla fotoğraf varsa, 5 saniyelik slideshow'u başlat
        if (photos.length > 1) {
            let currentPhotoIndex = 0;
            setInterval(() => {
                // Sıradaki fotoğrafın index'ini hesapla
                currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
                // Butonun arka plan resmini yeni fotoğrafla güncelle
                button.style.backgroundImage = `url('${photos[currentPhotoIndex]}')`;
            }, 5000); // 5000 milisaniye = 5 saniye
        }
    });

}); // <-- EN DIŞTAKİ 'DOMContentLoaded' PARANTEZİ, TÜM KOD BUNUN İÇİNDE OLMALI
