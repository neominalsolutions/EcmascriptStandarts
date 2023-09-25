// c# class contruction işlemi var. ama deconstruction işlemi yok. aslında tupple ile c# buna benzer bir kullanım var. 
// ES6 ile hayatıma girdi.

const obj = {id:1,firstname:'can', surname:'tan'};

// yani nesne içerisinde bazı alanları dışarı çıkarığ değişkenlere bu değerleri set etmek istersek kullanırız.
const {firstname,surname} = obj; // reactjs de props tanımları bu şekilde yapılıyor.

console.log('name', firstname);
console.log('surname', surname); 

// deconstruction işlemi olmasaydı // es5 formatı
console.log('name', obj.firstname);
console.log('surname', obj.surname); 

const names = ["ali", "can", "canan"];

// es5 formatında indeksinden dizinin değerine ulaşırken
let fistIndex = names[0];

//es6 formatında ise

// const yapısı ile birlikte deconstruct ettiğimiz değerleri set edilmeye karşı koruma altına alıyor.
// eğer deconstruct ettiğimiz değerleri aşağıdaki kod bloklarında güncellemek istersek bu durumda let tanımlı tanımlamalıyız.
// immutable type değeri 1 kez tanımlanp değişmeyen demek
// mutuable type ise değeri güncellenebilir demek.
const [firstIndex, secondIndex] = names; // react state tanımları bunun ile yapılıyor.
// dizinin içerisinde elemanları sıralarına göre diziden dışarı değişken olarak çıkarabildik.
// readonly amaçlı ekrana değerli set etmek için kullanıyorsak const eğer read and write olarak çalışmak istersek let kedyword kullanım.

let [,,thridIndex] = names;
// firstIndex = "mustafa";
console.log('firstIndex', firstIndex);
console.log('secondIndex', secondIndex);
thridIndex = 'hande';
console.log('thridIndex', thridIndex);

console.log('names', names);
// deconstuctions işlemleri object ve dizi tipi için yaygın kullanılan bir veri erişim yapısı.

// bu arada dizinden alınan değerleri başka bir değişkene aktardığımız için değişkendeki bir değişiklik diziye etki etmedi.

const namesObject = [{id:1,name:"can"}, {id:2, name:"kenan"}];

const [firstPerson, lastPerson] = namesObject;

firstPerson.name = "jale";

console.log('firstPerson', firstPerson);
console.log('namesObject', namesObject);

// referance type değerlerde değerde bir değişiklik olması deconsturct edilen değerin referans yada value type olmasına göre değişkenlik gösterir. referance type durumlarda obje deki referans değiştiği için object dizindeki referans da güncellenir. value typelarda referans bazlı çalışmadığımızdan böyle günclleme olmaz. sadece decontruct ettğimiz value değişir.

