<template>
    <div>
        <button type="button">{{ button }}</button>
    </div>
</template>


<script>
export default {
    data(){
        return{
            button: "Sign in"
        }
    }
}
</script>


<style lang="scss">
button{
    font-size: 25px;
    font-weight: bold;
    color: #F7FBFC;
    background-color: #3F72AF;
    border-radius: 15%;
}
</style>