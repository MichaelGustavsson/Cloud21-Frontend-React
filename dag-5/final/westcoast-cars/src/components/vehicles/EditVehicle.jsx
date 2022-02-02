import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function EditVehicle(props) {
  const params = useParams();
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [modelYear, setModelYear] = useState('');
  const navigate = useNavigate();

  const handleMakeTextChanged = (e) => {
    setMake(e.target.value);
  };
  const handleModelTextChanged = (e) => {
    setModel(e.target.value);
  };
  const handleModelYearTextChanged = (e) => {
    setModelYear(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newVehicle = {
      make: make,
      model: model,
      modelYear: modelYear,
    };

    props.handleAddVehicle(newVehicle);
    setMake('');
    setModel('');
    setModelYear('');
    // Navigera tillbaka till vehiclelist sidan...
    navigate('/vehicles');
  };

  return (
    <div className='card'>
      <form onSubmit={handleSubmit}>
        <h1>Uppdatera bil {params.id}</h1>
        <input
          onChange={handleMakeTextChanged}
          type='text'
          placeholder='Ange bil tillverkare'
          value={make}
        />
        <input
          onChange={handleModelTextChanged}
          type='text'
          placeholder='Ange bil modell'
          value={model}
        />
        <input
          onChange={handleModelYearTextChanged}
          type='text'
          placeholder='Ange årsmodell'
          value={modelYear}
        />
        <button className='btn btn-outline-rounded' type='submit'>
          Spara
        </button>
      </form>
    </div>
  );
}

export default EditVehicle;
