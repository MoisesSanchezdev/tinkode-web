export type IconName =
	| "api"
	| "automation"
	| "briefcase"
	| "calendar"
	| "clinic"
	| "coffee"
	| "control"
	| "customer"
	| "database"
	| "event"
	| "fitness"
	| "form"
	| "integration"
	| "interface"
	| "inventory"
	| "message"
	| "nfc"
	| "report"
	| "shield"
	| "software"
	| "store"
	| "users"
	| "website"
	| "whatsapp"
	| "workflow";

export const benefits = [
	{
		code: "01",
		title: "Estrategia antes que tecnología",
		description: "Primero entendemos el negocio, después definimos qué vale la pena construir.",
	},
	{
		code: "02",
		title: "Experiencias responsive",
		description: "Diseñadas para funcionar con claridad desde el celular hasta el escritorio.",
	},
	{
		code: "03",
		title: "Automatización con propósito",
		description: "Conectamos tareas y datos cuando hacerlo reduce fricción de verdad.",
	},
	{
		code: "04",
		title: "Acompañamiento cercano",
		description: "Decisiones claras, validación directa y evolución ordenada de la solución.",
	},
] as const;

export const problems = [
	{
		number: "01",
		title: "Todo depende de tareas manuales",
		description: "Copiar información, confirmar solicitudes y repetir seguimientos consume tiempo que podría dedicarse al negocio.",
		icon: "automation",
	},
	{
		number: "02",
		title: "La información está dispersa",
		description: "Clientes, reservas, inventario y documentos viven en chats, archivos y hojas que no conversan entre sí.",
		icon: "database",
	},
	{
		number: "03",
		title: "Las respuestas tardan demasiado",
		description: "Tus clientes no encuentran rápido lo que necesitan y el equipo termina resolviendo las mismas dudas una y otra vez.",
		icon: "message",
	},
	{
		number: "04",
		title: "Tu presencia digital no genera confianza",
		description: "Una experiencia confusa, lenta o incompleta hace más difícil explicar el valor del negocio y recibir nuevas oportunidades.",
		icon: "website",
	},
	{
		number: "05",
		title: "Tus herramientas no están conectadas",
		description: "La misma información se registra varias veces y cada canal muestra solo una parte de la operación.",
		icon: "integration",
	},
	{
		number: "06",
		title: "Crecer complica la operación",
		description: "Más clientes y más movimiento exponen procesos que antes podían resolverse de forma improvisada.",
		icon: "workflow",
	},
] as const;

export const solutions = [
	{
		code: "S01",
		title: "Presencia digital",
		problem: "Tu oferta no se entiende o no transmite confianza en internet.",
		benefit: "Presenta el negocio con claridad y facilita que las personas den el siguiente paso.",
		type: "Landing pages, sitios empresariales y experiencias web.",
		icon: "website",
	},
	{
		code: "S02",
		title: "Automatización de procesos",
		problem: "El equipo invierte tiempo en tareas repetitivas y seguimientos manuales.",
		benefit: "Reduce pasos innecesarios y mantiene los flujos operando con mayor continuidad.",
		type: "Formularios conectados, notificaciones y flujos automáticos.",
		icon: "automation",
	},
	{
		code: "S03",
		title: "Sistemas para negocios",
		problem: "La operación depende de archivos aislados o herramientas que no encajan.",
		benefit: "Centraliza información y permite gestionar el trabajo con más orden.",
		type: "Inventarios, agendamiento, bases de datos y sistemas internos.",
		icon: "interface",
	},
	{
		code: "S04",
		title: "Integraciones y WhatsApp",
		problem: "Los canales funcionan separados y el equipo termina copiando datos.",
		benefit: "Conecta conversaciones, formularios y herramientas para reducir duplicación.",
		type: "Integraciones autorizadas, APIs y flujos asociados a WhatsApp.",
		icon: "whatsapp",
	},
	{
		code: "S05",
		title: "Datos y dashboards",
		problem: "La información existe, pero consultarla o entenderla toma demasiado tiempo.",
		benefit: "Organiza indicadores y reportes para tomar decisiones con mayor contexto.",
		type: "Paneles, reportes, bases centralizadas y vistas operativas.",
		icon: "report",
	},
	{
		code: "S06",
		title: "Soluciones personalizadas y NFC",
		problem: "Una necesidad específica no cabe en una plantilla o producto estándar.",
		benefit: "Diseña una experiencia alrededor del proceso real y su forma de crecer.",
		type: "Software a medida, NFC y conexión entre experiencias físicas y digitales.",
		icon: "nfc",
	},
] as const;

export const projects = [
	{
		id: "robot-explota-globos",
		name: "Robot Explota Globos UTP",
		status: "En preparación y pruebas",
		category: "Sistema de gestión de competencia",
		situation: "Una competencia universitaria necesita organizar participantes, grupos, fases, batallas y correcciones operativas durante el evento.",
		solution: "Una plataforma web con áreas públicas y administrativas para controlar el avance y aplicar ajustes sin perder el progreso.",
		benefit: "Demuestra capacidad para modelar reglas de negocio, administrar información y validar un sistema en un contexto real.",
		technologies: ["Python", "Django", "JavaScript", "Bases de datos"],
		visual: "competition",
		note: "Proyecto para la Universidad Tecnológica de Pereira. Capturas y demostración disponibles próximamente.",
	},
	{
		id: "lpt",
		name: "LPT",
		status: "Proyecto desarrollado",
		category: "Experiencia web corporativa",
		situation: "Una empresa real necesitaba organizar sus líneas de servicio y presentarlas dentro de una presencia digital clara.",
		solution: "Un sitio responsive con arquitectura de información, navegación estructurada y canales de contacto.",
		benefit: "Demuestra capacidad para convertir información empresarial en una experiencia web comprensible y profesional.",
		technologies: ["Django", "HTML", "CSS", "JavaScript"],
		visual: "website",
		note: "Desarrollado por uno de los fundadores antes de la consolidación de TinKode. No publicado y con código privado.",
	},
	{
		id: "nfc",
		name: "Experiencias NFC para negocios",
		status: "Proyecto en desarrollo",
		category: "Conexión físico-digital",
		situation: "Muchos puntos de contacto físicos obligan a las personas a buscar información o completar procesos poco directos.",
		solution: "Experiencias que abren contenido y acciones desde etiquetas, tarjetas u objetos con NFC.",
		benefit: "Explora una transición más simple entre un espacio físico y una experiencia digital actualizable.",
		technologies: ["NFC", "Experiencias web", "Contenido centralizado"],
		visual: "nfc",
		note: "Concepto y desarrollo en evolución. No representa clientes, métricas ni resultados comerciales confirmados.",
	},
] as const;

export const processSteps = [
	{
		number: "01",
		title: "Entendemos el negocio",
		description: "Conversamos sobre el problema, las personas involucradas y la forma actual de trabajar.",
		deliverable: "Necesidad, contexto y prioridades compartidas.",
	},
	{
		number: "02",
		title: "Diseñamos la solución",
		description: "Ordenamos el recorrido, la información y las decisiones antes de construir.",
		deliverable: "Alcance y experiencia definidos con claridad.",
	},
	{
		number: "03",
		title: "Construimos y validamos",
		description: "Desarrollamos por etapas y revisamos que cada parte responda a la necesidad real.",
		deliverable: "Avances verificables y ajustes con contexto.",
	},
	{
		number: "04",
		title: "Lanzamos y acompañamos",
		description: "Preparamos la salida, revisamos la experiencia y dejamos una base que pueda evolucionar.",
		deliverable: "Solución publicada y siguientes pasos ordenados.",
	},
] as const;

export const founders = [
	{
		initials: "MS",
		name: "Moisés Sánchez Naranjo",
		role: "Fundador",
		study: "Estudiante de Ingeniería Electrónica",
		institution: "Universidad Tecnológica de Pereira",
		description: "Aporta pensamiento de ingeniería y una mirada orientada a conectar software, automatización e integración entre sistemas.",
		accent: "green",
	},
	{
		initials: "VL",
		name: "Valeria López Chávez",
		role: "Cofundadora",
		study: "Estudiante de Ingeniería de Sistemas",
		institution: "Universidad Tecnológica de Pereira",
		description: "Aporta estructura y una visión enfocada en construir software claro, útil y coherente con la experiencia digital.",
		accent: "blue",
	},
] as const;

export const faqs = [
	{
		question: "¿Qué tipo de negocios atiende TinKode?",
		answer: "Trabajamos con restaurantes, cafeterías, bares, clínicas, gimnasios, tiendas, pymes, profesionales y emprendimientos que necesitan ordenar información, mejorar procesos o construir una experiencia digital útil.",
	},
	{
		question: "¿TinKode solo desarrolla páginas web?",
		answer: "No. Las páginas son una de las posibles soluciones. También diseñamos sistemas administrativos, automatizaciones, integraciones, bases de datos, dashboards, experiencias NFC y software personalizado.",
	},
	{
		question: "¿Cuánto tarda un proyecto?",
		answer: "Depende del alcance, las integraciones y el nivel de validación necesario. Después de entender la necesidad definimos un plan de trabajo realista; no usamos un tiempo genérico para todos los proyectos.",
	},
	{
		question: "¿Cómo se define el precio?",
		answer: "Se define según el problema, el alcance, las funcionalidades, las integraciones y el acompañamiento necesario. La primera conversación sirve para ordenar esas variables antes de preparar una propuesta.",
	},
	{
		question: "¿Pueden integrar WhatsApp?",
		answer: "Sí, cuando el servicio, la cuenta y los accesos autorizados lo permiten. Podemos conectar conversaciones, formularios o notificaciones con otros procesos del negocio según el alcance acordado.",
	},
	{
		question: "¿Pueden automatizar procesos manuales?",
		answer: "Sí. Primero revisamos el flujo real para identificar qué tareas se repiten, qué información interviene y qué pasos conviene automatizar sin añadir complejidad innecesaria.",
	},
	{
		question: "¿La solución puede crecer después?",
		answer: "Ese es uno de los criterios de diseño. Definimos una base ordenada para que nuevas funciones, datos o integraciones puedan incorporarse cuando el negocio realmente las necesite.",
	},
	{
		question: "¿Ofrecen acompañamiento?",
		answer: "Sí. El acompañamiento se define según cada proyecto y puede incluir validación, preparación del lanzamiento, ajustes acordados y orientación para los siguientes pasos.",
	},
] as const;

export const audiences = [
	{ label: "Restaurantes y cafeterías", icon: "coffee" },
	{ label: "Bares y eventos", icon: "event" },
	{ label: "Clínicas y profesionales", icon: "clinic" },
	{ label: "Gimnasios", icon: "fitness" },
	{ label: "Tiendas", icon: "store" },
	{ label: "Pymes y emprendimientos", icon: "briefcase" },
] as const;
