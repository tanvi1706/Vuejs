var app = new Vue({
    el: "#app",
    data: {
        first_name: "Tanvi",
        last_name: "Patil"
    },
    computed: {
        getRandomComputed(){
            return Math.random();
        },
        getFullName(){
            return `${ this.first_name } ${ this.last_name }`;
        },
        reverseFullName(){
            first = this.first_name.split("").reverse().join("");
            last = this.last_name.split("").reverse().join("");
            return `${ first } ${ last }`
        }
    },
    methods: {
        getRandomNumber(){
            return Math.random();
        },
    }
})