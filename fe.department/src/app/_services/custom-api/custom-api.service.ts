import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { saveFile } from 'src/app/_helpers/download';

@Injectable({ providedIn: 'root' })
export class CustomApiService {

    constructor(private http: HttpClient) { }
    
    get<T>(path: string, params: HttpParams = new HttpParams()): Observable<T> {
        return this.http.get<T>(`${environment.api_url}/${path}`, { params });
    }

    postFile<T>(path: string, body: Object = {}): Observable<T> {
        var bodyCopy = Object.assign({}, body);
        return this.http.post<T>(
            `${environment.api_url}/${path}`,
            bodyCopy, { responseType: 'arrayBuffer' as 'json', headers: null }
        );
    }

    static downLoadFile(data: any, type: string, fileName: string) {
        let blob = new Blob([data], { type: type });
        saveFile(blob, fileName);
    }
}   