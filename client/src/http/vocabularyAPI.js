import { $authHost, $host } from "./index";

export const createVocabulary = async(vocabulary) => {
    console.log("dos")
    const {data} = await $authHost.post('api/vocabulary', vocabulary)
    console.log("asdasd")
    return data
}

export const fetchVocabulary = async() => {
    const {data} = await $host.get('api/vocabulary')
    return data
}
