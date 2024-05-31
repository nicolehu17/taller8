import { Component } from '@angular/core';

@Component({
  selector: 'app-people-chart',
  standalone: true,
  imports: [],
  templateUrl: './people-chart.component.html',
  styleUrl: './people-chart.component.css'
})
export class PeopleChartComponent {
  people:any[] = [
    {"person": ["Gabriel", "Menendez", "Masculino", "Arquitectura", "501-1000", "35"]},
    {"person": ["Lucero", "Fernandez", "Femenino", "Ing. Civil", "1501-2000", "40"]},
    {"person": ["Mario", "Lopez", "Masculino", "Periodismo", "500-", "20"]},
    {"person": ["Mariela", "Sornoza", "Femenino", "Negocios", "2000+", "38"]},

  ]
}
