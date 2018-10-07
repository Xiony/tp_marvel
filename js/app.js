new Vue({
    el: '#app',
    data : {
        message: 'Salut les gens',
        link: 'http://www.google.fr',
        success:true,
        persons: ['Jean', 'Loïc','Marine','Rachelle','Océanne']
    },
    methods:{
        close:function(){
            this.success = false
        }
    }
})