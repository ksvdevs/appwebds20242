import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8081';
  constructor(private httpClient: HttpClient) { }
  public getAll(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/user/getall`);
  }
  public insert(formData: FormData): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/user/insert`, formData);
  }
  public login(formData: FormData): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/user/login`, formData);
  }
}
