/* Vi ska nu skapa ROOT komponenten i vår hierarki */
// Steg 1. Importera React...
import React from 'react';
import { useState } from 'react';
import NavBar from './components/navbar/Navbar';
import VehicleList from './components/vehicle/VehicleList';

import Vehicles from './data/vehicleData';

import './styles.css';

// Steg 2. Skapa React komponenten...
/* 
  Det finns två sätt att skapa komponenter på i React:
  1. Class komponent - Detta är det gamla sättet...
  2. Funktions komponent - Är det nya sättet och mest populära just nu...
*/

const App = () => {
  // Hantera tillståndet för våra bilar...
  const [vehicles, setVehicles] = useState(Vehicles);
  // Vi måste returnera vårt html för komponenten...
  // Är INTE HTML, utan detta är JSX!!!
  return (
    <section>
      <NavBar />
      <div className='main'>
        <VehicleList vehicles={vehicles} />
      </div>
    </section>
  );
};

// Steg 3. Exportera min komponent App...
export default App;
