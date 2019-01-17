import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {JwtService} from '../services/jwt.service';
import {Observable} from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private jwtService: JwtService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.jwtService.get();
    if (token) {
      req = req.clone({
        setHeaders: {'Authorization': 'Bearer ' + token}
      });
    }

    return next.handle(req);
  }
}
