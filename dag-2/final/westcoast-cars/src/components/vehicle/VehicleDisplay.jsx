import { useState } from 'react';

const VehicleDisplay = ({ vehicle }) => {
  // första argumentet i [] är variabeln och dess tillstånd.
  // andra argumentet i [] är metoden för att ändra värdet på första argumentet.
  // = useState(... start värdet ...)
  const [displayMileage, setDisplayMileage] = useState(false);
  let [count, setCount] = useState(0);

  function onClickHandler() {
    // set??? funktioner instruerar React att rita om komponenenten.
    // Alltså anropa return JSX igen...
    setDisplayMileage(!displayMileage);
    setCount(count + 1);
  }

  let mileage;

  if (displayMileage) {
    mileage = <div>{vehicle.mileage}</div>;
  }

  return (
    <section>
      <div className='card'>
        <div>{count}</div>
        <div>{vehicle.make}</div>
        <div>{vehicle.model}</div>
        <div>{vehicle.modelYear}</div>
        {mileage}
        <button onClick={onClickHandler} className='btn btn-outline-rounded'>
          {displayMileage ? 'Göm' : 'Visa'} Antal km
        </button>
      </div>
    </section>
  );
};

export default VehicleDisplay;
