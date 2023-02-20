import instance from "./axios";

export const GET_USER = async() => {
    let response = await instance.get('users')
    return response.data
}

export const POST_USER = async(newUser) => {
    await instance.post('users', newUser)
}

export const PUT_USER = async(updateUser) => {
    await instance.put('users'/updateUser.id, updateUser)
}

export const PATCH_USER = async(updateUser) => { 
    await instance.patch('users'/updateUser.id, updateUser)
}

export const DELETE_USER = async(deleteUser) => {
    await instance.delete('users'/deleteUser.id, deleteUser)
}