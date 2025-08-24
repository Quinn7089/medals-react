

export default function Country(props){
  
    console.log(props);


    return (
        <table className="MedalTable" >
            <tr>
                <th className='TableHeader'>{props.country.name } 
                <button className="delete-button" onClick={() => props.onDelete(props.country.id)}>🗑️</button>
                </th>
            </tr>
            <tr>
                <td className='GoldMedal'>
                    Gold medals: {props.country.gold}
                </td> 
            </tr>  
        </table>

    );
}
