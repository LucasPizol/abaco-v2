import { bootstrapApplication } from '@angular/platform-browser'
import { provideRouter } from '@angular/router'
import { AppComponent } from './app/app.component'
import { routes } from './app/app.routes'
import { provideNzI18n, en_US } from 'ng-zorro-antd/i18n'
import { FormsModule } from '@angular/forms'
import br from '@angular/common/locales/br'
import { importProvidersFrom } from '@angular/core'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { provideHttpClient } from '@angular/common/http'
import { provideToastr } from 'ngx-toastr'
import { registerLocaleData } from '@angular/common'

registerLocaleData(br)

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(FormsModule),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideToastr(),
    provideNzI18n(en_US),
  ],
}).catch((err) => console.error(err))
