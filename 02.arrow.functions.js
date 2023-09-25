// js de functions bir eylemi çalıştırmak için kullanılan yapılar. C# method yapılarına benzer.
// function methoddan farklı, method bir class içerisinde tanımlanabilir.
// function ise bir class'dan bağımsız hareket edebilir. (JS de diğer dillerden farklı olarak Functional Programing destekleniyor.)

// 2 türlü function var (değer döndüren, değer döndürmeyen)

// değişken ve function tanımlarında camelCase formatını kullanıyoruz
function showMessage(message) {
    alert(message);
}

// function çağırımı 
showMessage('merhaba');
// değer döndüren function return ifadesi içerir.
function sum(number1,number2) {

    if(number1 !== typeof(Number)){
      throw new Error('number1 numeric değil')
    }

    if(number2 !== typeof(Number)){
      throw new Error('number2 numeric değil')
    }

    return number1 + number2;
}

const result = sum(10,20); // result 30
console.log('result', result);

// ES6 ile birlikte yukarıdaki kod blogları artık aşağıdaki formatlarda kullanılabiliyor. Genelde arrow function tercih ediyoruz. ReactJS de de arrow function kullanıcaz.

const showMessage2 = (message) => {
  alert(message);
}

showMessage2('mesaj2'); 

// 1. yazım şekli kısa yazım
const sum2 = (number1,number2) => number1 + number2; // tek satırdan oluşan bir blok ise bunu kullan.
const sum3 = (number1,number2) => { 
  // birden fazla satırdan oluşan kod blogunda bunu kullan.
  return number1 + number2;
}

// function overlaod dünyasında yok.
// rest operator kullanımı ES6 ile hayatımıza girdi. function yada method overload olmadığında rest operatörü ile birden falza parametre geçişi sağlanabildir. C# params kullanımın aynısı
const sum4 = (... numbers) => {

  numbers.forEach(nm => {
    console.log('nm', nm);
  })

  return numbers;
}

// dizi, object, ve  arrow functions da const keyword kullanalım

const r2 = sum2(10,45);
const r3 = sum3(10,55);
const sm3 = sum4(1,5,6,7);
// const sm4 = sum4([5,6,7,8]);
console.log('sm3', sm3);
// console.log('sm4', sm4);

// ES6 ile birlikte function parametrelerine default değer atamsı geldi.
// n2 = 1 default değer ataması

// n;

// // console.log('n', n);

const division = (n1 = 1, n2 = 1) => {
  // js de değer atamsı yapılamayan değişkenler undefined tipi ile işaretlenebilir. böyle durumu ortadan kaldırmak için function parametrelere ya default değer vereceğiz. ES6 ile geldi yada typeof operator ile function içine gönderilen parametreleri undefined olup olmadığını kontrol edeceğiz.
  // === nedir ? == value değer eşitliğe bakar === typeof'una bakar.

  // aşağıdaki koddan kurtulmak için n1, n2 değerlerine default değer tanımlaması yapabilir.
  if(n1 === undefined || n2 === undefined){
    n1 = 1;
    n2 = 1;
  }

  console.log('n2 type', typeof(n2));
  console.log('n1 type', typeof(n1));

  if(isNaN(n1/n2)){
    throw new Error('parametre tanımları sayılsal bir değer olmalıdır')
  }

  return n1 / n2;
}

// NaN => sonucu bir numeric değer değil => Not a Number

const dv = division(16,4);
const dv2 = division(); // n1 undefined ve n2 undefined
// const dv3 = division('A','B'); // NaN not a number
console.log('dv', dv);

// functionlara gönderilen değer js dilinde any dediğimiz tüm tipleri kapsayan bir tiptir. bu sebeple istedğimiz tipde değeri function içine paramtere olarak geçebiliriz.
 console.log('toplam sonuc:' + sum('10', 25)); // sonuc ? js bunu işler mi


