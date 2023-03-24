import React, { useState, useEffect } from "react";
import axios from "axios";
import Country from "./components/Country";
function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const apiKey = "d9ab647565365a43eb143cd6b2457daf";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${apiKey}`;

      try {
        const response = await axios.get(url);
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchWeatherData();
  }, []);

  //get countries data using useEffect and axios and store into countries state
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  //handle the filter input
  const handleFilter = (event) => {
    console.log(event.target.value);
    setFilter(event.target.value);
  };
  // filter the list of countries based on the search term
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  );

  // handle click on a country button
  const handleCountryButtonClick = async (country) => {
    setFilter(country.name.common);

    try {
      const apiKey = "d9ab647565365a43eb143cd6b2457daf";
      const city = country.capital[0];
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

      const response = await axios.get(url);
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="App">
      Find Countries: <input type="text" onChange={handleFilter} />
      {/* display the list of countries based on the search term */}
      {filteredCountries.length > 10 ? (
        <div>Too many matches</div>
      ) : filteredCountries.length === 1 ? (
        <Country country={filteredCountries[0]} weatherData={weatherData} />
      ) : (
        <ul>
          {filteredCountries.map((country) => (
            <li key={country.name.common}>
              {country.name.common}{" "}
              {filteredCountries.length < 10 && (
                <button onClick={() => handleCountryButtonClick(country)}>
                  show
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
