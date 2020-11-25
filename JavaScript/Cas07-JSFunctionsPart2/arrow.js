() => {

}

var b = 0;

add = () => {
    let b = 0;
};

function test() {

};

var name = 'Test Name';
var x = {
    name: 'Test',
    test: function(){
        console.log(this.name);
    },
    test1: () => {
        console.log(this.name);
    }
}

x.test();
x.test1();