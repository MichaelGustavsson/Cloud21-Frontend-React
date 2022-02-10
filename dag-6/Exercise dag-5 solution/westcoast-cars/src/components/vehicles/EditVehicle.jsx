import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function EditVehicle(props) {
  const params = useParams();
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [modelYear, setModelYear] = useState('');
  const [mileage, setMileage] = useState('');
  const [color, setColor] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [gearType, setGearType] = useState('');
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
      setMileage(data.mileage);
      setColor(data.color);
      setFuelType(data.fuelType);
      setGearType(data.gearType);
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
  const handleMileageTextChanged = (e) => {
    setMileage(e.target.value);
  };
  const handleColorTextChanged = (e) => {
    setColor(e.target.value);
  };
  const handleGearTypeTextChanged = (e) => {
    setGearType(e.target.value);
  };
  const handleFuelTypeTextChanged = (e) => {
    setFuelType(e.target.value);
  };

  const updateVehicle = () => {
    const vehicle = {
      make: make,
      model: model,
      modelYear: modelYear,
      mileage: mileage,
      color: color,
      fuelType: fuelType,
      gearType: gearType,
    };

    props.handleUpdate(vehicle, params.id);
  };

  const handleCancel = (e) => {
    e.preventDefault();

    setMake('');
    setModel('');
    setModelYear('');
    setMileage('');
    setColor('');
    setFuelType('');
    setGearType('');

    navigate('/vehicles');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateVehicle();

    setMake('');
    setModel('');
    setModelYear('');
    setMileage('');
    setColor('');
    setFuelType('');
    setGearType('');
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
        <input
          onChange={handleMileageTextChanged}
          type='text'
          placeholder='Ange antal km'
          value={mileage}
        />
        <input
          onChange={handleColorTextChanged}
          type='text'
          placeholder='Ange färg'
          value={color}
        />
        <input
          onChange={handleFuelTypeTextChanged}
          type='text'
          placeholder='Ange bränseltyp'
          value={fuelType}
        />
        <input
          onChange={handleGearTypeTextChanged}
          type='text'
          placeholder='Ange växellåda'
          value={gearType}
        />
        <button className='btn btn-outline-rounded' type='submit'>
          Spara
        </button>
        <button onClick={handleCancel} className='btn btn-outline-rounded'>
          Avbryt
        </button>
      </form>
    </div>
  );
}

export default EditVehicle;
