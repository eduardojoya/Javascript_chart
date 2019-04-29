console.log("Currency Exchange");

let state = {
  data: ""
};

function Fetch() {
  fetch("https://api.exchangeratesapi.io/latest")
    .then(response => response.json())
    .then(data => {
      console.log(data);

      for (let currency of Object.keys(data.rates)) {
        if (currency === "NZD") {
          console.log("NZD rate :", data.rates["NZD"]);
          let chart = document.querySelector(".BarChart");
          let height = 100 / data.rates[currency];
          let bar = document.createElement("div");
          bar.classList.add("BarChart-bar");
          bar.onclick = function () {
            alert("1 EUR = 1.673 NZD");
          };
          bar.style.height = height + "%";
          bar.textContent = currency;
          chart.appendChild(bar);
        } else if (currency === "MXN") {
          console.log("MXN rate :", data.rates["MXN"]);
          let chart = document.querySelector(".BarChart");
          let height = 100 / data.rates[currency];
          let bar = document.createElement("div");
          bar.classList.add("BarChart-bar");
          bar.onclick = function () {
            alert("1 EUR = 21.1267 MXN");
          }
          bar.style.height = height + "%";
          bar.textContent = currency;
          chart.appendChild(bar);
        } else if (currency === "CNY") {
          console.log("CNY rate :", data.rates["CNY"]);
          let chart = document.querySelector(".BarChart");
          let height = 100 / data.rates[currency];
          let bar = document.createElement("div");
          bar.classList.add("BarChart-bar");
          bar.onclick = function () {
            alert("1 EUR = 7.5607 CNY");
          }
          bar.style.height = height + "%";
          bar.textContent = currency;
          chart.appendChild(bar);
        } else if (currency === "JPY") {
          console.log("JPY rate :", data.rates["JPY"]);
          let chart = document.querySelector(".BarChart");
          let height = 100 / data.rates[currency];
          let bar = document.createElement("div");
          bar.classList.add("BarChart-bar");
          bar.onclick = function () {
            alert("1 EUR = 124.64 JPY");
          }
          bar.style.height = height + "%";
          bar.textContent = currency;
          chart.appendChild(bar);
        }

        state.data = data;
      }
    });
}