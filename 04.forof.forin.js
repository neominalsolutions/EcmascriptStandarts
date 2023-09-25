// dizideki her bir değeri itere etma yani foreach özelliği es5 kadar yoktu bunun için forOf yapısı geldi.
// javascripte obje içindeki property değerleri üzerinde index mekanizması ile gezebilirken artık kolay erişim olan for-in (for-in c# reflection konusunda var, forOf ise foreach karşılık geliyor)

// önerilen "" yerine js de '' kullanımı ikiside aynı anlama geliyor
const persons = [{id:1, name:' can '}, {id:2, name:' canan '}]
// collections olmalı
// genelde obje dizilerinde const kullanılır referans hatası yapmamk için
for (const person of persons) {
  let {name} = person;
  name = name.trim();
  console.log('person name',name);
}
const person = {id:1, name:'can', age:18};
// obje içindeki propertyleri tek tek gezmek için ise for-in, yani collection yerine bir obje üzerinde işlem yapılır.
for (const property in person) {
  // objenin böyle bir propety var mı kontrolü
  if (Object.hasOwnProperty.call(person, property)) {
    const value = person[property];
    console.log('value', value);
    // property ve property value içinde geziniyoruz. 
  }
}


