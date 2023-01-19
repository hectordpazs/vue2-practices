new Vue({
    el: '#vue-app',
    data: {
        name: "Hector",
        job: "ninja",
        website: "https://www.google.com",
        websiteTag: '<a href="https://www.google.com" target="blank">google</a>'
    },
    methods: {
        greet: function(time){
            return "Good " + time + " " + this.name;
        }
    },
})