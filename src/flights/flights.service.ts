import { Injectable } from '@nestjs/common';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Flight } from './entities/flight.entity';

@Injectable()
export class FlightsService {
  constructor(
    @InjectRepository(Flight)
    private flightsRepository: Repository<Flight>,
  ) {}

  create(CreateFlightDto: CreateFlightDto){
    return this.flightsRepository.save(CreateFlightDto)
  }

  findAll(): Promise<Flight[]> {
    return this.flightsRepository.find();
  }

  findOne(id: number): Promise<Flight> {
    return this.flightsRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.flightsRepository.delete(id);
  }

  update(id:number ,updateFlightDto: UpdateFlightDto){
    return this.flightsRepository.update(id,updateFlightDto)
  }


  findTime(departure: Date):Promise<Flight[]>{
    
    return this.flightsRepository.find(
          { where:
             { departure: departure } 
        })
  }

 
}
