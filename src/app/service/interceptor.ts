import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
@Injectable()
export class Interceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const appId = '6122c7f4a99ae1923a8fd79f';
        const customReq = request.clone({
            setHeaders: {
                'app-id': appId
            }
        });
        return next.handle(customReq)
            .pipe(
                // Retry on failure
                retry(2),
                catchError((error: HttpErrorResponse) => {
                    // TODO: Add error handling logic here
                    alert(`HTTP Error: ${customReq.url}`);
                    return throwError(error);
                })
            );
    }
}
