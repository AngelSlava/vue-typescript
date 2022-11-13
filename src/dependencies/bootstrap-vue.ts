import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import '@/assets/scss/app.scss'

Vue.use(BootstrapVue, {
  breakpoints: ['xs', 'sm'],
  formTextControls: {
    autocomplete: 'off',
    debounce: '800'
  }
})

Vue.use(BootstrapVueIcons)
