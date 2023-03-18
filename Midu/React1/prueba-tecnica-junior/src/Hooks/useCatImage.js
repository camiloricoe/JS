import { useState, useEffect} from "react"

export function useCatImage({ fact }) { //se le pasa el objeto fact {fact: 'dshadajks'}
    const [imageURL, setimageURL] = useState()

    useEffect(() => {
        if (!fact) return

        const firstWord = fact.split(' ')[0]
        const threefirstWord = fact.split(' ').slice(0, 3).join(' ')
        //const threefirstWord = fact.split(' ', 3)

        console.log(firstWord);

        fetch(`https://cataas.com/cat/says/${threefirstWord}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                console.log(response)
                const { url } = response
                setimageURL(url)

            })

    }, [fact])

    return { imageURL }

}