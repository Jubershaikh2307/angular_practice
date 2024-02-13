import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = "Juber";
  content="";
  getValue=(e:string) => {
    console.log(e)
    this.content=e
  };
  getData = () => {
    console.log({"1":this.content,name})
  }
}
