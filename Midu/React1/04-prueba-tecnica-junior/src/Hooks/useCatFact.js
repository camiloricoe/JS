import { useState } from "react";
import { getRandomFact } from "../Sevices/fact.js";


export function useCatFact() {
    const [fact, setFact] = useState()

    const updateFact = () => {
        getRandomFact().then(setFact)
    }

    return { fact, updateFact }

}