const elixir = require('laravel-elixir');

require('laravel-elixir-vueify');
require('laravel-elixir-webpack-official');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {
    mix
        .sass('app.scss')
        .webpack('app.js')
        .scripts([
            '/controller/dragAndDrop.js',
            '/controller/mashupController.js',
            '/controller/propertiesController.js',
    ]);

    mix.styles([
        "animate.css",
        "app.css"
    ]);

    mix.copy(
            'node_modules/bootstrap-sass/assets/fonts/bootstrap/',
            'public/fonts/bootstrap/');
});
