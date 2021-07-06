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
    await this.$axios.get(`/brand/view/${payload}`)
      .then(function (response) {
        commit('SET_EDIT_BRAND', response.data.payload)
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
