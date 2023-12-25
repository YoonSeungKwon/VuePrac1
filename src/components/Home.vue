<template>
    <div>
        <h1>Home Page!</h1>
    </div>
</template>

<script>
    import HelloWorld from '@/components/Home.vue';

    export default :{
        name: 'Home',
        props:{
            'msg':'string'
        }
    }
</script>
