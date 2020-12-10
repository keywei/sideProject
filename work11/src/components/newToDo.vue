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
        ...mapState(['newId']),
    },
    methods: {
        ...mapActions(['vuexaddnewtodo']),
        addNewToDo() {
            if (this.newToDo === '') {
                alert('請輸入事項');
            } else {
                this.vuexaddnewtodo({
                    id: this.newId,
                    todo: this.newToDo,
                    finished: false,
                });
                this.newToDo = '';
            }
        },
    },
};
</script>
