const header = document.querySelector("header");
const sec1 = document.querySelector(".sec1");

const sectionOneOptions = {
  rootMargin: "0px 0px 0px 0px",
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
        console.log("entro");
      header.classList.add("nav-scrolled");
    } else {
        console.log("entro");
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(header);
