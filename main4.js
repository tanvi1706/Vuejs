var app = new Vue({
    el: "#app",
    // remenber that variables here are asssignes with : not with =
    data: {
        flag: true,
        styleObj: { 
            backgroundColor: 'green', 
            border: '5px solid orange'
        }
    },
    methods: {
        changeShape(){
            this.flag = !this.flag;
        }
    }
})