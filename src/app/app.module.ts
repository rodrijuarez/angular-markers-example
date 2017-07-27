import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { ProductsService } from './products.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC-DRJyBOcXuMHp-D4Dpupqf2u5fwTUE4k'
    })
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
