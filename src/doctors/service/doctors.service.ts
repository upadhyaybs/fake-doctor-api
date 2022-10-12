import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateDoctorDto } from '../dto/create-doctor.dto';
import { UpdateDoctorDto } from '../dto/update-doctor.dto';
import { Doctor } from '../entities/doctor.entity';

@Injectable()
export class DoctorsService {
  doctors: Doctor[] = [];
  constructor() {
    this.doctors.push(
      {
        id: uuidv4(),
        name: 'Dr. John Doe',
        img: 'img/docmale.png',
        speciality: 'Diabetes',
      },
      {
        id: uuidv4(),
        name: 'Dr. Karen Smith',
        img: 'img/docfemale.png',
        speciality: 'Anxiety',
      },
      {
        id: uuidv4(),
        name: 'Dr. David Johnson',
        img: 'img/docmale.png',
        speciality: 'Cancer',
      },
      {
        id: uuidv4(),
        name: 'Dr. Lisa Adams',
        img: 'img/docfemale.png',
        speciality: 'Asthma',
      },
    );
  }

  create(createDoctorDto: CreateDoctorDto) {
    this.doctors.push({
      ...createDoctorDto,
      id: uuidv4(),
    });
    return this.doctors.at(-1);
  }

  findAll() {
    return this.doctors;
  }

  findOne(id: string) {
    return this.doctors.filter((obj) => obj.id === id);
  }

  findBySpeciality(speciality: string) {
    return this.doctors.filter((obj) => obj.speciality === speciality);
  }

  update(id: number, _updateDoctorDto: UpdateDoctorDto) {
    return `This action updates a #${id} doctor`;
  }

  remove(id: number) {
    return `This action removes a #${id} doctor`;
  }
}
