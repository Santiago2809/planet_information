const body               = document.querySelector('body');
const listaInformacion   = document.querySelector('.lista_informacion');
const listasArreglo      = listaInformacion.childNodes;   
let arregloListas        = [];
const header             = document.querySelector('.header');
const divListas          = document.querySelector('.div_listas_informacion')
const divInfoPrincipal   = document.querySelector('.informacion-principal');
const navInfo            = document.querySelector('.navegacion_info');
const menuHmaburguesa    = document.querySelector('.menu_hamburguesa');
const navPlanetas        = document.querySelector('.nav');

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

menuHmaburguesa.addEventListener('click', e => {
    if ( navPlanetas.style.display == 'grid' ) {
        navPlanetas.style.display = 'none';
    } else {
        navPlanetas.style.display = 'grid';
    }
})
const verifyVisibilty = (entries) => {
    const entry = entries[0];

    // A continuacion en el observer comprobaremos si se ve o no el header, y dependiendo de esto haremos un proceso
    if (entry.isIntersecting == false) {
        navPlanetas.style.display = 'none';
        navInfo.style.display = 'flex';
        if ( navInfo.children[0].style.borderBottom != 'none' ) {
            navInfo.children[0].style.borderBottom = '3px solid #F13B26';
        }
        navInfo.addEventListener('click', e => {
            const boton = e.target;
            const generalLista1 = document.getElementById('01');
            const generalLista2 = document.getElementById('02');
            const generalLista3 = document.getElementById('03');
            switch (boton.innerText) {
                case 'General':
                    // console.log('Es general');
                    generalLista1.style.display = 'block' 
                    generalLista2.style.display =  'none'
                    generalLista3.style.display =  'none'
                    navInfo.children[0].style.borderBottom = '3px solid #F13B26'
                    navInfo.children[1].style.borderBottom = 'none'
                    navInfo.children[2].style.borderBottom = 'none'
                    break
                case 'Estructura':
                    // console.log('Es estructura');
                    generalLista1.style.display = 'none' 
                    generalLista2.style.display =  'block'
                    generalLista3.style.display =  'none'
                    navInfo.children[0].style.borderBottom = 'none'
                    navInfo.children[1].style.borderBottom = '3px solid #F13B26'
                    navInfo.children[2].style.borderBottom = 'none'
                    break
                case 'Superficie':
                    // console.log('Es superficie');
                    generalLista1.style.display = 'none' 
                    generalLista2.style.display =  'none'
                    generalLista3.style.display =  'block'
                    navInfo.children[0].style.borderBottom = 'none'
                    navInfo.children[1].style.borderBottom = 'none'
                    navInfo.children[2].style.borderBottom = '3px solid #F13B26'
                    break
                default:
                    break
            }
        })


    } else {
        navInfo.style.display = 'none';
    }
}

// este codigo nos permite observar constantemente el ancho de la pantalla para asi actuar en distintas medidas del width
if (ResizeObserver) {

    const documento = document.querySelector('html');
    const resize = new ResizeObserver( entries => {
        const ancho = entries[0].contentRect.width;
        if ( ancho < 550 ) {
            listaInformacion.style.display = 'none';
            navPlanetas.style.display = 'none';
            const observer = new IntersectionObserver(verifyVisibilty);
            observer.observe(header);            

        } else if ( ancho > 550) {
            navPlanetas.style.display = 'flex';
            listaInformacion.style.display = 'block';
        }
    })
    resize.observe( documento );
}

