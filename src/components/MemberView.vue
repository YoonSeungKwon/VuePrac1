<template>
<div>
    <h1>Members Page!</h1>
    <div>
        <span>{{members.email}}</span>
        <span>{{members.name}}</span>
        <img ref='refImage' alt="#"/>
    </div>
</div>
</template>

<script setup>
import { members } from '@/state/members';
import { onMounted, ref } from 'vue';

const refImage = ref(null);

onMounted(()=>{
    refImage.value.src = members.profile
})

</script>


<style scoped>

</style>
