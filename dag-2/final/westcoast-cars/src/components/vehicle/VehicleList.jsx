import VehicleDisplay from './VehicleDisplay';
import Vehicles from '../../data/vehicleData';

import './vehicle.css';

const VehicleList = () => {
  return (
    <section className='vehicle-list'>
      <h1>Här är alla våra bilar i lager</h1>
      <h4>Alla bilar är kontrollerade och besiktigade</h4>
      <div>
        {Vehicles.map((vehicle) => (
          <VehicleDisplay key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </section>
  );
};

export default VehicleList;
