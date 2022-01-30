import VehicleDetail from './VehicleDetail';

function VehicleList({ vehicleList, handleDelete }) {
  return (
    <section className='scroll-container'>
      <section className='table-container'>
        <table>
          <thead>
            <tr>
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
