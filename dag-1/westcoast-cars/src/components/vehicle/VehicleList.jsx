import React from 'react';

import VehicleDisplay from './VehicleDisplay';

import './vehicle.css';

const VehicleList = () => {
  return (
    <section className='vehicleList'>
      <h1>Här är våra bilar i lager</h1>
      <h4>Alla bilar är kontrollerade och besiktigade</h4>
      <VehicleDisplay
        make='Volvo'
        model='V60'
        modelYear='2014'
        mileage='89900'
      />
      <VehicleDisplay
        make='Ford'
        model='Kuga'
        modelYear='2012'
        mileage='129900'
      />
      <VehicleDisplay
        make='Volkswagen'
        model='Tiguan'
        modelYear='2010'
        mileage='135000'
      />
      <VehicleDisplay
        make='Kia'
        model='Ceed'
        modelYear='2016'
        mileage='46750'
      />
      <VehicleDisplay
        make='Ford'
        model='Mustang Mach-E'
        modelYear='2021'
        mileage='100'
      />
    </section>
  );
};

export default VehicleList;
