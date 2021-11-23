const state = () => ({
  customer_stock: []
})

const mutations = {
  CUSTOMER_STOCK: (state, payload) => (state.customer_stock = payload)
}

const actions = {
  async fetchCustomerStock ({ commit }, payload) {
    await this.$axios.get('/reports/customer-stock',
      {
        params: payload
      }
    )
      .then(function (response) {
        commit('CUSTOMER_STOCK', response.data.payload)
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
