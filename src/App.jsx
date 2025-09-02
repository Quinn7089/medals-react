import { useState } from "react";
import { useRef } from "react";
import Country from "./componets/Country.jsx";
import Medals from "./componets/Medals.jsx";
import './App.css';


function App() {
const [countries, setCountries] = useState([
  { id: 1, name: "United States", gold: 2, silver: 2, bronze: 3 },
  { id: 2, name: "China", gold: 3, silver: 1, bronze: 0 },
  { id: 3, name: "France", gold: 0, silver: 2, bronze: 2 },
]);

const medals = [
  { id: 1, name: "gold" },
  { id: 2, name: "silver" },
  { id: 3, name: "bronze" },
];

  function handleDelete(countryId) {
    console.log("delete word");
    setCountries(countries.filter((c) => c.id !== countryId));
  }

  function incrementMedal(countryId, medalName) { 
   const countriesMutable = [...countries ];
  // // use array.findIndex to return the index of the array element with matching id
  const idx = countriesMutable.findIndex((c) => c.id === countryId);
  console.log(idx);
  // // increase gold attribute using the returned index
  countriesMutable[idx][medalName] += 1;
  // console.log(countriesMutable);
    setCountries(countriesMutable);
  }

  function decrementMedal(countryId, medalName) {
    const countriesMutable = [...countries];
    const idx = countriesMutable.findIndex((c) => c.id === countryId);
    countriesMutable[idx][medalName] -= 1;
    if (countriesMutable[idx][medalName] < 0) {
      countriesMutable[idx][medalName] = 0;
    }
    setCountries(countriesMutable);
  }

  function getTotalMedalCount() {
    return countries.reduce((total, country) => {
      return total + country.gold + country.silver + country.bronze;
    }, 0);
  }

  return (
    <>
      <h1 className="olympic-header">Olympic Medals {getTotalMedalCount()}</h1>
      <div className="table-row">
        {countries.map((country) => (
         <Country
          key={country.id}
          country={country}
          medals={medals}
          onDelete={handleDelete}
          onIncrement={incrementMedal}
          onDecrement={decrementMedal}
        />
      ))}
      </div>
    </>
  );
}

export default App;