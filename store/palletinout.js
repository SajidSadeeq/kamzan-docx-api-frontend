const state = () => ({
  pallets: [],
  edit_pallet: {}
})

const mutations = {
  SET_PALLETS: (state, payload) => (state.pallets = payload),
  SET_EDIT_PALLET: (state, payload) => (state.edit_pallet = payload)
}
const actions = {
  async fetchPalletsInOutList ({ commit }, payload) {
    await this.$axios.get(`/pallets-in-out/view/${payload}`)
      .then(function (response) {
        commit('SET_EDIT_PALLET', response.data.payload)
      })
  },
  async fetchPalletInOut ({ commit }, payload) {
    await this.$axios.get('/pallets-in-out', {
      params: {
        page: payload.page,
        daterange: payload.daterange,
        type: payload.type
      }
    })
      .then(function (response) {
        commit('SET_PALLETS', response.data.payload.data)
      })
  },
  async fetchPalletsRecentlyAdded ({ commit }, payload) {
    await this.$axios.get('/pallets-in-out/recently-added', {
      params: {
        page: payload.page
      }
    })
      .then(function (response) {
        commit('SET_PALLETS', response.data.payload.data)
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
