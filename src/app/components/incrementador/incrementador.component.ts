import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgreso') txtProgreso: ElementRef;
  @Input('titulo') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onChanged(newValue: number) {
    // const elementoHtml: any = document.getElementsByName('progreso')[0];
    if (newValue >= 100) {
      newValue = 100;
    }
    if (newValue <= 0) {
      newValue = 0;
    }
    this.progreso = newValue;
    // elementoHtml.value = this.progreso;
    this.txtProgreso.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
  }

  cambiarValor(valor: number) {
    const nuevoProgreso = this.progreso + valor;

    if (nuevoProgreso > 100) {
      return;
    }
    if (nuevoProgreso < 0) {
      return;
    }
    this.progreso = nuevoProgreso;
    this.cambioValor.emit(this.progreso);
    this.txtProgreso.nativeElement.focus();
  }

}
