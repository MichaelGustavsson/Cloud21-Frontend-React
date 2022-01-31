import './vehicleStatus.css';

function VehicleStatus({ vehicleList }) {
  return (
    <div className='table-footer'>
      <h4>Antal bilar i lager {vehicleList.length}</h4>
    </div>
  );
}

export default VehicleStatus;
