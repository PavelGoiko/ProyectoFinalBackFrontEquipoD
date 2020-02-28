import { Injectable } from '@angular/core';
import { Publication } from '../entity/publication';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {

  lista: Publication[] = [];
  constructor(private httpClient: HttpClient) {

  }

  searchAll(): Promise<any> {
    return this.httpClient.get<Publication>("http://localhost:8080/api/sales").toPromise();
  }

  searchOne(id: number): Promise<any> {
    return this.httpClient.get<Publication>(`http://localhost:8080/api/sales${id}`).toPromise();
  }

  insert(Publications: Publication): Promise<any> {
    return this.httpClient.post<Publication>("http://localhost:8080/api/sales", Publications).toPromise();
  }

  delete(Publications: Publication): Promise<any> {
    return this.httpClient.delete<Publication>(`http://localhost:8080/api/sales${Publications.id}`).toPromise();
  }

  save(Publications: Publication): Promise<any> {
    return this.httpClient.put<Publication>(`http://localhost:8080/api/sales${Publications.id}`, Publications).toPromise();
  }
}
