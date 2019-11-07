document.addEventListener("DOMContentLoaded", () => {
    console.log("%cThe project is ready", "color:red;")
})

class Project {
    constructor() {
        this.name = "Cool Project"
    }
}

console.log(new Project())
document.body.style.backgroundColor = 'red'

