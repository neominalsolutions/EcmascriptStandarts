// js yarı asenkron bir dil
// web doğası gereği asenkron çalışmak zorundadır.
// senkron operasyonlar (eş zamanlı) sırası ile çalışır

const a = 5;
const b = 10;

const z = a * b; // 50
console.log('z', z);

// uzak bir sunucudan veri çekme işlemi, soket bağlantısı, api üzerinden haberleşme,timing işlemleri asenkron çalışması gereken yapılar.
// sonucun ne zaman döneceğine dair kesin bir bilgimiz. 
// kodlar sıralı çalışmaz, öncelik senkron kodlara verilir, JS asenkron kodları işleri bitince senkron kod blokları arasına yerleştirir.

const y = 15; // 1.
console.log('y',y); // 15

// JS de asenkron kod blokları Event Looping mekanizmasına girer ve Micro Task Queeu dediğimi bir kuyrukda Browser tarafından işlenir. Dönen sonuçlar JS kod bloklarını çalıştırır. 
const i1 = setInterval(() => { // 4. // asenkron kod blogları birbirinden bağımsız çalışır.
    const r = 25;
    console.log('r',r); // 25
    clearInterval(i1);
}, 1000);


const i2 = setInterval(() => { // 3.
  const f = 45;
  console.log('f',f); // 45 
  clearInterval(i2);
}, 250); // 250 ms

const k = 35;
console.log('k',k); // 35 // 2.


// function callback yapısı asenkron programlamanın il çıkışı.
// fonkisyonun kendi işini yaptıktan sonra işi başka bir fonkisyone devretmesi olayına callback diyoruz.
// btnClick onClick=function() { // showMessage() }

function Do(successCb,errorCb,completeCb) { // fonsiyon içine fonsiyonu paramtere olarak geçtik.
  const g = 16;
  if(g % 2 == 0){
    // OnSuccess('a', null);
    // OnComplete();
    successCb('kalansız bölündür', completeCb)
  } else {
    errorCb('0 bölünme hatası')
  }
}

function OnSuccess(message, completeCb) {
  // console.log('onSuccess start')
  setTimeout(() => {
    if(completeCb != undefined) {
      console.log('message',message) 
      return completeCb();
    }
    
  }, 2000)
  // console.log('onSuccess end')
}

function OnError(message) {
  console.log('message',message)   
}

function OnComplete() {
  console.log('işlem sonlandı')
}

Do(OnSuccess,OnError,OnComplete);

// Es5 ile function callback yapısı

// ES6 da asenkron programlama için  (Promise)
// Söz sonuç döndürme zamanı belirsiz olan yapıların, çalıştığında döndürüğü sonuç
// resolve (cb) => söz tutma // 200, 201, 204
// reject (cb) => hata oldu // 404, 401, 500, 403
// asenkron kod bloklarını promise ile sarmallayarak yazıyoruz.

// promise declaration aşaması
const p1 = new Promise((resolve,reject) => {
  // const a = 5;
  // const sayi = window.prompt("sayıyı giriniz");
  const sayi=5;
  if(Number(sayi) % 5 == 0){
    setTimeout(() => {
      resolve({sayi:sayi})
    }, 1000);

  } else {
    reject('5e kalansız bölünmez'); // içine herhangi bir tipte param tanımlayabiliriz.
  }
});
const p2 = Promise.resolve({id:1,name:'ali', luckyNumber:7});


p1.then(p1Res => {
  console.log('p1Res', p1Res);
})

p2.then(p2Res => {
  console.log('p2Res', p2Res);
})

// sıralı işlemler için 1. yöntem
// promise execution aşaması
p1.then(result => { // p1 çözüldüğünde // 1. blok veriyi doğru çekti işi tamamladı 2. asenkron kod blogunu sonucu döndü.
  console.log('result: ' + result.sayi);
  p2.then(result2 => { // 2.asenkron kod bloguda bir asenkron sonuc bekledi. 1. asenkron sonuca göre bir karar verip bir algoritma çalıştırdı.
    if(result2.luckyNumber < result.sayi){
      console.log('girilen sayı şanslı sayıdan büyük');
    } else {
      console.log('girilen sayı şanslı sayıdan küçük');
    }
  }).catch(err => {
    console.log('err2: ' + err);
  })

}).catch(err => {
  console.log('err: ' + err);
}).finally(()=>{
  // hata olsada olmasa çalışır.
  // loading hide
  // bitmesi gereken iş kodlarını bu blokta yazarız.
  console.log('işlem bitti');
});

// promise chain => promise zinciri, asenkron kod bloglarını kendi içlerinde birbirine bağlı senkron kod bloglarına dönüştürmek için kullanılan bir teknik.

// 1.promise.all => yönetim otomatik olarak js de oluyor

// birden fazla asenkron kodu aynı anda çözümleme ihtiyacımız olan durumlarda kullanılır
Promise.all([p1,p2]).then(response => {
  // işlemlerin hepsi gerçekleştiyse (commit) tek resolve
  console.log('response', response);
}).catch(err => {
  console.log('err',err);
  // rollback tek reject
  // tek bir hatalı durum tüm kod blogun iptal edilemesi anlamına geliyor.
  // yani promiselerden 1 de hata durumu olduğunda err ile yakalayabiliriz.
});

// eğer hata durumu yoksa tüm promiseleri resolve eder sonuçları bir dizi formatında verir result [p1Result,p2Result]

// Promise.all otomatik resolve yaptığı için kod blogunda bazı kontrolleri yapamamktayız. kendi kontrollerimiz yaptığımız kod blokları ile çalışırken promise.chain yapısı kullanıyoruz.


// user bilgisini çekeyim // Postgres
// user ait role bilgisini çeyim, MongoDb
// user ait yetki bilgisini çekip // Redis

// {user:{name:'ali'}, roles:['admin'], permissions:[{type:'create', value:'user'}]}

// birden fazla operasyonun pormise.chain ile zincirleme olarak sıralı çalışmasını garanti etmiş olduk
function GetUserDetails() {
  
  let userInfo = {};

  // chain yapısında promise kullanırken her bir promise arrow function yazalım.
  const p1 = () => new Promise((resolve,reject) => {
    setTimeout(()=> {

      userInfo = {id:1,username:'ali',roles:[], permissions:[]}
      resolve(userInfo)
    },1000)
  });

  const p2 = () => new Promise((resolve,reject) => {
    setTimeout(()=> {
      userInfo.roles.push('admin');
      userInfo.roles.push('manager');
      // console.log('userInfo', userInfo);
      resolve(userInfo)
     
    },500)
  })

  const p3 = () =>  new Promise((resolve,reject) => {
    setTimeout(()=> {
      userInfo.permissions = [{type:'create',value:'user'},{type:'edit', value:'user'}];
      resolve(userInfo)
      // reject('roller çekilirken hata oluştu');
    },500)
  })

 // p1 çözülmeden p2 girme p2 çözülmeden p3 girme
 return p1().then(p2).then(p3);

}

GetUserDetails().then(response => {
  console.log('p-chain', response);
}).catch(err => {
  console.log('err', err);
})














