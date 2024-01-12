<template>
    <div>
        <h1>Home Page!</h1>
        <h2>Vue3 Doc보고 GPT와 공부하기.</h2>
        <router-link class="link" to="/login">로그인 페이지로</router-link>
        <input value="test" @click="test"/>
    </div>
</template>

<script setup>
import axios from 'axios';

function test(){
    
    if(localStorage.getItem('accToken')){
        const headers = {
        'Authorization': `Bearer ${localStorage.getItem('accToken')}`,
        }
    
        axios.get("http://localhost:8082/api/v1/auth", {headers}).then(
            (res)=>{
                console.log(res)
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }
}

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
    color: rgb(81, 81, 240);
}
</style>