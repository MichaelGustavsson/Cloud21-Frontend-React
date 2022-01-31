// function VehicleDetail(props) {
function VehicleDetail({ vehicle, deleteVehicle }) {
  return (
    <tr>
      <td></td>
      {/* <td>{props.vehicle.make}</td>
      <td>{props.vehicle.model}</td>
      <td className='right'>{props.vehicle.modelYear}</td>
      <td className='right'>
        <button onClick={() => props.deleteVehicle(props.vehicle.id)}>
          Ta bort
        </button>
      </td> */}
      <td>{vehicle.make}</td>
      <td>{vehicle.model}</td>
      <td className='right'>{vehicle.modelYear}</td>
      <td className='right'>
        <button onClick={() => deleteVehicle(vehicle.id)}>Ta bort</button>
      </td>
    </tr>
  );
}

export default VehicleDetail;
