// Creacion funciones para Uso de Gulp

const { src, dest, watch, parallel } = require("gulp");

//CSS
const sass = require("gulp-sass")(require('sass'));
const plumber = require("gulp-plumber"); 
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcss = require("gulp-postcss");
const sourcemaps = require("gulp-sourcemaps");


//Imagenes Webpack
const cache = require("gulp-cache");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const avif = require("gulp-avif");

//Javascript for terser
const terser = require("gulp-terser-js");

function css(done) {

    //(pipe es una llamdo a la funcion de gulp)

    src('src/scss/**/*.scss') //Identificar el archivo  SASS
        .pipe(sourcemaps.init()) //inicializar sourcemaps 
        .pipe(plumber()) // nos ayuda a no detener el workflow
        .pipe(sass())  //Compilarlo
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write(".")) // con esto re escribimos el codigo css en orden ya comprimido
        .pipe(dest("build/css")) // Almacenar en el disco
    done(); //Callback que Avisa a gulp cuando llegamos al final
}

function imagenes(done) {
    const options = {
        optimizationLevel: 3
    }

    src('src/img/**/*.{png,jpg,jpeg}')
        .pipe(cache(imagemin(options)))
        .pipe(dest("build/img"))
    done();
}

function vesrionWebp(done) {
    const options = {
        quality: 50
    }
    src('src/img/**/*.{png,jpg,jpeg}')
        .pipe(webp(options))
        .pipe(dest("build/img"))
    done();
}


function vesrionAvif(done) {
    const options = {
        quality: 50
    }
    src('src/img/**/*.{png,jpg,jpeg}')
        .pipe(avif(options))
        .pipe(dest("build/img"))
    done();
}


//funciones js
function javascript(done) {
    src('src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(terser())
        .pipe(sourcemaps.write("."))
        .pipe(dest('build/js'))
    done();
}


//funcion dev
function dev(done) {
    watch('src/scss/**/*.scss', css);
    watch('src/js/**/*.js', javascript);
    done();
}

exports.css = css;
exports.js = javascript;
exports.imagenes = imagenes;
exports.versionWebp = vesrionWebp;
exports.vesrionAvif = vesrionAvif;
exports.dev = parallel(imagenes, vesrionWebp, vesrionAvif, javascript, dev);

