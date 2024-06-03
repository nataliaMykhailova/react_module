const retrieveLocalStorageData = <T,>(key:string) => {
    const pairJSON = localStorage.getItem('tokenPair') || '';
    const pair = JSON.parse(pairJSON);
    if (!pairJSON){
        return {} as T
    }
    return pair as T;
}



export {
    retrieveLocalStorageData
}