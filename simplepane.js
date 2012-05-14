/*!
 * Simplepane Plugin
 * =================
 *
 * Pane view plugin kept as simple as possible.
 * Works with both jQuery and Zepto
 *
 * Copyright (c) 2012 Cory Martin
 * Distributed under the MIT License
 */

;(function($) {
  'use strict';

  $.fn.simplepane = function(config) {
    config = $.extend({
      buttonHighlightClass : 'simple-pane-button-highlight',
      activationEvent      : 'click'
    }, config);

    var container = this;
    var buttons   = container.find('.simple-pane-button');
    var panes     = container.find('.simple-pane');

    var showPane = function(index) {
      panes.each(function(i) {
        var action = i === index ? 'show' : 'hide';
        $(this)[action]();
      });
    }

    var highlightButton = function(index) {
      buttons.each(function(i) {
        var action = i === index ? 'addClass' : 'removeClass';
       $(this)[action](config.buttonHighlightClass);
      });
    }

    // Init display
    showPane(0);
    highlightButton(0);

    // Button event
    buttons.on(config.activationEvent, function(evt) {
      evt.preventDefault();
      var index = buttons.index(this);
      showPane(index);
      highlightButton(index);
    });

    return this;
  };
})(window.jQuery || window.Zepto);

