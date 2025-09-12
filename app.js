const dropdown = document.querySelector(".dropdown");
const dropBtn = document.querySelector(".dropbtn");
const options = document.querySelectorAll(".dropdown-content button");

// Toggle dropdown open/close
dropBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdown.classList.toggle("open");
});

// Handle clicks on options
options.forEach(option => {
  option.addEventListener("click", (e) => {
    e.stopPropagation();

    const group = option.dataset.group;

    // Clear active only inside same group
    document.querySelectorAll(`.dropdown-content button[data-group="${group}"]`)
      .forEach(o => o.classList.remove("active"));

    // Activate clicked one
    option.classList.add("active");

    console.log(`Group: ${group}, Value: ${option.dataset.value}`);
  });
});

// Close dropdown only if clicking outside
document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove("open");
  }
});

const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search-btn button");

function handleSearch() {
  const cityName = searchInput.value.trim();

  if (cityName) {
    console.log("Searching for:", cityName);
    // 🔹 Later you will replace this with your API call
    // fetchWeather(cityName);
  } else {
    console.log("Please enter a city name");
  }
}

// Trigger search when button clicked
searchBtn.addEventListener("click", handleSearch);

// Trigger search when Enter pressed inside input
searchInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    handleSearch();
  }
});

// Trigger search when Enter pressed inside input
searchInput.addEventListener("search", handleSearch);