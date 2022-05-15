import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FlightsService } from './flights.service';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';

@Controller('flights')
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) {}


  @Post()
  create(@Body() createFlightDto: CreateFlightDto){
    return this.flightsService.create(createFlightDto)
  }


  @Get()
  findAll() {
    return this.flightsService.findAll();
  }

  @Get('/id/:id')
  findOne(@Param('id') id: number) {
    return this.flightsService.findOne(id);
  }

  @Get('/departure/:departure')
  findTime(@Param('departure') departure: Date){
    return this.flightsService.findTime(departure)
  }



  @Patch('/id/:id')
  update(@Param('id')id: number, @Body() updateFlightDto: UpdateFlightDto){
    return this.flightsService.update(id,updateFlightDto)
  }



  @Delete('/id/:id')
  remove(@Param('id') id: number) {
    return this.flightsService.remove(id);
  }
}