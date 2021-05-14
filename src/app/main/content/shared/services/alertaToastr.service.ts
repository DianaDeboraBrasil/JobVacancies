import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertaToastrService {

  constructor(private toastrService: ToastrService) { }

  showToasterSuccess(mensagem: string, titulo: string) {
    this.toastrService.success(mensagem, titulo, {
      timeOut: 3000,
      progressBar: true,
      extendedTimeOut: 1000,
      closeButton: true,
      positionClass: 'toast-center-center'

    });
  }

  showToasterError(mensagem: string, titulo: string) {
    this.toastrService.error(mensagem, titulo, {
      timeOut: 0,
      progressBar: false,
      closeButton: true,
      positionClass: 'toast-center-center'

    });
  }

  showToasterWarning(mensagem: string, titulo: string) {
    this.toastrService.warning(mensagem, titulo, {
      closeButton: true,
      progressBar: true,
      positionClass: 'toast-center-center',
      timeOut: 4000,
      extendedTimeOut: 1000
    });
  }
}
