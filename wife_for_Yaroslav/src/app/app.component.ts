import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WifeDirective } from './directives/wife.directive'
import { NgIf, NgClass } from '@angular/common';
import { OutOfBoundsDirective } from './directives/out_of_bounds.directive'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WifeDirective, NgIf, OutOfBoundsDirective, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wife_for_Yaroslav';
  currentYear = new Date().getFullYear();
  age = 0;
  ageCalc (event:any) {
     return this.age=this.currentYear-event.target.value;
  }

  screenModes=["whiteScreen","yellowScreen","blueScreen"];
  mode=0;
  screenMode="";

  nextMode(event:any) {
    this.mode=this.mode+1;
    if (this.mode==3){
      this.mode=0
    }
    this.screenMode = this.screenModes[this.mode];
    console.log(this.screenMode);
    return this.screenMode;
  }

}
