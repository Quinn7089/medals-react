import Medals from "./Medals";

export default function Country(props, medal){
  
    console.log(props);
    console.log("Medals: ", medal);

    return (
        <table className="MedalTable" >
            <tr>
                <th className='TableHeader'>{props.country.name } 
                <button className="delete-button" onClick={() => props.onDelete(props.country.id)}>🗑️</button>
                </th>
            </tr>
            <tr>
                <td className='GoldMedal'>
                   <Medals    /> 
                </td> 
            </tr>  
        </table>

    );
}
