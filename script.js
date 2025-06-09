document.addEventListener('DOMContentLoaded', function() {
    
    // =================================================================
    // Karşılama Ekranı ve Müzik Listesi Bölümü
    // =================================================================

    const startButton = document.getElementById('startButton');
    const splashScreen = document.getElementById('splash-screen');
    const mainSite = document.getElementById('main-site');
    const backgroundMusic = document.getElementById('backgroundMusic');

    const songList = [
        'music/die_with_a_smile.mp3',
        'music/falling_down.mp3',
        'music/salvatore.mp3',
        'music/leave_a_light_on.mp3',
        'music/show_me_love.mp3',
        'music/ventanni.mp3'
    ];
    let currentSongIndex = 0;

    function playCurrentSong() {
        if (songList.length > 0) {
            backgroundMusic.src = songList[currentSongIndex];
            const playPromise = backgroundMusic.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
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
        splashScreen.classList.add('hidden');
        setTimeout(function() {
            splashScreen.style.display = 'none';
            mainSite.style.display = 'block';
            document.body.style.overflow = 'auto';
            playCurrentSong();
        }, 500);
    });

    // =================================================================
    // Ay Butonları Slideshow Bölümü
    // =================================================================

    const allMonthButtons = document.querySelectorAll('.month-button');

    allMonthButtons.forEach(button => {
        const photoData = button.dataset.photos;

        if (photoData && photoData.trim() !== '') {
            const photos = photoData.split(',').map(s => s.trim());
            
            if (photos.length > 0 && photos[0]) {
                button.style.backgroundImage = `url('${photos[0]}')`;

                if (photos.length > 1) {
                    let currentPhotoIndex = 0;
                    setInterval(() => {
                        currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
                        button.style.backgroundImage = `url('${photos[currentPhotoIndex]}')`;
                    }, 10000); // 10 saniyeye ayarlanmış hali
                }
            }
        }
    });

});
