import { useParams } from 'react-router-dom';

function EditVehicle() {
  const params = useParams();
  return <h1>Uppdatera bil {params.id}</h1>;
}

export default EditVehicle;
