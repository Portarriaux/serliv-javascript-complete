// function init () {
//    let isValid = true
//    console.log("init modal", isValid)
// }
// init()

   (function (win, doc) {
      let isValid = true
      win.alert("Olá mundo")
      console.log("init menu", isValid)

      function init(){
         console.log("init do modal")
      }
      init()
      
   })(window, document)