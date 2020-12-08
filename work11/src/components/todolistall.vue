<template>
    <ul>
        <li class="items" v-for="(item, index) in items" :key="item.id">
            <div class="todo">{{ item.toDo }}</div>
            <div class="todos-btn">
                <button class="btn" @click="moveup(item, index)">上移</button>
                <button class="btn" @click="movedown(item, index)">下移</button>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    computed: {
        items() {
            return this.$store.state.toDoList;
        },
    },
    methods: {
        moveup(item, index) {
            this.$store.commit('moveup', {
                item,
                index,
            });
        },
        movedown(item, index) {
            this.$store.commit('movedown', {
                item,
                index,
            });
        },
    },
};
</script>
