const app = Vue.createApp({
  data() {
    return {
      city: "",
      compareCities: "",
      weather: null,
      error: "",
      loading: false,
      theme: localStorage.getItem("theme") || "light",
      tempChart: null,
      selectedChart: "bar",
      API_KEY: "14966ee8d6d4ce3893791db842069be8"

    };
  },

  mounted() {
    const lastCity = localStorage.getItem("lastCity");
    if (lastCity) {
      this.city = lastCity;
      this.getWeather();
    }
  },

  methods: {
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", this.theme);
      document.body.className = this.theme;
    },

    async getWeather() {
      if (!this.city.trim()) {
        this.error = "Please enter a city name!";
        return;
      }

      this.loading = true;
      this.error = "";
      this.weather = null;

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.API_KEY}&units=metric`;

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");

        this.weather = await response.json();
        localStorage.setItem("lastCity", this.city);

        setTimeout(() => this.renderChart(), 200);

      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },

    async compareWeather() {
      let cities = this.compareCities.split(",").map(c => c.trim());
      if (cities.length < 2) {
        this.error = "Enter at least 2 cities";
        return;
      }

      this.loading = true;
      this.error = "";

      let weatherData = [];

      for (let c of cities) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${c}&appid=${this.API_KEY}&units=metric`;

        try {
          const res = await fetch(url);
          if (!res.ok) continue;
          const data = await res.json();

          weatherData.push({
            city: data.name,
            temp: data.main.temp,
            humidity: data.main.humidity,
            wind: data.wind.speed
          });
        } catch {}
      }

      this.weather = null;

      setTimeout(() => this.renderComparisonChart(weatherData), 200);

      this.loading = false;
    },

    renderChart() {
      const ctx = document.getElementById("weatherChart");

      if (this.tempChart) this.tempChart.destroy();

      const data = [
        this.weather.main.temp,
        this.weather.main.humidity,
        this.weather.wind.speed
      ];

      const labels = ["Temp (°C)", "Humidity (%)", "Wind (m/s)"];

      this.tempChart = new Chart(ctx, {
        type: this.selectedChart,
        data: {
          labels: labels,
          datasets: [{
            label: this.city,
            data: data,
            borderWidth: 1
          }]
        },
        options: { responsive: true }
      });
    },

    renderComparisonChart(weatherData) {
      const ctx = document.getElementById("weatherChart");

      if (this.tempChart) this.tempChart.destroy();

      this.tempChart = new Chart(ctx, {
        type: this.selectedChart,
        data: {
          labels: weatherData.map(w => w.city),
          datasets: [
            {
              label: "Temperature (°C)",
              data: weatherData.map(w => w.temp)
            },
            {
              label: "Humidity (%)",
              data: weatherData.map(w => w.humidity)
            },
            {
              label: "Wind (m/s)",
              data: weatherData.map(w => w.wind)
            }
          ]
        },
        options: { responsive: true }
      });
    }
  }
});

app.mount("#app");
