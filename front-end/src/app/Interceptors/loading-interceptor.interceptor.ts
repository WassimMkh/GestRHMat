import {Injectable} from "@angular/core";
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import {Observable, take, tap} from "rxjs";
import {LoadingserviceService} from "../services/loadingservice.service";


@Injectable()
export class LoadingInterceptorInterceptor implements HttpInterceptor {

  constructor(private loadingservice : LoadingserviceService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingservice.requestStarted();
    return this.handler(next,req)
  }

  private handler(next: HttpHandler, req: HttpRequest<any>) {
    return next.handle(req).
      pipe(
        tap(
          (event) => {
            if (event instanceof HttpResponse) {
              this.loadingservice.requestEnded();
            }
          },
          (error : HttpErrorResponse) => {
            this.loadingservice.resetLoader();
            throw  error;
          }
        )
    );
  }
}
