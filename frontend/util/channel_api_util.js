export const getChannels = () => {
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

export const getMembersChannel = (channelId) =>{
     
    return(
        $.ajax({
            method: "GET",
            url: `api/channelmembers/${channelId}`
        })
    )
}




export const addUserChannel = (userChannel) => {
    return (
        $.ajax({
            method: "POST",
            url: `/api/channelmembers`,
            data: {channel_members: userChannel}
        })
    )
}

export const removeUserChannel = (memberChannelId) => {
     
    return (
        $.ajax({
            method: "DELETE",
            url: `/api/channelmembers/${memberChannelId}`
        })
    )
}

