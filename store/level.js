const state = () => ({
  levels: [],
  edit_level: {}
})

const mutations = {
  SET_LEVEL: (state, payload) => (state.levels = payload),
  SET_EDIT_LEVEL: (state, payload) => (state.edit_level = payload)
}
const actions = {
  async fetchSpecificLevel ({ commit }, payload) {
    await this.$axios.get(`/level/${payload}`)
      .then(function (response) {
        commit('SET_EDIT_LEVEL', response.data.payload)
      })
  },
  async fetchLevels ({ commit }, payload) {
    await this.$axios.get('/level', {
      params: {
        page: payload.page,
        limit: payload.limit,
        search: payload.search
      }
    })
      .then(function (response) {
        commit('SET_LEVEL', response.data.payload.data)
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
