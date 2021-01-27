export const getChannels = () => {
    // index
    debugger
    return (
        $.ajax({
            method: "GET",
            url: "/api/channels"
        })
    )
}

export const getChannel = (channelId) => {
    // show
    return (
        $.ajax({
            method: "GET",
            url: `/api/channels/${channelId}`
        })

    )
}
// ^^ the both get channels 

export const createChannel = (channel) => {
    debugger
    return(
        $.ajax({
            method:"POST",
            url: '/api/channels',
            data: {channel:channel}
        })
    )
}

export const deleteChannel = (channelId) => {
    return (
        $.ajax({
            method: "DELETE",
            url: `/api/channels/${channelId}`
        })
    )
}

export const updateChannel = (channel) =>{
    return(
        $.ajax({
            method:"PATCH",
            url: `/api/channels/${channel.id}`,
            data: {channel:channel}
        })
    )
}

export const getMembersChannel = (channel) =>{
    return(
        $.ajax({
            method: "GET",
            url: `/api/channels/${channel.id}/users`
        })
    )
}

