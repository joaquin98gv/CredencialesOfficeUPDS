import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-detalle',
  templateUrl: './modal-detalle.component.html',
  styleUrls: ['./modal-detalle.component.css'],
})
export class ModalDetalleComponent implements OnInit {
  resp: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.resp = data.data;
  }

  ngOnInit(): void {}
}
