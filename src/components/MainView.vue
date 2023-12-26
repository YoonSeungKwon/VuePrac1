<template>
    <div>
        <h1>Login Page!</h1>
        <div>
            Email: <input v-model="email"/><br/>
            Password: <input v-model="password"/><br/>
            <input @click="login" type="submit"/>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const email = ref("")
const password = ref("")

function login(){
    axios.post('http://localhost:8081/api/v1/members/login', {
        email:email.value,
        password:password.value,
    }).then((res)=>{
        console.log(res)
    }).catch((error)=>{
        console.log(error)
    })
}
</script>
