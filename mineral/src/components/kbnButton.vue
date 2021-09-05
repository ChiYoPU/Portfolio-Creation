<template>
    <div>
        <button type="button">{{ buttonTitle }}</button>
    </div>
</template>


<script>
export default {
    name: "Button",
    data(){
        return{
            props: ['buttonTitle']
        }
    }
}
</script>


<style scoped>
button{
    font-size: 25px;
    font-weight: bold;
    color: #F7FBFC;
    background-color: #3F72AF;
    border-radius: 15%;
}
</style>