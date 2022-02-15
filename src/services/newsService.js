const baseUrl = 'https://caves-in-bg.herokuapp.com'
export const getAll = async () => {
    const response = await fetch(`${baseUrl}/data/news`) //  /catalog
    //console.log(response)
    const news = await response.json();

    const result = Object.values(news)

    console.log(result);
    return result;
};
export const getOne = async (id) => {
    //console.log(id);
    const response = await fetch(`${baseUrl}/data/news/${id}`)//  
    const news = await response.json();
    
    return news
}