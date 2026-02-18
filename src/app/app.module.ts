import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroSliderComponent } from './components/hero-slider/hero-slider.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { CoverageMapComponent } from './components/coverage-map/coverage-map.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { LocationsComponent } from './components/locations/locations.component';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';
import { HomeComponent } from './pages/home/home.component';
import { ClasesAutoComponent } from './pages/clases-auto/clases-auto.component';
import { ClasesMotoComponent } from './pages/clases-moto/clases-moto.component';
import { TeoricoComponent } from './pages/teorico/teorico.component';
// import { ContactoComponent } from './pages/contacto/contacto.component';
import { GithubRobotComponent } from './components/github-robot/github-robot.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroSliderComponent,
    ServicesSectionComponent,
    CoverageMapComponent,
    WhyUsComponent,
    LocationsComponent,
    WhatsappButtonComponent,
    HomeComponent,
    ClasesAutoComponent,
    ClasesMotoComponent,
    TeoricoComponent,
    // ContactoComponent,
    GithubRobotComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
