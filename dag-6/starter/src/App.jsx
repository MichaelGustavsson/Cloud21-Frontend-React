import { useState, useEffect } from 'react';

import './styles.css';

function App() {
  const [vehicleData, setVehicleData] = useState([]);

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    const response = await fetch('/vehicles?_sort=modelYear&_order=desc');
    if (response.status === 200) {
      const data = await response.json();
      setVehicleData(data);
    }
  };

  return <div></div>;
}

export default App;
