// let video = document.querySelector(".video");
// let image = document.querySelector(".image");

// image.addEventListener("mouseenter", function () {
//   video.play();
// });

// video.addEventListener("mouseleave", function () {
//   video.pause();
//   video.currentTime = 0; 
// });

function menuu() {
  const menu = document.querySelector(".menu");
  const overlay = document.getElementById("overlay");


  if (!menu) {
    const menuHTML = `
      <div class="menu">
        <div class="menu_1">
          <h1>One Piece</h1>
        </div>
        <div class="menu_2">
          <h2>Home</h2>
          <h2>Work</h2>
          <h2>Biography</h2>
          <h2>Awards</h2>
          <h2>FAQ</h2>
        </div>
      </div>`;
    document.body.insertAdjacentHTML("beforeend", menuHTML);
  }

  const newMenu = document.querySelector(".menu");

  const isVisible = newMenu.classList.contains("show");


  overlay.style.display = isVisible ? "none" : "block";

  if (isVisible) {
    newMenu.classList.remove("show"); 
  } else {
    newMenu.style.display = "flex";
    setTimeout(() => newMenu.classList.add("show"), 10); 
  }
}

document.addEventListener("click", (e) => {
  const menu = document.querySelector(".menu");
  const overlay = document.getElementById("overlay");
  const menuButton = document.getElementById("menu");

  if (
    menu &&
    overlay &&
    menu.classList.contains("show") &&
    !menu.contains(e.target) &&
    e.target !== menuButton
  ) {
    menu.classList.remove("show");
    setTimeout(() => (menu.style.display = "none"), 500);
    overlay.style.display = "none";
  }
});





document.querySelectorAll('.media-card').forEach(card => {
  const video = card.querySelector('video');
  card.addEventListener('mouseover', () => video.play());
  card.addEventListener('mouseout', () => video.pause());
});  