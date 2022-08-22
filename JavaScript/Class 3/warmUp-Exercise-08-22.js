function isInteger(num) {
    if (Number.isInteger(num)) {
        console.log('The number is an integer!');
    } else {
        console.log('The number is NOT an integer!');
    }
};

isInteger(23.4);



// Below is a return function

function calcArea(width, height) {
    let result = width * height;

    return result;
};