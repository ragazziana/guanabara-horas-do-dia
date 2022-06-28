function carregar(){

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas!`

if (hora >= 0 && hora < 12 ){
    img.src = 'images/morning.png'
    document.body.style.background = '#1CA4DC'
    // Bom dia!
} else if (hora >= 12 && hora < 18){
    img.src = 'images/afternoon.png'
    document.body.style.background = '#F46C2C'
    // Boa tarde!
} else {
    img.src = 'images/night.png'
    document.body.style.background = '#50507D'
    // Boa noite!
}

}


