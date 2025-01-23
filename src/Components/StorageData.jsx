function isKeyExist(key){
    let data = localStorage.getItem(key)
    return data?true:false
}

function init_data(key, value){
    if (!isKeyExist(key)){
        if (value == null || value == undefined){
            set_data(key, [])
        }
        set_data(key,value)    
    }
}

function set_data(key,value){
    const data_string = JSON.stringify(value)
    localStorage.setItem(key, data_string)
}

function get_data(key){
    let data = null
    if(!isKeyExist(key)){
        return []
    }
    data = localStorage.getItem(key)
    return JSON.parse(data)
}

export {get_data, set_data, init_data, isKeyExist}