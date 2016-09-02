/*global define*/
define([
    'loglevel',
    'jquery',
    'underscore',
    '../../../src/js/index',
    'dev/src/models/dropdown'
], function (log, $, _, Dropdown, DropdownModel) {

    'use strict';

    var s = {
            DROPDOWN : "#test"
        },
        instances = [];

    function Dev() {

        console.clear();

        log.setLevel('trace');

        this.start();
    }

    Dev.prototype.start = function () {

        log.trace("Dev started");

        this._render();

    };

    Dev.prototype._render = function () {

        this._renderDropdown();
    };

    Dev.prototype._renderDropdown = function () {

        var menu = this.createInstance({
            el: s.DROPDOWN,
            model: DropdownModel
        });

        log.trace("render Dropdown success");

    };

    //Utils

    Dev.prototype.createInstance = function (params) {

        var instance = new Dropdown(params);

        instances.push(instance);

        return instance;
    };

    return new Dev();

});