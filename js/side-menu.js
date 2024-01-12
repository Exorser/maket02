document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll(".side-menu__link");

  links.forEach(link => {
    link.addEventListener("click", function() {
      links.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const linkeds = document.querySelectorAll(".main__navigation-link");

  linkeds.forEach(linked => {
    linked.addEventListener("click", function() {
      linkeds.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    });
  });
});

