// ===== Hero slider =====
const slides = Array.from(document.querySelectorAll(".hero__slide"));
const dotsWrap = document.querySelector(".hero__dots");
const prevBtn = document.querySelector(".hero__arrow.prev");
const nextBtn = document.querySelector(".hero__arrow.next");

let index = 0;

function setActive(i){
  index = (i + slides.length) % slides.length;
  slides.forEach((s, k) => s.classList.toggle("is-active", k === index));
  if (dotsWrap){
    dotsWrap.querySelectorAll("button").forEach((d,k)=> d.classList.toggle("is-active", k===index));
  }
}

if (slides.length){
  // create dots
  if (dotsWrap){
    dotsWrap.innerHTML = "";
    slides.forEach((_, i) => {
      const b = document.createElement("button");
      b.className = "hero__dot" + (i===0 ? " is-active" : "");
      b.addEventListener("click", () => setActive(i));
      dotsWrap.appendChild(b);
    });
  }

  prevBtn?.addEventListener("click", () => setActive(index - 1));
  nextBtn?.addEventListener("click", () => setActive(index + 1));

  setActive(0);

  // optional auto-advance (comment out if you don’t want it)
  setInterval(() => setActive(index + 1), 6500);
}

// ===== Active nav highlight =====
const current = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav a").forEach(a => {
  if (a.getAttribute("href") === current) a.classList.add("active");
});
