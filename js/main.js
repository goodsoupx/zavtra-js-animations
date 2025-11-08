// Main initialization script
document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript Animations loaded!');
    
    // Initialize animations when cards are visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const animationType = entry.target.dataset.animation;
                console.log(`Initializing ${animationType} animation`);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.animation-card').forEach(card => {
        observer.observe(card);
    });
});

