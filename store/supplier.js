const state = () => ({
  suppliers: [],
  edit_supplier: {}
})

const mutations = {
  SET_SUPPLIER: (state, payload) => (state.suppliers = payload),
  SET_EDIT_SUPPLIER: (state, payload) => (state.edit_supplier = payload)
}
const actions = {
  async fetchSpecificCategories ({ commit }, payload) {
    await this.$axios.get(`/supplier/view/${payload}`)
      .then(function (response) {
        commit('SET_EDIT_SUPPLIER', response.data.payload)
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
