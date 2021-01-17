const allBtns = document.querySelectorAll(".btn");

allBtns.forEach((btn) => {
  btn.addEventListener("focus", function (e) {
    const listEl = e.target.closest(".nav-item").querySelector(".list");
    listEl.classList.remove("hidden");
  });
});

allBtns.forEach((btn) => {
  btn.addEventListener("blur", function (e) {
    const listEl = e.target.closest(".nav-item").querySelector(".list");
    listEl.classList.add("hidden");
  });
});
