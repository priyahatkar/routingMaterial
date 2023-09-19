import { Injectable } from '@angular/core';
import { Iuser } from '../models/allInterFace';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public UsersArray : Array<Iuser>=[
    {
      name : "Jhon",
      userId : '1',
      role : "admin"
    },
    {
      name : "Mark",
      userId : '2',
      role : "user"
    },
    {
      name : "Jenny",
      userId : '3',
      role : "admin"
    },
    {
      name : "May",
      userId : '4',
      role : "user"
    },
  ]
  constructor() { }
}
