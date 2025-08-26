import { useRef } from "react";

function Medals(props) {
 const medals = useRef([
  { id: 1, name: "gold" },
  { id: 2, name: "silver" },
  { id: 3, name: "bronze" },
]);

    return (
    <div>
        {medals.current.map((medal) => (
            <div key={medal.id}>
                {medal.name} <span>medals</span>
            </div>
        ))}
    </div>  
     


    );
}
export default Medals;