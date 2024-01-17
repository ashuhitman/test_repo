// select element
const btn = document.querySelector("#btn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector("#close");

btn.addEventListener("click", () => {
  console.log("clicked");
  modal.style.display = "block";
  modal.removeAttribute("close");
  modal.setAttribute("open", "");
});

closeBtn.addEventListener("click", () => {
  modal.removeAttribute("open");
  modal.setAttribute("close", "");
  modal.addEventListener(
    "animationend",
    () => {
      modal.style.display = "none";
    },
    { once: true }
  );
});
