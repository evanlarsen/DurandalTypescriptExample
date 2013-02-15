define(["require", "exports", 'durandal/plugins/router', 'durandal/app'], function(require, exports, ___router__, __app__) {
    var _router = ___router__;

    var app = __app__;

    exports.router = _router;
    function search() {
        app.showMessage('Search not yet implemented...');
    }
    exports.search = search;
    function activate() {
        return exports.router.activate('welcome');
    }
    exports.activate = activate;
})
//@ sourceMappingURL=shell.js.map
