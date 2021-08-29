<template>
    <div class="description">
        <img src="../assets/logo.png">
        <p class="bigContent">{{ Message1 }}</p>
        <p class="bigContent">{{ Message2 }}</p>>
        <p class="bigContent">{{ Message3 }}</p>

        <p class="minContent">{{ Message4 }}</p>
        <p class="minContent">{{ Message5 }}</p>
        <p class="minContent">{{ Message6 }}</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            Message1: "Twitterに上げる程じゃないけどつぶやきたい",
            Message2: "ひとつも反応がないのは流石にさびしい・・・",
            Message3: "一回でいいからバズりを体験してみたい",
            Message4: "そんな思いを叶えます",
            Message5: "つぶやいた内容は他の人から見られなくて安心！",
            Message6: "架空のいいねとコメントが付くひとりごとアプリです"
        }
    }
}
</script>

<style scoped>

</style>