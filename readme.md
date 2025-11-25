# Page Preloader

A lightweight JavaScript page preloader that displays a loading animation while your page loads, ensuring a smooth user experience.

## Features

- Centered 64×64 white square loader on a black backdrop
- Quarter-turn animation: 350 ms rotation, 450 ms pause, ease-in-out motion
- Minimum loading time guarantee (1 second)
- Automatic preloader removal once page is fully loaded
- Prevents scrolling during loading
- Works seamlessly with Webflow projects

## Installation

Add the following code to your Webflow project:

### CSS
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/goodsoupx/js-animations@master/css/loader-style.css">
```

### JavaScript
```html
<script src="https://cdn.jsdelivr.net/gh/goodsoupx/js-animations@master/js/loader.js"></script>
```

## How It Works

1. The preloader appears immediately when the page starts loading
2. A geometric loader animates while content loads
3. Once the page is fully loaded, the preloader fades out smoothly
4. The preloader ensures a minimum display time of 1 second for a polished experience

## Customization

You can customize the preloader by editing `css/loader-style.css`:
- Change the background color (currently `#000000`)
- Modify the loader size, shape, and colors
- Adjust animation timing and easing
- Customize the fade-out transition duration
