// js de değişken tanımları var keyword ile yapılır.
// primative types (value types) ve complex types. (referance type)
// primative types (number,string,boolean)
// complex types (object, array, Object function)

// global variable assignment.
var a = 15;
var isTrue = false;
console.log('a1', a);

var a = 25;
console.log('a2', a);

// ES6 ile let ve const keywordleri geldi.
// aynı isimde değişken tanımlamasını aynı scope içerisinde yapmanızı engeller.
if(true) {
  // blok seviyesinde bir değişken tanımı olduğunda bu a keyword sadece bu blok için doğru çalışacaktır.
  // local variable assignment
  let a = 35;
  a = 36; // beklentimiz a 36 result dönsün
  const b = 45; //  const ile let arasındaki fark ne? PI,
  // b = 55; // beklentimiz b 55 çıktısı versin. let de değişken tanımlamasındaki intial değer değiştirilebilir ama const ile tanımladığımız constant sabit oluyor. aşağı satırdaki kodlarda değiştiremeyiz.
  console.log('b', b);
  console.log('a3', a);
}

console.log('a4', a);


// js de es5 ve sonrası literal object tanımı.
let ali = {id:1,name:'ali'};
ali.name = "Ahmet";
console.log('ali set name', ali);

let can = {id:1, name:'can'}
can = ali; // referans type eşitliği verdik bu sebeple ikisi heap de aynı bölge point ediyor.
can.name = "Can";
console.log('can','ali', can, ali); // let kullandığımızda can değişince ali de değişime uğradı.

const ahmet = {id:1, name:"ahmet"};
ahmet.name = "Mustafa"
console.log('ahmet set name', ahmet);

// o zaman referans type ile çalışırken const keyword ile çalışırız.
// böylelikle developer yanlış bir referans ataması yapamıyor.
// const celal = {id:1, name:'celal'};
// celal = ahmet; // ahmet ref celal atandı.

// diziler ile çalışırken const let kullanımı
let names = ["ali","can","mustafa"]; // js de diziler ile çalışırken dikkatli olmalıyız çünkü referans type çalışır
console.log('names dizi type', typeof(names));

let names2 = names; // bu assignmentdan dolayı names2 dizisine bir eleman ekleyince diğer diziye de eleman eklenecektir.

names.push("kaan");
console.log('names2',names2, 'names', names);

// diziler ile çalışırken de diziler referans type olduğu için const keyword kullanıyoruz.

const numbers = [1,3,4,5,6,7];
numbers.push(11);
// numbers = [2,4,5,7];

console.log('numbers', numbers);
// concat ile dizileri birleştirme.
const number3 = [];
console.log('n',number3.concat(numbers).concat(names2));
number3.push("hasan");
console.log('n',number3.concat(numbers).concat(names2));



