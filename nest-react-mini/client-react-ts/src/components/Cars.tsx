import { useEffect, useState } from "react";

const style = require("./Cars.module.css");

interface Car {
  id: string;
  name: string;
  year: number;
}

function Cars() {
  const [fetchedCars, setFetchedCars] = useState<any[]>([]);

  const cars: Car[] = [
    { id: "123123", name: "Audi", year: 2019 },
    { id: "456456", name: "Toyota", year: 2021 },
  ];

  useEffect(() => {
    // const fetchData = async () => {
    //   const result = await fetch('http://localhost:4000/cars');

    //   setData(result.data);
    // };
    // fetchData();
    // from https://www.robinwieruch.de/react-hooks-fetch-data

    fetch('http://localhost:4000/cars', {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      // mode: 'no-cors', // no-cors, *cors, same-origin
      headers: {
        // 'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
      // body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setFetchedCars(data)
        console.log('fetchedCars', fetchedCars); // here 'fetchedCars' isn't ready, i.e. []
      })
      .catch((error) => {
        console.error('Client (React) couldn\'t fetch data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Cars</h2>
      <ul className={style.carsList}>
        {cars.map(car => <li key={car.id}>{car.name} - {car.year}</li>)}
      </ul>
      <h2>Fetched Cars</h2>
      <ul className={style.carsList}>
        {fetchedCars.map(car => <li key={car.id}>{car.name} : {car.year}</li>)}
      </ul>
    </div>
  );
}

export default Cars;
