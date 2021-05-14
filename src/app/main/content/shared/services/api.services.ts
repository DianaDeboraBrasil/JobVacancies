import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/do';
import { environment } from '../../../../../environments/environment';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { throwError, Observable } from 'rxjs';

@Injectable()
export class ApiService {

  router: Router;
  dialog: MatDialog;
  urlsVerify = [] = [];

  constructor(private readonly httpClient: HttpClient, private _router?: Router
    ,         protected _dialog?: MatDialog) {

      this.router = _router;
      this.dialog = _dialog;
      this.UrlToCheck();
  }

  // private redirectToErrorPage() {
  //   if (this.router !== undefined) {
  //     this.router.navigate(['errorpage']);
  //   }
  // }

  private UrlToCheck() {

  }

  private catchAuthError = (res: HttpErrorResponse) => {

    if (res.status === 500 || res.status === 400 || res.status === 404) {
      if (res.url.indexOf('/') > 0) {

        const regexExpr = /.+?\:\/\/.+?(\/.+?)(?:#|\?|$)/;
        const urlPath = regexExpr.exec(res.url)[1];
        const matchUrl = this.urlsVerify.filter(f => f === urlPath).length > 0;

        if (res.status === 400 ) {
          return throwError(res.error);
        }
        if (res.status === 404 ) {
          return throwError(res.statusText);
        }

        if (matchUrl) {
          return throwError('An error occurred, please try again.');
        } else {
          // this.redirectToErrorPage();
        }
      }
    }
  }

  protected get<T>(url: string, options?: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;

  }): Observable<T> {
    // this.spinnerService ? this.spinnerService.show() : 1 == 1;
    return this.httpClient
      .get<T>(this.resolveUrl(url), options)
      // .do(() => { this.spinnerService ? this.spinnerService.hide() : 1 == 1; })
      // .finally(()=> {this.spinnerService ? this.spinnerService.hide() : 1==1})
      .catch(this.catchAuthError);
  }

  protected patch<T>(url: string, body: any, options?: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  }): Observable<T> {
    return this.httpClient
      .patch<T>(this.resolveUrl(url), body, options)
      .catch(this.catchAuthError);
  }

  protected post<T>(url: string, body?: any, options?: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  }): Observable<T> {
    return this.httpClient
      .post<T>(this.resolveUrl(url), body, options)
      .catch(this.catchAuthError);
  }

  protected put<T>(url: string, body: any, options?: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  }): Observable<T> {
    return this.httpClient
      .put<T>(this.resolveUrl(url), body, options)
      .catch(this.catchAuthError);
  }

  protected delete<T>(url: string, options?: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    reportProgress?: boolean;
    body?: any;
    responseType?: 'json';
    withCredentials?: boolean;
  }): Observable<T> {
    return this.httpClient
      .request<T>('delete', this.resolveUrl(url), options)
      .catch(this.catchAuthError);
  }

  resolveUrl(path: string): string {
    return environment.JobVacanciesApiHost + path;
  }
}
