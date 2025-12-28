const snowCanvas = document.getElementById("snow-canvas");

if (snowCanvas) {
  const ctx = snowCanvas.getContext("2d");
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const flakes = [];
  const maxFlakes = 120;

  const resize = () => {
    snowCanvas.width = window.innerWidth;
    snowCanvas.height = window.innerHeight;
  };

  const createFlake = () => ({
    x: Math.random() * snowCanvas.width,
    y: Math.random() * snowCanvas.height,
    radius: 0.8 + Math.random() * 2.4,
    speed: 0.4 + Math.random() * 1.2,
    drift: (Math.random() - 0.5) * 0.6,
    opacity: 0.4 + Math.random() * 0.6
  });

  const populate = () => {
    flakes.length = 0;
    for (let i = 0; i < maxFlakes; i += 1) {
      flakes.push(createFlake());
    }
  };

  const tick = () => {
    ctx.clearRect(0, 0, snowCanvas.width, snowCanvas.height);
    flakes.forEach((flake) => {
      flake.y += flake.speed;
      flake.x += flake.drift;
      if (flake.y > snowCanvas.height + 10) {
        flake.y = -10;
        flake.x = Math.random() * snowCanvas.width;
      }
      if (flake.x > snowCanvas.width + 10) {
        flake.x = -10;
      }
      if (flake.x < -10) {
        flake.x = snowCanvas.width + 10;
      }
      ctx.beginPath();
      ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
      ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(tick);
  };

  resize();
  populate();
  window.addEventListener("resize", () => {
    resize();
    populate();
  });

  if (!prefersReduced) {
    requestAnimationFrame(tick);
  }
}
