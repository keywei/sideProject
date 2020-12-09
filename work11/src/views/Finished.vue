<template>
    <todoitems :items="toDoList"></todoitems>
</template>

<script>
import { mapState } from 'vuex';
import todoitems from '../components/toDoItems.vue';

export default {
    computed: mapState({
        toDoList: (state) => state.toDoList.filter((item) => item.finished === true),
    }),
    components: {
        todoitems,
    },
};
</script>
