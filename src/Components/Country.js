import React from "react";

import styles from "./country.module.css";



const Country = (props) => {
  const { name, flags, capital, population, area } = props.country;

  const hadnleRemoveCountry = (name) => {
    props.onRemoveCountry(name);
  };

  return (
    <article className={styles.country}>
      <div>
        <img src={flags.png} alt={name.common} className={styles.flag} />
        <h3>Name: {name.common}</h3>
        <h3>Population: {population}</h3>
        <h3>Capital: {capital}</h3>
        <h3>Area: {area}</h3>
        <button
          className={styles.btn}
          onClick={() => {
            hadnleRemoveCountry(name.common);
          }}
        >
          Remove Country
        </button>
      </div>
    </article>
  );
};

export default Country;
