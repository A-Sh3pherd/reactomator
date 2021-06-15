import React from 'react';
import {Redirect, Route} from "react-router-dom";

// Types
export interface ProtectedRouteProps {
    Component: React.FC
    RedirectTo: string | '/location'
    condition: boolean
    Redirect?: Redirect
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({Component, RedirectTo, condition, ...rest}) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (condition) {
                    return <Component/>
                } else {
                    return <Redirect
                        to={{
                            pathname: RedirectTo,
                            state: {
                                from: props.location
                            }
                        }}
                    />
                }
            }
            }

        />
    );
};


export default ProtectedRoute