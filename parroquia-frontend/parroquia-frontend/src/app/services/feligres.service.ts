import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeligresService {
  private apiUrl = 'http://localhost:3000/api/feligreses';

  constructor(private http: HttpClient) { }

  getFeligreses(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}