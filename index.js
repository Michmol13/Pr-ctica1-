const idiomaActual = document.getElementById('idioma');
const listaIdiomas = document.getElementById('idiomas');
const idiomas = document.getElementsByClassName('opcion');

//Info
const titulo = document.getElementById('titulo-info');
const parrafo = document.getElementById('parrafo-info');

// Toggle lista idiomas
idiomaActual.addEventListener('click',()=>{
    listaIdiomas.classList.toggle('toggle');
});

const opcionesArray = Array.from(idiomas);

opcionesArray.forEach((opcion)=>{
    opcion.addEventListener('click',()=>{
        const idioma = opcion.getElementsByTagName('span')[0].textContent.toLowerCase();
        estableceridioma(idioma);
    })
})

function estableceridioma(idioma) {
    idiomaActual.getElementsByTagName('img')[0].src = `banderas/${idioma}.svg`;
    switch (idioma) {
        case 'Ingles':
            titulo.textContent = 'Your childrens lives are in your hands'
            titulo.textContent = '¡Childhood cancer cannot be prevented, but it can be faced!'
            parrafo.textContent = 'For early detection and care.'
            parrafo.textContent = 'What is cancer?'
            break;
        case 'Español':
            titulo.textContent = 'La vida de tus hijos esta en tus manos'
            titulo.textContent = '!El cáncer infantil no se puede prevenir, pero sí enfrentar¡'
            parrafo.textContent = 'Por una detección y atención temprana.'
            parrafo.textContent = '¿Qué es el cáncer?'
        case 'Portugues':
            titulo.textContent = 'A vida dos seus filhos está em suas mãos'
            titulo.textContent = '¡O câncer infantil não pode ser prevenido, mas pode ser enfrentado!'
            parrafo.textContent = 'Para detecção e cuidados precoces.'
            parrafo.textContent = 'O que é câncer?'
        default:
            break;
    }
}
