import { axiosPrivate } from "../api/axios"


export const getUser = async () => {
  return userManager.getUser()
}
export const login = async (data) => {
  const response = await axiosPrivate.post('/login', data)
  return response.data

}

export const renewToken = async () => {
  const response = await axiosPrivate.get('/refresh')
  return response.data

}

export const logout = async () => {
  const response = await axiosPrivate.get('/logout')
  return response.data
}
