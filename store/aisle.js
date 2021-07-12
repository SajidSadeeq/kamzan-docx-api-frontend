const state = () => ({
  aisles: [],
  edit_aisle: {}
})

const mutations = {
  SET_AISLE: (state, payload) => (state.aisles = payload),
  SET_EDIT_AISLE: (state, payload) => (state.edit_aisle = payload)
}
const actions = {
  async fetchSpecificAisle ({ commit }, payload) {
    await this.$axios.get(`/aisle/${payload}`)
      .then(function (response) {
        commit('SET_EDIT_AISLE', response.data.payload)
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
