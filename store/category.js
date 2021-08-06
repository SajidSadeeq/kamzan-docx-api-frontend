const state = () => ({
  categories: [],
  edit_category: {}
})

const mutations = {
  SET_CATEGORIES: (state, payload) => (state.categories = payload),
  SET_EDIT_CATEGORY: (state, payload) => (state.edit_category = payload)
}
const actions = {
  async fetchSpecificCategories ({ commit }, payload) {
    await this.$axios.get(`/category/view/${payload}`)
      .then(function (response) {
        commit('SET_EDIT_CATEGORY', response.data.payload)
      })
  },
  async fetchCategories ({ commit }, payload) {
    await this.$axios.get('/category', {
      params: {
        page: payload.page,
        search: payload.search,
        status: payload.status
      }
    })
      .then(function (response) {
        commit('category/SET_CATEGORIES', response.data.payload.data, { root: true })
      })
  }
}

const strict = false
export default {
  state,
  mutations,
  actions,
  strict
}
