import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyinterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const Auth_Token = 'sdfsdfsdfsdf.sdfsdfsdfsdfsd.rwrwerwerwer';
    return next.handle(request.clone({setHeaders: {Auth_Token}}));
  }
}
