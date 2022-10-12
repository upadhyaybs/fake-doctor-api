import { Module } from '@nestjs/common';
import { DoctorsService } from './service/doctors.service';
import { DoctorsController } from './controller/doctors.controller';

@Module({
  controllers: [DoctorsController],
  providers: [DoctorsService],
})
export class DoctorsModule {}
