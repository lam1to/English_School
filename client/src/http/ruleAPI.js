import { $authHost, $host } from "./index";

export const createRule = async(rule) => {
    const {data} = await $authHost.post('api/rule', rule)
    return data
}

export const fetchRule = async() => {
    const {data} = await $host.get('api/rule')
    return data
}

export const fetchOneRule = async(id) => {
    const {data} = await $host.get('api/rule/' + id)
    return data
}
