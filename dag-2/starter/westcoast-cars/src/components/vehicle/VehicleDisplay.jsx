const VehicleDisplay = (props) => {
  return (
    <section>
      <div className='vehicleDisplay'>
        <div>{props.make}</div>
        <div>{props.model}</div>
        <div>{props.modelYear}</div>
        <div>{props.mileage}</div>
      </div>
    </section>
  );
};

export default VehicleDisplay;
