import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        toDoList: [
            { id: 0, toDo: 'fishing', finished: true },
            { id: 1, toDo: 'shopping', finished: false },
        ],
    },
    mutations: {
        addNewToDo(state, NewToDo) {
            state.toDoList.push(NewToDo);
        },
        remove(state, removeToDoId) {
            state.toDoList.forEach((item, index) => {
                if (item.id === removeToDoId) {
                    state.toDoList.splice(index, 1);
                }
            });
        },
        moveup(state, thing) {
            state.toDoList.splice(thing.index - 1, 0, state.toDoList[thing.index]);
            state.toDoList.splice(thing.index + 1, 1);
            thing.index === 0 ? alert('已經在最前項了') : '';
        },
        movedown(state, thing) {
            state.toDoList.splice(thing.index + 2, 0, state.toDoList[thing.index]);
            state.toDoList.splice(thing.index, 1);
            thing.index === state.toDoList.length - 1 ? alert('已經在最後項了') : '';
        },
        send(state, cacheToDo) {
            state.toDoList.forEach((item, index) => {
                if (item.id === cacheToDo.id) {
                    state.toDoList[index].toDo = cacheToDo.toDo;
                }
            });
        },
    },
});
