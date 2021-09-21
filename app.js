new Vue({
    el:"#app",
    data: {
        title : "Sabbir",
        cars: ['Bently','Toyota'],
        robot: {
            name : "Frank"
        },
        greeting:()=>{
            return "Hello World";
        }
    }
});