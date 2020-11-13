// if (window.getSelection) {
//     userSelection = window.getSelection.toString();
//     console.log(userSelection);
// }

// let boldBtn = document.getElementById('bold');
// boldBtn.addEventListener('click', function(e) {
//     e.preventDefault();
//     if (window.getSelection) {
//         var allText = document.getElementById('text').innerHTML;
//         console.log(allText);
//         var selection = window.getSelection();
//         var selectionText = selection.toString();
//         userRange = selection.getRangeAt(0);
//         userRange.deleteContents();
//         let edited = selectionText.replace(selectionText, `<span><strong>${selectionText}</strong><span>`);
//         userRange.insertNode(document.createTextNode(edited));
//         // console.log(edited);
//     } else return;
// })

text_frame.document.designMode = "On";

// const buttons = document.querySelectorAll("button");

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", e => {
//     e.preventDefault();
//     let command = buttons[i].getAttribute("data-cmd");
//     console.log(command);
//     if (command === "bold") {
//         document.execCommand('bold', false, null);
//     }
//   });
// }
