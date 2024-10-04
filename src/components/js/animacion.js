const cards = document.querySelectorAll(".card");

window.addEventListener("load", () => {
  cards.forEach((card) => {
    if (
      card?.classList.contains("opacity-0") &&
      card.classList.contains("scale-90")
    ) {
      setTimeout(() => {
        card.classList.add("opacity-100");
        card.classList.remove("scale-90");
        card.classList.add("scale-100");
      }, 200);
    }
  });
});
