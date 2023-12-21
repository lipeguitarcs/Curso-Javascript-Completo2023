function Task(name){
    "use strict"
    if (this === undefined) return
    let _name = name

    this.name = name
    this.createdAt = new Date()
    this.updatedAt = null
    this.changeName = function(newName){
        if(newName){
            _name = newName
            this.updatedAt = new Date()
        }
    }
    this.getName = function(){
        return _name
    }
}

const task1 = new Task("Minha tarefa")
task1.changeName("Minha tarefa atualizada")

const task2 = new Task("Minha segunda tarefa")

console.log(task1.getName())

task1.changeName("lalala")
console.log(task1.getName())
console.log(task1)

console.log(task2)