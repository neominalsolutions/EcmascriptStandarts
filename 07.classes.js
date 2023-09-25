// Functional Object
// ES5 default olarak object tanımı
// _name,_firstname contructor kullanımı
function Person(_name,_firstname) {
  // this keyword ile tanımlandığında public members
  // 1. yöntem
  this.name = _name,
  this.firstname = _firstname,  
  this.getFullName = function () { // getFullName fonkisyonu Person fonkisyonu içinde tanımlı
    return this.name + " " + this.surname; 
  }
}

// Person sınıfında class dışında prototipinde setName adında bir function tanımı yaptık.
// c# extention kod yapısının aynısı

Person.prototype.setName = function (name) {
  console.log('name', name);
  this.name = name;
}

// function içinde bir function tanımı yapılınca js bunu function tipinde değil cat'i class tipinde görüpü object yapıyor.
function Cat() {
  this.name = "";
  
  // private function // method
  function getAge() {
    return 18;
  }

  function setAge() {
    return 18;
  }

  // 2. yöntem

  return {
    getAge,
    setAge
  }  
}

const msg = () => {
  alert("merhaba");
}

console.log('typeof msg', typeof(msg)); // FUNC

const p = new Person("ali", "can");
console.log(typeof(p), p); // object or functions ?
p.setName('ali');

const cat1 = new Cat();

// instance alınan bir nesneye anlık çalışama anında bir property ekleyebiliyoruz.
Object.defineProperty(cat1, 'age', {
  value: 42,
  writable: false, // sadece readOnly Yap
});

// cat1.age = 34;
console.log('age',cat1.age);


console.log('c',cat1.getAge());

function Animal(name) {
  this.name = name

   function getName () {
      return this.name.trim();
  }

  return {
    getName
  }
}

// Object literal
let animal = {
  eats: true
};

let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

console.log('rabbit', rabbit);

// Kedi tipi Hayvandan kalıtım alır.
// hayvan protosundan kedi objesi oluştur.
// Cat.prototype = Animal.prototype;

const c2 = new Cat('kedi5')
// c2.getName();
console.log('c2', c2);


class Person2 {
  #age;

  // JS de constructor over load yok

  constructor(age) {
    this.#age = age;
  }

  // birden fazla contructor yok.
  // constructor(age,color) {
  //   this.#age = age;
  // }

  get Age(){
    return this.#age;
  }

  getFullName(){
    return "";
  }
}
// ES6 da class yapısı ortaya çıktı
// ReactJS de ReactTS de class yapısını destekliyor.
// bir sınıf başka bir sınıfa kalıtım vermek için extend keyword kullanılır
class Employee extends Person2 {

  #name; // field ise #ifade ile başlar
  #surname; // private yapar.

  constructor(name,surname,age){
    super(age); // c# base önce super ile base değer gönderip daha sınıfı içindeki property güncelliyoruz.
    this.#name = name;
    this.#surname = surname;
    // super(age); // c# base 
  }

  // getter
  get Name(){
    return this.#name;
  }

  // property isimleri büyük harf oluyor setter
  set Name(value){
    this.#name = value;
  }

  // class içindeki üyeler default public sayılır
  // önünde herhangi bir access modifier tanımı yoksa JS ve TS bunu public kabul eder.
  // virtual method tanımı JS de yok.
  // ovveride mantığı işaretlemeli olarak yok
  // base bır sınıfata aynı isimde bir function varsa hide yani hizleme uyguluyor. otomatik olarak ovveride edilmiş oluyor.
  getFullName(){
    // önce kalıtım aldığın yeri tetikle.
    // super.getFullName();
    return this.#name + " " + this.#surname;
  }

}

const e = new Employee('ali', 'can',21);
e.Name = "mustafa"; // property setter


console.log('employee', e.getFullName());
console.log('e.Age', e.Age);


