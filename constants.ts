import { MenuCategory, OperatingHours } from './types';

export const WHATSAPP_NUMBER = "244923000000"; // Placeholder number, user should update
export const WHATSAPP_MESSAGE = "Olá, estou a ver o menu do Wing’s e gostaria de fazer um pedido.";

export const HOURS: OperatingHours[] = [
  { day: "Terça-feira", time: "08h30 – 22h00" },
  { day: "Quarta-feira", time: "08h30 – 22h00" },
  { day: "Quinta-feira", time: "08h30 – 23h00" },
  { day: "Sexta-feira", time: "08h30 – 23h00" },
  { day: "Sábado", time: "08h30 – 23h00" },
  { day: "Domingo", time: "08h30 – 21h00" },
];

export const MENU_DATA: MenuCategory[] = [
  {
    id: "entradas",
    title: "Entradas",
    backgroundImage: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1920&auto=format&fit=crop", // Dark Steak/Appetizer background
    items: [
      { 
        name: "Wings Barbecue", 
        price: "7.500 Kz", 
        description: "Asinhas de frango suculentas cobertas com molho barbecue caseiro.",
        image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=600&auto=format&fit=crop"
      },
      { 
        name: "Wing’s Sweet Chilli", 
        price: "7.500 Kz",
        image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?q=80&w=600&auto=format&fit=crop"
      },
      { name: "Wing’s By Wings", price: "7.500 Kz" },
      { name: "Wing’s Asian", price: "7.500 Kz" },
      { 
        name: "Bife Tártaro", 
        price: "16.000 Kz",
        image: "https://images.unsplash.com/photo-1626804475297-411dbe631e85?q=80&w=600&auto=format&fit=crop"
      },
      { name: "Pipocas de Carne", price: "9.000 Kz" },
      { name: "Ceviche Peruano de Garoupa", price: "14.000 Kz" },
      { 
        name: "Tacos de Frango", 
        price: "12.000 Kz",
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=600&auto=format&fit=crop"
      },
      { name: "French Fries", price: "6.000 Kz" },
      { 
        name: "Nachos Mexicanos", 
        price: "12.000 Kz",
        image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=600&auto=format&fit=crop"
      },
      { name: "Tiras de Frango", price: "10.000 Kz" },
      { name: "Bao de Porco", price: "12.000 Kz" },
      { name: "Bao de Gambas", price: "14.000 Kz" },
      { name: "Giozas de Porco", price: "11.000 Kz" },
      { name: "Giozas de Camarão", price: "12.000 Kz" },
      { name: "Tempura de Gambas", price: "14.000 Kz" },
      { name: "Spring Rolls de Camarão", price: "12.000 Kz" },
      { name: "Ovos Rotos", price: "12.000 Kz" },
      { name: "Chouriço Assado", price: "6.000 Kz" },
      { name: "Pica-Pau", price: "8.500 Kz" },
      { name: "Choco Frito", price: "14.000 Kz" },
      { name: "Camarão ao Alho", price: "14.000 Kz" },
      { name: "Pão de Alho", price: "5.000 Kz" },
      { name: "Prego no Pão", price: "6.500 Kz" },
      { name: "Prego no Prato", price: "9.000 Kz" },
      { 
        name: "Hambúrguer Wing’s c/ Batata", 
        price: "10.500 Kz",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop"
      },
      { name: "Hambúrguer Wing’s com Queijo", price: "12.500 Kz" },
      { name: "Sopa do Dia", price: "3.500 Kz" },
    ]
  },
  {
    id: "saladas",
    title: "Saladas",
    backgroundImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1920&auto=format&fit=crop", // Fresh salad dark bg
    items: [
      { 
        name: "Salada Caesar", 
        price: "12.000 Kz",
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=600&auto=format&fit=crop"
      },
      { name: "Salada de Camarão", price: "12.000 Kz" },
      { name: "Salada Wing’s", price: "3.500 Kz" },
      { name: "Salada Vegetariana", price: "8.000 Kz" },
      { name: "Salada de Frutas", price: "5.500 Kz" },
    ]
  },
  {
    id: "massas",
    title: "Massas e Arroz",
    backgroundImage: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1920&auto=format&fit=crop", // Pasta dark bg
    items: [
      { 
        name: "Massa à Bolonhesa", 
        price: "16.000 Kz",
        image: "https://images.unsplash.com/photo-1626844131082-256783844137?q=80&w=600&auto=format&fit=crop"
      },
      { name: "Massa Carbonara", price: "16.000 Kz" },
      { name: "Linguine Preto Surprise", price: "19.000 Kz" },
      { 
        name: "Arroz de Marisco", 
        price: "19.000 Kz",
        description: "Disponível para 1 pessoa (19.000 Kz) ou 2 pessoas (35.000 Kz).",
        image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?q=80&w=600&auto=format&fit=crop"
      },
    ]
  },
  {
    id: "carnes",
    title: "Carnes",
    backgroundImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1920&auto=format&fit=crop", // Meat/Grill background
    items: [
      { 
        name: "Bife de Lombo 200g", 
        price: "22.000 Kz",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=600&auto=format&fit=crop"
      },
      { name: "Bife da Vazia", price: "18.000 Kz" },
      { name: "Surf and Turf", price: "28.000 Kz" },
      { 
        name: "T-bone", 
        price: "24.000 Kz",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop"
      },
      { name: "Espetada Mista", price: "19.500 Kz" },
      { name: "Picanha", price: "19.500 Kz" },
      { name: "Maminha", price: "18.000 Kz" },
      { 
        name: "Ribs Barbecue", 
        price: "17.000 Kz",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop"
      },
      { name: "Bife à Parmagiana", price: "14.000 Kz" },
    ]
  },
  {
    id: "peixes",
    title: "Peixes",
    backgroundImage: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1920&auto=format&fit=crop", // Seafood dark bg
    items: [
      { 
        name: "Moqueca de Garoupa e Camarão", 
        price: "24.000 Kz",
        image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?q=80&w=600&auto=format&fit=crop"
      },
      { name: "Espetada de Peixe e Camarão", price: "20.000 Kz" },
      { name: "Peixe do Dia", price: "16.000 Kz" },
    ]
  },
  {
    id: "tabuas",
    title: "Tábuas",
    backgroundImage: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1920&auto=format&fit=crop", // BBQ/Platter background
    items: [
      { 
        name: "Tábua Wing’s", 
        price: "32.000 Kz",
        image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=600&auto=format&fit=crop"
      },
      { name: "Tábua Premium", price: "55.000 Kz" },
      { name: "Tábua Wing’s Grelhada", price: "32.000 Kz" },
      { name: "Tábua Premium Grelhada", price: "55.000 Kz" },
    ]
  },
  {
    id: "guarnicoes",
    title: "Guarnições",
    backgroundImage: "https://images.unsplash.com/photo-1623238919637-803239e8a716?q=80&w=1920&auto=format&fit=crop", // Sides/Potatoes bg
    items: [
      { 
        name: "Batata Frita (vários)", 
        price: "3.000 Kz",
        image: "https://images.unsplash.com/photo-1630384060421-a4323ceca0ad?q=80&w=600&auto=format&fit=crop"
      },
      { name: "French Fries", price: "6.000 Kz" },
      { name: "Arroz Basmati", price: "3.000 Kz" },
      { name: "Feijão Preto", price: "3.000 Kz" },
      { name: "Salada Wing’s", price: "3.500 Kz" },
      { name: "Ovo Estrelado", price: "1.500 Kz" },
      { name: "Coleslaw", price: "3.000 Kz" },
    ]
  },
  {
    id: "molhos",
    title: "Molhos",
    backgroundImage: "https://images.unsplash.com/photo-1626082927389-d6a369331398?q=80&w=1920&auto=format&fit=crop", // Sauces/Spices bg
    items: [
      { name: "Barbecue", price: "1.200 Kz" },
      { name: "Sweet Chilli", price: "1.200 Kz" },
      { name: "Asian", price: "1.200 Kz" },
      { name: "Mostarda e Natas", price: "2.000 Kz" },
      { name: "Pimentas e Natas", price: "2.000 Kz" },
      { name: "Cogumelo e Natas", price: "3.500 Kz" },
      { name: "Cheddar", price: "3.500 Kz" },
    ]
  },
  {
    id: "kids",
    title: "Menu Kids",
    backgroundImage: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1920&auto=format&fit=crop", // Pizza/Fun food bg
    items: [
      { name: "Massa à Bolonhesa", price: "8.000 Kz" },
      { name: "Cheeseburguer", price: "8.000 Kz" },
    ]
  },
  {
    id: "sobremesas",
    title: "Sobremesas",
    backgroundImage: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1920&auto=format&fit=crop", // Cake/Dessert bg
    items: [
      { 
        name: "Sobremesa Wing’s", 
        price: "6.500 Kz",
        image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=600&auto=format&fit=crop"
      },
      { name: "French Toast Gelado", price: "6.500 Kz" },
      { name: "Trufas de Brownie", price: "6.500 Kz" },
      { name: "Fruta da Época", price: "4.000 Kz" },
      { name: "Trouxinhas Deliciosas", price: "8.500 Kz" },
      { name: "Tacos Delícia", price: "8.500 Kz" },
    ]
  },
  {
    id: "sangrias",
    title: "Sangrias",
    backgroundImage: "https://images.unsplash.com/photo-1572635196184-84e35138cf6c?q=80&w=1920&auto=format&fit=crop", // Sangria bg
    items: [
      { name: "Sangria Cítrica", price: "16.000 Kz" },
      { name: "Sangria de Frutos Vermelhos", price: "18.000 Kz" },
    ]
  },
  {
    id: "espumantes",
    title: "Espumantes",
    backgroundImage: "https://images.unsplash.com/photo-1598155523122-3842334d6c10?q=80&w=1920&auto=format&fit=crop", // Champagne bg
    items: [
      { name: "Seleção de Espumantes Premium", price: "Variável", description: "Consulte a nossa carta de garrafas selecionadas." },
    ]
  },
  {
    id: "vinhos_brancos",
    title: "Vinhos Brancos",
    backgroundImage: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1920&auto=format&fit=crop", // White wine bg
    items: [
      { name: "Vinho Branco ao Copo", price: "3.500 Kz" },
      { name: "Vinho Branco da Casa", price: "14.000 Kz" },
    ]
  },
  {
    id: "vinhos_tintos",
    title: "Vinhos Tintos",
    backgroundImage: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?q=80&w=1920&auto=format&fit=crop", // Red wine bg
    items: [
      { name: "Vinho Tinto ao Copo", price: "3.500 Kz" },
      { name: "Vinho da Casa Tinto", price: "14.000 Kz" },
    ]
  },
  {
    id: "gins",
    title: "Gins",
    backgroundImage: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1920&auto=format&fit=crop", // Gin bg
    items: [
      { name: "Gin Wing’s (Frutos Vermelhos)", price: "7.000 Kz" },
    ]
  },
  {
    id: "cervejas",
    title: "Cervejas",
    backgroundImage: "https://images.unsplash.com/photo-1618183182173-0d64d5c41469?q=80&w=1920&auto=format&fit=crop", // Beer bg
    items: [
      { name: "Nocal", price: "1.500 Kz" },
      { name: "Eka", price: "1.500 Kz" },
      { name: "Cuca", price: "1.500 Kz" },
    ]
  },
  {
    id: "sumos_refrigerantes",
    title: "Sumos & Refrigerantes",
    backgroundImage: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=1920&auto=format&fit=crop", // Juice bg
    items: [
      { name: "Sumo Compal Lata", price: "2.000 Kz" },
      { name: "Sumo Natural de Laranja", price: "3.800 Kz" },
      { name: "Sumo Natural de Ananás", price: "3.800 Kz" },
      { name: "Sumo Natural de Fruta da Época", price: "3.800 Kz" },
    ]
  },
  {
    id: "cafes_chas",
    title: "Cafés & Chás",
    backgroundImage: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1920&auto=format&fit=crop", // Coffee bg
    items: [
      { name: "Café", price: "1.200 Kz" },
      { name: "Chá", price: "1.200 Kz" },
    ]
  },
  {
    id: "aguas",
    title: "Águas",
    backgroundImage: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=1920&auto=format&fit=crop", // Water bg
    items: [
      { name: "Água 0,5L", price: "1.000 Kz" },
      { name: "Água 1,5L", price: "1.800 Kz" },
      { name: "Água das Pedras", price: "3.000 Kz" },
      { name: "Água Tónica", price: "1.800 Kz" },
      { name: "Ginger Ale", price: "1.800 Kz" },
    ]
  },
  {
    id: "pequeno_almoco",
    title: "Pequeno-Almoço",
    backgroundImage: "https://images.unsplash.com/photo-1533089862017-5614a957054c?q=80&w=1920&auto=format&fit=crop", // Breakfast bg
    items: [
      { name: "Sandes/Tosta mista + Café/Chá", price: "5.500 Kz" },
      { name: "Croissant/Pão de leite misto + Café/Chá", price: "4.000 Kz" },
      { name: "Croissant simples", price: "1.200 Kz" },
      { name: "Presunto com manteiga", price: "3.000 Kz" },
      { name: "Compota + queijo + fiambre", price: "1.800 Kz" },
      { name: "Misto", price: "2.500 Kz" },
      { name: "Ovos mexidos com bacon", price: "3.500 Kz" },
      { name: "Omelete simples", price: "2.500 Kz" },
      { name: "Choco avelã", price: "1.850 Kz" },
    ]
  },
  {
    id: "tostas_sanduiches",
    title: "Tostas / Sanduíches",
    backgroundImage: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1920&auto=format&fit=crop", // Sandwich bg
    items: [
      { name: "Simples", price: "1.000 Kz" },
      { name: "Presunto e manteiga", price: "2.500 Kz" },
      { name: "Compota/queijo/fiambre", price: "1.500 Kz" },
      { name: "Ovos mexidos e bacon", price: "3.500 Kz" },
      { name: "Omelete simples", price: "2.000 Kz" },
      { name: "Choco avelã", price: "1.650 Kz" },
    ]
  }
];