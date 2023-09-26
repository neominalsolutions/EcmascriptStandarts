// ES7 ile birlikte sıralı asenkron işlemleri yönetmek için async await yapısı geldi.
// functionlarımızı async olarak işaretleyip sıralı bir şekilde asenkton kod bloklarını çözümleyebiliyoruz.

const p1 = Promise.resolve({id:1,name:'ali'});
const p2 = Promise.resolve(["admin","manager"]);
const p3 = Promise.resolve([{type:"create", value:"user"}, {type:"edit", value:"user"}]);
// const p4 = Promise.reject('hata');
// not bir şey promise değilse await ile bekletemeyiz.
(async function init() {
  // promise chain yerine kullanabiliriz.
  try {
    const userRes = await p1; // 1s await birinci işlem resolve olmadan 2. işleme geçme
    const roleRes = await p2; // 2s
    const permissionRes = await p3;  // 3sn
    // await p4; // reject eden kod blogu
    // toplam result 6s döneceği için sadece sıralı asenkton işlemlerde tercih ediyor.
    const response = {user: userRes, roles: roleRes, permissions: permissionRes};

    console.log('response', response);

  } catch (error) {
    console.log('error', error);
  } finally  {
    console.log('hata olsun olmasın bu kod blogu çalışır')
  }
})() // self invoked functions