export class CreateDoctorDto {
  id: string;
  name: string;
  img: string;
  speciality: string;

  //constructor
  constructor(id: string, name: string, img: string, speciality: string) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.speciality = speciality;
  }
}
