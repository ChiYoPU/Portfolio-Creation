import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//LocalStorageに保存したリストの取得
const savedLists = localStorage.getItem('trello-lists')

const store = new Vuex.Store({
  state: {
    state: {
      //保存したリストがあれば取得し、ないときに表示されるデフォルトを定義
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
}})

store.subscribe((mutation, state) => {
  //LocalStorageにデータの更新をして、Jsonに変換して保存
  localStorage.setItem('trello-lists', JSON.stringify(state.lists))
})

export default store
