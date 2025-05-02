document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('bgAudio');

    document.getElementById('openInvitation').addEventListener('click', () => {
      console.log('audio clicked');
      audio.volume = 0.5; // 50% volume
    
      // Most browsers require muted autoplay initially
      audio.muted = false;
      
      audio.play().catch(e => {
        console.log("Autoplay was prevented:", e);
      });
    });
  }); 