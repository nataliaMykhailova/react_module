const retrieveLocalStorageData = <T, >(key: string) => {
    const pairJSON = localStorage.getItem(key) || '';
    if (!pairJSON) {
        return {} as T;
    }
    const pairParse = JSON.parse(pairJSON);
    return pairParse as T;
}

export {
    retrieveLocalStorageData
}