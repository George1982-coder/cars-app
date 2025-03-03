export function getStoredCars() {
  return JSON.parse(localStorage.getItem("cars")) || [];
}

export function saveCars(cars) {
  localStorage.setItem("cars", JSON.stringify(cars));
}
