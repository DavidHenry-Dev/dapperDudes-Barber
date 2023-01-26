
const animations = () => {
    let menuButton = document.querySelector(".menu-button");
    let menu = document.querySelector(".menu");
    let menuOpen = false;
    
    menuButton.addEventListener("click", function() {
    if (!menuOpen) {
      menu.style.display = "flex";
      menu.classList.add("slide-in-right");
      menuButton.classList.add("open");
      menuOpen = true;
    } else {
      menu.style.display = "none";
      menu.classList.remove("slide-in-right");
      menuButton.classList.remove("open");
      menuOpen = false;
    }
  });
};

export default animations