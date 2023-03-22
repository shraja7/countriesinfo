import React, { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [countries, setCountries] = useState([]);

  //get countries data using useEffect and axios and store into countries state
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  return (
    <div className="App">
      Find Countries: <input type="text" />
      {/* display the list of countries in the countries state */}
      <ul>
        {countries.map((country) => (
          <li key={country.name.common}>{country.name.common}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
