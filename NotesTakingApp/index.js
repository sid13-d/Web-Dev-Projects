//if user adds a note, add it to the localstorage

let addBtn = document.getElementById('addBtn');
let note = document.getElementById('notes');
let notes = localStorage.getItem("notes");
let deleteAllBtn = document.getElementById('deleteAllBtn');
card();
addBtn.addEventListener('click', function(e) {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");
    let addtitle = document.getElementById('addTitle');
    let title = localStorage.getItem("title");
    if(title == null) {
        titleObj = [];

    } else {
        titleObj = JSON.parse(title);
    }
        titleObj.push(addtitle.value);
        localStorage.setItem("title", JSON.stringify(titleObj));
        addtitle.value = "";
    if(notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    
    card();
})

function card () { 
    let notes = localStorage.getItem("notes");
    let title = localStorage.getItem("title");
    if(notes == null && title == null) {
        notesObj = [];
        titleObj = [];
    } else {
        notesObj = JSON.parse(notes);
        titleObj = JSON.parse(title);
    }

    notesObj.forEach(function (element, index) {
        
    
    let html  = `
    <div class="noteCard card my-3 mx-3 shadow-lg p-3 mb-5 bg-grey rounded" style="width: 16rem;">       
    <div class="card-body ">
      <h5 class="card-title">${titlefun(index)}</h5>
      <p class="card-text">${element}</p>
      <button onclick="deleteNote(this.id)" class="btn btn-primary" id="${index}">Delete</button>
    </div>
  </div>
  
    `;
    note.insertAdjacentHTML('afterbegin', html);
});

function titlefun(index) {
    let title = localStorage.getItem("title");
    titleObj = JSON.parse(title);
    console.log(titleObj[index]);
    return titleObj[index];
}

}

function deleteNote(e) {
   
   let deleteDiv = document.getElementById(e);
   
   deleteDiv.parentNode.parentNode.remove();
   let notes = localStorage.getItem("notes");
    if(notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

//    let notesObj = JSON.parse("notes");

notesObj.splice(e, 1);
localStorage.setItem("notes", JSON.stringify(notesObj));
  
}

let searchTxt = document.getElementById('searchTxt');
searchTxt.addEventListener("input", function() {
    let inputTxt = searchTxt.value.toLowerCase();
    
    let noteCard = document.getElementsByClassName('noteCard');
    Array.from(noteCard).forEach(function (element){
        
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(inputTxt.includes(cardTxt)){
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
        
    })
})

deleteAllBtn.addEventListener('click', function(){
    localStorage.clear();
})