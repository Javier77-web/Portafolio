// karma.conf.js
module.exports = function (config) {
 config.set({
   frameworks: ['jasmine'],
   files: [
     'src/**/*.spec.jsx',
   ],
   preprocessors: {
     'src/**/*.spec.jsx': ['webpack'],
     'src/**/*.jsx': ['coverage'], // Añade cobertura para componentes
   },
   webpack: {
     mode: 'development',
     module: {
       rules: [
         {
           test: /\.jsx?$/,
           exclude: /node_modules/,
           use: {
             loader: 'babel-loader',
             options: {
               presets: ['@babel/preset-env', '@babel/preset-react'],
             },
           },
         },
         {
           test: /\.css$/,
           use: ['style-loader', 'css-loader'],
         },
         {
            test: /\.(png|jpe?g|gif|webp|svg)$/i,
            use: 'null-loader', // Ignora archivos de imagen para tests
         },
       ],
     },
     resolve: {
       extensions: ['.js', '.jsx'],
     },
   },
   reporters: ['progress', 'kjhtml', 'coverage'],
   coverageReporter: {
     type: 'html',
     dir: 'coverage/',
   },
   browsers: ['ChromeHeadless'],
   singleRun: true,
   restartOnFileChange: true,
   plugins: [
     'karma-jasmine',
     'karma-webpack',
          'karma-chrome-launcher',
     'karma-coverage',
     'karma-jasmine-html-reporter'
   ]
 });
};


