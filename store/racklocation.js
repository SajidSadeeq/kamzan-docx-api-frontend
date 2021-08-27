const state = () => ({
  locations: [],
  edit_location: {}
})

const mutations = {
  SET_LOCATION: (state, payload) => (state.locations = payload),
  SET_EDIT_LOCATION: (state, payload) => (state.edit_location = payload)
}
const actions = {
  async fetchSpecificLocation ({ commit }, payload) {
    await this.$axios.get(`/rack-location/${payload}`)
      .then(function (response) {
        commit('SET_EDIT_LOCATION', response.data.payload)
      })
  },
  async fetchLocations ({ commit }, payload) {
    let total = 0
    await this.$axios.get('/rack-location', {
      params: payload
    })
      .then(function (response) {
        commit('SET_LOCATION', response.data.payload.data)
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
