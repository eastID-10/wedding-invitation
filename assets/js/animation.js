let stopConfetti = false;
  let duration = 25 * 1000;
  let animationEnd = Date.now() + duration;
  let skew = 1;

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  function startConfetti() {
    (function frame() {
      if (stopConfetti) return;

      let timeLeft = animationEnd - Date.now();
      let ticks = Math.max(200, 500 * (timeLeft / duration));
      skew = Math.max(0.8, skew - 0.001);

      confetti({
        particleCount: 1,
        startVelocity: 0,
        ticks: ticks,
        origin: {
          x: Math.random(),
          y: Math.random() * skew - 0.2
        },
        colors: ['#326da8'],
        shapes: ['circle'],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(0.4, 1),
        drift: randomInRange(-0.4, 0.4)
      });

      if (timeLeft > 0 && !stopConfetti) {
        requestAnimationFrame(frame);
      }
    })();
  }

  window.addEventListener('DOMContentLoaded', () => {
    startConfetti();
  });

  function stopConfettiAndOpen() {
    stopConfetti = true;

    // Show your content
    document.getElementById('navbar')?.classList.remove('hidden');
    document.getElementById('main-body')?.classList.remove('overflow-hidden');
    document.getElementById('overlay')?.classList.add('hidden');
  }