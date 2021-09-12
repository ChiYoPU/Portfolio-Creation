<template>
    <div id="app">
        <img src="../assets/logo.png">
        <description></description>

        <div class="button">
            <Button buttonTitle="アカウントを作成する"/>
        </div>
    </div>
</template>

<script>
var app = new Vue({
    el: '#app',
    data: {

    },
    components:{
        'description':{
            template: '<div><p>Twitterに上げる程じゃないけどつぶやきたい</p><p>ひとつも反応がないのは流石にさびしい</p><p>一回でいいからバズりを体験してみたい</p><p>そんな思いを叶えます</p><p>つぶやいた内容は他の人から見られなくて安心！</p><p>架空のいいねとコメントが付くひとりごとアプリです</p></div>'
        }
    },
})

import Button from "kbnButton.vue";
export default{
    name: "button",
    components: {
        Button,
    },
};
</script>

<style scoped>
.description{
    background-color: #F9F7F7;
    border-radius: 15%;
}
</style>