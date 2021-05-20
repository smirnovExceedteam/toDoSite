let counter = 0
let arrayOfTasks = []


const img = document.getElementById("mainStrImage")
const input = document.getElementById("mainInputStr")

$(".mainContentBlock").hide()



function changeShow() {
    if (!counter) {
        $(".mainContentBlock").slideDown()
        counter = 1
        img.style.cssText = "transition-duration: 0.75s;transform: rotate(180deg)"
    } else {
        $(".mainContentBlock").slideUp()
        counter = 0
        img.style.cssText = ";transition-duration: 0.75s;transform: rotate(0deg)"
    }
}
function clearInput() {
    if (input.value == "What needs to be done?") input.value = ""
}
function fillInputInBlur() {
    if (input.value.length == "") input.value = "What needs to be done?"
}
function updateTasks() {

    let task = `<div class="contentBlock"><input class="contentBlockCheckbox" type="checkbox"><div>${arrayOfTasks[0]}</div>`
    $(".mainContentBlock").append(task)
}
function MainInputEnterPress(event) {
    if (event.keyCode === 13) {
        arrayOfTasks.push(input.value.trim())
        input.value = ""
        updateTasks()
        arrayOfTasks.splice(0,1)
    }
}