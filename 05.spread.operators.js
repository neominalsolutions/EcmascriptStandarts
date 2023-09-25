// spread operator ile dizi ve objelerde çalışırken referance type olan bileşenlerin referanslarını koparıp, yeni bir referans üzerinden ilgili tiple çalışmamızı sağlayan bir özellik olarak es6 tanıtıldı.

// referans hataların kurtulmak için kullanalım.

const person = {id:1, name:"ali", profile: {username:'hakan'}}; // source klonlanacak değer.
let person2 = {}; // target kopyalanacak
Object.assign(person2,person); // es5 formatı

person2.name = "hakan";

console.log('person2', person2);
console.log('person1', person);

// react  da spread operatorünü referans hatalarında korunmak çok yaygın bir şekilde kullanıcaz.
const person3 = {tcNo:'324324324', ... person, age:34}; // ... spread operator diye geçiyor
person3.name = "mahmut";
// nested object yapısında dikkatli oluyoruz.
person3.profile = {... person.profile};
person3.profile.username = "mhx";
// person3 objesine yeni bir özellik ekledim. property ekledim.

console.log('person', person);
console.log('person3', person3);

// spread dizi object ile çalışma
// object dizileri ile çalışırken dikkatli olmalıyız.
const names = [{id:1, name:"ali"}, {id:2, name:"kenan"}];

// initialize aşamasında aşağıdaki yazım şeklinde bir problem yok.
let names2 = [];

for (let name of names) {
  // names2.push({... name});
  names2 = [... names2, {... name}];
}

// initialize sonrası atama asignment hatası
// names2 = [...names];

console.log('names2', names2);
names2[0].name = "Hakan";
console.log('names', names);

// diziler type object olduğunda [... spread operator kullanmadığımız için referansları değişti.]
const numbers = [1,3,5,6];
// const numbers2 = numbers; aynı referansa bakıp 15 değerini her iki dizide puhslayacak
// let number2 = [... numbers];
console.log('numbers', numbers);
// numbers2.push(15);
const numbers2 = [23, ... numbers, 15]
console.log('numbers2', numbers2);





