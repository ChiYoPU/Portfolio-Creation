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
            component:UserCreate
        },
        {/* ユーザー詳細ページへのルーティング */
            path:`/users/:userid`,
            component:UserDetail
        }
    ]
})

ver postUser = function(params,callback){
    setTimeout(function(){
        params.id = userData.length + 1
        userData.push(params)
        callback(null,params)
    },1000)
}

ver app = new Vue({
    router:router
}).$mount('#app')