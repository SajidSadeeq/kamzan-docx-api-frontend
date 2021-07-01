const state = () => ({
  products: [],
  edit_product: {}
})

const mutations = {
  SET_PRODUCTS: (state, payload) => (state.products = payload),
  SET_EDIT_PRODUCT: (state, payload) => (state.edit_product = payload)
}
const actions = {
  async fetchSpecificProduct ({ commit }, payload) {
    await this.$axios.get(`/product/view/${payload}`)
      .then(function (response) {
        commit('SET_EDIT_PRODUCT', response.data.payload)
      })
  },
  async fetchProducts ({ commit }, payload) {
    await this.$axios.get(`/product?page=${payload.page}`)
      .then(function (response) {
        commit('product/SET_PRODUCTS', response.data.payload.data)
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
