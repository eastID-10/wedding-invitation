document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('bgAudio');
    
    // Set initial volume (0.0 to 1.0, where 1.0 is full volume)
    audio.volume = 0.5; // 50% volume
    
    // Most browsers require muted autoplay initially
    audio.muted = false;
    
    audio.play().catch(e => {
      console.log("Autoplay was prevented:", e);
    });
  });