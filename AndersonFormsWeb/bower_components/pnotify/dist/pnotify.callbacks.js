// Callbacks
!function(o,t){"function"==typeof define&&define.amd?define("pnotify.callbacks",["jquery","pnotify"],t):"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("jquery"),require("./pnotify")):t(o.jQuery,o.PNotify)}("undefined"!=typeof window?window:this,function(o,t){var i=t.prototype.init,e=t.prototype.open,n=t.prototype.remove;return t.prototype.init=function(){this.options.before_init&&this.options.before_init(this.options),i.apply(this,arguments),this.options.after_init&&this.options.after_init(this)},t.prototype.open=function(){var o;this.options.before_open&&(o=this.options.before_open(this)),!1!==o&&(e.apply(this,arguments),this.options.after_open&&this.options.after_open(this))},t.prototype.remove=function(o){var t;this.options.before_close&&(t=this.options.before_close(this,o)),!1!==t&&(n.apply(this,arguments),this.options.after_close&&this.options.after_close(this,o))},t});
//# sourceMappingURL=pnotify.callbacks.js.map