import { openOverley } from "./overley.js";

export function renderUI(cars, carListElement) {
  if (!cars || !cars.length === 0) {
    carListElement.innerHTML = "<p>No cars available yet</p>";
    return;
  }
  // p פשוט מנקים את ה
  carListElement.innerHTML = "";

  cars.forEach((car) => {
    const carCard = document.createElement("div");
    carCard.classList.add("car-card");

    carCard.innerHTML = `
      <div class="car-details">
      <img class="car-image" src="${car.image}" alt="${car.make}">
      <div class="car-title">${car.make} ${car.model}</div>
     </div>
    `;
    carCard.addEventListener("click", () => openOverley(car));
    carListElement.appendChild(carCard);
    carCard.classList.add("show");
  });
}
