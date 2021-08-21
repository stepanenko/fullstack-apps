import { useEffect, useState } from "react";

const style = require("./Cars.module.css");

interface Car {
  id: string;
  name: string;
  year: number;
}

function Cars() {
  const [fetchedCars, setFetchedCars] = useState<Car[]>([]);

  const cars: Car[] = [
    { id: "123123", name: "Audi", year: 2019 },
    { id: "456456", name: "Toyota", year: 2021 },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:4000/cars');
      
      const result = await response.json();
      console.log('result', result);

      setFetchedCars(result);
    };

    fetchData();
    // from https://www.robinwieruch.de/react-hooks-fetch-data

    // fetch('http://localhost:4000/cars')
    //   .then(response => response.json())
    //   .then(data => {
    //     setFetchedCars(data)
    //     console.log('fetchedCars', fetchedCars); // here 'fetchedCars' isn't ready, i.e. []
    //   })
    //   .catch((error) => {
    //     console.error('FE couldn\'t fetch data:', error);
    //   });
  }, []);

  return (
    <div>
      <h2>Hardcoded Cars:</h2>
      <ul className={style.carsList}>
        {cars.map(car => <li key={car.id}>{car.name} - {car.year}</li>)}
      </ul>
      <h2>Fetched from Nest server Cars:</h2>
      <ul className={style.carsList}>
        {fetchedCars.map(car => <li key={car.id}>{car.name} : {car.year}</li>)}
      </ul>
    </div>
  );
}

export default Cars;
