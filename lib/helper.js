const BASE_URL = "http://localhost:3000/"
export const getUsers = async () => {
    const response = await fetch(`${BASE_URL}/api/users`)
    const json = await response.json()
    return json
}
export const getUser = async (userId) => {
    const response = await fetch(`${BASE_URL}/api/users/${userId}`)
    const json = await response.json()
    return json
}

//posting a new user
export async function addUser(formData) {
    try {
        const Options = {
            method: 'POST',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(formData)
        }
        const response = await fetch(`${BASE_URL}/api/users`, Options)
        const json = await response.json()
        return json;
    } catch (error) {
        return error;
    }
}
//update a new user
export async function updateUser(userId, formData) {
    try {
        const Options = {
            method: 'PUT',
            hedaers: { 'Content-Type': "application/json" },
            body: JSON.stringify(formData)
        }
        const response = await fetch(`${BASE_URL}/api/users/${userId}`, Options)
        const json = await response.json()
        return json;
    } catch (error) {
        return error;
    }
}
//Delete user
export async function deleteUser(userId) {
    try {
        const Options = {
            method: 'DELETE',
            hedaers: { 'Content-Type': "application/json" },
        }
        const response = await fetch(`${BASE_URL}/api/users/${userId}`, Options)
        const json = await response.json()
        return json;
    } catch (error) {
        return error;
    }
}
