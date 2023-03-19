const CAT_ENDPOINT_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = () => {
       return  fetch(CAT_ENDPOINT_FACT)
            .then(res => {
                if (!res.ok) throw Error('Error fetching')
                return res.json()
            })
            .then(data => {
                const { fact } = data
                return fact
            })
            .catch((err) => {
                //error si falla la respuesta
                //o error si falla peticion
            })

    }