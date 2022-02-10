import { Link } from 'react-router-dom';
import { useState } from 'react';
import VehicleDetail from './VehicleDetail';

import './vehicleList.css';

function VehicleList({ vehicleList, handleDelete, handleSearch }) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    handleSearch(searchValue);
  };

  const handleSearchChanged = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <section className='scroll-container'>
      <div className='table-header'>
        <div className='searchBar'>
          <form className='search-form' onSubmit={handleSearchSubmit}>
            <input
              onChange={handleSearchChanged}
              className='searchInput'
              type='text'
              placeholder='Sök efter tillverkare'
              value={searchValue}
            />
            <button className='searchButton'>Sök...</button>
          </form>
        </div>

        <Link to={{ pathname: '/add' }} className='btn btn-outline-rounded'>
          Lägg till ny bil
        </Link>
      </div>
      <section className='table-container'>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Tillverkare</th>
              <th>Modell</th>
              <th className='right'>Årsmodell</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {vehicleList.map((vehicle) => (
              <VehicleDetail
                key={vehicle.id}
                vehicle={vehicle}
                deleteVehicle={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </section>
    </section>
  );
}

export default VehicleList;
