export const setLocalStorage = <T>(key: string, data: T): void => {
  try {
    if (globalThis.localStorage === undefined) {
      return
    }

    window.localStorage.setItem(key, JSON.stringify(data))
  } catch (err) {
    console.log(err)
  }
}

export const getLocalStorage = <T>(key: string, initialValue: T): T => {
  try {
    if (globalThis.localStorage === undefined) {
      return initialValue
    }

    const storedData = window.localStorage.getItem(key)
    if (storedData) return JSON.parse(storedData)

    setLocalStorage(key, initialValue)

    return initialValue
  } catch (err) {
    console.log(err)
    return initialValue
  }
}
