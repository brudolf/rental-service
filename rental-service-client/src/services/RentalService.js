import Api from '@/services/Api'

export default {
  fetchRentals () {
    return Api().get('rental')
  },

  addPost (params) {
    return Api().post('posts/add', params)
  },

  updatePost (params) {
    return Api().put('posts/' + params.id, params)
  },

  getPost (params) {
    return Api().get('post/' + params.id)
  },

  deletePost (id) {
    return Api().delete('posts/' + id)
  }
}
