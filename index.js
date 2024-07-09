document.addEventListener("DOMContentLoaded", () => {
  const apiUrl =
    "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries";

  // Function to fetch and display countries
  const fetchCountries = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const countries = await response.json();
      displayCountries(countries);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  // Function to display countries
  const displayCountries = (countries) => {
    const container = document.getElementById("country-container");
    container.innerHTML = ""; // Clear previous content

    countries.forEach((country) => {
      const card = document.createElement("div");
      card.classList.add("country-card");
      card.innerHTML = `
                <h2>${country.name}</h2>
                <p>Population: ${country.population}</p>
                <p>Capital: ${country.capital}</p>
                <p>Region: ${country.region}</p>
                <!-- Add more details as needed -->
            `;
      container.appendChild(card);
    });
  };

  fetchCountries();
});
