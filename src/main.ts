import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

//Need to import RxJS libraries if we need to make use of map skip merge operators..etc.,
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/skip';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
