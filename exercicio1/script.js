//PARTE 1
let numero = prompt("Digite um numero.")

    if(numero %2==0)
console.log("Divisivel por 2")
    if(numero %3==0){
console.log("Divisivel por 3.")
    }
    if(numero %2==0 && numero%3==0){
console.log("Divisivel por 2 e 3.")
    }
    else{
        console.log("divisivel por nenhum dos dois")
    }

//PARTE 2

    if(numero %2 === 0 || numero %3 === 0){
        console.log("divisivel por 2 OU 3")
    }
    else{
        console.log("não é divisivel por 2 OU 3")
    }
    


