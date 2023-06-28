import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export function ProtectRoutesGestor({children}) {


    const usuarioEnc=localStorage.getItem("usuario")

    if (!usuarioEnc || usuarioEnc != "gestor") {
        return <Navigate to="/"/>
    }
    return children ? children : <Outlet />
  
}
export function ProtectRoutesAdmin({children}) {


    const usuarioEnc=localStorage.getItem("usuario")

    if (!usuarioEnc || usuarioEnc != "admin") {
        return <Navigate to="/"/>
    }
    return children ? children : <Outlet />
  
}
export function ProtectRoutesAprendiz({children}) {


    const usuarioEnc=localStorage.getItem("usuario")

    if (!usuarioEnc || usuarioEnc != "aprendiz") {
        return <Navigate to="/"/>
    }
    return children ? children : <Outlet />
  
}
