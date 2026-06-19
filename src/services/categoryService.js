import api from './api'

export function getCategories() {
  return api.get('/category')
}
