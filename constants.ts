import { MenuCategory, OperatingHours } from './types';

export const WHATSAPP_NUMBER = "244948059824"; // Updated number
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
    backgroundImage: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1920&auto=format&fit=crop",
    items: [
      { 
        name: "Wings Barbecue", 
        price: "7.500 Kz", 
        image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=600&auto=format&fit=crop"
      },
      { name: "Wing's Sweet Chilli", price: "7.500 Kz" },
      { name: "Wing's By Wings", price: "7.500 Kz" },
      { name: "Wing's Asian", price: "7.500 Kz" },
      { 
        name: "Bife Tártaro", 
        price: "16.000 Kz"
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
      { name: "Bao de Carne de Porco", price: "12.000 Kz" },
      { name: "Bao de Gambas", price: "14.000 Kz" },
      { name: "Giozas de Carne de Porco", price: "11.000 Kz" },
      { name: "Giozas de Camarão", price: "12.000 Kz" },
      { name: "Tempura de Gambás", price: "14.000 Kz" },
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
        name: "Hambúrguer Wing's c/ Batata Frita", 
        price: "10.500 Kz",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop"
      },
      { name: "Hambúrguer Wing's com Queijo no Fogo c/ Batata-Frita", price: "12.500 Kz" },
      { name: "Sopa do Dia", price: "3.500 Kz" },
    ]
  },
  {
    id: "saladas",
    title: "Saladas",
    backgroundImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1920&auto=format&fit=crop",
    items: [
      { 
        name: "Salada Caesar", 
        price: "12.000 Kz",
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=600&auto=format&fit=crop"
      },
      { name: "Salada de Camarão", price: "12.000 Kz" },
      { name: "Salada Wing's", price: "3.500 Kz" },
      { name: "Salada Vegetariana", price: "8.000 Kz", description: "Com vegetais da época" },
      { name: "Salada de Frutas", price: "5.500 Kz" },
    ]
  },
  {
    id: "massas",
    title: "Massas e Arroz",
    backgroundImage: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1920&auto=format&fit=crop",
    items: [
      { name: "Massa à Bolonhesa", price: "16.000 Kz" },
      { name: "Massa Carbonara", price: "16.000 Kz" },
      { name: "Linguine Preto Surprise", price: "19.000 Kz" },
      { 
        name: "Arroz de Marisco (1 Pessoa)", 
        price: "19.000 Kz",
        image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?q=80&w=600&auto=format&fit=crop"
      },
      { name: "Arroz de Marisco (2 Pessoas)", price: "35.000 Kz" },
    ]
  },
  {
    id: "carnes",
    title: "Pratos de Carne",
    backgroundImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1920&auto=format&fit=crop",
    items: [
      { 
        name: "Bife de Lombo 200gr", 
        price: "22.000 Kz",
        description: "Inclui duas guarnições",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=600&auto=format&fit=crop"
      },
      { name: "Bife da Vazia 200gr", price: "18.000 Kz", description: "Inclui duas guarnições" },
      { name: "Surf and Turf", price: "28.000 Kz", description: "Bife da vazia com Gambas e duas guarnições" },
      { name: "T-bone", price: "24.000 Kz", description: "Inclui duas guarnições" },
      { name: "Espetada Mista de Carne e Camarão", price: "19.500 Kz", description: "Inclui duas guarnições" },
      { name: "Picanha", price: "19.500 Kz", description: "Inclui arroz, batata frita, feijão, vinagrete, ananás" },
      { name: "Maminha no Estendal", price: "18.000 Kz", description: "Inclui duas guarnições" },
      { 
        name: "Ribs Barbecue", 
        price: "17.000 Kz",
        description: "Inclui batata frita e coleslaw",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop"
      },
      { name: "Bife à Parmagiana de Frango", price: "14.000 Kz", description: "Inclui arroz e batata frita" },
    ]
  },
  {
    id: "peixes",
    title: "Pratos de Peixe",
    backgroundImage: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1920&auto=format&fit=crop",
    items: [
      { 
        name: "Moqueca de Garoupa e Camarão", 
        price: "24.000 Kz",
        image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?q=80&w=600&auto=format&fit=crop"
      },
      { name: "Espetada de Peixe e Camarão", price: "20.000 Kz", description: "Com direito a duas guarnições" },
      { name: "Peixe do Dia", price: "16.000 Kz", description: "Com direito a duas guarnições" },
    ]
  },
  {
    id: "tabuas",
    title: "Tábuas",
    backgroundImage: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1920&auto=format&fit=crop",
    items: [
      { 
        name: "Tábua Wing's", 
        price: "32.000 Kz",
        description: "Azinhas fritas c/ molhos a escolha do cliente, Ribs Barbecue, 1 Chouriço, 1 Batata frita",
        image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=600&auto=format&fit=crop"
      },
      { 
        name: "Tábua Premium", 
        price: "55.000 Kz",
        description: "Azinhas fritas com molho a escolha do cliente, Ribs barbecue, 1 Vazia, 1 Chouriço, 2 Batatas fritas"
      },
      { 
        name: "Tábua Wing's Grelhada", 
        price: "32.000 Kz",
        description: "Azinhas grelhadas c/ molho á escolha do cliente, Entrecosto grelhado, Chouriço grelhado, 1 Batata frita"
      },
      { 
        name: "Tábua Premium Grelhada", 
        price: "55.000 Kz",
        description: "Azinhas grelhadas com molho á escolha do cliente, Entrecosto grelhado, 1 Vazia, 2 Chouriço grelhadas, 2 Batatas fritas"
      },
    ]
  },
  {
    id: "guarnicoes",
    title: "Guarnições / Extras",
    backgroundImage: "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=1920&auto=format&fit=crop",
    items: [
      { name: "Batata Frita (Rena, Pré-frita, Batata-Doce)", price: "3.000 Kz" },
      { name: "French Fries (Px)", price: "6.000 Kz" },
      { name: "Arroz Basmati", price: "3.000 Kz" },
      { name: "Feijão Preto", price: "3.000 Kz" },
      { name: "Salada Wing's", price: "3.500 Kz" },
      { name: "Ovo Estrelado", price: "1.500 Kz" },
      { name: "Coleslaw", price: "3.000 Kz" },
    ]
  },
  {
    id: "molhos",
    title: "Molhos",
    backgroundImage: "https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=1920&auto=format&fit=crop",
    items: [
      { name: "Molho Barbecue", price: "1.200 Kz" },
      { name: "Molho Sweet Chilli", price: "1.200 Kz" },
      { name: "Molho Asian", price: "1.200 Kz" },
      { name: "Molho Mostarda e Natas", price: "2.000 Kz" },
      { name: "Molho de Pimentas e Natas", price: "2.000 Kz" },
      { name: "Molho de Cogumelo e Natas", price: "3.500 Kz" },
      { name: "Molho Cheddar", price: "3.500 Kz" },
    ]
  },
  {
    id: "kids",
    title: "Menu Kids",
    backgroundImage: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1920&auto=format&fit=crop",
    items: [
      { name: "Massa a Bolonhesa", price: "8.000 Kz" },
      { name: "Cheeseburguer", price: "8.000 Kz" },
    ]
  },
  {
    id: "sobremesas",
    title: "Sobremesas",
    backgroundImage: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1920&auto=format&fit=crop",
    items: [
      { 
        name: "Sobremesa Wing's", 
        price: "6.500 Kz",
        description: "Crepe com Gelado e Fruta",
        image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=600&auto=format&fit=crop"
      },
      { name: "French Toast Gelado", price: "6.500 Kz", description: "Tosta doce Francesa Fresca c/ Chocolate e Gelado" },
      { name: "Trufas de Brownie", price: "6.500 Kz", description: "Pedaços de Brownie c/ calda de Chocolate" },
      { name: "Fruta da Época", price: "4.000 Kz" },
      { name: "Trouxinhas Deliciosas", price: "8.500 Kz", description: "Recheadas de Frutos Vermelhos" },
      { name: "Tacos Delicia", price: "8.500 Kz" },
    ]
  },
  {
    id: "pequeno_almoco",
    title: "Pequeno-Almoço",
    backgroundImage: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?q=80&w=1920&auto=format&fit=crop",
    items: [
      { name: "Café/Galão/Chá + Sandes ou Tosta Mista", price: "5.500 Kz" },
      { name: "Café/Galão/Chá + Croissant Misto ou Pão de Leite Misto", price: "4.000 Kz" },
      { name: "Croissant e Pão de Leite Simples", price: "1.200 Kz" },
      { name: "Croissant e Pão de Leite Presunto com Manteiga", price: "3.000 Kz" },
      { name: "Croissant e Pão de Leite Compota, Manteiga, Queijo, Fiambre", price: "1.800 Kz" },
      { name: "Croissant e Pão de Leite Misto Queijo e Fiambre", price: "2.500 Kz" },
      { name: "Ovos Mexidos Bacon", price: "3.500 Kz" },
      { name: "Omelete Simples", price: "2.500 Kz" },
      { name: "Choco Avelã", price: "1.850 Kz" },
    ]
  },
  {
    id: "tostas_sanduiches",
    title: "Tostas e Sanduíches",
    backgroundImage: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1920&auto=format&fit=crop",
    items: [
      { name: "Simples", price: "1.000 Kz" },
      { name: "Presunto e Manteiga", price: "2.500 Kz" },
      { name: "Compota, Manteiga, Queijo, Fiambre", price: "1.500 Kz" },
      { name: "Ovos Mexidos e Bacon", price: "3.500 Kz" },
      { name: "Omelete Simples", price: "2.000 Kz" },
      { name: "Choco Avelã", price: "1.650 Kz" },
    ]
  },
  {
    id: "cocktails",
    title: "Cocktails",
    backgroundImage: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1920&auto=format&fit=crop", // Bar/Cocktail Atmosphere
    items: [
      { name: "Cocktail Caliente", price: "6.000 Kz" },
      { name: "Mojito", price: "5.000 Kz" },
      { name: "Margarita", price: "5.500 Kz" },
      { name: "Caipirinha de Maracujá", price: "5.000 Kz" },
      { name: "Cocktail da Wing's", price: "5.000 Kz" },
      { name: "Caipi Black", price: "4.500 Kz" },
      { name: "Dry Martini", price: "6.000 Kz" },
      { name: "Old Fashioned", price: "6.000 Kz" },
      { name: "Moscow Mule", price: "6.000 Kz" },
      { name: "Cosmopolitan", price: "5.000 Kz" },
      { name: "Sex And Beach", price: "6.000 Kz" },
      { name: "Piña Colada", price: "5.500 Kz" },
      { name: "Cuba Libre", price: "4.500 Kz" },
      { name: "Margarita Wing's", price: "4.500 Kz" },
      { name: "Lemon Drop Martini", price: "6.000 Kz" },
      { name: "Gin Wing's (Com Frutos Vermelhos)", price: "7.000 Kz" },
      { name: "Cocktail Parais", price: "6.000 Kz" },
      { name: "Caipirinha Mágica", price: "6.000 Kz" },
      { name: "Milkshake da Casa", price: "6.000 Kz" },
      { name: "Daiquiri", price: "6.000 Kz" },
    ]
  },
  {
    id: "sangrias",
    title: "Sangrias",
    backgroundImage: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?q=80&w=1920&auto=format&fit=crop",
    items: [
      { name: "Sangria Cítrica", price: "16.000 Kz" },
      { name: "Sangria de Frutos Vermelhos", price: "18.000 Kz" },
    ]
  },
  {
    id: "espumantes",
    title: "Espumante",
    backgroundImage: "https://images.unsplash.com/photo-1498429152472-9a433d9ddf3b?q=80&w=1920&auto=format&fit=crop",
    items: [
      { name: "Chandon Brut", price: "65.000 Kz" },
      { name: "Chandon Rosé", price: "80.000 Kz" },
    ]
  },
  {
    id: "vinhos_brancos",
    title: "Vinhos Brancos",
    backgroundImage: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1920&auto=format&fit=crop",
    items: [
      { name: "Vinho Branco ao Copo", price: "3.500 Kz" },
      { name: "Altano Branco", price: "25.000 Kz" },
      { name: "Alandra Branco", price: "15.000 Kz" },
      { name: "Planalto Branco", price: "25.000 Kz" },
      { name: "Vinho Branco da Casa", price: "14.000 Kz" },
      { name: "EA Branco", price: "10.000 Kz" },
      { name: "Quinta das Bolotas", price: "18.000 Kz" },
      { name: "Segredos de São Miguel", price: "18.000 Kz" },
    ]
  },
  {
    id: "vinhos_tintos",
    title: "Vinhos Tintos",
    backgroundImage: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?q=80&w=1920&auto=format&fit=crop",
    items: [
      { name: "Vinho ao Copo Tinto", price: "3.500 Kz" },
      { name: "Carm Tinto", price: "30.000 Kz" },
      { name: "Marquês de Borba Tinto", price: "25.000 Kz" },
      { name: "Almendra Tinto", price: "16.000 Kz" },
      { name: "Canti", price: "13.000 Kz" },
      { name: "Vinho da Casa Tinto", price: "14.000 Kz" },
    ]
  },
  {
    id: "gins",
    title: "Gin's",
    backgroundImage: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1920&auto=format&fit=crop",
    items: [
      { name: "Gordon's", price: "5.500 Kz" },
      { name: "Hendrick's", price: "7.000 Kz" },
      { name: "Bulldog", price: "6.500 Kz" },
      { name: "Ten", price: "6.500 Kz" },
    ]
  },
  {
    id: "espirituosas",
    title: "Bebidas Espirituosas",
    backgroundImage: "https://images.unsplash.com/photo-1474722883778-792e7990302f?q=80&w=1920&auto=format&fit=crop", // Dark Bottles Background
    items: [
      { name: "Famous Grouse", price: "4.500 Kz" },
      { name: "Jameson", price: "4.500 Kz" },
      { name: "Red Label", price: "4.500 Kz" },
      { name: "Black Label", price: "4.500 Kz" },
      { name: "Aguardente Aliança Velha", price: "4.000 Kz" },
      { name: "Courvoisier Extravagance (Copo)", price: "20.000 Kz" },
      { name: "Brandy 1920", price: "4.500 Kz" },
      { name: "Martini Rosso", price: "4.500 Kz" },
      { name: "Martini Bianco", price: "4.500 Kz" },
      { name: "Amarula", price: "4.500 Kz" },
      { name: "Shot Tequila", price: "5.000 Kz" },
      { name: "Shot de Absinto com Fogo", price: "5.000 Kz" },
    ]
  },
  {
    id: "cervejas",
    title: "Cervejas",
    backgroundImage: "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?q=80&w=1920&auto=format&fit=crop",
    items: [
      { name: "Fino", price: "1.700 Kz" },
      { name: "Lambreta", price: "900 Kz" },
      { name: "Cerveja (Nocal, Eka, Cuca)", price: "1.500 Kz" },
    ]
  },
  {
    id: "sumos_refrigerantes",
    title: "Sumos e Refrigerantes",
    backgroundImage: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=1920&auto=format&fit=crop",
    items: [
      { name: "Laranja Nutry Pacote", price: "3.000 Kz" },
      { name: "Tutti-Frutti Nutry Pacote", price: "3.000 Kz" },
      { name: "Sumo Compal Lata", price: "2.000 Kz" },
      { name: "Coca-Cola", price: "1.800 Kz" },
      { name: "Sprite", price: "1.800 Kz" },
      { name: "Fanta", price: "1.800 Kz" },
      { name: "7Up", price: "1.800 Kz" },
      { name: "Sumo Natural de Laranja", price: "3.800 Kz" },
      { name: "Sumo Natural de Ananás", price: "3.800 Kz" },
      { name: "Sumo Natural de Fruta da Época", price: "3.800 Kz" },
    ]
  },
  {
    id: "cafes_chas",
    title: "Café e Chá",
    backgroundImage: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1920&auto=format&fit=crop",
    items: [
      { name: "Café", price: "1.200 Kz" },
      { name: "Chá", price: "1.200 Kz" },
    ]
  },
  {
    id: "aguas",
    title: "Águas",
    backgroundImage: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=1920&auto=format&fit=crop",
    items: [
      { name: "Água 0,5L", price: "1.000 Kz" },
      { name: "Água 1,5L", price: "1.800 Kz" },
      { name: "Água das Pedras", price: "3.000 Kz" },
      { name: "Água Tónica", price: "1.800 Kz" },
      { name: "Ginger Ale", price: "1.800 Kz" },
    ]
  },
];