import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // throw new Error('Method not implemented.');

    let token = localStorage.getItem('token');
    console.log(token);

    let jwtToken = req.clone({
      setHeaders: {
        Authorization: 'bearer ' + token
      }
    })
    return next.handle(jwtToken);


  }
}
