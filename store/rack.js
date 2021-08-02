const state = () => ({
  racks: [],
  edit_rack: {}
})

const mutations = {
  SET_RACK: (state, payload) => (state.racks = payload),
  SET_EDIT_RACK: (state, payload) => (state.edit_rack = payload)
}
const actions = {
  async fetchSpecificRack ({ commit }, payload) {
    await this.$axios.get(`/rack/${payload}`)
      .then(function (response) {
        commit('SET_EDIT_RACK', response.data.payload)
      })
  },
  async fetchRacks ({ commit }, payload) {
    await this.$axios.get('/rack', {
      params: {
        page: payload.page,
        limit: payload.limit
      }
    })
      .then(function (response) {
        commit('SET_RACK', response.data.payload.data)
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
