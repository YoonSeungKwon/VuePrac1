<template>
<div>
    <h1>Members Page!</h1>
    <div class="member-wrap">
        <img ref='refImage' alt="#"/>
        <span>{{members.name}}</span>
        <br/>
        <span>{{members.email}}</span>
    </div>
    <div class="logout-wrap">
        <span class="logout" @click="logout">로그아웃</span>
    </div>
</div>
</template>

<script setup>
import { members } from '@/state/members';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const refImage = ref(null)
const router = useRouter()

onMounted(()=>{
    refImage.value.src = members.profile
})

function logout(){
    members.email = ""
    members.name = ""
    members.oauth = ""
    members.profile  = ""
    alert('로그아웃 되었습니다.')
    router.push('/')
}

</script>


<style scoped>

*{
    margin:0 auto;
}
.member-wrap{
    margin-top:10vh;
    height: 10vh;
    width: 30vw;

    padding:20px;
    border: 1px ;
    border-radius: 15px 15px 15px 15px;
    box-shadow: 0px 0px 10px 1px #777777;
}
.member-wrap > img{
    width: 10vh;
    height: 10vh;
    float: left;
    border-radius: 45px 45px 45px 45px;
    border: 1px solid #777777;
}
.member-wrap > span{
    font-size: 20px;
    font-weight: bold;
}
.logout-wrap{
    height: 5vh;
}
.logout{
    font-size: 14px;
    font-weight: bold;
    color:rgb(81, 81, 240);
    cursor: pointer;
}
</style>
