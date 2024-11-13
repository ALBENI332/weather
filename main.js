fetch('./city.json')
    .then(response => response.json())
    .then(cityData => {
        console.log(cityData);
        fetch(
            `http://api.openweathermap.org/data/2.5/forecast?id=1528334&appid=06906429d51debf9088206d6fcb48afd`
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (weatherData) {
                console.log(weatherData);
                const myHmtlCity = document.querySelector(".city");
                const myHtmlCountry = document.querySelector(".country");
                const myHtmlTemperature = document.querySelector(".temperature");
                const myHtmlConditions = document.querySelector(".conditions");
                const box = document.querySelector(".box");


                myHmtlCity.innerHTML = weatherData.city.name;
                myHtmlCountry.innerHTML = weatherData.city.country;

                const far = Math.ceil(weatherData.list[0].main.temp - 273);
                myHtmlTemperature.innerHTML = `${far}°C`;
                myHtmlConditions.innerHTML = weatherData.list[0].weather[0].main;
                box.innerHTML = `
                <img src="https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@2x.png">`;
            })
            .catch(function () {
                console.log("Error");
            });
    })
    .catch(function () {
        console.log("Error");
    });
