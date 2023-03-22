import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';


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
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const modified = req.clone({setHeaders: {'Authorization': "bitttttu i3"}});
    return next.handle(modified);
  }
}