function resposta1() {
    var respost = prompt("O que o grupo deve fazer? Escolha entre 1 ou 2.")
    console.log (respost)
    
    while (respost != 1 && respost != 2){
        alert ("Escolha inválida \n Clique novamente para responder")
        respost = prompt("O que o grupo deve fazer?")
    }

    if (respost == 1) {
        location.href = "teleriGO1.html"
        
    } else {
        location.href = "teleri2.html"

    } 
    return 
}
