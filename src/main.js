// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import VueApollo from 'vue-apollo'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import VeeValidate from 'vee-validate'
import VueSweetAlert from 'vue-sweetalert'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

Vue.use(VueSweetAlert)

Vue.config.productionTip = false

Vue.use(VeeValidate)

Vue.component('icon', Icon)

// connect to GraphQL project
const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj4yr6rswtiba0196adh0ut1w',
})


const apolloClient = new ApolloClient({
  networkInterface,
})

// Install the vue plugin
Vue.use(VueApollo, {
  apolloClient,
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
