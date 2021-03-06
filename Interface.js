var myNotes = new MyNotes();

function createNoteOnClick() {
  var noteDescription = document.getElementById("a_note").value;
  createNote(noteDescription);
}

function createNote(description) {
  myNotes.createNote(description);
}

function displayAddNoteForm() {
  var addNoteHTMLContent= '<input id="a_note"><button id="submit_button" type="button" onclick="createNoteOnClick()">Create</button>'
  document.getElementById("add_note").innerHTML = addNoteHTMLContent;
}

function displayListOfNotes() {
  var listOfNotes = "<div><ul>";
  myNotes.listNotes().forEach(function(note) {
    listOfNotes += "<li>" + note.message + "</li>";
  })
  listOfNotes += "</ul></div>";
  document.getElementById("list_of_notes").innerHTML = listOfNotes;
}
