var testObj1 = {
	a :10,
	b: 20
}

var testObj2 = Object.create(testObj1,{d : {value:30}});

var testobj3 = Object.create(testObj2,{e : {value : 40}})

var cloneObj = Object.create(Object.getPrototypeOf(testobj3),Object.getOwnPropertyDescriptors(testobj3));

var clone_inner1 = Object.getOwnPropertyDescriptors(testobj3);
var clone_inner2 = Object.getPrototypeOf(testobj3);
console.log(clone_inner1);
console.log(clone_inner2);

//console.log(testobj3);
//console.log(cloneObj);