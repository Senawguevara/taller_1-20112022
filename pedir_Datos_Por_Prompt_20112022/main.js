addEventListener("DOMContentLoaded", (e) => {

    let solicitarDato = prompt('“Ingresar un numero ENTERO”' );    
    while (solicitarDato == null || /\D/.test(solicitarDato) || solicitarDato == "")
     {
        solicitarDato = prompt("Entre un número VÁLIDO: ");
     }
        console.log(`El numero ingresado es ${solicitarDato}`);
        document.querySelector('body').innerHTML=`<h1>El numero ingresado es:  ${solicitarDato}</h1> <br> <p>“Ver la consola del navegador o oprima la tecla F12 para ver los resultados”</p>`; 
});