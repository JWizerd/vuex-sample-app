import Vue from 'vue'
import Vuex from 'vuex'
import { get } from '@/helpers/http.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countries: [],
    error: ''
  },
  mutations: {
    setCountry(state, country) {
      state.countries.push(country)
    },
    setError(state, error) {
      state.error = error.message
    },
    deleteCountry(state, country) {
      const filtered = state.countries.filter((item,index) => index !== country)
      state.countries = filtered
    }
  },
  getters: {
    countries: state => state.countries
  },
  actions: {
    storeCountries: function({commit, state}, country) {
      get(`https://restcountries.eu/rest/v2/name/${country}`)
      .then(countries => commit('setCountry', countries.data[0]))
      .catch(error => commit('setError', error.message))
    }
  }
})
