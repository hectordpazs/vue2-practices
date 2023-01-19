new Vue({
    el: '#vue-app',
    data: {
       a: 0,
       b: 0,
       age:20
    },
    methods: {
       /*  addToA: function(){
            return this.age + this.a;
        },
        addToB: function(){
            return this.age + this.b;
        } */
    },
    computed: {
        addToA: function(){
            return this.age + this.a;
        },
        addToB: function(){
            return this.age + this.b;
        }
    }
})

//computed only run when they are needed