import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import data from "../notas.json"
import { Nav } from '../../shared/nav/nav';

@Component({
  selector: 'app-nota',
  imports: [MarkdownModule,Nav],
  templateUrl: './nota.html',
  styleUrl: './nota.css',
})
export class Nota implements OnInit {


  filePath = ""
  name = ""
  
  private route:ActivatedRoute = inject(ActivatedRoute);



   ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        const slug = params.get("slug"); 
        if (slug) {
          const node = this.findNodeBySlug(data, slug);
          
          if (node) {
            this.filePath = node.filepath!;
            this.name = node.name;
          } else {
            console.warn("Nota no encontrada para slug:", slug);
          }
        }
      });
    }


    // Función recursiva
  findNodeBySlug(nodes: any[], slug: string): any | undefined {
    for (const node of nodes) {
      if (node.slug === slug) return node;
      if (node.children) {
        const found = this.findNodeBySlug(node.children, slug);
        if (found) return found;
      }
    }
    return undefined;
  }

  }
