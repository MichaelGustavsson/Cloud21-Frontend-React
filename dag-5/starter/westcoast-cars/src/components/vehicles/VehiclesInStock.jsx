import VehicleList from '../vehicles/VehicleList';
import VehicleStatus from '../vehicles/VehicleStatus';

function VehiclesInStock(props) {
  return (
    <>
      <VehicleList
        handleDelete={props.handleDelete}
        vehicleList={props.vehicleList}
      />
      <VehicleStatus vehiclesInStock={props.vehicleList.length} />
    </>
  );
}

export default VehiclesInStock;
