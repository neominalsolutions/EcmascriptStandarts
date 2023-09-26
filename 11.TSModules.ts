// bir TS dosyasında birden fazla tipi dışarı export ettiğimizde ./10.TSOPP dosya dizininden birden fazla tipe {type1,type2} şeklinde erişebiliriz.
import { Employee, Person } from "./10.TSOPP";
// using satır gibi bir dosyadan başka bir dosyaya erişebildik.
// TsOOP ismininde bir namespace tanımı ile ilgili dosya içerisindeki export edilen tiplere bağlanmış olduk
// o dosyada export edilen ne var ne yoksa getir.
import * as TsOOP from './10.TSOPP';
// aynı isimdeki tip çakışmaları engellemek için kullanılan bir teknik.

// dosya tanımlaı olan isiminde sadece ilgili tipe ulaşma yöntemi
import HomePage from "./12.TSModules2";
// Typescript default import export module sistemimiz.

// import {Deneme2} from './12.TSModules2'

// TS dili ts dosyaları arasında ECMASCRIPT Module standatını kullanır.
// ECMAScript module sistemi olarak import export olayını tanımlıyoruz.


const page = new HomePage();
page.render();

const p = new Person('can');
const c = new Employee('ali');

const e1 = new TsOOP.Employee('fkkk');


