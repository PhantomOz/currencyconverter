import React from "react";
import { Currencies } from "../utils";

function SelectCurrency({ format, currency, setCurrency }) {
  const currency_data = Object.entries(Currencies);

  return (
    <div className="card-item">
      <p>{format}:</p>
      <select
        className="currency"
        name="currency"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      >
        {currency_data.map(([keys, value], index) => (
          <option value={keys} key={index}>
            {value}({keys})
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectCurrency;
