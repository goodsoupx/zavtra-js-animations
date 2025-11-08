// Wave animation effect
class WaveAnimation {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;
        
        this.canvas = document.createElement('canvas');
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.container.appendChild(this.canvas);
        
        this.ctx = this.canvas.getContext('2d');
        this.time = 0;
        
        this.init();
        this.animate();
    }

    init() {
        this.canvas.width = this.container.offsetWidth;
        this.canvas.height = this.container.offsetHeight;
        
        window.addEventListener('resize', () => {
            this.canvas.width = this.container.offsetWidth;
            this.canvas.height = this.container.offsetHeight;
        });
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.time += 0.02;
        
        // Draw multiple waves
        for (let i = 0; i < 3; i++) {
            this.drawWave(i, this.time + i * 0.5);
        }
        
        requestAnimationFrame(() => this.animate());
    }

    drawWave(index, time) {
        this.ctx.beginPath();
        const amplitude = 30 + index * 10;
        const frequency = 0.01 + index * 0.005;
        
        for (let x = 0; x < this.canvas.width; x++) {
            const y = this.canvas.height / 2 + 
                     Math.sin(x * frequency + time) * amplitude +
                     Math.cos(x * frequency * 0.7 + time * 1.2) * amplitude * 0.5;
            
            if (x === 0) {
                this.ctx.moveTo(x, y);
            } else {
                this.ctx.lineTo(x, y);
            }
        }
        
        this.ctx.strokeStyle = `rgba(255, 255, 255, ${0.3 + index * 0.1})`;
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new WaveAnimation('wave-preview');
});

