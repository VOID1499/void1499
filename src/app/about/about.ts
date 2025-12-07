import { Component } from '@angular/core';
import { Nav } from '../shared/nav/nav';
import { Proyectos } from '../proyectos/proyectos';

@Component({
  selector: 'app-about',
  imports: [Nav,Proyectos],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
