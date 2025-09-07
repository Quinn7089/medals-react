import { useState } from "react";
import trigger from '../assets/trigger.svg';

function NewCountry(props) {
  const [countryName, setCountryName] = useState("");
  const [countries, setCountries] = useState([]);
  const [showForm, setShowForm] = useState(false);
  


  function handleSubmit(e) {
    e.preventDefault();
    props.onAdd(countryName, countries);
    hideForm();
  }

  
  
  function hideForm() {
    setCountryName("");
    setShowForm(false);
  }

     function handleKeyUp(e) {
    e.keyCode === 27 && hideForm();
  }

  return (
     <>
     {showForm ? (
       <form className="addForm" onSubmit={(e) => handleSubmit(e)} onKeyUp={(e) => handleKeyUp(e)}>
            <div id="overlay" onClick={hideForm}></div>
            <header className='addTableHeader'>Enter new country name</header>
            <div>
              <input
                className="country-input"
                type="text"
                value={countryName}
                onChange={(e) => setCountryName(e.target.value)}
                placeholder="Japan"
              />
            </div>
            <div>
              <button   disabled={countryName.trim().length === 0} className="save-button" type="submit">Save</button>
              <button className="cancel-button" type="button" onClick={hideForm}>Cancel</button>
            </div>
       </form>
     ) : (
       <img src={trigger} alt="New Word" id="trigger" onClick={() => setShowForm(true)} />
     )}
     </>

    )
}

export default NewCountry;