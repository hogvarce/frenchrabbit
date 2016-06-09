requirejs.config({
    baseUrl: '/assets/js/',
    paths: {
        jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.0/jquery.min',
        bootstrap: '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/js/bootstrap.min',
        helperPage: 'helper-page'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        'bootstrap': {
            deps: ['jquery'],
            exports: 'bootstrap'
        },
        'helperPage': {
            deps: ['jquery','bootstrap'],
            exports: 'helperPage'
        }
    },
    deps: [
        'helperPage'
    ]
});
