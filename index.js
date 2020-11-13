document.execCommand('styleWithCSS', false, null);

let boldBtn = document.getElementById('bold');
boldBtn.addEventListener('click', function(e) {
    e.preventDefault();
    document.execCommand('bold', false, null);
})

let italicBtn = document.getElementById('italic');
italicBtn.addEventListener('click', function(e) {
    e.preventDefault();
    document.execCommand('italic', false, null);
})

let underlineBtn = document.getElementById('underline');
underlineBtn.addEventListener('click', function(e) {
    e.preventDefault();
    document.execCommand('underline', false, null);
})

let strikeThroughBtn = document.getElementById('strikeThrough');
strikeThroughBtn.addEventListener('click', function(e) {
    e.preventDefault();
    document.execCommand('strikeThrough', false, null);
})

let justifyFullBtn = document.getElementById('justifyFull');
justifyFullBtn.addEventListener('click', function(e) {
    e.preventDefault();
    document.execCommand('justifyFull', false, null);
})

let justifyLeftBtn = document.getElementById('justifyLeft');
justifyLeftBtn.addEventListener('click', function(e) {
    e.preventDefault();
    document.execCommand('justifyLeft', false, null);
})

let justifyRightBtn = document.getElementById('justifyRight');
justifyRightBtn.addEventListener('click', function(e) {
    e.preventDefault();
    document.execCommand('justifyRight', false, null);
})