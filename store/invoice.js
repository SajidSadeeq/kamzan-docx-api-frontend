const state = () => ({
  invoices: []
})

const mutations = {
  SET_INVOICES: (state, payload) => (state.invoices = payload)
}
const actions = {
  async fetchInvocies ({ commit }, payload) {
    let total = 0
    await this.$axios.get('/invoice', {
      params: payload
    })
      .then(function (response) {
        commit('SET_INVOICES', response.data.payload.data)
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
