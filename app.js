new Vue({
    el: '#vue-app',
    data: {
       available: false,
       nearby: false
    },
    methods: {
        toggleNearby: function(){
            return this.nearby = !this.nearby;
        },
        
        toggleAvailable: function(){
            return this.available = !this.available;
        }
    },
    computed: {
        compClasses: function(){
            return {
                available: this.available,
                nearby: this.nearby
            }
        },
    }
})

//computed only run when they are needed