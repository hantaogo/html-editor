import Vue from 'vue'
import Vuex from 'vuex'
import editor from './editor'
import pkg from './pkg'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    editor,
    pkg,
  }
})
