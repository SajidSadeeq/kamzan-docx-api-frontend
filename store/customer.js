const state = () => ({
  customers: [],
  edit_customer: {}
})

const mutations = {
  SET_CUSTOMER: (state, payload) => (state.customers = payload),
  SET_EDIT_CUSTOMER: (state, payload) => (state.edit_customer = payload)
}
const actions = {
  async fetchSpecificCategories ({ commit }, payload) {
    await this.$axios.get(`/customer/view/${payload}`)
      .then(function (response) {
        commit('SET_EDIT_CUSTOMER', response.data.payload)
      })
  },
  async fetchCustomers ({ commit }, payload) {
    await this.$axios.get('/customer', {
      params: {
        page: payload.page,
        search: payload.search
        // status: payload.status
      }
    })
      .then(function (response) {
        commit('customer/SET_CUSTOMER', response.data.payload.data, { root: true })
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
