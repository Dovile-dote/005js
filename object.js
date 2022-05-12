function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const products = [
  'Dviratis',
  'Triratis',
  'Žvakidė',
  'Stalas',
  'Kėdė',
  'Knygų lentyna',
  'Paveikslas su rėmu',
  'Veidrodis',
  'Keturių vietų palapinė',
  'Pripučiama valtis',
  'Meškerė karosams gaudyti',
  'Planšetė',
  'Pastatoma lempa',
  'Vazonas',
  'Baterijų pakrovėjas',
  'Pagalvių komplektas',
  'Oro drėkintuvas',
  'Oro sausintuvas',
  'Kavinukas elektrinis',
  'Kilimas 2 X 3 metrų',
  'Kilimėlis kojoms valyti',
  'Užuolaidos',
  'Vėjo malūnas',
  'Dažai sienoms',
  'Dažai luboms',
  'Medinė dėžė',
];

console.log('-----A-----');
const megaObject = [];
for (let i = 1; i <= 100; i++) {
  const saskaita = {
    number: 'INV00' + i,
    products: [],
    total: 0,
  };
  if (i >= 10) {
    saskaita.number = 'INV0' + i;
  } else if (i === 100) {
    saskaita.number = 'INV100';
  }
  for (let i = 0; i < rand(1, 10); i++) {
    const vienasProduktas = {
      title: products[rand(0, products.length - 1)],
      // price: rand(1.0, 100.0),
      price: Number((rand(100, 10000) / 100).toFixed(2)),
      // reikia dar pazaisti su tais dviem skaiciais po kablelio
      amount: rand(1, 20),
    };
    saskaita.products[i] = vienasProduktas;
    let total = saskaita.products[i].price * saskaita.products[i].amount;
    saskaita.products[i].total = Number(total.toFixed(2));
  }

  let total = 0;
  for (let i = 0; i < saskaita.products.length; i++) {
    total += saskaita.products[i].total;
    saskaita.total = Number(total.toFixed(2));
  }

  saskaita.vat = Number(((saskaita.total * 21) / 100).toFixed(2));
  const grandTotal = saskaita.total + saskaita.vat;
  saskaita.grandTotal = Number(grandTotal.toFixed(2));
  console.log(saskaita);
  megaObject.push(saskaita);
}

console.log('-----B-----');
let grandGrandTotal = 0;
for (let i = 0; i < megaObject.length; i++) {
  grandGrandTotal += megaObject[i].grandTotal;
}
console.log('Visu visu saskaitu bendra suma: ' + grandGrandTotal.toFixed(2));

console.log(' ');
for (let i = 0; i < products.length; i++) {
  let currentTotal = 0;
  let count = 0;
  for (let a = 0; a < megaObject.length; a++) {
    for (let b = 0; b < megaObject[a].products.length; b++) {
      if (products[i] === megaObject[a].products[b].title) {
        count++;
        currentTotal += megaObject[a].products[b].total;
      }
    }
  }
  console.log(products[i], count, Number(currentTotal.toFixed(2)));
}
