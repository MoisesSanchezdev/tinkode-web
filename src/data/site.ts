export const capabilities = [
	{
		title: "Presencia digital",
		description: "Páginas claras que presentan tu negocio y facilitan el contacto.",
		icon: "website",
	},
	{
		title: "Sistemas para negocios",
		description: "Herramientas que organizan información, clientes, pedidos o procesos.",
		icon: "interface",
	},
	{
		title: "Automatización",
		description: "Flujos que reducen tareas repetitivas y conectan mejor tu operación.",
		icon: "automation",
	},
] as const;

export const solutionCategories = [
	{
		title: "Presencia digital",
		description: "Sitios y experiencias web que explican tu oferta con claridad y convierten visitas en conversaciones.",
		scope: "Landing pages, sitios empresariales, menús digitales y experiencias web.",
		icon: "website",
	},
	{
		title: "Sistemas para negocios",
		description: "Herramientas a la medida para centralizar información y operar con menos fricción.",
		scope: "Inventarios, pedidos, agendamiento, bases de datos, paneles e integraciones.",
		icon: "interface",
	},
	{
		title: "Automatización",
		description: "Flujos que conectan tareas, datos y canales cuando hacerlo ahorra pasos de verdad.",
		scope: "Formularios, notificaciones, reportes, APIs y experiencias NFC.",
		icon: "automation",
	},
] as const;

export const projects = [
	{
		id: "robot-explota-globos",
		name: "Robot Explota Globos UTP",
		status: "En preparación y pruebas",
		category: "Sistema de gestión de competencia",
		summary: "Plataforma web para organizar participantes, fases, batallas y ajustes durante una competencia universitaria.",
		technologies: ["Python", "Django", "JavaScript", "Bases de datos"],
		visual: "competition",
		note: "Proyecto para la Universidad Tecnológica de Pereira. Capturas y demostración disponibles próximamente.",
	},
	{
		id: "lpt",
		name: "LPT",
		status: "Proyecto desarrollado",
		category: "Experiencia web corporativa",
		summary: "Sitio responsive que organiza servicios empresariales y facilita el acceso a sus canales de contacto.",
		technologies: ["Django", "HTML", "CSS", "JavaScript"],
		visual: "website",
		note: "Desarrollado por uno de los fundadores antes de TinKode. No publicado y con código privado.",
	},
	{
		id: "nfc",
		name: "Experiencias NFC para negocios",
		status: "Proyecto en desarrollo",
		category: "Conexión físico-digital",
		summary: "Experiencias que conectan etiquetas, tarjetas u objetos con contenido y acciones digitales.",
		technologies: ["NFC", "Experiencias web", "Contenido centralizado"],
		visual: "nfc",
		note: "Concepto en evolución; no representa clientes, métricas ni resultados comerciales confirmados.",
	},
] as const;

export const processSteps = [
	{
		number: "01",
		title: "Entender",
		description: "Aclaramos el problema, el contexto y las prioridades del negocio.",
	},
	{
		number: "02",
		title: "Diseñar",
		description: "Ordenamos el recorrido, la información y el alcance de la solución.",
	},
	{
		number: "03",
		title: "Construir",
		description: "Desarrollamos por etapas y validamos las decisiones importantes.",
	},
	{
		number: "04",
		title: "Evolucionar",
		description: "Publicamos una base clara y definimos los siguientes pasos.",
	},
] as const;

export const founders = [
	{
		initials: "MS",
		name: "Moisés Sánchez Naranjo",
		role: "Fundador",
		study: "Estudiante de Ingeniería Electrónica",
		institution: "Universidad Tecnológica de Pereira",
		description: "Conecta software, automatización e integración de sistemas desde una mirada de ingeniería.",
		accent: "green",
	},
	{
		initials: "VL",
		name: "Valeria López Chávez",
		role: "Cofundadora",
		study: "Estudiante de Ingeniería de Sistemas",
		institution: "Universidad Tecnológica de Pereira",
		description: "Aporta estructura y una visión enfocada en software claro, útil y coherente con la experiencia digital.",
		accent: "blue",
	},
] as const;

export const restaurantPlans = [
	{
		id: "basico",
		name: "Básico",
		price: "$425.000 COP",
		description: "Para tener presencia digital y mostrar el menú.",
		highlights: ["Web responsive", "Menú digital", "Contacto directo"],
		includesLabel: "Incluye",
		includes: [
			"Página web responsive para celular y computador.",
			"Diseño adaptado a la identidad del restaurante.",
			"Una página de inicio.",
			"Información del restaurante.",
			"Menú digital.",
			"Categorías de productos.",
			"Nombre, fotografía, descripción y precio de cada producto.",
			"Horarios.",
			"Ubicación.",
			"Botón general de WhatsApp.",
			"Redes sociales.",
		],
		objective: "Que el cliente pueda conocer el restaurante, consultar el menú y contactarlo.",
		cta: "Elegir Básico",
		accent: "basic",
	},
	{
		id: "intermedio",
		name: "Intermedio",
		badge: "Recomendado",
		price: "$810.000 COP",
		description: "La opción recomendada para la mayoría de restaurantes.",
		highlights: ["Menú interactivo", "Pedidos por producto", "Un mes de ajustes"],
		includesLabel: "Todo lo del plan Básico, más",
		includes: [
			"Página de inicio y páginas internas.",
			"Menú interactivo.",
			"Galería de hasta cinco productos.",
			"Productos destacados.",
			"Sección de promociones actualizable mediante mantenimiento.",
			"Múltiples ubicaciones.",
			"WhatsApp independiente por sede.",
			"Analítica básica del número de visitantes.",
			"Botón ‘Pedir por WhatsApp’ en cada producto.",
			"Animaciones e interacciones básicas.",
			"Diseño con mayor nivel de personalización.",
			"Un mes de ajustes posteriores a la entrega.",
		],
		objective: "Convertir la página en una herramienta que lleve al cliente directamente desde el producto hasta WhatsApp.",
		cta: "Elegir Intermedio",
		accent: "recommended",
	},
	{
		id: "avanzado",
		name: "Avanzado",
		price: "$1.087.000 COP",
		description: "Para restaurantes que quieren una experiencia digital más completa.",
		highlights: ["Diseño avanzado", "Analítica de conversión", "Dos meses de soporte"],
		includesLabel: "Todo lo del plan Intermedio, más",
		includes: [
			"Diseño web avanzado con secciones personalizadas al gusto del cliente.",
			"Animaciones avanzadas.",
			"Menú con presentación más dinámica.",
			"Galería ampliada de hasta nueve productos.",
			"Sección especial para promociones.",
			"WhatsApp personalizado según el producto.",
			"Botones de acción ubicados estratégicamente para facilitar el contacto o la compra.",
			"Analítica sobre el menú, visitas a la ubicación y clics en WhatsApp.",
			"Dos meses de soporte y pequeños ajustes.",
		],
		objective: "Ofrecer una experiencia digital más completa y enfocada en conversión.",
		cta: "Elegir Avanzado",
		accent: "premium",
	},
] as const;

export const restaurantComplements = [
	"SEO básico",
	"Plantillas para reseñas",
	"Inventario de productos con stickers",
] as const;
