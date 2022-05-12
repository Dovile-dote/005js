function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// map darosi kopija
// for each praeina cikla ir nieko nedaro

const n1 = ['Petras', 'Asilas', 'Barsukas', 'Kate'];
const n2 = ['Antanas', 'Asilas', 'Barsukas', 'Simona'];

const copy1 = n1.map((v) => true);
// v yra value, galima rasyt bet ka
console.table(copy1);

const copy2 = n1.map((v) => v);
console.table(copy2);

const copy3 = n1.map((v) => v + ' Valio');
console.table(copy3);

const copy4 = n1.filter((v) => true);
// filter rodo tik tuos, kurie true
console.table(copy4);
const copy5 = n1.filter((v) => false);
console.table(copy5);

const index = n1.indexOf('Kate');
console.log(index);
const index1 = n1.indexOf('Dramblys');
console.log(index1);
// jeigu neranda, grazina -1 VISADA

const copy6 = n1.filter((v) => -1 != n2.indexOf(v));
console.table(copy6);

const copy7 = [];
for (let i = 0; i < n1.length; i++) {
  const what = n1[i];
  for (let k = 0; k < n2.length; k++) {
    if (n2[k] == what) {
      copy7.push(what);
      break;
    }
  }
}
console.log(copy7);

for (const ja in n1) {
  console.log(ja);
}
// grazina indexus

for (const ja of n1) {
  console.log(ja);
}
// grazina reiksmes

const kazkas = 'hgfjhafjhfghgfkgaskdhfgkdjgkdj';

const namasSuKaminu = {
  kaminas: 'yra 3metrai',
  gyventojai: ['Petras', 'Asilas', 'Barsukas', 'Kate'],
  tas: kazkas,
};

namasSuKaminu.animals = { cat: 'Murka', dog: 'Brisius' };

namasSuKaminu.tas = 888;

console.log(namasSuKaminu.gyventojai, namasSuKaminu.tas);
console.log(namasSuKaminu);
console.log(namasSuKaminu.animals.cat);

const namasSuKaminu2 = namasSuKaminu;
namasSuKaminu2.animals.cat = 'Kitas katinas';
console.log(namasSuKaminu.animals.cat);

// const n1 = ['Petras', 'Asilas', 'Barsukas', 'Kate'];
const n4 = n1.slice();
// kopijavimas - sukuria nauja masyva
// const n4 = n1 tik pervadina ta pati masyva, jei keisi n4, keisis ir n1
const n5 = [...n1];
// dar vienas budas kopijuoti
n4.shift();
console.log(n1, n4, n5);

const a1 = { cat: 'Miau', dog: 'Au' };
const a2 = { ...a1 };
// objekto kopija
console.log(a2);

const namasSuKaminu3 = JSON.parse(JSON.stringify(namasSuKaminu));
namasSuKaminu3.animals.cat = 'kate';
console.log(namasSuKaminu);
console.log(namasSuKaminu3);

console.log('-----MAPAS-----');
const map = new Map();

map.set('Murka', 5);
map.set('Pilkis', 8);
map.set('Pukis', 4);

console.log(map);
console.log(map.get('Pilkis'));
console.log(map.has('Pilkis'));
map.delete('Pilkis');
console.log(map);
console.log(map.size);

const masmap = [...map];
console.log(masmap);

const se = new Set();
console.log(se.size);
console.log(se);
se.add('cat');
se.add('dog');
se.add({ t: 'cat' });
se.add({ t: 'cat' });
console.log(se);
// i set'a galima deti tik unikalias reiksmes
// bet galima deti vienodus objektus ir jie bus du atskiri

se.delete('dog');
console.log(se.has('dog'));
console.log(se.has({ t: 'cat' }));
// trecias unikalus objektas

const va = [4, 8, 2, 7, 7, 4];
console.log(new Set(va));
