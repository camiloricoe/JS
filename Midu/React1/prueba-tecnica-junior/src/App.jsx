import { useEffect, useState } from "react"
import './App.css'
import { getRandomFact } from "./Sevices/fact.js"
import { useCatImage } from "./Hooks/useCatImage.js"

const CAT_ENDPOINT_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_URL = `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'


export function App() {
    const [fact, setFact] = useState()
    const { imageURL } = useCatImage({ fact }) //custom hook 


    const handleClick = () => {
        getRandomFact().then(setFact)
    }

    useEffect(() => {
        getRandomFact().then(setFact)
    }, [])






    return (
        <main>
            <h1>Hola mundo</h1>
            <button onClick={handleClick}>Get New Fact</button>
            <section>
                {fact && <p>{fact}</p>}
                {imageURL && <img src={`${CAT_PREFIX_IMAGE_URL}${imageURL}`} alt={`Image extracted using the first word for ${fact}`} />}
            </section>

        </main>

    )

}