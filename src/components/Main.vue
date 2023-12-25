<template>
    <div>
        <h1>Main Page!</h1>
    </div>
</template>

<script>
    import HelloWorld from '@/components/Main.vue';

    export default :{
        name: 'Main',
        props:{
            'msg':'string'
        }
    }
</script>
