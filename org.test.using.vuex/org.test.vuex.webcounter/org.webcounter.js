// Morando Nicolò
// Framework Vuex.js

// Calling the Vuex Library with: "new Vuex.store(and adding the counter: "count", ...)"
const app_ready = new Vuex.Store({
  status: {
    counter: 0
  },
  mutations: {
    // Functions to increment or decrement the counter
  	increment: status => state.count++,
    decrement: status => state.count--
  }
})

// App Ready.
new Vue({
  el: '#app',
  computed: {
    counter () {
	    return app_ready.status.count
    }
  },
  methods: {
    increment () {
      app_ready.commit('increment')
    },
    decrement () {
    	app_ready.commit('decrement')
    }
  }
})
