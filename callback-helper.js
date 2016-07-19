export class CallbackHelper {

    private callbacks = [];

    public add(callback) {
        if (typeof callback !== 'function') {
            throw new TypeError("Callback is not a function");
        }
        this.callbacks.push(callback);
    }

    public call() {
        if (arguments.length) {
            var args = Array.prototype.slice.call(arguments);
            var context = args.shift();

            for (var i = 0; i < this.callbacks.length; i += 1) {
                this.callbacks[i].apply(context, args);
            }
        }
    }

    public clear() {
        this.callbacks = [];
    }

    public remove(callback) {
        var index = this.callbacks.indexOf(callback);

        if (index > -1) {
            this.callbacks.slice(index, 1);
        }
    }

    public size() {
        return this.callbacks.length;
    }
}
