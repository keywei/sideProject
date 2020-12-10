<template>
    <div id="app">
        <div class="nav">
            <router-link to="/">全部</router-link> ｜
            <router-link to="/todo">待辦事項</router-link> ｜
            <router-link to="/finished">已完成事項</router-link>
        </div>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {};
</script>
