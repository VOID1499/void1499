export const tags = ["Web Socket","VSCode","GitHub Actions","Docker","Strapi CMS","Supabase","MySQL","PostgreSQL","Pruebas Unitarias","Jasmine/Karma","Jest"]



export const projects = [

		{
		title:"Michisytarot.cl Tienda Online",
		description:
		`
		Proyecto backend sobre Strapi CMS - Integracion con sercios de terceros como Khipu  y AWS Simple Email Service. 
		Frontend Angular Server-sider rendering optimizado para SEO .Servicio para generar Meta Tags y Sitemaps dinamicos .Servicio para añadir tag Google Analytics.
		Despliegue sobre arquitectura de contenedores Docker. 
		`,
		links:[

			{
				href:"https://michisytarot.cl",
				icon:"external-link"
			}
	
		],
        tags:["Strapi CMS","Angular SSR","Khipu API","Docker","PostgreSQL","TailwindCss"]

	},
	{
		title:"Gestion de gimnasio y lavanderia",
		description:
		`
        Herramienta para las gestion de reservas en lavanderia y gimnasio de condominio. Para coordinar el uso de espacio comun como gimnasio (maximo de personas y horario por personas).Uso de lavanderia con sistema de encolamiento o cola (en desarrollo).
		`,
		links:[
				{
				href:"https://github.com/VOID1499/tools.git",
				icon:"github"
			},
			{
				href:"https://void1499.github.io/tools/",
				icon:"external-link"
			}
	
		],
        tags:["Supabase","DaisyUi","momentjs","TailwindCss"]

	},
	{
		title:"Control de acceso PWA",
		description:
		`
        Control de acceso para seguridad en instalaciones autenticación de personal con scaneo QR de cedula o generado automatico.Busqueda por rut.
        Almacenamiento local para funcionalidad sin conexión.
		`,
		links:[
				{
				href:"https://main.d12qpgoedwt822.amplifyapp.com/",
				icon:"external-link"
			},
			{
				href:"https://github.com/VOID1499/access-control",
				icon:"github"
			}
	
		],
        tags:["angularx-qrcode","html5-qrcode","momentjs","pwa","index db"]

	},
    {
		title:"Control de acceso API Strapi CMS",
		description:
		`
        Modelar estrucutura de datos para las colecciones y consumo de endpoinst API REST JSON.
        Asignar roles y permisos para la informacion disponible de cada usurio.
		`,
		links:[
			{
				href:"https://github.com/VOID1499/access-control-api",
				icon:"github"
			}
		],
        tags:["strapi cms","strapi cloud","postgres sql","api rest","postman"]

	},
    
]


export const tools = [
    {
        icons:["angular","rxjs","javascript","typescript","html","css","tailwind","jasmine","karma","jest","figma","postman"],
        subtitle:"Frontend"
    },
    {
        icons:["node","express","mongodb","strapi","mysql","postgresql"],
        subtitle:"Backend"
    },
     {
        icons:["aws","git","github","docker"],
        subtitle:"Cloud CI/CD"
    },

]