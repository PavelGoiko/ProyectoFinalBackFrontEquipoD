import { Injectable } from '@angular/core';
import { User } from '../entity/user';

@Injectable({
  providedIn: 'root'
})
export class TokenService {


  // se usa como session

  public token:string;
  public usuario: User;

  constructor() { }

  getToken(){
    return this.token;
  }
}