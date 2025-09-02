import Country from "./Country";


function Medals(props) {
    return (
    <div className="medal-container">
       <span className="medal-name"> {props.medal.name} medals </span>  
          <span className="medal-controls">
            <button className="medal-remove" onClick={() => props.onDecrement(props.country.id, props.medal.name)}>-</button>
          <div className="medal-count"> {props.country[props.medal.name]} </div>
          <button className="medal-add" onClick={() => props.onIncrement(props.country.id, props.medal.name)}>+</button>
        </span>
    </div>  
     


    );
}

export default Medals;