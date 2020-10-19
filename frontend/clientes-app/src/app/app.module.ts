import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesModule } from './clientes/clientes.module';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TemplateModule } from './template/template.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    ClientesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
