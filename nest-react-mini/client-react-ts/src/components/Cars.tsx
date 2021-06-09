
const style = require("./Cars.module.css");

interface Car {
  id: string;
  name: string;
  year: number;
}

function Cars() {
  const cars: Car[] = [
    { id: "123123", name: "Audi", year: 2019 },
    { id: "456456", name: "Toyota", year: 2021 },
    { id: "336457", name: "Hyundai", year: 2020 },
  ];

  return (
    <div>
      <h2>Cars</h2>
      <ul className={style.carsList}>
        {cars.map(car => <li key={car.id}>{car.name} - {car.year}</li>)}
      </ul>
    </div>
  );
}

export default Cars;
