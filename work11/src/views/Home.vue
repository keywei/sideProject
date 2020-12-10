<template>
    <div>
        <newtodo></newtodo>
        <todoitems :items="toDoList" :move="moveBtn"></todoitems>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import newtodo from '../components/newToDo.vue';
import todoitems from '../components/toDoItems.vue';

export default {
    data() {
        return {
            moveBtn: true
        }
    },
    computed: mapState(['toDoList']),
    components: {
        newtodo,
        todoitems,
    },
};
</script>
