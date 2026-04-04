<script>
/* ================= AUTO SCROLL APPS ================= */
const appsGrid = document.querySelector(".apps-grid");

let scrollPos = 0;
const scrollStep = 185;     // card width + gap
const scrollDelay = 2500;  // time in ms

setInterval(() => {
  if (!appsGrid) return;

  scrollPos += scrollStep;

  if (scrollPos >= appsGrid.scrollWidth - appsGrid.clientWidth) {
    scrollPos = 0; // reset to start
  }

  appsGrid.scrollTo({
    left: scrollPos,
    behavior: "smooth"
  });
}, scrollDelay);
</script>
