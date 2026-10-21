export interface NavItem {
	label: string;
	href: string;
}

export interface Service {
	id: string;
	icon: string;
	eyebrow: string;
	title: string;
	description: string;
	features: string[];
	price: string;
	priceNote: string;
	cta: string;
	href: string;
	featured?: boolean;
}

export interface Product {
	id: string;
	badge: string;
	badgeTone: 'pink' | 'success' | 'accent';
	name: string;
	tagline: string;
	capacity: string;
	area: string;
	energy: string;
	price: string;
	installment: string;
	features: string[];
	message: string;
	variant: 'compact' | 'standard' | 'large';
}

export interface Testimonial {
	name: string;
	location: string;
	quote: string;
	initials: string;
	tone: 'violet' | 'blue' | 'pink';
}

export interface Faq {
	question: string;
	answer: string;
}

export interface Benefit {
	icon: string;
	title: string;
	description: string;
}

export const site = {
	brand: 'arketipo',
	brandSuffix: 'clima',
	legalName: 'Arketipo Clima',
	tagline: 'Conforto em cada estação.',
	description:
		'Venda, instalação e manutenção de ar-condicionado split para residências em São Paulo. Técnicos certificados, garantia de 12 meses e orçamento grátis.',
	phoneDisplay: '(11) 4002-8922',
	phoneHref: 'tel:+551140028922',
	whatsappNumber: '5511999999999',
	whatsappDisplay: '(11) 99999-9999',
	email: 'contato@arketipoclima.com.br',
	address: {
		street: 'Rua Exemplo, 123',
		district: 'Vila Mariana',
		city: 'São Paulo',
		state: 'SP',
		zip: '04000-000',
	},
	hours: 'Seg a sáb, das 8h às 18h',
	serviceArea: 'São Paulo capital e Grande SP',
	instagram: 'https://instagram.com',
	facebook: 'https://facebook.com',
	seo: {
		title: 'Arketipo Clima | Ar-Condicionado Split em São Paulo',
		description:
			'Venda, instalação e manutenção de ar-condicionado split para residências em São Paulo. Técnicos certificados, garantia de 12 meses e orçamento grátis.',
		ogImage: '/og-arketipo.jpg',
	},
};

export const stats = {
	installations: '+2.500',
	rating: '4,9',
	warranty: '12 meses',
	years: '12 anos',
};

export const nav: NavItem[] = [
	{ label: 'Início', href: '#inicio' },
	{ label: 'Serviços', href: '#servicos' },
	{ label: 'Equipamentos', href: '#equipamentos' },
	{ label: 'Como funciona', href: '#como-funciona' },
	{ label: 'Depoimentos', href: '#depoimentos' },
	{ label: 'Dúvidas', href: '#duvidas' },
];

export const benefits: Benefit[] = [
	{
		icon: 'badge-check',
		title: 'Técnicos certificados',
		description: 'Instalação conforme as normas do fabricante, com acabamento limpo.',
	},
	{
		icon: 'shield-check',
		title: 'Garantia de 12 meses',
		description: 'Cobertura no serviço e suporte próximo sempre que você precisar.',
	},
	{
		icon: 'receipt',
		title: 'Preço transparente',
		description: 'Orçamento detalhado, sem taxas escondidas ou surpresas.',
	},
	{
		icon: 'headset',
		title: 'Atendimento ágil',
		description: 'Agenda flexível, resposta rápida e acompanhamento pós-venda.',
	},
];

export const aboutChecklist = [
	'Diagnóstico técnico sem custo e sem compromisso',
	'Equipamentos inverter de alta eficiência energética',
	'Instalação com acabamento discreto e organizado',
	'Planos de manutenção preventiva para o ano inteiro',
];

export const services: Service[] = [
	{
		id: 'venda',
		icon: 'snowflake',
		eyebrow: 'Venda',
		title: 'Splits inverter para o seu espaço',
		description:
			'Curadoria de modelos de 9.000 a 24.000 BTU, com orientação para escolher a capacidade certa para cada ambiente.',
		features: [
			'Modelos de alta eficiência',
			'Entrega e nota fiscal',
			'Parcelamento em até 12x',
		],
		price: 'A partir de R$ 2.290',
		priceNote: 'equipamento com opções de instalação',
		cta: 'Ver equipamentos',
		href: '#equipamentos',
	},
	{
		id: 'instalacao',
		icon: 'wrench',
		eyebrow: 'Instalação',
		title: 'Instalação profissional e limpa',
		description:
			'Equipe certificada, materiais inclusos e teste completo para o equipamento funcionar com máxima eficiência.',
		features: [
			'Equipe técnica certificada',
			'Teste de estanqueidade',
			'Garantia de 12 meses no serviço',
		],
		price: 'A partir de R$ 450',
		priceNote: 'valor final após avaliação técnica',
		cta: 'Solicitar orçamento',
		href: '#orcamento',
		featured: true,
	},
	{
		id: 'manutencao',
		icon: 'wind',
		eyebrow: 'Manutenção',
		title: 'Manutenção preventiva completa',
		description:
			'Higienização, checagem elétrica e de gás para manter o ar limpo, reduzir o consumo e prolongar a vida do split.',
		features: [
			'Higienização técnica',
			'Revisão elétrica e de gás',
			'Planos anuais com prioridade',
		],
		price: 'A partir de R$ 180',
		priceNote: 'por equipamento, conforme o modelo',
		cta: 'Agendar manutenção',
		href: '#orcamento',
	},
];

export const products: Product[] = [
	{
		id: 'split-9000',
		badge: 'Mais vendido',
		badgeTone: 'pink',
		name: 'Split Inverter 9.000 BTU',
		tagline: 'Ideal para quartos e home office',
		capacity: '9.000 BTU',
		area: 'até 15 m²',
		energy: 'A+++',
		price: 'R$ 2.290',
		installment: '12x de R$ 190,83',
		features: ['Frio e quente', 'Modo silencioso', 'Filtro antibactéria'],
		message: 'Olá! Tenho interesse no Split Inverter 9.000 BTU.',
		variant: 'compact',
	},
	{
		id: 'split-12000',
		badge: 'Silencioso',
		badgeTone: 'success',
		name: 'Split Inverter 12.000 BTU',
		tagline: 'Perfeito para salas e suítes',
		capacity: '12.000 BTU',
		area: 'até 20 m²',
		energy: 'A+++',
		price: 'R$ 2.690',
		installment: '12x de R$ 224,17',
		features: ['Frio e quente', 'Baixo consumo', 'Controle por app'],
		message: 'Olá! Tenho interesse no Split Inverter 12.000 BTU.',
		variant: 'standard',
	},
	{
		id: 'split-18000',
		badge: 'Alta performance',
		badgeTone: 'accent',
		name: 'Split Inverter 18.000 BTU',
		tagline: 'Para ambientes amplos e integrados',
		capacity: '18.000 BTU',
		area: 'até 30 m²',
		energy: 'A++',
		price: 'R$ 3.490',
		installment: '12x de R$ 290,83',
		features: ['Frio e quente', 'Distribuição uniforme', 'Alta eficiência'],
		message: 'Olá! Tenho interesse no Split Inverter 18.000 BTU.',
		variant: 'large',
	},
];

export const steps = [
	{
		number: '01',
		icon: 'message-circle',
		title: 'Conte o que precisa',
		description:
			'Preencha o formulário ou chame no WhatsApp. Entendemos o ambiente e a sua necessidade.',
	},
	{
		number: '02',
		icon: 'clipboard-check',
		title: 'Receba o orçamento',
		description:
			'Avaliamos o espaço e enviamos uma proposta transparente com equipamento e instalação.',
	},
	{
		number: '03',
		icon: 'sparkles',
		title: 'Agende e aproveite',
		description:
			'Instalação limpa, teste completo e orientação de uso para você só pensar no conforto.',
	},
];

export const testimonials: Testimonial[] = [
	{
		name: 'Mariana S.',
		location: 'Vila Mariana',
		quote:
			'A instalação foi impecável: rápida, limpa e o técnico explicou tudo sobre a manutenção. O quarto ficou outro.',
		initials: 'MS',
		tone: 'violet',
	},
	{
		name: 'Rafael M.',
		location: 'Moema',
		quote:
			'Comprei o split e contratei a instalação. Recebi o orçamento no mesmo dia e cumpriram o prazo direitinho.',
		initials: 'RM',
		tone: 'blue',
	},
	{
		name: 'Camila R.',
		location: 'Tatuapé',
		quote:
			'Faço a manutenção preventiva há dois anos. Atendimento pontual, educado e sem enrolação.',
		initials: 'CR',
		tone: 'pink',
	},
];

export const faqs: Faq[] = [
	{
		question: 'Quanto custa instalar um ar-condicionado split?',
		answer:
			'O valor depende da infraestrutura do local, da distância entre as unidades, dos suportes e do acabamento. Instalações simples começam em R$ 450, mas o orçamento final é feito após uma avaliação técnica gratuita.',
	},
	{
		question: 'Vocês vendem e instalam o equipamento?',
		answer:
			'Sim. Trabalhamos com splits inverter de alta eficiência e cuidamos de tudo: orientação na escolha, venda, entrega e instalação. Assim você tem um único responsável pelo resultado.',
	},
	{
		question: 'Qual é a garantia do serviço?',
		answer:
			'Todos os serviços de instalação têm garantia de 12 meses, além da garantia do fabricante do equipamento. A manutenção preventiva também é registrada para manter seu histórico em dia.',
	},
	{
		question: 'Com que frequência devo fazer a manutenção?',
		answer:
			'O ideal é a cada 6 a 12 meses, dependendo do uso. Ambientes com pets, poeira ou muita circulação de pessoas pedem manutenção a cada 6 meses para preservar a qualidade do ar e o desempenho.',
	},
	{
		question: 'Qual região vocês atendem?',
		answer:
			'Atendemos São Paulo capital e a Grande São Paulo. Envie seu bairro pelo formulário ou WhatsApp e confirmamos a disponibilidade para a sua região.',
	},
	{
		question: 'Split inverter realmente economiza energia?',
		answer:
			'Sim, principalmente em uso prolongado. O inverter ajusta a potência conforme a necessidade do ambiente. O dimensionamento correto e a manutenção em dia são essenciais para essa economia acontecer.',
	},
];

export function whatsappUrl(message: string): string {
	return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsappUrl = whatsappUrl(
	'Olá! Vim pelo site da Arketipo e gostaria de solicitar um orçamento para ar-condicionado split.',
);

export const serviceOptions = ['Instalação', 'Manutenção', 'Compra de split'];
