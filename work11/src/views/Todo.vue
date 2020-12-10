<template>
    <div>
        <newtodo></newtodo>
        <todoitems :items="toDoListFilter"></todoitems>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import newtodo from '../components/newToDo.vue';
import todoitems from '../components/toDoItems.vue';

export default {
    computed: {
        ...mapState(['toDoList']),
        toDoListFilter() {
            return this.toDoList.filter((item) => item.finished === false);
        },
    },
    components: {
        newtodo,
        todoitems,
    },
};
</script>
