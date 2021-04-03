module.exports = {
    SutekinaError: class extends Error {  
        constructor (message, status) {
            if(!message) message = new module.exports.InternalSutekinaError(this.constructor.name + " is undefined");
            super(message);

            this.name = this.constructor.name;
            this.status = status;
        }
    },
    SutekinaStatusError: class extends Error {
        constructor (status) {
            let message; if(!status) message = new module.exports.InternalSutekinaError(this.constructor.name + " is undefined"); else message = module.exports.ErrorStatusCodes[status];
            super(message);
            
            this.name = this.constructor.name;
            this.status = status;
        }
    },
    InternalSutekinaError: class extends Error {
        constructor (message) {
            if(!message) message = new module.exports.InternalSutekinaError("Don't do this to me");
            super(message);

            this.name = this.constructor.name;
        }
    },
    ErrorStatusCodes: require("./ErrorStatusCodes.json"),
    LoginErrors: require("./LoginErrors.json")
}