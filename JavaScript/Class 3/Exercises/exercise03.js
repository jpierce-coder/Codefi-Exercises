const object1 = {
	name: "John",
	age: "28",
	job: "IT Analyst",
};

function splitArray() {
	let keys = Object.keys(object1);
	let value1 = Object.values(object1);

	keys.sort();
	value1.sort();

	console.log(keys);
	console.log(value1);
}

splitArray();
