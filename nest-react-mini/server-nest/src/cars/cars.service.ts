import { Injectable } from "@nestjs/common";
import { CreateCarDto } from "./dto";
import { Car } from "./interfaces/car.interface";

@Injectable()
export class CarsService {
  private cars: Car[] = [
    { id: "123123", name: "Audi", year: 2019 },
    { id: "456456", name: "Toyota", year: 2021 },
  ];

  create(car: CreateCarDto) {
    const id = Date.now().toString();
    const newCar: Car = { id, ...car };
    this.cars.push(newCar);
    return newCar;
  }

  findAll(): Car[] {
    return this.cars;
  }

  getOne(id: string): Car {
    return this.cars.find((car) => car.id === id);
  }

  updateCar(id, updateCarDto): Car {
    const index = this.cars.findIndex((car) => car.id === id);
    let existingCar = this.cars[index];
    existingCar = { ...existingCar, ...updateCarDto };
    this.cars[index] = existingCar;
    return existingCar;
  }

  deleteOne(id: string): string {
    const index = this.cars.findIndex((car) => car.id === id);
    if (index < 0) return 'Such car was not found!';
    this.cars = this.cars.filter((car) => car.id !== id);
    return `Car with id ${id} has been removed.`;
  }
}
