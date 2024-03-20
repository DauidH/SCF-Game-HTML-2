const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const sectionMessages = document.getElementById("messages")
const botonMascotaJugador = document.getElementById("boton-mascota")
const botonReiniciar = document.getElementById("boton-reiniciar")

const spanMascotaJugador = document.getElementById("mascota-jugador")

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const personajesCombate = document.getElementById("personajes-combate")
const personajesCombateImg = document.getElementById("personajes-combate-img")
const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

const spanVidasEnemigo = document.getElementById("vidas-enemigo")
const spanCorazonesEnemigo = document.getElementById("corazones-enemigo")
const singularVidasEnemigo = document.getElementById("singular-vidas-enemigo")
const spanVidasJugador = document.getElementById("vidas-jugador")
const spanCorazonesJugador = document.getElementById("corazones-jugador")
const singularVidasJugador = document.getElementById("singular-vidas-jugador")

const parrafoResultado = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const vs = document.getElementById("vs")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")
const historial = document.getElementById("historial")
const ronda1 = document.getElementById("ronda-1")
const ronda2 = document.getElementById("ronda-2")
const ronda3 = document.getElementById("ronda-3")
const ronda4 = document.getElementById("ronda-4")
const ronda5 = document.getElementById("ronda-5")

const parrafoMensajeFinal = document.getElementById("mensaje-final")
const mensajeFinalInner = document.getElementById("mensaje-final-inner")

const contenedorTarjetas = document.getElementById("contenedor-tarjetas")
const contenedorAtaques = document.getElementById("contenedor-ataques")

const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")
const botonArriba = document.getElementById("boton-arriba")
const botonIzquierda = document.getElementById("boton-izquierda")
const botonAbajo = document.getElementById("boton-abajo")
const botonDerecha = document.getElementById("boton-derecha")

const imgsAtaques = document.getElementById("imgs-ataques")

const sectionGraciasFinales = document.getElementById("gracias-finales")
const imagenesGraciasFinales = document.getElementById("imagenes-gracias-finales")

let mokepones = []

let ataqueJugador = []
let ataqueEnemigo = []
let numerosAtaqueEnemigo = []
let ronda = 0

let opcionDeMokepones

let inputGatungFu
let inputSheriffCat
let inputCatSparrow
let inputGathofen
let inputCatminator
let inputCatkingo

let mascotaJugador
let mascotaJugadorObjeto

let mascotaEnemigoObjeto

let ataquesJugadorObjeto
let ataquesEnemigoObjeto

let ataquesMokepon
let ataquesMokeponEnemigo

let botonPolvora
let botonFilo
let botonLetal

let botones = []

let resultado

let victoriasJugador = 0
let victoriasEnemigo = 0

let intentos = 3

let lienzo = mapa.getContext("2d")

let intervalo

let mapaBackground = new Image()
mapaBackground.src = "./assets/Mapa/mokemap.png"

let alturaQueBuscamos
let anchoDelMapa = window.innerWidth -20
const anchoMaximoDelMapa = 800

if(anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa -20
}

alturaQueBuscamos = /* anchoDelMapa * 600 / 800 */ 427.5

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

ataquesJugadorNombres = []
ataquesEnemigoNombres = []

let enemigosDerrotados = 0

class Mokepon {
    constructor(nombre, id, foto, vida, fotoMapa, elemento, x = ((anchoDelMapa * 245) / 570), y = ((alturaQueBuscamos * 235) / 427.5)) {
        this.nombre = nombre
        this.id = id
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 60
        this.alto = 60
        this.x = x
        this.y = y
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
        this.elemento = elemento
    }

    pintarMokepon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

let gatungFu = new Mokepon("Gatung Fu", "gatung-fu", "./assets/Personajes/Gatung-Fu-2.0/gatung-fu-blank-animated-unscreen-mirror.gif", 5, "./assets/Personajes/Gatung-Fu-2.0/gatung-fu-face-arma.png", "⚔️")
let sheriffCat = new Mokepon("Sheriff Cat", "sheriff-cat", "./assets/Personajes/Sheriff-Cat-2.0/sheriff-cat-blank-animated-unscreen.gif", 5, "./assets/Personajes/Sheriff-Cat-2.0/sheriff-cat-face.png", "💥")
let catSparrow = new Mokepon("Cat Sparrow", "cat-sparrow", "./assets/Personajes/Cat-Sparrow-2.0/cat-sparrow-animated-unscreen-mirror.gif", 5, "./assets/Personajes/Cat-Sparrow-2.0/cat-sparrow-face.png", "💀")
let gathofen = new Mokepon("Gathofen", "gathofen", "./assets/Personajes/Gathofen/gathofen-animated-unscreen.gif", 5, "./assets/Personajes/Gathofen/gathofen-face-arma.png", "💥💀")
let catminator = new Mokepon("Catminator", "catminator", "./assets/Personajes/Catminator/catminator-animated-unscreen-mirror.gif", 5, "./assets/Personajes/Catminator/catminator-face.png", "💥⚔️")
let catkingo = new Mokepon("Catkingo", "catkingo", "./assets/Personajes/Catkingo-2.0/catkingo-animated-unscreen-mirror.gif", 5, "./assets/Personajes/Catkingo-2.0/catkingo-face.png", "⚔️💀")

let gatungFuEnemigo = new Mokepon("Gatung Fu", "gatung-fu", "./assets/Personajes/Gatung-Fu-2.0/gatung-fu-blank-animated-unscreen-mirror.gif", 5, "./assets/Personajes/Gatung-Fu-2.0/gatung-fu-face-arma.png", "⚔️", ((anchoDelMapa * 390) / 570), ((alturaQueBuscamos * 35) / (427.5)))
let sheriffCatEnemigo = new Mokepon("Sheriff Cat", "sheriff-cat", "./assets/Personajes/Sheriff-Cat-2.0/sheriff-cat-blank-animated-unscreen.gif", 5, "./assets/Personajes/Sheriff-Cat-2.0/sheriff-cat-face.png", "💥", ((anchoDelMapa * 85) / 570), ((alturaQueBuscamos * 25) / (427.5)))
let catSparrowEnemigo = new Mokepon("Cat Sparrow", "cat-sparrow", "./assets/Personajes/Cat-Sparrow-2.0/cat-sparrow-animated-unscreen-mirror.gif", 5, "./assets/Personajes/Cat-Sparrow-2.0/cat-sparrow-face.png", "💀", ((anchoDelMapa * 390) / 570), ((alturaQueBuscamos * 310) / (427.5)))
let gathofenEnemigo = new Mokepon("Gathofen", "gathofen", "./assets/Personajes/Gathofen/gathofen-animated-unscreen.gif", 5, "./assets/Personajes/Gathofen/gathofen-face-arma.png", "💥💀", ((anchoDelMapa * 465) / 570), ((alturaQueBuscamos * 165) / (427.5)))
let catminatorEnemigo = new Mokepon("Catminator", "catminator", "./assets/Personajes/Catminator/catminator-animated-unscreen-mirror.gif", 5, "./assets/Personajes/Catminator/catminator-face.png", "💥⚔️", ((anchoDelMapa * 75) / 570), ((alturaQueBuscamos * 280) / (427.5)))
let catkingoEnemigo = new Mokepon("Catkingo", "catkingo", "./assets/Personajes/Catkingo-2.0/catkingo-animated-unscreen-mirror.gif", 5, "./assets/Personajes/Catkingo-2.0/catkingo-face.png", "⚔️💀", ((anchoDelMapa * 280) / 570), ((alturaQueBuscamos * 145) / (427.5)))

const GATUNG_FU_ATAQUES = [
    { nombre: "⚔️ Estocada", id: "boton-filo", poder: "FILO ⚔️", img: "./assets/imgs/Ataques/gatung-fu/estocada.png"},
    { nombre: "⚔️ Corte Lateral", id: "boton-filo", poder: "FILO ⚔️", img:"./assets/imgs/Ataques/gatung-fu/corte-lateral.png"},
    { nombre: "⚔️ Incisión Profunda", id: "boton-filo", poder: "FILO ⚔️", img:"./assets/imgs/Ataques/gatung-fu/incision-profunda.png"},
    { nombre: "💥 Bomba De Humo", id: "boton-polvora", poder: "POLVORA 💥", img:"./assets/imgs/Ataques/gatung-fu/bomba-de-humo.png"},
    { nombre: "💀 Kung Fu Punch!", id: "boton-letal", poder: "LETAL 💀", img:"./assets/imgs/Ataques/gatung-fu/kung-fu-punch.png"},
]
const SHERIFF_CAT_ATAQUES = [ 
    { nombre: "💥 Tiro Doble", id: "boton-polvora", poder: "POLVORA 💥", img:"./assets/imgs/Ataques/sheriff-cat/tiro-doble.png"},
    { nombre: "💥 Magnum 500!!", id: "boton-polvora", poder: "POLVORA 💥", img:"./assets/imgs/Ataques/sheriff-cat/magnum-500.png"},
    { nombre: "💥 Desenfundada Mortal", id: "boton-polvora", poder: "POLVORA 💥", img:"./assets/imgs/Ataques/sheriff-cat/desenfundada-mortal.png"},
    { nombre: "⚔️ Escarbadientes Punzante", id: "boton-filo", poder: "FILO ⚔️", img:"./assets/imgs/Ataques/sheriff-cat/escarbadientes-punzante.png"},
    { nombre: "💀 Veneno En El Abrevadero", id: "boton-letal", poder: "LETAL 💀", img:"./assets/imgs/Ataques/sheriff-cat/veneno-en-el-abrevadero.png"},
]
const CAT_SPARROW_ATAQUES = [
    { nombre: "💀 Maldición Del Perla Negra", id: "boton-letal", poder: "LETAL 💀", img: "./assets/imgs/Ataques/Cat-Sparrow/maldicion-del-perla-negra.png"},
    { nombre: "💀 Rastas Asfixiantes", id: "boton-letal", poder: "LETAL 💀", img: "./assets/imgs/Ataques/Cat-Sparrow/rastas-asfixiantes.png"},
    { nombre: "💀 Botellazo De Ron", id: "boton-letal", poder: "LETAL 💀", img:"./assets/imgs/Ataques/Cat-Sparrow/Botellazo-de-Ron.png"},
    { nombre: "💥 Bola De Cañón", id: "boton-polvora", poder: "POLVORA 💥", img:"./assets/imgs/Ataques/Cat-Sparrow/bola-de-canon.png"},
    { nombre: "⚔️ Espadazo Por La Espalda!", id: "boton-filo", poder: "FILO ⚔️", img:"./assets/imgs/Ataques/Cat-Sparrow/espadazo-por-la-espalda.png"},
]
const GATHOFEN_ATAQUES = [
    { nombre: "💥 Ametralladora", id: "boton-polvora", poder: "POLVORA 💥", img:"./assets/imgs/Ataques/gathofen/ametralladora.png"},
    { nombre: "💥 Granada", id: "boton-polvora", poder: "POLVORA 💥", img:"./assets/imgs/Ataques/gathofen/granada.png"},
    { nombre: "💀 Gas Venenoso", id: "boton-letal", poder: "LETAL 💀", img:"./assets/imgs/Ataques/gathofen/gas-venenoso.png"},
    { nombre: "💀 Cegadora", id: "boton-letal", poder: "LETAL 💀", img:"./assets/imgs/Ataques/gathofen/cegadora.png"},
    { nombre: "⚔️ Ballonetazo!", id: "boton-filo", poder: "FILO ⚔️", img:"./assets/imgs/Ataques/gathofen/ballonetazo.png"},
]
const CATMINATOR_ATAQUES = [
    { nombre: "💥 Hasta La Vista Baby!", id: "boton-polvora", poder: "POLVORA 💥", img:"./assets/imgs/Ataques/catminator/hasta-la-vista-baby.png"},
    { nombre: "💥 Perdigón De Escopeta", id: "boton-polvora", poder: "POLVORA 💥", img:"./assets/imgs/Ataques/catminator/perdigon-de-escopeta.png"},
    { nombre: "⚔️ Laser Cortante", id: "boton-filo", poder: "FILO ⚔️", img:"./assets/imgs/Ataques/catminator/laser-cortante.png"},
    { nombre: "⚔️ Cuchillandroide", id: "boton-filo", poder: "FILO ⚔️", img:"./assets/imgs/Ataques/catminator/cuchillandroide.png"},
    { nombre: "💀 Puño Metálico", id: "boton-letal", poder: "LETAL 💀", img:"./assets/imgs/Ataques/catminator/puno-metalico.png"},
]
const CATKINGO_ATAQUES = [
    { nombre: "⚔️ Corte De Hacha", id: "boton-filo", poder: "FILO ⚔️", img: "./assets/imgs/Ataques/Sin-titulo-1.png"},
    { nombre: "⚔️ Lanza A Distancia", id: "boton-filo", poder: "FILO ⚔️", img:"./assets/imgs/Ataques/Sin-titulo-1.png"},
    { nombre: "💀 Por Asgard !", id: "boton-letal", poder: "LETAL 💀", img:"./assets/imgs/Ataques/Sin-titulo-1.png"},
    { nombre: "💀 Golpe De Escudo", id: "boton-letal", poder: "LETAL 💀", img:"./assets/imgs/Ataques/Sin-titulo-1.png"},
    { nombre: "💥 Flecha Incendiaria", id: "boton-polvora", poder: "POLVORA 💥", img:"./assets/imgs/Ataques/Sin-titulo-1.png"},
]

gatungFu.ataques.push(...GATUNG_FU_ATAQUES)// para que no se pase en forma de lista sino los valores de los ataques como tal, se coloca los 3 ... iniciales.
sheriffCat.ataques.push(...SHERIFF_CAT_ATAQUES)
catSparrow.ataques.push(...CAT_SPARROW_ATAQUES)
gathofen.ataques.push(...GATHOFEN_ATAQUES)
catminator.ataques.push(...CATMINATOR_ATAQUES)
catkingo.ataques.push(...CATKINGO_ATAQUES)

gatungFuEnemigo.ataques.push(...GATUNG_FU_ATAQUES)
sheriffCatEnemigo.ataques.push(...SHERIFF_CAT_ATAQUES)
catSparrowEnemigo.ataques.push(...CAT_SPARROW_ATAQUES)
gathofenEnemigo.ataques.push(...GATHOFEN_ATAQUES)
catminatorEnemigo.ataques.push(...CATMINATOR_ATAQUES)
catkingoEnemigo.ataques.push(...CATKINGO_ATAQUES)

mokepones.push(gatungFu, sheriffCat, catSparrow, gathofen, catminator, catkingo)

function iniciarJuego() {
    sectionGraciasFinales.style.display = "none"
    sectionSeleccionarAtaque.style.display = "none"
    sectionReiniciar.style.display = "none"
    sectionMessages.style.display = "none"
    sectionVerMapa.style.display = "none"
    historial.style.display = "none"

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <div id="tarjeta-${mokepon.id}">
            <input type="radio" name="mascota" id=${mokepon.id} />
            <label class="tarjeta-de-mokepon" for=${mokepon.id}>
                <P style="margin: 0px";>${mokepon.nombre+mokepon.elemento}</P>
                <img src=${mokepon.foto} alt=${mokepon.nombre}>
            </label>
        </div>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

        inputGatungFu = document.getElementById("gatung-fu")
        inputSheriffCat = document.getElementById("sheriff-cat")
        inputCatSparrow = document.getElementById("cat-sparrow")
        inputGathofen = document.getElementById("gathofen")
        inputCatminator = document.getElementById("catminator")
        inputCatkingo = document.getElementById("catkingo")
    })

    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function seleccionarMascotaJugador() {
    if (inputGatungFu.checked) {
        alert("Seleccionaste a " + gatungFu.nombre)
        spanMascotaJugador.innerHTML = gatungFu.nombre
        desaparecerPersonajes(gatungFu)
        mascotaJugador = gatungFu.nombre
    }
    else if (inputSheriffCat.checked) {
        alert("Seleccionaste a " + sheriffCat.nombre)
        spanMascotaJugador.innerHTML = sheriffCat.nombre
        desaparecerPersonajes(sheriffCat)
        mascotaJugador = sheriffCat.nombre
    }
    else if (inputCatSparrow.checked) {
        alert("Seleccionaste a " + catSparrow.nombre)
        spanMascotaJugador.innerHTML = catSparrow.nombre
        desaparecerPersonajes(catSparrow)
        mascotaJugador = catSparrow.nombre
    }
    else if (inputGathofen.checked) {
        alert("Seleccionaste a " + gathofen.nombre)
        spanMascotaJugador.innerHTML = gathofen.nombre
        desaparecerPersonajes(gathofen)
        mascotaJugador = gathofen.nombre
    }
    else if (inputCatminator.checked) {
        alert("Seleccionaste a " + catminator.nombre)
        spanMascotaJugador.innerHTML = catminator.nombre
        desaparecerPersonajes(catminator)
        mascotaJugador = catminator.nombre
    }
    else if (inputCatkingo.checked) {
        alert("Seleccionaste a " + catkingo.nombre)
        spanMascotaJugador.innerHTML = catkingo.nombre
        desaparecerPersonajes(catkingo)
        mascotaJugador = catkingo.nombre
    }
    else {
        alert("No has seleccionado ninguna mascota, por favor selecciona alguna")
    }

    extraerAtaques(mascotaJugador)
    iniciarMapa()
}

function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i= 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })

    botonPolvora = document.getElementById("boton-polvora")
    botonFilo = document.getElementById("boton-filo")
    botonLetal = document.getElementById("boton-letal")
    botones = document.querySelectorAll(".BAtaque")

    secuenciaAtaque()
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            ataqueJugadorNombre = e.target.textContent
            ataquesJugadorNombres.push(ataqueJugadorNombre)

            let buscarAtaquesJugadorObjeto = mascotaJugadorObjeto.ataques.find(function(ataque) {
                return ataque.nombre === ataqueJugadorNombre
            })            
            ataquesJugadorObjeto = buscarAtaquesJugadorObjeto

            if (e.target.textContent.includes("💥")) {
                ataqueJugador.push("POLVORA 💥")
                boton.style.background = "#112f58"
                boton.disabled = true
            } else if (e.target.textContent.includes("⚔️")) {
                ataqueJugador.push("FILO ⚔️")
                boton.style.background = "#112f58"
                boton.disabled = true
            } else {
                ataqueJugador.push("LETAL 💀")
                boton.style.background = "#112f58"
                boton.disabled = true
            }
            ronda++
            ataqueAleatorioEnemigo()
            generarImgsAtaques()
            historial.style.display = "table"
        })  
    })
}

function generarImgsAtaques() {
    imgsAtaques.innerHTML = ""
    imgsAtaques.style.opacity = "0.95"
    imgsAtaques.style.visibility = "visible"
    setTimeout(function() {
        imgsAtaques.style.opacity = "0"
    }, 2000)
    // setTimeout(function() {
    //     imgsAtaques.style.visibility = "hidden"
    // }, 1000)

    nuevaImgAtaque = document.createElement("img")
    nuevaImgAtaque.setAttribute("class", "img-ataque")
    nuevaImgAtaque.src = ataquesJugadorObjeto.img
    imgsAtaques.appendChild(nuevaImgAtaque)

    nuevaImgAtaqueVs = document.createElement("img")
    nuevaImgAtaqueVs.setAttribute("class", "img-ataque-vs")
    nuevaImgAtaqueVs.src = "./assets/imgs/VS/vsGif.gif"
    imgsAtaques.appendChild(nuevaImgAtaqueVs)

    nuevaImgAtaqueEnemigo = document.createElement("img")
    nuevaImgAtaqueEnemigo.setAttribute("class", "img-ataque")
    nuevaImgAtaqueEnemigo.src = ataquesEnemigoObjeto.img
    imgsAtaques.appendChild(nuevaImgAtaqueEnemigo)
}

function desaparecerPersonajes(mascotaSeleccionada) {
    botonMascotaJugador.disabled = true
    sectionSeleccionarMascota.style.display = "none"
    sectionVerMapa.style.display = "flex"

    nuevoPersonajesCombate = document.createElement("p")
    nuevoPersonajesCombate.innerHTML = mascotaSeleccionada.nombre + mascotaSeleccionada.elemento
    personajesCombate.appendChild(nuevoPersonajesCombate)

    nuevoPersonajesCombateImg = document.createElement("img")
    if (mascotaSeleccionada.nombre == gatungFu.nombre) {
        nuevoPersonajesCombateImg.src = gatungFu.foto
    } else if (mascotaSeleccionada.nombre == sheriffCat.nombre) {
        nuevoPersonajesCombateImg.src = sheriffCat.foto
    } else if (mascotaSeleccionada.nombre == catSparrow.nombre) {
        nuevoPersonajesCombateImg.src = catSparrow.foto
    } else if (mascotaSeleccionada.nombre == gathofen.nombre) {
        nuevoPersonajesCombateImg.src = gathofen.foto
    } else if (mascotaSeleccionada.nombre == catminator.nombre) {
        nuevoPersonajesCombateImg.src = catminator.foto
    } else if (mascotaSeleccionada.nombre == catkingo.nombre) {
        nuevoPersonajesCombateImg.src = catkingo.foto
    }
    personajesCombateImg.appendChild(nuevoPersonajesCombateImg)
}

function seleccionarMascotaEnemigo(enemigo) {
    nuevoPersonajesCombate = document.createElement("p")
    nuevoPersonajesCombate.id = "texto-nombre-enemigo"
    nuevoPersonajesCombate.innerHTML = enemigo.nombre + enemigo.elemento
    if (enemigosDerrotados === 0) {
        personajesCombate.appendChild(nuevoPersonajesCombate)
    } else if (enemigosDerrotados !== 0) {  
        textoNombreEnemigo = document.getElementById("texto-nombre-enemigo")
        textoNombreEnemigo.innerHTML = enemigo.nombre + enemigo.elemento
    }

    spanMascotaEnemigo.innerHTML = enemigo.nombre

    nuevoPersonajesCombateImg = document.createElement("img")
    nuevoPersonajesCombateImg.id = "img-mascota-enemigo"
    nuevoPersonajesCombateImg.src = enemigo.foto
    imgMascotaEnemigo = document.getElementById("img-mascota-enemigo")
    if (imgMascotaEnemigo) {imgMascotaEnemigo.remove()}
    personajesCombateImg.appendChild(nuevoPersonajesCombateImg)

    ataquesMokeponEnemigo = enemigo.ataques
        
    alert("Te has topado con " + enemigo.nombre + " ¡A LUCHAR!")
}

function ataqueAleatorioEnemigo() {
    sectionMessages.style.display = "flex"
    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length -1)

    if (numerosAtaqueEnemigo.includes(ataqueAleatorio)) {
        return ataqueAleatorioEnemigo()
    }

    poderEscogido = ataquesMokeponEnemigo[ataqueAleatorio].poder
    ataqueEnemigo.push(poderEscogido)
    poderEscogidoNombre = ataquesMokeponEnemigo[ataqueAleatorio].nombre
    ataquesEnemigoNombres.push(poderEscogidoNombre)
    ataquesEnemigoObjeto = ataquesMokeponEnemigo[ataqueAleatorio]

    numerosAtaqueEnemigo.push(ataqueAleatorio)
    combate()
}

function combate() {
    if (ataqueEnemigo[ronda-1] == ataqueJugador[ronda-1]) {
        crearMensaje("¡Empate! 🥶")
    } else if ((ataqueJugador[ronda-1] == "FILO ⚔️" && ataqueEnemigo[ronda-1] == "LETAL 💀") || (ataqueJugador[ronda-1] == "POLVORA 💥" && ataqueEnemigo[ronda-1] == "FILO ⚔️") || (ataqueJugador[ronda-1] == "LETAL 💀" && ataqueEnemigo[ronda-1] == "POLVORA 💥")) {
        crearMensaje("¡Ganaste! 🤑🥵")
        victoriasJugador++    
        spanVidasJugador.innerHTML = victoriasJugador
        if (victoriasJugador == 1) {
            spanCorazonesJugador.innerHTML = "⭐"
            singularVidasJugador.innerHTML = "victoria"
        } else if (victoriasJugador == 2) {
            spanCorazonesJugador.innerHTML = "⭐⭐"
            singularVidasJugador.innerHTML = "victorias"
        } else if (victoriasJugador == 3) {
            spanCorazonesJugador.innerHTML = "⭐⭐⭐"
        } else if (victoriasJugador == 4) {
            spanCorazonesJugador.innerHTML = "⭐⭐⭐⭐"
        } else if (victoriasJugador == 5) {
            spanCorazonesJugador.innerHTML = "⭐⭐⭐⭐⭐"
        }
    } else {
        crearMensaje("¡Perdiste! 😰")
        victoriasEnemigo++
        spanVidasEnemigo.innerHTML = victoriasEnemigo
        if (victoriasEnemigo == 1) {
            spanCorazonesEnemigo.innerHTML = "⭐"
            singularVidasEnemigo.innerHTML = "victoria"
        } else if (victoriasEnemigo == 2) {
            spanCorazonesEnemigo.innerHTML = "⭐⭐"
            singularVidasEnemigo.innerHTML = "victorias"
        } else if (victoriasEnemigo == 3) {
            spanCorazonesEnemigo.innerHTML = "⭐⭐⭐"
        } else if (victoriasEnemigo == 4) {
            spanCorazonesEnemigo.innerHTML = "⭐⭐⭐⭐"
        } else if (victoriasEnemigo == 5) {
            spanCorazonesEnemigo.innerHTML = "⭐⭐⭐⭐⭐"
        }
    }
revisarVidas()
}

function revisarVidas() {
    const mensajeIntentos = () => {
        switch (intentos) {
            case 2: return ", tienes 2 intentos más."
            case 1: return ", tienes 1 intento más."
            default: return ""
        }
    }
    if (ronda == 5) {
        if (victoriasJugador === victoriasEnemigo) {
            crearMensajeFinal(`¡Ha sido Empate!`)
        } else if (victoriasJugador > victoriasEnemigo) {
            crearMensajeFinal("¡Felicidades! ¡Has ganado!")
        } else if (victoriasJugador < victoriasEnemigo) {
            intentos--
            crearMensajeFinal(`¡Has perdido el duelo!${mensajeIntentos()}`)
        }
    }
}

function crearMensaje(resultado) {
    parrafoResultado.innerHTML = resultado
    ataquesDelJugador.innerHTML = ataqueJugador[ronda-1]
    ataquesDelEnemigo.innerHTML = ataqueEnemigo[ronda-1]
    vs.innerHTML = "VS"

    let nuevoRondaHistorial = document.createElement("p")
    let nuevoListaHistorialJugador = document.createElement("p")
    let nuevoVsHistorial = document.createElement("p")
    let nuevoListaHistorialEnemigo = document.createElement("p")
    let nuevoResultadoHistorial = document.createElement("p")

    nuevoRondaHistorial.classList.add("celda")
    nuevoListaHistorialJugador.classList.add("celda")
    nuevoVsHistorial.classList.add("celda")
    nuevoListaHistorialEnemigo.classList.add("celda")
    nuevoResultadoHistorial.classList.add("celda")

    nuevoRondaHistorial.innerHTML = "Ronda " + ronda +": "
    nuevoListaHistorialJugador.innerHTML = ataquesJugadorNombres[ronda-1]
    nuevoVsHistorial.innerHTML = " VS "
    nuevoListaHistorialEnemigo.innerHTML = ataquesEnemigoNombres[ronda-1]
    nuevoResultadoHistorial.innerHTML = "  =  " + resultado

    const cambioRondas = () => {
        switch (ronda) {
            case 1: return ronda1
            case 2: return ronda2
            case 3: return ronda3
            case 4: return ronda4
            case 5: return ronda5
            default: break
           }
    }

    cambioRondas().appendChild(nuevoRondaHistorial)
    cambioRondas().appendChild(nuevoListaHistorialJugador)
    cambioRondas().appendChild(nuevoVsHistorial)
    cambioRondas().appendChild(nuevoListaHistorialEnemigo)
    cambioRondas().appendChild(nuevoResultadoHistorial)
}

function crearMensajeFinal(resultadoFinal) {
    mensajeFinalInner.innerHTML = resultadoFinal
    sectionReiniciar.style.display = "flex"
    if (intentos !== 0 && resultadoFinal.includes("ganado")){
        funcionBotonReiniciar("Siguiente")
    } else if (intentos !== 0){
        funcionBotonReiniciar("Reintentar")
    } else {
        funcionBotonReiniciar("Reiniciar")
    }
}

function funcionBotonReiniciar (botonResultado) {
    botonReiniciar.removeEventListener("click", siguiente)
    botonReiniciar.removeEventListener("click", reintentar)
    botonReiniciar.removeEventListener("click", reiniciar)

    botonReiniciar.innerHTML = botonResultado
    if (botonResultado === "Siguiente") {
        botonReiniciar.addEventListener("click", siguiente)
    } else if (botonResultado === "Reintentar") {
        botonReiniciar.addEventListener("click", reintentar)
    } else if (botonResultado === "Reiniciar") {
        botonReiniciar.addEventListener("click", reiniciar)
    }
}

function siguiente() {
    enemigosDerrotados++
    intentos = 3
    sectionSeleccionarAtaque.style.display = "none"
    sectionVerMapa.style.display = "flex"
    if (mascotaEnemigoObjeto.nombre === "Gatung Fu") {
        gatungFuEnemigo = null
    } else if (mascotaEnemigoObjeto.nombre === "Sheriff Cat") {
        sheriffCatEnemigo = null
    } else if (mascotaEnemigoObjeto.nombre === "Cat Sparrow") {
        catSparrowEnemigo = null
    } else if (mascotaEnemigoObjeto.nombre === "Gathofen") {
        gathofenEnemigo = null
    } else if (mascotaEnemigoObjeto.nombre === "Catminator") {
        catminatorEnemigo = null
    } else if (mascotaEnemigoObjeto.nombre === "Catkingo") {
        catkingoEnemigo = null
    }
    iniciarMapa()
    reintentar()
    if (enemigosDerrotados === 6) {
        alert("¡HAS LOGRADO SER EL LUCHADOR SUPREMO! ¡FELICIDADES, HAS TERMINADO EL JUEGO!")
        sectionVerMapa.style.display = "none"
        sectionGraciasFinales.style.display = "block"
        graciasFinales()        
    }
}

function reintentar() {
    spanCorazonesEnemigo.innerHTML = ""
    spanCorazonesJugador.innerHTML = ""
    spanVidasEnemigo.innerHTML = 0
    spanVidasJugador.innerHTML = 0
    victoriasEnemigo = 0
    victoriasJugador = 0
    sectionReiniciar.style.display = "none"
    ataquesJugadorNombres = []
    ataqueJugador = []
    botones.forEach((boton) => {
        boton.style.background = "rgba(66, 62, 39, 0.9)"
        boton.disabled = false
    })
    ronda = 0

    sectionMessages.style.display = "none"
    numerosAtaqueEnemigo = []
    ataqueEnemigo = []
    ataquesEnemigoNombres = []
    mensajeFinalInner.innerHTML = ""
    ronda1.innerHTML = ""
    ronda2.innerHTML = ""
    ronda3.innerHTML = ""
    ronda4.innerHTML = ""
    ronda5.innerHTML = ""
}

function reiniciar() {
    return location.reload()
}

function pintarCanvas() {
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )  
    mascotaJugadorObjeto.pintarMokepon()  
    if (gatungFuEnemigo) {gatungFuEnemigo.pintarMokepon()}
    if (sheriffCatEnemigo) {sheriffCatEnemigo.pintarMokepon()}
    if (catSparrowEnemigo) {catSparrowEnemigo.pintarMokepon()}
    if (gathofenEnemigo) {gathofenEnemigo.pintarMokepon()}
    if (catminatorEnemigo) {catminatorEnemigo.pintarMokepon()}
    if (catkingoEnemigo) {catkingoEnemigo.pintarMokepon()}

    botonArriba.addEventListener("touchstart", moverArriba)
    botonDerecha.addEventListener("touchstart", moverDerecha)
    botonAbajo.addEventListener("touchstart", moverAbajo)
    botonIzquierda.addEventListener("touchstart", moverIzquierda)

    botonArriba.addEventListener("touchend", detenerMovimiento)
    botonDerecha.addEventListener("touchend", detenerMovimiento)
    botonAbajo.addEventListener("touchend", detenerMovimiento)
    botonIzquierda.addEventListener("touchend", detenerMovimiento)

    botonArriba.addEventListener("mousedown", moverArriba)
    botonDerecha.addEventListener("mousedown", moverDerecha)
    botonAbajo.addEventListener("mousedown", moverAbajo)
    botonIzquierda.addEventListener("mousedown", moverIzquierda)

    botonArriba.addEventListener("mouseup", detenerMovimiento)
    botonDerecha.addEventListener("mouseup", detenerMovimiento)
    botonAbajo.addEventListener("mouseup", detenerMovimiento)
    botonIzquierda.addEventListener("mouseup", detenerMovimiento)

    if (mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0 ) {
        revisarColision(gatungFuEnemigo)
        revisarColision(sheriffCatEnemigo)
        revisarColision(catSparrowEnemigo)
        revisarColision(gathofenEnemigo)
        revisarColision(catminatorEnemigo)
        revisarColision(catkingoEnemigo)
    }
}

function moverArriba() {
    mascotaJugadorObjeto.velocidadY = - 5
}

function moverIzquierda() {
    mascotaJugadorObjeto.velocidadX = - 5
}

function moverAbajo() {
    mascotaJugadorObjeto.velocidadY = 5
}

function moverDerecha() {
    mascotaJugadorObjeto.velocidadX = 5
}

function detenerMovimiento() {
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}

function sePresionoUnaTecla(event) {
   switch (event.key) {
    case "ArrowUp":
        moverArriba()
        break
    case "ArrowDown":
        moverAbajo()
        break
    case "ArrowLeft":
        moverIzquierda()
        break
    case "ArrowRight":
        moverDerecha()
        break
    default:
        break
   }
}

function iniciarMapa() {
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)    
    intervalo = setInterval(pintarCanvas, 50)
    window.addEventListener("keydown", sePresionoUnaTecla)
    window.addEventListener("keyup", detenerMovimiento)
}

function obtenerObjetoMascota() {
    for (let i= 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            return mokepones[i]
        }
    }
}

function revisarColision(enemigo) {
    if (enemigo){
        let arribaEnemigo = enemigo.y
        let abajoEnemigo = enemigo.y + enemigo.alto
        let derechaEnemigo = enemigo.x + enemigo.ancho
        let izquierdaEnemigo = enemigo.x

        let arribaMascota = mascotaJugadorObjeto.y
        let abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
        let derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
        let izquierdaMascota = mascotaJugadorObjeto.x

        if(
            abajoMascota < arribaEnemigo ||
            arribaMascota > abajoEnemigo ||
            derechaMascota < izquierdaEnemigo ||
            izquierdaMascota > derechaEnemigo
        ) {
            return
        }

        detenerMovimiento()
        clearInterval(intervalo)
        sectionSeleccionarAtaque.style.display = "flex"
        sectionVerMapa.style.display = "none"
        mascotaEnemigoObjeto = enemigo
        seleccionarMascotaEnemigo(enemigo)
    } else {
        return
    }
}

function graciasFinales() {
    let textoGraciasFinales = document.createElement("p")
    textoGraciasFinales.id = "texto-gracias-finales"
    textoGraciasFinales.innerHTML = '¡Gracias por visitar este proyecto! <br>puedes observar el repositorio <a href="https://github.com/DauidH/DauidH.github.io">aquí</a>.'
    sectionGraciasFinales.appendChild(textoGraciasFinales)

    let crearImagenNieve = document.createElement("img")
    crearImagenNieve.setAttribute("class", "nieve")
    crearImagenNieve.src = "./assets/imgs/Gracias-finales/nieve.gif"
    imagenesGraciasFinales.appendChild(crearImagenNieve)

    let crearImagenFireworks1 = document.createElement("img")
    crearImagenFireworks1.setAttribute("class", "fireworks-1")
    crearImagenFireworks1.src = "./assets/imgs/Gracias-finales/fireworks-1.gif"
    imagenesGraciasFinales.appendChild(crearImagenFireworks1)

    let crearImagenFireworks2 = document.createElement("img")
    crearImagenFireworks2.setAttribute("class", "fireworks-2")
    crearImagenFireworks2.src = "./assets/imgs/Gracias-finales/fireworks-2.gif"
    imagenesGraciasFinales.appendChild(crearImagenFireworks2)

    let crearImagenFireworks3 = document.createElement("img")
    crearImagenFireworks3.setAttribute("class", "fireworks-3")
    crearImagenFireworks3.src = "./assets/imgs/Gracias-finales/fireworks-3.gif"
    imagenesGraciasFinales.appendChild(crearImagenFireworks3)

    let crearImagenKingCat = document.createElement("img")
    crearImagenKingCat.setAttribute("class", "king-cat")
    crearImagenKingCat.src = "./assets/imgs/Gracias-finales/king-cat.gif"
    imagenesGraciasFinales.appendChild(crearImagenKingCat)

    let crearImagenConfettiCat = document.createElement("img")
    crearImagenConfettiCat.setAttribute("class", "confetti-cat")
    crearImagenConfettiCat.src = "./assets/imgs/Gracias-finales/confetti-cat.gif"
    imagenesGraciasFinales.appendChild(crearImagenConfettiCat)
}

window.addEventListener("load", iniciarJuego)