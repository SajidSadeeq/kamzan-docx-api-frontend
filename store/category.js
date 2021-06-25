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
    await this.$axios.get(`/fetch-category/${payload}`)
      .then(function (response) {
        commit('SET_EDIT_CATEGORY', response.data.data)
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
