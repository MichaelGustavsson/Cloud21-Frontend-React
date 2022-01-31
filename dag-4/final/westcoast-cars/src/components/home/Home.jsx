import VehicleList from '../vehicles/VehicleList';
import VehicleStatus from '../vehicles/VehicleStatus';

function Home(props) {
  return (
    <>
      <VehicleList
        handleDelete={props.handleDelete}
        vehicleList={props.vehicleList}
      />
      <VehicleStatus vehicleList={props.vehicleList} />
    </>
  );
}

export default Home;
