
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

        for (let y = 0; y < rows; y++){
            row.push({
                x: x,
                y: y,
                snake: false,
                food: false
            })
        }
        map.push(row)
    }
    return map
}

function getRandomFreeCell () {
    const freeCells = []

    //проходим по всем элементам массива
    for ( const cell of map.flat() ) {
        //если в клетке есть змаея или еда, то мы прерывам выполнение цикла
        if (cell.snake || cell.food) {
            continue
        }
        // если при прохождении цикла мы получаем cell.snake = false и cell.food = false то мы получаем пустую ячейку  
        freeCells.push(cell)
    }

    const index = Math.floor(Math.random() * freeCells.length)
    return freeCells[index]
}