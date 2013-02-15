/// <reference path="../durandal/durandal.d.ts" />

import _router = module('durandal/plugins/router');
import app = module('durandal/app');

export var router = _router;

export function search() {
    app.showMessage('Search not yet implemented...');
}
export function activate() {
    return router.activate('welcome');
}