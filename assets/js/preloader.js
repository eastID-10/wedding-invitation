document.addEventListener('DOMContentLoaded', function() {
      // When everything is loaded (including images, etc.)
      window.addEventListener('load', function() {
        const preloader = document.getElementById('preloader');
        const pageContent = document.getElementById('page-content'); 
        
        // Show page content after preloader fades
        setTimeout(() => {
          preloader.style.display = 'none';
          pageContent.style.display = 'block';
          
          // Optional: Add fade-in animation for content
          pageContent.classList.add('animate-fadeIn');
        }, 6000);
      });
      
      // Fallback in case load event doesn't fire
      setTimeout(function() {
        const preloader = document.getElementById('preloader');
        const pageContent = document.getElementById('page-content');
        if(preloader.style.display !== 'none') {
          preloader.style.display = 'none';
          pageContent.style.display = 'block';
        }
      }, 10000); // 3 seconds maximum wait time
    });
