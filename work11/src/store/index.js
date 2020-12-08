import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        toDoList: [
            { id: 0, toDo: '早上要記得吃早餐', finished: true },
            { id: 1, toDo: '12/25聖誕節，公司有聚會', finished: false },
            { id: 2, toDo: '明年是2021年，新氣象', finished: true },
            { id: 3, toDo: '下班記得要打卡', finished: false },
            { id: 4, toDo: '老虎城有間漢堡店有空可以去吃', finished: false },
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
        moveup(state, toDo) {
            if (toDo.index !== 0) {
                state.toDoList.splice(toDo.index - 1, 0, state.toDoList[toDo.index]);
                state.toDoList.splice(toDo.index + 1, 1);
            } else {
                alert('已經在最前項了');
            }
        },
        movedown(state, toDo) {
            if (toDo.index !== state.toDoList.length - 1) {
                state.toDoList.splice(toDo.index + 2, 0, state.toDoList[toDo.index]);
                state.toDoList.splice(toDo.index, 1);
            } else {
                alert('已經在最後項了');
            }
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
