document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startButton');
    const splashScreen = document.getElementById('splash-screen');
    const mainSite = document.getElementById('main-site');
    const backgroundMusic = document.getElementById('backgroundMusic'); // Müzik elementini seç

    startButton.addEventListener('click', function() {
        // Karşılama ekranını yavaşça gizle
        splashScreen.classList.add('hidden');

        // Karşılama ekranı tamamen gizlendikten sonra ana siteyi göster ve müziği başlat
        setTimeout(function() {
            splashScreen.style.display = 'none';
            mainSite.style.display = 'block';
            document.body.style.overflow = 'auto';

            // Müziği çalmayı dene
            if (backgroundMusic) {
                backgroundMusic.play().catch(error => {
                    // Autoplay politikaları nedeniyle hata oluşabilir, konsola yazdır
                    console.error("Müzik çalınırken hata oluştu:", error);
                    // İsteğe bağlı: Kullanıcıya bir bildirim gösterebilirsiniz
                    // alert("Tarayıcı ayarlarınız nedeniyle müzik otomatik başlatılamadı. Lütfen manuel olarak başlatın.");
                });
            }
        }, 500); // CSS'teki transition süresiyle uyumlu (0.5s = 500ms)
    });
});
