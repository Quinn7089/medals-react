import { useState } from "react";
import Country from "./componets/Country.jsx";
import './App.css';


function App() {
const  [countries, setCountries] = useState([
  { id: 1, name: 'United States', gold: 2 },
  { id: 2, name: 'China', gold: 3 },
  { id: 3, name: 'France', gold: 0 },
]);

  function handleDelete(countryId) {
    console.log("delete word");
    setCountries(countries.filter((c) => c.id !== countryId));
  }

  return (
    <>
      <div className="table-row">
        {countries.map((country) => (
         <Country
          key={country.id}
          country={country}
          onDelete={handleDelete}
        />
      ))}
      </div>
    </>
  );
}

export default App;