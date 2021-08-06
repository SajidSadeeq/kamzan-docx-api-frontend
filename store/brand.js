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
  },
  async fetchBrands ({ commit }, payload) {
    await this.$axios.get('/brand', {
      params: {
        page: payload.page,
        limit: payload.limit,
        search: payload.search,
        status: payload.status
      }
    }
    )
      .then(function (response) {
        commit('SET_BRAND', response.data.payload.data)
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
