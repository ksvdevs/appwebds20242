import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl = 'http://localhost:8081';
  constructor(private httpClient: HttpClient) { }
  public getData(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/client/getdata`);
  }
  public insert(formData: FormData): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/client/insert`, formData);
  }

  public getAll(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/client/getall`);
  }
  public delete(idClient: string): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/client/delete/${idClient}`);
  }

}
