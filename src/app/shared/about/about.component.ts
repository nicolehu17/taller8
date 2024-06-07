import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  proyecto:any[] = [
    {"proyecto": ["Samborondon", "100", "$10000", "5"]},
    {"proyecto": ["Guayaquil", "200", "$4000", "2"]},
    {"proyecto": ["Loja", "300", "$3500", "3"]},
    {"proyecto": ["Quito", "400", "$2900", "2"]},
  ]
}
