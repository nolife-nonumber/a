document.addEventListener("DOMContentLoaded", () => {
  console.log("Page loaded");

  const heading = document.querySelector("h1");

  if (heading) {
    heading.addEventListener("click", () => {
      heading.textContent = "Привет!";
    });
  }
});

