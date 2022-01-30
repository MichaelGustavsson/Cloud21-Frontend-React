function VehicleDetail({ vehicle, deleteVehicle }) {
  return (
    <tr>
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
