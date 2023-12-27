<template>
    <div>
        <h1>Home Page!</h1>
        <h2>안녕하세요.. Vue3 Doc보고 GPT와 공부하기 프로젝트입니다.</h2>
        <router-link class="link" to="/main">로그인 페이지로..</router-link>
    </div>
</template>

<script setup>
</script>

<style scoped>
h2{
    margin-top:5vh;
    margin-bottom:5vh;
}

.link{
    font-weight: bold;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-decoration: none;
    color: #2c3e50;
}
</style>