var Mobile=function(){
	this.a = 15;
}
Mobile.prototype.myMethod = function(){
	console.log("myMethod");
}
var Samsung = function(){
	Mobile.call(this);
	this.b = 20;
}

Samsung.prototype = Object.create(Mobile.prototype);
Samsung.prototype.constructor = Samsung;
Samsung.prototype.childMethod = function(){
	console.log("childMethod");
}

var s1 = new Samsung();
console.log(s1.a);
s1.childMethod();
s1.myMethod();

var Employee = function(name){
	this.name = name;
}

Employee.prototype.getName = function(){
	return this.name;
}

var PermanentEmployee = function(salary){
	this.salary = salary;
}

var e1 = new Employee("testemployee");

PermanentEmployee.prototype = e1;

PermanentEmployee.prototype.getSalary = function(){
	return this.salary;
}
PermanentEmployee.prototype.getName = function(){
	return "PermanentEmployee";
}
var p1 = new PermanentEmployee(10);

console.log(p1.getName());
console.log(p1.getSalary());
console.log(p1.hasOwnProperty('getName'));
console.log(p1.hasOwnProperty('getName'));
console.log(p1.hasOwnProperty('name'));
console.log(e1.hasOwnProperty('name'));
console.dir(p1);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype