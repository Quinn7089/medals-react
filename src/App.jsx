import { useState } from "react";
import Country from "./componets/Country.jsx";
import './App.css';


function App() {
const  [countries, setCountries] = useState([
  { id: 1, name: 'United States' },
  { id: 2, name: 'China'},
  { id: 3, name: 'France'},

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