declare class Auth {
    authenticated: boolean | any;
    constructor();
    login(callback: Function): void;
    logout(callback: Function): void;
    isAuthenticated(): boolean | undefined;
    validateEmail(email: string): boolean;
}
declare const _default: Auth;
export default _default;
//# sourceMappingURL=Auth.d.ts.map