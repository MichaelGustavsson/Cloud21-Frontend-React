function VehicleDetail({ vehicle, deleteVehicle }) {
  //console.log(props);
  return (
    <tr>
      <td>{vehicle.make}</td>
      <td>{vehicle.model}</td>
      <td>{vehicle.modelYear}</td>
      <td>
        <button onClick={() => deleteVehicle(vehicle.id)}>Ta bort</button>
      </td>
    </tr>
  );
}

export default VehicleDetail;
