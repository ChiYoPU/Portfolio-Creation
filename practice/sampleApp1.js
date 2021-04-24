/*  */
ver UserList = {
    template:'#user-list',
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
        }
    ]
})