try {
    hello ();
} catch (error) {
    console.log(error);
}


// ya no necesita un error el catch
try {
    onotherFn();
} catch {
    console.log("esto es un error")
}