<template>
    <div>
        <newtodo></newtodo>
        <todoitems :items="toDoList"></todoitems>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import newtodo from '../components/newToDo.vue';
import todoitems from '../components/toDoItems.vue';

export default {
    computed: {
        ...mapState({
            toDoList: (state) => state.toDoList.filter((item) => item.finished === false),
        }),
    },
    components: {
        newtodo,
        todoitems,
    },
};
</script>
