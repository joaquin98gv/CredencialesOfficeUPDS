import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { EstudianteService } from '../../services/estudiante.service';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { ModalDetalleComponent } from '../modal-detalle/modal-detalle.component';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})
export class BusquedaComponent implements OnInit {
  form: FormGroup;
  data: any;
  startDate = new Date(1998, 0, 1);
  constructor(
    private fb: FormBuilder,
    private _serviceEstudiante: EstudianteService,
    private modalDatos: MatDialog ) {
    this.crearFormulario();
  }

  ngOnInit(): void {}

  crearFormulario() {
    this.form = this.fb.group({
      ci: ['', Validators.required],
      birth: ['', Validators.required],
    });
  }

  obtenerCredenciales() {
    if (this.form.valid) {
      this._serviceEstudiante
        .getStudent(this.form.controls.ci.value, this.form.controls.birth.value)
        .subscribe((resp) => {
          console.log(resp);
          // this.data = resp;
          this.modalDatos.open(ModalDetalleComponent, {
            maxWidth: '70vw',
            maxHeight: '70vh',
            data: { data: resp },
          });
        });
      // this.modalCuentaObtenida();
    }
  }

  modalCuentaObtenida() {
    console.log(this.data);
    const dialogoref = this.modalDatos.open(ModalDetalleComponent, {
      maxWidth: '70vw',
      maxHeight: '70vh',
      data: { data: this.data}
    });
  }
}
