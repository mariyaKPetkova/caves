const baseUrl = 'http://localhost:5000' //  /catalog 
//http://localhost:3030
//'https://softuni-service.herokuapp.com/data'

export const getAll = async () => {
    const response = await fetch(`${baseUrl}/data/catalog`) //  /catalog
    //console.log(response)
    const caves = await response.json();

    const result = Object.values(caves)

    //console.log(result);
    return result;
};
export const create = async (data,token) => {
    
    const response = await fetch(`${baseUrl}/data/catalog`,
    {
        method:'POST',
        headers:{
            'content-type':'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(data)
    }) 
    const caves = await response.json();
    return caves
}
export const getOne = async (id) => {
    //console.log(id);
    const response = await fetch(`${baseUrl}/data/catalog/${id}`)//  
    const caves = await response.json();
    
    return caves
}
export const del = (id,token)=>{
    return fetch(`${baseUrl}/data/catalog/${id}`,{
        method:'DELETE',
        headers:{'X-Authorization': token}
    })
    .then(res=> {
        //console.log(res)
        res.json()
    })
}