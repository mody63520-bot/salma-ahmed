// Target: May 5, 2026, at 13:00 (1:00 PM)
const targetDate = new Date('May 5, 2026 13:00:00').getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the UI with leading zeros
    document.getElementById("days").innerHTML = String(days).padStart(2, '0');
    document.getElementById("hours").innerHTML = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerHTML = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerHTML = String(seconds).padStart(2, '0');

    // When countdown is finished
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").style.display = "none";
        document.querySelector(".wait-title").style.display = "none";
        document.getElementById("message").classList.remove("hidden");
    }
}, 1000);
