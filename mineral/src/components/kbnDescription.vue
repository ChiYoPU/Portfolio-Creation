<template>
    <div class="description">
        <img src="../assets/logo.png">
        <p class="content bigContent">{{ Message1 }}</p>
        <p class="content bigContent">{{ Message2 }}</p>>
        <p class="content bigContent">{{ Message3 }}</p>

        <p class="content minContent">{{ Message4 }}</p>
        <p class="content minContent">{{ Message5 }}</p>
        <p class="content minContent">{{ Message6 }}</p>

        <div class="button">
            <Button buttonTitle="アカウントを作成する"/>
        </div>
    </div>
</template>

<script>
export default {
    name: "description",
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
};

import Button from "/kbnButton";
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