import { Component, OnInit } from '@angular/core';
import  data from "./proyectos.json"
import { Proyecto } from './interfaces';


@Component({
  selector: 'app-proyectos',
  imports: [],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css',
})
export class Proyectos implements OnInit {

  proyectos:Proyecto[] = []

  ngOnInit(): void {
    this.proyectos = data.proyectos;
  }


}
