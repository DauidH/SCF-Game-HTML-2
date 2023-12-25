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
const rondaHistorial = document.getElementById("ronda-historial")
const listaHistorialJugador = document.getElementById("lista-historial-jugador")
const vsHistorial = document.getElementById("vs-historial")
const listaHistorialEnemigo = document.getElementById("lista-historial-enemigo")
const resultadoHistorial = document.getElementById("resultado-historial")

const parrafoMensajeFinal = document.getElementById("mensaje-final")

const contenedorTarjetas = document.getElementById("contenedor-tarjetas")
const contenedorAtaques = document.getElementById("contenedor-ataques")

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

let mascotaAleatoria
let mascotaJugador

let ataquesMokepon

let ataquesMokeponEnemigo

let botonFuego
let botonAgua
let botonTierra

let botones = []

let resultado

let victoriasJugador = 0
let victoriasEnemigo = 0

class Mokepon {
    constructor(nombre, id, foto, vida) {
        this.nombre = nombre
        this.id = id
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let gatungFu = new Mokepon("Gatung Fu", "gatung-fu", "./assets/Personajes/Gatung-Fu-2.0/gatung-fu-blank-animated-unscreen-mirror.gif", 5)
let sheriffCat = new Mokepon("Sheriff Cat", "sheriff-cat", "./assets/Personajes/Sheriff-Cat-2.0/sheriff-cat-blank-animated-unscreen.gif", 5)
let catSparrow = new Mokepon("Cat Sparrow", "cat-sparrow", "./assets/Personajes/Cat-Sparrow-2.0/cat-sparrow-animated-unscreen-mirror.gif", 5)
let gathofen = new Mokepon("Gathofen", "gathofen", "./assets/Personajes/Gathofen/gathofen-animated-unscreen.gif", 5)
let catminator = new Mokepon("Catminator", "catminator", "./assets/Personajes/Catminator/catminator-animated-unscreen-mirror.gif", 5)
let catkingo = new Mokepon("Catkingo", "catkingo", "./assets/Personajes/Catkingo/catkingo-animated-unscreen-mirror.gif", 5)

gatungFu.ataques.push(
    { nombre: "🌱", id: "boton-tierra", poder: "TIERRA 🌱"},
    { nombre: "🌱", id: "boton-tierra", poder: "TIERRA 🌱"},
    { nombre: "🌱", id: "boton-tierra", poder: "TIERRA 🌱"},
    { nombre: "🔥", id: "boton-fuego", poder: "FUEGO 🔥"},
    { nombre: "💧", id: "boton-agua", poder: "AGUA 💧"},
)

sheriffCat.ataques.push(
    { nombre: "🔥", id: "boton-fuego", poder: "FUEGO 🔥"},
    { nombre: "🔥", id: "boton-fuego", poder: "FUEGO 🔥"},
    { nombre: "🔥", id: "boton-fuego", poder: "FUEGO 🔥"},
    { nombre: "💧", id: "boton-agua", poder: "AGUA 💧"},
    { nombre: "🌱", id: "boton-tierra", poder: "TIERRA 🌱"},
)

catSparrow.ataques.push(
    { nombre: "💧", id: "boton-agua", poder: "AGUA 💧"},
    { nombre: "💧", id: "boton-agua", poder: "AGUA 💧"},
    { nombre: "💧", id: "boton-agua", poder: "AGUA 💧"},
    { nombre: "🔥", id: "boton-fuego", poder: "FUEGO 🔥"},
    { nombre: "🌱", id: "boton-tierra", poder: "TIERRA 🌱"},
)

gathofen.ataques.push(
    { nombre: "🔥", id: "boton-fuego", poder: "FUEGO 🔥"},
    { nombre: "🔥", id: "boton-fuego", poder: "FUEGO 🔥"},
    { nombre: "💧", id: "boton-agua", poder: "AGUA 💧"},
    { nombre: "💧", id: "boton-agua", poder: "AGUA 💧"},
    { nombre: "🌱", id: "boton-tierra", poder: "TIERRA 🌱"},
)

catminator.ataques.push(
    { nombre: "🔥", id: "boton-fuego", poder: "FUEGO 🔥"},
    { nombre: "🔥", id: "boton-fuego", poder: "FUEGO 🔥"},
    { nombre: "🌱", id: "boton-tierra", poder: "TIERRA 🌱"},
    { nombre: "🌱", id: "boton-tierra", poder: "TIERRA 🌱"},
    { nombre: "💧", id: "boton-agua", poder: "AGUA 💧"},
)

catkingo.ataques.push(
    { nombre: "🌱", id: "boton-tierra", poder: "TIERRA 🌱"},
    { nombre: "🌱", id: "boton-tierra", poder: "TIERRA 🌱"},
    { nombre: "💧", id: "boton-agua", poder: "AGUA 💧"},
    { nombre: "💧", id: "boton-agua", poder: "AGUA 💧"},
    { nombre: "🔥", id: "boton-fuego", poder: "FUEGO 🔥"},
)

mokepones.push(gatungFu, sheriffCat, catSparrow, gathofen, catminator, catkingo)


function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = "none"
    sectionReiniciar.style.display = "none"
    sectionMessages.style.display = "none"
    historial.style.display = "none"

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <div id="tarjeta-${mokepon.id}">
            <input type="radio" name="mascota" id=${mokepon.id} />
            <label class="tarjeta-de-mokepon" for=${mokepon.id}>
                <P style="margin: 0px";>${mokepon.nombre}</P>
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
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function seleccionarMascotaJugador() {
    if (inputGatungFu.checked) {
        alert("Seleccionaste a " + gatungFu.nombre)
        spanMascotaJugador.innerHTML = gatungFu.nombre
        desaparecerPersonajes(gatungFu.nombre)
        mascotaJugador = gatungFu.nombre
    }
    else if (inputSheriffCat.checked) {
        alert("Seleccionaste a " + sheriffCat.nombre)
        spanMascotaJugador.innerHTML = sheriffCat.nombre
        desaparecerPersonajes(sheriffCat.nombre)
        mascotaJugador = sheriffCat.nombre
    }
    else if (inputCatSparrow.checked) {
        alert("Seleccionaste a " + catSparrow.nombre)
        spanMascotaJugador.innerHTML = catSparrow.nombre
        desaparecerPersonajes(catSparrow.nombre)
        mascotaJugador = catSparrow.nombre
    }
    else if (inputGathofen.checked) {
        alert("Seleccionaste a " + gathofen.nombre)
        spanMascotaJugador.innerHTML = gathofen.nombre
        desaparecerPersonajes(gathofen.nombre)
        mascotaJugador = gathofen.nombre
    }
    else if (inputCatminator.checked) {
        alert("Seleccionaste a " + catminator.nombre)
        spanMascotaJugador.innerHTML = catminator.nombre
        desaparecerPersonajes(catminator.nombre)
        mascotaJugador = catminator.nombre
    }
    else if (inputCatkingo.checked) {
        alert("Seleccionaste a " + catkingo.nombre)
        spanMascotaJugador.innerHTML = catkingo.nombre
        desaparecerPersonajes(catkingo.nombre)
        mascotaJugador = catkingo.nombre
    }
    else {
        alert("No has seleccionado ninguna mascota, por favor selecciona alguna")
    }
    extraerAtaques(mascotaJugador)
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

    botonFuego = document.getElementById("boton-fuego")
    botonAgua = document.getElementById("boton-agua")
    botonTierra = document.getElementById("boton-tierra")
    botones = document.querySelectorAll(".BAtaque")

    secuenciaAtaque()
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            if (e.target.textContent === "🔥") {
                ataqueJugador.push("FUEGO 🔥")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled = true
            } else if (e.target.textContent === "💧") {
                ataqueJugador.push("AGUA 💧")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled = true
            } else {
                ataqueJugador.push("TIERRA 🌱")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled = true
            }
            ronda++
            ataqueAleatorioEnemigo()
            historial.style.display = "flex"
        })  
    })
}

function desaparecerPersonajes(mascotaSeleccionada) {
    botonMascotaJugador.disabled = true
    sectionSeleccionarMascota.style.display = "none"
    sectionSeleccionarAtaque.style.display = "flex"

    nuevoPersonajesCombate = document.createElement("p")
    nuevoPersonajesCombate.innerHTML = mascotaSeleccionada
    personajesCombate.appendChild(nuevoPersonajesCombate)

    nuevoPersonajesCombateImg = document.createElement("img")
    if (mascotaSeleccionada == gatungFu.nombre) {
        nuevoPersonajesCombateImg.src = gatungFu.foto
    } else if (mascotaSeleccionada == sheriffCat.nombre) {
        nuevoPersonajesCombateImg.src = sheriffCat.foto
    } else if (mascotaSeleccionada == catSparrow.nombre) {
        nuevoPersonajesCombateImg.src = catSparrow.foto
    } else if (mascotaSeleccionada == gathofen.nombre) {
        nuevoPersonajesCombateImg.src = gathofen.foto
    } else if (mascotaSeleccionada == catminator.nombre) {
        nuevoPersonajesCombateImg.src = catminator.foto
    } else if (mascotaSeleccionada == catkingo.nombre) {
        nuevoPersonajesCombateImg.src = catkingo.foto
    }
    personajesCombateImg.appendChild(nuevoPersonajesCombateImg)

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    mascotaAleatoria = aleatorio(0, mokepones.length - 1)
    mascotaSeleccionadaEnemigo = mokepones[mascotaAleatoria].nombre
 
    nuevoPersonajesCombate = document.createElement("p")
    nuevoPersonajesCombate.innerHTML = mascotaSeleccionadaEnemigo
    personajesCombate.appendChild(nuevoPersonajesCombate)

    spanMascotaEnemigo.innerHTML = mascotaSeleccionadaEnemigo

    nuevoPersonajesCombateImg = document.createElement("img")
    nuevoPersonajesCombateImg.setAttribute("class", "img-mascota-enemigo")
    nuevoPersonajesCombateImg.src = mokepones[mascotaAleatoria].foto
    personajesCombateImg.appendChild(nuevoPersonajesCombateImg)

    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
        
    alert("Tu enemigo ha escogido a " + mascotaSeleccionadaEnemigo)
}

function ataqueAleatorioEnemigo() {
    sectionMessages.style.display = "flex"
    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length -1)

    if (numerosAtaqueEnemigo.includes(ataqueAleatorio)) {
        return ataqueAleatorioEnemigo()
    }

    poderEscogido = mokepones[mascotaAleatoria].ataques[ataqueAleatorio].poder
    ataqueEnemigo.push(poderEscogido)

    numerosAtaqueEnemigo.push(ataqueAleatorio)
    console.log(ataqueEnemigo)
    combate()
}

function combate() {
    if (ataqueEnemigo[ronda-1] == ataqueJugador[ronda-1]) {
        crearMensaje("¡Empate! 🥶")
    } else if ((ataqueJugador[ronda-1] == "FUEGO 🔥" && ataqueEnemigo[ronda-1] == "TIERRA 🌱") || (ataqueJugador[ronda-1] == "AGUA 💧" && ataqueEnemigo[ronda-1] == "FUEGO 🔥") || (ataqueJugador[ronda-1] == "TIERRA 🌱" && ataqueEnemigo[ronda-1] == "AGUA 💧")) {
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
    if (ronda == 5) {
        if (victoriasJugador === victoriasEnemigo) {
            crearMensajeFinal("¡Ha sido Empate!")
        } else if (victoriasJugador > victoriasEnemigo) {
            crearMensajeFinal("¡Felicidades! ¡Has ganado!")
        } else if (victoriasJugador < victoriasEnemigo) {
            crearMensajeFinal("¡Has perdido el duelo!")
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

    nuevoRondaHistorial.innerHTML = "Ronda " + ronda +": "
    nuevoListaHistorialJugador.innerHTML = ataqueJugador[ronda-1]
    nuevoVsHistorial.innerHTML = " VS "
    nuevoListaHistorialEnemigo.innerHTML = ataqueEnemigo[ronda-1]
    nuevoResultadoHistorial.innerHTML = "  =  " + resultado

    rondaHistorial.appendChild(nuevoRondaHistorial)
    listaHistorialJugador.appendChild(nuevoListaHistorialJugador)
    vsHistorial.appendChild(nuevoVsHistorial)
    listaHistorialEnemigo.appendChild(nuevoListaHistorialEnemigo)
    resultadoHistorial.appendChild(nuevoResultadoHistorial)
}

function crearMensajeFinal(resultadoFinal) {
    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoFinal
    parrafoMensajeFinal.appendChild(parrafo)
    sectionReiniciar.style.display = "flex"
}

function reiniciarJuego() {
    location.reload()
}

window.addEventListener("load", iniciarJuego)