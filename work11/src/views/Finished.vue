<template>
    <todoitems :items="toDoListFilter"></todoitems>
</template>

<script>
import { mapState } from 'vuex';
import todoitems from '../components/toDoItems.vue';

export default {
    computed: {
        ...mapState(['toDoList']),
        toDoListFilter() {
            return this.toDoList.filter((item) => item.finished === true);
        },
    },
    components: {
        todoitems,
    },
};
</script>
