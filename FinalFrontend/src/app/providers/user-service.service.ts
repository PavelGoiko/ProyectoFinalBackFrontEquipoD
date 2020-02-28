import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../entity/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  listaUsuario: User[] = [];
  user: any;

  constructor(private http: HttpClient) { }


  getAll(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:3000/users");
  }

  getUserById(id: number): Observable<User> {
    return this.http.post<User>("http://localhost:3000/users", id);
  }

  //editarUsuario(user: User): Observable<User>{
  // return this.http.post<User>("http://localhost:3000/editarUsuario", user);
  //}

  public Logged(): boolean {
    let token = localStorage.getItem("ACCESS_TOKEN");

    if (token == null || token == "") {
      return false;
    } else {
      return true;
    }
  }
}