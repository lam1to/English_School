import { $authHost, $host } from "./index";

export const createQuestion = async(question) => {
    const {data} = await $authHost.post('api/question', question)
    return data
}

export const fetchQuestion = async() => {
    const {data} = await $host.get('api/question')
    return data
}

export const fetchOneQuestion = async(id) => {
    const {data} = await $host.get('api/question/' + id )
    return data
}
