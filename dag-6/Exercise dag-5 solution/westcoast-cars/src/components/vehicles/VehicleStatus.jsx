import './vehicleStatus.css';

// function VehicleStatus({ vehicleList }) {
function VehicleStatus(props) {
  return (
    <div className='table-footer'>
      {/* <h4>Antal bilar i lager {vehicleList.length}</h4> */}
      <h4>Antal bilar i lager {props.vehiclesInStock}</h4>
    </div>
  );
}

export default VehicleStatus;
