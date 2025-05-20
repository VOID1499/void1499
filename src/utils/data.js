export const tags = ["Web Socket","VSCode","GitHub Actions","HTTP","Interfaces","Inyección de dependecias","MVC","Interfaces","POO","Strapi CMS","Postman"]



export const projects = [
	{
		title:"Control de acceso",
		description:
		`
        Control de acceso para seguridad en instalaciones autenticación de personal con scaneo QR de cedula o generado automatico.Busqueda por rut.
        Almacenamiento local para funcionalidad sin conexión.
		`,
		links:[
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
		Proyecto playground para integracion y despliegue continuo en AWS EC2.
        Variables de entorno para conexion SSH.
        Workflow Deploy on push main branch -> linter build -> deploy
        	
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
		title:"Chat API / WebSocket Server  ",
		description:
		`
        HTPP REST API y websocket server para chat y servir SPA.Autenticacion Jsonwebtoken
		`,
		links:[
			{
				href:"https://github.com/VOID1499/chat-server",
				icon:"github"
			}
        
		],
        tags:["nodejs","express","api","json web token","web socket","cors","dotenv"]

	}
]


export const tools = [
    {
        icons:["angular","rxjs","javascript","typescript","html","css","tailwind","figma","postman"],
        subtitle:"Frontend"
    },
    {
        icons:["node","express","mongodb","mysql","strapi"],
        subtitle:"Backend"
    },
     {
        icons:["aws","git","github"],
        subtitle:"Cloud CI/CD"
    },

]