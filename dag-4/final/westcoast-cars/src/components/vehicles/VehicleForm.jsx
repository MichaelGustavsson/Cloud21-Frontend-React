import { useState } from 'react';

// function VehicleForm({ handleAddVehicle }) {
function VehicleForm(props) {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [modelYear, setModelYear] = useState('');

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
      // make: make,
      // model: model,
      // modelYear: modelYear,
      make,
      model,
      modelYear,
    };
    // handleAddVehicle(newVehicle);
    props.handleAddVehicle(newVehicle);
    setMake('');
    setModel('');
    setModelYear('');
  };

  return (
    <div className='card'>
      <form onSubmit={handleSubmit}>
        <h1>Lägg till ny bil</h1>
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
        <button className='btn btn-outline-rounded-light' type='submit'>
          Spara
        </button>
      </form>
    </div>
  );
}

export default VehicleForm;
