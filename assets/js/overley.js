export function openOverley(car) {
  const overley = document.createElement("div");
  overley.classList.add("car-overley");

  overley.innerHTML = `
     
       <div class="overley-content">
      <button class="close-btn">&times;</button>
      <img class="overley-image" src="${car.image}" alt="${car.make}" />
      <h2>${car.make} ${car.model}</h2>
      <p><strong>Year:</strong>${car.firsthand}</p>
      <p><strong>Year:</strong>${car.year}</p>
      <p><strong>Type:</strong>${car.type}</p>
      <p><strong>Transmission:</strong>${car.transmission}</p>
      <p><strong>Fuel:</strong>${car.fuel_type}</p>
    </div>
    
    `;

  document.body.appendChild(overley);

  setTimeout(() => {
    overley.classList.add("visible");
  }, 50);

  overley.querySelector(".close-btn").addEventListener("click", () => {
    overley.classList.remove("visible");
    setTimeout(() => overley.remove(), 300);
  });
}
