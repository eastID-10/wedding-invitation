// document.addEventListener('DOMContentLoaded', function() {
//     const audio = document.getElementById('bgAudio');

//     document.getElementById('openInvitation').addEventListener('click', () => {
//       console.log('audio clicked');
//       audio.volume = 0.5; // 50% volume
    
//       // Most browsers require muted autoplay initially
//       audio.muted = false;
      
//       audio.play().catch(e => {
//         console.log("Autoplay was prevented:", e);
//       });
//     });
//   }); 
  document.addEventListener('DOMContentLoaded', function() {
            const audio = document.getElementById('bgAudio');
            const toggleBtn = document.getElementById('audio-toggle');
            const audioIcon = document.getElementById('audio-icon');
            
            let isPlaying = true;
            let isMuted = false;
            audio.volume = 0.5; // Set default volume to 50%

            // Initialize button based on initial state
            updateButton();

            // Single toggle button functionality
            toggleBtn.addEventListener('click', () => {
              console.log('audio toggle clicked');
                if (!isPlaying) {
                    // If not playing, start playback
                    audio.play()
                        .then(() => {
                            isPlaying = true;
                            updateButton();
                        })
                        .catch(error => {
                            console.error("Playback failed:", error);
                        });
                } else {
                    // If playing, toggle mute state
                    isMuted = !isMuted;
                    audio.muted = isMuted;
                    updateButton();
                }
            });

            // Update button appearance based on current state
            function updateButton() {
                if (!isPlaying) {
                    // Not playing state
                    toggleBtn.classList.remove('bg-indigo-500' );
                    toggleBtn.classList.add('bg-indigo-300', 'hover:bg-indigo-300');
                    audioIcon.className = 'fas fa-volume-high text-lg';
                } else if (isMuted) {
                    // Muted state
                    toggleBtn.classList.remove('bg-indigo-500'); 
                    toggleBtn.classList.add('bg-indigo-700', 'hover:bg-indigo-300');
                    audioIcon.className = 'fas fa-volume-xmark text-lg';
                } else {
                    // Playing and unmuted state
                    toggleBtn.classList.remove('bg-indigo-500');
                    toggleBtn.classList.add('bg-indigo-300', 'hover:bg-indigo-300');
                    audioIcon.className = 'fas fa-volume-high text-lg';
                }
            }

            // Handle initial interaction for audio autoplay
            document.getElementById('openInvitation')?.addEventListener('click', () => {
                audio.muted = false;
                audio.play().catch(e => {
                    console.log("Autoplay was prevented:", e);
                });
            });

            // Alternative audio enablement for browsers that require it
            function enableAudio() {
                audio.volume = 0;
                audio.play()
                    .then(() => {
                        audio.pause();
                        audio.volume = 0.5;
                    })
                    .catch(error => {
                        console.log("Audio pre-load failed:", error);
                    });
                document.body.removeEventListener('click', enableAudio);
                document.body.removeEventListener('keydown', enableAudio);
            }

            document.body.addEventListener('click', enableAudio, { once: true });
            document.body.addEventListener('keydown', enableAudio, { once: true });
        });