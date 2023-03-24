import React from "react";

function Country({ country, weatherData }) {
  const { name, capital, population, flags, languages } = country;
  const weather = weatherData && weatherData.main;
  const temperature = weather && weather.temp;
  const wind = weatherData && weatherData.wind;
  const iconCode = weatherData && weatherData.weather[0].icon;
  const iconUrl = iconCode && `http://openweathermap.org/img/w/${iconCode}.png`;

  return (
    <div>
      <h2>{name.common}</h2>
      <p>Capital: {capital[0]}</p>
      <p>Population: {population}</p>
      <h3>Languages:</h3>
      <ul>
        {Object.values(languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img
        style={{ width: "100px", height: "auto" }}
        src={flags.svg}
        alt={`${name.common} flag`}
      />
      <h2>Weather in {capital[0]}</h2>
      {weatherData && (
        <div>
          <img src={iconUrl} alt="weather icon" />
          <p>Temperature: {temperature} &deg;C</p>
          <p>
            Wind: {wind.speed} m/s, {wind.deg} &deg;
          </p>
        </div>
      )}
    </div>
  );
}

export default Country;
