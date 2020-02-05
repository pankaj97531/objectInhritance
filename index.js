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

/***************5-2-2019***************/
var obj1 = {
	a: 10,
	b : function(){
		return this.a;
	},
	c : function(){
		return this.b()
	} 
}

var obj2 = {
	c : 20,
	d : 30
}


obj2 = Object.create(obj1);

console.log(obj2);
console.log(obj2.d);
console.log(obj2.b())
console.log(obj2.c());

var obja = {a: 1}; 
// a ---> Object.prototype ---> null

var objb = Object.create(obja);
// b ---> a ---> Object.prototype ---> null
console.log(objb.a); // 1 (inherited)

var objc = Object.create(objb);
// c ---> b ---> a ---> Object.prototype ---> null
console.log(objc.a);

var d = Object.create(null);
// d ---> null
console.log(d.hasOwnProperty); 

var a = {a: 1};

var b = Object.create(a); 

console.log(a.a); // print 1 
console.log(b.a); // print 1
b.a=5;
console.log(a.a); // print 1
console.log(b.a); // print 5
delete b.a;
console.log(a.a); // print 1
console.log(b.a); // print 1(b.a value 5 is deleted but it showing value from its prototype chain)
delete a.a;
console.log(a.a); // print undefined
console.log(b.a); // print undefined
