// ekran dosyalarında ekran geliştirme için sadece bir tipi export etmemiz gerekir.
// bu durumda bu ts dosyasında sadece tek bir tipi çıkarırız.
// bu export işleminde ise default keyword ile tipi tanımlama yaparız.

export default class HomePage {

  render(){
    return `<div>Home Page</div>`
  }

}

export class Deneme2 {
  
}