import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
    <div
      class="modal show d-flex justify-content-center align-items-center"
      tabindex="-1"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body text-center">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Carregando...</span>
            </div>
            <p class="mt-2">Carregando...</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./loading.component.css'],
})
export class LoadingComponent {}
