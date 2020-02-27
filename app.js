new Vue({
    el: '#app',
    data: {
        principal: null,
        rate: null,
        time: null,
    },
    methods:{
        simpleInterest: function(){
            const simple =(this.principal*this.rate*this.time)/100;
            return simple;
        }

    }
})