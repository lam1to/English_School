import React, { useContext } from 'react'
import {Routes,Route,Navigate, BrowserRouter} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../Routes'
import Main from "../pages/Main"
import { Context } from '..'

const AppRouter = () => {
  const {user} = useContext(Context)
  console.log(user)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) => 
            <Route key={path} path={path} element={<Component/>}/>
        )}
         {publicRoutes.map(({path, Component}) => 
            <Route key={path} path={path} element={<Component/>}/>
        )}
            <Route path="*" element = {<Navigate to = '/main'/>}/>
        </Routes>
  )
}

export default AppRouter;
