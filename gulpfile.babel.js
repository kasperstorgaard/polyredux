import gulp from 'gulp';
import gulpif from 'gulp-if';
import babel from 'gulp-babel';

import polymer from 'polymer-build';
import es from 'event-stream';

const polymerJSON = require('./polymer.json');
const project = new polymer.PolymerProject(polymerJSON);

function optimize (stream) {
    return stream
        .pipe(project.splitHtml())
        .pipe(gulpif(/\.js$/, babel()))
        .pipe(project.rejoinHtml());
}

function webcomponents (dest) {
    const sourcesStream = optimize(project.sources());
    return es.merge(sourcesStream, project.dependencies())
        .pipe(project.analyzer)
}

gulp.task('babel', () =>
    webcomponents().pipe(gulp.dest('./build'))
);
