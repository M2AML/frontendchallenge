const h2 = document.querySelectorAll("h2");
const p = document.querySelectorAll("p");
const arrow = document.querySelectorAll(".arrow");

for (let i = 0; i < h2.length; i++) {
  h2[i].addEventListener("click", (e) => {
    const h2Active = document.querySelector("h2.h2-active");
    const pActive = document.querySelector("p.active");
    const arrowRotate = document.querySelector(".arrow.rotate");

    h2Active.classList.remove("h2-active");
    h2[i].classList.add("h2-active");

    pActive.classList.remove("active");
    p[i].classList.add("active");

    arrowRotate.classList.remove("rotate");
    arrow[i].classList.add("rotate");
  });
}
