new Vue({
    el: '#vue-app',
    data: {
       age: 23,
       x: 0,
       y:0
    },
    methods: {
        greet: function(time){
            return "Good " + time + " " + this.name;
        },
        handleOperation: function(numberToOperate){
            return this.age += numberToOperate;
        },
        updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function(){
            alert('Click')
        }
    },
})