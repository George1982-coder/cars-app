import { fetchSales } from "./api.js";

document.addEventListener("DOMContentLoaded", async () => {
  const salesList = document.getElementById("salesList");
  const searchInputSales = document.getElementById("searchinput");

  let allSales = [];

  if (!salesList || !searchInputSales) {
    console.error("Missing Dom Sales");
    return;
  }
  salesList.innerHTML = `<div class"Loading">Loading Sales .....</div>`;
  allSales = await fetchSales();

  if (allSales) {
    renderSales(allSales, salesList);
  } else {
    salesList.innerHTML = `<div class"loading">Error loading Sales,please try again later</div>`;
  }
});

function renderSales(sales, salesList) {
  if (!sales || sales.length === 0) {
    salesList.innerHTML = `<p>No Sales found.</p>`;
    return;
  }
  salesList.innerHTML = "";

  sales.forEach((sale) => {
    const saleCard = document.createElement("div");
    saleCard.classList.add("sales-card", "sold");

    saleCard.innerHTML = `
    <img src="${sale.car.image}" alt="${sale.car.make} ${sale.car.model}" />
    <h3>${sale.car.make} ${sale.car.model}</h3>
    <p><strong>Customer:</strong> ${sale.customer.name}</p>
    <p><strong>Price:</strong> $${sale.price.toLocaleString()}</p>
    <p><strong>Date:</strong> ${sale.date}</p>
    <span class="sold-label">SOLD</span>
  `;
    salesList.appendChild(saleCard);
  });
}
