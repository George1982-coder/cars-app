import { fetchCustomers } from "./api.js";

document.addEventListener("DOMContentLoaded", async () => {
  const customersList = document.getElementById("customersList");
  const searchtInput = document.getElementById("searchCustomers");

  let allCustomers = [];

  if (!customersList || !searchtInput) {
    console.error("Missing Dom Elements");
    return;
  }

  customersList.innerHTML = `<div class"loading">Loading Customers....</div>`;
  allCustomers = await fetchCustomers();

  if (allCustomers) {
    renderCustomers(allCustomers, customersList);
  } else {
    customersList.innerHTML = `<div class"loading"> Error Loading Customers, please try again later</div>`;
  }

  searchtInput.addEventListener("input", (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredCustomers = allCustomers.filter((customer) =>
      customer.name.toLowerCase().includes(searchTerm)
    );
    renderCustomers(filteredCustomers, customersList);
  });
});

function renderCustomers(customers, customersList) {
  if (!customers || customers.length === 0) {
    customersList.innerHTML = `<p>No customers found.</p>`;
    return;
  }

  customersList.innerHTML = "";

  customers.forEach((customer) => {
    const customerCard = document.createElement("div");
    customerCard.classList.add("customers-card");

    customerCard.innerHTML = `
    
<div class="customer-profile">
  <img src="${customer.profile_image}" alt="${customer.name}">
  <div class="customer-info"> 
    <h3>${customer.name}</h3>
    <p>Email: <a href="mailto: ${customer.email}">${customer.email}</a></p>
    <p>Phone: <a href="tel:${customer.phone}">${customer.phone}</a></p>
    <p>Addres: ${customer.address}</p>
  </div>

</div>

    `;
    customersList.appendChild(customerCard);
  });
}
