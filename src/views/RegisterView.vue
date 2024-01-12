<template>
    <div class="wrap-all">
        <h1>Register</h1>
        <div>
            <div class="wrap">
                <span>Email:</span>
                <input v-model="email"/>
            </div>
            <div class="wrap">
                <span>Password:</span>
                <input v-model="password"/>
            </div>
            <div class="wrap">
                <span>Name:</span>
                <input v-model="name"/>
            </div>
            <input id="btn" @click="register" type="submit"/>
            
            <div class="help">
                <span @click="loginPage">로그인 페이지로</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const email = ref("")
const password = ref("")
const name = ref("")
const router = useRouter()

function loginPage(){
    router.push('/login')
}

async function register(){
    await axios.post('http://localhost:8081/api/v1/members/', {
        email:email.value,
        password:password.value,
        name:name.value,
    }).then((res)=>{
        console.log(res)
        alert(`${name.value} 님 회원가입을 축하드립니다.\n 로그인 페이지로 이동합니다.`)
        router.push(`/login`)
    }).catch((error)=>{
        console.log(error)
    })
}
</script>

<style scoped>
*{
    margin:0 auto;
    width:20vw;
    text-align: center;
}
.wrap-all{
    border: 1px ;
    border-radius: 45px 45px 45px 45px;
    box-shadow: 0px 0px 10px 1px #333333;
    height: 50vh;
    padding: 30px;
}
.wrap{
    margin-top:5vh;
    margin-bottom: 5vh;
    width:20vw;
    height: 20px;
}
.wrap:first-child{
    margin-top:10vh;
}
input{
    width:10vw;
    float:right;
}
span{
    float:left;
    width: 5vw;
}
#btn{
    width:5vw;
    float:right;
    margin-bottom: 5vh;
}
.help{
    float:left;
    width:20vw;
    height:20px;
}

.help > span{
    width:9vw;
    font-size: 14px;
    color:rgb(81, 81, 240);
    cursor: pointer;
    font-weight: bold;
}

</style>