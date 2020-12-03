//Todo: only when user edits, edit revised time


let noteArr = [];

document.addEventListener("DOMContentLoaded", function(event) {
  //do work
  console.log("heey");
  document.getElementById("textarea").focus();
  document.getElementById("time").innerHTML = new Date();

  document.execCommand("styleWithCSS", false, null);

  createNote();
  // noteArr.push({ revisedTime: new Date(), text: "", id: 0 });
});

// Hover text editing buttons when text selected
let textarea = document.getElementById("textarea");
let form = document.getElementById("form");

textarea.addEventListener("mouseup", function(e) {
  // console.log(window.getSelection().toString());
  if (window.getSelection().toString() !== "") {
    let fontSize = window
      .getComputedStyle(window.getSelection().anchorNode.parentElement, null)
      .getPropertyValue("font-size");
    fontSize = fontSize.replace("px", "");
    let top =
      window
        .getSelection()
        .getRangeAt(0)
        .getBoundingClientRect().top -
      fontSize -
      20;
    let left =
      window
        .getSelection()
        .getRangeAt(0)
        .getBoundingClientRect().left - 200;
    form.classList.replace("disappear", "appear");
    form.style.top = top + "px";
    form.style.left = left + "px";
  } else {
    if (form.classList.value === "appear") {
      form.classList.replace("appear", "disappear");
    }
  }
});

// Save the current text
function saveText () {
  let currentNote = document.getElementsByClassName("active note")[0];
  let currentText = document.getElementById("textarea").innerHTML;
  noteArr[currentNote.id].text = currentText;
  // noteArr[currentNote.id].revisedTime = new Date();
}

// Create a new file

let createNewFileButton = document.getElementById("new");
createNewFileButton.addEventListener("click", function(e) {
  e.preventDefault();
  saveText();

  // if the last note is not empty, create a new note
  if (noteArr[noteArr.length-1].text !== "") {
    createNote();
  }
});

// create a new post
function createNote() {
  let currentNotes = document.getElementById("notelist-list").childNodes;
  console.log(document.getElementById("notelist-list").childNodes);
  for (let note of currentNotes) {
    console.log(note);
    if (note.classList.contains('active')) note.classList.replace('active', 'inactive');
    else note.classList.add('inactive');
  }

  let newNote = document.createElement("div");
  newNote.classList.add("note");
  newNote.classList.add("active");
  newNote.id = `${noteArr.length}`;
  newNote.innerHTML = "New note";
  document.getElementById("notelist-list").appendChild(newNote);

  noteArr.push({ revisedTime: new Date(), text: "", id: noteArr.length });
  document.getElementById("textarea").innerHTML = "";
}

// when a note is clicked, display in the textarea
window.onclick = e => {
  console.log(e.target.className);
  let clickedNote = e.target;

  if (clickedNote.classList.contains("note")) {
    saveText();

    for (let sibling of clickedNote.parentNode.childNodes) {
      if (sibling.classList.contains("active")) {
        sibling.classList.replace("active", "inactive");
      } else {
        sibling.classList.add("inactive");
      }
    }

    if (clickedNote.classList.contains("inactive")) {
      clickedNote.classList.replace("inactive", "active");
    } else {
      clickedNote.classList.add("active");
    }

    let currentText = document.getElementById('textarea');
    currentText.innerHTML = noteArr[e.target.id].text;
    // let currentTextTime = document.getElementById('time');
    // currentTextTime.innerHTML = noteArr[e.target.id].revisedTime;
    console.log("??")
  }
}

// Text Editing Buttons

let boldBtn = document.getElementById("bold");
boldBtn.addEventListener("click", function(e) {
  e.preventDefault();
  document.execCommand("bold", false, null);
  form.classList.replace("appear", "disappear");
});

let italicBtn = document.getElementById("italic");
italicBtn.addEventListener("click", function(e) {
  e.preventDefault();
  document.execCommand("italic", false, null);
  form.classList.replace("appear", "disappear");
});

let underlineBtn = document.getElementById("underline");
underlineBtn.addEventListener("click", function(e) {
  e.preventDefault();
  document.execCommand("underline", false, null);
  form.classList.replace("appear", "disappear");
});

let strikeThroughBtn = document.getElementById("strikeThrough");
strikeThroughBtn.addEventListener("click", function(e) {
  e.preventDefault();
  document.execCommand("strikeThrough", false, null);
  form.classList.replace("appear", "disappear");
});

let justifyFullBtn = document.getElementById("justifyFull");
justifyFullBtn.addEventListener("click", function(e) {
  e.preventDefault();
  document.execCommand("justifyFull", false, null);
  form.classList.replace("appear", "disappear");
});

let justifyLeftBtn = document.getElementById("justifyLeft");
justifyLeftBtn.addEventListener("click", function(e) {
  e.preventDefault();
  document.execCommand("justifyLeft", false, null);
  form.classList.replace("appear", "disappear");
});

let justifyCenterBtn = document.getElementById("justifyCenter");
justifyCenterBtn.addEventListener("click", function(e) {
  e.preventDefault();
  document.execCommand("justifyCenter", false, null);
  form.classList.replace("appear", "disappear");
});

let justifyRightBtn = document.getElementById("justifyRight");
justifyRightBtn.addEventListener("click", function(e) {
  e.preventDefault();
  document.execCommand("justifyRight", false, null);
  form.classList.replace("appear", "disappear");
});

let insertOrderedListBtn = document.getElementById("insertOrderedList");
insertOrderedListBtn.addEventListener("click", function(e) {
  e.preventDefault();
  document.execCommand("insertOrderedList", false, null);
  form.classList.replace("appear", "disappear");
});

let insertUnorderedListBtn = document.getElementById("insertUnorderedList");
insertUnorderedList.addEventListener("click", function(e) {
  e.preventDefault();
  document.execCommand("insertUnorderedList", false, null);
  form.classList.replace("appear", "disappear");
});
