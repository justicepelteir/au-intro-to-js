class Pact {
    constructor(fn) {
        this.resolve = (value) => {
            this.thenFn(value);
        }
        this.reject = () => {

        }
        fn(this.resolve, this.catch);
    }
    then(_then) {
        this.thenFn = _then;
    }
    catch() {

    }
}

module.exports = Pact;