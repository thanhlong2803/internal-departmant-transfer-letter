import { Component, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.css']
})
export class LoadingComponent {
    Title: string = "loading page...";
    constructor(private dialogRef: MatDialogRef<LoadingComponent>,
        @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
        if (data.Title != null) {
            this.Title = data.Title;
        }
    }
}
