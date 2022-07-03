import React from "react"
import { Redirect } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

export const ProtectedRoute = ({ children }) => {
    const { auth } = useAuth()
    return (
        <div>

            {auth?.token ? (
                <>{children}</>
            ) : (
                <Redirect to={"/login"} />
            )}
        </div>
    )
}

