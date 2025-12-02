document.addEventListener('DOMContentLoaded', function () {
    // Flip Card Logic
    const flipCard = document.getElementById('dropCard');
    if (flipCard) {
        flipCard.addEventListener('click', function () {
            this.classList.toggle('flipped');
        });

        // Add keyboard accessibility
        flipCard.setAttribute('tabindex', '0');
        flipCard.setAttribute('role', 'button');
        flipCard.addEventListener('keypress', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.classList.toggle('flipped');
            }
        });
    }

    // Carousel Logic
    const dropsGrid = document.getElementById('dropsGrid');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (dropsGrid && prevBtn && nextBtn) {
        nextBtn.addEventListener('click', () => {
            dropsGrid.scrollBy({ left: 320, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            dropsGrid.scrollBy({ left: -320, behavior: 'smooth' });
        });
    }
});
