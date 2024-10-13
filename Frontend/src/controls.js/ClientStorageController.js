const getValueFromCache=(key)=>{
    return sessionStorage[key] ?? localStorage[key] ?? "";
}

const clearCache=()=>{
    sessionStorage.clear()
    localStorage.clear()
}

const setValueInCache=(key, value, remember=false)=>{
    if(remember){
        localStorage.setItem(key, value)
    }
    else{
        sessionStorage.setItem(key, value)
    }
}

export {getValueFromCache, clearCache, setValueInCache};