import { GiphyData } from '../interfaces/GiphyData.i'

interface IResponseFromGetGifs {
    id: string
    title: string
    url: string
}

interface IRespuestaDeLaApi {
    data: GiphyData[]
    meta: {
        msg: string
        response_id: string
        status: number
    }
    pagination: {
        count: number
        offset: number
        total_count: number
    }
}

export const getGifs = async (category: string): Promise<IResponseFromGetGifs[]> => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=U425LCWkgA6sXMLKjwpw2OeMLL59e9eE&q=${category}&limit=10`
    const resp = await fetch(url)

    //1
    //const {data} = await resp.json() as IRespuestaDeLaApi
    // const data = respParseada.data

    //2
    // const respParsed = await resp.json() as IRespuestaDeLaApi
    // const data = respParsed.data

    //3
    const respParsed = (await resp.json()) as IRespuestaDeLaApi
    const { data } = respParsed

    // from data, we only need id, title and url
    const gifs = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
        }
    })

    return gifs
}
