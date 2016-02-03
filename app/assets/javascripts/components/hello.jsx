"use strict";

class Hello {
  constructor() {
    $(window).ready(function() {
      $('body').append('Hello es6!');
    });
  }
}

module.exports = Hello;
