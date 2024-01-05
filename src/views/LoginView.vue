<template>
    <div class="wrap-all">
        <h1>Login Page!</h1>
        <div>
            <div class="wrap">
                <span>Email:</span>
                <input v-model="email"/>
            </div>
            <div class="wrap">
                <span>Password:</span>
                <input v-model="password"/>
            </div>
            <input id="btn" @click="login" type="submit"/>
            
            <div class="help">
                <span @click="registerPage">회원가입</span>
                <span>아이디 | 비밀번호 찾기</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { members } from '@/state/members'
import { useRouter } from 'vue-router';

const email = ref("")
const password = ref("")
const router = useRouter()

onMounted(()=>{
    if(members.email !== ""){
        router.push(`/member/${members.email}`)
    }
})

function registerPage(){
    router.push('/register')
}

async function login(){
    await axios.post('http://localhost:8080/api/v1/members/login', {
        email:email.value,
        password:password.value,
    }).then((res)=>{
        console.log(res)

        //
        members.email = res.data.email
        members.name = res.data.name
        members.regdate = res.data.regdate
        //

        alert(`안녕하세요 ${members.name} 님`)
        router.push(`/member/${members.email}`)
    }).catch((error)=>{
        console.log(error)
        alert('이메일 또는 비밀번호를 확인해주세요.')
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
    height: 40vh;
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

.help > span:first-child{
    border-right:1px solid black;
}
</style>