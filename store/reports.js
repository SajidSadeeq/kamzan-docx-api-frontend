const state = () => ({
  customer_stock: [],
  sales_report: []
})

const mutations = {
  CUSTOMER_STOCK: (state, payload) => (state.customer_stock = payload),
  SET_SALES_REPORT: (state, payload) => (state.sales_report = payload)
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
  },
  async fetchSalesReport ({ commit }, payload) {
    let total = 0
    await this.$axios.get('/reports/sales-report',
      {
        params: payload
      }
    )
      .then(function (response) {
        commit('SET_SALES_REPORT', response.data.payload.data)
        total = response.data.payload.total
      })
    return total
  }
}

const strict = false
export default {
  state,
  mutations,
  actions,
  strict
}
