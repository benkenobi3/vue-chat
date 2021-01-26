import Vue from 'vue'
import Vuex from 'vuex'

import hub from '../store/hub.js'

Vue.use(Vuex)

export default new Vuex.Store({

    modules: {
        hub,
    }

})