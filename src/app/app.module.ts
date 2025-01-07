import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

import { HttpClientModule } from '@angular/common/http';
import { MovieListCardComponent } from './components/movie-list-card/movie-list-card.component';
import { MovieListGridComponent } from './components/movie-list-grid/movie-list-grid.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './components/card/card.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetailComponent,
    MovieListCardComponent,
    MovieListGridComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatButtonToggleModule,
    MatListModule,
    MatDividerModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatTabsModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
