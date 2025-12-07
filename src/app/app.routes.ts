import { Routes } from '@angular/router';
import { Notas } from './notas/notas';
import { Nota } from './notas/nota/nota';
import { Indice } from './notas/indice/indice';
import { About } from './about/about';
import { Certificaciones } from './certificaciones/certificaciones';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "about",
        pathMatch: "full" // <- importante
    },
    {
        path: "about",
        component: About
    },
    {
        path: "certificaciones",
        component: Certificaciones
    },
    {
        path: "notas",
        component: Notas,
        children: [
            {
                path: "",
                component: Indice,
                pathMatch:"full"                
            },
            {
                path: ":slug",
                component: Nota
            },
        ]        
    },
];
