import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http"
import { MockRequestsInterceptor } from './mock-requests.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MockRequestsInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule { }
