import { useSelector, useDispatch } from "react-redux"
import { selectCurrentUser, selectCurrentToken, setCredentials } from "./authSlice"
import { Link } from "react-router-dom"
import { useGetNewTokenMutation } from "./authApiSlice"

const Welcome = () => {
    const [getNewToken] = useGetNewTokenMutation()
    const user = useSelector(selectCurrentUser)
    const token = useSelector(selectCurrentToken)
    const dispatch = useDispatch()

    const welcome = user ? `Welcome ${user}!` : 'Welcome!'
    const tokenAbbr = `${token}`
    //const tokenAbbr = `${token.slice(0, 9)}...`

    const renewToke = async () => {
        try {
            const renew = await getNewToken().unwrap()
            console.log({ renew })
            dispatch(setCredentials({ ...renew }))

        } catch (error) {
            console.log({ error })
        }

    }
    const content = (
        <section className="welcome">
            <h1>{welcome}</h1>
            <p>Token: {tokenAbbr}</p>
            <p><Link to="/userslist">Go to the Users List</Link></p>

            <button onClick={renewToke}>Renew Token</button>
        </section>
    )

    return content
}
export default Welcome