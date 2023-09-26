import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoadingComponent } from 'src/app/components/layout/modals/loading/loading.component';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  isOpen: boolean = false;
  private winHeight = 0;
  private gridHeight = 0;

  constructor(
    private _snackBar: MatSnackBar,
    private dialogLoading: MatDialog,
    public dialogRef: MatDialogRef<LoadingComponent>
  ) {
    
  }

  heightForMainGrid(): number {
    this.winHeight = window.innerHeight;
    this.gridHeight = this.winHeight > 665 ? 800 : 525;
    return this.gridHeight;
  }

  heightForModalGrid(): number {
    this.winHeight = window.innerHeight;
    this.gridHeight = this.winHeight > 665 ? 550 : 325;
    return this.gridHeight;
  }

  mostrarAlerta(mensaje: string, action: string, customCSS: string) {
    this._snackBar.open(mensaje, action, {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000,
      panelClass: customCSS
    });
  }

  mostrarLoadingSpinner() {
    if(this.isOpen) return;
    this.isOpen = true;
    this.dialogRef = this.dialogLoading.open(LoadingComponent, { disableClose: true });
    this.dialogRef.afterClosed().subscribe(() => {
      this.isOpen = false;
    })
  }

  cerrarLoadingSpinner() {
    this.dialogRef.close();
  }

}
