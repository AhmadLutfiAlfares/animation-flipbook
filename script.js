const lungsClean = document.getElementById("lungs-clean");
const lungsDirty = document.getElementById("lungs-dirty");
const smokeContainer = document.getElementById("smoke-container");
const intro = document.querySelector(".intro");
const scene = document.getElementById("scene");

// /* ===============================
//    OVERLAY ASAP
// ================================ */
// const smokeOverlay = document.createElement("div");
// Object.assign(smokeOverlay.style, {
//   position: "fixed",
//   inset: "0",
//   background: "rgba(220,220,220,0.2)",
//   backdropFilter: "blur(25px)",
//   zIndex: "998",
//   opacity: "0",
//   transition: "opacity 2s ease"
// });
// document.body.appendChild(smokeOverlay);

/* ===============================
   ASAP TEBAL
================================ */
function createThickSmoke() {
  const smoke = document.createElement("div");
  smoke.className = "smoke";

  const size = Math.random() * 400 + 500;
  smoke.style.width = size + "px";
  smoke.style.height = size + "px";

  const side = Math.floor(Math.random() * 4);

  if (side === 0) {
    smoke.style.left = -size + "px";
    smoke.style.top = Math.random() * innerHeight + "px";
  } else if (side === 1) {
    smoke.style.left = innerWidth + "px";
    smoke.style.top = Math.random() * innerHeight + "px";
  } else if (side === 2) {
    smoke.style.top = -size + "px";
    smoke.style.left = Math.random() * innerWidth + "px";
  } else {
    smoke.style.top = innerHeight + "px";
    smoke.style.left = Math.random() * innerWidth + "px";
  }

  const duration = Math.random() * 2 + 4;
  smoke.style.animation = `smokeToCenter ${duration}s linear forwards`;

  smokeContainer.appendChild(smoke);
  setTimeout(() => smoke.remove(), duration * 1000);
}

/* ===============================
   LOADING INLINE
================================ */
function startInlineLoading() {
  const bar = document.getElementById("progress-bar");
  const text = document.getElementById("progress-text");

  let progress = 0;

  const interval = setInterval(() => {
    progress += 5;

    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);

      setTimeout(() => {
        window.location.href =
          "https://online.flippingbook.com/view/664141387/";
      }, 600);
    }

    bar.style.width = progress + "%";
    text.textContent = progress + "%";
  }, 120);
}

/* ===============================
   TIMELINE UTAMA
================================ */
function startIntroAnimation() {
  let smokeInterval;

  // overlay asap
  setTimeout(() => {
    smokeOverlay.style.opacity = "1";
  }, 2000);

  // asap tebal
  setTimeout(() => {
    for (let i = 0; i < 40; i++) createThickSmoke();
    smokeInterval = setInterval(createThickSmoke, 120);
  }, 2200);

  // transisi paru
  setTimeout(() => {
    lungsClean.style.opacity = "0";
    lungsDirty.style.opacity = "1";
  }, 3500);

  // stop asap
  setTimeout(() => {
    clearInterval(smokeInterval);
  }, 5200);

  // fade out asap
  setTimeout(() => {
    smokeContainer.style.opacity = "0";
    smokeOverlay.style.opacity = "0";
  }, 5800);

  // hapus asap
  setTimeout(() => {
    smokeContainer.remove();
    smokeOverlay.remove();
  }, 8200);

  // tampilkan intro + loading
  setTimeout(() => {
    scene.style.display = "none";
    intro.classList.remove("hidden");
    startInlineLoading();
  }, 9000);
}

/* ===============================
   START
================================ */
startIntroAnimation();
