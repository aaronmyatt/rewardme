import type { AnyValidSchemaObject } from '~/schemas'

interface RMStorage extends Omit<Storage, 'setItem'> {
  setItem(key: string, value: AnyValidSchemaObject): AnyValidSchemaObject
}

export const store: RMStorage = {
  ...localStorage,
  getItem(key: string) {
    const item = localStorage.getItem(key)
    if (item) return JSON.parse(item)
  },
  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
    return value
  },
}
