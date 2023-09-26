// tip bazlı tanımlamalar yapabiliyoruz
// eğer bir sınıfa yada bir function yada bir değişkene başka bir TS dosyasında erişmek istersek bu durumda ilgili tipi export keyword ile işaretleriz
export class Person {
  protected name; // private bir değer, private, protected erişim berliteçleri kullanılabilir, default olarak public keyword kullanılıyor.
  constructor(name) {
    this.name = name;
  }
  // public
  get Name(){
    return this.name;
  }
}

export interface ILicance {
  lisanceNumber:string; // tip bazlı tanımlamalar yapabilir
}

// inheritance yaptık
// interface implementation gibi durumlara yaarlayabilirz.
export class Employee extends Person implements ILicance {
  constructor(name) {
    super(name);
  }

  // tek constructor kullanımı var
  // constructor() {
  // }

  lisanceNumber: string;

  // ? optional olarak değer geçip geçemeyemiz anlamına geliyor.
  // ? ile nullable özellik kazandırıyoruz.
  lisanceNumberIsValid(number?:string):boolean {
    return false;
  }
}

const e = new Employee('ali');
e.lisanceNumberIsValid('232321');
e.lisanceNumberIsValid();

// Enum Sabit bir tip tanımı
enum OrderStatus {
  Completed= 200,
  Shipped = 400
}

// Typescripte generic types ile çalışabiliriz
const names = new Array<string>();
names.push('2');
// names.push(1);

// generic class ile de typescript de çalışabiliriz.
interface IEntity<TKey>{
  Id:TKey;
}

class  Product implements IEntity<string> {
  Id: string;
}

// static işaretli bir class yapısı yok fakat Helper amaçlı kullandığımız sınıfların içindeki üyeleri static işaretlerse zaten sadece bir sınıf tek bir constructor değeri içerdiğinden direk kullanılabilir.
// TS static üyeler ile static sınıflar ile çalışmayı destekler
class DateHelper {
  constructor() {
  }

  static getPrettyDate(date:Date):string{
    return `${date.getFullYear}/${date.getMonth()}/${date.getDate()}`
  }
}
console.log(DateHelper.getPrettyDate(new Date()));

abstract class EntityBase {
  abstract do():void; // ovveride edilmek için base class tanımlanıyor
}

// TS de abstract class ile çalışabiliyoruz.
class Driver extends EntityBase {
  // polymorphism ovveride method desteği
  do(): void {
    throw new Error("Method not implemented.");
  }
}

// TS özgü kullanımlar 
// 2. custom Type
// 1. intersect (composition olarak geçiyor) kalıtım almadan bir tipe yeni özellikler kazandırma işlemi
// 3. Union Types

type myLuckyNumber = Number;

type MyFormData  = {username:string, password:string, email?:string}

const nm:myLuckyNumber = 13;
const formData:MyFormData = {username:'ali', password:'32432',email:'ali@test.com'};

const ali = {id:1,name:'ali'}
// intersect işlemi MyFormData ve aynı zamanda {passwordConfirm:string, zipCode:string}  sahip olsun
type MyRegisterForm = MyFormData & {passwordConfirm:string, zipCode:string} 
const registerForm:MyRegisterForm = {username:'can', password:'32432', passwordConfirm:'43244324', email:'dsad', zipCode:'+32432'}

// bu tip success error veya completed değerinden birini içerebilir
// Bu işleme Union Types adını veriyoruz.
type ButtonType = 'success' | 'error' | 'completed';

const myButton:ButtonType = 'success';



