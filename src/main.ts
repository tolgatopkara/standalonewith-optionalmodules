import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app/app-routing.module';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent ,{
  providers : [
    importProvidersFrom(RouterModule.forRoot(routes)),
  ],
})
  .catch(err => console.error(err));
