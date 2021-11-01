const state = {
  user: '<%= name %>',
  }

const mutations = {
  userInfo: (state, user) => {
    state.user = user
  },
}

export default {
  namespaced: true,
  state,
  mutations
}