let testObj1 ={
	property1 : "property1"
}

let testObj2 = Object.create(testObj1,{
	property2 : {
		value : "property2"
	}
});

let clone = Object.create(Object.getPrototypeOf(testObj2), Object.getOwnPropertyDescriptors(testObj2));

clone.property2 = "property2222";

console.dir(Object.getPrototypeOf(testObj1));

console.log(clone.property2);

//https://javascript.info/prototype-methods

let animal = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

console.log( rabbit.eats ); // true

///https://javascript.info/function-prototype

//https://javascript.info/constructor-new

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

function foo(){}
foo.prototype = {
  foo_prop: "foo val"
};

function bar(){}
var proto = Object.create(
  foo.prototype
);
proto.bar_prop = "bar val";
bar.prototype = proto;
var inst = new bar;

console.log(inst.foo_prop);
console.log(inst.bar_prop)