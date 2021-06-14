import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from "@nestjs/common";
import { CreateCarDto, UpdateCarDto } from "./dto";
import { CarsService } from "./cars.service";
import { Car } from "./interfaces/car.interface";

@Controller("cars")
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post() create(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @Get() findAll(): Car[] {
    return this.carsService.findAll();
  }

  @Get(":id") findOne(@Param("id") id: string) {
    return this.carsService.getOne(id);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carsService.updateCar(id, updateCarDto);
  }

  @Delete(":id")
  delete(@Param("id") id: string) {
    return this.carsService.deleteOne(id);
  }
}
