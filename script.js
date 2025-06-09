// ===== GEÇİCİ TEST KODU - Sadece Müzik ve Açılış Ekranı =====
document.addEventListener('DOMContentLoaded', function() {
    
    // Testin başladığını konsola yazdırıyoruz.
    console.log("TEST BAŞLADI: Sadece müzik ve açılış ekranı devrede.");

    const startButton = document.getElementById('startButton');
    const splashScreen = document.getElementById('splash-screen');
    const mainSite = document.getElementById('main-site');
    const backgroundMusic = document.getElementById('backgroundMusic');

    // Lütfen bu şarkı listesinin kendi dosyalarınızla eşleştiğinden emin olun.
    const songList = [
        'music/die_with_a_smile.mp3',
        'music/falling_down.mp3',
        'music/leave_a_light_on.mp3',
        'music/salvatore.mp3',
        'music/show_me_love.mp3',
        'music/ventanni.mp3'
    ];
    let currentSongIndex = 0;

    function playCurrentSong() {
        console.log("playCurrentSong fonksiyonu çalıştırıldı. Çalınacak şarkı:", songList[currentSongIndex]);
        if (songList.length > 0) {
            backgroundMusic.src = songList[currentSongIndex];
            // play() metodu bir "Promise" döndürür, bu şekilde daha detaylı hata ayıklayabiliriz.
            const playPromise = backgroundMusic.play();

            if (playPromise !== undefined) {
                playPromise.then(_ => {
                    // Müzik başarıyla çalmaya başladığında konsola yazar.
                    console.log("Şarkı başarıyla çalıyor:", backgroundMusic.src);
                })
                .catch(error => {
                    // Herhangi bir nedenle müzik çalınamazsa, hatayı konsola yazdırır.
                    console.error("Müzik çalma hatası:", error);
                });
            }
        }
    }

    backgroundMusic.addEventListener('ended', function() {
        currentSongIndex = (currentSongIndex + 1) % songList.length;
        playCurrentSong();
    });

    startButton.addEventListener('click', function() {
        console.log("Başlat butonuna tıklandı.");
        splashScreen.classList.add('hidden');
        setTimeout(function() {
            splashScreen.style.display = 'none';
            mainSite.style.display = 'block';
            document.body.style.overflow = 'auto';
            playCurrentSong();
        }, 500);
    });

});
