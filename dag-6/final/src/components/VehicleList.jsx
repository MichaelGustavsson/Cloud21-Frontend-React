import { Component } from 'react';

import VehicleInfo from './VehicleInfo';

// VehicleList ärver ifrån Reacts Component klass...
class VehicleList extends Component {
  constructor() {
    super();

    // Hanterar tillståndet i en klass baserad komponent...
    this.state = {
      vehicles: [],
      soldVehicles: [],
      inspectedVehicles: [],
    };
  }
  //Hämta alla bilar via vårt jsonserver api...
  //Metod, för funktionen ligger i klassen
  loadAllVehicles = async () => {
    const response = await fetch('/vehicles?_sort=modelYear&_order=desc');
    if (response.status === 200) {
      const data = await response.json();

      this.setState({
        vehicles: data,
        inspectedVehicles: data,
        soldVehicles: data,
      });
    }
  };

  //Life Cycle event...
  componentDidMount() {
    this.loadAllVehicles();
  }
  render() {
    return (
      <>
        <h1>Hello from Westcoast Cars class component</h1>
        {this.state.vehicles.map((currentVehicle) => {
          return (
            <VehicleInfo key={currentVehicle.id} vehicle={currentVehicle} />
          );
        })}
      </>
    );
  }
}

export default VehicleList;
