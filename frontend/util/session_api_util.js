export const signup = (user) =>{
    return (
        $.ajax({
            method:'POST',
            url:'/api/users',
            data:{user:user}
        })
    )
}

export const login = (user) => {
    return (
        $.ajax({
            method:'POST',
            url: '/api/session',
            data: {user:user} //{user}
        })
    )
}

export const logout = () => {
    return (
        $.ajax({
            method:'DELETE',
            url:'/api/session',
        })
    )
}

export const getUser = () => {
    return (
        $.ajax({
            method: 'GET',
            url: '/api/users',
        })
    )
}

export const deleteUser = (userId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/users/${userId}`,
    })
}

// channels

export const getChannels = (user) => {
    //   to see what user is 
    return $.ajax({
        method:"GET",
        url:`/api/users/${user.id}/channels`
    })
}