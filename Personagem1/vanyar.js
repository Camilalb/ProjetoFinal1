function resposta(params) {
    var respost = prompt("O que o grupo deve fazer?")
    var resposta = parseInt(respost)

    while (resposta != 1 && resposta !=2){
        alert ("Escolha inválida \n Clique novamente para responder")
        break
    }
    if (resposta === 1) {
        window.location.assign("vanyar2.html")
    }
    else if (resposta == 2) {
        window.location.assign("gameover.html")
    } 
    return resposta
}