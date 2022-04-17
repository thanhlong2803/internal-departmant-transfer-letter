import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CustomApiService } from './custom-api/custom-api.service';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material';
import { LoadingComponent } from '../_components/_loading/loading.component';
import { DownLoad } from '../_models/download.model';

@Injectable({ providedIn: 'root' })
export class DownloadService {
    loadingPopup: any;
    constructor(private http: HttpClient, private dialog: MatDialog, private apiService: CustomApiService) { }

    getAllFile() {
        return this.http.get<DownLoad[]>(`${environment.api_url}/DownloadFile`);
    }

    download(download: DownLoad) {
        this.showLoadingPopup();
        this.apiService.postFile<string>('DownloadFile/DownloadFiles', download).subscribe(
            resultData => {
                const dateTimeNow = new Date();
                CustomApiService.downLoadFile(resultData, download.type,
                    download.name + dateTimeNow.getFullYear() + download.extension);
                 this.closeAllDialogs();
            },
            (err: any) => {
                 this.closeAllDialogs();
                // show message error api
            });
    }

    private showLoadingPopup() {
        if (!this.loadingPopup) {
            this.loadingPopup = this.dialog.open(LoadingComponent, {
                disableClose: true,
                width: '200px',
                height: '10px',
                data: { Title: 'loading downdload...' }
            });
        }
    }

    private closeAllDialogs() {
        if (this.loadingPopup) {
            this.loadingPopup.close();
            this.loadingPopup = null;
        }
    }
}

