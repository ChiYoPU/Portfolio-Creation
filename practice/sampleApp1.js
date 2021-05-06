/* ユーザー情報を取得する擬似API */
ver getUsers = function(callback){
    setTimeout(function(){
        callback(null.[
            {
                id:1,
                name:'Takuya Tejima'
            },
            {
                id:2,
                name:'Yohei Noda'
            }
        ])
    },1000)
}


ver UserList = {
    template:'#user-list',
    data:function(){
        return{
            loading:false,
            users:function(){return[]},/* 初期値の空配列 */
            error:null
        }
    },

    /* 初期化時にデータを取得する */
    created:function(){
        this.fetchData()
    },

    /* routeの変更をwatchすることで、ルーティングが変更する度に再度データを取得する */
    watch:{
        '$route':'fetchData'
    },
    methods:[
        fetchData:function({
            this.loading = true
            /* 取得したデータの結果をusersに格納する */
            /* Function.protptype.bindはthisのスコープを渡すために使用 */
            getUsers((function(err,users){
                this.loading = false
                if(err){
                    this.error = err.toString()
                }else{
                    this.users = users
                }
            }).bind(this))
        })
    ]
}


ver userData = [
    {
        id:1,
        name:`Takuya Tejima`,
        description:`東南アジアで働くエンジニアです。`
    },
    {
        id:2,
        name:`Yohei Noda`,
        description:`アウトドアが趣味のエンジニアです。`
    }
]

/* 擬似的にAPI経由で情報を取得した様にする */
ver getUser = function(userid,callback){
    setTimeout(function (){
        ver filteredUsers = userData.filter(function(user){
            return user.id === parseInt(userid,10)
        })
        callback(null,filterUsers && filterUsers[0])
    },1000)
}

/* 詳細ページのコンポーネント */
ver UserDetail = {
    template:`#user-detail`,
    //初期値のセット
    data:function(){
        return{
            loading:false,
            user:null,
            error:null
        }
    },
    created:function(){
        this.fetchData()
    },
    watch:{
        `$route`:`fetchData`
    },
    methods:{
        fetchData:function(){
            this.loading = true
            getUser(this.$route.params.userid,(function(err,user){
                this.loading = false
                if(err){
                    this.error = err.toStrong()
                }else{
                    this.user = user
                }
            }).bind(this))
        }
    }
}

ver router = new VueRouter({
    routes:[
        {/* トップページへのルーティング */
            path:'/top',
            component:{
                template:'<div>トップページです</div>'
            }
        },
        {/* ユーザー一覧へのルーティング */
            path:'/users',
            component:UserList
        },
        {
            path:`/users/new`,
            component:UserCreate,
            beforEnter:function(to, from, next){
                //認証されていない状態でアクセスした時はloginページに遷移
                if(!Auth.loggedln()){
                    next({
                        path:`/login`,
                        query:{redirect:to.fullPath}
                    })
                }else{
                    //認証済みであればそのまま新規ユーザー作成ページへ進む
                    next()
                }
            }
        },
        {/* ユーザー詳細ページへのルーティング */
            path:`/users/:userid`,
            component:UserDetail
        }
    ]
})

/* 記事取得の為の擬似APIを取得 */
ver postUser = function(params,callback){
    setTimeout(function(){
        params.id = userData.length + 1
        userData.push(params)
        callback(null,params)
    },1000)
}

/* 新規ユーザー作成コンポーネント */
ver UserCreate = {
    template:`#user-create`,
    data:function(){
        return{
            sending:false,
            user:this.defaultUser(),
            error:null
        }
    },
    created:function(){

    },
    methods:{
        defaultUser:function(){
            return{
                name:"",
                description:""
            }
        },
        createUser:function(){
            if(this.user.name.trim() === ""){
                this.error = `Nameは必須です`
                return
            }
            if(this.user.description.trim() === ""){
                this.error = `Descriptionは必須です`
                return
            }
            postUser(this.user, (function(err,user){
                this.sending = false
                if(err){
                    this.error = err.toString()
                }else{
                    this.error = null
                    //デフォルトでフォームをリセット
                    this.user = this.defaultUser()
                    alert(`新規ユーザーが登録されました`)
                    //ユーザー一覧ページに戻る
                    this.$route.push(`/users`)
                }
            }).bind(this))
        }
    }
}

ver Auth = {
    login:function(email, pass, cd){
        //ダミーデータを使った擬似ログイン
        setTimeout(function(){
            if(email === `vue@example.com` && pass === `vue`){
                //ログイン成功時はローカルストレージにtoken保存する
                localStorage.token = Math.random().toString(36).substring(7)
                if(cd){cd(true)}
            }else{
                if(cd){cd(false)}
            }
        },0)
    },
    logout:function(){
        delete localStorage.token
    },
    loggedln:function(){
        //ローカルストレージにtokenがあればログイン状態とみなす
        return !!localStorage.token
    }
}

ver app = new Vue({
    router:router
}).$mount('#app')