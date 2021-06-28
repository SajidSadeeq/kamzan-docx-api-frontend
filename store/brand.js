const state = () => ({
  brands: [],
  edit_brand: {}
})

const mutations = {
  SET_BRAND: (state, payload) => (state.brands = payload),
  SET_EDIT_BRAND: (state, payload) => (state.edit_brand = payload)
}
const actions = {
  async fetchSpecificCategories ({ commit }, payload) {
    await this.$axios.get(`/fetch-brand/${payload}`)
      .then(function (response) {
        commit('SET_EDIT_BRAND', response.data.data)
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
