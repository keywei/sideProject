<template>
    <div>
        <ul>
            <li class="items" v-for="item in items" :key="item.id">
                <div class="todo">{{ item.toDo }}</div>
                <div class="todos-btn">
                    <label class="done" for="checkbox">{{ item.finished ? '取消完成' : '' }}</label>
                    <input type="checkbox" :key="item.id" v-model="item.finished" />
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        items() {
            return this.$store.state.toDoList.filter((item) => item.finished === true);
        },
    },
};
</script>
