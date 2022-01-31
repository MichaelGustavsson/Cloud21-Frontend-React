import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import NavBar from './components/navbar/Navbar';
import VehicleList from './components/vehicles/VehicleList';
import VehicleStatus from './components/vehicles/VehicleStatus';
import VehicleForm from './components/vehicles/VehicleForm';

import VehicleData from './_data/vehicleData';

import './styles.css';

function App() {
  const [vehicleData, setVehicleData] = useState(VehicleData);

  const deleteVehicle = (id) => {
    setVehicleData(vehicleData.filter((vehicle) => vehicle.id !== id));
  };

  const addVehicle = (newVehicle) => {
    newVehicle.id = uuidv4();
    setVehicleData([newVehicle, ...vehicleData]);
  };

  return (
    <div>
      <NavBar />
      <section className='main'>
        <VehicleForm handleAddVehicle={addVehicle} />
        <VehicleList handleDelete={deleteVehicle} vehicleList={vehicleData} />
        <VehicleStatus vehicleList={vehicleData} />
      </section>
    </div>
  );
}

export default App;
