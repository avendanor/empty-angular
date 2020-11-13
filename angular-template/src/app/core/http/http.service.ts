import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import Swal from 'sweetalert2';

import { SpinnerService } from '../../shared/components/spinner/spinner.service';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(
    private http: HttpClient,
    private spinnerService: SpinnerService
  ) {}

  public get<T>(endPoint, params) {
    return this.http
      .get<T>(environment.apiUrl + endPoint, {
        params
      })
      .pipe(catchError(this.handleError));
  }

  public post<t>(endPoint, param) {
    return this.http
      .post<t>(environment.apiUrl + endPoint, param)
      .pipe(catchError(this.handleError));
  }

  public put<t>(endPoint, param) {
    return this.http
      .put<t>(environment.apiUrl + endPoint, param)
      .pipe(catchError(this.handleError));
  }

  public delete<t>(endPoint, param) {
    return this.http
      .delete<t>(environment.apiUrl + endPoint, param)
      .pipe(catchError(this.handleError));
  }

  // Error handling
  private handleError(error) {
    let errorMessage = '';
    // console.log(error);
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    if (error.status === 404) {
      Swal.fire('!Error!', 'Error in model to save information', 'error');
    } else if (error.status !== 500 && error.status !== 0) {
      Swal.fire('!Error!', error.error.non_field_errors[0], 'error');
    } else {
      Swal.fire('!Error!', errorMessage, 'error');
    }
    return throwError(errorMessage);
  }
}
