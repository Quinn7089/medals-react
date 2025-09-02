import Medals from "./Medals";

export default function Country(props){
  
    console.log(props);
   
    function getTotalMedalCount(){
            return props.country.gold + props.country.silver + props.country.bronze;
    }

    console.log(getTotalMedalCount(), "this is total medals");

    return (
        <table className="MedalTable" >
            <tr>
                <th className='TableHeader'>{props.country.name } 
                 &nbsp; {getTotalMedalCount()}  
                <button className="delete-button" onClick={() => props.onDelete(props.country.id)}>🗑️</button>
                </th>
            </tr>
            <tr>
                <td className='GoldMedal'>
                   {props.medals.map((medal) => (
                       <Medals key={medal.id} 
                       medal={medal} 
                       country={props.country} 
                       onIncrement={props.onIncrement}
                       onDecrement={props.onDecrement}
                       />
                   ))}
                </td> 
            </tr>  
        </table>

    );
}
