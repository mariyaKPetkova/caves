const baseUrl = 'http://localhost:5000'
export const login = (email,password) => {
    fetch(`${baseUrl}/data/users`)
    .then(res =>res.json())
}