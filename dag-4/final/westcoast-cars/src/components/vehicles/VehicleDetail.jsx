import { FaRegTrashAlt, FaPen } from 'react-icons/fa';

// function VehicleDetail(props) {
function VehicleDetail({ vehicle, deleteVehicle }) {
  return (
    <tr>
      <td>
        <span className='editSpan'>
          <FaPen />
        </span>
      </td>
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
        <span className='deleteSpan' onClick={() => deleteVehicle(vehicle.id)}>
          <FaRegTrashAlt />
        </span>
      </td>
    </tr>
  );
}

export default VehicleDetail;
