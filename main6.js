var app = new Vue({
    el: "#app",
    computed: {
        getRandomComputed(){
            return Math.random();
        }
    },
    methods: {
        getRandomNumber(){
            return Math.random();
        },
    }
})