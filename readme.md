# Page Preloader

A lightweight JavaScript page preloader that displays a loading animation while your page loads, ensuring a smooth user experience.

## Features

- Smooth loading animation with customizable spinner
- Minimum loading time guarantee (1 second)
- Automatic preloader removal once page is fully loaded
- Prevents scrolling during loading
- Works seamlessly with Webflow projects

## Installation

Add the following code to your Webflow project:

### CSS
```html
<link rel="stylesheet" href="https://yourdomain.com/css/loader-style.css">
```

### JavaScript
```html
<script src="https://yourdomain.com/js/loader.js"></script>
```

## How It Works

1. The preloader appears immediately when the page starts loading
2. A spinner animation is displayed while content loads
3. Once the page is fully loaded, the preloader fades out smoothly
4. The preloader ensures a minimum display time of 1 second for a polished experience

## Customization

You can customize the preloader by editing `css/loader-style.css`:
- Change the background color (currently `#ffffff`)
- Modify the spinner size and colors
- Adjust animation speed
- Customize the fade-out transition duration
