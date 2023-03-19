import { useEffect, useState } from "react"
import './App.css'
import { useCatImage } from "./Hooks/useCatImage.js"
import { useCatFact } from "./Hooks/useCatFact"
import { Otro } from "./Components/Otro"
const CAT_ENDPOINT_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_URL = `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'



export function App() {
    const { fact, updateFact } = useCatFact()
    const { imageURL } = useCatImage({ fact }) //custom hook 

    const handleClick = () => {
        updateFact()
    }

    useEffect(updateFact, [])


    return (
        <main>
            <h1>Hola mundo</h1>
            <button onClick={handleClick}>Get New Fact</button>
            <section>
                {fact && <p>{fact}</p>}
                {imageURL && <img src={imageURL} alt={`Image extracted using the first word for ${fact}`} />}
            </section>
            <section>
                <Otro />
                <Otro />
            </section>
            <Otro />

        </main>

    )

}