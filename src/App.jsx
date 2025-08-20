// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//      <table className="MedalTable">
//       <tr>
//         <td className='TableHeader'>United States</td>
//       </tr>
//       <tr>
//         <td className='GoldMedal'>
//           Gold medals: {count}
//         <button className='GoldMedalButton' onClick={() => setCount((count) => count + 1)}>
//           +
//         </button>
//        </td> 
//       </tr>  
    
//      </table>
//     </>
//   )
// }

// export default App

import Country from "./componets/Country.jsx";
import './App.css';


function App() {
  return (
    <>
      <div>
        <Country />
      </div>
    </>
  );
}

export default App;