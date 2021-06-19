import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { LoginModule} from './autenticacao/login/login.module'; // importando o módulo criado (foi manualmente)
import { LoginRoutingModule } from './autenticacao/login/login-routing.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LoginModule,
    LoginRoutingModule,
    AppRoutingModule // Para que as rotas funcionem corretamente o módulo raiz precisa ser o último na importação
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
