import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { UsuarioService } from './service/usuario.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule], // Asegúrate de importar CommonModule y FormsModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  data: any;
  nuevoUsuario = {
    nombre: '',
    correo: '',
    edad: 0
  };

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.usuarioService.getData().subscribe(resData => {
      this.data = resData; // Guardar los usuarios en la variable data
      console.log(resData);
    });
  }

  onSubmit(): void {
    this.usuarioService.addUsuario(this.nuevoUsuario).subscribe(response => {
      console.log('Usuario agregado:', response);
      this.fetchData(); 
      this.nuevoUsuario = { nombre: '', correo: '', edad: 0 };
    });
  }
}
