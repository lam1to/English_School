import { $authHost, $host } from "./index";
import jwt_decode from 'jwt-decode'

export const createTest = async(test) => {
    const {data} = await $authHost.post('api/test', test)
    return data
}

export const fetchTest = async() => {
    const {data} = await $host.get('api/test')
    return data
}
