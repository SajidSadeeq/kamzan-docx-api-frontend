const state = () => ({
  goods: [],
  edit_good: {}
})

const mutations = {
  SET_GOOD: (state, payload) => (state.goods = payload),
  SET_EDIT_GOOD: (state, payload) => (state.edit_good = payload)
}
const actions = {
  async fetchSpecificGood ({ commit }, payload) {
    await this.$axios.get(`/good/${payload}`)
      .then(function (response) {
        commit('SET_EDIT_GOOD', response.data.payload)
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
