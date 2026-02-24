// highlight active nav link
const current = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav__link").forEach(a=>{
  if(a.getAttribute("href") === current) a.classList.add("is-active");
  else a.classList.remove("is-active");
});
