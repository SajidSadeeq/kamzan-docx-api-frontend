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
    let total = 0
    await this.$axios.get('/rack', {
      params: {
        page: payload.page,
        limit: payload.limit,
        search: payload.search,
        status: payload.status,
        side: payload.side
      }
    })
      .then(function (response) {
        commit('SET_RACK', response.data.payload.data)
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
