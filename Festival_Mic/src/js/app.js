document.addEventListener('DOMContentLoaded', function () {
    initApp();
});

function initApp() {
    stickyNav();
    createGallery();
    scrollNav();
    scrollTitle();

}

// Coding stick  Navigation
function stickyNav() {
    const nav = document.querySelector('.header');
    const sobreFestival = document.querySelector('.sobre-festival');
    const body = document.querySelector('body');

    window.addEventListener('scroll', function () {
        // getBoundingClientRect: Nos ayuda a identificar donde se encuentra el elemento dentro de la ventana

        if (sobreFestival.getBoundingClientRect().top < 0) {
            nav.classList.add('stick');
            body.classList.add('body-scroll');
        } else {
            nav.classList.remove('stick');
            body.classList.remove('body-scroll');
        }
    });
}



//code to Scrolling Nav
function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion-principal a');
    enlaces.forEach(enlaces => {
        enlaces.addEventListener('click', function (e) {
            e.preventDefault();
            const listenerSection = e.target.attributes.href.value; // target identifica el element // attributes nos ayuda cuando son atributos como clases 
            const section = document.querySelector(listenerSection);
            section.scrollIntoView({
                behavior: "smooth"
            });
        });
    });
}


 //code to scrolling titlebar
function scrollTitle() {
    const title = document.querySelectorAll('.title-nav');
    title.forEach(titles => {
        titles.addEventListener('click', (e) => {
            const listener = e.target.attributes.href.value;
            const selection = document.querySelector(listener)
            selection.scrollIntoView({
                behavior: "smooth"
            });
        })
    })
}



//Code for gallery
function createGallery() {
    const gallery = document.querySelector('.galeria-imagenes');

    for (let index = 1; index <= 12; index++) {
        // console.log(index);
        const picture = document.createElement('picture');
        picture.innerHTML = `   
        <source srcset="build/img/thumb/${index}.avif" type="image/avif">
        <source srcset="build/img/thumb/${index}.webp" type="image/webp">
        <img width="200" height="300" src="build/img/thumb/${index}.jpg" alt="Imagen Galeria"
            title="Imagenes festival 2022">
        `;

        picture.onclick = function () {
            showImage(index);  // lo volvemos callback para poder pasarle parametros de lo contrario nos llamria todos los elementos al mismo tiempo
        }
        gallery.appendChild(picture);
        // console.log(picture);
    }
}



function showImage(id) {

    const picture = document.createElement('picture');
    picture.innerHTML = `   
    <source srcset="build/img/grande/${id}.avif" type="image/avif">
    <source srcset="build/img/grande/${id}.webp" type="image/webp">
    <img width="200" height="300" src="build/img/grande/${id}.jpg" alt="Imagen Galeria"
        title="Imagenes festival 2022">
    `;

    // create Overlay with image
    const overlay = document.createElement('DIV');
    overlay.appendChild(picture);
    overlay.classList.add('overlay');

    overlay.onclick = function () {
        const body = document.querySelector('body');
        body.classList.remove('fixed-image');
        overlay.remove()
    }

    //button close modal
    const closeModal = document.createElement('P');
    closeModal.textContent = 'x';
    closeModal.classList.add('btn-close');

    //button close modal
    closeModal.onclick = function () {
        const body = document.querySelector('body');
        body.classList.remove('fixed-image');
        overlay.remove();
    }

    overlay.appendChild(closeModal);


    // add HTML to overlay
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fixed-image');
}
