import React, { useContext } from 'react'
import {Routes,Route,Navigate, BrowserRouter} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../Routes'
import Main from "../pages/Main"
import { Context } from '..'
import { MAIN_ROUTE, VOCABULARY_ROUTE } from '../utils/consts'

const AppRouter = () => {
  const {user} = useContext(Context)
  // console.log(user)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) => 
            <Route key={path} path={path} element={<Component/>}/>
            )}
         {publicRoutes.map(({path, Component}) => 
            <Route key={path} path={path} element={<Component/>}/>
            )}
            {user.isAuth && <Route path="*" element = {<Navigate to = {VOCABULARY_ROUTE}/>}/>}
            {!user.isAuth && <Route path="*" element = {<Navigate to = {MAIN_ROUTE}/>}/>}
            
        </Routes>
  )
}

export default AppRouter;
