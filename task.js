let inputText = document.querySelector("#input_text")
let addButton = document.querySelector("#add_button")
let taskList = document.querySelector("#task_list")
inputText.addEventListener("keyup", function(event){
    if(event.key == "Enter")
    {      
        addTask(this.value)
        this.value = ""
    }
});
addButton.addEventListener('click', function(){
    var listItem = document.createElement('li')
    // if (inputText=="")
    // {
    //     alert("Please add a task")
    // } 
    // else
    // {
        addTask(inputText.value)
        inputText.value = ""
    // }              
})
let addTask = (inputText) => {
    let listItem = document.createElement("li")
    if (inputText=="")
    {
        alert("Please add a task")
    } 
    else
    {
        listItem.innerHTML = `${inputText} <i class="fa-solid fa-trash"></i> <div id='tick'> <i class="fa-solid fa-check"></i> </div> `;
        listItem.addEventListener("click", function(){
        this.classList.toggle("done");
        })
        listItem.querySelector("i").addEventListener("click", function(){
        listItem.remove()
        })
    taskList.appendChild(listItem)
    }
}








// const item = document.querySelector("#item")
// const toDoBox = document.querySelector("#to-do-box")

// item.addEventListener(
//     "keyup",
//     function(event) {
//         if (event.key == "Enter") {
//             addToDo(this.value)
//             this.value = ""
//         }
//     }
// )

// const addToDo = (item) => {
//     const listItem = document.createElement("li");
//     listItem.innerHTML = `
//          ${item}
//         <i class="fas fa-times"></i>
//     `;

//     listItem.addEventListener(
//         "click",
//         function() {
//             this.classList.toggle("done");
//         }
//     )
//     listItem.querySelector("i").addEventListener(
//         "click",
//         function() {
//             listItem.remove()
//         }
//     )
//     toDoBox.appendChild(listItem)
// }