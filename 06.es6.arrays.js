// diziler ile çalışmak için bazı functionlar es6 versiyonu ile birlikte kullanılmaya başlandı.

// map, foreach, filter, find, findIndex array manupulation

// set collections type özelliği
// aynı değere sahip olan elemanların diziye pushlanmaması, key value pair olarak collections ile çalışma. (Dictionary)

const persons = [{id:1, name:'ali'}, {id:2, name:'ahmet'}];

// map ile yeni dizi referansı başka bir diziye aktarılmış olur, map her bir item üzerinde işlem yapabiliriz.
// forOf ile yapılcak işlemleri tek bir satırda kontrolü bir şekilde yaptık.
// itemlara müdahale etmek için güzel bir teknik.
const persons2 = persons.map((item) => {
  return  {... item, age:1};
});

persons2.push({id:4,name:"can"});

console.log('persons', persons);
console.log('persons2', persons2);
persons2[0].name = "Tansu";

// foreach ise itemlara müdehale etmek yerine genelde item değerlerini içinde dönmek için tercih edilir.

persons.forEach(item => { // direkt olarak elimizdeki dizi referansına müdehale ederiz. map ise yepyeni bir dizi referansı oluşturuyor. bu sebeple eğer güncel referans üzerinden çalışacak isek tercih edilebilir.
    item.name = "Hale";
});

console.log('persons', persons);

// filter ve find
// referansı koparmak map'li kullanalım.
let filtered =  [... persons2
  .filter(x=> x.id == 1)
  .map(item => {
  return {... item}
})]; //lamda expression yöntemi
console.log('filtered', filtered);
filtered[0].name = "uğur"; // dizi içerisindeki nesne referansları üzerinden çalışıyor.
// eğer kaydı bulmaz ise [] döner bulursa eşleyen kayıtları dizi olarak döner.

// referans güncelleniyor mu ?
console.log('filtered', filtered);
console.log('persons2', persons2);

// dizi içerisinde string arama işlemlerinde includes yeri regex.test methodu kullanım.
// arama işlemlerinde case insensitive çalışmak için regex tercih ediyoruz.
let filteredObj = persons2.find(x=> x.name.includes('Tansu'));
console.log('filteredObj', filteredObj);

// case-in-sensitive çalışır.
let filteredObj2 = persons2.find(x=> RegExp(' tansu ','i').test(x.name)); 
// kayıt bulunmaz ise null değil undefined değer döner, bulursa ilk bulduğu eşleşen tek bir değer
console.log('filteredObj2', filteredObj);

let index = persons.findIndex(x=> x.id == 2); // number kaydı bulamaz ise -1 değer döndürür. -1 indeks karşılığı yok.
console.log('index', index);
persons[index].name = "Harun"; // indeksinde obje property erişimi.

// koleksiyon ifadeleri ES6 ile gelen bir özellik
const hashSet = new Set();
hashSet.add("Elma");
hashSet.add("Armut");
hashSet.add("Elma");

// aynı kayıttan girimemesi için kullanılan bir tip.

 hashSet.forEach(element => {
  console.log('hashset', element)
});

// referance type içinde unique'lik sağlar. aynı değeri gönderdiğimiz yada aynı refransı gönderdiğimiz takdirde hata vermeden ekleme yada eklememe işlemi yapar.
const p1 = {id:1,name:"can"};
const p2 = {id:1,name:"canan"};
const hashSet2 =  new Set();
// hashSet2.add({... p1}); // bu şekilde gönderilirse referansları değişeceği için ekleme yapar.
hashSet2.add(p1);
hashSet2.add(p1);
hashSet2.add(p2);

hashSet2.forEach(element => {
  console.log('hashSet2', element)
});

