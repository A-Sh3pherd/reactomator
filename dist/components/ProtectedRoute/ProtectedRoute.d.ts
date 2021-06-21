import React from 'react';
import { Redirect } from "react-router-dom";
export interface ProtectedRouteProps {
    Component: React.FC;
    RedirectTo: string | '/location';
    condition: boolean;
    Redirect?: Redirect;
}
declare const ProtectedRoute: React.FC<ProtectedRouteProps>;
export default ProtectedRoute;
//# sourceMappingURL=ProtectedRoute.d.ts.map