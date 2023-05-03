function initApp(){stickyNav(),createGallery(),scrollNav(),scrollTitle()}function stickyNav(){const e=document.querySelector(".header"),t=document.querySelector(".sobre-festival"),n=document.querySelector("body");window.addEventListener("scroll",(function(){t.getBoundingClientRect().top<0?(e.classList.add("stick"),n.classList.add("body-scroll")):(e.classList.remove("stick"),n.classList.remove("body-scroll"))}))}function scrollNav(){document.querySelectorAll(".navegacion-principal a").forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault();const t=e.target.attributes.href.value;document.querySelector(t).scrollIntoView({behavior:"smooth"})}))})}function scrollTitle(){document.querySelectorAll(".title-nav").forEach(e=>{e.addEventListener("click",e=>{const t=e.target.attributes.href.value;document.querySelector(t).scrollIntoView({behavior:"smooth"})})})}function createGallery(){const e=document.querySelector(".galeria-imagenes");for(let t=1;t<=12;t++){const n=document.createElement("picture");n.innerHTML=`   \n        <source srcset="build/img/thumb/${t}.avif" type="image/avif">\n        <source srcset="build/img/thumb/${t}.webp" type="image/webp">\n        <img width="200" height="300" src="build/img/thumb/${t}.jpg" alt="Imagen Galeria"\n            title="Imagenes festival 2022">\n        `,n.onclick=function(){showImage(t)},e.appendChild(n)}}function showImage(e){const t=document.createElement("picture");t.innerHTML=`   \n    <source srcset="build/img/grande/${e}.avif" type="image/avif">\n    <source srcset="build/img/grande/${e}.webp" type="image/webp">\n    <img width="200" height="300" src="build/img/grande/${e}.jpg" alt="Imagen Galeria"\n        title="Imagenes festival 2022">\n    `;const n=document.createElement("DIV");n.appendChild(t),n.classList.add("overlay"),n.onclick=function(){document.querySelector("body").classList.remove("fixed-image"),n.remove()};const c=document.createElement("P");c.textContent="x",c.classList.add("btn-close"),c.onclick=function(){document.querySelector("body").classList.remove("fixed-image"),n.remove()},n.appendChild(c);const i=document.querySelector("body");i.appendChild(n),i.classList.add("fixed-image")}document.addEventListener("DOMContentLoaded",(function(){initApp()}));
//# sourceMappingURL=app.js.map
