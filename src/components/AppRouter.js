
import { Route, Routes, Navigate } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes';
import { HOME_ROUTE } from '../utils/consts';


const AppRouter = () => {  
    return (
        <Routes >
            {authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact />
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact />
            )}
            <Route path="*" element={<Navigate to={HOME_ROUTE} replace />} />
        </Routes>
    );
}


export default AppRouter;