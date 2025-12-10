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
    items: [
      { name: "Wings Barbecue", price: "7.500 Kz" },
      { name: "Wing’s Sweet Chilli", price: "7.500 Kz" },
      { name: "Wing’s By Wings", price: "7.500 Kz" },
      { name: "Wing’s Asian", price: "7.500 Kz" },
      { name: "Bife Tártaro", price: "16.000 Kz" },
      { name: "Pipocas de Carne", price: "9.000 Kz" },
      { name: "Ceviche Peruano de Garoupa", price: "14.000 Kz" },
      { name: "Tacos de Frango", price: "12.000 Kz" },
      { name: "French Fries", price: "6.000 Kz" },
      { name: "Nachos Mexicanos", price: "12.000 Kz" },
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
      { name: "Hambúrguer Wing’s c/ Batata", price: "10.500 Kz" },
      { name: "Hambúrguer Wing’s com Queijo", price: "12.500 Kz" },
      { name: "Sopa do Dia", price: "3.500 Kz" },
    ]
  },
  {
    id: "saladas",
    title: "Saladas",
    items: [
      { name: "Salada Caesar", price: "12.000 Kz" },
      { name: "Salada de Camarão", price: "12.000 Kz" },
      { name: "Salada Wing’s", price: "3.500 Kz" },
      { name: "Salada Vegetariana", price: "8.000 Kz" },
      { name: "Salada de Frutas", price: "5.500 Kz" },
    ]
  },
  {
    id: "massas",
    title: "Massas e Arroz",
    items: [
      { name: "Massa à Bolonhesa", price: "16.000 Kz" },
      { name: "Massa Carbonara", price: "16.000 Kz" },
      { name: "Linguine Preto Surprise", price: "19.000 Kz" },
      { name: "Arroz de Marisco (1 pessoa)", price: "19.000 Kz" },
      { name: "Arroz de Marisco (2 pessoas)", price: "35.000 Kz" },
    ]
  },
  {
    id: "carnes",
    title: "Carnes",
    items: [
      { name: "Bife de Lombo 200g", price: "22.000 Kz" },
      { name: "Bife da Vazia", price: "18.000 Kz" },
      { name: "Surf and Turf", price: "28.000 Kz" },
      { name: "T-bone", price: "24.000 Kz" },
      { name: "Espetada Mista", price: "19.500 Kz" },
      { name: "Picanha", price: "19.500 Kz" },
      { name: "Maminha", price: "18.000 Kz" },
      { name: "Ribs Barbecue", price: "17.000 Kz" },
      { name: "Bife à Parmagiana", price: "14.000 Kz" },
    ]
  },
  {
    id: "peixes",
    title: "Peixes",
    items: [
      { name: "Moqueca de Garoupa e Camarão", price: "24.000 Kz" },
      { name: "Espetada de Peixe e Camarão", price: "20.000 Kz" },
      { name: "Peixe do Dia", price: "16.000 Kz" },
    ]
  },
  {
    id: "tabuas",
    title: "Tábuas",
    items: [
      { name: "Tábua Wing’s", price: "32.000 Kz" },
      { name: "Tábua Premium", price: "55.000 Kz" },
      { name: "Tábua Wing’s Grelhada", price: "32.000 Kz" },
      { name: "Tábua Premium Grelhada", price: "55.000 Kz" },
    ]
  },
  {
    id: "guarnicoes",
    title: "Guarnições",
    items: [
      { name: "Batata Frita (vários)", price: "3.000 Kz" },
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
    items: [
      { name: "Massa à Bolonhesa", price: "8.000 Kz" },
      { name: "Cheeseburguer", price: "8.000 Kz" },
    ]
  },
  {
    id: "sobremesas",
    title: "Sobremesas",
    items: [
      { name: "Sobremesa Wing’s", price: "6.500 Kz" },
      { name: "French Toast Gelado", price: "6.500 Kz" },
      { name: "Trufas de Brownie", price: "6.500 Kz" },
      { name: "Fruta da Época", price: "4.000 Kz" },
      { name: "Trouxinhas Deliciosas", price: "8.500 Kz" },
      { name: "Tacos Delícia", price: "8.500 Kz" },
    ]
  },
  {
    id: "bebidas",
    title: "Bebidas, Cocktails e Vinhos",
    items: [
      { name: "Consulte o garçom para a carta completa de vinhos e cocktails.", price: "" },
      { name: "Água, Refrigerantes, Sumos Naturais", price: "Variável" },
      { name: "Cocktails de Assinatura", price: "Variável" },
      { name: "Gins Premium", price: "Variável" },
      { name: "Cafetaria", price: "Variável" },
    ]
  }
];