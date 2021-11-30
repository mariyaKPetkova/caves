const baseUrl = 'http://localhost:5000'
//'https://softuni-service.herokuapp.com/data'

export const getAll = async () => {
    const response = await fetch(`${baseUrl}/data/catalog`)
    //console.log(response)
    const caves = await response.json();

    const result = Object.values(caves)

    //console.log(result);
    return result;
};
export const getOne = async (id) => {
    const response = await fetch(`${baseUrl}/data/catalog/${id}`)
    const caves = await response.json();
    return caves
}