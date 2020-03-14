const canvas  = document.querySelector('canvas')
const context = canvas.getContext('2d')

drawRect({
    x: 10,
    y: 10,
    width: 50,
    height: 50,
    fiiiColor:"green"
})

function drawRect (param){
    context.beginPath()
    context.rect(param.x, param.y, param.width, param.height)
    context.fillStyle= param.fiiiColor
    context.fill()
}