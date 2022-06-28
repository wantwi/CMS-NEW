import { useLocation, Navigate, Outlet, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { selectCurrentToken, setCredentials } from "./authSlice"
import { useGetNewTokenMutation } from "./authApiSlice"
import { useEffect, useState } from "react"

const PersistLogin = ({ children }) => {
    const navigate = useNavigate()
    const [getNewToken, { isSuccess }] = useGetNewTokenMutation()
    const token = useSelector(selectCurrentToken)
    const location = useLocation()
    const dispatch = useDispatch()
    const [show, setshow] = useState(false)
    const [retry, setRetry] = useState(true)
    const renewToken = async () => {

        try {
            const result = await getNewToken().unwrap()


            dispatch(setCredentials({ ...result }))

            setTimeout(() => {
                setshow(true)
            }, 2000)

        } catch (error) {
            if (error.status === 403) {
                if (retry) {
                    renewToken()
                    setRetry(false)
                }
                else {
                    setshow(true)
                }
            }



        }
    }

    useEffect(() => {

        if (!token) {
            renewToken()
        } else {
            setshow(true)
        }
    }, [])




    return (

        show
            ? children
            : <p>Loading...</p>
    )
}


export default PersistLogin