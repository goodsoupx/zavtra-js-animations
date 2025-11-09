(function () {
    var MIN_LOADING_TIME = 1000;
    var startTime = Date.now();
    var doneCalled = false;
  
    function ensurePreloader() {
      if (!document.getElementById('page-preloader') && document.body) {
        var preloader = document.createElement('div');
        preloader.id = 'page-preloader';
        preloader.innerHTML = '<div class="loader"></div>';
        document.body.insertBefore(preloader, document.body.firstChild);
      }
    }
  
    function applyLoadedState() {
      if (document.body && !document.body.classList.contains('page-loaded')) {
        document.body.classList.add('page-loaded');
      }
    }
  
    function onReallyLoaded() {
      if (doneCalled) return;
      doneCalled = true;
  
      var elapsed = Date.now() - startTime;
      var remaining = MIN_LOADING_TIME - elapsed;
  
      if (remaining > 0) {
        setTimeout(applyLoadedState, remaining);
      } else {
        applyLoadedState();
      }
    }
  
    function init() {
      // Set scroll behavior
      if (document.documentElement) {
        document.documentElement.style.scrollBehavior = 'auto';
      }
      
      // Ensure preloader exists
      ensurePreloader();
      
      // Check if page is already fully loaded
      if (document.readyState === 'complete') {
        // Page is already fully loaded
        onReallyLoaded();
        return;
      }
      
      // Set up load event listener
      var loadHandler = function() {
        onReallyLoaded();
        window.removeEventListener('load', loadHandler);
      };
      window.addEventListener('load', loadHandler);
      
      // Fallback: if load event doesn't fire within 3 seconds, hide anyway
      setTimeout(function() {
        if (!doneCalled) {
          onReallyLoaded();
          window.removeEventListener('load', loadHandler);
        }
      }, 3000);
    }
  
    // Initialize based on current state
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      // DOM is already ready or complete
      init();
    }
  })();