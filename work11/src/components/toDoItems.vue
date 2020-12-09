<template>
    <div>
        <ul>
            <li class="items" v-for="(item, index) in items" :key="item.id">
                <div v-if="item.id !== cacheToDo.id">
                    <input type="checkbox" v-model="item.finished" />
                    <div class="todo">{{ item.toDo }}</div>
                    <div class="todos-btn">
                        <template v-if="move">
                            <button class="btn" @click="moveup(index)">上移</button>
                            <button class="btn" @click="movedown(index)">下移</button>
                        </template>
                        <button class="btn" @click="edit(item)">修改</button>
                        <button class="btn" @click="remove(item.id)">刪除</button>
                    </div>
                </div>
                <div v-if="item.id === cacheToDo.id">
                    <div class="todo">
                        <input class="edit" type="text" v-model="cacheToDo.toDo" />
                    </div>
                    <div class="todos-btn">
                        <button class="btn" @click="cancel">取消</button>
                        <button class="btn" @click="update">確定</button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    props: {
        items: {
            type: Array,
        },
        move: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            cacheToDo: {},
        };
    },
    computed: mapState(['toDoList']),
    methods: {
        ...mapActions(['vuexremove', 'vuexupdate', 'vuexmoveup', 'vuexmovedown']),
        remove(id) {
            let removeItem = this.toDoList.filter((item, index) => item.id !== id);
            this.vuexremove(removeItem);
        },
        edit(item) {
            this.cacheToDo = Object.assign({}, item);
        },
        cancel() {
            this.cacheToDo = {};
        },
        update() {
            let updateItem = this.toDoList.map((item, index) => {
                if (item.id !== this.cacheToDo.id) {
                    return item;
                } else {
                    return this.cacheToDo;
                }
            });
            this.vuexupdate(updateItem);
            this.cancel();
        },
        moveup(index) {
            if (index !== 0) {
                let copyToDoList = [...this.toDoList];
                [copyToDoList[index - 1], copyToDoList[index]] = [copyToDoList[index], copyToDoList[index - 1]];
                this.vuexmoveup(copyToDoList);
            } else {
                alert('已經在最前項了');
            }
        },
        movedown(index) {
            let copyToDoList = [...this.toDoList];
            if (index !== copyToDoList.length - 1) {
                [copyToDoList[index + 1], copyToDoList[index]] = [copyToDoList[index],copyToDoList[index + 1]];
                this.vuexmovedown(copyToDoList);
            } else {
                alert('已經在最前項了');
            }
        },
    },
};
</script>
