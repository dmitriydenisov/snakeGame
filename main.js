const canvas  = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = 500
canvas.height = 500

const param = {
    x: 10,
    y: 10,
    width: 50,
    height: 50,
    fiiiColor:"green"
}



//регистрация функции к следующему моменту обновлению монитоара
requestAnimationFrame(loop)


function loop (timestamp){
    //зацикливание вызова функции
    requestAnimationFrame(loop)
    
    clearCanvas()

    param.x += 1
    param.y += 1

    drawRect(param)
}