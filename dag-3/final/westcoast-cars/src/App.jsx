import { useState } from 'react';
import NavBar from './components/navbar/Navbar';
import VehicleList from './components/VehicleList';
import VehicleStatus from './components/VehicleStatus';

import VehicleData from './_data/vehicleData';

import './styles.css';

function App() {
  const [vehicleData, setVehicleData] = useState(VehicleData);

  const deleteVehicle = (id) => {
    // console.log('App', id);
    setVehicleData(vehicleData.filter((vehicle) => vehicle.id !== id));
  };

  const addVehicle = (newVehicle) => {
    newVehicle.id = 5;
    setVehicleData([newVehicle, ...vehicleData]);
    console.log('App', newVehicle);
  };

  return (
    <>
      <NavBar />
      <section className='main'>
        <VehicleList
          handleAddVehicle={addVehicle}
          handleDelete={deleteVehicle}
          vehicleList={vehicleData}
        />
        <VehicleStatus vehicleList={vehicleData} />
      </section>
    </>
  );
}

export default App;
