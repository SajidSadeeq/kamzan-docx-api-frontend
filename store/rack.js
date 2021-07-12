const state = () => ({
  racks: [],
  edit_rack: {}
})

const mutations = {
  SET_RACK: (state, payload) => (state.rack = payload),
  SET_EDIT_RACK: (state, payload) => (state.edit_rack = payload)
}
const actions = {
  async fetchSpecificRack ({ commit }, payload) {
    await this.$axios.get(`/rack/${payload}`)
      .then(function (response) {
        commit('SET_EDIT_RACK', response.data.payload)
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
