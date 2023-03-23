import React from "react";

function Country({ country }) {
  const { name, capital, population, flags, languages } = country;
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
    </div>
  );
}

export default Country;
