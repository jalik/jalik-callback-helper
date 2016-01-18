/**
 * Helper to manage callbacks
 * @constructor
 */
CallbackHelper = function () {
    this.callbacks = [];
};

/**
 * Adds a callback
 * @param callback
 */
CallbackHelper.prototype.add = function (callback) {
    if (typeof callback !== "function") {
        throw new Meteor.Error(400, "Callback is not a function");
    }
    this.callbacks.push(callback);
};

/**
 * Calls every callbacks
 */
CallbackHelper.prototype.call = function () {
    if (arguments.length) {
        var args = Array.prototype.slice.call(arguments);
        var context = args.shift();

        for (var i = 0; i < this.callbacks.length; i += 1) {
            this.callbacks[i].apply(context, args);
        }
    }
};

/**
 * Removes every callbacks
 */
CallbackHelper.prototype.clear = function () {
    this.callbacks = [];
};

/**
 * Returns the number of callbacks
 */
CallbackHelper.prototype.count = function () {
    return this.callbacks.length;
};

/**
 * Removes a callback
 * @param callback
 */
CallbackHelper.prototype.remove = function (callback) {
    var index = this.callbacks.indexOf(callback);

    if (index > -1) {
        this.callbacks.slice(index, 1);
    }
};
