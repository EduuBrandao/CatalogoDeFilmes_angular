import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-film-details-dialog',
  templateUrl: './film-details-dialog.component.html',
  styleUrls: ['./film-details-dialog.component.css']
})
export class FilmDetailsDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<FilmDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
