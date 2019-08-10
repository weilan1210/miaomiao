export default{
    path : "/movie",  //这里为什么没有一点？./xxx
    component : ()=>import('@/views/Movie'),
    children:[
        {
            path : 'city',
            component : ()=>import("@/components/City")
        },
        {
            path : 'nowPlaying',
            component : ()=>import("@/components/NowPlaying")   
        },
        {
            path : 'comingSoon',
            component : ()=>import("@/components/ComingSoon")
        },
        {
            path : 'search',
            component : ()=>import("@/components/Search")
        },
        {
            path:'/movie',
            redirect:'/movie/nowPlaying'
        }
    ]
        
}//@表示src目录