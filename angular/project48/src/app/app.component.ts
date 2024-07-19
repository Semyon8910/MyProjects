import { NgClass, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgClass, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project48';
  names = ["Odin", "Thor", "Freya", "Loki", "Baldr", "Freyr", "Heimdall", "Tyr", "Idunn", "Bragi", "Sif", "Skadi", "Njord", "Gefjon"];
  gender = ["boy","girl"]; 
  numberOfChildren = 10;
  whatGender(){
    let index = Math.floor(Math.random()*this.gender.length);
    return this.gender[index];
  }
  fillChildrenList(){
    let childrenList=[];
    for (let counter=0; counter<this.numberOfChildren; counter++){
      childrenList.push(this.whatGender());
    }
    return childrenList;
  }
}

