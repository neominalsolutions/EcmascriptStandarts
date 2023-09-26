
// CommonJS formatı olarak veriyoruz.
// ilk kullanılan JS module formatımız. Nodejs pure js uygulamalarında expressjs uygulamaların hali hazır halen kullanılıyor.

const myfunc = require('./00.js-modules'); // tek bir function export
const {Sum,Division} = require('./00.js-modules'); // birden fazla function,class commonJs formatında export işlemi.

myfunc();
Sum();
Division();
