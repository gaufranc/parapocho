import { useEffect, useState } from 'react'
import { IResponseFromGetGifs, getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category: string) => {
    const [images, setImages] = useState<IResponseFromGetGifs[]>([])
    const [isLoading, setisLoading] = useState<boolean>(true)

    const getImages = async () => {
        const newImages = await getGifs(category)
        setImages(newImages)
        setisLoading(false)
    }

    useEffect(() => {
        getImages()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        images,
        isLoading,
    }
}
