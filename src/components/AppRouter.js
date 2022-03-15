import { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'

import { authRoutes, publicRoutes } from '../routes';
import { Context } from '..';
import { HOME_ROUTE } from '../utils/consts';

const isAuth = true;
const AppRouter = () => {

    const {user} = useContext(Context)

    console.log(user)
    
    return (
        <Routes >
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact />
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact />
            )}
            <Route path="*" element={<Navigate to={HOME_ROUTE} replace />} />
        </Routes>
    );
}

export {isAuth}
export default AppRouter;