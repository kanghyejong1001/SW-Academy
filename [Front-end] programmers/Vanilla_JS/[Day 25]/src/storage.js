const Storage = window.localStorage

export const getItem = (key, defaultValue) => {
    try {
        const storedVlaue = Storage.getItem(key)
        return storedVlaue ? JSON.parse(storedVlaue) : defaultValue
    } catch (e) {
        return defaultValue
    }
}

export const setItem = (key, value) => {
    Storage.setItem(key, JSON.stringify(value))
}


export const removeItem = (key) => {
    Storage.removeItem(key)
}