import { $authHost, $host } from "./index";

export const createGrammar = async(grammar) => {
    const {data} = await $authHost.post('api/grammar', grammar)
    return data
}

export const fetchGrammar = async() => {
    const {data} = await $host.get('api/grammar')
    return data
}
