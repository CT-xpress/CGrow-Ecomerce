let menu = document.queryselector("#menu-icon");
let navlist = document.queryselector(".navlist");

menuonclick = () => {
  menu.classlist.toggle("bx-x");
  navlist.classlist.toggle("open");
};

const sr = scrollreveal({
  distance: "65px",
  duration: 2600,
  delay: 450,
  reset: true,
});

sr.reveal(".famer-text", { delay: 200, origin: "top" });
sr.reveal(".famer-img", { delay: 450, origin: "top" });
sr.reveal(".icons-redes", { delay: 500, origin: "Left" });
sr.reveal(".scroll-down", { delay: 500, origin: "right" });