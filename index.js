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