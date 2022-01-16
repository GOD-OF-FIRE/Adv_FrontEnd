let weather = {
  apiKey: "a8d88462c1d2eb36556b8329e72bb978",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { temp } = data.main;

    document.querySelector(".city").innerText = "Weather in " + name;

    document.querySelector(".temp").innerText = temp + "°C";

    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage = url(
      "https://source.unsplash.com/1600x900/?" + name
    );
  },

  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};
document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });
weather.fetchWeather("Allahabad");
