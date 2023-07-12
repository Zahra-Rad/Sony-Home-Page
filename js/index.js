"use strict";

const item = document.querySelectorAll(".item");
const btnSearch = document.querySelectorAll(".icon-search");

item[1].addEventListener("click", function () {
  document.querySelector(".businesses").classList.toggle("show");
  document.querySelector(".about").classList.remove("show");
  document.querySelector(".tech").classList.remove("show");
  document.querySelector(".employees").classList.remove("show");
  document.querySelector(".sustain").classList.remove("show");
  document.querySelector(".design").classList.remove("show");
  document.querySelector(".investor").classList.remove("show");
});

item[2].addEventListener("click", function () {
  document.querySelector(".about").classList.toggle("show");
  document.querySelector(".businesses").classList.remove("show");
  document.querySelector(".tech").classList.remove("show");
  document.querySelector(".employees").classList.remove("show");
  document.querySelector(".sustain").classList.remove("show");
  document.querySelector(".design").classList.remove("show");
  document.querySelector(".investor").classList.remove("show");
});

item[3].addEventListener("click", function () {
  document.querySelector(".tech").classList.toggle("show");
  document.querySelector(".about").classList.remove("show");
  document.querySelector(".businesses").classList.remove("show");
  document.querySelector(".employees").classList.remove("show");
  document.querySelector(".sustain").classList.remove("show");
  document.querySelector(".design").classList.remove("show");
  document.querySelector(".investor").classList.remove("show");
});

item[4].addEventListener("click", function () {
  document.querySelector(".employees").classList.toggle("show");
  document.querySelector(".about").classList.remove("show");
  document.querySelector(".businesses").classList.remove("show");
  document.querySelector(".tech").classList.remove("show");
  document.querySelector(".sustain").classList.remove("show");
  document.querySelector(".design").classList.remove("show");
  document.querySelector(".investor").classList.remove("show");
});

item[5].addEventListener("click", function () {
  document.querySelector(".sustain").classList.toggle("show");
  document.querySelector(".about").classList.remove("show");
  document.querySelector(".businesses").classList.remove("show");
  document.querySelector(".tech").classList.remove("show");
  document.querySelector(".employees").classList.remove("show");
  document.querySelector(".design").classList.remove("show");
  document.querySelector(".investor").classList.remove("show");
});

item[6].addEventListener("click", function () {
  document.querySelector(".design").classList.toggle("show");
  document.querySelector(".about").classList.remove("show");
  document.querySelector(".businesses").classList.remove("show");
  document.querySelector(".tech").classList.remove("show");
  document.querySelector(".employees").classList.remove("show");
  document.querySelector(".sustain").classList.remove("show");
  document.querySelector(".investor").classList.remove("show");
});

item[7].addEventListener("click", function () {
  document.querySelector(".investor").classList.toggle("show");
  document.querySelector(".about").classList.remove("show");
  document.querySelector(".businesses").classList.remove("show");
  document.querySelector(".tech").classList.remove("show");
  document.querySelector(".employees").classList.remove("show");
  document.querySelector(".sustain").classList.remove("show");
  document.querySelector(".design").classList.remove("show");
});

btnSearch[0].addEventListener("click", function () {
  document.querySelector(".searchBox-container").classList.remove("hidden");
  btnSearch[0].classList.add("hidden");
});

document.querySelector(".close-search").addEventListener("click", function () {
  document.querySelector(".searchBox-container").classList.add("hidden");
  btnSearch[0].classList.remove("hidden");
});

const next = document.querySelector(".next-slide");
const previous = document.querySelector(".previous-slide");
const parent = document.querySelectorAll("div");

right.addEventListener("click", function () {
  let bg = document.querySelectorAll(".bg");
  let img = document.querySelectorAll(".img");
  address = bg[0].getAttribute("src");

  bg[0].style.marginLeft = "-100%";
  img[0].style.marginLeft = "-100%";

  setTimeout(() => {
    parent[0].removeChild(bg[0]);
    parent[1].removeChild(img[0]);
    let pic0 = document.createElement("img");
    pic0.setAttribute("src", `${address}`);
    pic0.classList.add("bg");
    parent[0].appendChild(pic0);
    let pic1 = document.createElement("img");
    pic1.setAttribute("src", `${address}`);
    pic1.classList.add("img");
    parent[1].appendChild(pic1);
  }, 1000);
});


left.addEventListener("click", function () {
  let bg = document.querySelectorAll(".bg");
  let img = document.querySelectorAll(".img");
  address = bg[5].getAttribute("src");

  parent[0].removeChild(bg[5]);
  parent[1].removeChild(img[5]);
  let pic0 = document.createElement("img");
  pic0.setAttribute("src", `${address}`);
  pic0.style.marginLeft = "-100%";
  pic0.classList.add("bg");
  parent[0].prepend(pic0);
  let pic1 = document.createElement("img");
  pic1.setAttribute("src", `${address}`);
  pic1.style.marginLeft = "-100%";
  pic1.classList.add("img");
  parent[1].prepend(pic1);

  setTimeout(()=>{
    pic0.style.marginLeft = "0";
    pic1.style.marginLeft = "0";
  },10);
});