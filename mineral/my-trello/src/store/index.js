import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const savedLists = localStorage.getItem('trello-lists')

const store = new Vuex.Store({
  state: {
    state: {
  　  lists: savedLists ? JSON.parse(savedLists): [
        {
          title: 'Backlog',
          cards: [
            { body: 'English' },
            { body: 'Mathematics' },
          ]
        },
        {
          title: 'Todo',
          cards: [
            { body: 'Science' }
          ]
        },
        {
          title: 'Doing',
          cards: []
        }
      ],
  },
  mutations: {
    addlist(state, payload){
      state.lists.push({title: payload.title, cards:[]})
    },
  },
  actions: {
    addlist(context, payload){
      context.commit('addlist', payload)
    }
  },
  getters: {
  }
})
export default store
