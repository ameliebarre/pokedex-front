export class User {
  _id: string;
  name: string;
  firstname: string;
  username: string;
  password: string;
  email: string;
  token: string;
  role: string;
  birthdate: string;
  sex: string;
  city: string;
  zipcode: string;
  country: string;

  constructor(obj?: any) {
    this._id = (obj && obj.id) || null;
    this.username = (obj && obj.username) || null;
    this.name = (obj && obj.name) || null;
    this.firstname = (obj && obj.firstname) || null;
    this.password = (obj && obj.password) || null;
    this.email = (obj && obj.email) || null;
    this.token = (obj && obj.token) || null;
    this.role = (obj && obj.role) || null;
    this.birthdate = (obj && obj.birthdate) || null;
    this.sex = (obj && obj.sex) || null;
    this.city = (obj && obj.city) || null;
    this.zipcode = (obj && obj.zipcode) || null;
    this.country = (obj && obj.country) || null;
  }
}
