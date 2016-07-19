export class CallbackHelper {

    constructor() {
        this.callbacks = [];
    }

    add(callback) {
        if (typeof callback !== 'function') {
            throw new TypeError("Callback is not a function");
        }
        this.callbacks.push(callback);
    }

    call() {
        if (arguments.length) {
            var args = Array.prototype.slice.call(arguments);
            var context = args.shift();

            for (var i = 0; i < this.callbacks.length; i += 1) {
                this.callbacks[i].apply(context, args);
            }
        }
    }

    clear() {
        this.callbacks = [];
    }

    remove(callback) {
        var index = this.callbacks.indexOf(callback);

        if (index > -1) {
            this.callbacks.slice(index, 1);
        }
    }

    size() {
        return this.callbacks.length;
    }
}
