const content = null || document.getElementById("content");
 

API = "https://imdb-top-100-movies.p.rapidapi.com/";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0cabc557abmsh0f69cf24df39f2fp1481d3jsn178408a5b53e",
    "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
  },
};

async function fetchData(urlApi){
    const response = await fetch(urlApi,options);
    const data = await response.json()
    return data;
}


const displayPelis = async (urlApi) => {
  try {
    const peliculasData = await fetchData(urlApi);
    console.log(peliculasData);
    console.log("peliculasData");
    const pelisArray = await geneartePelis(peliculasData);
    console.log(pelisArray);
    console.log(content);
    content.innerHTML = pelisArray;
  } catch (error) {
    console.error(error);
  }
};


function geneartePelis(peliculas) {

    let view = `${peliculas
      .map(
        (peli) => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${peli.image}" alt="${peli.title}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-2xl font-bold tracking-tight text-gray-600">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${peli.title}
                    </h3>
                </div>
            </div>
            `
      )
      .slice(0, 4)
      .join("")}
            `;

    return view

}

displayPelis(API);
