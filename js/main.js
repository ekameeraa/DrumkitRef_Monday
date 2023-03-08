// drum kit: press a key to play the sound. use JavaScript to retrieve the data-key attribute and then use that as a selector to find the matching audio file and play it!
console.log('music player script file');
    
//listen for keyboard events happening int he browser window
window.addEventListener('keyup', findMatchingAudio);

function findMatchingAudio(event) {
    // debugger;
    // try to find the matching audio element using the keycode that we get from the event object

    // find the matching div (the visual element on the screen) and animate that as well (add a bit of UX)
    let targetAudio = document.querySelector(`audio[data-key="${event.keyCode}"]`),
        targetDiv = document.querySelector(`div[data-key="${event.keyCode}"]`);

    //const allKeys = document.querySelectorAll('.key');

    // the ! operator checks for a negative condition (it's the NOT operator)
    if (!targetAudio) { return; } //no point in running JS if there's no audio element to play

    targetAudio.currenTime = 0;
    targetAudio.play();

    //animate the div that matches (border, drop shadow etc)
    targetDiv.classList.add('playing');

    // data-key="65"
}

document.querySelectorAll('.key').forEach(key => key.addEventListener('transitioned', resetKey));