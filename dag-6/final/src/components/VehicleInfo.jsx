// import { Component } from 'react';

function VehicleInfo({ vehicle }) {
  return (
    <>
      <h2>This is the new VehicleInfo component</h2>
      <div className='vehicleInfo'>
        <span>{vehicle.make} </span>
        <span>{vehicle.model}</span>
      </div>
    </>
  );
}
// class VehicleInfo extends Component {
//   constructor(props) {
//     super(props);

//     console.log(props);

//     this.state = {
//       vehicle: props.vehicle,
//     };
//   }

//   render() {
//     return (
//       <>
//         <h2>This is the VehicleInfo component</h2>
//         <div className='vehicleInfo'>
//           <span>{this.state.vehicle.make} </span>
//           <span>{this.state.vehicle.model}</span>
//         </div>
//       </>
//     );
//   }
// }

export default VehicleInfo;
