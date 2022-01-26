import { useState } from 'react';

import VehicleDetail from './VehicleDetail';

function VehicleList({ vehicleList, handleDelete, handleAddVehicle }) {
  const [make, setMake] = useState('');

  const handleMakeTextChanged = (e) => {
    setMake(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newVehicle = {
      make: make,
    };
    handleAddVehicle(newVehicle);
    setMake('');
  };

  return (
    <section>
      <div>
        <h1>Lägg till ny bil</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleMakeTextChanged}
            type='text'
            placeholder='Ange bil tillverkare'
            value={make}
          />
          <br />
          <button type='submit'>Spara</button>
        </form>
        <br />
        <hr />
        <br />
      </div>
      <table>
        <thead>
          <tr>
            <th>Tillverkare</th>
            <th>Modell</th>
            <th>Årsmodell</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {vehicleList.map((vehicle) => (
            <VehicleDetail
              key={vehicle.id}
              vehicle={vehicle}
              deleteVehicle={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default VehicleList;
