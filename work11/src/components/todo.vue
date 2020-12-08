<template>
    <div>
        <div class="add-todo">
            <input type="text" placeholder="新增事項" v-model="newToDo" />
            <button @click="addNewToDo">新增</button>
        </div>
        <ul>
            <li class="items" v-for="item in items" :key="item.id">
                <div v-if="item.id !== cacheToDo.id">
                    <div class="todo">{{ item.toDo }}</div>
                    <div class="todos-btn">
                        <label class="done" for="checkbox">{{
                            item.finished ? '' : '勾選完成'
                        }}</label>
                        <input type="checkbox" v-model="item.finished" />
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
                        <button class="btn" @click="send">確定</button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: 5,
            newToDo: '',
            cacheToDo: {},
        };
    },
    computed: {
        todo() {
            return {
                id: this.id,
                toDo: this.newToDo,
                finished: false,
            };
        },
        items() {
            return this.$store.state.toDoList.filter((item) => item.finished === false);
        },
    },
    methods: {
        addNewToDo() {
            if (this.newToDo === '') {
                alert('請輸入事項');
            } else {
                this.$store.commit('addNewToDo', this.todo);
                this.id++;
                this.newToDo = '';
            }
        },
        remove(id) {
            this.$store.commit('remove', id);
        },
        edit(item) {
            this.cacheToDo = Object.assign({}, item);
        },
        cancel() {
            this.cacheToDo = {};
        },
        send() {
            this.$store.commit('send', this.cacheToDo);
            this.cancel();
        },
    },
};
</script>
