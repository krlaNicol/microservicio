import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsuarioService {
  // Definir la URL de la API
  private apiUrl = 'http://localhost:3000/api/data';
  
  // Inyectar HttpClient
  private readonly _http = inject(HttpClient);

  constructor(private http: HttpClient) { }

  // Método para obtener los datos de la API
  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Método para agregar un nuevo usuario
  addUsuario(nuevoUsuario: { nombre: string; correo: string; edad: number; }): Observable<any> {
    return this.http.post<any>(this.apiUrl, nuevoUsuario); // Aquí se hace la solicitud POST
  }
}
