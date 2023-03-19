import { useEffect, useState } from "react"
import './App.css'

const CAT_ENDPOINT_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_URL = `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App() {
    const [fact, setFact] = useState()
    const [imageURL, setimageURL] = useState()

    useEffect(() => {
        fetch(CAT_ENDPOINT_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)

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



            })
    }, [])

    return (
        <main>
            <h1>Hola mundo</h1>
            <section>
                {fact && <p>{fact}</p>}
                {imageURL && <img src={`${CAT_PREFIX_IMAGE_URL}${imageURL}`} alt={`Image extracted using the first word for ${fact}`} />}
            </section>

        </main>

    )

}