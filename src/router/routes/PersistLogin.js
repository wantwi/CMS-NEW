import React, { useState, useEffect } from 'react'
import { renewToken } from '../../auth/config'
import useAuth from '../../hooks/useAuth'

const PersistLogin = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const { auth, setAuth } = useAuth()

    const getNewToken = () => {

        renewToken().then(result => {
            const { name, token } = result
            setAuth({ name, token })
            setIsLoading(false)
        }).catch(err => {
            setIsLoading(false)

            setAuth({})
            console.log({ err })
        })

    }

    useEffect(() => {

        auth?.token ? setIsLoading(false) : getNewToken()

    }, [])

    useEffect(() => {
        console.log(`isLoading: ${isLoading}`)

    }, [isLoading])


    return (
        <> {
            isLoading ? <p>Loading...</p> : children
        }</>
    )
}

export default PersistLogin