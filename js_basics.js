
console.log("\n How to create object?")
var a = { 
	text: 'some text', 
	print: function(){ 
		console.log('this.text: ',this.text) 
	}
}
a.print()
console.log('a: ',a)


console.log("\n Object-Functional oriented language?")
var b = function() {
	console.log('function b called')
}

b.setText = function() {
  b.text = 'ok another boring text...';
}
b()
console.log('b.setText:',b.setText);
console.log('b.text before setText call: ',b.text);
b.setText()
console.log('c.text after setText call: ',b.text)

console.log("\n OK, so how to do inheritance?")

var B = function() {
  this.setText = function() {
    this.text = 'nice text';
  }
}
B.prototype = a
var d = new B()
d.print()
d.setText()
d.print()



console.log("\n OK, inheritance looks strange, but what it gives me?")
delete a.print
console.log('d.print: ',d.print)

a.print = function() {
	console.log('That\'s awsome!')
}
d.print()
