import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { ClientesService } from './clientes.service';
import { ClientesModule } from './clientes/clientes.module';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { ServicoPrestadoService } from './servico-prestado.service';
import { ServicoPrestadoModule } from './servico-prestado/servico-prestado.module';
import { TemplateModule } from './template/template.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    ClientesModule,
    HttpClientModule,
    ServicoPrestadoModule,
    FormsModule
  ],
  providers: [ClientesService, ServicoPrestadoService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
