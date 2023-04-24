const arr = [12,14,18,25,42,300,568]

function foo(number) {
	const i = arr.findIndex(elem => elem > number);
	arr.splice(i, 0, number)
}

foo(59)
foo(18)
 console.log(arr)