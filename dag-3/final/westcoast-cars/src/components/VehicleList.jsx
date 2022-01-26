function VehicleList({ vehicleList, handleDelete }) {
  // const handleDelete = (id) => {
  //   console.log(id);
  // };

  return (
    <table>
      <thead>
        <tr>
          <th>Tillverkare</th>
          <th>Modell</th>
          <th>Årsmodell</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {vehicleList.map((vehicle) => (
          <tr key={vehicle.id}>
            <td>{vehicle.make}</td>
            <td>{vehicle.model}</td>
            <td>{vehicle.modelYear}</td>
            <td>
              <button onClick={() => handleDelete(vehicle.id)}>Ta bort</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default VehicleList;
