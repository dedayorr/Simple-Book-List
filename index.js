if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", render);
} else {
  render;
}

function render() {}

document.getElementById("button").addEventListener("click", () => {
   
  const title = document.getElementsByClassName("title")[0].value;
  const author = document.getElementsByClassName("author")[0].value;
  const isbn = document.getElementsByClassName("isbn")[0].value;

  if (title == ""){
    alert("FILL IN ALL THE BLANK SPACES")
    return;
  }
  if (author == ""){
    alert("FILL IN ALL THE BLANK SPACES")
    return;
  }
  if (isbn == ""){
    alert("FILL IN ALL THE BLANK SPACES")
    return;
  }
  const refreshTitle = document.getElementsByClassName("title")[0].value = "";
  const refreshAuthor = document.getElementsByClassName("author")[0].value = "";
  const refreshIsbn = document.getElementsByClassName("isbn")[0].value = "";

  addToTable(title,author,isbn)

});

function addToTable(title,author,isbn){
    // call table in memory
    // create a tr
    // create a template literal of TDs
    // set innerHTML of tr to be the TDS
    // append tr to the table

    const table = document.querySelector('table')
    const tableRow = document.createElement('tr')
    
    const tableData = `         <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="delete-btn">delete</button></td>`
    tableRow.innerHTML = tableData
    table.appendChild(tableRow)
    const removeBtn = tableRow.getElementsByClassName("delete-btn")[0]
removeBtn.addEventListener('click', removeBook)
}

function removeBook(e){
    const clickedButton = e.target.parentElement.parentElement.remove()
}













































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