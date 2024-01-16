const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Задача для компиляции SCSS в CSS
function style() {
    // 1. Указываем путь к файлам SCSS
    return gulp.src('scss/main.scss')
        // 2. Пропускаем файлы через компилятор SASS
        .pipe(sass().on('error', sass.logError))
        // 3. Указываем путь для конечного CSS файла
        .pipe(gulp.dest('css'))
}

// Задача для отслеживания изменений в файлах SCSS
function watch() {
    gulp.watch('scss/**/*.scss', style)
}

// Экспортируем функции
exports.style = style;
exports.watch = watch;
