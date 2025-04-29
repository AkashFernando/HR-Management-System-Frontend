export default class Employee{
  id:number
  name:string
  email:string
  department:string
  createdDate:string
  modifiedDate:string

  constructor(
  id:number,
  name:string,
  email:string,
  department:string,
  createdDate:string,
  modifiedDate:string

  ){
    this.id = id;
    this.name = name ;
    this.email = email ;
    this.department = department;
    this.createdDate = createdDate;
    this.modifiedDate=modifiedDate;
  }

}
