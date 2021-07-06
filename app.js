const apiData = {
    url: "https://pokeapi.co/api/v2/",
    type: "pokemon",
    id: "25"
};

const {url, type, id} = apiData;

const apiUrl = `${url}${type}/${id}`;
//const apiUrl = `${apiData.url}${apiData.type}/${apiData.id}`;

console.log(apiUrl);