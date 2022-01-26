import { useState } from 'react';
import NavBar from './components/navbar/Navbar';
import VehicleList from './components/VehicleList';

import VehicleData from './_data/vehicleData';

import './styles.css';

function App() {
  const [vehicleData, setVehicleData] = useState(VehicleData);

  const deleteVehicle = (id) => {
    // console.log('App', id);
    setVehicleData(vehicleData.filter((vehicle) => vehicle.id !== id));
  };

  return (
    <>
      <NavBar />
      <section className='main'>
        <VehicleList handleDelete={deleteVehicle} vehicleList={vehicleData} />
      </section>
    </>
  );
}

export default App;
