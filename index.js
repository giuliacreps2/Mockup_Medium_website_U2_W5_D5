/*document.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const button = document.querySelector(".start");

  const hero = document.querySelector("hero");
  let fineHero = hero.offsetTop + hero.offsetHeight;

  if (window.scrollY > scroll) {
    header.style.backgroundColor = "#ffffff";
    header.style.position = "fixed";
    header.style.transition = "all 0.4s ease";
    button.style.backgroundColor = "#1a8917";
  } else {
    header.style.backgroundColor = "#ffc017";
    button.style.backgroundColor = "#000";
    header.style.position = "absolute";
    header.style.transition = "none";
  }
});*/

/*const hero = document.querySelector("hero");
let fineHero = hero.offsetTop + hero.offsetHeight;

console.log("offsetTop:", hero.offsetTop);
console.log("offsetHeight:", hero.offsetHeight);
console.log("Fine hero calcolata:", fineHero);*/

document.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const button = document.querySelector(".start");
  const hero = document.querySelector("hero");

  let fineHero = hero.offsetTop + hero.offsetHeight - 76;

  console.log("Scroll attuale:", window.scrollY);

  if (window.scrollY > fineHero) {
    /*header.style.position = "fixed";
    header.style.top = "0";
    header.style.left = "0";
    header.style.right = "0";
    header.style.zIndex = "999";*/
    header.style.backgroundColor = "#ffffff";
    //header.style.transition = "background-color 0.4s ease";
    button.style.backgroundColor = "#1a8917";
    button.style.transition = "background-color 0.4s ease";
  } else {
    header.style.backgroundColor = "#ffc017";
    button.style.backgroundColor = "#000";
  }
});
