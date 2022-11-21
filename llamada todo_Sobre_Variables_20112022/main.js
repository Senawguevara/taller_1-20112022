addEventListener("DOMContentLoaded", (e) => {

    document.querySelector("body").innerHTML = '<h1>“Ver la consola del navegador o oprima la tecla F12 para ver los resultados”</h1>'
  
    let string = "Esto es un String";
    let number = 1.5636;
    let boleano= false;
    const constante = 'Esto es una constante';

    console.table({string,number,boleano,constante});
    console.log(typeof string);    
    console.log(typeof number);
    console.log(typeof Boleano);
    console.log(typeof constante);
    
    })