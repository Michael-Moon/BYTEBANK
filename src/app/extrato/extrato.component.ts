import { Transferencia } from './../../models/transferencia';
import { Component, Input, OnInit } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  @Input() transferncias: any[];

  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
    this.service.todas().subscribe((transferncias: Transferencia[]) =>{
      console.table(transferncias);
      this.transferncias = transferncias;
    } );
  }

}
