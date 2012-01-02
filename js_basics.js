
console.log('How to create object?')
var a = { 
	text: 'some text', 
	print: function(){ 
		console.log('this.text: ',this.text) 
	}
}
a.print()



console.log('Object-Functional oriented language?')
var b = function() {
	this.setText = function() {
		this.text = 'ok another boring text...';
	}
	return this;
}
var c = b()
c.setText()
console.log('c.text: ',c.text)
console.log('a: ',a)
console.log('b: ',b)



console.log('OK, so how to do inheritance?')
b.prototype = a
var d = new b()
d.print()
d.setText()
d.print()
console.log('c.print: ',c.print)



console.log('OK, inheritance looks strange, but what it gives me?')
delete a.print
console.log('d.print: ',d.print)

a.print = function() {
	console.log('That\'s awsome!')
}
d.print()
