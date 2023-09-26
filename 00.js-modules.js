// CommonJS module formatıda var ECMASCRIPT module formatı öncesinde js dosyalarının birbileri module olarak haberleşmesi için bu module sistemini kullanıyorduk.

function MyFunc() {

}

module.exports = MyFunc();



function Sum() {
  
}

function Division() {
  
}

// birden fazla değeri bu dosyadan çıkar.
module.exports = {Sum,Division}
