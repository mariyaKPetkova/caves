const baseUrl = 'http://localhost:5000'

export const login = async (email, password) => {
    const res = await fetch(`${baseUrl}/user/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    const jsonRes = await res.json()
    
    if (res.ok) {
        return jsonRes
    }
    throw jsonRes

}
export const register = (email, password) => {

    return fetch(`${baseUrl}/user/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(res => res.json()); 
};

export const logout = (token) => {
    return fetch(`${baseUrl}/user/logout`,{
    headers: {
        'X-Authorization':token
    }
})
}
