const app = Vue.createApp({
  data() {
    return {
      city: "",
      weather: null,
      error: "",
      loading: false,
      theme: localStorage.getItem("theme") || "light",
      tempChart: null
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

      const API_KEY = "14966ee8d6d4ce3893791db842069be8";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${API_KEY}&units=metric`;

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

    renderChart() {
      const ctx = document.getElementById("tempChart");

      if (this.tempChart) {
        this.tempChart.destroy();
      }

      this.tempChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Temperature (°C)", "Humidity (%)", "Wind Speed (m/s)"],
          datasets: [{
            label: "Weather Data",
            data: [
              this.weather.main.temp,
              this.weather.main.humidity,
              this.weather.wind.speed
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false }
          }
        }
      });
    }
  }
});

app.mount("#app");
