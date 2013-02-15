define(["require", "exports", 'durandal/app', 'durandal/http'], function(require, exports, __app__, __http__) {
    var app = __app__;

    var http = __http__;

    exports.displayName = 'Flickr';
    exports.images = ko.observableArray([]);
    function activate() {
        if(this.images().length > 0) {
            return;
        }
        var that = this;
        return http.jsonp('http://api.flickr.com/services/feeds/photos_public.gne', {
            tags: 'mount ranier',
            tagmode: 'any',
            format: 'json'
        }, 'jsoncallback').then(function (response) {
            that.images(response.items);
        });
    }
    exports.activate = activate;
    function select(item) {
        item.viewUrl = 'views/detail';
        app.showModal(item);
    }
    exports.select = select;
    function canDeactivate() {
        return app.showMessage('Are you sure you want to leave this page?', 'Navigate', [
            'Yes', 
            'No'
        ]);
    }
    exports.canDeactivate = canDeactivate;
})
//@ sourceMappingURL=flickr.js.map
