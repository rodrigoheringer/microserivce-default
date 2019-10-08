class CustomError extends Error {
    constructor(message = 'Unknown Error', status = 500){
        super();
        this.message = message;
        this.name = this.constructor.name;
        this.status = status;
    }

    setStatusCode(status) {
        this.status = status;
    }

    setMessage(message) {
        this.message = message
    }
}

 module.exports = CustomError;