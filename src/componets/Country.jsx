import { useState } from "react";

function Country(){
   const [name, setName] = useState("United States");
   const [gold, setGold] = useState(0);

    function incrementGold() {
        setGold(gold + 1);
    }

    return (
        <table className="MedalTable">
            <tr>
                <td className='TableHeader'>{name}</td>
            </tr>
            <tr>
                <td className='GoldMedal'>
                    Gold medals: {gold}
                    <button className='GoldMedalButton' onClick={incrementGold}>
                        +
                    </button>
                </td> 
            </tr>  
        </table>
    );
}

export default Country;