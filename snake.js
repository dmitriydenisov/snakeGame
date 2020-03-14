
function drawRect (param){
    context.beginPath()
    context.rect(param.x, param.y, param.width, param.height)
    context.fillStyle= param.fiiiColor
    context.fill()
}

//функция очистки Canvas перед созданием нового квадрата
function clearCanvas () {
    context.clearRect(0, 0, canvas.width, canvas.height)
}

//в функцию creatGameMap передаются два элемента  columns и rows
function creatGameMap (columns, rows) {
    const map = []

    for ( x = 0; x < columns; x++){
        const row = []

        for (let y = 0; y < rows; i++){
            row.push({})
        }
        map.push(row)
    }
    return map

}