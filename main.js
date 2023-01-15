const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll("nav ul li");

document.addEventListener("mousemove", (e) => {
  const posX = e.clientX;
  const posY = e.clientY;

  cursor.style.left = `${posX}px`;
  cursor.style.top = `${posY}px`;
});

links.forEach((link) => {
  link.addEventListener("mouseenter", (e) => {
    cursor.classList.add("cursor-grow");
    link.classList.add("link-hovered");
  });
});

links.forEach((link) => {
  link.addEventListener("mouseleave", (e) => {
    cursor.classList.remove("cursor-grow");
    link.classList.remove("link-hovered");
  });
});
