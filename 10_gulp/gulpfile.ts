import gulp from 'gulp'


gulp.task('aufgabe1', async()=>{
    console.log("aufgabe1")
})

gulp.task('aufgabe2', async()=>{
    console.log("aufgabe2")
})

gulp.task('aufgabe3', async()=>{
    console.log("aufgabe3")
})

/*gulp.task('default', async()=>{
    console.log("hallo")
})*/

//gulp.task('default', gulp.parallel('aufgabe2', 'aufgabe1'))

gulp.task('default', 
    gulp.series('aufgabe2', 
        gulp.parallel('aufgabe3', 'aufgabe1')
    )
)

//kopiert eine Datei, kann zwischendurch mit weiteren Pipes auch bearbeitet/verändert werden
gulp.task('copy', async()=>{
    return gulp.src('source/test.txt')
                .pipe(gulp.dest('dest'))
})


import browserify = require('browserify')
import fs = require('fs')

gulp.task('bundle', ()=>{
    const test = browserify({
        entries: 'source/app.js'
    })

    return test.bundle()
})