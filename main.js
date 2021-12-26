const design = getComputedStyle(document.body)

const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')
const divset = document.querySelector('.divset')



function criaDiv() {
    const div = document.createElement('div')
    const divset = div.setAttribute('class', 'divset')
    return div
    
}



function limparInput() {
    inputTarefa.value = ''
    inputTarefa.focus()
}



function criaTarefa(textoInput) {
    const div = criaDiv()
    div.innerText = textoInput
    tarefas.appendChild(div)
    deleteButton(div)
    saveTask()
    limparInput()

}



inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return
        criaTarefa(inputTarefa.value)
        


    }


})



function deleteButton(div) {
    div.innerHTML
    const botaoApagar = document.createElement('button')
    botaoApagar.innerHTML = 'Concluir'
    botaoApagar.setAttribute('class', 'delete')
    div.appendChild(botaoApagar)
}


    document.addEventListener('click', function (e) {
        const el = e.target
        if (!inputTarefa.value) return
        if (el.classList.contains('btn-tarefa')) {
            criaTarefa(inputTarefa.value)
        }
        
        limparInput()   
    })


document.addEventListener('click', function (e) {
    const el = e.target
   if ( el.classList.contains('delete')) {
       el.parentElement.remove()
       saveTask()
   }
})



function saveTask() {
    const divCreated = tarefas.querySelectorAll('.divset')
        
        const taskList = []
    
        for (let task of divCreated) {
            var taskText = task.innerText.replace('Concluir', '').trim()
            taskList.push(taskText)
        }
        const taskJSON = JSON.stringify(taskList)
        localStorage.setItem('tasks', taskJSON)

        
}   



function addSavedTasks() {
    const tasks = localStorage.getItem('tasks')
    const listTask = JSON.parse(tasks)
    for(let task of listTask) {
        criaTarefa(task)
    }
}



addSavedTasks()


