import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UtilityService } from 'src/app/reusable/shared/utility.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent  {
  constructor(
    public dialogRef: MatDialogRef<LoadingComponent>, 
    private _utilityService: UtilityService,
  ){
    this._utilityService.dialogRef = dialogRef;
  }

  close():void {
    this.dialogRef.close();
  }
}
