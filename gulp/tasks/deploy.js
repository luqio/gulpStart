var gulp = require('gulp');

gulp.task('deploy', ['clean'], function(){
	gulp.start('less-deploy', 'imagemin', 'uglify');
});
