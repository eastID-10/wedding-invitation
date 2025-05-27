document.addEventListener("DOMContentLoaded", function () {
  const audioElement = document.getElementById("bgAudio");
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  let source = audioContext.createMediaElementSource(audioElement);
  const gainNode = audioContext.createGain();
  const filterNode = audioContext.createBiquadFilter();
  gainNode.gain.value = 1.0; // Full volume
  filterNode.type = "lowpass";
  filterNode.frequency.value = 1000;
  source.connect(gainNode);
  gainNode.connect(filterNode);
  filterNode.connect(audioContext.destination);

  const toggleBtn = document.getElementById("audio-toggle");
  const audioIcon = document.getElementById("audio-icon");

  let isMuted = false;
  let previousVolume = audioElement.volume;

  // Initialize button based on initial state
  updateButton();

  // Handle initial interaction for audio autoplay
  document.getElementById("openInvitation").addEventListener("click", () => {
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    // Play the audio
    audioElement.play();

    // Apply effects
    gainNode.gain.value = 0.8;
    filterNode.frequency.value = 500;
  });

  // Single toggle button functionality
  toggleBtn.addEventListener("click", () => {
    console.log("audio toggle clicked");
    if (!isMuted) {
      previousVolume = audioElement.volume;
      audioElement.volume = 0;
      isMuted = true;
      updateButton();
      console.log(previousVolume)
    } else {
      // If playing, toggle mute state
      audioElement.volume = previousVolume;
      isMuted = false;
      updateButton();
    }
  });

  // Update button appearance based on current state
  function updateButton() {
    if (!isMuted) {
      // Not playing state
      toggleBtn.classList.remove("bg-indigo-500");
      toggleBtn.classList.add("bg-indigo-300", "hover:bg-indigo-300");
      audioIcon.className = "fas fa-volume-high text-lg";
    } else if (isMuted) {
      // Muted state
      toggleBtn.classList.remove("bg-indigo-500");
      toggleBtn.classList.add("bg-indigo-700", "hover:bg-indigo-700");
      audioIcon.className = "fas fa-volume-xmark text-lg";
    } else {
      // Playing and unmuted state
      toggleBtn.classList.remove("bg-indigo-500");
      toggleBtn.classList.add("bg-indigo-300", "hover:bg-indigo-300");
      audioIcon.className = "fas fa-volume-high text-lg";
    }
  }

  // Alternative audio enablement for browsers that require it
//   function enableAudio() {
//     audio.volume = 0;
//     audio
//       .play()
//       .then(() => {
//         audio.pause();
//         audio.volume = 0.5;
//       })
//       .catch((error) => {
//         console.log("Audio pre-load failed:", error);
//       });
//     document.body.removeEventListener("click", enableAudio);
//     document.body.removeEventListener("keydown", enableAudio);
//   }

//   document.body.addEventListener("click", enableAudio, { once: true });
//   document.body.addEventListener("keydown", enableAudio, { once: true });
});
