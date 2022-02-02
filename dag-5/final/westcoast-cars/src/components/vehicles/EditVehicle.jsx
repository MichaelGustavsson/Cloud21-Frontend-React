import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function EditVehicle(props) {
  const params = useParams();
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [modelYear, setModelYear] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchVehicle(params.id);
  }, [params.id]);

  // Funktion för att hämta en bil ifrån REST API...
  const fetchVehicle = async (id) => {
    const response = await fetch(`/vehicles/${id}`);

    if (response.status === 200) {
      const data = await response.json();

      setMake(data.make);
      setModel(data.model);
      setModelYear(data.modelYear);
    }
  };

  const handleMakeTextChanged = (e) => {
    setMake(e.target.value);
  };
  const handleModelTextChanged = (e) => {
    setModel(e.target.value);
  };
  const handleModelYearTextChanged = (e) => {
    setModelYear(e.target.value);
  };

  const updateVehicle = () => {
    const vehicle = {
      make: make,
      model: model,
      modelYear: modelYear,
    };

    props.handleUpdate(vehicle, params.id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateVehicle();

    setMake('');
    setModel('');
    setModelYear('');
    navigate('/vehicles');
  };

  return (
    <div className='card'>
      <form onSubmit={handleSubmit}>
        <h1>
          Uppdatera {make} {model}
        </h1>
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
