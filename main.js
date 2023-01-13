document.querySelector(".icon__hamburguer").addEventListener("click", () => {
  document.querySelector("body").classList.toggle("active");
  document.querySelector(".line__1").classList.toggle("active");
  document.querySelector(".line__2").classList.toggle("active");
  document.querySelector(".line__3").classList.toggle("active");
  document.querySelector(".menu__container").classList.toggle("active");
  document.querySelector(".menu").classList.toggle("active");
});

const details = document.querySelectorAll(".details h3");

function showDetail(detail) {
  let father = detail.closest(".details");
  father.querySelector("img").classList.toggle("active");

  console.log(father.clientHeight);
  if (father.clientHeight == 16) {
    let tamano = father.querySelector("ul").clientHeight;
    father.style.height = `${1 + tamano / 16}rem`;
    return;
  }

  father.style.height = "1rem";
}

details.forEach((element) =>
  element.addEventListener("click", (e) => showDetail(e.target))
);

const accordion = document.querySelectorAll(".accordion h3");

function showAccordion(detail) {
  let father = detail.closest(".accordion");
  father.classList.toggle("active");
  father.querySelector("img").classList.toggle("active");
}

accordion.forEach((element) =>
  element.addEventListener("click", (e) => showAccordion(e.target))
);
