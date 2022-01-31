import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/navbar/Navbar';

import Home from './components/home/Home';
import About from './components/about/About';

import VehicleData from './_data/vehicleData';

import './styles.css';
import VehicleForm from './components/vehicles/VehicleForm';
import EditVehicle from './components/vehicles/EditVehicle';

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
      <Router>
        <NavBar />
        <section className='main'>
          <Routes>
            <Route
              path='/'
              element={
                <Home handleDelete={deleteVehicle} vehicleList={vehicleData} />
              }></Route>
            <Route
              path='/add'
              element={<VehicleForm handleAddVehicle={addVehicle} />}
            />
            <Route path='/edit/:id' element={<EditVehicle />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </section>
      </Router>
    </div>
  );
}

export default App;
