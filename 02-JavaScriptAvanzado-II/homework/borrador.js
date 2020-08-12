//Closures 
var creaFuncion = function() {
    var arreglo =[];
    
    for(var i = 0; i < 2; i++){
      arreglo.push(
        function () {
          return console.log(i);
        }
      )
    }
    return arreglo;
  }
  
  var arr = creaFuncion();
  
  arr[0]();
  

/////////////////////////
//IIFE
var creaFuncion = function() {
    var arreglo =[];
    
    for(var i = 0; i <3; i++){
        //IIFE
      arreglo.push(
          (function(j){
          return function(){console.log(j);}
        }(i)))
    }
    return arreglo;
  }
  
  var arr = creaFuncion();
  
  arr[2]();
   
  
//////////////////////////////////////////
function hacerSaludo(lenguaje) {
  if(lenguaje==='en'){
    return function(){
      console.log('Hi!');
    }
  }

  if(lenguaje==='es'){
    return function(){
      console.log('Hola!');
    }
  }
}

var saludoIngles = hacerSaludo('en');
var saludoEspañol = hacerSaludo('es');

saludoEspañol();