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
import VehiclesInStock from './components/vehicles/VehiclesInStock';

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
        <section>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route
              path='/vehicles'
              element={
                <section className='main'>
                  <VehiclesInStock
                    handleDelete={deleteVehicle}
                    vehicleList={vehicleData}
                  />
                </section>
              }></Route>
            <Route
              path='/add'
              element={
                <section className='main'>
                  <VehicleForm handleAddVehicle={addVehicle} />
                </section>
              }></Route>
            <Route
              path='/edit/:id'
              element={
                <section className='main'>
                  <EditVehicle />
                </section>
              }></Route>
            <Route
              path='/about'
              element={
                <section className='main'>
                  <About />
                </section>
              }
            />
          </Routes>
        </section>
      </Router>
    </div>
  );
}

export default App;
