import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(private http: HttpClient) { }

  getStudent(ci: string, birth: Date){
    const o = { ci, birth };
    // console.log(o);
    const url = environment.urlBase + 'GetCorreo';
    return this.http.post(url, o);
  }
}
