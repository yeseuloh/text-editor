document.getElementById("time").innerHTML = new Date();
document.execCommand('styleWithCSS', false, null);

console.log(window.getSelection().toString());

let textarea = document.getElementById('textarea');
let form = document.getElementById('form');


textarea.addEventListener('mouseup', function(e) {
    if (window.getSelection().toString() !== "") {
        form.classList.replace('disappear', 'appear');
    }
})

let boldBtn = document.getElementById('bold');
boldBtn.addEventListener('click', function(e) {
    e.preventDefault();
    document.execCommand('bold', false, null);
    form.classList.replace('appear', 'disappear');
})

let italicBtn = document.getElementById('italic');
italicBtn.addEventListener('click', function(e) {
    e.preventDefault();
    document.execCommand('italic', false, null);
    form.classList.replace('appear', 'disappear');
})

let underlineBtn = document.getElementById('underline');
underlineBtn.addEventListener('click', function(e) {
    e.preventDefault();
    document.execCommand('underline', false, null);
    form.classList.replace('appear', 'disappear');
})

let strikeThroughBtn = document.getElementById('strikeThrough');
strikeThroughBtn.addEventListener('click', function(e) {
    e.preventDefault();
    document.execCommand('strikeThrough', false, null);
    form.classList.replace('appear', 'disappear');
})

let justifyFullBtn = document.getElementById('justifyFull');
justifyFullBtn.addEventListener('click', function(e) {
    e.preventDefault();
    document.execCommand('justifyFull', false, null);
    form.classList.replace('appear', 'disappear');
})

let justifyLeftBtn = document.getElementById('justifyLeft');
justifyLeftBtn.addEventListener('click', function(e) {
    e.preventDefault();
    document.execCommand('justifyLeft', false, null);
    form.classList.replace('appear', 'disappear');
})

let justifyRightBtn = document.getElementById('justifyRight');
justifyRightBtn.addEventListener('click', function(e) {
    e.preventDefault();
    document.execCommand('justifyRight', false, null);
    form.classList.replace('appear', 'disappear');
})

let insertOrderedListBtn = document.getElementById('insertOrderedList');
insertOrderedListBtn.addEventListener('click', function(e) {
    e.preventDefault();
    document.execCommand('insertOrderedList', false, null);
    form.classList.replace('appear', 'disappear');
})

let insertUnorderedListBtn = document.getElementById('insertUnorderedList');
insertUnorderedList.addEventListener('click', function(e) {
    e.preventDefault();
    document.execCommand('insertUnorderedList', false, null);
    form.classList.replace('appear', 'disappear');
})

