import { Component, OnInit } from '@angular/core';
import data from "../notas.json";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Nav } from '../../shared/nav/nav';


interface MarkdownNode {
  name: string;
  slug?: string;
  filepath?: string;
  children?: MarkdownNode[];
}

@Component({
  selector: 'app-indice',
  imports: [CommonModule,RouterLink,Nav],
  templateUrl: './indice.html',
  styleUrl: './indice.css',
})
export class Indice implements OnInit{


  nodes: MarkdownNode[] = [];


  ngOnInit(): void {
    
    this.nodes = data;
  }

}
