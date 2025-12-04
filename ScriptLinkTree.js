/* ==== 1. tsParticles – Nebula & Bintang ==== */
document.addEventListener("DOMContentLoaded", function () {
  tsParticles.load("tsparticles", {
    priset: "stars",
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: ["#89CFF0", "#D8BFD8", "#FFFFFF"] },
      shape: { type: "circle" },
      opacity: { value: 0.8, random: true },
      size: { value: 3, random: true },
      move: {
        enable: true,
        speed: 0.5,
        direction: "none",
        random: false,
        out_mode: "out",
      },
      links: {
        enable: true,
        distance: 150,
        color: "#89CFF0",
        opacity: 0.3,
        width: 1,
      },
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { particles_nb: 4 },
      },
    },
    detectRetina: true,
  });
});

/* ==== 2. Musik Latar + Toggle ==== */
const bgm = document.getElementById("bgm");
const musicBtn = document.getElementById("musicBtn");
const musicIcon = document.getElementById("musicIcon");
let isPlaying = false;

musicBtn.addEventListener("click", () => {
  if (isPlaying) {
    bgm.play().catch(() => {});
  } else {
    bgm.pause();
  }
  isPlaying = !isPlaying;
  musicIcon.classList.toggle("fa-volume-up");
  musicIcon.classList.toggle("fa-volume-mute");
});

// Pertama kali harus klik dulu biar browser izinin autoplay
document.body.addEventListener(
  "click",
  () => {
    if (!isPlaying) bgm.play().catch(() => {});
  },
  { once: true }
);
