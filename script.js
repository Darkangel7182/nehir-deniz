document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startButton');
    const splashScreen = document.getElementById('splash-screen');
    const mainSite = document.getElementById('main-site');

    startButton.addEventListener('click', function() {
        // Karşılama ekranını yavaşça gizle
        splashScreen.classList.add('hidden');

        // Karşılama ekranı tamamen gizlendikten sonra ana siteyi göster
        // CSS'teki transition süresiyle (0.5s = 500ms) uyumlu olmalı
        setTimeout(function() {
            splashScreen.style.display = 'none'; // DOM'dan tamamen kaldırır gibi yapar
            mainSite.style.display = 'block'; // Ana siteyi görünür yap
            document.body.style.overflow = 'auto'; // Ana site için kaydırma çubuklarını aktif et
        }, 500); // 0.5 saniye sonra çalışır
    });
});