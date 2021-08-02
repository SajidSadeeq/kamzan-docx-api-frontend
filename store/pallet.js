const state = () => ({
  pallets: [],
  edit_pallet: {}
})

const mutations = {
  SET_PALLET: (state, payload) => (state.pallets = payload),
  SET_EDIT_PALLET: (state, payload) => (state.edit_pallet = payload)
}
const actions = {
  async fetchSpecificPallet ({ commit }, payload) {
    await this.$axios.get(`/pallet/${payload}`)
      .then(function (response) {
        commit('SET_EDIT_PALLET', response.data.payload)
      })
  },
  async fetchPallets ({ commit }, payload) {
    await this.$axios.get('/pallet', {
      params: {
        page: payload.page,
        limit: payload.limit
      }
    })
      .then(function (response) {
        commit('SET_PALLET', response.data.payload.data)
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
