/**
 * Salma's Magical Gift Script
 * Optimized for mobile interactions
 */

function revealSurprise() {
    const giftSection = document.getElementById('gift-section');
    const happyMessage = document.getElementById('happy-message');

    // 1. Mobile Vibration (works on compatible devices)
    if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100]);
    }

    // 2. Clear UI
    giftSection.style.display = 'none';
    happyMessage.classList.remove('hidden');

    // 3. Trigger Explosion of Multi-layered Confetti
    var duration = 4 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}
