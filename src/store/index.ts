import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const context = require.context('./modules', true, /index.js/)

// eslint-disable-next-line
const modules = context.keys().reduce((module: any, file) => {
  const name = file.replace(/(\.\/|\/index\.js$)/g, '')
  module[name] = context(file).default || context(file)
  module[name].namespaced = true
  return module
}, {})

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules
})
