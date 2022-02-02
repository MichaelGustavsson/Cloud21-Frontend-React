import { Link } from 'react-router-dom';
import VehicleDetail from './VehicleDetail';

import './vehicleList.css';

function VehicleList({ vehicleList, handleDelete }) {
  return (
    <section className='scroll-container'>
      <div className='table-header'>
        <Link to={{ pathname: '/add' }} className='btn btn-outline-rounded'>
          Lägg till ny bil
        </Link>
      </div>
      <section className='table-container'>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Tillverkare</th>
              <th>Modell</th>
              <th className='right'>Årsmodell</th>
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
    </section>
  );
}

export default VehicleList;
