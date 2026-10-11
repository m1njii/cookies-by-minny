export interface Cookie {
	id: string;
	name: string;
	description: string;
	price: number;
	category: 'Clásicas' | 'Rellenas' | 'Chocolate';
	tag?: string;
	dough: string;
	chips: string;
	chips2?: string;
}

export const categories = ['Todas', 'Clásicas', 'Rellenas', 'Chocolate'] as const;

export const cookies: Cookie[] = [
	{
		id: 'choco-chip',
		name: 'Choco Chip Clásica',
		description: 'Masa de vainilla con chispas de chocolate semiamargo y un toque de sal marina.',
		price: 6.5,
		category: 'Clásicas',
		tag: 'Favorita',
		dough: '#e2a85f',
		chips: '#4a2a1a',
	},
	{
		id: 'red-velvet',
		name: 'Red Velvet & Cream Cheese',
		description: 'Masa suave de cacao rojo rellena de crema de queso dulce casera.',
		price: 8,
		category: 'Rellenas',
		tag: 'Especial',
		dough: '#b3293f',
		chips: '#fff3e0',
		chips2: '#fff3e0',
	},
	{
		id: 'double-choco',
		name: 'Double Chocolate Fudge',
		description: 'Cacao al 70% con trozos de chocolate blanco. Para amantes del chocolate intenso.',
		price: 7.5,
		category: 'Chocolate',
		tag: 'Novedad',
		dough: '#5a3425',
		chips: '#f7ead2',
		chips2: '#2e180f',
	},
	{
		id: 'nutella',
		name: 'Nutella Stuffed',
		description: 'Galleta horneada con un centro abundante de Nutella cremosa derretida.',
		price: 8.5,
		category: 'Rellenas',
		tag: 'Top ventas',
		dough: '#d6954d',
		chips: '#5b3320',
		chips2: '#3a1f12',
	},
	{
		id: 'avena-pasas',
		name: 'Avena & Pasas',
		description: 'Avena integral, canela y pasas jugosas. Suave y con textura casera.',
		price: 6,
		category: 'Clásicas',
		dough: '#c9a06a',
		chips: '#6a2f4a',
		chips2: '#8a6a3c',
	},
	{
		id: 'smores',
		name: "S'mores",
		description: 'Base de galleta graham con chocolate de leche y malvavisco tostado.',
		price: 8,
		category: 'Rellenas',
		dough: '#cf9a5c',
		chips: '#fff4e6',
		chips2: '#45261a',
	},
	{
		id: 'oreo',
		name: 'Cookies & Cream',
		description: 'Masa de vainilla cargada de trozos de galleta Oreo y chocolate blanco.',
		price: 7.5,
		category: 'Chocolate',
		dough: '#efe0c4',
		chips: '#241711',
		chips2: '#f9f3e8',
	},
	{
		id: 'limon',
		name: 'Limón & Arándanos',
		description: 'Fresca y cítrica, con ralladura de limón y arándanos rojos.',
		price: 7,
		category: 'Clásicas',
		tag: 'Fresca',
		dough: '#f1d98c',
		chips: '#b0354f',
		chips2: '#ffffff',
	},
];

export const formatPrice = (n: number) => `S/ ${n.toFixed(2)}`;
/**
 * Packs disponibles. discount es el % de descuento sobre la suma de los precios
 * individuales de las galletas elegidas (así un pack mixto respeta el precio de cada sabor).
 * Ajusta estos valores según tus costos de producción.
 */
export const packs = [
	{ size: 3, discount: 0.1, label: 'Pack de 3' },
	{ size: 5, discount: 0.15, label: 'Pack de 5' },
];

export const universities = ['UPN (Chorrillos)', 'Universidad Autónoma'];

export const whatsappPhone = '51993446468';

/** Máximo de galletas por pedido cuando se compra por unidad (sin descuento). */
export const unitMax = 12;
