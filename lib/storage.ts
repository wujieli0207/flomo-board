import localforage from 'localforage'

localforage.config({
  name: 'flomo-board',
})

export const localforageInstance = {
  get: async <T>(key: string): Promise<T | null> => {
    const value = await localforage.getItem<T>(key)
    return value
  },
  set: async <T>(key: string, value: T): Promise<void> => {
    await localforage.setItem<T>(key, value)
  },
  remove: async (key: string): Promise<void> => {
    await localforage.removeItem(key)
  },
  clear: async (): Promise<void> => {
    await localforage.clear()
  },
}
