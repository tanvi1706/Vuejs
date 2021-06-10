var app = new Vue({
    el: '#app',
    data: {
        lesson: "lesson 1",
        counter: 0
    },
    methods: {
        incrementCounter(){
            this.counter += 1;
            console.log(this.conter);
            if (this.counter === 10) {
                alert("Counter is at 10!");
            }
        },
        overTheGreenBox(){
            console.log("Over the green box");
        },
    }
})