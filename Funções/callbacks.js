/* function teste(cb) {
   console.log("Função teste")
   console.log("EX:",cb)
   console.log(typeof cb)
   cb()
}

function fn() {
   console.log("Função anonima de callback")
}

teste(fn) */

const teste = function teste(cb) {
   console.log("Função teste")
   cb(30)
}

const fn = function (param) {
   console.log("Função anonima de callback")
   console.log(param)
}
// fn()

teste(fn)