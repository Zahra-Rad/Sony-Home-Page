"use strict";

let screenWidth = document.documentElement.clientWidth;

if (screenWidth >= 0 && screenWidth <= 640) {
  const itemChild = document.querySelectorAll(".item-child");
  const item = document.querySelectorAll(".item");
  const busiChild = document.querySelectorAll(".busiChild");
  const aboChild = document.querySelectorAll(".aboChild");
  const techChild = document.querySelectorAll(".techChild");
  const empChild = document.querySelectorAll(".empChild");
  const susChild = document.querySelectorAll(".susChild");
  const desChild = document.querySelectorAll(".desChild");
  const invChild = document.querySelectorAll(".invChild");
  const btnSearch = document.querySelectorAll(".icon-search");

  document.querySelector(".devider").addEventListener("click", function () {
    if (document.querySelector(".middle").classList.contains("opacity0")) {
      setTimeout(function () {
        document.querySelector(".bottom").style.top = "100%";
        document.querySelector(".top").style.top = "0";
      }, 100);
      document.querySelector(".top").style.transform = "rotate(0)";
      document.querySelector(".bottom").style.transform = "rotate(0)";
      document.querySelector(".middle").style.opacity = "1";
      document.querySelector(".middle").classList.remove("opacity0");

      document.querySelector(".header-nav").style.height = "0";
      itemChild[0].style.visibility = "hidden";
      itemChild[1].style.visibility = "hidden";
      itemChild[2].style.visibility = "hidden";
      itemChild[3].style.visibility = "hidden";
      itemChild[4].style.visibility = "hidden";
      itemChild[5].style.visibility = "hidden";
      itemChild[6].style.visibility = "hidden";
      itemChild[7].style.visibility = "hidden";
      itemChild[8].style.visibility = "hidden";
    } else {
      setTimeout(function () {
        document.querySelector(".top").style.transform = "rotate(-45deg)";
        document.querySelector(".bottom").style.transform = "rotate(45deg)";
      }, 100);
      document.querySelector(".top").style.top = "50%";
      document.querySelector(".bottom").style.top = "50%";
      document.querySelector(".middle").style.opacity = "0";
      document.querySelector(".middle").classList.add("opacity0");

      document.querySelector(".header-nav").style.height = "610px";
      itemChild[0].style.visibility = "visible";
      itemChild[1].style.visibility = "visible";
      itemChild[2].style.visibility = "visible";
      itemChild[3].style.visibility = "visible";
      itemChild[4].style.visibility = "visible";
      itemChild[5].style.visibility = "visible";
      itemChild[6].style.visibility = "visible";
      itemChild[7].style.visibility = "visible";
      itemChild[8].style.visibility = "visible";
    }
  });

  item[1].addEventListener("click", function () {
    if (itemChild[1].classList.contains("is-open")) {
      document.querySelector(".businesses").style.height = "0";
      item[1].style.backgroundColor = "#000";
      busiChild[0].style.visibility = "hidden";
      busiChild[1].style.visibility = "hidden";
      busiChild[2].style.visibility = "hidden";
      busiChild[3].style.visibility = "hidden";
      busiChild[4].style.visibility = "hidden";
      busiChild[5].style.visibility = "hidden";
      busiChild[6].style.visibility = "hidden";
      busiChild[7].style.visibility = "hidden";
      busiChild[8].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[0].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[0].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[0].style.opacity = "1";
      itemChild[1].classList.remove("is-open");
    } else {
      document.querySelector(".businesses").style.height = "544px";
      item[1].style.backgroundColor = "#262626";
      busiChild[0].style.visibility = "visible";
      busiChild[1].style.visibility = "visible";
      busiChild[2].style.visibility = "visible";
      busiChild[3].style.visibility = "visible";
      busiChild[4].style.visibility = "visible";
      busiChild[5].style.visibility = "visible";
      busiChild[6].style.visibility = "visible";
      busiChild[7].style.visibility = "visible";
      busiChild[8].style.visibility = "visible";
      document.querySelectorAll(".vertical")[0].style.transform =
        "translate(0, -50%) rotate(90deg)";
      document.querySelectorAll(".horizontal")[0].style.transform =
        "translate(0, -50%) rotate(90deg)";
      document.querySelectorAll(".horizontal")[0].style.opacity = "0";
      itemChild[1].classList.add("is-open");

      document.querySelector(".about").style.height = "0";
      item[2].style.backgroundColor = "#000";
      aboChild[0].style.visibility = "hidden";
      aboChild[1].style.visibility = "hidden";
      aboChild[2].style.visibility = "hidden";
      aboChild[3].style.visibility = "hidden";
      aboChild[4].style.visibility = "hidden";
      aboChild[5].style.visibility = "hidden";
      aboChild[6].style.visibility = "hidden";
      aboChild[7].style.visibility = "hidden";
      aboChild[8].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[1].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[1].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[1].style.opacity = "1";
      itemChild[2].classList.remove("is-open");

      document.querySelector(".tech").style.height = "0";
      item[3].style.backgroundColor = "#000";
      techChild[0].style.visibility = "hidden";
      techChild[1].style.visibility = "hidden";
      techChild[2].style.visibility = "hidden";
      techChild[3].style.visibility = "hidden";
      techChild[4].style.visibility = "hidden";
      techChild[5].style.visibility = "hidden";
      techChild[6].style.visibility = "hidden";
      techChild[7].style.visibility = "hidden";
      techChild[8].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[2].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[2].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[2].style.opacity = "1";
      itemChild[3].classList.remove("is-open");

      document.querySelector(".employees").style.height = "0";
      item[4].style.backgroundColor = "#000";
      empChild[0].style.visibility = "hidden";
      empChild[1].style.visibility = "hidden";
      empChild[2].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[3].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[3].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[3].style.opacity = "1";
      itemChild[4].classList.remove("is-open");

      document.querySelector(".sustain").style.height = "0";
      item[5].style.backgroundColor = "#000";
      susChild[0].style.visibility = "hidden";
      susChild[1].style.visibility = "hidden";
      susChild[2].style.visibility = "hidden";
      susChild[3].style.visibility = "hidden";
      susChild[4].style.visibility = "hidden";
      susChild[5].style.visibility = "hidden";
      susChild[6].style.visibility = "hidden";
      susChild[7].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[4].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[4].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[4].style.opacity = "1";
      itemChild[5].classList.remove("is-open");

      document.querySelector(".design").style.height = "0";
      item[6].style.backgroundColor = "#000";
      desChild[0].style.visibility = "hidden";
      desChild[1].style.visibility = "hidden";
      desChild[2].style.visibility = "hidden";
      desChild[3].style.visibility = "hidden";
      desChild[4].style.visibility = "hidden";
      desChild[5].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[5].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[5].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[5].style.opacity = "1";
      itemChild[6].classList.remove("is-open");

      document.querySelector(".investor").style.height = "0";
      item[7].style.backgroundColor = "#000";
      invChild[0].style.visibility = "hidden";
      invChild[1].style.visibility = "hidden";
      invChild[2].style.visibility = "hidden";
      invChild[3].style.visibility = "hidden";
      invChild[4].style.visibility = "hidden";
      invChild[5].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[6].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[6].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[6].style.opacity = "1";
      itemChild[7].classList.remove("is-open");
    }
  });

  item[2].addEventListener("click", function () {
    if (itemChild[2].classList.contains("is-open")) {
      document.querySelector(".about").style.height = "0";
      item[2].style.backgroundColor = "#000";
      techChild[0].style.visibility = "hidden";
      techChild[1].style.visibility = "hidden";
      techChild[2].style.visibility = "hidden";
      techChild[3].style.visibility = "hidden";
      techChild[4].style.visibility = "hidden";
      techChild[5].style.visibility = "hidden";
      techChild[6].style.visibility = "hidden";
      techChild[7].style.visibility = "hidden";
      techChild[8].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[1].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[1].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[1].style.opacity = "1";
      itemChild[2].classList.remove("is-open");
    } else {
      document.querySelector(".about").style.height = "464px";
      item[2].style.backgroundColor = "#262626";
      aboChild[0].style.visibility = "visible";
      aboChild[1].style.visibility = "visible";
      aboChild[2].style.visibility = "visible";
      aboChild[3].style.visibility = "visible";
      aboChild[4].style.visibility = "visible";
      aboChild[5].style.visibility = "visible";
      aboChild[6].style.visibility = "visible";
      aboChild[7].style.visibility = "visible";
      aboChild[8].style.visibility = "visible";
      document.querySelectorAll(".vertical")[1].style.transform =
        "translate(0, -50%) rotate(90deg)";
      document.querySelectorAll(".horizontal")[1].style.transform =
        "translate(0, -50%) rotate(90deg)";
      document.querySelectorAll(".horizontal")[1].style.opacity = "0";
      itemChild[2].classList.add("is-open");

      document.querySelector(".businesses").style.height = "0";
      item[1].style.backgroundColor = "#000";
      busiChild[0].style.visibility = "hidden";
      busiChild[1].style.visibility = "hidden";
      busiChild[2].style.visibility = "hidden";
      busiChild[3].style.visibility = "hidden";
      busiChild[4].style.visibility = "hidden";
      busiChild[5].style.visibility = "hidden";
      busiChild[6].style.visibility = "hidden";
      busiChild[7].style.visibility = "hidden";
      busiChild[8].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[0].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[0].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[0].style.opacity = "1";
      itemChild[1].classList.remove("is-open");

      document.querySelector(".tech").style.height = "0";
      item[3].style.backgroundColor = "#000";
      techChild[0].style.visibility = "hidden";
      techChild[1].style.visibility = "hidden";
      techChild[2].style.visibility = "hidden";
      techChild[3].style.visibility = "hidden";
      techChild[4].style.visibility = "hidden";
      techChild[5].style.visibility = "hidden";
      techChild[6].style.visibility = "hidden";
      techChild[7].style.visibility = "hidden";
      techChild[8].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[2].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[2].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[2].style.opacity = "1";
      itemChild[3].classList.remove("is-open");

      document.querySelector(".employees").style.height = "0";
      item[4].style.backgroundColor = "#000";
      empChild[0].style.visibility = "hidden";
      empChild[1].style.visibility = "hidden";
      empChild[2].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[3].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[3].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[3].style.opacity = "1";
      itemChild[4].classList.remove("is-open");

      document.querySelector(".sustain").style.height = "0";
      item[5].style.backgroundColor = "#000";
      susChild[0].style.visibility = "hidden";
      susChild[1].style.visibility = "hidden";
      susChild[2].style.visibility = "hidden";
      susChild[3].style.visibility = "hidden";
      susChild[4].style.visibility = "hidden";
      susChild[5].style.visibility = "hidden";
      susChild[6].style.visibility = "hidden";
      susChild[7].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[4].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[4].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[4].style.opacity = "1";
      itemChild[5].classList.remove("is-open");

      document.querySelector(".design").style.height = "0";
      item[6].style.backgroundColor = "#000";
      desChild[0].style.visibility = "hidden";
      desChild[1].style.visibility = "hidden";
      desChild[2].style.visibility = "hidden";
      desChild[3].style.visibility = "hidden";
      desChild[4].style.visibility = "hidden";
      desChild[5].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[5].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[5].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[5].style.opacity = "1";
      itemChild[6].classList.remove("is-open");

      document.querySelector(".investor").style.height = "0";
      item[7].style.backgroundColor = "#000";
      invChild[0].style.visibility = "hidden";
      invChild[1].style.visibility = "hidden";
      invChild[2].style.visibility = "hidden";
      invChild[3].style.visibility = "hidden";
      invChild[4].style.visibility = "hidden";
      invChild[5].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[6].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[6].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[6].style.opacity = "1";
      itemChild[7].classList.remove("is-open");
    }
  });

  item[3].addEventListener("click", function () {
    if (itemChild[3].classList.contains("is-open")) {
      document.querySelector(".tech").style.height = "0";
      item[3].style.backgroundColor = "#000";
      techChild[0].style.visibility = "hidden";
      techChild[1].style.visibility = "hidden";
      techChild[2].style.visibility = "hidden";
      techChild[3].style.visibility = "hidden";
      techChild[4].style.visibility = "hidden";
      techChild[5].style.visibility = "hidden";
      techChild[6].style.visibility = "hidden";
      techChild[7].style.visibility = "hidden";
      techChild[8].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[2].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[2].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[2].style.opacity = "1";
      itemChild[3].classList.remove("is-open");
    } else {
      document.querySelector(".tech").style.height = "464px";
      item[3].style.backgroundColor = "#262626";
      techChild[0].style.visibility = "visible";
      techChild[1].style.visibility = "visible";
      techChild[2].style.visibility = "visible";
      techChild[3].style.visibility = "visible";
      techChild[4].style.visibility = "visible";
      techChild[5].style.visibility = "visible";
      techChild[6].style.visibility = "visible";
      techChild[7].style.visibility = "visible";
      techChild[8].style.visibility = "visible";
      document.querySelectorAll(".vertical")[2].style.transform =
        "translate(0, -50%) rotate(90deg)";
      document.querySelectorAll(".horizontal")[2].style.transform =
        "translate(0, -50%) rotate(90deg)";
      document.querySelectorAll(".horizontal")[2].style.opacity = "0";
      itemChild[3].classList.add("is-open");

      document.querySelector(".about").style.height = "0";
      item[2].style.backgroundColor = "#000";
      aboChild[0].style.visibility = "visible";
      aboChild[1].style.visibility = "visible";
      aboChild[2].style.visibility = "visible";
      aboChild[3].style.visibility = "visible";
      aboChild[4].style.visibility = "visible";
      aboChild[5].style.visibility = "visible";
      aboChild[6].style.visibility = "visible";
      aboChild[7].style.visibility = "visible";
      aboChild[8].style.visibility = "visible";
      document.querySelectorAll(".vertical")[1].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[1].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[1].style.opacity = "1";
      itemChild[2].classList.remove("is-open");

      document.querySelector(".businesses").style.height = "0";
      item[1].style.backgroundColor = "#000";
      busiChild[0].style.visibility = "hidden";
      busiChild[1].style.visibility = "hidden";
      busiChild[2].style.visibility = "hidden";
      busiChild[3].style.visibility = "hidden";
      busiChild[4].style.visibility = "hidden";
      busiChild[5].style.visibility = "hidden";
      busiChild[6].style.visibility = "hidden";
      busiChild[7].style.visibility = "hidden";
      busiChild[8].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[0].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[0].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[0].style.opacity = "1";
      itemChild[1].classList.remove("is-open");

      document.querySelector(".employees").style.height = "0";
      item[4].style.backgroundColor = "#000";
      empChild[0].style.visibility = "hidden";
      empChild[1].style.visibility = "hidden";
      empChild[2].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[3].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[3].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[3].style.opacity = "1";
      itemChild[4].classList.remove("is-open");

      document.querySelector(".sustain").style.height = "0";
      item[5].style.backgroundColor = "#000";
      susChild[0].style.visibility = "hidden";
      susChild[1].style.visibility = "hidden";
      susChild[2].style.visibility = "hidden";
      susChild[3].style.visibility = "hidden";
      susChild[4].style.visibility = "hidden";
      susChild[5].style.visibility = "hidden";
      susChild[6].style.visibility = "hidden";
      susChild[7].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[4].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[4].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[4].style.opacity = "1";
      itemChild[5].classList.remove("is-open");

      document.querySelector(".design").style.height = "0";
      item[6].style.backgroundColor = "#000";
      desChild[0].style.visibility = "hidden";
      desChild[1].style.visibility = "hidden";
      desChild[2].style.visibility = "hidden";
      desChild[3].style.visibility = "hidden";
      desChild[4].style.visibility = "hidden";
      desChild[5].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[5].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[5].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[5].style.opacity = "1";
      itemChild[6].classList.remove("is-open");

      document.querySelector(".investor").style.height = "0";
      item[7].style.backgroundColor = "#000";
      invChild[0].style.visibility = "hidden";
      invChild[1].style.visibility = "hidden";
      invChild[2].style.visibility = "hidden";
      invChild[3].style.visibility = "hidden";
      invChild[4].style.visibility = "hidden";
      invChild[5].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[6].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[6].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[6].style.opacity = "1";
      itemChild[7].classList.remove("is-open");
    }
  });

  item[4].addEventListener("click", function () {
    if (itemChild[4].classList.contains("is-open")) {
      document.querySelector(".employees").style.height = "0";
      item[4].style.backgroundColor = "#000";
      empChild[0].style.visibility = "hidden";
      empChild[1].style.visibility = "hidden";
      empChild[2].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[3].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[3].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[3].style.opacity = "1";
      itemChild[4].classList.remove("is-open");
    } else {
      document.querySelector(".employees").style.height = "170px";
      item[4].style.backgroundColor = "#262626";
      empChild[0].style.visibility = "visible";
      empChild[1].style.visibility = "visible";
      empChild[2].style.visibility = "visible";
      document.querySelectorAll(".vertical")[3].style.transform =
        "translate(0, -50%) rotate(90deg)";
      document.querySelectorAll(".horizontal")[3].style.transform =
        "translate(0, -50%) rotate(90deg)";
      document.querySelectorAll(".horizontal")[3].style.opacity = "0";
      itemChild[4].classList.add("is-open");

      document.querySelector(".about").style.height = "0";
      item[2].style.backgroundColor = "#000";
      aboChild[0].style.visibility = "visible";
      aboChild[1].style.visibility = "visible";
      aboChild[2].style.visibility = "visible";
      aboChild[3].style.visibility = "visible";
      aboChild[4].style.visibility = "visible";
      aboChild[5].style.visibility = "visible";
      aboChild[6].style.visibility = "visible";
      aboChild[7].style.visibility = "visible";
      aboChild[8].style.visibility = "visible";
      document.querySelectorAll(".vertical")[1].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[1].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[1].style.opacity = "1";
      itemChild[2].classList.remove("is-open");

      document.querySelector(".businesses").style.height = "0";
      item[1].style.backgroundColor = "#000";
      busiChild[0].style.visibility = "hidden";
      busiChild[1].style.visibility = "hidden";
      busiChild[2].style.visibility = "hidden";
      busiChild[3].style.visibility = "hidden";
      busiChild[4].style.visibility = "hidden";
      busiChild[5].style.visibility = "hidden";
      busiChild[6].style.visibility = "hidden";
      busiChild[7].style.visibility = "hidden";
      busiChild[8].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[0].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[0].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[0].style.opacity = "1";
      itemChild[1].classList.remove("is-open");

      document.querySelector(".tech").style.height = "0";
      item[3].style.backgroundColor = "#000";
      techChild[0].style.visibility = "hidden";
      techChild[1].style.visibility = "hidden";
      techChild[2].style.visibility = "hidden";
      techChild[3].style.visibility = "hidden";
      techChild[4].style.visibility = "hidden";
      techChild[5].style.visibility = "hidden";
      techChild[6].style.visibility = "hidden";
      techChild[7].style.visibility = "hidden";
      techChild[8].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[2].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[2].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[2].style.opacity = "1";
      itemChild[3].classList.remove("is-open");

      document.querySelector(".sustain").style.height = "0";
      item[5].style.backgroundColor = "#000";
      susChild[0].style.visibility = "hidden";
      susChild[1].style.visibility = "hidden";
      susChild[2].style.visibility = "hidden";
      susChild[3].style.visibility = "hidden";
      susChild[4].style.visibility = "hidden";
      susChild[5].style.visibility = "hidden";
      susChild[6].style.visibility = "hidden";
      susChild[7].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[4].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[4].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[4].style.opacity = "1";
      itemChild[5].classList.remove("is-open");

      document.querySelector(".design").style.height = "0";
      item[6].style.backgroundColor = "#000";
      desChild[0].style.visibility = "hidden";
      desChild[1].style.visibility = "hidden";
      desChild[2].style.visibility = "hidden";
      desChild[3].style.visibility = "hidden";
      desChild[4].style.visibility = "hidden";
      desChild[5].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[5].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[5].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[5].style.opacity = "1";
      itemChild[6].classList.remove("is-open");

      document.querySelector(".investor").style.height = "0";
      item[7].style.backgroundColor = "#000";
      invChild[0].style.visibility = "hidden";
      invChild[1].style.visibility = "hidden";
      invChild[2].style.visibility = "hidden";
      invChild[3].style.visibility = "hidden";
      invChild[4].style.visibility = "hidden";
      invChild[5].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[6].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[6].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[6].style.opacity = "1";
      itemChild[7].classList.remove("is-open");
    }
  });

  item[5].addEventListener("click", function () {
    if (itemChild[5].classList.contains("is-open")) {
      document.querySelector(".sustain").style.height = "0";
      item[5].style.backgroundColor = "#000";
      susChild[0].style.visibility = "hidden";
      susChild[1].style.visibility = "hidden";
      susChild[2].style.visibility = "hidden";
      susChild[3].style.visibility = "hidden";
      susChild[4].style.visibility = "hidden";
      susChild[5].style.visibility = "hidden";
      susChild[6].style.visibility = "hidden";
      susChild[7].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[4].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[4].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[4].style.opacity = "1";
      itemChild[5].classList.remove("is-open");
    } else {
      document.querySelector(".sustain").style.height = "415px";
      item[5].style.backgroundColor = "#262626";
      susChild[0].style.visibility = "visible";
      susChild[1].style.visibility = "visible";
      susChild[2].style.visibility = "visible";
      susChild[3].style.visibility = "visible";
      susChild[4].style.visibility = "visible";
      susChild[5].style.visibility = "visible";
      susChild[6].style.visibility = "visible";
      susChild[7].style.visibility = "visible";
      document.querySelectorAll(".vertical")[4].style.transform =
        "translate(0, -50%) rotate(90deg)";
      document.querySelectorAll(".horizontal")[4].style.transform =
        "translate(0, -50%) rotate(90deg)";
      document.querySelectorAll(".horizontal")[4].style.opacity = "0";
      itemChild[5].classList.add("is-open");

      document.querySelector(".about").style.height = "0";
      item[2].style.backgroundColor = "#000";
      aboChild[0].style.visibility = "visible";
      aboChild[1].style.visibility = "visible";
      aboChild[2].style.visibility = "visible";
      aboChild[3].style.visibility = "visible";
      aboChild[4].style.visibility = "visible";
      aboChild[5].style.visibility = "visible";
      aboChild[6].style.visibility = "visible";
      aboChild[7].style.visibility = "visible";
      aboChild[8].style.visibility = "visible";
      document.querySelectorAll(".vertical")[1].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[1].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[1].style.opacity = "1";
      itemChild[2].classList.remove("is-open");

      document.querySelector(".businesses").style.height = "0";
      item[1].style.backgroundColor = "#000";
      busiChild[0].style.visibility = "hidden";
      busiChild[1].style.visibility = "hidden";
      busiChild[2].style.visibility = "hidden";
      busiChild[3].style.visibility = "hidden";
      busiChild[4].style.visibility = "hidden";
      busiChild[5].style.visibility = "hidden";
      busiChild[6].style.visibility = "hidden";
      busiChild[7].style.visibility = "hidden";
      busiChild[8].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[0].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[0].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[0].style.opacity = "1";
      itemChild[1].classList.remove("is-open");

      document.querySelector(".tech").style.height = "0";
      item[3].style.backgroundColor = "#000";
      techChild[0].style.visibility = "hidden";
      techChild[1].style.visibility = "hidden";
      techChild[2].style.visibility = "hidden";
      techChild[3].style.visibility = "hidden";
      techChild[4].style.visibility = "hidden";
      techChild[5].style.visibility = "hidden";
      techChild[6].style.visibility = "hidden";
      techChild[7].style.visibility = "hidden";
      techChild[8].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[2].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[2].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[2].style.opacity = "1";
      itemChild[3].classList.remove("is-open");

      document.querySelector(".employees").style.height = "0";
      item[4].style.backgroundColor = "#000";
      empChild[0].style.visibility = "hidden";
      empChild[1].style.visibility = "hidden";
      empChild[2].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[3].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[3].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[3].style.opacity = "1";
      itemChild[4].classList.remove("is-open");

      document.querySelector(".design").style.height = "0";
      item[6].style.backgroundColor = "#000";
      desChild[0].style.visibility = "hidden";
      desChild[1].style.visibility = "hidden";
      desChild[2].style.visibility = "hidden";
      desChild[3].style.visibility = "hidden";
      desChild[4].style.visibility = "hidden";
      desChild[5].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[5].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[5].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[5].style.opacity = "1";
      itemChild[6].classList.remove("is-open");

      document.querySelector(".investor").style.height = "0";
      item[7].style.backgroundColor = "#000";
      invChild[0].style.visibility = "hidden";
      invChild[1].style.visibility = "hidden";
      invChild[2].style.visibility = "hidden";
      invChild[3].style.visibility = "hidden";
      invChild[4].style.visibility = "hidden";
      invChild[5].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[6].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[6].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[6].style.opacity = "1";
      itemChild[7].classList.remove("is-open");
    }
  });

  item[6].addEventListener("click", function () {
    if (itemChild[6].classList.contains("is-open")) {
      document.querySelector(".design").style.height = "0";
      item[6].style.backgroundColor = "#000";
      desChild[0].style.visibility = "hidden";
      desChild[1].style.visibility = "hidden";
      desChild[2].style.visibility = "hidden";
      desChild[3].style.visibility = "hidden";
      desChild[4].style.visibility = "hidden";
      desChild[5].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[5].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[5].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[5].style.opacity = "1";
      itemChild[6].classList.remove("is-open");
    } else {
      document.querySelector(".design").style.height = "317px";
      item[6].style.backgroundColor = "#262626";
      desChild[0].style.visibility = "visible";
      desChild[1].style.visibility = "visible";
      desChild[2].style.visibility = "visible";
      desChild[3].style.visibility = "visible";
      desChild[4].style.visibility = "visible";
      desChild[5].style.visibility = "visible";
      document.querySelectorAll(".vertical")[5].style.transform =
        "translate(0, -50%) rotate(90deg)";
      document.querySelectorAll(".horizontal")[5].style.transform =
        "translate(0, -50%) rotate(90deg)";
      document.querySelectorAll(".horizontal")[5].style.opacity = "0";
      itemChild[6].classList.add("is-open");

      document.querySelector(".about").style.height = "0";
      item[2].style.backgroundColor = "#000";
      aboChild[0].style.visibility = "visible";
      aboChild[1].style.visibility = "visible";
      aboChild[2].style.visibility = "visible";
      aboChild[3].style.visibility = "visible";
      aboChild[4].style.visibility = "visible";
      aboChild[5].style.visibility = "visible";
      aboChild[6].style.visibility = "visible";
      aboChild[7].style.visibility = "visible";
      aboChild[8].style.visibility = "visible";
      document.querySelectorAll(".vertical")[1].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[1].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[1].style.opacity = "1";
      itemChild[2].classList.remove("is-open");

      document.querySelector(".businesses").style.height = "0";
      item[1].style.backgroundColor = "#000";
      busiChild[0].style.visibility = "hidden";
      busiChild[1].style.visibility = "hidden";
      busiChild[2].style.visibility = "hidden";
      busiChild[3].style.visibility = "hidden";
      busiChild[4].style.visibility = "hidden";
      busiChild[5].style.visibility = "hidden";
      busiChild[6].style.visibility = "hidden";
      busiChild[7].style.visibility = "hidden";
      busiChild[8].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[0].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[0].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[0].style.opacity = "1";
      itemChild[1].classList.remove("is-open");

      document.querySelector(".tech").style.height = "0";
      item[3].style.backgroundColor = "#000";
      techChild[0].style.visibility = "hidden";
      techChild[1].style.visibility = "hidden";
      techChild[2].style.visibility = "hidden";
      techChild[3].style.visibility = "hidden";
      techChild[4].style.visibility = "hidden";
      techChild[5].style.visibility = "hidden";
      techChild[6].style.visibility = "hidden";
      techChild[7].style.visibility = "hidden";
      techChild[8].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[2].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[2].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[2].style.opacity = "1";
      itemChild[3].classList.remove("is-open");

      document.querySelector(".employees").style.height = "0";
      item[4].style.backgroundColor = "#000";
      empChild[0].style.visibility = "hidden";
      empChild[1].style.visibility = "hidden";
      empChild[2].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[3].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[3].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[3].style.opacity = "1";
      itemChild[4].classList.remove("is-open");

      document.querySelector(".sustain").style.height = "0";
      item[5].style.backgroundColor = "#000";
      susChild[0].style.visibility = "hidden";
      susChild[1].style.visibility = "hidden";
      susChild[2].style.visibility = "hidden";
      susChild[3].style.visibility = "hidden";
      susChild[4].style.visibility = "hidden";
      susChild[5].style.visibility = "hidden";
      susChild[6].style.visibility = "hidden";
      susChild[7].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[4].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[4].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[4].style.opacity = "1";
      itemChild[5].classList.remove("is-open");

      document.querySelector(".investor").style.height = "0";
      item[7].style.backgroundColor = "#000";
      invChild[0].style.visibility = "hidden";
      invChild[1].style.visibility = "hidden";
      invChild[2].style.visibility = "hidden";
      invChild[3].style.visibility = "hidden";
      invChild[4].style.visibility = "hidden";
      invChild[5].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[6].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[6].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[6].style.opacity = "1";
      itemChild[7].classList.remove("is-open");
    }
  });

  item[7].addEventListener("click", function () {
    if (itemChild[7].classList.contains("is-open")) {
      document.querySelector(".investor").style.height = "0";
      item[7].style.backgroundColor = "#000";
      invChild[0].style.visibility = "hidden";
      invChild[1].style.visibility = "hidden";
      invChild[2].style.visibility = "hidden";
      invChild[3].style.visibility = "hidden";
      invChild[4].style.visibility = "hidden";
      invChild[5].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[6].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[6].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[6].style.opacity = "1";
      itemChild[7].classList.remove("is-open");
    } else {
      document.querySelector(".investor").style.height = "317px";
      item[7].style.backgroundColor = "#262626";
      invChild[0].style.visibility = "visible";
      invChild[1].style.visibility = "visible";
      invChild[2].style.visibility = "visible";
      invChild[3].style.visibility = "visible";
      invChild[4].style.visibility = "visible";
      invChild[5].style.visibility = "visible";
      document.querySelectorAll(".vertical")[6].style.transform =
        "translate(0, -50%) rotate(90deg)";
      document.querySelectorAll(".horizontal")[6].style.transform =
        "translate(0, -50%) rotate(90deg)";
      document.querySelectorAll(".horizontal")[6].style.opacity = "0";
      itemChild[7].classList.add("is-open");

      document.querySelector(".about").style.height = "0";
      item[2].style.backgroundColor = "#000";
      aboChild[0].style.visibility = "visible";
      aboChild[1].style.visibility = "visible";
      aboChild[2].style.visibility = "visible";
      aboChild[3].style.visibility = "visible";
      aboChild[4].style.visibility = "visible";
      aboChild[5].style.visibility = "visible";
      aboChild[6].style.visibility = "visible";
      aboChild[7].style.visibility = "visible";
      aboChild[8].style.visibility = "visible";
      document.querySelectorAll(".vertical")[1].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[1].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[1].style.opacity = "1";
      itemChild[2].classList.remove("is-open");

      document.querySelector(".businesses").style.height = "0";
      item[1].style.backgroundColor = "#000";
      busiChild[0].style.visibility = "hidden";
      busiChild[1].style.visibility = "hidden";
      busiChild[2].style.visibility = "hidden";
      busiChild[3].style.visibility = "hidden";
      busiChild[4].style.visibility = "hidden";
      busiChild[5].style.visibility = "hidden";
      busiChild[6].style.visibility = "hidden";
      busiChild[7].style.visibility = "hidden";
      busiChild[8].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[0].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[0].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[0].style.opacity = "1";
      itemChild[1].classList.remove("is-open");

      document.querySelector(".tech").style.height = "0";
      item[3].style.backgroundColor = "#000";
      techChild[0].style.visibility = "hidden";
      techChild[1].style.visibility = "hidden";
      techChild[2].style.visibility = "hidden";
      techChild[3].style.visibility = "hidden";
      techChild[4].style.visibility = "hidden";
      techChild[5].style.visibility = "hidden";
      techChild[6].style.visibility = "hidden";
      techChild[7].style.visibility = "hidden";
      techChild[8].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[2].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[2].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[2].style.opacity = "1";
      itemChild[3].classList.remove("is-open");

      document.querySelector(".employees").style.height = "0";
      item[4].style.backgroundColor = "#000";
      empChild[0].style.visibility = "hidden";
      empChild[1].style.visibility = "hidden";
      empChild[2].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[3].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[3].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[3].style.opacity = "1";
      itemChild[4].classList.remove("is-open");

      document.querySelector(".sustain").style.height = "0";
      item[5].style.backgroundColor = "#000";
      susChild[0].style.visibility = "hidden";
      susChild[1].style.visibility = "hidden";
      susChild[2].style.visibility = "hidden";
      susChild[3].style.visibility = "hidden";
      susChild[4].style.visibility = "hidden";
      susChild[5].style.visibility = "hidden";
      susChild[6].style.visibility = "hidden";
      susChild[7].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[4].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[4].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[4].style.opacity = "1";
      itemChild[5].classList.remove("is-open");

      document.querySelector(".design").style.height = "0";
      item[6].style.backgroundColor = "#000";
      desChild[0].style.visibility = "hidden";
      desChild[1].style.visibility = "hidden";
      desChild[2].style.visibility = "hidden";
      desChild[3].style.visibility = "hidden";
      desChild[4].style.visibility = "hidden";
      desChild[5].style.visibility = "hidden";
      document.querySelectorAll(".vertical")[5].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[5].style.transform =
        "translate(0, -50%) rotate(0deg)";
      document.querySelectorAll(".horizontal")[5].style.opacity = "1";
      itemChild[6].classList.remove("is-open");
    }
  });

  btnSearch[0].addEventListener("click", function () {
    document.querySelector(".searchBox-container").classList.remove("hidden");
    btnSearch[0].classList.add("hidden");
  });

  document
    .querySelector(".close-search")
    .addEventListener("click", function () {
      document.querySelector(".searchBox-container").classList.add("hidden");
      btnSearch[0].classList.remove("hidden");
    });

  document.querySelector("body").addEventListener("click", function (x) {
    if (x.target == document.querySelector(".searchBox-container")) {
      document.querySelector(".searchBox-container").classList.add("hidden");
      btnSearch[0].classList.remove("hidden");
    }
  });

  document
    .querySelector(".site-map-div")
    .addEventListener("click", function () {
      if (
        document.querySelector(".site-map-div").classList.contains("is-active")
      ) {
        document.querySelector(".site-map-div").classList.remove("is-active");
        document.querySelector(".siteMapNav").style.height = "0px";
        document.querySelector(".fa-plus").style.opacity = "1";
      } else {
        document.querySelector(".site-map-div").classList.add("is-active");
        document.querySelector(".siteMapNav").style.height = "2216px";
        document.querySelector(".fa-plus").style.opacity = "0";
      }
    });

  const dots = document.querySelectorAll(".dot");
  const fills = document.querySelectorAll(".fill");
  const parent = document.querySelector(".slider-section-container");
  const bgImg = document.querySelectorAll(".bgImg");
  console.log(bgImg);
  let activeDot = 1;

  function moveDot(activeDot) {
    dots[activeDot].classList.add("active-dot");
    dots[activeDot].style.width = "18.66667vw";
    fills[activeDot].style.backgroundColor = "white";
    bgImg[activeDot].style.opacity = "1";
    let widthfill = 0;
    let key = setInterval(function () {
      widthfill += 1;
      fills[activeDot].style.width = `${widthfill}%`;
      if (widthfill >= 100) {
        clearInterval(key);
      }
    }, 50);
    setTimeout(function () {
      const sections = document.querySelectorAll(".slider-section");
      const caption = document.querySelectorAll(".caption");
      const img = document.querySelectorAll(".img");
      const span = document.querySelectorAll(".span");
      const h2 = document.querySelectorAll(".h2");
      const p = document.querySelectorAll(".p");
      let address = img[0].getAttribute("src");
      let spanText = span[0].textContent;
      let h2Text = h2[0].textContent;
      let pText = p[0].textContent;
      fills[activeDot].style.backgroundColor = "transparent";
      dots[activeDot].classList.remove("active-dot");
      dots[activeDot].style.width = "1.33333vw";
      bgImg[activeDot].style.opacity = "0";
      setTimeout(() => {
        sections[1].style.marginLeft =
          "calc((-75%) + ((100% - 74.66667vw) / 2) - 17px)";
        caption[1].classList.add("hidden");
        caption[1].style.opacity = "0";
        caption[2].classList.remove("hidden");
        caption[2].style.opacity = "1";
        parent.removeChild(sections[0]);

        let sec0 = document.createElement("div");
        sec0.classList.add("slider-section");
        parent.appendChild(sec0);

        let pic0 = document.createElement("picture");
        sec0.appendChild(pic0);

        let img0 = document.createElement("img");
        img0.setAttribute("src", `${address}`);
        img0.classList.add("img");
        pic0.appendChild(img0);

        let cap0 = document.createElement("div");
        cap0.classList.add("caption");
        cap0.classList.add("hidden");
        sec0.appendChild(cap0);

        let sp0 = document.createElement("span");
        sp0.textContent = `${spanText}`;
        sp0.classList.add("span");
        cap0.appendChild(sp0);

        let a0 = document.createElement("a");
        a0.setAttribute("href", "");
        cap0.appendChild(a0);

        let h20 = document.createElement("h2");
        h20.textContent = `${h2Text}`;
        h20.classList.add("h2");
        a0.appendChild(h20);

        let p0 = document.createElement("p");
        p0.textContent = `${pText}`;
        p0.classList.add("p");
        a0.appendChild(p0);
      }, 100);
    }, 5000);
  }
  moveDot(1);
  setInterval(function () {
    activeDot++;
    if (activeDot == 5) {
      activeDot = 0;
    }
    moveDot(activeDot);
  }, 5000);
} else if (screenWidth >= 640) {
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

  document
    .querySelector(".close-search")
    .addEventListener("click", function () {
      document.querySelector(".searchBox-container").classList.add("hidden");
      btnSearch[0].classList.remove("hidden");
    });

  const fills = document.querySelectorAll(".fill");
  const parent = document.querySelector(".slider-section-container");
  const bgImg = document.querySelectorAll(".bgImg");
  const dots = document.querySelectorAll(".dot");

  let activeDot;
  for (let i = 0; i < 5; i++) {
    if (dots[i].classList.contains("active-dot")) {
      activeDot = i;
    }
  }

  function moveDot(activeDot) {
    dots[activeDot].classList.add("active-dot");
    dots[activeDot].style.width = "40%";
    fills[activeDot].style.backgroundColor = "white";
    bgImg[activeDot].style.opacity = "1";
    let widthfill = 0;
    let key = setInterval(function () {
      widthfill += 1;
      fills[activeDot].style.width = `${widthfill}%`;
      if (widthfill >= 100) {
        clearInterval(key);
      }
    }, 50);
    setTimeout(function () {
      const sections = document.querySelectorAll(".slider-section");
      const caption = document.querySelectorAll(".caption");
      const img = document.querySelectorAll(".img");
      const span = document.querySelectorAll(".span");
      const h2 = document.querySelectorAll(".h2");
      const p = document.querySelectorAll(".p");
      let address = img[0].getAttribute("src");
      let spanText = span[0].textContent;
      let h2Text = h2[0].textContent;
      let pText = p[0].textContent;
      fills[activeDot].style.backgroundColor = "transparent";
      dots[activeDot].classList.remove("active-dot");
      dots[activeDot].style.width = "5px";
      bgImg[activeDot].style.opacity = "0";
      setTimeout(() => {
        sections[1].style.marginLeft =
          "calc((-50%) + ((100% - 695px) / 2) + 30px)";
        caption[1].classList.add("hidden");
        caption[1].style.opacity = "0";
        caption[2].classList.remove("hidden");
        caption[2].style.opacity = "1";
        parent.removeChild(sections[0]);

        let sec0 = document.createElement("div");
        sec0.classList.add("slider-section");
        parent.appendChild(sec0);

        let pic0 = document.createElement("picture");
        sec0.appendChild(pic0);

        let img0 = document.createElement("img");
        img0.setAttribute("src", `${address}`);
        img0.classList.add("img");
        pic0.appendChild(img0);

        let cap0 = document.createElement("div");
        cap0.classList.add("caption");
        cap0.classList.add("hidden");
        sec0.appendChild(cap0);

        let sp0 = document.createElement("span");
        sp0.textContent = `${spanText}`;
        sp0.classList.add("span");
        cap0.appendChild(sp0);

        let a0 = document.createElement("a");
        a0.setAttribute("href", "");
        cap0.appendChild(a0);

        let h20 = document.createElement("h2");
        h20.textContent = `${h2Text}`;
        h20.classList.add("h2");
        a0.appendChild(h20);

        let p0 = document.createElement("p");
        p0.textContent = `${pText}`;
        p0.classList.add("p");
        a0.appendChild(p0);
      }, 100);
    }, 5000);
  }
  moveDot(activeDot);
  setInterval(function () {
    activeDot++;
    if (activeDot == 5) {
      activeDot = 0;
    }
    moveDot(activeDot);
  }, 5000);

  // const previous = document.querySelector(".previous-slide");

  // const next = document.querySelector(".next-slide");

  // function nextDot(activeDot) {
  //   dots[activeDot].classList.remove("active-dot");
  //   dots[activeDot + 1].classList.add("active-dot");
  //   dots[activeDot].style.width = "5px";
  //   dots[activeDot + 1].style.width = "40%";
  //   fills[activeDot].style.backgroundColor = "transparent";
  //   fills[activeDot + 1].style.backgroundColor = "white";
  //   bgImg[activeDot].style.opacity = "0";
  //   bgImg[activeDot + 1].style.opacity = "1";
  //   let widthfill = 0;
  //   let key = setInterval(function () {
  //     widthfill += 1;
  //     fills[activeDot + 1].style.width = `${widthfill}%`;
  //     if (widthfill >= 100) {
  //       clearInterval(key);
  //     }
  //   }, 50);
  // }

  // next.addEventListener("click", function () {
  //   nextDot(activeDot);
  //   const caption = document.querySelectorAll(".caption");
  //   const sections = document.querySelectorAll(".slider-section");
  //   const img = document.querySelectorAll(".img");
  //   const span = document.querySelectorAll(".span");
  //   const h2 = document.querySelectorAll(".h2");
  //   const p = document.querySelectorAll(".p");
  //   let address = img[0].getAttribute("src");
  //   let spanText = span[0].textContent;
  //   let h2Text = h2[0].textContent;
  //   let pText = p[0].textContent;
  //   setTimeout(() => {
  //     sections[1].style.marginLeft =
  //       "calc((-50%) + ((100% - 695px) / 2) + 30px)";
  //     caption[1].classList.add("hidden");
  //     caption[1].style.opacity = "0";
  //     caption[2].classList.remove("hidden");
  //     caption[2].style.opacity = "1";
  //     parent.removeChild(sections[0]);
  //     let sec0 = document.createElement("div");
  //     sec0.classList.add("slider-section");
  //     parent.appendChild(sec0);
  //     let pic0 = document.createElement("picture");
  //     sec0.appendChild(pic0);
  //     let img0 = document.createElement("img");
  //     img0.setAttribute("src", `${address}`);
  //     img0.classList.add("img");
  //     pic0.appendChild(img0);
  //     let cap0 = document.createElement("div");
  //     cap0.classList.add("caption");
  //     cap0.classList.add("hidden");
  //     sec0.appendChild(cap0);
  //     let sp0 = document.createElement("span");
  //     sp0.textContent = `${spanText}`;
  //     sp0.classList.add("span");
  //     cap0.appendChild(sp0);
  //     let a0 = document.createElement("a");
  //     a0.setAttribute("href", "");
  //     cap0.appendChild(a0);
  //     let h20 = document.createElement("h2");
  //     h20.textContent = `${h2Text}`;
  //     h20.classList.add("h2");
  //     a0.appendChild(h20);
  //     let p0 = document.createElement("p");
  //     p0.textContent = `${pText}`;
  //     p0.classList.add("p");
  //     a0.appendChild(p0);
  //   }, 380);

  //   console.log(activeDot);
  //   activeDot++;
    // if (activeDot == 5) {
    //   activeDot = 0;
    // }
    // moveDot(activeDot);
    // setInterval(function () {

    // }, 5000);
  // });

  // function moveDot(activeDot) {
  //   dots[activeDot].classList.add("active-dot");
  //   dots[activeDot].style.width = "40%";
  //   fills[activeDot].style.backgroundColor = "white";
  //   bgImg[activeDot].style.opacity = "1";
  //   let widthfill = 0;
  //   let key = setInterval(function () {
  //     widthfill += 1;
  //     fills[activeDot].style.width = `${widthfill}%`;
  //     if (widthfill >= 100) {
  //       clearInterval(key);
  //     }
  //   }, 50);
  //   setTimeout(function () {
  //     const caption = document.querySelectorAll(".caption");
  //     const img = document.querySelectorAll(".img");
  //     const span = document.querySelectorAll(".span");
  //     const h2 = document.querySelectorAll(".h2");
  //     const p = document.querySelectorAll(".p");
  //     let address = img[0].getAttribute("src");
  //     let spanText = span[0].textContent;
  //     let h2Text = h2[0].textContent;
  //     let pText = p[0].textContent;
  //     fills[activeDot].style.backgroundColor = "transparent";
  //     dots[activeDot].classList.remove("active-dot");
  //     dots[activeDot].style.width = "5px";
  //     bgImg[activeDot].style.opacity = "0";
  //   }, 5000);
  // }
  // moveDot(1);
  // setInterval(function () {
  //   activeDot++;
  //   if (activeDot == 5) {
  //     activeDot = 0;
  //   }
  //   moveDot(activeDot);
  // }, 5000);

  // previous.addEventListener("click", function () {
  //   let bg = document.querySelectorAll(".bg");
  //   let img = document.querySelectorAll(".img");
  //   address = bg[5].getAttribute("src");

  //   parent[0].removeChild(bg[5]);
  //   parent[1].removeChild(img[5]);
  //   let pic0 = document.createElement("img");
  //   pic0.setAttribute("src", `${address}`);
  //   pic0.style.marginLeft = "-100%";
  //   pic0.classList.add("bg");
  //   parent[0].prepend(pic0);
  //   let pic1 = document.createElement("img");
  //   pic1.setAttribute("src", `${address}`);
  //   pic1.style.marginLeft = "-100%";
  //   pic1.classList.add("img");
  //   parent[1].prepend(pic1);
  //   setTimeout(() => {
  //     pic0.style.marginLeft = "0";
  //     pic1.style.marginLeft = "0";
  //   }, 10);
  // });
}
