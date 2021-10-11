const mediaQuery300 = window.matchMedia("(min-width: 300px)");

if (mediaQuery300.matches) {
  function openMenu() {
    document.getElementById("menu").style.width = "300px";
    document.getElementById("container").style.marginLeft = "300px";
  }
  function closeMenu() {
    document.getElementById("menu").style.width = "0px";
    document.getElementById("container").style.marginLeft = "0px";
  }
}

const mediaQuery675 = window.matchMedia("(min-width: 601px)");

if (mediaQuery675.matches) {
  function openMenu() {
    document.getElementById("menu").style.width = "601px";
    document.getElementById("container").style.marginLeft = "300px";
  }
  function closeMenu() {
    document.getElementById("menu").style.width = "0px";
    document.getElementById("container").style.marginLeft = "0px";
  }
}
