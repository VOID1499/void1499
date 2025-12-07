export interface ProyectoLink  {
  href: string;
  icon: string;
};

export interface Proyecto {
  titulo: string;
  descripcion: string;
  links: ProyectoLink[];
  tags: string[];
};

