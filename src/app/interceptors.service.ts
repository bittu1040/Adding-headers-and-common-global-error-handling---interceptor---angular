import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, map} from "rxjs/operators";


@Injectable()
export class I2 implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const modified = req.clone({setHeaders: {'Custom-Header-2': '2'}});
        return next.handle(modified);
    }
}

@Injectable()
export class I3 implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const modified = req.clone({setHeaders: {'Authorization': "bitttttu i3"}});
        return next.handle(modified);
    }
}

@Injectable()
export class globalErrorHandlingInterceptor {
  
  intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
  console.log("Passed through the interceptor in request");
  
       return next.handle(request)
             .pipe(
                   map(res => {
                      console.log("Passed through the interceptor in response");
                      return res
                   }),
                   catchError((error: HttpErrorResponse) => {
                      let errorMsg = '';
                      if (error.error instanceof ErrorEvent) {
                         console.log('This is client side error');
                         errorMsg = `Error: ${error.error.message}`;
                      } else {
                         console.log('This is server side error');
                         errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;

                         console.log(error)
                         if(error.status===404){
                           console.log("404 error")
                         }
                      }
                      console.log(errorMsg);
                      return throwError(errorMsg);
                   })
             )
  }
}


