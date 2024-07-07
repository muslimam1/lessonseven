let elForm = document.querySelector('.form')
let elList = document.querySelector('.list')
let allCount = document.querySelector('all-count')
let complatedCount = document.querySelector('complated-count')
let unComplatedCount = document.querySelector('uncomplated-count')

let todos = []

elForm.addEventListener('submit', function(e){
    e.preventDefault()
    console.log();
    const data = {
        id:todos.length+1,
        value:e.target[0].value,
        isComplated:false
    }
    todos.push(data)
    renderTodos(todos, elList)
    e.target.reset()
})


function renderTodos(arr,list){
    list.innerHTML = ""
    arr.forEach((item, index) => {
        let elItem = document.createElement('li')

        elItem.className = `flex items-center relative justify-between ${item.isComplated ? 'before:w-full before:h-[2px] before:bg-black before:absolute before:top-0 before:bottom-0 before:my-auto opacity-50' : ''}`
        elItem.innerHTML = `
            <div>
                <span class="font-bold text-[20px] text-slate-500">${index+1}</span>
                <span class="font-bold text-[22px]">${item.value}</span>
            </div>
            <div class="flex items-center gap-5">
                <input onclick{changeCheckbox(${item.id})} type="checkbox" class="form-checkbox ">
                <button class="todo-update bg-green-500 text-white hover:opacity-50 duration-300   font-semibold p-3 rounded-lg">Update</button>
                <button onclick={todoBtnsWrapperClick(${item.id})} class="todo-delete bg-red-500 text-white   hover:opacity-50 duration-300 font-semibold p-3 rounded-lg">Delete</button>
            </div>
        `

        list.appendChild(elItem)
    });
    allCount.textContent = todos.length
}


function todoBtnsWrapperClick(id) {
    const findIndex = todos.findIndex(item => item.id == id)
    todos.splice(findIndex, 1)
    console.log(todos);
    renderTodos(todos, elListist)
}


function changeCheckbox(id){
    const findedObj = todos.find(item => item.id == id)
    findedObj.isComplated = !findedObj.isComplated
    renderTodos(todos, elListist)

}