import { useCatImage } from "../Hooks/useCatImage"


export function Otro() {
    const { imageURL } = useCatImage({ fact: 'cats are cute' }) //custom hook 

    return (
        <>
            {imageURL && <img src={imageURL} alt="cat image" />}
        </>
    )
}