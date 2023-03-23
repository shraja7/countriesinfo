import React from "react";

function Country({ country }) {
  const { name, capital, population, flags } = country;
  return (
    <div>
      <h2>{name.common}</h2>
      <p>Capital: {capital[0]}</p>
      <p>Population: {population}</p>
      <img
        style={{ width: "100px", height: "auto" }}
        src={flags.svg}
        alt={`${name.common} flag`}
      />
    </div>
  );
}

export default Country;
