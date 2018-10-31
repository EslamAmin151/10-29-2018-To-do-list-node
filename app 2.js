let container = document.getElementById('container')
let box = document.getElementById('tasks')
let addingButton = document.getElementById('addingButton')
let pendingTask = document.getElementById('pendingTask')
let completedTask = document.getElementById('completedTask')



function deleteButton(listItem){
  parentlist = listItem.parentElement
  parentlist.removeChild(listItem)
}


function Completed(cb) {

  if(cb.checked) {
    completedTask.appendChild(cb.parentElement)
  } else {
    pendingTask.appendChild(cb.parentElement)
    }
    console.log ('completed')


}
addingButton.addEventListener('click',function(){
let title = box.value
let newLI = document.createElement('li')
newLI.className = "createdListItem"
let taskItem =
`
    <input type='checkbox' onchange = 'Completed(this)'/>
    <label>${title}</label>
    <button onclick='removeTask(this)'>Remove</button>
  `
newLI.innerHTML = taskItem
pendingTask.appendChild(newLI)

})
