export const tags = ["Web Socket","VSCode","GitHub Actions","Docker","Strapi CMS","Supabase","Pruebas Unitarias","Jasmine/Karma","Jest"]



export const projects = [
	{
		title:"Gestion de gimnasio y lavanderia",
		description:
		`
        Herramienta para las gestion de reservas en lavanderia y gimnasio de condominio. Para coordinar el uso de espacio comun como gimnasio (maximo de personas y horario por personas).Uso de lavanderia con sistema de encolamiento o cola (en desarrollo).
		`,
		links:[
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
     {
		title:"Angular para CI/CD",
		description:
		`
		Proyecto practica para integracion y despliegue continuo en AWS EC2.
		`,
		links:[
			{
				href:"https://github.com/VOID1499/angular-ci-cd",
				icon:"github"
			},
            {
				href:"https://github.com/VOID1499/angular-ci-cd/blob/main/.github/workflows/deploy.yml",
				icon:"github"
			}
		],
        tags:["github","github actions","workflows","ci/cd","AWS","EC2"]

	},

      {
		title:"Chat Web API + WebSocket",
		description:
		`
        Servidor hibrido para autenticación y comunicación websocket para chat
		`,
		links:[
			{
				href:"https://github.com/VOID1499/chat-server",
				icon:"github"
			}
        
		],
        tags:["nodejs","express","api","json web token","web socket","cors","dotenv","zod","mongodb"]

	}
]


export const tools = [
    {
        icons:["angular","rxjs","javascript","typescript","html","css","tailwind","jasmine","karma","jest","figma","postman"],
        subtitle:"Frontend"
    },
    {
        icons:["node","express","mongodb","mysql","strapi"],
        subtitle:"Backend"
    },
     {
        icons:["aws","git","github","docker"],
        subtitle:"Cloud CI/CD"
    },

]