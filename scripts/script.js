"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var headings = document.querySelectorAll(".module-header");

  headings.forEach(function (heading) {
    heading.addEventListener("click", function () {
      var content = this.nextElementSibling;

      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
      this.querySelector(".expand-svg").classList.toggle("hidden");
      this.querySelector(".decrease-svg").classList.toggle("hidden");
    });
  });
  var headings = document.querySelectorAll(".explore");

  headings.forEach(function (heading) {
    heading.addEventListener("click", function () {
      var content = this.nextElementSibling;

      if (content.style.display === "block") {
        content.style.display = "none";
        // decreaseSVG.classList.add("hidden");
      } else {
        content.style.display = "block";
      }
      this.querySelector(".expand-svg").classList.toggle("hidden");
      this.querySelector(".decrease-svg").classList.toggle("hidden");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  if (window.matchMedia && window.matchMedia("(min-width: 376px)").matches) {
    var tabs = document.querySelectorAll(".click-li");
    var contents = document.querySelectorAll(".click");

    tabs.forEach(function (tab, index) {
      tab.addEventListener("click", function () {
        // Hide all tab contents
        contents.forEach(function (content) {
          content.style.display = "none";
        });
        tabs.forEach(function (t) {
          t.classList.remove("active_li");
        });

        contents[index].style.display = "block";
        tab.classList.add("active_li");
      });
    });
  }
});

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
