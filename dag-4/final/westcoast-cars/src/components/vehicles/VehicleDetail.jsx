import { useNavigate } from 'react-router-dom';
import { FaRegTrashAlt, FaPen } from 'react-icons/fa';

function VehicleDetail({ vehicle, deleteVehicle }) {
  const navigate = useNavigate();

  const onEditClickHandler = () => {
    console.log('Edit clicked!', vehicle.id);

    navigate(`/edit/${vehicle.id}`);
  };

  return (
    <tr>
      <td>
        <span className='editSpan' onClick={onEditClickHandler}>
          <FaPen />
        </span>
      </td>
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
