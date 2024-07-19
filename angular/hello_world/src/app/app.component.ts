import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './mainLayout/header/header.component';
import { SuccessComponent } from './pages/success/success.component';
import { FailureComponent } from './pages/failure/failure.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SuccessComponent, FailureComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello_world';
  name = 'Semyon'
  fahrenheit = 0;

  tempConversion(event:any){
    this.fahrenheit = (event.target.value*1.8)+32;
  }

  NIS=0;
  dollar = 0.27;
  euro = 0.25;
  canadianDollar = 0.36;
  centimeter = 0;
  inch = 0.393700787;
  meter = 0;
  feet = 3.2808399;
}
