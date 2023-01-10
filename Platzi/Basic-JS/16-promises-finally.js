const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("Hey");
        } else {
            reject("Whooops!");
        }
    })
}

anotherFunction()
    .then(response => console.log('Then...' + response))
    .catch(err => console.log('catch...' + err))
    .finally(()=> console.log('Finally'));


async function forAwait() {
  const nombres = ["Alexa", "Oscar", "David"]
  for await (let valor of nombres) {
    console.log(valor)
  }
}

forAwait()