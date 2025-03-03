import { getStoredCars, saveCars } from "./storage.js";

const carMakeInput = document.getElementById("carMake");
const carModelInput = document.getElementById("carModel");
const carYearInput = document.getElementById("carYear");
const carTypeInput = document.getElementById("carType");
const carTransmissionInput = document.getElementById("carTransmission");
const carFuelInput = document.getElementById("carFuel");
const carImageInput = document.getElementById("carImage");
const addCarbtn = document.querySelector(".addCarbtn");
const carlistElement = document.getElementById("carlist");

let cars = getStoredCars();

// convert to base64
function convertImageToBase64(file, callback) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => callback(reader.result);
}

export function renderNewCars(filteredCars = cars) {
  carlistElement.innerHTML = "";

  filteredCars.forEach((car, index) => {
    const carCard = document.createElement("div");
    carCard.classList.add("car-card");

    carCard.innerHTML = `
        
        <img src="${
          car.image || "default-avatar.png"
        }" alt="Car Image" class="car-image"/>
        <h3>${car.make} ${car.model}(${car.year})</h3>
        <p>Type: ${car.type}</p>
        <p>Transmission:${car.transmission}</p>
        <p>Fuel:${car.fuel}</p>
        <button>✏️ Edit Car</button>
        <button onclick="removeCar(${index})">❌Delete Car</button>
        
        `;

    carlistElement.appendChild(carCard);
  });
  saveCars(cars);
}

addCarbtn.addEventListener("click", () => {
  const newCars = {
    make: carMakeInput.value,
    model: carModelInput.value,
    year: carYearInput.value,
    type: carTypeInput.value,
    transmission: carTransmissionInput.value,
    fuel: carFuelInput.value,
    image: null,
  };

  if (!newCars.make || !newCars.model || !newCars.year) {
    alert("please fill in all required fields");
    return;
  }
  const file = carImageInput.files[0];
  if (file) {
    convertImageToBase64(file, (base64) => {
      newCars.image = base64;
      cars.push(newCars);
      renderNewCars();
    });
  } else {
    cars.push(newCars);
    renderNewCars();
  }
  carMakeInput.value = "";
  carModelInput.value = "";
  carYearInput.value = "";
  carTypeInput.value = "";
  carTransmissionInput.value = "";
  carFuelInput.value = "";
  carImageInput.value = "";
});
window.removeCar = (index) => {
  if (confirm("Are you sure you want to delete this car?")) {
    cars.splice(index, 1);
    renderNewCars();
  }
};

renderNewCars();
