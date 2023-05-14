import { $authHost, $host } from "./index";

export const createAnswer = async(answer) => {
    const {data} = await $authHost.post('api/answer', answer)
    return data
}

export const fetchAnswer = async() => {
    const {data} = await $host.get('api/answer')
    return data
}

export const fetchOneAnswer = async(id) => {
    const {data} = await $host.get('api/answer/' + id )
    return data
}
