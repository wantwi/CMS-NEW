import useAuth from "./useAuth"
import { renewToken } from "../auth/config"


const useRefreshtoken = () => {
    const { setAuth } = useAuth()

    const refresh = async () => {


        const response = await renewToken()
        if (response) {
            const { name, token } = response.data

            setAuth({ name, token })

            return token

        }

    }

    return refresh
}

export default useRefreshtoken 