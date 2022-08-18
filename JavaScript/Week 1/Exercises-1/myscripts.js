//Inserting an image as the background of the webpage

document.querySelector('body').style.backgroundImage = "url('pictureBackground.jpg')"


// Function changeMe() will change the background color of the h1 heading element, as well as the text color itself
function changeMe() {
    document.querySelector('h1').style.backgroundColor = 'darkblue';
    document.querySelector('h1').style.color = 'lightgreen';
    console.log('Coding is AWESOME!!!');
}

// Function changeMeToo() will just change the text color of the h1 heading element
function changeMeToo() {
    document.querySelector('h2').style.color = 'darkblue';
    console.log('Okay I just had too much fun with this...')
}