document.addEventListener('DOMContentLoaded', function() {
    // Gerekli HTML elementlerini seçiyoruz
    const startButton = document.getElementById('startButton');
    const splashScreen = document.getElementById('splash-screen');
    const mainSite = document.getElementById('main-site');
    const backgroundMusic = document.getElementById('backgroundMusic');

    // --- PLAYLIST AYARLARI ---

    // 1. ŞARKI LİSTENİZİ BURAYA YAZIN
    // Kendi şarkı dosyalarınızın tam yollarını buraya ekleyin.
    const songList = [
        'die_with_a_smile.mp3',
        'ventanni.mp3',
        'leave_a_light_on.mp3',
        'falling_down.mp3',
        'show_me_love.mp3',
        'salvatore.mp3'
    ];

    // 2. Mevcut şarkının sırasını takip etmek için bir değişken
    let currentSongIndex = 0;

    // --- FONKSİYONLAR ---

    // 3. Sıradaki şarkıyı çalan fonksiyon
    function playCurrentSong() {
        // Listede şarkı varsa devam et
        if (songList.length > 0) {
            // Audio elementinin kaynağını listedeki mevcut şarkı olarak ayarla
            backgroundMusic.src = songList[currentSongIndex];
            
            // Şarkıyı çalmayı dene
            backgroundMusic.play().catch(error => {
                console.error("Hata: Müzik çalınamadı.", error);
            });
        }
    }

    // --- OLAY DİNLEYİCİLER (EVENTS) ---

    // 4. Bir şarkı bittiğinde ne olacağını belirleyen olay dinleyici
    backgroundMusic.addEventListener('ended', function() {
        console.log("Şarkı bitti, bir sonrakine geçiliyor...");
        // Sıradaki şarkıya geç
        currentSongIndex++;
        
        // Eğer liste bittiyse, en başa geri dön (playlist döngüsü)
        if (currentSongIndex >= songList.length) {
            currentSongIndex = 0;
        }
        
        // Yeni şarkıyı çal
        playCurrentSong();
    });

    // 5. "Hazır Mısın?" butonuna tıklanınca ne olacağı
    startButton.addEventListener('click', function() {
        // Karşılama ekranını gizle
        splashScreen.classList.add('hidden');
        
        setTimeout(function() {
            splashScreen.style.display = 'none';
            mainSite.style.display = 'block';
            document.body.style.overflow = 'auto';

            // Playlist'i ilk şarkıdan başlat
            playCurrentSong();

        }, 500);
    });
});
