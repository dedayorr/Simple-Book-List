
document.getElementById("button").addEventListener("click", () => {
  const title = document.getElementsByClassName("title")[0].value;
  const author = document.getElementsByClassName("author")[0].value;
  const isbn = document.getElementsByClassName("isbn")[0].value;
  const text = document.getElementsByTagName("p")[0];
  const added = document.getElementById('added')
 
  if (title == "") {
    text.classList.add("error");
    text.textContent = "Fill in the blank spaces";
    function erase(){
      text.classList.remove("error");
      text.textContent = ""
  }
  setTimeout(erase, 6000)
    return;
  } else {
    text.classList.remove("error");
    text.textContent = "";
  }

  if (author == "") {
    text.classList.add("error");
    text.textContent = "Fill in the blank spaces";
    return;
  }else {
    text.classList.remove("error");
    text.textContent = "";
  }

  if (isbn == "") {
    text.classList.add("error");
    text.textContent = "Fill in the blank spaces";
    return;
  }else {
    text.classList.remove("error");
    text.textContent = "";
  }

  const refreshTitle = (document.getElementsByClassName("title")[0].value = "");
  const refreshAuthor = (document.getElementsByClassName("author")[0].value =
    "");
  const refreshIsbn = (document.getElementsByClassName("isbn")[0].value = "");
 
  addToTable(title, author, isbn);

  if (title == title || author == author || isbn == isbn) {
    added.style.display = "block";

    function clear(){
        added.style.display = "";
    }
    setTimeout(clear, 2000)
  }

 
});

function addToTable(title, author, isbn) {
  // call table in memory
  // create a tr
  // create a template literal of TDs
  // set innerHTML of tr to be the TDS
  // append tr to the table

  const table = document.querySelector("table");
  const tableRow = document.createElement("tr");

  const tableData = `         <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="delete-btn">delete</button></td>`;
  tableRow.innerHTML = tableData;
  table.appendChild(tableRow);
  const removeBtn = tableRow.getElementsByClassName("delete-btn")[0];
  removeBtn.addEventListener("click", removeBook);
}

function removeBook(e) {
  const decision = confirm("Are you sure you want to remove?");
  if (!decision) {
    return;
  }
  const clickedButton = e.target.parentElement.parentElement.remove();
}

// DARK MODE TOGGLE
const darkModebtn = document.getElementsByClassName('icon')[0]
const body = document.body
const textOne = document.getElementById("text-one")

const modeStatus = JSON.parse(localStorage.getItem("darkMode"))
if(modeStatus == "dark"){
  body.classList.add('dark-mode') 
}

darkModebtn.addEventListener('click', ()=>{
body.classList.toggle('dark-mode')
if(body.classList.contains('dark-mode')){
  localStorage.setItem("darkMode", JSON.stringify("dark"))
}else{
  localStorage.setItem("darkMode", JSON.stringify("light"))
}

})



















































// let allInput = [];
//   allInput.push({
//     title: title,
//     author: author,
//     Isbn: isbn,
//   });
//   let storeInputValues = JSON.stringify(allInput)
// localStorage.setItem('Input Value', storeInputValues)
// console.log(storeInputValues)
//   console.log(allInput)
// const getInput = JSON.parse(localStorage.getItem("Input Value"))

// const removeButton = document.getElementsByClassName('delete-btn')
// for (let i = 0; i<removeButton.length; i++){
//   const button = removeButton[i]
//   button.addEventListener('click', removeBook)
// }
// console.log(removeButton)
