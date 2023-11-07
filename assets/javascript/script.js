let menu = document.querySelector(".menu-opener");

menu.addEventListener("click", (e) => {
  e.preventDefault();
  let nav = document.querySelector("nav");
  if (nav.style.display === "" || nav.style.display === "none") {
    nav.style.display = "block";
  } else {
    nav.style.display = "";
  }
});
