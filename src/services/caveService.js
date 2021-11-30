const baseUrl = ' http://localhost:3030/'
//'http://localhost:5000' //  /catalog
//'https://softuni-service.herokuapp.com/data'

export const getAll = async () => {
    const response = await fetch(`${baseUrl}/data`) //  /catalog
    //console.log(response)
    const caves = await response.json();

    const result = Object.values(caves)

    //console.log(result);
    return result;
};
export const getOne = async (id) => {
    const response = await fetch(`${baseUrl}/data/${id}`)//  /catalog
    const caves = await response.json();
    return caves
}