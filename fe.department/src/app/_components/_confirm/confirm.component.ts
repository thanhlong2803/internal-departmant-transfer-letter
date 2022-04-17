import { Component, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import icClose from '@iconify/icons-ic/twotone-close';

@Component({
    selector: 'app-confirm',
    templateUrl: './confirm.component.html',
})
export class ConfirmComponent {
    // icClose = icClose;
    Title: any = null;
    Message: any = null;
    ButtonYes: string = "Yes";
    ButtonNo: string = "No";
    HideClose: boolean = false;
    IsDetail: boolean = false;

    constructor(private dialogRef: MatDialogRef<ConfirmComponent>,
        @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
        this.Title = data.Title;
        this.Message = data.Message;
        if (data.ButtonYes != null) {
            this.ButtonYes = data.ButtonYes;
        }
        if (data.ButtonNo != null) {
            this.ButtonNo = data.ButtonNo;
        }
        if (data.HideClose != null) {
            this.HideClose = data.HideClose;
        }
        if (data.IsDetail != null) {
            this.IsDetail = data.IsDetail;
        }
    }

    close(answer: string) {
        this.dialogRef.close(answer);
    }

}
