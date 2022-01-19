const VehicleDisplay = (props) => {
  // console.log(props);
  return (
    <section>
      <div className='vehicleDisplay'>
        <h4>{props.make}</h4>
        <div>{props.model}</div>
        <div>{props.modelYear}</div>
        <div>{props.mileage}</div>
      </div>
    </section>
  );
};

export default VehicleDisplay;
