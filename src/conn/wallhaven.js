import { net } from "./net";

export async function getSearchCountApi(name) {
    let search
    try {
        search = await net(`https://wallhaven.cc/api/v1/search?q=${name}`, { timeout: 3000 })
    } catch (error) {
        return undefined
    }
    return search['meta']['total']
}