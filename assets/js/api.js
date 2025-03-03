// פונקציה שמביא את כל הרכבים

export async function fetchCars() {
  try {
    // משתמשים ב בשביל למשוך את הנתונים
    const response = await fetch("./data/data.json");
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function fetchCustomers() {
  try {
    // משתמשים ב בשביל למשוך את הנתונים
    const response = await fetch("./data/customers.json");
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
export async function fetchSales() {
  try {
    // משתמשים ב בשביל למשוך את הנתונים
    const response = await fetch("./data/sales.json");
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
