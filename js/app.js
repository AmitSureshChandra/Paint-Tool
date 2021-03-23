let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d')
let boundings = canvas.getBoundingClientRect();


let mouseX = 0
let mouseY = 0


window.onload = ()=>{

    context.strokeStyle = "black"
    context.lineWidth = 1
    let isDrawing = false

    context.strokeStyle = event.target.value ?? "black"

    // document.querySelector('.colors-container').addEventListener('click',(event) => {
    //     context.strokeStyle = event.target.value ?? "black"
    // })

    canvas.addEventListener('mousedown',event => {
        setMouseCoordinate(event)
        isDrawing = true
        context.beginPath()
        context.moveTo(mouseX,mouseY)
    })

    canvas.addEventListener('mousemove',event => {
        setMouseCoordinate(event)
        if (isDrawing){
            context.lineTo(mouseX,mouseY)
            context.stroke()
        }
    })

    canvas.addEventListener('mouseup',event => {
        setMouseCoordinate(event)
        isDrawing= false
    })

    let setMouseCoordinate = (event) => {
        mouseX = event.clientX - boundings.left
        mouseY = event.clientY - boundings.top
    }
}