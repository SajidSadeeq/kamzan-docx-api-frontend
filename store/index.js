const strict = false
const state = () => ({
  toggleSideBar: false
})
const mutations = {
  TOGGLE_SIDE_BAR: (state, payload) => { state.toggleSideBar = payload }
}
export default {
  strict, mutations, state
}
