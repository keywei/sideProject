<template>
    <div class="add-todo">
        <input type="text" placeholder="新增事項" v-model="newToDo" />
        <button @click="addNewToDo">新增</button>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    data() {
        return {
            newToDo: '',
        };
    },
    computed: {
        addtodo() {
            return {
                id: this.newId,
                toDo: this.newToDo,
                finished: false,
            };
        },
        ...mapState(['toDoList', 'newId']),
    },
    methods: {
        ...mapActions(['vuexaddnewtodo', 'vuexnewidadd']),
        addNewToDo() {
            if (this.newToDo === '') {
                alert('請輸入事項');
            } else {
                let addnewtodo = [...this.toDoList, this.addtodo];
                this.vuexaddnewtodo(addnewtodo);
                let id = this.newId + 1;
                this.vuexnewidadd(id);
                this.newToDo = '';
            }
        },
    },
};
</script>
