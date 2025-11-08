// Gradient animation effect
class GradientAnimation {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;
        
        this.time = 0;
        this.colors = [
            { r: 102, g: 126, b: 234 }, // #667eea
            { r: 118, g: 75, b: 162 }, // #764ba2
            { r: 255, g: 107, b: 107 }, // #ff6b6b
            { r: 72, g: 219, b: 251 }   // #48dbfb
        ];
        
        this.animate();
    }

    animate() {
        this.time += 0.01;
        
        const color1 = this.getColorAt(0, this.time);
        const color2 = this.getColorAt(1, this.time);
        const color3 = this.getColorAt(2, this.time);
        
        const angle = (Math.sin(this.time) * 45 + 135) % 360;
        
        this.container.style.background = 
            `linear-gradient(${angle}deg, 
                rgb(${color1.r}, ${color1.g}, ${color1.b}), 
                rgb(${color2.r}, ${color2.g}, ${color2.b}),
                rgb(${color3.r}, ${color3.g}, ${color3.b}))`;
        
        requestAnimationFrame(() => this.animate());
    }

    getColorAt(index, time) {
        const colorIndex = Math.floor(time + index) % this.colors.length;
        const nextColorIndex = (colorIndex + 1) % this.colors.length;
        const t = (time + index) % 1;
        
        const color1 = this.colors[colorIndex];
        const color2 = this.colors[nextColorIndex];
        
        return {
            r: Math.floor(color1.r + (color2.r - color1.r) * t),
            g: Math.floor(color1.g + (color2.g - color1.g) * t),
            b: Math.floor(color1.b + (color2.b - color1.b) * t)
        };
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new GradientAnimation('gradient-preview');
});

