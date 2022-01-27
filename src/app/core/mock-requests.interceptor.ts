import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  JsonpClientBackend
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

const mockedUrls = [
  {
    url: environment.baseUrl + 'users/1',
    json: '{"address":{"geolocation":{"lat":"-37.3159","long":"81.1496"},"city":"kilcoole","street":"new road","number":7682,"zipcode":"12926-3874"},"id":1,"email":"john@gmail.com","username":"johnd","password":"m38rmF$","name":{"firstname":"john","lastname":"doe"},"phone":"1-570-236-7033","__v":0}'
  }
]

@Injectable()
export class MockRequestsInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    for (const element of mockedUrls) {
      if (request.url === element.url) {
        console.log('Loaded from json : ' + request.url);
        return of(
          new HttpResponse({ status: 200, body: JSON.parse(element.json as any) })
        );
      }
    }
    return next.handle(request);
  }
}
