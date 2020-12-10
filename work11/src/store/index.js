import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        toDoList: [
            { id: 0, todo: '早上要記得吃早餐', finished: true },
            { id: 1, todo: '12/25聖誕節，公司有聚會', finished: false },
            { id: 2, todo: '明年是2021年，新氣象', finished: true },
            { id: 3, todo: '下班記得要打卡', finished: false },
            { id: 4, todo: '老虎城有間漢堡店有空可以去吃', finished: false },
        ],
        newId: 5,
    },
    mutations: {
        addNewToDo(state, newToDo) {
            state.toDoList = [...state.toDoList, newToDo];
        },
        remove(state, removeId) {
            state.toDoList = state.toDoList.filter((item) => item.id !== removeId);
        },
        moveup(state, moveUpToDo) {
            state.toDoList = moveUpToDo;
        },
        movedown(state, moveDownToDo) {
            state.toDoList = moveDownToDo;
        },
        update(state, cacheToDo) {
            state.toDoList = cacheToDo;
        },
        newidadd(state, newid) {
            state.newId = newid;
        },
    },
    actions: {
        vuexaddnewtodo({ commit }, newToDo) {
            commit('addNewToDo', newToDo);
        },
        vuexremove({ commit }, removeId) {
            commit('remove', removeId);
        },
        vuexupdate({ commit }, cacheToDo) {
            commit('update', cacheToDo);
        },
        vuexmoveup({ commit }, moveUpToDo) {
            commit('moveup', moveUpToDo);
        },
        vuexmovedown({ commit }, moveDownToDo) {
            commit('movedown', moveDownToDo);
        },
        vuexnewidadd({ commit }, newid) {
            commit('newidadd', newid);
        },
    },
});
