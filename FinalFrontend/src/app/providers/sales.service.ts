import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sales } from '../entity/sales';
@Injectable({
  providedIn: 'root'
})
export class SalesService {

  lista: Sales[] = [];
  constructor(private httpClient: HttpClient) {

  }

  searchAll(): Promise<Sales[]> {
    return this.httpClient.get<Sales[]>("http://localhost:8100/sales").toPromise();
  }

  searchOne(id: number): Promise<Sales> {
    return this.httpClient.get<Sales>(`http://localhost:8100/sales/${id}`).toPromise();
  }

  insert(Sales: Sales): Promise<Sales> {
    return this.httpClient.post<Sales>("http://localhost:8100/sales", Sales).toPromise();
  }

  delete(Sales: Sales): Promise<Sales> {
    return this.httpClient.delete<Sales>(`http://localhost:8100/sales/${Sales.id}`).toPromise();
  }

  save(Sales: Sales): Promise<Sales> {
    return this.httpClient.put<Sales>(`http://localhost:8100/sales/${Sales.id}`, Sales).toPromise();
  }
}
