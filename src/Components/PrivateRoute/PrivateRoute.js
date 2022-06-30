import React from 'react';
import { Route,Redirect } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isloading } = useAuth();
    

    if (isloading) {

        return(
            <div className='p-100'>loading data</div>
            
        )
    }
    

     
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/signin",
                    state:{from:location}

                }}
            
            
            ></Redirect>}
            
        
        
        >
            
        </Route>
    );
};

export default PrivateRoute;