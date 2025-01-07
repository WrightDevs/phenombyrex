document.addEventListener('DOMContentLoaded', function() {
    // Countdown timer
    const countdownElement = document.createElement('div');
    countdownElement.classList.add('countdown', 'text-center', 'my-4');
    document.querySelector('#cta').prepend(countdownElement);

    let timeLeft = 24 * 60 * 60; // 24 hours in seconds

    function updateCountdown() {
        const hours = Math.floor(timeLeft / 3600);
        const minutes = Math.floor((timeLeft % 3600) / 60);
        const seconds = timeLeft % 60;

        countdownElement.innerHTML = `
            <h3>Limited Time Offer!</h3>
            <p>Refer 5 friends within <strong>${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}</strong> and earn an extra $50!</p>
        `;

        if (timeLeft > 0) {
            timeLeft--;
            setTimeout(updateCountdown, 1000);
        }
    }

    updateCountdown();

    // Reward ticker animation
    const rewardTicker = document.getElementById('reward-ticker');
    let rewardCount = 10000;

    function updateRewardTicker() {
        rewardCount += Math.floor(Math.random() * 10) + 1;
        rewardTicker.textContent = `Over ${rewardCount.toLocaleString()} rewards paid out this month!`;
        setTimeout(updateRewardTicker, 5000 + Math.random() * 5000);
    }

    updateRewardTicker();

    // Gamification popup
    const gamificationPopup = document.createElement('div');
    gamificationPopup.classList.add('gamification-popup');
    gamificationPopup.innerHTML = `
        <h4>Level Up!</h4>
        <p>Refer 3 more friends to unlock exclusive rewards!</p>
        <button class="btn btn-sm btn-secondary" onclick="this.parentElement.style.display='none'">Got it!</button>
    `;
    document.body.appendChild(gamificationPopup);

    setTimeout(() => {
        gamificationPopup.style.display = 'block';
        setTimeout(() => {
            gamificationPopup.style.display = 'none';
        }, 5000);
    }, 10000);
});

