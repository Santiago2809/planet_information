const listaInformacion   = document.querySelector('.lista_informacion');
const listasArreglo      = listaInformacion.childNodes;   
let arregloListas        = [];

const textos = document.querySelectorAll('.texto-info');

listasArreglo.forEach( lista => {
    // console.log( lista.nodeName);
    // console.log( (lista.nodeName.includes('LI')) ? 'es lista' : '' );
    if (lista.nodeName.includes('LI') ) {
        arregloListas.push( lista );
        // console.log( arreglo );
    }
})
arregloListas.forEach( lista => {
    lista.addEventListener('click', e => {
        if ( e.target.classList.value != 'item_actual') {
            arregloListas.forEach(lista => {
                if ( lista.classList.value == 'item_actual') {
                    lista.classList.remove('item_actual');
                }
            })
            e.target.classList.add('item_actual');
            textos.forEach(texto => {
                if (e.target.innerHTML.slice(0,2) == texto.id ) {
                    texto.classList.add('texto-actual');
                }
                if (e.target.innerHTML.slice(0,2) != texto.id) {
                    if ( texto.classList.contains('texto-actual')) {
                        texto.classList.remove('texto-actual');
                    }
                    // console.log( texto.classList.contains('texto-actual') );
                }
            })
            
        }
    })
})
textos.forEach( texto => {
    console.log( texto );
})