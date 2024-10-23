import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { NZ_I18N, provideNzI18n, pt_BR, zh_CN } from 'ng-zorro-antd/i18n';
registerLocaleData(pt);


@NgModule({
  declarations: [AppComponent],
  providers: [provideNzI18n (pt_BR), {provide: NZ_I18N, useValue: zh_CN}],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}