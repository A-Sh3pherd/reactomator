"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Auth = /** @class */ (function () {
    function Auth() {
        this.authenticated = false;
    }
    Auth.prototype.login = function (callback) {
        this.authenticated = true;
        localStorage.setItem('isAuth', this.authenticated);
        callback();
    };
    Auth.prototype.logout = function (callback) {
        this.authenticated = false;
        localStorage.clear();
        callback();
    };
    Auth.prototype.isAuthenticated = function () {
        var isAuth = localStorage.getItem('isAuth');
        if (isAuth)
            return this.authenticated = true;
        if (!isAuth)
            return this.authenticated = false;
    };
    // Validations
    Auth.prototype.validateEmail = function (email) {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
            return true;
        }
        alert('You have entered an invalid email address!');
        return false;
    };
    return Auth;
}());
exports.default = new Auth();
//# sourceMappingURL=Auth.js.map